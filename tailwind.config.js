/** @type {import('tailwindcss').Config} */
import { withUt } from "uploadthing/tw";

export default withUt({
    // Le paramètre le plus important pour React
  content: [
    // 1. Cible le dossier 'app' (si vous utilisez l'App Router)
    "./app/**/*.{js,ts,jsx,tsx,mdx}", 
    // 2. Cible le dossier 'pages' (si vous utilisez le Pages Router)
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", 
    // 3. Cible le dossier 'components' à la racine pour les composants réutilisables
    "./components/**/*.{js,ts,jsx,tsx,mdx}", 
    // OPTIONNEL : Si vous avez des fichiers à la racine
    "./*.{js,ts,jsx,tsx,mdx}", 
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
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
  ],
});