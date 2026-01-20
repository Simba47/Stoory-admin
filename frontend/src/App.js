import React, { useState } from "react";

const API_URL = "https://stoory-backend-e41q.onrender.com";

export default function Apply() {
  const [role, setRole] = useState("Influencer");

  const [form, setForm] = useState({
    role: "Influencer",
    name: "",
    mobile: "",
    email: "",
    insta_id: "",
    company_name: "",
    location: "",
    price: "",
  });

  const [status, setStatus] = useState("");

  // handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      role,
      [e.target.name]: e.target.value,
    });
  };

  // submit form
  const submitForm = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    console.log("FORM DATA BEING SENT:", form); // DEBUG (can remove later)

    try {
      const res = await fetch(`${API_URL}/api/applications/apply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      setStatus("✅ Application submitted successfully");

      // reset form
      setForm({
        role,
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
      setStatus("❌ Backend rejected request");
    }
  };

  return (
    <div style={{ padding: 20, maxWidth: 500, margin: "auto" }}>
      <h1>Stoory Application</h1>

      {/* ROLE SELECT */}
      <select
        value={role}
        onChange={(e) => {
          setRole(e.target.value);
          setForm({ ...form, role: e.target.value });
        }}
      >
        <option value="Influencer">Influencer</option>
        <option value="Brand">Brand</option>
      </select>

      <br /><br />

      <form onSubmit={submitForm}>
        {/* COMMON FIELDS */}
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          name="mobile"
          placeholder="Mobile Number"
          value={form.mobile}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
        />
        <br /><br />

        {/* INFLUENCER FIELDS */}
        {role === "Influencer" && (
          <>
            <input
              name="insta_id"
              placeholder="Instagram ID"
              value={form.insta_id}
              onChange={handleChange}
              required
            />
            <br /><br />
          </>
        )}

        {/* BRAND FIELDS */}
        {role === "Brand" && (
          <>
            <input
              name="company_name"
              placeholder="Company Name"
              value={form.company_name}
              onChange={handleChange}
              required
            />
            <br /><br />
          </>
        )}

        {/* COMMON EXTRA FIELDS */}
        <input
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          name="price"
          placeholder="Price for Promotion"
          value={form.price}
          onChange={handleChange}
          required
        />
        <br /><br />

        <button type="submit">Submit Application</button>
      </form>

      <p>{status}</p>
    </div>
  );
}
