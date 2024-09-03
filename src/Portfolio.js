import React, { useState } from 'react';
import { Github, Linkedin, Mail, Sun, Moon, Briefcase, GraduationCap, } from 'lucide-react';
import MySVG from './imgs/mysql.svg';
import Css from './imgs/css.svg';
import Html from './imgs/html5.svg';
import Java from './imgs/java.svg';
import JavaScript from './imgs/javascript.svg';
import ReactLogo from './imgs/react.svg';
import Tailwind from './imgs/tailwindcss.svg';
import Git from './imgs/github-light.svg';
import MiFoto from './imgs/miyo.jpg';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useNavigate } from 'react-router-dom';
import projects from './projects';
import PillTabs from './PillTabs';

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
  

 
const timelineData = [
  {
    education: {
      year: "2015",
      title: "Técnico en Electromecánica de vehiculos",
      description: "IES Son Pacs 2015 - 2017 Grado medio de FP de mecánico de vehiculos y automoviles.",
      icon: GraduationCap
    },
    experience: {
      year: "2017",
      title: "Mecánico oficial concesionario Jaguar & Land Rover",
      description: "One Motors 2017 - 2019 Mecánico de automoviles, hacia tanto mecánica pesada como mecánica rápida, sistemas de frenos e hidráulica.",
      icon: Briefcase
    }
  },
  {
    education: {
      year: "2017",
      title: "Certificado Nivel 2, Jaguar & Land Rover",
      description: "2017 - 2018 Certificación oficial para podere trabajar en categoria superior para la marca Jaguar & Land Rover",
      icon: GraduationCap
    },
    experience: {
      year: "2019",
      title: "Mecánico oficial concesionario Hyundai",
      description: "Proa Automoción 2019 - 2020 Mecánico de automoviles, hacia tanto mecánica pesada como mecánica rápida, sistemas de frenos e hidráulica.",
      icon: Briefcase
    }
  },
  {
    education: {
      year: "2024",
      title: "Grado superior Desarrollo de aplicaciones web",
      description: "IES Son Ferrer 2023 - 2025 Grado superior en desarrollo de aplicaciones web. Enfocado en el uso de lenguajes de programación para ese campo.",
      icon: GraduationCap
    },
    experience: {
      year: "2024",
      title: "Técnico en sistemas de seguridad y videovigilancia",
      description: "Alpha Seguridad 2020 - 2024 Tecnico de sistemas de seguridad y videovigilancia para la empresa mas grande de Mallorca.",
      icon: Briefcase
    }
  },
  
];

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navigate = useNavigate(); // Hook para navegar

  const [selectedTechnology, setSelectedTechnology] = useState(null);

  const filteredProjects = selectedTechnology
    ? projects.filter((project) => project.technologies.includes(selectedTechnology))
    : projects;
  
  
  const [text] = useTypewriter({
    words: ['Manuel Cuesta Rodriguez'],
    loop: 1,
  });

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
          <h1 className="text-3xl font-bold mt-4">
            {text}
            <Cursor cursorStyle='|' />
          </h1>
          <p className="mt-2 text-xl text-gray-600 dark:text-gray-400">Desarrollador Web</p>
          <div className="mt-4 flex justify-center space-x-4">
  <a
    href="https://github.com/manu989898"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-blue-500 transition-colors duration-200 transform hover:scale-110"
  >
    <Github size={24} />
  </a>
  <a
    href="https://www.linkedin.com/in/manuel-cuesta-rodriguez/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-blue-500 transition-colors duration-200 transform hover:scale-110"
  >
    <Linkedin size={24} />
  </a>
  <a
    href="mailto:apkmanu1@gmail.com"
    className="text-gray-400 hover:text-blue-500 transition-colors duration-200 transform hover:scale-110"
  >
    <Mail size={24} />
  </a>
</div>
        </header>

        <main>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white text-center">Sobre mí</h2>
          <section className="mb-12 hover:shadow-lg transition-shadow duration-300 p-6 rounded-lg bg-white dark:bg-gray-800">
            <p className="text-gray-700 dark:text-gray-300">
            Hola, soy Manu. Un desarrollador de aplicaciones web con una pasión por crear experiencias digitales innovadoras y eficientes. Me encanta trabajar en equipo y estoy siempre en busca de nuevos desafíos para mejorar mis habilidades y aprender nuevas tecnologías. El campo que más me gusta es el "backend".
            </p>
          </section>


          <section className="mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Proyectos </h2>
      <PillTabs onTabClick={setSelectedTechnology} />
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.03] mb-4"
              onClick={() => navigate(`/project/${index}`)} // Navegar al proyecto correspondiente
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={`Imagen del ${project.title}`}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-5">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {project.description.slice(0, 100)}...
                </p>
              </div>
            </div>
            
          ))
        ) : (
          <section className="mb-12 hover:shadow-lg transition-shadow duration-300 p-6 rounded-lg bg-white dark:bg-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">No hay proyectos disponibles</h2>
            
          </section>
        )}
      </div>
    </section>


       
<section className="mb-5 ">
            <h2 className="mt-10 text-2xl font-bold mb-8 text-center">Experiencia y Educación</h2>
            <div className="container mx-auto w-full">
              <div className="relative wrap overflow-hidden">
                <div className="border-2-2 absolute border-opacity-20 border-gray-700 dark:border-gray-300 h-full border left-1/2"></div>
                
                {timelineData.map((item, index) => (
                  <div key={index} className="mb-8 flex justify-between items-stretch w-full">
                    <TimelineItem {...item.education} isLeft={true} />
                    <TimelineItem {...item.experience} isLeft={false} />
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="mb-12">
  <h2 className="text-2xl font-bold mb-4 text-center">Habilidades</h2>
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
        <p className="mt-1 text-sm font-semibold text-center">{skill.name}</p>
      </span>
    ))}
  </div>
</section>

        </main>
      </div>
    </div>
  );
};

export default Portfolio;