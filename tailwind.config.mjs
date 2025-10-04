/** @type {import('tailwindcss').Config} */
module.exports = {
  // Le paramètre le plus important pour React
  content: [
    // Scanne tous les fichiers dans le dossier 'src'
    // avec les extensions .html, .js, .jsx, .ts, .tsx
    "./src/**/*.{js,jsx,ts,tsx}",
    // Ajoutez ceci si vous avez des classes dans le fichier index.html à la racine (recommandé)
    "./index.html", 
  ],
  theme: {
    // Utilisez 'extend' pour AJOUTER des personnalisations
    // SANS ÉCRASER les valeurs par défaut de Tailwind.
    extend: {
      // Exemple : ajouter une couleur personnalisée
      // 'primaire': '#ff4500',
    },
  },
  plugins: [
    // Ajoutez ici les plugins supplémentaires (ex: @tailwindcss/forms, @tailwindcss/typography)
    require("@tailwindcss/forms"),
  ],
};