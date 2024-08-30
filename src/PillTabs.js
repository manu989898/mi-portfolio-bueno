import { useState } from "react";
import { MagicTabSelect } from "react-magic-motion";
import Java from './imgs/java.svg';
import JavaScript from './imgs/javascript.svg';
import ReactLogo from './imgs/react.svg';
import MySql from './imgs/mysql.svg';
import Todos from './imgs/all.svg';
 

const pillTabs = [
  { label: "Todos", category: null, icon: Todos },
  { label: "Java", category: "java", icon: Java },
  { label: "Javascript", category: "javascript", icon: JavaScript },
  { label: "React", category: "react", icon: ReactLogo },
  { label: "MySql", category: "mysql", icon: MySql },
];

export function PillTabs({ onTabClick }) {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const tabsComponents = pillTabs.map((tab, i) => {
    const isSelected = selectedIndex === i;
    const isHovered = hoveredIndex === i;

    return (
        <button
          key={tab.label}
          onMouseEnter={() => setHoveredIndex(i)}
          onClick={() => {
            onTabClick(tab.category);
            setSelectedIndex(i);
          }}
          className={`relative flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
            isSelected
              ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
              : "bg-blue-200 text-blue-900 dark:bg-blue-800 dark:text-blue-300"
          }`}
          style={{
            backgroundColor: isHovered
              ? 'rgb(59, 130, 246)' // Azul menos oscuro cuando está sobrevolado
              : isSelected
              ? '' // Deja que Tailwind maneje el color si está seleccionado
              : 'rgb(191, 219, 254)', // Azul claro por defecto si no está seleccionado
            color: isHovered
              ? 'rgb(191, 219, 254)' // Azul más claro para el texto cuando está sobrevolado
              : isSelected
              ? '' // Deja que Tailwind maneje el color si está seleccionado
              : '', // Mantén el color por defecto
          }}
        >
          <img src={tab.icon} alt={`${tab.label} icon`} className="w-5 h-5" />
          <span>{tab.label}</span>
        </button>
      );
  });

  return (
    <div className="flex gap-3 my-3">
      {tabsComponents}
    </div>
  );
}

export default PillTabs;
