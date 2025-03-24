require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sql = require("mssql");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

//require('dotenv').config({ path: '../.env' });

//console.log("DB_HOST:", process.env.DB_HOST, process.env.DB_PASSWORD);


const dbConfig = {
  user: 'adminSql',
  password: '>+e7RALX>Q??~rc',
  server: 'db-sitoweb.database.windows.net',
  database: 'hr-jobs',
  options: {
    encrypt: true,
    trustServerCertificate: false
  }
};

sql.connect(dbConfig).then(() => {
  console.log('Connected to SQL Server');
}).catch((err) => {
  console.error('Database connection failed:', err);
});


// Connect to SQL Server
sql.connect(dbConfig, (err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to SQL Server database");
});

// Get all jobs
app.get('/api/jobs', async (req, res) => {
  const query = `
    SELECT j.id, j.role, j.seniority, j.company, j.location, j.contract_type, j.description, j.ral,
       STUFF((SELECT ', ' + f.name
              FROM frontend_requirements f
              WHERE f.job_id = j.id
              FOR XML PATH('')), 1, 2, '') AS frontend_tech,
       STUFF((SELECT ', ' + b.name
              FROM backend_requirements b
              WHERE b.job_id = j.id
              FOR XML PATH('')), 1, 2, '') AS backend_tech,
       STUFF((SELECT ', ' + d.name
              FROM db_requirements d
              WHERE d.job_id = j.id
              FOR XML PATH('')), 1, 2, '') AS db_tech,
       STUFF((SELECT ', ' + o.name
              FROM devops_requirements o
              WHERE o.job_id = j.id
              FOR XML PATH('')), 1, 2, '') AS devops_tech
FROM jobs j;
 `;

  try {
    const result = await sql.query(query);
    // Transform the result into an array
    const jobs = result.recordset.map(job => ({
      ...job,
      frontend_tech: job.frontend_tech ? job.frontend_tech.split(', ') : [],
      backend_tech: job.backend_tech ? job.backend_tech.split(', ') : [],
      db_tech: job.db_tech ? job.db_tech.split(', ') : [],
      devops_tech: job.devops_tech ? job.devops_tech.split(', ') : [],
    }));

    res.json(jobs);
  } catch (err) {
    console.error('Error fetching jobs:', err);
    res.status(500).send('Error fetching jobs');
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
