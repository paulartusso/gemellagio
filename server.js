const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email provider or custom SMTP settings
  auth: {
    user: "everiencecrm@gmail.com",
    pass: "diuc vabg typf jkoo",
  },
});

// API endpoint to handle form submissions
app.post('/api/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'everiencecrm@gmail.com', // Replace with your company email
    subject: `New Contact Form Submission from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send({ error: 'Failed to send email' });
    }
    res.status(200).send({ message: 'Email sent successfully' });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
