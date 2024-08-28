/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Esto habilita el modo oscuro basado en clases
  theme: {
    extend: {
      colors: {
        // Puedes personalizar o extender los colores aquí
        //whant h3 color white text 
        

      },
      fontFamily: {
        // Puedes añadir fuentes personalizadas aquí
      },
      animation: {
        // Puedes definir animaciones personalizadas aquí
      },
    },
  },
  plugins: [],
}