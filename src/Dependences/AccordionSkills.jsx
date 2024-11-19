import React, { useState } from "react";

const AccordionSkills = ({ skills }) => {
  // Cambia el estado inicial a 0 para que la primera categoría esté abierta
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-xl mx-auto mt-6">
      {skills.map((category, index) => (
        <div
          key={index}
          className="mb-4 border rounded-md overflow-hidden shadow transition-all duration-300 hover:shadow-xl hover:scale-[1.03]"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className={`flex justify-between items-center w-full px-4 py-3 text-left bg-blue-100 text-blue-500 font-medium focus:outline-none transition ${
              activeIndex === index ? "bg-blue-200" : ""
            }`}
          >
            <span>{category.title}</span>
            <span>{activeIndex === index ? "▲" : "▼"}</span>
          </button>
          {activeIndex === index && (
            <div className="p-4 bg-gray-200 grid grid-cols-4 gap-2 dark:bg-gray-900">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="flex justify-center transition-transform duration-300 hover:scale-110"
                >
                  <img
                    src={skill.icon}
                    alt="Skill Icon"
                    className="w-10 h-10"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionSkills;
