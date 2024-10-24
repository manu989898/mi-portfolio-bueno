import React from "react";
import news from "./Dependences/News.js";

// Componente para la sección de Newsletter Crea unas cards.
const Newsletter = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Newsletter</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((n) => (
          <div
            key={n.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={n.image}
              alt={n.image_description}
              className="w-full h-48 object-cover object-center"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{n.title}</h2>
              <p className="text-gray-600 dark:text-gray-300">{n.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-4">
        <a href="/">Volver a Inicio</a>
        </button>
    </div>
  );
};

export default Newsletter;

