import React, { useState } from "react";

export default function Apply() {
  const API_URL = "https://stoory-backend.onrender.com";

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    role: "",
    dob: "",
    insta_id: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

   const res = await fetch(`${API_URL}/api/apply`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(form)
});


    const data = await res.json();
    alert(data.message);

    // optional: clear form after submit
    setForm({
      name: "",
      email: "",
      mobile: "",
      role: "",
      dob: "",
      insta_id: ""
    });
  };

  return (
    <div className="container">
      <h1>Join Stoory</h1>
      <p>Create stories. Build impact.</p>

      <form onSubmit={submitForm} className="card">
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          name="mobile"
          placeholder="Mobile Number"
          value={form.mobile}
          onChange={handleChange}
          required
        />

        <input
          name="role"
          placeholder="Role you want"
          value={form.role}
          onChange={handleChange}
          required
        />

        {/* NEW: DOB */}
        <input
          name="dob"
          type="date"
          value={form.dob}
          onChange={handleChange}
          required
        />

        {/* NEW: Instagram ID */}
        <input
          name="insta_id"
          placeholder="Instagram ID (without @)"
          value={form.insta_id}
          onChange={handleChange}
        />

        <button type="submit">Apply Now</button>
      </form>
    </div>
  );
}
