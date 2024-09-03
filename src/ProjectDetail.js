import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import projects from './projects'; // Importamos los proyectos definidos en otro archivo.
import Java from './imgs/java.svg';
import JavaScript from './imgs/javascript.svg';
import ReactLogo from './imgs/react.svg';
import MySql from './imgs/mysql.svg';
import Html5 from './imgs/html5.svg';
import Css3 from './imgs/css.svg';
import Nodejs from './imgs/nodejs.svg';
import Mongodb from './imgs/mongodb.svg';
import Redux from './imgs/redux.svg';
import Spring from './imgs/spring.svg';
import Git from './imgs/github-light.svg';

// Definimos un objeto que asocia tecnologías con sus íconos y nombres.
const technologies = {
  java: { name: "Java", icon: Java },
  javascript: { name: "JavaScript", icon: JavaScript },
  react: { name: "React", icon: ReactLogo },
  mysql: { name: "MySQL", icon: MySql },
  html5: { name: "HTML5", icon: Html5 },
  css3: { name: "CSS3", icon: Css3 },
  nodejs: { name: "Node.js", icon: Nodejs },
  mongodb: { name: "MongoDB", icon: Mongodb },
  redux: { name: "Redux", icon: Redux },
  spring: { name: "Spring", icon: Spring },
  git: { name: "Git", icon: Git },
};

const ProjectDetail = () => {
  const { projectId } = useParams(); // Obtiene el ID del proyecto de la URL.
  const project = projects.find(p => p.id === parseInt(projectId, 10)); // Busca el proyecto correspondiente.
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false); // Estado para manejar el modo oscuro.

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Alterna entre modo oscuro y claro.
  };

  if (!project) {
    return <div>Proyecto no encontrado</div>; // Si no se encuentra el proyecto, mostramos un mensaje.
  }

  // Encuentra el índice del proyecto actual en el array
  const currentIndex = projects.findIndex(p => p.id === project.id);

  // Encuentra el proyecto anterior y siguiente
  const prevProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} transition-colors duration-300`}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <header className="text-center mb-12 relative">
          <button
            onClick={toggleDarkMode}
            className="absolute top-0 right-0 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 transform hover:scale-110 border-2 border-gray-700 dark:border-gray-400"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />} {/* Muestra el ícono según el modo */}
          </button>
          <h1 className="text-3xl font-bold">{project.title}</h1>
        </header>

        <main className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
          
          <div className="p-6">
            <p className="text-lg mb-4 text-gray-900 dark:text-white">{project.description}</p>
            <img src={project.image_description} alt={project.title} className="w-full" />
            {/* Sección de tecnologías usadas */}
            <div className="mt-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Tecnologías usadas</h2>
              <div className="flex flex-wrap gap-4">
                {project.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 p-2 rounded-full transition-transform duration-300 hover:scale-110"
                  >
                    <img src={technologies[tech].icon} alt={`${technologies[tech].name} icon`} className="w-5 h-5 mr-2" />
                    <span className="font-medium">{technologies[tech].name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Navegación entre proyectos */}
        <div className="flex justify-between mt-12">
          {prevProject && (
            <button
              onClick={() => navigate(`/project/${prevProject.id}`)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
            >
              &larr; Proyecto anterior: {prevProject.title}
            </button>
          )}
          {nextProject && (
            <button
              onClick={() => navigate(`/project/${nextProject.id}`)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
            >
              Proyecto siguiente: {nextProject.title} &rarr;
            </button>
          )}
        </div>

        <footer className="mt-12 text-center">
          <button
            onClick={() => navigate('/')}
            className="mt-4 px-4 py-2 rounded-full bg-gray-700 text-white hover:bg-gray-800 transition-colors duration-300"
          >
            Volver al portafolio
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ProjectDetail;
