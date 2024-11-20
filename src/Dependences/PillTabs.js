import { useState } from "react";
import Java from '../imgs/java.svg';
import JavaScript from '../imgs/javascript.svg';
import ReactLogo from '../imgs/react.svg';
import MySql from '../imgs/mysql.svg';
import Html5 from '../imgs/html5.svg';
import Css3 from '../imgs/css.svg';
import Nodejs from '../imgs/nodejs.svg';
import Git from '../imgs/github-light.svg';
import Todos from '../imgs/all.svg';
import Tailwind from '../imgs/tailwindcss.svg';

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
  { label: "Tailwind CSS", technology: "tailwind", icon: Tailwind },
  { label: "Git", technology: "git", icon: Git },
];
export function PillTabs({ onTabClick }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const tabsComponents = pillTabs.map((tab, i) => {
    const isSelected = selectedIndex === i;

    return (
      <button
        key={tab.label}
        onClick={() => {
          onTabClick(tab.technology);
          setSelectedIndex(i);
        }}
        className={`glass relative shadow-lg backdrop-blur-md border border-white/40 flex justify-center items-center rounded-lg transition-transform duration-300 hover:scale-110 ${
          isSelected
            ? "border-blue-500 dark:border-blue-400"
            : "border-gray-300 dark:border-gray-600"
        }`}
        style={{
          width: '64px', // Tamaño fijo
          height: '64px', // Tamaño fijo
          flexShrink: 0, // Evitar que se encoja
          flexGrow: 0, // Evitar que se estire
        }}
      >
        <img src={tab.icon} alt={`${tab.label} icon`} className="w-12 h-12" />
      </button>
    );
  });

  return (
    <div
      className="relative overflow-x-auto scrollbar-hide scrollable-tabs"
      style={{
        padding: '10px', // Añadir espacio alrededor para hover
        overflow: 'visible', // Permitir que los elementos se expandan al escalar
      }}
    >
      <div
        className="flex gap-3 my-3"
        style={{
          justifyContent: 'start', // Alinear al principio
          flexWrap: 'nowrap', // No permitir que las pestañas se vayan a otra línea
          overflow: 'visible', // Permitir que los elementos escalados no se corten
        }}
      >
        {tabsComponents}
      </div>
    </div>
  );
}

export default PillTabs;
