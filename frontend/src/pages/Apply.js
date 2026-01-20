import React, { useState } from "react";

const API_URL = "https://stoory-backend-e41q.onrender.com";

export default function Apply() {
  const [form, setForm] = useState({
    role: "Influencer",
    name: "",
    mobile: "",
    email: "",
    insta_id: "",
    location: "",
    company_name: "",
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
        insta_id: "",
        location: "",
        company_name: "",
      });
    } catch (err) {
      setStatus("❌ Backend rejected request");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Stoory Application</h2>

      <form onSubmit={submitForm}>
        <select name="role" value={form.role} onChange={handleChange}>
          <option>Influencer</option>
          <option>Business</option>
        </select><br /><br />

        <input name="name" placeholder="Full Name" onChange={handleChange} required /><br /><br />
        <input name="mobile" placeholder="Mobile" onChange={handleChange} required /><br /><br />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required /><br /><br />

        <input name="insta_id" placeholder="Instagram ID" onChange={handleChange} /><br /><br />
        <input name="location" placeholder="Location" onChange={handleChange} /><br /><br />

        {form.role === "Business" && (
          <>
            <input
              name="company_name"
              placeholder="Company Name"
              onChange={handleChange}
            />
            <br /><br />
          </>
        )}

        <button type="submit">Submit</button>
      </form>

      <p>{status}</p>
    </div>
  );
}
