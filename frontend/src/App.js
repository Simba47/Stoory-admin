import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    role: "influencer",
    name: "",
    dob: "",
    mobile: "",
    email: ""
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async () => {
    try {
      const res = await fetch("https://stoory-backend.onrender.com/api/apply", {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      setMsg(data.message || "Submitted");

      setForm({
        role: "influencer",
        name: "",
        dob: "",
        mobile: "",
        email: ""
      });
    } catch (err) {
      setMsg("Backend not running ❌");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "50px auto" }}>
      <h2>Stoory Application</h2>

      <select name="role" value={form.role} onChange={handleChange}>
        <option value="influencer">Influencer</option>
        <option value="business">Business</option>
      </select>

      <br /><br />

      <input
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="date"
        name="dob"
        value={form.dob}
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="mobile"
        placeholder="Mobile Number"
        value={form.mobile}
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={submitForm}>Submit</button>

      <p>{msg}</p>
    </div>
  );
}

export default App;
