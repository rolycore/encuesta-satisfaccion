const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
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

app.post('/send-survey', (req, res) => {
  const {
    nombre,
    correoElectronico, serviciobrindado,
    cumplimiento, cambios, requisitos, experiencia, comentarios,
    entornoDesarrollo, herramientasRecursos, cumplimientoEstándares, pruebasControlCalidad, colaboraciónComunicación, satisfacciónDesarrollo, comentariosDesarrollo,
    interfazUsuario, experienciaUsuario, optimizaciónRendimiento, tiempoCarga, feedbackComunicación, satisfacciónMejoras, comentariosMejoras,
    facilidadReportes, variedadReportes, personalizaciónReportes, formatoReportes, frecuenciaReportes, satisfacciónReportes, comentariosReportes,
    tiempoRespuesta, eficienciaResolución, calidadSoporte, disponibilidadSoporte, comunicaciónProceso, satisfacciónSoporte, comentariosSoporte, 
    seguridadAplicacion, proteccionInfoPersonal, seguridadAuthAcceso, encriptacionDatos, manejoSeguridad, politicaPrivTransparencia, concienciacionSeguridad, satisfacionGeneralSeguridad, comentariosSeguridad,
    disponibilidadRecursoAprendizaje, claridadTutorial, utilidadTutorial, formatoRecurso, accesibilidadRecurso, frecuenciaActTutorial, satisfaccionRecursoAprendizaje, comentariosAprendizaje
  } = req.body;

  const mailOptions = {
    from:  process.env.SMTP_EMAIL,
    to: correoElectronico,
    subject: 'Resultados de la Encuesta de Satisfacción',
    text: `
      Nombre: ${nombre}
      Correo Electrónico: ${correoElectronico}
      Servicio brindado: ${serviciobrindado}

      Cumplimiento de Requisitos Previos: ${cumplimiento}
      Necesidad de Cambios Adicionales: ${cambios}
      Requisitos Principales para el Desarrollo: ${requisitos}
      Experiencia General: ${experiencia}
      Comentarios Adicionales: ${comentarios}

      // Sección Entorno de Desarrollo y Calidad de Software
      Entorno de Desarrollo: ${entornoDesarrollo}
      Herramientas y Recursos: ${herramientasRecursos}
      Cumplimiento de Estándares de Desarrollo: ${cumplimientoEstándares}
      Pruebas y Control de Calidad: ${pruebasControlCalidad}
      Colaboración y Comunicación: ${colaboraciónComunicación}
      Satisfacción General con el Entorno de Desarrollo: ${satisfacciónDesarrollo}
      Comentarios Adicionales sobre el Entorno de Desarrollo: ${comentariosDesarrollo}

      // Sección Mejoras Continuas - Interfaz de Usuario y Optimización
      Interfaz de Usuario (UI): ${interfazUsuario}
      Experiencia del Usuario (UX): ${experienciaUsuario}
      Optimización de Rendimiento: ${optimizaciónRendimiento}
      Tiempo de Carga: ${tiempoCarga}
      Feedback y Comunicación: ${feedbackComunicación}
      Satisfacción General con las Mejoras Continuas: ${satisfacciónMejoras}
      Sugerencias y Comentarios Adicionales: ${comentariosMejoras}

      // Sección Generación de Reportes del Software
      Facilidad de Generación de Reportes: ${facilidadReportes}
      Variedad de Reportes: ${variedadReportes}
      Personalización de Reportes: ${personalizaciónReportes}
      Formato y Presentación de Reportes: ${formatoReportes}
      Frecuencia de Actualización de Reportes: ${frecuenciaReportes}
      Satisfacción General con la Generación de Reportes: ${satisfacciónReportes}
      Sugerencias y Comentarios Adicionales: ${comentariosReportes}

      // Sección Tiempos de Respuesta y Soporte del Software
      Tiempo de Respuesta Inicial: ${tiempoRespuesta}
      Eficiencia en la Resolución de Problemas: ${eficienciaResolución}
      Calidad del Soporte Técnico: ${calidadSoporte}
      Disponibilidad del Soporte: ${disponibilidadSoporte}
      Comunicación del Proceso: ${comunicaciónProceso}
      Satisfacción General con el Soporte: ${satisfacciónSoporte}
      Sugerencias y Comentarios Adicionales: ${comentariosSoporte}

      // Sección Seguridad de la Aplicación y la Protección de los Datos
      Seguridad General de la Aplicación: ${seguridadAplicacion}
      Protección de la Información Personal: ${proteccionInfoPersonal}
      Seguridad en la Autenticación y Acceso: ${seguridadAuthAcceso}
      Encriptación de Datos: ${encriptacionDatos}
      Manejo de Incidentes de Seguridad: ${manejoSeguridad}
      Política de Privacidad y Transparencia: ${politicaPrivTransparencia}
      Concienciación sobre Seguridad: ${concienciacionSeguridad}
      Satisfacción General con la Seguridad y Protección de Datos: ${satisfacionGeneralSeguridad}
      Sugerencias y Comentarios Adicionales: ${comentariosSeguridad}
    
      // Sección Sensibilización y Guías de Uso de la Aplicación
      Disponibilidad de Recursos de Aprendizaje: ${disponibilidadRecursoAprendizaje}
      Claridad de los Tutoriales y Guías: ${claridadTutorial}
      Utilidad de los Tutoriales y Guías: ${utilidadTutorial}
      Formato de los Recursos de Aprendizaje: ${formatoRecurso}
      Accesibilidad de los Recursos de Aprendizaje: ${accesibilidadRecurso}
      Frecuencia de Actualización de los Tutoriales y Guías: ${frecuenciaActTutorial}
      Satisfacción General con los Recursos de Aprendizaje: ${satisfaccionRecursoAprendizaje}
      Comentarios y Sugerencias: ${comentariosAprendizaje}

    `
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
