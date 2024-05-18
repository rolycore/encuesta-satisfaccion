import React, { useState } from 'react';
import axios from 'axios';
import './SurveyForm.css';
import logo from './shalomlogo.png'; // Ajusta la ruta según la ubicación de tu imagen
const SurveyForm = () => {
  const [formData, setFormData] = useState({
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData, [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/send-survey', formData);
      alert('Encuesta enviada correctamente');
    } catch (error) {
      console.error('Error al enviar la encuesta:', error);
      alert('Hubo un problema al enviar la encuesta');
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
      <input type="text" name="nombre" onChange={handleChange} required />

      <label>Correo Electrónico:</label>
      <input type="email" name="correoElectronico" onChange={handleChange} required />
      
      <label>Servicio brindado:</label>
      <input type="text" name="serviciobrindado" onChange={handleChange} required />

      <p>Gracias por participar en nuestra encuesta. Tu opinión es crucial para mejorar nuestro servicio. 
        Por favor, responde las siguientes preguntas con sinceridad.</p>

    <h2>Sección Desarrollo de Aplicación</h2>
      <label>Cumplimiento de Requisitos Previos:</label>
      <select name="cumplimiento" onChange={handleChange} required>
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
      <select name="cambios" onChange={handleChange} required>
        <option value="">Selecciona una opción</option>
        <option value="Sí, se necesitan cambios significativos">Sí, se necesitan cambios significativos</option>
        <option value="Sí, algunos ajustes menores serían beneficiosos">Sí, algunos ajustes menores serían beneficiosos</option>
        <option value="No, la aplicación cumple con todas mis expectativas">No, la aplicación cumple con todas mis expectativas</option>
        <option value="No estoy seguro">No estoy seguro</option>
      </select>

      <label>Requisitos Principales para el Desarrollo:</label>
      <textarea name="requisitos" onChange={handleChange} required />

      <label>Experiencia General:</label>
      <select name="experiencia" onChange={handleChange} required>
        <option value="">Selecciona una opción</option>
        <option value="Excelente">Excelente</option>
        <option value="Buena">Buena</option>
        <option value="Aceptable">Aceptable</             option>
        <option value="Regular">Regular</option>
        <option value="Mala">Mala</option>
      </select>

      <label>Comentarios Adicionales:</label>
      <p>¿Hay algún comentario adicional que quieras compartir sobre el desarrollo de la aplicación?</p>
      <textarea name="comentarios" onChange={handleChange} />
      
      {/* Nuevas preguntas para Entorno de Desarrollo y Calidad de Software */}
      <h2>Sección de Satisfacción - Entorno de Desarrollo y Calidad de Software</h2>
      <p>Apreciamos tu participación en esta encuesta. Tus respuestas son esenciales para evaluar y mejorar nuestro entorno de desarrollo y asegurar la calidad del software entregado. Por favor, sé honesto en tus respuestas.</p>
      <label>Entorno de Desarrollo:</label>
      <select name="entornoDesarrollo" onChange={handleChange} required>
        <option value="">Selecciona una opción</option>
        <option value="Excelente">Excelente</option>
        <option value="Bueno">Bueno</option>
        <option value="Aceptable">Aceptable</option>
        <option value="Regular">Regular</option>
        <option value="Malo">Malo</option>
      </select>
      <label>Herramientas y Recursos:</label>
      <select name="herramientasRecursos" onChange={handleChange} required>
        <option value="">Selecciona una opción</option>
        <option value="Las herramientas proporcionadas son adecuadas y eficientes">Las herramientas proporcionadas son adecuadas y eficientes</option>
        <option value="Se necesitan mejoras en las herramientas y recursos disponibles">Se necesitan mejoras en las herramientas y recursos disponibles</option>
        <option value="No estoy seguro">No estoy seguro</option>
      </select>
      {/* ... (repite el patrón anterior para todas las nuevas preguntas de esta sección) */}
      <label>Cumplimiento de Estándares de Desarrollo:</label>
      <select name="cumplimientoEstándares" onChange={handleChange} required>
        <option value="">Selecciona una opción</option>
        <option value="Todos los estándares y prácticas de desarrollo se siguieron adecuadamente">Todos los estándares y prácticas de desarrollo se siguieron adecuadamente</option>
        <option value="Hubo algunas desviaciones de los estándares, pero en general, se cumplió.">Hubo algunas desviaciones de los estándares, pero en general, se cumplió.</option>
        <option value="Hubo importantes desviaciones de los estándares.">Hubo importantes desviaciones de los estándares.</option>
        <option value="No estoy seguro.">No estoy seguro.</option>
      </select>

      <label>Pruebas y Control de Calidad:</label>
      <select name="pruebasControlCalidad" onChange={handleChange} required>
        <option value="">Selecciona una opción</option>
        <option value="El proceso de pruebas y control de calidad fue exhaustivo.">El proceso de pruebas y control de calidad fue exhaustivo.</option>
        <option value="Se necesitan mejoras en el proceso de pruebas.">Se necesitan mejoras en el proceso de pruebas.</option>
        <option value="No estoy seguro.">No estoy seguro.</option>
      </select>
      <label>Pruebas y Control de Calidad:</label>
      <select name="colaboraciónComunicación" onChange={handleChange} required>
        <option value="">Selecciona una opción</option>
        <option value="La comunicación entre los miembros del equipo fue efectiva.">La comunicación entre los miembros del equipo fue efectiva.</option>
        <option value="Se necesitan mejoras en la colaboración y comunicación.">Se necesitan mejoras en la colaboración y comunicación.</option>
        <option value="No estoy seguro.">No estoy seguro.</option>
      </select>
      <label>Satisfacción General con el Entorno de Desarrollo:</label>
      <select name="satisfacciónDesarrollo" onChange={handleChange} required>
        <option value="">Selecciona una opción</option>
        <option value="Totalmente satisfecho">Totalmente satisfecho</option>
        <option value="Satisfecho">Satisfecho</option>
        <option value="Neutral">Neutral</option>
        <option value="Insatisfecho">Insatisfecho</option>
        <option value="Totalmente insatisfecho">Totalmente insatisfecho</option>
      </select>
      <label>Sugerencias y Comentarios Adicionales:</label>
      <p>¿Hay algún comentario adicional que quieras compartir sobre el entorno de desarrollo y la calidad del software?</p>
      <textarea name="comentariosDesarrollo" onChange={handleChange} />
      
      {/* Nuevas preguntas para Mejoras Continuas - Interfaz de Usuario y Optimización */}
      <h2>Sección de Mejoras Continuas - Interfaz de Usuario y Optimización</h2>
      <p>Agradecemos tu participación en nuestra encuesta. Tu opinión es crucial para impulsar mejoras continuas en nuestra aplicación. Por favor, comparte tus experiencias y sugerencias con sinceridad.</p>
      <label>Interfaz de Usuario (UI):</label>
      <select name="interfazUsuario" onChange={handleChange} required>
        <option value="">Selecciona una opción</option>
        <option value="La interfaz de usuario es intuitiva y fácil de usar">La interfaz de usuario es intuitiva y fácil de usar</option>
        <option value="Algunos elementos de la interfaz de usuario pueden mejorarse">Algunos elementos de la interfaz de usuario pueden mejorarse</option>
        <option value="La interfaz de usuario necesita cambios significativos">La interfaz de usuario necesita cambios significativos</option>
        <option value="No estoy seguro">No estoy seguro</option>
      </select>
      <label>Experiencia del Usuario (UX):</label>
      <select name="experienciaUsuario" onChange={handleChange} required>
        <option value="">Selecciona una opción</option>
        <option value="La experiencia del usuario es positiva y satisfactoria.">La experiencia del usuario es positiva y satisfactoria.</option>
        <option value="Se pueden realizar mejoras para optimizar la experiencia del usuario.">Se pueden realizar mejoras para optimizar la experiencia del usuario.</option>
        <option value="La experiencia del usuario necesita cambios significativos.">La experiencia del usuario necesita cambios significativos.</option>
        <option value="No estoy seguro">No estoy seguro</option>
      </select>
      <label>Optimización de Rendimiento:</label>
      <select name="optimizaciónRendimiento" onChange={handleChange} required>
        <option value="">Selecciona una opción</option>
        <option value="La aplicación funciona de manera eficiente y sin problemas.">La aplicación funciona de manera eficiente y sin problemas.</option>
        <option value="Se pueden realizar mejoras para optimizar el rendimiento.">Se pueden realizar mejoras para optimizar el rendimiento.</option>
        <option value="La aplicación experimenta problemas de rendimiento significativos.">La aplicación experimenta problemas de rendimiento significativos.</option>
        <option value="No estoy seguro">No estoy seguro</option>
      </select>
      <label>Tiempo de Carga:</label>
      <select name="tiempoCarga" onChange={handleChange} required>
        <option value="">Selecciona una opción</option>
        <option value="El tiempo de carga de la aplicación es rápido y satisfactorio.">El tiempo de carga de la aplicación es rápido y satisfactorio.</option>
        <option value="Se pueden realizar mejoras para optimizar el rendimiento.">Se pueden realizar mejoras para reducir el tiempo de carga.</option>
        <option value="El tiempo de carga es excesivamente largo.">El tiempo de carga es excesivamente largo.</option>
        <option value="No estoy seguro">No estoy seguro</option>
      </select>
      <label>Feedback y Comunicación:</label>
      <select name="feedbackComunicación" onChange={handleChange} required>
        <option value="">Selecciona una opción</option>
        <option value="El sistema proporciona retroalimentación clara y oportuna.">El sistema proporciona retroalimentación clara y oportuna.</option>
        <option value="Se pueden realizar mejoras en la comunicación y retroalimentación.">Se pueden realizar mejoras en la comunicación y retroalimentación.</option>
        <option value="La retroalimentación y comunicación son insatisfactorias.">La retroalimentación y comunicación son insatisfactorias.</option>
        <option value="No estoy seguro">No estoy seguro</option>
      </select>
      <label>Satisfacción General con las Mejoras Continuas:</label>
      <select name="satisfacciónMejoras" onChange={handleChange} required>
        <option value="">Selecciona una opción</option>
        <option value="Totalmente satisfecho">Totalmente satisfecho</option>
        <option value="Satisfecho">Satisfecho</option>
        <option value="Neutral">Neutral</option>
        <option value="Insatisfecho">Insatisfecho</option>
        <option value="Totalmente insatisfecho">Totalmente insatisfecho</option>
      </select>
      <label>Sugerencias y Comentarios Adicionales:</label>
      <p>¿Tienes alguna sugerencia específica o comentario adicional sobre cómo podemos mejorar la interfaz de usuario, optimización u otros aspectos?</p>
      <textarea name="comentariosMejoras" onChange={handleChange} />
      {/* ... (repite el patrón anterior para todas las nuevas preguntas de esta sección) */}
      
      {/* Nuevas preguntas para Generación de Reportes del Software */}
      <h2>Sección sobre Generación de Reportes del Software</h2>
      <p>Agradecemos tu participación en nuestra encuesta. Queremos mejorar la generación de reportes en nuestra aplicación. Por favor, comparte tus experiencias y sugerencias con sinceridad.</p>
      <label>Facilidad de Generación de Reportes:</label>
      <select name="facilidadReportes" onChange={handleChange} required>
        <option value="">Selecciona una opción</option>
        <option value="La generación de reportes es fácil y rápida">La generación de reportes es fácil y rápida.</option>
        <option value="Se puede mejorar la interfaz para hacer la generación de reportes más intuitiva">Se puede mejorar la interfaz para hacer la generación de reportes más intuitiva.</option>
        <option value="Encuentro dificultades para generar los reportes necesarios.">Encuentro dificultades para generar los reportes necesarios.</option>
        <option value="No estoy seguro/a.">No estoy seguro/a.</option>
      </select>
      <label>Variedad de Reportes:</label>
      <select name="variedadReportes" onChange={handleChange} required>
        <option value="">Selecciona una opción</option>
        <option value="Hay una amplia variedad de reportes disponibles que satisfacen mis necesidades.">Hay una amplia variedad de reportes disponibles que satisfacen mis necesidades.</option>
        <option value="Se necesitan más opciones y variedad en los reportes.">Se necesitan más opciones y variedad en los reportes.</option>
        <option value="Los reportes actuales no son útiles para mi situación.">Los reportes actuales no son útiles para mi situación.</option>
        <option value="No estoy seguro/a.">No estoy seguro/a.</option>
      </select>
      <label>Personalización de Reportes:</label>
      <select name="personalizaciónReportes" onChange={handleChange} required>
        <option value="">Selecciona una opción</option>
        <option value="Puedo personalizar los reportes según mis necesidades.">Puedo personalizar los reportes según mis necesidades.</option>
        <option value="Se necesitan más opciones de personalización.">Se necesitan más opciones de personalización.</option>
        <option value="La personalización de reportes es limitada o difícil de realizar.">La personalización de reportes es limitada o difícil de realizar.</option>
        <option value="No estoy seguro/a.">No estoy seguro/a.</option>
      </select>
      <label>Formato y Presentación de Reportes:</label>
      <select name="formatoReportes" onChange={handleChange} required>
        <option value="">Selecciona una opción</option>
        <option value="Los reportes son presentados de manera clara y comprensible.">Los reportes son presentados de manera clara y comprensible.</option>
        <option value="Se pueden mejorar el formato y la presentación de los reportes.">Se pueden mejorar el formato y la presentación de los reportes.</option>
        <option value="Tengo dificultades para entender la información presentada en los reportes.">Tengo dificultades para entender la información presentada en los reportes.</option>
        <option value="No estoy seguro/a.">No estoy seguro/a.</option>
      </select>
      <label>Frecuencia de Actualización de Reportes:</label>
      <select name="frecuenciaReportes" onChange={handleChange} required>
        <option value="">Selecciona una opción</option>
        <option value="Los reportes se actualizan regularmente y de manera oportuna.">Los reportes se actualizan regularmente y de manera oportuna.</option>
        <option value="La frecuencia de actualización de los reportes necesita mejorar.">La frecuencia de actualización de los reportes necesita mejorar.</option>
        <option value="No estoy seguro/a.">No estoy seguro/a.</option>
      </select>
      <label>Satisfacción General con la Generación de Reportes:</label>
      <select name="satisfacciónReportes" onChange={handleChange} required>
        <option value="">Selecciona una opción</option>
        <option value="Totalmente satisfecho">Totalmente satisfecho</option>
        <option value="Satisfecho">Satisfecho</option>
        <option value="Neutral">Neutral</option>
        <option value="Insatisfecho">Insatisfecho</option>
        <option value="Totalmente insatisfecho">Totalmente insatisfecho</option>
      </select>
      <label>Sugerencias y Comentarios Adicionales:</label>
      <p>¿Tienes alguna sugerencia específica o comentario adicional sobre cómo podemos mejorar la generación de reportes?</p>
      <textarea name="comentariosReportes" onChange={handleChange} />
      {/* ... (repite el patrón anterior para todas las nuevas preguntas de esta sección) */}
      
      {/* Nuevas preguntas para Tiempos de Respuesta y Soporte del Software */}
      <h2>Sección sobre Tiempos de Respuesta y Soporte del Software</h2>
    <p>Agradecemos tu participación en nuestra encuesta. Queremos mejorar nuestros tiempos de respuesta y el servicio de soporte. Por favor, comparte tus experiencias y sugerencias con sinceridad.</p>

      <label>Tiempo de Respuesta Inicial:</label>
      <select name="tiempoRespuesta" onChange={handleChange} required>
        <option value="">Selecciona una opción</option>
        <option value="Estoy satisfecho/a con el tiempo de respuesta inicial al solicitar soporte">Estoy satisfecho/a con el tiempo de respuesta inicial al solicitar soporte</option>
        <option value="El tiempo de respuesta inicial podría mejorar">El tiempo de respuesta inicial podría mejorar</option>
        <option value="He experimentado demoras significativas en el tiempo de respuesta inicial">He experimentado demoras significativas en el tiempo de respuesta inicial</option>
        <option value="No estoy seguro/a">No estoy seguro/a</option>
      </select>
      <label>Eficiencia en la Resolución de Problemas:</label>
      <select name="eficienciaResolución" onChange={handleChange} required>
        <option value="">Selecciona una opción</option>
        <option value="Los problemas se resuelven de manera eficiente y dentro de un plazo razonable.">Los problemas se resuelven de manera eficiente y dentro de un plazo razonable.</option>
        <option value="Se pueden hacer mejoras en la eficiencia de la resolución de problemas.">Se pueden hacer mejoras en la eficiencia de la resolución de problemas.</option>
        <option value="He experimentado demoras excesivas en la resolución de problemas.">He experimentado demoras excesivas en la resolución de problemas.</option>
        <option value="No estoy seguro/a">No estoy seguro/a</option>
      </select>
      <label>Calidad del Soporte Técnico:</label>
      <select name="calidadSoporte" onChange={handleChange} required>
        <option value="">Selecciona una opción</option>
        <option value="El soporte técnico proporcionado es de alta calidad.">El soporte técnico proporcionado es de alta calidad.</option>
        <option value="Se pueden realizar mejoras en la calidad del soporte técnico.">Se pueden realizar mejoras en la calidad del soporte técnico.</option>
        <option value="He tenido problemas con la calidad del soporte técnico.">He tenido problemas con la calidad del soporte técnico.</option>
        <option value="No estoy seguro/a">No estoy seguro/a</option>
      </select>
      <label>Disponibilidad del Soporte:</label>
      <select name="disponibilidadSoporte" onChange={handleChange} required>
        <option value="">Selecciona una opción</option>
        <option value="El soporte está disponible cuando lo necesito.">El soporte está disponible cuando lo necesito.</option>
        <option value="Se necesitan mejoras en la disponibilidad del soporte.">Se necesitan mejoras en la disponibilidad del soporte.</option>
        <option value="He experimentado dificultades para obtener soporte cuando lo necesito.">He experimentado dificultades para obtener soporte cuando lo necesito.</option>
        <option value="No estoy seguro/a">No estoy seguro/a</option>
      </select>
      <label>Comunicación del Proceso: </label>
      <select name="comunicaciónProceso" onChange={handleChange} required>
        <option value="">Selecciona una opción</option>
        <option value="La comunicación sobre el proceso de soporte es clara y transparente.">La comunicación sobre el proceso de soporte es clara y transparente.</option>
        <option value="Se necesitan mejoras en la comunicación sobre el proceso de soporte.">Se necesitan mejoras en la comunicación sobre el proceso de soporte.</option>
        <option value="La comunicación sobre el proceso de soporte es insatisfactoria.">La comunicación sobre el proceso de soporte es insatisfactoria.</option>
        <option value="No estoy seguro/a">No estoy seguro/a</option>
      </select>
      <label>Disponibilidad del Soporte:</label>
      <select name="satisfacciónSoporte" onChange={handleChange} required>
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
      <textarea name="comentariosSoporte" onChange={handleChange} />

      <h2>Sección sobre la Seguridad de la Aplicación y la Protección de los Datos</h2>
    <p>Agradecemos tu participación en nuestra encuesta. La seguridad de la aplicación y la protección de los datos son prioridades para nosotros. Por favor, comparte tus experiencias y sugerencias con sinceridad.</p>
    <label>Seguridad General de la Aplicación:</label>
    <select name="seguridadAplicacion" onChange={handleChange} required>
      <option value="">Selecciona una opción</option>
        <option value="Totalmente satisfecho">Totalmente satisfecho</option>
        <option value="Satisfecho">Satisfecho</option>
        <option value="Neutral">Neutral</option>
        <option value="Insatisfecho">Insatisfecho</option>
        <option value="Muy insatisfecho/a">Muy insatisfecho/a</option>
      </select>
      <label>Protección de la Información Personal:</label>
    <select name="proteccionInfoPersonal" onChange={handleChange} required>
      <option value="">Selecciona una opción</option>
        <option value="Totalmente satisfecho">Totalmente satisfecho</option>
        <option value="Satisfecho">Satisfecho</option>
        <option value="Neutral">Neutral</option>
        <option value="Insatisfecho">Insatisfecho</option>
        <option value="Muy insatisfecho/a">Muy insatisfecho/a</option>
      </select>
      <label>Seguridad en la Autenticación y Acceso:</label>
    <select name="seguridadAuthAcceso" onChange={handleChange} required>
      <option value="">Selecciona una opción</option>
        <option value="Los métodos de autenticación son seguros y efectivos.">Los métodos de autenticación son seguros y efectivos.</option>
        <option value="Los métodos de autenticación pueden mejorar.">Los métodos de autenticación pueden mejorar.</option>
        <option value="Tengo preocupaciones sobre la seguridad de los métodos de autenticación.">Tengo preocupaciones sobre la seguridad de los métodos de autenticación.</option>
        <option value="No estoy seguro/a.">Insatisfecho</option>
      </select>
      <label>Encriptación de Datos:</label>
    <select name="encriptacionDatos" onChange={handleChange} required>
      <option value="">Selecciona una opción</option>
        <option value="Estoy satisfecho/a con las medidas de encriptación de datos.">Estoy satisfecho/a con las medidas de encriptación de datos.</option>
        <option value="Se pueden mejorar las medidas de encriptación de datos.">Se pueden mejorar las medidas de encriptación de datos.</option>
        <option value="Tengo preocupaciones sobre la encriptación de datos.">Neutral</option>
        <option value="No estoy seguro/a.">Insatisfecho</option>
      </select>
      <label>Manejo de Incidentes de Seguridad:</label>
    <select name="manejoSeguridad" onChange={handleChange} required>
      <option value="">Selecciona una opción</option>
        <option value="Estoy satisfecho/a con la forma en que se manejan los incidentes de seguridad.">Estoy satisfecho/a con la forma en que se manejan los incidentes de seguridad.</option>
        <option value="Se pueden mejorar las respuestas a los incidentes de seguridad.">Se pueden mejorar las respuestas a los incidentes de seguridad.</option>
        <option value="Tengo preocupaciones sobre cómo se manejan los incidentes de seguridad.">Tengo preocupaciones sobre cómo se manejan los incidentes de seguridad.</option>
        <option value="No estoy seguro/a.">Insatisfecho</option>
      </select>
      <label>Política de Privacidad y Transparencia:</label>
    <select name="politicaPrivTransparencia" onChange={handleChange} required>
      <option value="">Selecciona una opción</option>
        <option value="Estoy satisfecho/a con la política de privacidad y la transparencia.">Estoy satisfecho/a con la política de privacidad y la transparencia.</option>
        <option value="La política de privacidad y transparencia puede mejorar.">La política de privacidad y transparencia puede mejorar.</option>
        <option value="Tengo preocupaciones sobre la política de privacidad y transparencia.">Tengo preocupaciones sobre la política de privacidad y transparencia.</option>
        <option value="No estoy seguro/a.">Insatisfecho</option>
      </select>
      <label>Concienciación sobre Seguridad:</label>
    <select name="concienciacionSeguridad" onChange={handleChange} required>
      <option value="">Selecciona una opción</option>
        <option value="La aplicación proporciona suficiente información sobre la seguridad y protección de datos.">La aplicación proporciona suficiente información sobre la seguridad y protección de datos.</option>
        <option value="Se puede mejorar la información y concienciación sobre la seguridad.">Se puede mejorar la información y concienciación sobre la seguridad.</option>
        <option value="La información sobre seguridad es insuficiente.">La información sobre seguridad es insuficiente.</option>
        <option value="No estoy seguro/a.">Insatisfecho</option>
      </select>
      <label>Satisfacción General con la Seguridad y Protección de Datos:</label>
    <select name="satisfacionGeneralSeguridad" onChange={handleChange} required>
      <option value="">Selecciona una opción</option>
      <option value="Totalmente satisfecho">Totalmente satisfecho</option>
        <option value="Satisfecho">Satisfecho</option>
        <option value="Neutral">Neutral</option>
        <option value="Insatisfecho">Insatisfecho</option>
        <option value="Muy insatisfecho/a">Muy insatisfecho/a</option>
      </select>
      <label>Sugerencias y Comentarios Adicionales:</label>
      <p>¿Tienes alguna sugerencia específica o comentario adicional sobre cómo podemos mejorar la seguridad de la aplicación y la protección de los datos?</p>
      <textarea name="comentariosSeguridad" onChange={handleChange} />
     
      <h2>Sección sobre Sensibilización y Guías de Uso de la Aplicación</h2>
    <p>Agradecemos tu participación en nuestra encuesta. Tu opinión es crucial para mejorar nuestros tutoriales, guías y la sensibilización sobre el uso de la aplicación. Por favor, comparte tus experiencias y sugerencias con sinceridad.</p>
    <label>Disponibilidad de Recursos de Aprendizaje:</label>
    <select name="disponibilidadRecursoAprendizaje" onChange={handleChange} required>
      <option value="">Selecciona una opción</option>
        <option value="No es necesario tutoriales o guias, la aplicacion es bien intuitiva.">No es necesario tutoriales o guias, la aplicacion es bien intuitiva.</option>
        <option value="Hay suficientes tutoriales y guías disponibles">Hay suficientes tutoriales y guías disponibles</option>
        <option value="Se necesitan más recursos de aprendizaje.">Se necesitan más recursos de aprendizaje.</option>
        <option value="Los recursos de aprendizaje son insuficientes.">Los recursos de aprendizaje son insuficientes.</option>
        <option value="No estoy seguro/a.">No estoy seguro/a.</option>
      </select>
      <label>Claridad de los Tutoriales y Guías:</label>
    <select name="claridadTutorial" onChange={handleChange} required>
      <option value="">Selecciona una opción</option>
        <option value="Los tutoriales y guías son claros y fáciles de entender."> Los tutoriales y guías son claros y fáciles de entender.</option>
        <option value="Algunos tutoriales y guías necesitan más claridad.">Algunos tutoriales y guías necesitan más claridad.</option>
        <option value="Los tutoriales y guías son difíciles de entender.">Los tutoriales y guías son difíciles de entender.</option>
        <option value="No estoy seguro/a.">No estoy seguro/a.</option>
      </select>
      <label>Utilidad de los Tutoriales y Guías: </label>
    <select name="utilidadTutorial" onChange={handleChange} required>
      <option value="">Selecciona una opción</option>
        <option value="Los tutoriales y guías me ayudaron a utilizar la aplicación de manera efectiva."> Los tutoriales y guías me ayudaron a utilizar la aplicación de manera efectiva.</option>
        <option value="Los tutoriales y guías son útiles pero pueden mejorar.">Los tutoriales y guías son útiles pero pueden mejorar.</option>
        <option value="Los tutoriales y guías no me fueron de mucha ayuda.">Los tutoriales y guías no me fueron de mucha ayuda.</option>
        <option value="No estoy seguro/a.">No estoy seguro/a.</option>
      </select>
      <label>Formato de los Recursos de Aprendizaje: </label>
    <select name="formatoRecurso" onChange={handleChange} required>
      <option value="">Selecciona una opción</option>
        <option value="Prefiero tutoriales en video.">Prefiero tutoriales en video.</option>
        <option value="Prefiero guías escritas con capturas de pantalla">Prefiero guías escritas con capturas de pantalla</option>
        <option value="Prefiero tutoriales interactivos dentro de la aplicación."> Prefiero tutoriales interactivos dentro de la aplicación.</option>
        <option value="Otros.">Otros.</option>
      </select>
      <label>Accesibilidad de los Recursos de Aprendizaje: </label>
    <select name="accesibilidadRecurso" onChange={handleChange} required>
      <option value="">Selecciona una opción</option>
        <option value="Los recursos de aprendizaje son fáciles de encontrar y acceder."> Los recursos de aprendizaje son fáciles de encontrar y acceder.</option>
        <option value="Se pueden mejorar la accesibilidad y la ubicación de los recursos.">Se pueden mejorar la accesibilidad y la ubicación de los recursos.</option>
        <option value="Tuve dificultades para encontrar los recursos de aprendizaje.">Tuve dificultades para encontrar los recursos de aprendizaje.</option>
        <option value="No estoy seguro/a.">No estoy seguro/a.</option>
      </select>
      <label>Frecuencia de Actualización de los Tutoriales y Guías:</label>
    <select name="accesibilidadRecurso" onChange={handleChange} required>
      <option value="">Selecciona una opción</option>
        <option value="Los tutoriales y guías se actualizan regularmente.">Los tutoriales y guías se actualizan regularmente.</option>
        <option value="Se necesitan actualizaciones más frecuentes.">Se necesitan actualizaciones más frecuentes.</option>
        <option value="No estoy seguro/a.">No estoy seguro/a.</option>
      </select>
      <label>Satisfacción General con los Recursos de Aprendizaje:</label>
    <select name="satisfaccionRecursoAprendizaje" onChange={handleChange} required>
      <option value="">Selecciona una opción</option>
      <option value="Totalmente satisfecho">Totalmente satisfecho</option>
        <option value="Satisfecho">Satisfecho</option>
        <option value="Neutral">Neutral</option>
        <option value="Insatisfecho">Insatisfecho</option>
        <option value="Muy insatisfecho/a">Muy insatisfecho/a</option>
      </select>
      <label>Sugerencias y Comentarios Adicionales:</label>
      <p>¿Tienes alguna sugerencia específica o comentario adicional sobre cómo podemos mejorar los tutoriales, guías y la sensibilización sobre el uso de la aplicación?</p>
      <textarea name="comentariosAprendizaje" onChange={handleChange} />
<p>Agradecemos sinceramente tu participación y tus valiosas sugerencias. Estamos comprometidos con la mejora continua y tu opinión es fundamental para lograrlo muchas gracias por tomarse el tiempo en responder.</p>
      <button type="submit">Enviar Encuesta</button>
    </form>
  );
};

export default SurveyForm;
