import { useState } from "react";
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
import Todos from './imgs/all.svg';
import Tailwind from './imgs/tailwindcss.svg';

// Aquí definimos todas las pestañas o "pill tabs" con sus respectivas tecnologías e íconos.
const pillTabs = [
  { label: "Todos", technology: null, icon: Todos },
  { label: "Java", technology: "java", icon: Java },
  { label: "Javascript", technology: "javascript", icon: JavaScript },
  { label: "React", technology: "react", icon: ReactLogo },
  { label: "MySQL", technology: "mysql", icon: MySql },
  { label: "HTML5", technology: "html5", icon: Html5 },
  { label: "CSS3", technology: "css3", icon: Css3 },
  { label: "Node.js", technology: "nodejs", icon: Nodejs },
  { label: "MongoDB", technology: "mongodb", icon: Mongodb },
  { label: "Redux", technology: "redux", icon: Redux },
  { label: "Spring", technology: "spring", icon: Spring },
  { label: "Tailwind CSS", technology: "tailwind", icon: Tailwind },
  { label: "Git", technology: "git", icon: Git },
];

export function PillTabs({ onTabClick }) {
  // Estados para manejar qué pestaña está seleccionada y cuál está siendo "hovered" (sobrevolada).
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Aquí creamos el componente de cada pestaña basándonos en los datos de `pillTabs`.
  const tabsComponents = pillTabs.map((tab, i) => {
    const isSelected = selectedIndex === i; // Verifica si esta pestaña es la seleccionada.
    const isHovered = hoveredIndex === i;  // Verifica si esta pestaña está siendo sobrevolada.

    return (
      <button
        key={tab.label} // Clave única para cada botón de pestaña.
        onMouseEnter={() => setHoveredIndex(i)} // Cambia el índice de "hover" cuando el mouse entra en la pestaña.
        onClick={() => {
          onTabClick(tab.technology); // Llama a la función de selección con la tecnología de la pestaña.
          setSelectedIndex(i); // Marca esta pestaña como seleccionada.
        }}
        className={`relative flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
          isSelected
            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
            : "bg-blue-200 text-blue-900 dark:bg-blue-800 dark:text-blue-300"
        }`}
        style={{
          backgroundColor: isHovered
            ? 'rgb(59, 130, 246)' // Cambia el color si el mouse está sobre la pestaña.
            : isSelected
            ? '' // Usa el color de Tailwind si la pestaña está seleccionada.
            : 'rgb(191, 219, 254)', // Color por defecto si la pestaña no está seleccionada ni sobrevolada.
          color: isHovered
            ? 'rgb(191, 219, 254)' // Cambia el color del texto si el mouse está sobre la pestaña.
            : isSelected
            ? '' // Deja el color por defecto si está seleccionada.
            : '', 
          minWidth: '40px', // Tamaño mínimo del botón.
          padding: '10px', // Espaciado interno para asegurar que los íconos y texto no estén muy apretados.
          fontSize: '14px', // Ajusta el tamaño del texto.
        }}
      >
        <img src={tab.icon} alt={`${tab.label} icon`} className="w-5 h-5 md:w-6 md:h-6" />
      </button>
    );
  });

  return (
    <div
      className="relative overflow-x-auto scrollbar-hide scrollable-tabs"
    >
      <div className="flex gap-3 my-3">
        {tabsComponents} {/* Renderiza todas las pestañas que definimos arriba. */}
      </div>
    </div>
  );
}

export default PillTabs;
