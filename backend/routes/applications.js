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
        role: form.role,
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
      <h1>
        Join as {form.role === "brand" ? "Brand" : "Influencer"}
      </h1>

      <form onSubmit={submitForm}>
        {/* Role select */}
        <select
          name="role"
          value={form.role}
          onChange={(e) =>
            setForm({ ...form, role: e.target.value })
          }
        >
          <option value="influencer">Influencer</option>
          <option value="brand">Brand</option>
        </select>
        <br /><br />

        {/* Common fields */}
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        /><br /><br />

        <input
          name="mobile"
          placeholder="Mobile Number"
          value={form.mobile}
          onChange={handleChange}
          required
        /><br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
        /><br /><br />

        {/* Influencer-specific */}
        {form.role === "influencer" && (
          <>
            <input
              name="insta_id"
              placeholder="Instagram ID"
              value={form.insta_id}
              onChange={handleChange}
              required
            /><br /><br />
          </>
        )}

        {/* Brand-specific */}
        {form.role === "brand" && (
          <>
            <input
              name="company_name"
              placeholder="Company Name"
              value={form.company_name}
              onChange={handleChange}
              required
            /><br /><br />
          </>
        )}

        {/* Common extra fields */}
        <input
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          required
        /><br /><br />

        <input
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          required
        /><br /><br />

        <button type="submit">Submit</button>
      </form>

      <p>{status}</p>
    </div>
  );
}
