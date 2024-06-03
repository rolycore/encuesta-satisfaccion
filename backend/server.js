const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
  logger: true, // Habilitar registro
});

// Función para cargar y personalizar la plantilla de correo
const getEmailTemplate = (name, message) => {
  const templatePath = path.join(__dirname, 'emailTemplate.html');
  let template = fs.readFileSync(templatePath, 'utf8');
  template = template.replace('{{name}}', name);
  template = template.replace('{{message}}', message);
  return template;
};

app.post('/send-contact', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: process.env.SMTP_EMAIL,
    to: email, // Cambia esto al correo donde quieras recibir los mensajes
    subject: 'Gracias por contactarnos - Shalom Solution Tech',
    html: getEmailTemplate(name, message),
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Correo enviado: ' + info.response);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});
