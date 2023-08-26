const { formatColor, parseColor } = require("tailwindcss/lib/util/color");
const typography = require("@tailwindcss/typography");
const {
  anchor,
  animationTimeline,
  boxReflect,
  hocus,
  mediaQuery,
  perspective,
  pointerQuery,
  stopColor,
  viewTimeline,
} = require("./tailwind.plugins");
const customTypography = require("./tailwind.typography");

module.exports = {
  content: ["./content/**/*.md", "./layouts/**/*.html"],
  darkMode: "class",
  plugins: [
    typography,
    anchor,
    animationTimeline,
    boxReflect,
    hocus,
    mediaQuery,
    perspective,
    pointerQuery,
    stopColor,
    viewTimeline,
  ],
  theme: {
    extend: {
      animation: {
        "coverflow-rotate": "linear coverflow-rotate both",
        "coverflow-z-index": "linear coverflow-z-index both",
      },
      brightness: {
        80: "0.8",
      },
      contrast: {
        120: "1.2",
      },
      dropShadow: ({ theme }) => {
        const lightColor = formatColor({
          mode: "rgba",
          color: parseColor(theme.colors.pink[200]).color,
          alpha: 0.5,
        });
        const darkColor = formatColor({
          mode: "rgba",
          color: parseColor(theme.colors.pink[800]).color,
          alpha: 0.5,
        });
        return {
          "accent-light": [
            `0 0 5px ${lightColor}`,
            "0 10px 8px rgb(0 0 0 / 0.04)",
            "0 4px 3px rgb(0 0 0 / 0.1)",
          ],
          "accent-dark": [
            `0 0 5px ${darkColor}`,
            "0 10px 8px rgb(0 0 0 / 0.04)",
            "0 4px 3px rgb(0 0 0 / 0.1)",
          ],
        };
      },
      maxWidth: {
        "8xl": "88rem",
      },
      willChange: {
        "z-index": "z-index",
      },
      typography: customTypography,
    },
    keyframes: {
      "coverflow-rotate": {
        "0%": {
          transform: "translateX(-100%) rotateY(-45deg)",
        },
        "35%": {
          transform: "translateX(0) rotateY(-45deg)",
        },
        "50%": {
          transform: "rotateY(0deg) translateZ(1em) scale(1.5)",
        },
        "65%": {
          transform: "translateX(0) rotateY(45deg)",
        },
        "100%": {
          transform: "translateX(100%) rotateY(45deg)",
        },
      },
      "coverflow-z-index": {
        "0%, 100%": {
          zIndex: 10,
        },
        "50%": {
          zIndex: 50,
        },
      },
    },
    stopColor: ({ theme }) => theme("colors"),
    supports: {
      anchor: "anchor-name: --foo",
      "animation-timeline": "animation-timeline: view()",
    },
  },
};
