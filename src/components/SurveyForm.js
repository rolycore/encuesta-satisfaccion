import React, { useState } from 'react';
import axios from 'axios';
import './SurveyForm.css';
import logo from './shalomlogo.png'; // Ajusta la ruta según la ubicación de tu imagen
const SurveyForm = () => {
  const [nombre, setNombre] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [serviciobrindado, setServicioBrindado] = useState('');
  const [cumplimiento, setCumplimiento]= useState('');
  const [cambios, setCambios]= useState('');
  const [requisitos, setRequisitos]= useState('');
  const [experiencia, setExperiencia]= useState('');
  const [comentarios, setComentarios]= useState('');
  const [entornoDesarrollo, setEntornoDesarrollo]= useState('');
  const [herramientasRecursos, setHerramientasRecursos]= useState('');
  const [cumplimientoEstándares, setCumplimientoEstandares]= useState('');
  const [pruebasControlCalidad, setPruebasControlCalidad]= useState('');
  const [colaboraciónComunicación, setColaboracionComunicacion]= useState('');
  const [satisfacciónDesarrollo, setSatisfaccionDesarrollo]= useState('');
  const [comentariosDesarrollo, setComentariosDesarrollo]= useState('');
  const [interfazUsuario, setInsterfazUsuario]= useState('');
  const [experienciaUsuario, setExperienciaUsuario]= useState('');
  const [optimizaciónRendimiento, setOptimizacionRendimiento]= useState('');
  const [tiempoCarga, setTiempoCarga]= useState('');
  const [feedbackComunicación, setFeedbackComunicacion]= useState('');
  const [satisfacciónMejoras, setSatisfaccionMejoras]= useState('');
  const [comentariosMejoras, setComentariosMejoras]= useState('');
  const [facilidadReportes, setFacilidadReportes]= useState('');
  const [variedadReportes, setVariedadReporte]= useState('');
  const [personalizaciónReportes, setPersonalizacionReportes]= useState(''); 
  const [formatoReportes, setFormatoReportes]= useState('');
  const [frecuenciaReportes, setFrecuenciaReportes]= useState('');
  const [satisfacciónReportes, setSatisfaccionReportes]= useState('');
  const [comentariosReportes, setComentariosReportes]= useState('');
  const [tiempoRespuesta, setTiempoRespuesta]= useState('');
  const [eficienciaResolución, setEficienciaResolucion]= useState('');
  const [calidadSoporte, setCalidadSoporte]= useState('');
  const [disponibilidadSoporte, setDisponibilidadSoporte]= useState('');
  const [comunicaciónProceso, setComunicacionProceso]= useState('');
  const [satisfacciónSoporte, setSatisfaccionSoporte]= useState('');
  const [comentariosSoporte, setComentariosSoporte]= useState('');
  const [seguridadAplicacion, setSeguridadAplicacion]= useState('');
  const [proteccionInfoPersonal, setProteccionInfoPersonal]= useState('');
  const [seguridadAuthAcceso, setSeguridadAuthAcceso]= useState('');
  const [encriptacionDatos, setEncriptacionDatos]= useState('');
  const [manejoSeguridad, setManejoSeguridad]= useState('');
  const [politicaPrivTransparencia, setPoliticaPrivTransparencia]= useState('');
  const [concienciacionSeguridad, setConcienciacionSeguridad]= useState('');
  const [satisfacionGeneralSeguridad, setSatisfacionGeneralSeguridad]= useState('');
  const [comentariosSeguridad, setComentariosSeguridad]= useState(''); 
  const [disponibilidadRecursoAprendizaje, setDisponibilidadRecursoAprendizaje]= useState('');
  const [claridadTutorial, setClaridadTutorial]= useState('');
  const [utilidadTutorial, setUtilidadTutorial]= useState('');
  const [formatoRecurso, setFormatoRecurso]= useState('');
  const [accesibilidadRecurso, setAccesibilidadRecurso]= useState('');
  const [frecuenciaActTutorial, setFrecuenciaActTutorial]= useState('');
  const [satisfaccionRecursoAprendizaje, setSatisfaccionRecursoAprendizaje]= useState('');
  const [comentariosAprendizaje, setComentariosAprendizaje]= useState('');
 

  // Agrega aquí todos los estados necesarios para los demás campos del formulario
 // declaracion local
 /* const [formData, setFormData] = useState({
    nombre: '',
    correoElectronico: '',
    serviciobrindado:'',
    cumplimiento: '',
    cambios: '',
    requisitos: '',
    experiencia: '',
    comentarios: '',
    entornoDesarrollo: '',
    herramientasRecursos: '',
    cumplimientoEstándares: '',
    pruebasControlCalidad: '',
    colaboraciónComunicación: '',
    satisfacciónDesarrollo: '',
    comentariosDesarrollo: '',
    interfazUsuario: '',
    experienciaUsuario: '',
    optimizaciónRendimiento: '',
    tiempoCarga: '',
    feedbackComunicación: '',
    satisfacciónMejoras: '',
    comentariosMejoras: '',
    facilidadReportes: '',
    variedadReportes: '',
    personalizaciónReportes: '',
    formatoReportes: '',
    frecuenciaReportes: '',
    satisfacciónReportes: '',
    comentariosReportes: '',
    tiempoRespuesta: '',
    eficienciaResolución: '',
    calidadSoporte: '',
    disponibilidadSoporte: '',
    comunicaciónProceso: '',
    satisfacciónSoporte: '',
    comentariosSoporte: '',
    seguridadAplicacion:'', 
    proteccionInfoPersonal:'', 
    seguridadAuthAcceso:'', 
    encriptacionDatos:'',  
    manejoSeguridad:'',  
    politicaPrivTransparencia:'',  
    concienciacionSeguridad:'',  
    satisfacionGeneralSeguridad:'',  
    comentariosSeguridad:'', 
    disponibilidadRecursoAprendizaje:'',  
    claridadTutorial:'',  
    utilidadTutorial:'',  
    formatoRecurso:'',  
    accesibilidadRecurso:'',  
    frecuenciaActTutorial:'',  
    satisfaccionRecursoAprendizaje:'',  
    comentariosAprendizaje:'', 
  });

  const (e)=> = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };*/
//metodo local
  /*const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/send-survey', formData);
      alert('Encuesta enviada correctamente');
       // Restablece el formulario
       setFormData({
        nombre: '',
        correoElectronico: '',
        serviciobrindado:'',
        cumplimiento: '',
        cambios: '',
        requisitos: '',
        experiencia: '',
        comentarios: '',
        entornoDesarrollo: '',
        herramientasRecursos: '',
        cumplimientoEstándares: '',
        pruebasControlCalidad: '',
        colaboraciónComunicación: '',
        satisfacciónDesarrollo: '',
        comentariosDesarrollo: '',
        interfazUsuario: '',
        experienciaUsuario: '',
        optimizaciónRendimiento: '',
        tiempoCarga: '',
        feedbackComunicación: '',
        satisfacciónMejoras: '',
        comentariosMejoras: '',
        facilidadReportes: '',
        variedadReportes: '',
        personalizaciónReportes: '',
        formatoReportes: '',
        frecuenciaReportes: '',
        satisfacciónReportes: '',
        comentariosReportes: '',
        tiempoRespuesta: '',
        eficienciaResolución: '',
        calidadSoporte: '',
        disponibilidadSoporte: '',
        comunicaciónProceso: '',
        satisfacciónSoporte: '',
        comentariosSoporte: '',
        seguridadAplicacion:'', 
        proteccionInfoPersonal:'', 
        seguridadAuthAcceso:'', 
        encriptacionDatos:'',  
        manejoSeguridad:'',  
        politicaPrivTransparencia:'',  
        concienciacionSeguridad:'',  
        satisfacionGeneralSeguridad:'',  
        comentariosSeguridad:'', 
        disponibilidadRecursoAprendizaje:'',  
        claridadTutorial:'',  
        utilidadTutorial:'',  
        formatoRecurso:'',  
        accesibilidadRecurso:'',  
        frecuenciaActTutorial:'',  
        satisfaccionRecursoAprendizaje:'',  
        comentariosAprendizaje:''
      
      });
    } catch (error) {
      console.error('Error al enviar la encuesta:', error);
      alert('Hubo un problema al enviar la encuesta');
    }
  };*/
  //Metodo produccion
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/.netlify/functions/sendSurvey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre,
          correoElectronico,
          serviciobrindado,
          cumplimiento,
          cambios,
          requisitos,
          experiencia,
          comentarios,
          entornoDesarrollo,
          herramientasRecursos,
          cumplimientoEstándares,
          pruebasControlCalidad,
          colaboraciónComunicación,
          satisfacciónDesarrollo,
          comentariosDesarrollo,
          interfazUsuario,
          experienciaUsuario,
          optimizaciónRendimiento,
          tiempoCarga,
          feedbackComunicación,
          satisfacciónMejoras,
          comentariosMejoras,
          facilidadReportes,
          variedadReportes,
          personalizaciónReportes,
          formatoReportes,
          frecuenciaReportes,
          satisfacciónReportes,
          comentariosReportes,
          tiempoRespuesta,
          eficienciaResolución,
          calidadSoporte,
          disponibilidadSoporte,
          comunicaciónProceso,
          satisfacciónSoporte,
          comentariosSoporte,
          seguridadAplicacion, 
          proteccionInfoPersonal, 
          seguridadAuthAcceso, 
          encriptacionDatos,  
          manejoSeguridad,  
          politicaPrivTransparencia,  
          concienciacionSeguridad,  
          satisfacionGeneralSeguridad,  
          comentariosSeguridad, 
          disponibilidadRecursoAprendizaje,  
          claridadTutorial,  
          utilidadTutorial,  
          formatoRecurso,  
          accesibilidadRecurso,  
          frecuenciaActTutorial,  
          satisfaccionRecursoAprendizaje,  
          comentariosAprendizaje, 
          // Resto de los campos
        }),
      });
  
      const result = await response.json();
      
      if (response.ok) {
        alert('Encuesta enviada con éxito');
        setNombre('');
        setCorreoElectronico('');
        // Restablecer otros campos
      } else {
        alert('Hubo un problema al enviar la encuesta: ' + result.error);
      }
    } catch (error) {
      alert('Hubo un problema al enviar la encuesta: ' + error.message);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div className="logo-container">
        <img src={logo} alt="Company Logo" className="logo" />
      </div>
      <h1>Encuesta de Satisfacción</h1>
      {/* Preguntas de la encuesta original */}
      {/* Sección para Nombre y Correo Electrónico */}
      <label>Nombre:</label>
      <input type="text"value={nombre}
          onChange={(e) => setNombre(e.target.value)} required />

      <label>Correo Electrónico:</label>
      <input type="email" value={correoElectronico}
          onChange={(e) => setCorreoElectronico(e.target.value)} required />
      
      <label>Servicio brindado:</label>
      <input type="text" value={serviciobrindado} onChange={(e)=> setServicioBrindado(e.target.value)} required />

      <p>Gracias por participar en nuestra encuesta. Tu opinión es crucial para mejorar nuestro servicio. 
        Por favor, responde las siguientes preguntas con sinceridad.</p>

    <h2>Sección Desarrollo de Aplicación</h2>
      <label>Cumplimiento de Requisitos Previos:</label>
      <select  value={cumplimiento} onChange={(e)=> setCumplimiento(e.target.value)} required>
        <option value="">Selecciona una opción</option>
        <option value="Totalmente satisfecho">Totalmente satisfecho</option>
        <option value="Satisfecho">Satisfecho</option>
        <option value="Neutral">Neutral</option>
        <option value="Insatisfecho">Insatisfecho</option>
        <option value="Totalmente insatisfecho">Totalmente insatisfecho</option>
        <option value="No aplica">No aplica</option>
      </select>
      {/* ... (repite el patrón anterior para todas las preguntas de la encuesta original) */}
       <label>Necesidad de Cambios Adicionales:</label>
      <select value={cambios} onChange={(e)=> setCambios(e.target.value) } required>
        <option value="">Selecciona una opción</option>
        <option value="Sí, se necesitan cambios significativos">Sí, se necesitan cambios significativos</option>
        <option value="Sí, algunos ajustes menores serían beneficiosos">Sí, algunos ajustes menores serían beneficiosos</option>
        <option value="No, la aplicación cumple con todas mis expectativas">No, la aplicación cumple con todas mis expectativas</option>
        <option value="No estoy seguro">No estoy seguro</option>
      </select>

      <label>Requisitos Principales para el Desarrollo:</label>
      <textarea value={requisitos} onChange={(e)=> setRequisitos(e.target.value)} required />

      <label>Experiencia General:</label>
      <select value={experiencia} onChange={(e)=> setExperiencia(e.target.value)} required>
        <option value="">Selecciona una opción</option>
        <option value="Excelente">Excelente</option>
        <option value="Buena">Buena</option>
        <option value="Aceptable">Aceptable</             option>
        <option value="Regular">Regular</option>
        <option value="Mala">Mala</option>
      </select>

      <label>Comentarios Adicionales:</label>
      <p>¿Hay algún comentario adicional que quieras compartir sobre el desarrollo de la aplicación?</p>
      <textarea value={comentarios} onChange={(e)=> setComentarios(e.target.value)} />
      
      {/* Nuevas preguntas para Entorno de Desarrollo y Calidad de Software */}
      <h2>Sección de Satisfacción - Entorno de Desarrollo y Calidad de Software</h2>
      <p>Apreciamos tu participación en esta encuesta. Tus respuestas son esenciales para evaluar y mejorar nuestro entorno de desarrollo y asegurar la calidad del software entregado. Por favor, sé honesto en tus respuestas.</p>
      <label>Entorno de Desarrollo:</label>
      <select value={entornoDesarrollo} onChange={(e)=> setEntornoDesarrollo(e.target.value)} required>
        <option value="">Selecciona una opción</option>
        <option value="Excelente">Excelente</option>
        <option value="Bueno">Bueno</option>
        <option value="Aceptable">Aceptable</option>
        <option value="Regular">Regular</option>
        <option value="Malo">Malo</option>
      </select>
      <label>Herramientas y Recursos:</label>
      <select value={herramientasRecursos} onChange={(e)=> setHerramientasRecursos(e.target.value)} required>
        <option value="">Selecciona una opción</option>
        <option value="Las herramientas proporcionadas son adecuadas y eficientes">Las herramientas proporcionadas son adecuadas y eficientes</option>
        <option value="Se necesitan mejoras en las herramientas y recursos disponibles">Se necesitan mejoras en las herramientas y recursos disponibles</option>
        <option value="No estoy seguro">No estoy seguro</option>
      </select>
      {/* ... (repite el patrón anterior para todas las nuevas preguntas de esta sección) */}
      <label>Cumplimiento de Estándares de Desarrollo:</label>
      <select value={cumplimientoEstándares} onChange={(e)=> setCumplimientoEstandares(e.target.value)} required>
        <option value="">Selecciona una opción</option>
        <option value="Todos los estándares y prácticas de desarrollo se siguieron adecuadamente">Todos los estándares y prácticas de desarrollo se siguieron adecuadamente</option>
        <option value="Hubo algunas desviaciones de los estándares, pero en general, se cumplió.">Hubo algunas desviaciones de los estándares, pero en general, se cumplió.</option>
        <option value="Hubo importantes desviaciones de los estándares.">Hubo importantes desviaciones de los estándares.</option>
        <option value="No estoy seguro.">No estoy seguro.</option>
      </select>

      <label>Pruebas y Control de Calidad:</label>
      <select value={pruebasControlCalidad} onChange={(e)=> setPruebasControlCalidad(e.target.value)} required>
        <option value="">Selecciona una opción</option>
        <option value="El proceso de pruebas y control de calidad fue exhaustivo.">El proceso de pruebas y control de calidad fue exhaustivo.</option>
        <option value="Se necesitan mejoras en el proceso de pruebas.">Se necesitan mejoras en el proceso de pruebas.</option>
        <option value="No estoy seguro.">No estoy seguro.</option>
      </select>
      <label>Pruebas y Control de Calidad:</label>
      <select value={colaboraciónComunicación} onChange={(e)=> setColaboracionComunicacion(e.target.value)} required>
        <option value="">Selecciona una opción</option>
        <option value="La comunicación entre los miembros del equipo fue efectiva.">La comunicación entre los miembros del equipo fue efectiva.</option>
        <option value="Se necesitan mejoras en la colaboración y comunicación.">Se necesitan mejoras en la colaboración y comunicación.</option>
        <option value="No estoy seguro.">No estoy seguro.</option>
      </select>
      <label>Satisfacción General con el Entorno de Desarrollo:</label>
      <select value={satisfacciónDesarrollo} onChange={(e)=> setSatisfaccionDesarrollo(e.target.value)} required>
        <option value="">Selecciona una opción</option>
        <option value="Totalmente satisfecho">Totalmente satisfecho</option>
        <option value="Satisfecho">Satisfecho</option>
        <option value="Neutral">Neutral</option>
        <option value="Insatisfecho">Insatisfecho</option>
        <option value="Totalmente insatisfecho">Totalmente insatisfecho</option>
      </select>
      <label>Sugerencias y Comentarios Adicionales:</label>
      <p>¿Hay algún comentario adicional que quieras compartir sobre el entorno de desarrollo y la calidad del software?</p>
      <textarea value={comentariosDesarrollo} onChange={(e)=> setComentariosDesarrollo(e.target.value)} />
      
      {/* Nuevas preguntas para Mejoras Continuas - Interfaz de Usuario y Optimización */}
      <h2>Sección de Mejoras Continuas - Interfaz de Usuario y Optimización</h2>
      <p>Agradecemos tu participación en nuestra encuesta. Tu opinión es crucial para impulsar mejoras continuas en nuestra aplicación. Por favor, comparte tus experiencias y sugerencias con sinceridad.</p>
      <label>Interfaz de Usuario (UI):</label>
      <select value={interfazUsuario} onChange={(e)=> setInsterfazUsuario(e.target.value)} required>
        <option value="">Selecciona una opción</option>
        <option value="La interfaz de usuario es intuitiva y fácil de usar">La interfaz de usuario es intuitiva y fácil de usar</option>
        <option value="Algunos elementos de la interfaz de usuario pueden mejorarse">Algunos elementos de la interfaz de usuario pueden mejorarse</option>
        <option value="La interfaz de usuario necesita cambios significativos">La interfaz de usuario necesita cambios significativos</option>
        <option value="No estoy seguro">No estoy seguro</option>
      </select>
      <label>Experiencia del Usuario (UX):</label>
      <select value={experienciaUsuario} onChange={(e)=> setExperienciaUsuario(e.target.value)} required>
        <option value="">Selecciona una opción</option>
        <option value="La experiencia del usuario es positiva y satisfactoria.">La experiencia del usuario es positiva y satisfactoria.</option>
        <option value="Se pueden realizar mejoras para optimizar la experiencia del usuario.">Se pueden realizar mejoras para optimizar la experiencia del usuario.</option>
        <option value="La experiencia del usuario necesita cambios significativos.">La experiencia del usuario necesita cambios significativos.</option>
        <option value="No estoy seguro">No estoy seguro</option>
      </select>
      <label>Optimización de Rendimiento:</label>
      <select value={optimizaciónRendimiento} onChange={(e)=> setOptimizacionRendimiento(e.target.value)} required>
        <option value="">Selecciona una opción</option>
        <option value="La aplicación funciona de manera eficiente y sin problemas.">La aplicación funciona de manera eficiente y sin problemas.</option>
        <option value="Se pueden realizar mejoras para optimizar el rendimiento.">Se pueden realizar mejoras para optimizar el rendimiento.</option>
        <option value="La aplicación experimenta problemas de rendimiento significativos.">La aplicación experimenta problemas de rendimiento significativos.</option>
        <option value="No estoy seguro">No estoy seguro</option>
      </select>
      <label>Tiempo de Carga:</label>
      <select value={tiempoCarga} onChange={(e)=> setTiempoCarga(e.target.value)} required>
        <option value="">Selecciona una opción</option>
        <option value="El tiempo de carga de la aplicación es rápido y satisfactorio.">El tiempo de carga de la aplicación es rápido y satisfactorio.</option>
        <option value="Se pueden realizar mejoras para optimizar el rendimiento.">Se pueden realizar mejoras para reducir el tiempo de carga.</option>
        <option value="El tiempo de carga es excesivamente largo.">El tiempo de carga es excesivamente largo.</option>
        <option value="No estoy seguro">No estoy seguro</option>
      </select>
      <label>Feedback y Comunicación:</label>
      <select value={feedbackComunicación} onChange={(e)=> setFeedbackComunicacion(e.target.value)} required>
        <option value="">Selecciona una opción</option>
        <option value="El sistema proporciona retroalimentación clara y oportuna.">El sistema proporciona retroalimentación clara y oportuna.</option>
        <option value="Se pueden realizar mejoras en la comunicación y retroalimentación.">Se pueden realizar mejoras en la comunicación y retroalimentación.</option>
        <option value="La retroalimentación y comunicación son insatisfactorias.">La retroalimentación y comunicación son insatisfactorias.</option>
        <option value="No estoy seguro">No estoy seguro</option>
      </select>
      <label>Satisfacción General con las Mejoras Continuas:</label>
      <select value={satisfacciónMejoras} onChange={(e)=> setSatisfaccionMejoras(e.target.value)} required>
        <option value="">Selecciona una opción</option>
        <option value="Totalmente satisfecho">Totalmente satisfecho</option>
        <option value="Satisfecho">Satisfecho</option>
        <option value="Neutral">Neutral</option>
        <option value="Insatisfecho">Insatisfecho</option>
        <option value="Totalmente insatisfecho">Totalmente insatisfecho</option>
      </select>
      <label>Sugerencias y Comentarios Adicionales:</label>
      <p>¿Tienes alguna sugerencia específica o comentario adicional sobre cómo podemos mejorar la interfaz de usuario, optimización u otros aspectos?</p>
      <textarea value={comentariosMejoras} onChange={(e)=> setComentariosMejoras(e.target.value)} />
      {/* ... (repite el patrón anterior para todas las nuevas preguntas de esta sección) */}
      
      {/* Nuevas preguntas para Generación de Reportes del Software */}
      <h2>Sección sobre Generación de Reportes del Software</h2>
      <p>Agradecemos tu participación en nuestra encuesta. Queremos mejorar la generación de reportes en nuestra aplicación. Por favor, comparte tus experiencias y sugerencias con sinceridad.</p>
      <label>Facilidad de Generación de Reportes:</label>
      <select value={facilidadReportes} onChange={(e)=> setFacilidadReportes(e.target.value)} required>
        <option value="">Selecciona una opción</option>
        <option value="La generación de reportes es fácil y rápida">La generación de reportes es fácil y rápida.</option>
        <option value="Se puede mejorar la interfaz para hacer la generación de reportes más intuitiva">Se puede mejorar la interfaz para hacer la generación de reportes más intuitiva.</option>
        <option value="Encuentro dificultades para generar los reportes necesarios.">Encuentro dificultades para generar los reportes necesarios.</option>
        <option value="No estoy seguro/a.">No estoy seguro/a.</option>
      </select>
      <label>Variedad de Reportes:</label>
      <select value={variedadReportes} onChange={(e)=> setVariedadReporte(e.target.value)} required>
        <option value="">Selecciona una opción</option>
        <option value="Hay una amplia variedad de reportes disponibles que satisfacen mis necesidades.">Hay una amplia variedad de reportes disponibles que satisfacen mis necesidades.</option>
        <option value="Se necesitan más opciones y variedad en los reportes.">Se necesitan más opciones y variedad en los reportes.</option>
        <option value="Los reportes actuales no son útiles para mi situación.">Los reportes actuales no son útiles para mi situación.</option>
        <option value="No estoy seguro/a.">No estoy seguro/a.</option>
      </select>
      <label>Personalización de Reportes:</label>
      <select value={personalizaciónReportes} onChange={(e)=> setPersonalizacionReportes(e.target.value)} required>
        <option value="">Selecciona una opción</option>
        <option value="Puedo personalizar los reportes según mis necesidades.">Puedo personalizar los reportes según mis necesidades.</option>
        <option value="Se necesitan más opciones de personalización.">Se necesitan más opciones de personalización.</option>
        <option value="La personalización de reportes es limitada o difícil de realizar.">La personalización de reportes es limitada o difícil de realizar.</option>
        <option value="No estoy seguro/a.">No estoy seguro/a.</option>
      </select>
      <label>Formato y Presentación de Reportes:</label>
      <select value={formatoReportes} onChange={(e)=> setFormatoReportes(e.target.value)} required>
        <option value="">Selecciona una opción</option>
        <option value="Los reportes son presentados de manera clara y comprensible.">Los reportes son presentados de manera clara y comprensible.</option>
        <option value="Se pueden mejorar el formato y la presentación de los reportes.">Se pueden mejorar el formato y la presentación de los reportes.</option>
        <option value="Tengo dificultades para entender la información presentada en los reportes.">Tengo dificultades para entender la información presentada en los reportes.</option>
        <option value="No estoy seguro/a.">No estoy seguro/a.</option>
      </select>
      <label>Frecuencia de Actualización de Reportes:</label>
      <select value={frecuenciaReportes} onChange={(e)=> setFrecuenciaReportes(e.target.value)} required>
        <option value="">Selecciona una opción</option>
        <option value="Los reportes se actualizan regularmente y de manera oportuna.">Los reportes se actualizan regularmente y de manera oportuna.</option>
        <option value="La frecuencia de actualización de los reportes necesita mejorar.">La frecuencia de actualización de los reportes necesita mejorar.</option>
        <option value="No estoy seguro/a.">No estoy seguro/a.</option>
      </select>
      <label>Satisfacción General con la Generación de Reportes:</label>
      <select value={satisfacciónReportes} onChange={(e)=> setSatisfaccionReportes(e.target.value)} required>
        <option value="">Selecciona una opción</option>
        <option value="Totalmente satisfecho">Totalmente satisfecho</option>
        <option value="Satisfecho">Satisfecho</option>
        <option value="Neutral">Neutral</option>
        <option value="Insatisfecho">Insatisfecho</option>
        <option value="Totalmente insatisfecho">Totalmente insatisfecho</option>
      </select>
      <label>Sugerencias y Comentarios Adicionales:</label>
      <p>¿Tienes alguna sugerencia específica o comentario adicional sobre cómo podemos mejorar la generación de reportes?</p>
      <textarea value={comentariosReportes} onChange={(e)=> setComentariosReportes(e.target.value)} />
      {/* ... (repite el patrón anterior para todas las nuevas preguntas de esta sección) */}
      
      {/* Nuevas preguntas para Tiempos de Respuesta y Soporte del Software */}
      <h2>Sección sobre Tiempos de Respuesta y Soporte del Software</h2>
    <p>Agradecemos tu participación en nuestra encuesta. Queremos mejorar nuestros tiempos de respuesta y el servicio de soporte. Por favor, comparte tus experiencias y sugerencias con sinceridad.</p>

      <label>Tiempo de Respuesta Inicial:</label>
      <select value={tiempoRespuesta} onChange={(e)=> setTiempoRespuesta(e.target.value)} required>
        <option value="">Selecciona una opción</option>
        <option value="Estoy satisfecho/a con el tiempo de respuesta inicial al solicitar soporte">Estoy satisfecho/a con el tiempo de respuesta inicial al solicitar soporte</option>
        <option value="El tiempo de respuesta inicial podría mejorar">El tiempo de respuesta inicial podría mejorar</option>
        <option value="He experimentado demoras significativas en el tiempo de respuesta inicial">He experimentado demoras significativas en el tiempo de respuesta inicial</option>
        <option value="No estoy seguro/a">No estoy seguro/a</option>
      </select>
      <label>Eficiencia en la Resolución de Problemas:</label>
      <select value={eficienciaResolución} onChange={(e)=> setEficienciaResolucion(e.target.value)} required>
        <option value="">Selecciona una opción</option>
        <option value="Los problemas se resuelven de manera eficiente y dentro de un plazo razonable.">Los problemas se resuelven de manera eficiente y dentro de un plazo razonable.</option>
        <option value="Se pueden hacer mejoras en la eficiencia de la resolución de problemas.">Se pueden hacer mejoras en la eficiencia de la resolución de problemas.</option>
        <option value="He experimentado demoras excesivas en la resolución de problemas.">He experimentado demoras excesivas en la resolución de problemas.</option>
        <option value="No estoy seguro/a">No estoy seguro/a</option>
      </select>
      <label>Calidad del Soporte Técnico:</label>
      <select value={calidadSoporte} onChange={(e)=> setCalidadSoporte(e.target.value)} required>
        <option value="">Selecciona una opción</option>
        <option value="El soporte técnico proporcionado es de alta calidad.">El soporte técnico proporcionado es de alta calidad.</option>
        <option value="Se pueden realizar mejoras en la calidad del soporte técnico.">Se pueden realizar mejoras en la calidad del soporte técnico.</option>
        <option value="He tenido problemas con la calidad del soporte técnico.">He tenido problemas con la calidad del soporte técnico.</option>
        <option value="No estoy seguro/a">No estoy seguro/a</option>
      </select>
      <label>Disponibilidad del Soporte:</label>
      <select value={disponibilidadSoporte} onChange={(e)=> setDisponibilidadSoporte(e.target.value)} required>
        <option value="">Selecciona una opción</option>
        <option value="El soporte está disponible cuando lo necesito.">El soporte está disponible cuando lo necesito.</option>
        <option value="Se necesitan mejoras en la disponibilidad del soporte.">Se necesitan mejoras en la disponibilidad del soporte.</option>
        <option value="He experimentado dificultades para obtener soporte cuando lo necesito.">He experimentado dificultades para obtener soporte cuando lo necesito.</option>
        <option value="No estoy seguro/a">No estoy seguro/a</option>
      </select>
      <label>Comunicación del Proceso: </label>
      <select value={comunicaciónProceso} onChange={(e)=> setComunicacionProceso(e.target.value)} required>
        <option value="">Selecciona una opción</option>
        <option value="La comunicación sobre el proceso de soporte es clara y transparente.">La comunicación sobre el proceso de soporte es clara y transparente.</option>
        <option value="Se necesitan mejoras en la comunicación sobre el proceso de soporte.">Se necesitan mejoras en la comunicación sobre el proceso de soporte.</option>
        <option value="La comunicación sobre el proceso de soporte es insatisfactoria.">La comunicación sobre el proceso de soporte es insatisfactoria.</option>
        <option value="No estoy seguro/a">No estoy seguro/a</option>
      </select>
      <label>Disponibilidad del Soporte:</label>
      <select value={satisfacciónSoporte} onChange={(e)=> setSatisfaccionSoporte(e.target.value)} required>
      <option value="">Selecciona una opción</option>
        <option value="Totalmente satisfecho">Totalmente satisfecho</option>
        <option value="Satisfecho">Satisfecho</option>
        <option value="Neutral">Neutral</option>
        <option value="Insatisfecho">Insatisfecho</option>
        <option value="Totalmente insatisfecho">Totalmente insatisfecho</option>
      </select>
      {/* ... (repite el patrón anterior para todas las nuevas preguntas de esta sección) */}
      <label>Sugerencias y Comentarios Adicionales:</label>
      <p>¿Tienes alguna sugerencia específica o comentario adicional sobre cómo podemos mejorar los tiempos de respuesta y el soporte?</p>
      <textarea value={comentariosSoporte} onChange={(e)=> setComentariosSoporte} />

      <h2>Sección sobre la Seguridad de la Aplicación y la Protección de los Datos</h2>
    <p>Agradecemos tu participación en nuestra encuesta. La seguridad de la aplicación y la protección de los datos son prioridades para nosotros. Por favor, comparte tus experiencias y sugerencias con sinceridad.</p>
    <label>Seguridad General de la Aplicación:</label>
    <select value={seguridadAplicacion} onChange={(e)=> setSeguridadAplicacion(e.target.value)} required>
      <option value="">Selecciona una opción</option>
        <option value="Totalmente satisfecho">Totalmente satisfecho</option>
        <option value="Satisfecho">Satisfecho</option>
        <option value="Neutral">Neutral</option>
        <option value="Insatisfecho">Insatisfecho</option>
        <option value="Muy insatisfecho/a">Muy insatisfecho/a</option>
      </select>
      <label>Protección de la Información Personal:</label>
    <select value={proteccionInfoPersonal} onChange={(e)=> setProteccionInfoPersonal(e.target.value)} required>
      <option value="">Selecciona una opción</option>
        <option value="Totalmente satisfecho">Totalmente satisfecho</option>
        <option value="Satisfecho">Satisfecho</option>
        <option value="Neutral">Neutral</option>
        <option value="Insatisfecho">Insatisfecho</option>
        <option value="Muy insatisfecho/a">Muy insatisfecho/a</option>
      </select>
      <label>Seguridad en la Autenticación y Acceso:</label>
    <select value={seguridadAuthAcceso} onChange={(e)=> setSeguridadAuthAcceso(e.target.value)} required>
      <option value="">Selecciona una opción</option>
        <option value="Los métodos de autenticación son seguros y efectivos.">Los métodos de autenticación son seguros y efectivos.</option>
        <option value="Los métodos de autenticación pueden mejorar.">Los métodos de autenticación pueden mejorar.</option>
        <option value="Tengo preocupaciones sobre la seguridad de los métodos de autenticación.">Tengo preocupaciones sobre la seguridad de los métodos de autenticación.</option>
        <option value="No estoy seguro/a.">Insatisfecho</option>
      </select>
      <label>Encriptación de Datos:</label>
    <select value={encriptacionDatos} onChange={(e)=> setEncriptacionDatos(e.target.value)} required>
      <option value="">Selecciona una opción</option>
        <option value="Estoy satisfecho/a con las medidas de encriptación de datos.">Estoy satisfecho/a con las medidas de encriptación de datos.</option>
        <option value="Se pueden mejorar las medidas de encriptación de datos.">Se pueden mejorar las medidas de encriptación de datos.</option>
        <option value="Tengo preocupaciones sobre la encriptación de datos.">Neutral</option>
        <option value="No estoy seguro/a.">Insatisfecho</option>
      </select>
      <label>Manejo de Incidentes de Seguridad:</label>
    <select value={manejoSeguridad} onChange={(e)=> setManejoSeguridad(e.target.value)} required>
      <option value="">Selecciona una opción</option>
        <option value="Estoy satisfecho/a con la forma en que se manejan los incidentes de seguridad.">Estoy satisfecho/a con la forma en que se manejan los incidentes de seguridad.</option>
        <option value="Se pueden mejorar las respuestas a los incidentes de seguridad.">Se pueden mejorar las respuestas a los incidentes de seguridad.</option>
        <option value="Tengo preocupaciones sobre cómo se manejan los incidentes de seguridad.">Tengo preocupaciones sobre cómo se manejan los incidentes de seguridad.</option>
        <option value="No estoy seguro/a.">Insatisfecho</option>
      </select>
      <label>Política de Privacidad y Transparencia:</label>
    <select value={politicaPrivTransparencia} onChange={(e)=> setPoliticaPrivTransparencia(e.target.value)} required>
      <option value="">Selecciona una opción</option>
        <option value="Estoy satisfecho/a con la política de privacidad y la transparencia.">Estoy satisfecho/a con la política de privacidad y la transparencia.</option>
        <option value="La política de privacidad y transparencia puede mejorar.">La política de privacidad y transparencia puede mejorar.</option>
        <option value="Tengo preocupaciones sobre la política de privacidad y transparencia.">Tengo preocupaciones sobre la política de privacidad y transparencia.</option>
        <option value="No estoy seguro/a.">Insatisfecho</option>
      </select>
      <label>Concienciación sobre Seguridad:</label>
    <select value={concienciacionSeguridad} onChange={(e)=> setConcienciacionSeguridad(e.target.value)} required>
      <option value="">Selecciona una opción</option>
        <option value="La aplicación proporciona suficiente información sobre la seguridad y protección de datos.">La aplicación proporciona suficiente información sobre la seguridad y protección de datos.</option>
        <option value="Se puede mejorar la información y concienciación sobre la seguridad.">Se puede mejorar la información y concienciación sobre la seguridad.</option>
        <option value="La información sobre seguridad es insuficiente.">La información sobre seguridad es insuficiente.</option>
        <option value="No estoy seguro/a.">Insatisfecho</option>
      </select>
      <label>Satisfacción General con la Seguridad y Protección de Datos:</label>
    <select value={satisfacionGeneralSeguridad} onChange={(e)=> setSatisfacionGeneralSeguridad(e.target.value)} required>
      <option value="">Selecciona una opción</option>
      <option value="Totalmente satisfecho">Totalmente satisfecho</option>
        <option value="Satisfecho">Satisfecho</option>
        <option value="Neutral">Neutral</option>
        <option value="Insatisfecho">Insatisfecho</option>
        <option value="Muy insatisfecho/a">Muy insatisfecho/a</option>
      </select>
      <label>Sugerencias y Comentarios Adicionales:</label>
      <p>¿Tienes alguna sugerencia específica o comentario adicional sobre cómo podemos mejorar la seguridad de la aplicación y la protección de los datos?</p>
      <textarea value={comentariosSeguridad} onChange={(e)=> setComentariosSeguridad(e.target.value)} />
     
      <h2>Sección sobre Sensibilización y Guías de Uso de la Aplicación</h2>
    <p>Agradecemos tu participación en nuestra encuesta. Tu opinión es crucial para mejorar nuestros tutoriales, guías y la sensibilización sobre el uso de la aplicación. Por favor, comparte tus experiencias y sugerencias con sinceridad.</p>
    <label>Disponibilidad de Recursos de Aprendizaje:</label>
    <select value={disponibilidadRecursoAprendizaje} onChange={(e)=> setDisponibilidadRecursoAprendizaje(e.target.value)} required>
      <option value="">Selecciona una opción</option>
        <option value="No es necesario tutoriales o guias, la aplicacion es bien intuitiva.">No es necesario tutoriales o guias, la aplicacion es bien intuitiva.</option>
        <option value="Hay suficientes tutoriales y guías disponibles">Hay suficientes tutoriales y guías disponibles</option>
        <option value="Se necesitan más recursos de aprendizaje.">Se necesitan más recursos de aprendizaje.</option>
        <option value="Los recursos de aprendizaje son insuficientes.">Los recursos de aprendizaje son insuficientes.</option>
        <option value="No estoy seguro/a.">No estoy seguro/a.</option>
      </select>
      <label>Claridad de los Tutoriales y Guías:</label>
    <select value={claridadTutorial} onChange={(e)=> setClaridadTutorial(e.target.value)} required>
      <option value="">Selecciona una opción</option>
        <option value="Los tutoriales y guías son claros y fáciles de entender."> Los tutoriales y guías son claros y fáciles de entender.</option>
        <option value="Algunos tutoriales y guías necesitan más claridad.">Algunos tutoriales y guías necesitan más claridad.</option>
        <option value="Los tutoriales y guías son difíciles de entender.">Los tutoriales y guías son difíciles de entender.</option>
        <option value="No estoy seguro/a.">No estoy seguro/a.</option>
      </select>
      <label>Utilidad de los Tutoriales y Guías: </label>
    <select value={utilidadTutorial} onChange={(e)=> setUtilidadTutorial(e.target.value)} required>
      <option value="">Selecciona una opción</option>
        <option value="Los tutoriales y guías me ayudaron a utilizar la aplicación de manera efectiva."> Los tutoriales y guías me ayudaron a utilizar la aplicación de manera efectiva.</option>
        <option value="Los tutoriales y guías son útiles pero pueden mejorar.">Los tutoriales y guías son útiles pero pueden mejorar.</option>
        <option value="Los tutoriales y guías no me fueron de mucha ayuda.">Los tutoriales y guías no me fueron de mucha ayuda.</option>
        <option value="No estoy seguro/a.">No estoy seguro/a.</option>
      </select>
      <label>Formato de los Recursos de Aprendizaje: </label>
    <select value={formatoRecurso} onChange={(e)=> setFormatoRecurso(e.target.value)} required>
      <option value="">Selecciona una opción</option>
        <option value="Prefiero tutoriales en video.">Prefiero tutoriales en video.</option>
        <option value="Prefiero guías escritas con capturas de pantalla">Prefiero guías escritas con capturas de pantalla</option>
        <option value="Prefiero tutoriales interactivos dentro de la aplicación."> Prefiero tutoriales interactivos dentro de la aplicación.</option>
        <option value="Otros.">Otros.</option>
      </select>
      <label>Accesibilidad de los Recursos de Aprendizaje: </label>
    <select value={accesibilidadRecurso} onChange={(e)=> setAccesibilidadRecurso(e.target.value)} required>
      <option value="">Selecciona una opción</option>
        <option value="Los recursos de aprendizaje son fáciles de encontrar y acceder."> Los recursos de aprendizaje son fáciles de encontrar y acceder.</option>
        <option value="Se pueden mejorar la accesibilidad y la ubicación de los recursos.">Se pueden mejorar la accesibilidad y la ubicación de los recursos.</option>
        <option value="Tuve dificultades para encontrar los recursos de aprendizaje.">Tuve dificultades para encontrar los recursos de aprendizaje.</option>
        <option value="No estoy seguro/a.">No estoy seguro/a.</option>
      </select>
      <label>Frecuencia de Actualización de los Tutoriales y Guías:</label>
    <select value={accesibilidadRecurso} onChange={(e)=> setAccesibilidadRecurso(e.target.value)} required>
      <option value="">Selecciona una opción</option>
        <option value="Los tutoriales y guías se actualizan regularmente.">Los tutoriales y guías se actualizan regularmente.</option>
        <option value="Se necesitan actualizaciones más frecuentes.">Se necesitan actualizaciones más frecuentes.</option>
        <option value="No estoy seguro/a.">No estoy seguro/a.</option>
      </select>
      <label>Satisfacción General con los Recursos de Aprendizaje:</label>
    <select value={satisfaccionRecursoAprendizaje} onChange={(e)=> setSatisfaccionRecursoAprendizaje(e.target.value)} required>
      <option value="">Selecciona una opción</option>
      <option value="Totalmente satisfecho">Totalmente satisfecho</option>
        <option value="Satisfecho">Satisfecho</option>
        <option value="Neutral">Neutral</option>
        <option value="Insatisfecho">Insatisfecho</option>
        <option value="Muy insatisfecho/a">Muy insatisfecho/a</option>
      </select>
      <label>Sugerencias y Comentarios Adicionales:</label>
      <p>¿Tienes alguna sugerencia específica o comentario adicional sobre cómo podemos mejorar los tutoriales, guías y la sensibilización sobre el uso de la aplicación?</p>
      <textarea value={comentariosAprendizaje} onChange={(e)=> setComentariosAprendizaje(e.target.value)} />
<p>Agradecemos sinceramente tu participación y tus valiosas sugerencias. Estamos comprometidos con la mejora continua y tu opinión es fundamental para lograrlo muchas gracias por tomarse el tiempo en responder.</p>
      <button type="submit">Enviar Encuesta</button>
    </form>
  );
};

export default SurveyForm;
