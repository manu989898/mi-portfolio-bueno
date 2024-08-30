import React from 'react';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectPage = ({ darkMode, project }) => {
  // Asumimos que 'project' es un objeto con detalles del proyecto
  // como título, descripción, imagen, tecnologías, etc.

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center text-blue-500 hover:text-blue-600 mb-8">
          <ArrowLeft size={20} className="mr-2" />
          Volver al portafolio
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">{project.shortDescription}</p>
        </header>

        <main>
          <section className="mb-12">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto rounded-lg shadow-lg mb-8"
            />
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-4">Descripción del Proyecto</h2>
              <p>{project.fullDescription}</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Tecnologías Utilizadas</h2>
            <div className="flex flex-wrap gap-4">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Características Principales</h2>
            <ul className="list-disc list-inside space-y-2">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Enlaces del Proyecto</h2>
            <div className="flex space-x-4">
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors duration-200"
                >
                  <Github size={20} className="mr-2" />
                  Ver en GitHub
                </a>
              )}
              {project.liveDemo && (
                <a 
                  href={project.liveDemo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
                >
                  <ExternalLink size={20} className="mr-2" />
                  Demo en Vivo
                </a>
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ProjectPage;