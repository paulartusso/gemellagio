require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// MySQL Database Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

//get all jobs
app.get('/api/jobs', (req, res) => {
  const query = `
    SELECT j.id, j.role, j.seniority, j.company, j.location, j.contract_type, j.description, j.ral,
           GROUP_CONCAT(DISTINCT f.name ORDER BY f.name ASC) AS frontend_tech,
           GROUP_CONCAT(DISTINCT b.name ORDER BY b.name ASC) AS backend_tech,
           GROUP_CONCAT(DISTINCT d.name ORDER BY d.name ASC) AS db_tech,
           GROUP_CONCAT(DISTINCT o.name ORDER BY o.name ASC) AS devops_tech
    FROM jobs j
    LEFT JOIN frontend_requirements f ON j.id = f.job_id
    LEFT JOIN backend_requirements b ON j.id = b.job_id
    LEFT JOIN db_requirements d ON j.id = d.job_id
    LEFT JOIN devops_requirements o ON j.id = o.job_id
    GROUP BY j.id;
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching jobs:', err);
      res.status(500).send('Error fetching jobs');
      return;
    }

    //transform the result into an array
    const jobs = results.map(job => ({
      ...job,
      frontend_tech: job.frontend_tech ? job.frontend_tech.split(',') : [],
      backend_tech: job.backend_tech ? job.backend_tech.split(',') : [],
      db_tech: job.db_tech ? job.db_tech.split(',') : [],
      devops_tech: job.devops_tech ? job.devops_tech.split(',') : [],
    }));

    res.json(jobs);
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
