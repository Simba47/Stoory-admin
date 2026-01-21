import { useEffect, useState } from "react";

const API_URL = "https://stoory-backend-e41q.onrender.com/api/applications";

export default function Admin() {
  const [applications, setApplications] = useState([]);

  // Fetch data
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setApplications(data))
      .catch(err => console.error(err));
  }, []);

  // Toggle contacted (ONLY ONE ROW)
  const toggleContacted = async (id, currentValue) => {
    try {
      await fetch(`${API_URL}/${id}/contacted`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contacted: !currentValue }),
      });

      // ✅ Update only clicked row in state
      setApplications(prev =>
        prev.map(app =>
          app._id === id
            ? { ...app, contacted: !currentValue }
            : app
        )
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Admin Panel</h2>

      <table border="1" cellPadding="6">
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Location</th>
            <th>Price</th>
            <th>Contacted</th>
            <th>Notes</th>
          </tr>
        </thead>

        <tbody>
          {applications.map(app => (
            <tr key={app._id}>
              <td>{app.name || "-"}</td>
              <td>{app.company || "-"}</td>
              <td>{app.location || "-"}</td>
              <td>{app.price || "-"}</td>

              {/* ✅ FIXED CHECKBOX */}
              <td style={{ textAlign: "center" }}>
                <input
                  type="checkbox"
                  checked={app.contacted || false}
                  onChange={() =>
                    toggleContacted(app._id, app.contacted)
                  }
                />
              </td>

              <td>
                <input
                  type="text"
                  placeholder="Add note..."
                  defaultValue={app.notes || ""}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
