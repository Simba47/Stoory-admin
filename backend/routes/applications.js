router.get("/export", async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT id, role, name, mobile, email
       FROM applications
       ORDER BY id DESC`
    );

    const ExcelJS = require("exceljs");
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Applications");

    sheet.columns = [
      { header: "ID", key: "id", width: 10 },
      { header: "Role", key: "role", width: 15 },
      { header: "Name", key: "name", width: 20 },
      { header: "Mobile", key: "mobile", width: 15 },
      { header: "Email", key: "email", width: 30 }
    ];

    sheet.addRows(result.rows);

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=applications.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();
  } catch (err) {
    console.error("Export error:", err);
    res.status(500).json({ message: "Export failed" });
  }
});
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=applications.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();
  } catch (err) {
    console.error("Export error:", err.message);
    res.status(500).json({ message: "Export failed" });
  }
});

module.exports = router;
