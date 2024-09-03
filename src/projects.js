import UrlShort from './imgs/urlshort.JPG';
import Tienda from './imgs/tienda.JPG';
import Port from './imgs/port.JPG';
import VUrlShort from './videos/URLShortener.mp4';

const projects = [
  {
    id: 0,
    title: "Aplicación acortadora de URLs",
    description: "Este proyecto es una aplicación web simple y eficiente diseñada para acortar URLs largas, facilitando su uso y compartición. Desarrollado utilizando tecnologías modernas como<strong> Node.js </strong>para el backend y <strong>HTML5, CSS3, y JavaScript</strong> para el frontend, este acortador de URLs aprovecha la<strong> API pública de is.gd </strong>para generar enlaces cortos de manera rápida y confiable.  La aplicación es ligera y está optimizada para un rendimiento rápido, haciendo que el proceso de acortamiento de URLs sea casi instantáneo.",
    image: UrlShort,
    image_description: UrlShort,
    technologies: ["javascript", "nodejs", "html5", "css3"],
    github: "https://github.com/manu989898/acortador-url.git",
    video: VUrlShort,
  },
    {
      id: 1,
      title: "App Caja Registradora",
      description: "Una aplicación diseñada para facilitar la gestión de ventas en pequeños negocios. Ofrece una interfaz intuitiva y funciones esenciales para el manejo eficiente de transacciones diarias. Sus funcionalidades son:<strong> Gestión de reservas, Impresión de ticket, Generación de informes de ventas e Interfaz amigable y fácil de usar</strong>",
      image: Tienda,
      image_description: Tienda,
      technologies: ["java"],
      github: "https://github.com/manu989898/JavaClase/tree/master/Tienda",
      video: "",
    
    },
    {
      id: 2,
      title: "Portfolio Personal",
      description: "Un portafolio personal para mostrar mis proyectos y habilidades. Construido con <strong>HTML5, CSS3 y JavaScript</strong>, utilizando prácticas modernas de diseño web. Implementa tecnologias como react, tailwind... Tambien implementa la opción de uso del<strong> dark mode.</strong>",  
      image: Port,
      image_description: Port,
      technologies: ["html5", "css3", "javascript", "react", "tailwind"],
      github: "https://github.com/manu989898/mi-portfolio-bueno",
      video: "",
    },
  
  ];
  
export default projects;
