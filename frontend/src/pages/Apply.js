import React, { useState } from "react";

export default function Apply() {
  const API_URL = "https://stoory-backend.onrender.com";

  const [form, setForm] = useState({
    role: "Influencer",
    name: "",
    dob: "",
    mobile: "",
    email: "",
    insta_id: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const res = await fetch(`${API_URL}/api/applications/apply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Submission failed");
      }

      setStatus("✅ Application submitted successfully");
      setForm({
        role: "Influencer",
        name: "",
        dob: "",
        mobile: "",
        email: "",
        insta_id: ""
      });
    } catch (err) {
      setStatus("❌ " + err.message);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", fontFamily: "Arial" }}>
      <h2>Stoory Application</h2>

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
};
