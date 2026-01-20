import React, { useState } from "react";

const API_URL = "https://stoory-backend-e41q.onrender.com";

export default function Apply() {
  const [form, setForm] = useState({
    role: "brand",
    name: "",
    mobile: "",
    email: "",
    insta_id: "",
    company_name: "",
    location: "",
    price: "",
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
        role: "brand",
        name: "",
        mobile: "",
        email: "",
        insta_id: "",
        company_name: "",
        location: "",
        price: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("❌ Server error");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Join as {form.role === "brand" ? "Brand" : "Influencer"}</h1>

      <form onSubmit={submitForm}>
        <select name="role" value={form.role} onChange={handleChange}>
          <option value="influencer">Influencer</option>
          <option value="brand">Brand</option>
        </select>
        <br /><br />

        <input name="name" placeholder="Full Name"
          value={form.name} onChange={handleChange} required />
        <br /><br />

        <input name="mobile" placeholder="Mobile"
          value={form.mobile} onChange={handleChange} required />
        <br /><br />

        <input type="email" name="email" placeholder="Email"
          value={form.email} onChange={handleChange} required />
        <br /><br />

        {form.role === "influencer" && (
          <>
            <input name="insta_id" placeholder="Instagram ID"
              value={form.insta_id} onChange={handleChange} />
            <br /><br />
          </>
        )}

        {form.role === "brand" && (
          <>
            <input
  name="company_name"
  value={form.company_name}
  onChange={handleChange}
  placeholder="Company Name"
  required
/>

            <br /><br />
          </>
        )}

        <input name="location" placeholder="Location"
          value={form.location} onChange={handleChange} required />
        <br /><br />

        <input name="price" placeholder="Price"
          value={form.price} onChange={handleChange} required />
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      <p>{status}</p>
    </div>
  );
}
