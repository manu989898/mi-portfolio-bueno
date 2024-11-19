import React, { useState } from "react";
import { Github, Linkedin, Mail, Sun, Moon, Newspaper, } from "lucide-react";
import projects from "./Dependences/projects";
import PillTabs from "./Dependences/PillTabs";
import TimelineData from "./Dependences/TimelineData";
import TimelineItem from "./Dependences/TimelineItem";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
import AccordionSkills from "./Dependences/AccordionSkills";


// Importación las imágenes de las tecnologías
import Css from "./imgs/css.svg";
import Html from "./imgs/html5.svg";
import Java from "./imgs/java.svg";
import JavaScript from "./imgs/javascript.svg";
import ReactLogo from "./imgs/react.svg";
import Tailwind from "./imgs/tailwindcss.svg";
import Git from "./imgs/github-light.svg";
import MiFoto from "./imgs/miyo.jpg";
import Bootstrap from "./imgs/bootstrap.svg";
import Laravel from "./imgs/laravel.svg";
import Blender from "./imgs/blender.svg";
import Copilot from "./imgs/copilot.svg";
import MySqls from "./imgs/mysql.svg";
import MongoDb from "./imgs/mongodb.svg";

const Portfolio = () => {

  //Constante para el modo oscuro usando useState
  const [darkMode, setDarkMode] = useState(false);

  //Función para cambiar el modo oscuro
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  //Constante para navegar a la página del proyecto
  const navigate = useNavigate(); 

  //Constante para seleccionar la tecnología para el filtro de proyectos
  const [selectedTechnology, setSelectedTechnology] = useState(null);

  //Constante para filtrar los proyectos
  const filteredProjects = selectedTechnology
    ? projects.filter((project) =>
        project.technologies.includes(selectedTechnology)
      )
    : projects;

  //Constante para el efecto de máquina de escribir (Typewriter) Visto en stackoverflow
  const [text] = useTypewriter({
    words: ["Manuel Cuesta Rodriguez"],
    loop: 1,
  });

  const skills = [
    {
      title: "Desarrollo Web",
      skills: [
        { icon: Bootstrap },
        { icon: Css }, // Aquí utilizas la constante Css que ya tienes importada
        { icon: Html },
        { icon: Laravel },
        { icon: JavaScript },
        { icon: ReactLogo },
        { icon: Tailwind },
        { icon: Java },
      ],
    },
    {
      title: "Bases de Datos",
      skills: [
        { icon: MySqls },
        { icon: MongoDb },
      ],
    },
    {
      title: "Otras Herramientas",
      skills: [
        { icon: Blender },
        { icon: Copilot },
        { icon: Git },
      ],
    },
  ];
  
  

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-900"
      }`}
    >
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
            <Cursor cursorStyle="|" />
          </h1>
          <p className="mt-2 text-xl text-blue-500 dark:text-gray-400">
            Desarrollador Web
          </p>
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
              href="/contacto"
              target="_blank"
              className="text-gray-400 hover:text-blue-500 transition-colors duration-200 transform hover:scale-110"

            >
              <Mail size={24} />
            </a>
            <a 
              href="/newsletter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors duration-200 transform hover:scale-110">
                <Newspaper size={24} />
              </a>
          </div>
        </header>

        <main>
          <h2 className="mb-4 transition-shadow duration-300 text-2xl font-bold text-center dark:bg-gray-800">
            Sobre mí
          </h2>
          <section className="mb-12 hover:shadow-lg transition-shadow duration-300 p-6 rounded-lg bg-white dark:bg-gray-800">
            <p className="text-gray-700 dark:text-gray-300">
              Hola, soy Manu. Un desarrollador de aplicaciones web con una
              pasión por crear experiencias digitales innovadoras y eficientes.
              Me encanta trabajar en equipo y estoy siempre en busca de nuevos
              desafíos para mejorar mis habilidades y aprender nuevas
              tecnologías. El campo que más me gusta es el "backend".
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
                        {project.description.slice(0, 50)}...
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <section className="mb-12 hover:shadow-lg transition-shadow duration-300 p-6 rounded-lg bg-white dark:bg-gray-800">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    No hay proyectos disponibles
                  </h2>
                </section>
              )}
            </div>
          </section>
          <section className="mb-12">
  <h2 className="text-2xl font-bold mb-4 mt-5 text-center">Habilidades</h2>
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300">
    <AccordionSkills skills={skills} />
  </div>
</section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mt-7 mb-4 text-center">
              Estadísticas GitHub
            </h2>
            <div className="flex justify-center">
              <img
                className="mr-auto ml-auto mt-2 overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.03]"
                src="https://github-readme-stats.vercel.app/api?username=manu989898&rank_icon=github&locale=es"
                alt="GitHub Stats from Manu989898"
              />
            </div>
          </section>
          <section className="mb-5 ">
            <h2 className="mt-10 text-2xl font-bold mb-8 text-center">
              Experiencia y Educación
            </h2>
            <div className="container mx-auto w-full">
              <div className="relative wrap overflow-hidden">
                <div className="border-2-2 absolute border-opacity-20 border-gray-700 dark:border-gray-300 h-full border left-1/2"></div>

                {TimelineData.map((item, index) => (
                  <div
                    key={index}
                    className="mb-8 flex justify-between items-stretch w-full"
                  >
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
