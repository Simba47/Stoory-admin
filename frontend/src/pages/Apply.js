import { useState } from "react";

const API_URL = "https://stoory-backend.onrender.com"; 
// ⚠️ Make sure this is your REAL Render backend URL

function Apply() {
  const [form, setForm] = useState({
    role: "",
    name: "",
    dob: "",
    insta_id: "",
    mobile: "",
    email: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

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
        setMessage("❌ Submission failed");
        setLoading(false);
        return;
      }

      setMessage("✅ Application submitted successfully");

      // reset form
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
      setMessage("❌ Backend not reachable");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto" }}>
      <h2>Stoory – Application Form</h2>

      <form onSubmit={handleSubmit}>
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          required
        >
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
