import React, { useState } from "react";

export default function Apply() {
  const API_URL = "https://e41q.onrender.com";

  const [form, setForm] = useState({
    role: "",
    name: "",
    dob: "",
    insta_id: "",
    mobile: "",
    email: ""
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

      if (!res.ok) throw new Error(data.message || "Failed");

      setStatus("Application submitted ✅");
      setForm({
        role: "",
        name: "",
        dob: "",
        insta_id: "",
        mobile: "",
        email: ""
      });
    } catch (err) {
      console.error(err);
      setStatus("Network error ❌");
    }
  };

  return (
    <form onSubmit={submitForm}>
      <h2>Stoory Application</h2>

      <select name="role" value={form.role} onChange={handleChange} required>
        <option value="">Select Role</option>
        <option value="Influencer">Influencer</option>
        <option value="Business">Business</option>
      </select>

      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input type="date" name="dob" value={form.dob} onChange={handleChange} required />
      <input name="insta_id" value={form.insta_id} onChange={handleChange} placeholder="Instagram ID" />
      <input name="mobile" value={form.mobile} onChange={handleChange} placeholder="Mobile" required />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />

      <button type="submit">Submit</button>
      <p>{status}</p>
    </form>
  );
    }
          <option value="">Select Role</option>
          <option value="Influencer">Influencer</option>
          <option value="Business">Business</option>
        </select>

        <br /><br />

        <input
          type="text"
          name="name"
          placeholder="Full Name"
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
          type="text"
          name="insta_id"
          placeholder="Instagram ID (username only)"
          value={form.insta_id}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="text"
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

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </form>

      {message && (
        <p style={{ marginTop: "20px", fontWeight: "bold" }}>
          {message}
        </p>
      )}
    </div>
  );
}

export default Apply;
