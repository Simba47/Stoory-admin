import React, { useState } from "react";

export default function Apply() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    role: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const res = await fetch(
      "https://YOUR-BACKEND.onrender.com/api/apply",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      }
    );

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="container">
      <h1>Join Stoory</h1>
      <p>Create stories. Build impact.</p>

      <form onSubmit={submitForm} className="card">
        <input name="name" placeholder="Full Name" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="mobile" placeholder="Mobile" onChange={handleChange} required />
        <input name="role" placeholder="Role you want" onChange={handleChange} required />
        <button type="submit">Apply Now</button>
      </form>
    </div>
  );
}
