import { useEffect, useState } from "react";

export default function Admin() {
  const [applications, setApplications] = useState([]);

  /* Fetch applications */
  useEffect(() => {
    fetch("http://localhost:5000/api/applications")
      .then(res => res.json())
      .then(data => setApplications(data));
  }, []);

  /* Toggle contacted */
  const toggleContacted = async (id, current) => {
    const updatedValue = !current;

    await fetch(
      `http://localhost:5000/api/applications/${id}/contacted`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contacted: updatedValue }),
      }
    );

    setApplications(prev =>
      prev.map(app =>
        app._id === id
          ? { ...app, contacted: updatedValue }
          : app
      )
    );
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Admin Panel</h2>

      <table border="1" cellPadding="8" cellSpacing="0" width="100%">
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
              <td>{app.name}</td>
              <td>{app.company}</td>
              <td>{app.location}</td>
              <td>{app.price}</td>

              {/* ✅ FIXED CHECKBOX */}
              <td style={{ textAlign: "center" }}>
                <input
                  type="checkbox"
                  checked={app.contacted}
                  onChange={() =>
                    toggleContacted(app._id, app.contacted)
                  }
                />
              </td>

              <td>
                <input
                  placeholder="Add note..."
                  value={app.notes || ""}
                  readOnly
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
