/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "media", //Modo automatico
  theme: {
    extend: {},
  },

  plugins: [
    require("@tailwindcss/typography"),

    plugin(function ({ addUtilities, addComponents, addBase, theme }) {
      // Estilo de utilidades
      const newUtilities = {
        ".rotate-90": {
          transform: "rotate(90)",
        },
      };

      // Estilos para componentes
      const button = {
        ".button": {
          margin: "100px",
          width: "100px",
          height: "100px",
          color: "#fff",
          background: theme("colors.blue.500"),
          fontWeight: "600",
          "&:hover": {
            background: "#000",
          },
        },
      };

      // Estilos base
      addBase({
        h1: { fontSize: theme("spacing.2") },
        h2: { fontSize: theme("fontSize.xl") },
        h3: { fontSize: theme("fontSize.lg") },
      });

      addUtilities(newUtilities);
      addComponents(button);
    }),
  ],
};
