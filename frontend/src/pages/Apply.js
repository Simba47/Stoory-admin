const submitForm = async () => {
  try {
    const res = await fetch("https://stoory-backend-e41q.onrender.com/api/apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    console.log("Response:", data); // 👈 DEBUG LOG

    if (res.ok) {
      setMsg(data.message);
    } else {
      setMsg("Server error ❌");
    }
  } catch (err) {
    console.error("Fetch error:", err);
    setMsg("Network error ❌");
  }
};
