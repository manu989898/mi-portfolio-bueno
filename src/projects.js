import TiendaFoto from './imgs/tiendafoto.jpg';
import UrlShort from './imgs/urlshort.JPG';
const projects = [
    {
      id: 0,
      title: "E-commerce Website",
      description: "Un sitio web de comercio electrónico totalmente funcional, creado con React y Redux, con una integración de API para procesar pagos y manejar la autenticación de usuarios.",
      image: "https://via.placeholder.com/300x200?text=E-commerce+Website",
      image_description: TiendaFoto,
      technologies: ["react", "redux", "javascript"],
    },
    {
      id: 1,
      title: "Aplicación acortadora de URLs",
      description: "Es una app para acortar urls, usando la API de is.gd.",
      image: UrlShort,
      image_description: UrlShort,
      technologies: ["javascript", "nodejs", "html5", "css3"],
    },
    {
      id: 2,
      title: "Portfolio Personal",
      description: "Un portafolio personal para mostrar mis proyectos y habilidades. Construido con HTML5, CSS3 y JavaScript, utilizando prácticas modernas de diseño web.",
      image: "https://via.placeholder.com/300x200?text=Personal+Portfolio",
      image_description: "Imagen de un portafolio personal",
      technologies: ["html5", "css3", "javascript"],
    },
    {
      id: 3,
      title: "Sistema de Blogs",
      description: "Un sistema de blogging donde los usuarios pueden crear y compartir artículos. Implementado con React para el frontend y Node.js para el backend.",
      image: "https://via.placeholder.com/300x200?text=Blog+System",
      image_description: "Imagen de un sistema de blogs",
      technologies: ["react", "nodejs", "mongodb"],
    },
    {
        id: 4,
        title: "Sistema de Blog",
        description: "Un sistema de blogging donde los usuarios pueden crear y compartir artículos. Implementado con React para el frontend y Node.js para el backend.",
        image: "https://via.placeholder.com/300x200?text=Blog+System",
        image_description: "Imagen de un sistema de blogs",
        technologies: ["mysql"],
      },
  ];
  
export default projects;
