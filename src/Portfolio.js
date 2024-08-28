import React, { useState } from 'react';
import { Github, Linkedin, Mail, Sun, Moon, Briefcase, GraduationCap } from 'lucide-react';


const TimelineItem = ({ year, title, description, icon: Icon }) => (
    <div className="mb-8 flex justify-between items-center w-full right-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white"><Icon size={18} /></h1>
      </div>
      <div className="order-1 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-gray-800 dark:text-white text-xl">{year}</h3>
        <h4 className="mb-3 font-bold text-gray-700 dark:text-gray-200">{title}</h4>
        <p className="text-sm leading-snug tracking-wide text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
  const projects = [
    {
      title: "Proyecto 1",
      description: "Breve descripción del proyecto y las tecnologías utilizadas.",
      image: "/path/to/your/image2.jpg" // Ruta de la imagen
    },
    {
      title: "Proyecto 2",
      description: "Breve descripción del proyecto y las tecnologías utilizadas.",
      image: "/path/to/your/image2.jpg" // Ruta de la imagen
    },
    {
      title: "Proyecto 3",
      description: "Breve descripción del proyecto y las tecnologías utilizadas.",
      image: "/path/to/your/image3.jpg" // Ruta de la imagen
    },
    {
      title: "Proyecto 4",
      description: "Breve descripción del proyecto y las tecnologías utilizadas.",
      image: "/path/to/your/image4.jpg" // Ruta de la imagen
    },
  ];
  
  const timelineData = [
    {
      year: "2023",
      title: "Desarrollador Full Stack",
      description: "Trabajé en proyectos utilizando React, Node.js y MongoDB.",
      icon: Briefcase
    },
    {
      year: "2022",
      title: "Grado en Ingeniería Informática",
      description: "Me gradué con honores de la Universidad XYZ.",
      icon: GraduationCap
    },
    {
      year: "2021",
      title: "Prácticas en Empresa Tech",
      description: "Realicé prácticas de verano desarrollando aplicaciones web.",
      icon: Briefcase
    },
    // Puedes añadir más elementos aquí
  ];
const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };



  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <header className="text-center mb-12 relative">
          <button
            onClick={toggleDarkMode}
            className="absolute top-0 right-0 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <img
            className="mx-auto h-32 w-32 rounded-full border-4 border-blue-500 transition-transform duration-300 hover:scale-110"
            src="/api/placeholder/128/128"
            alt="Tu foto"
          />
          <h1 className="mt-4 text-4xl font-bold">Manu Cuesta Rodriguez</h1>
          <p className="mt-2 text-xl text-gray-600 dark:text-gray-400">Desarrollador Web</p>
          <div className="mt-4 flex justify-center space-x-4">
            {[Github, Linkedin, Mail].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-200 transform hover:scale-110"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </header>

        <main>
          <section className="mb-12 hover:shadow-lg transition-shadow duration-300 p-6 rounded-lg bg-white dark:bg-gray-800">
  <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Sobre mí</h2>
  <p className="text-gray-700 dark:text-gray-300">
    Soy un desarrollador web apasionado por crear experiencias digitales increíbles.
    Me especializo en React, Node.js y diseño de UI/UX.
  </p>
</section>

<section className="mb-12">
<h2 className="text-2xl font-bold mb-4">Proyectos</h2>
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
    {projects.map((project, index) => (
      <div
        key={index}
        className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
      >
        {project.image && (
          <img
            src={project.image}
            alt={`Imagen del ${project.title}`}
            className="w-full h-48 object-cover"
          />
        )}
        <div className="p-5">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">{project.title}</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {project.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Habilidades</h2>
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'JavaScript', 'HTML', 'CSS', 'Git'].map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold transition-transform duration-200 hover:scale-110"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-8 my-12">Experiencia y Educación</h2>
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div className="border-2-2 absolute border-opacity-20 border-gray-700 dark:border-gray-300 h-full border left-1/2"></div>
                {timelineData.map((item, index) => (
                  <TimelineItem key={index} {...item} />
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Portfolio;