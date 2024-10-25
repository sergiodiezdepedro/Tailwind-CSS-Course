/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./dist/**/*.html"],
  darkMode: "media", //Modo automatico
  presets: [require("./presets/my-preset.js")],
  theme: {
    extend: {
      //Extendiendo utilidades y características de Tailwind. No confundir 'extend' con 'preset'.
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        display: ["Oswald", "ui-serif"],
      },
      colors: {
        "brand-color": "#ec0000",
      },
    },

    // Personalizando las fuentes que se quieran usar en el proyecto
    // fontFamily: {
    //   sans: ["Ubuntu", "sans-serif"],
    //   serif: ["Noto Serif", "serif"],
    // },
    // colors: {
    //   Personalizando paletas de colores. Con precaución, porque ya no se pueden usar las paletas de colores de Tailwind y deja de compilar con un error si se utilizan
    //   blue: {
    //     dark: "#084a80",
    //     light: "#74d1ee",
    //     default: "#277abe",
    //   },
    // },
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
          width: "fit-content",
          paddingBlock: "10px",
          paddingInline: "16px",
          color: "#fff",
          backgroundColor: theme("colors.blue.500"),
          fontWeight: "600",
          borderRadius: "4px",
          "&:hover": {
            backgroundColor: theme("colors.blue.600"),
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
