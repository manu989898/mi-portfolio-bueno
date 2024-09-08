import React, { useState } from 'react';
import { Github, Linkedin, Mail, Sun, Moon, } from 'lucide-react';
import projects from './Dependences/projects';
import PillTabs from './Dependences/PillTabs';
import TimelineData from './Dependences/TimelineData';
import TimelineItem from './Dependences/TimelineItem';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useNavigate } from 'react-router-dom';

// Importación las imágenes de las tecnologías
import MySVG from './imgs/mysql.svg';
import Css from './imgs/css.svg';
import Html from './imgs/html5.svg';
import Java from './imgs/java.svg';
import JavaScript from './imgs/javascript.svg';
import ReactLogo from './imgs/react.svg';
import Tailwind from './imgs/tailwindcss.svg';
import Git from './imgs/github-light.svg';
import MiFoto from './imgs/miyo.jpg';

  

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
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-900'}`}>
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
            <h2 className="mb-4 transition-shadow duration-300 text-2xl font-bold text-center dark:bg-gray-800">Sobre mí</h2>
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
    <h2 className="text-2xl font-bold mt-7 mb-4 text-center">Estadisticas GitHub</h2>
    <img className='mr-auto ml-auto mt-2 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.03]'
  src="https://github-readme-stats.vercel.app/api?username=manu989898&show_icons=true&theme=flag-jolly"
  alt="GitHub Stats"
  
/>
       
<section className="mb-5 ">
            <h2 className="mt-10 text-2xl font-bold mb-8 text-center">Experiencia y Educación</h2>
            <div className="container mx-auto w-full">
              <div className="relative wrap overflow-hidden">
                <div className="border-2-2 absolute border-opacity-20 border-gray-700 dark:border-gray-300 h-full border left-1/2"></div>
                
                {TimelineData.map((item, index) => (
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
        className="flex flex-col items-center justify-center bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 p-2 rounded-full transition-transform duration-250 hover:scale-110 w-24 h-24 border-2 border-blue-500"
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