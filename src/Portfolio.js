import React, { useState } from 'react';
import { Github, Linkedin, Mail, Sun, Moon, Briefcase, GraduationCap } from 'lucide-react';
import MySVG from './imgs/mysql.svg';
import Css from './imgs/css.svg';
import Html from './imgs/html5.svg';
import Java from './imgs/java.svg';
import JavaScript from './imgs/javascript.svg';
import ReactLogo from './imgs/react.svg';
import Tailwind from './imgs/tailwindcss.svg';
import Git from './imgs/github-light.svg';
import ProyectoFoto from './imgs/tiendafoto.jpg';
import MiFoto from './imgs/miyo.jpg';
import TypingEffect from './TypingEffect';

const TimelineItem = ({ year, title, description, icon: Icon, isLeft }) => (
    <div className={`w-full md:w-1/2 ${isLeft ? 'pr-8' : 'pl-8'}`}>
      <div className="p-6 rounded-lg shadow bg-white dark:bg-gray-800 h-full overflow-hidden transition-transform duration-300 ease-in-out hover:shadow-lg hover:bg-gray-50 hover:dark:bg-gray-700 transform hover:scale-[1.02] max-w-[97%] mx-auto">
        <div className="flex items-center mb-2">
          <Icon size={18} className="mr-2 text-blue-500" />
          <h3 className="font-bold text-lg text-gray-800 dark:text-white">{year}</h3>
        </div>
        <h4 className="text-md font-semibold mb-1 text-gray-700 dark:text-gray-200">{title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
  

const projects = [
  {
    title: "Proyecto 1",
    description: "Breve descripción del proyecto y las tecnologías utilizadas.",
    image: ProyectoFoto,
  },
  {
    title: "Proyecto 2",
    description: "Breve descripción del proyecto y las tecnologías utilizadas.",
    image: "/path/to/your/image2.jpg"
  },
  {
    title: "Proyecto 3",
    description: "Breve descripción del proyecto y las tecnologías utilizadas.",
    image: "/path/to/your/image3.jpg"
  },
  {
    title: "Proyecto 4",
    description: "Breve descripción del proyecto y las tecnologías utilizadas.",
    image: "/path/to/your/image4.jpg"
  },
];

const timelineData = [
  {
    education: {
      year: "2022",
      title: "Grado en Ingeniería Informática",
      description: "Me gradué con honores de la Universidad XYZ, especializándome en desarrollo de software y sistemas distribuidos.",
      icon: GraduationCap
    },
    experience: {
      year: "2023",
      title: "Desarrollador Full Stack",
      description: "Trabajé en proyectos utilizando React, Node.js y MongoDB. Implementé soluciones escalables para clientes de diversos sectores.",
      icon: Briefcase
    }
  },
  {
    education: {
      year: "2020",
      title: "Curso de Desarrollo Web Full Stack",
      description: "Completé un bootcamp intensivo en desarrollo web, aprendiendo las últimas tecnologías y mejores prácticas de la industria.",
      icon: GraduationCap
    },
    experience: {
      year: "2021",
      title: "Prácticas en Empresa Tech",
      description: "Realicé prácticas de verano desarrollando aplicaciones web. Colaboré en un equipo ágil y mejoré mis habilidades técnicas y de comunicación.",
      icon: Briefcase
    }
  },
  {
    education: {
      year: "2022",
      title: "Grado en Ingeniería Informática",
      description: "Me gradué con honores de la Universidad XYZ, especializándome en desarrollo de software y sistemas distribuidos.",
      icon: GraduationCap
    },
    experience: {
      year: "2023",
      title: "Desarrollador Full Stack",
      description: "Trabajé en proyectos utilizando React, Node.js y MongoDB. Implementé soluciones escalables para clientes de diversos sectores.",
      icon: Briefcase
    }
  },
  {
    education: {
      year: "2020",
      title: "Curso de Desarrollo Web Full Stack",
      description: "Completé un bootcamp intensivo en desarrollo web, aprendiendo las últimas tecnologías y mejores prácticas de la industria.",
      icon: GraduationCap
    },
    experience: {
      year: "2021",
      title: "Prácticas en Empresa Tech",
      description: "Realicé prácticas de verano desarrollando aplicaciones web. Colaboré en un equipo ágil y mejoré mis habilidades técnicas y de comunicación.",
      icon: Briefcase
    }
  },
];

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <header className="text-center mb-12 relative">
          <button
            onClick={toggleDarkMode}
            className="absolute top-0 right-0 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 transform hover:scale-110 border-2 border-gray-700 dark:border-gray-400"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <img
            className="mx-auto h-64 w-64 rounded-full border-4 border-blue-500 transition-transform duration-300 hover:scale-110"
            src={MiFoto}
            alt="Tu foto"
          />
          <h1 className="text-3xl font-bold mt-4">Tu Nombre</h1>
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
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.03]"
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

          <section className="mb-12">
  <h2 className="text-2xl font-bold mb-4">Habilidades</h2>
  <div className="flex flex-wrap gap-4">
    {[
      { icon: MySVG, name: 'MySQL' },
      { icon: Css, name: 'CSS' },
      { icon: Html, name: 'HTML5' },
      { icon: Java, name: 'Java' },
      { icon: JavaScript, name: 'JavaScript' },
      { icon: ReactLogo, name: 'React' },
      { icon: Tailwind, name: 'TailwindCSS' },
      { icon: Git, name: 'Git' },
    ].map((skill, index) => (
      <span
        key={index}
        className="flex flex-col items-center justify-center bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 p-2 rounded-full transition-transform duration-250 hover:scale-110 w-24 h-24"
      >
        <img src={skill.icon} alt={`${skill.name} Icon`} className="w-8 h-8" />
        <p className="mt-1 text-xs font-semibold text-center">{skill.name}</p>
      </span>
    ))}
  </div>
</section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Experiencia y Educación</h2>
            <div className="container mx-auto w-full">
              <div className="relative wrap overflow-hidden">
                <div className="border-2-2 absolute border-opacity-20 border-gray-700 dark:border-gray-300 h-full border left-1/2"></div>
                
                {timelineData.map((item, index) => (
                  <div key={index} className="mb-8 flex justify-between items-center w-full">
                    <TimelineItem {...item.education} isLeft={true} />
                    <TimelineItem {...item.experience} isLeft={false} />
                  </div>
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