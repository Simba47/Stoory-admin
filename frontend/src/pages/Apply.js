import React, { useState } from "react";

const API_URL = "https://stoory-backend-e41q.onrender.com";

export default function Apply() {
  const [form, setForm] = useState({
    role: "Influencer",
    name: "",
    mobile: "",
    email: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const res = await fetch(`${API_URL}/api/applications/apply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      setStatus("✅ Application submitted successfully");
      setForm({
        role: "Influencer",
        name: "",
        mobile: "",
        email: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("❌ Backend rejected request");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Stoory Application</h1>

      <form onSubmit={submitForm}>
        <select name="role" value={form.role} onChange={handleChange}>
          <option>Influencer</option>
          <option>Business</option>
        </select>
        <br /><br />

        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          name="mobile"
          placeholder="Mobile"
          value={form.mobile}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      <p>{status}</p>
    </div>
  );
            }
