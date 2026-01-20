import React, { useState } from "react";

const API_URL = "https://stoory-backend-e41q.onrender.com";

export default function Apply() {
  const [form, setForm] = useState({
    role: "Influencer",
    name: "",
    dob: "",
    mobile: "",
    email: "",
    insta_id: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const res = await fetch(`${API_URL}/api/applications/apply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Server error");
      }

      const data = await res.json();
      setStatus("✅ Application submitted successfully");

      // reset form
      setForm({
        role: "Influencer",
        name: "",
        dob: "",
        mobile: "",
        email: "",
        insta_id: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to submit (backend error)");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Stoory Application</h1>

      <form onSubmit={submitForm}>
        <select name="role" value={form.role} onChange={handleChange}>
          <option value="Influencer">Influencer</option>
          <option value="Business">Business</option>
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
          type="date"
          name="dob"
          value={form.dob}
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

        <input
          name="insta_id"
          placeholder="Instagram ID"
          value={form.insta_id}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      <p>{status}</p>
    </div>
  );
}
