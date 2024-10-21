import React from "react";
import news from "./Dependences/News.js";

//se muestren cards como los proyecos del portfolio pero con las noticias
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
    </div>
  );
};

export default Newsletter;

