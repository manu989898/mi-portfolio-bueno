import { useState, useRef } from "react";
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

const pillTabs = [
  { label: "Todos", category: null, icon: Todos },
  { label: "Java", category: "java", icon: Java },
  { label: "Javascript", category: "javascript", icon: JavaScript },
  { label: "React", category: "react", icon: ReactLogo },
  { label: "MySQL", category: "mysql", icon: MySql },
  { label: "HTML5", category: "html5", icon: Html5 },
  { label: "CSS3", category: "css3", icon: Css3 },
  { label: "Node.js", category: "nodejs", icon: Nodejs },
  { label: "MongoDB", category: "mongodb", icon: Mongodb },
  { label: "Redux", category: "redux", icon: Redux },
  { label: "Spring", category: "spring", icon: Spring },
  { label: "Git", category: "git", icon: Git },
];

export function PillTabs({ onTabClick }) {
  const scrollContainerRef = useRef(null);

  const tabsComponents = pillTabs.map((tab) => {
    return (
      <button
        key={tab.label}
        onClick={() => {
          onTabClick(tab.category);
        }}
        className={`relative flex items-center gap-2 px-4 py-2 rounded-full font-medium text-lg transition-all duration-300 whitespace-nowrap bg-blue-200 text-blue-900 dark:bg-blue-800 dark:text-blue-300`}
        style={{
          minWidth: '40px', // Aumenta el tamaño mínimo para pantallas pequeñas
          padding: '10px', // Asegura que haya suficiente espacio interno
          fontSize: '14px', // Ajusta el tamaño de la fuente para que sea más legible en pantallas pequeñas
        }}
      >
        <img src={tab.icon} alt={`${tab.label} icon`} className="w-5 h-5 md:w-6 md:h-6" />
      
      </button>
    );
  });

  return (
    <div
      className="relative overflow-x-auto scrollbar-hide scrollable-tabs"
      ref={scrollContainerRef}
    >
      <div className="flex gap-3 my-3">
        {tabsComponents}
      </div>
    </div>
  );
}

export default PillTabs;
