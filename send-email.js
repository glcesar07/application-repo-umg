// Instalamos y Requerimos el paquete
const nodemailer = require('nodemailer');

//Creamos el objeto de transporte
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tucorreo@gmail.com',
    pass: 'tucontraseña'
  }
});

let mensaje = "Hola desde nodejs...";

let mailOptions = {
  from: 'tucorreo@gmail.com',
  to: 'mi-amigo@yahoo.com',
  subject: 'Asunto Del Correo',
  text: mensaje
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email enviado: ' + info.response);
  }
});