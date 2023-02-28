const { formatColor, parseColor } = require("tailwindcss/lib/util/color");
const typography = require("@tailwindcss/typography");
const {
  anchor,
  hocus,
  mediaQuery,
  pointerQuery,
  stopColor,
  viewTimeline,
} = require("./tailwind.plugins");
const customTypography = require("./tailwind.typography");

module.exports = {
  content: ["./content/**/*.md", "./layouts/**/*.html"],
  darkMode: "class",
  plugins: [typography, anchor, hocus, mediaQuery, pointerQuery, stopColor, viewTimeline],
  theme: {
    extend: {
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
      typography: customTypography,
    },
    stopColor: ({ theme }) => theme("colors"),
    supports: {
      anchor: "anchor-name: --foo",
    },
  },
};
