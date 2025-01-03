const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');


const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const upload = multer({ dest: 'uploads/' });

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'everiencecrm@gmail.com',
    pass: 'diuc vabg typf jkoo',
  },
});

// API endpoint to handle form submissions with file upload
app.post('/api/send-email', upload.single('file'), (req, res) => {
  const { name, surname, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'everiencecrm@gmail.com',
    subject: `Nuovo messaggio da ${name} ${surname}`,
    text: message,
    attachments: req.file
      ? [
        {
          filename: req.file.originalname,
          path: req.file.path,
        },
      ]
      : [],
  };

  transporter.sendMail(mailOptions, (error, info) => {
    // Remove uploaded file after sending email
    if (req.file) fs.unlinkSync(req.file.path);

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
