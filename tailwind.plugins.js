const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");
const { default: toColorValue } = require("tailwindcss/lib/util/toColorValue");
const plugin = require("tailwindcss/plugin");

const anchorPlugin = plugin(({ matchUtilities }) => {
  matchUtilities({
    "anchor-name": (value) => ({
      "anchor-name": `--${value}`,
    }),
    "anchor-bottom-left": (value) => ({
      "inset-area": "bottom span-left",
      "min-width": "anchor-size(width)",
      "position-anchor": `--${value}`,
    }),
  });
});

const animationTimelinePlugin = plugin(({ matchUtilities }) => {
  matchUtilities({
    "animation-timeline": (value) => ({
      "animation-timeline": `--${value}`,
    }),
  });
});

const boxReflectPlugin = plugin(({ matchUtilities, theme }) => {
  matchUtilities(
    {
      "box-reflect": (value) => ({
        "--tw-box-reflect-length": value,
        "-webkit-box-reflect": "below var(--tw-box-reflect-length) linear-gradient(var(--tw-gradient-stops))",
      }),
    },
    { values: theme("spacing") }
  );
});

const hocusPlugin = plugin(({ addVariant }) => {
  addVariant("hocus", ["&:hover", "&:focus"]);
  addVariant("hocus-within", ["&:hover", "&:focus-within"]);
  addVariant("hocus-visible", ["&:hover", "&:focus-visible"]);

  addVariant("group-hocus", [":merge(.group):hover &", ":merge(.group):focus &"]);
  addVariant("group-hocus-within", [":merge(.group):hover &", ":merge(.group):focus-within &"]);
  addVariant("group-hocus-visible", [":merge(.group):hover &", ":merge(.group):focus-visible &"]);

  addVariant("peer-hocus", [":merge(.peer):hover ~ &", ":merge(.peer):focus ~ &"]);
  addVariant("peer-hocus-within", [":merge(.peer):hover ~ &", ":merge(.peer):focus-within ~ &"]);
  addVariant("peer-hocus-visible", [":merge(.peer):hover ~ &", ":merge(.peer):focus-visible ~ &"]);
});

const mediaQueryPlugin = plugin(({ addVariant }) => {
  // color-gamut
  addVariant("srgb", "@media (color-gamut: srgb)");
  addVariant("p3", "@media (color-gamut: p3)");
  addVariant("rec2020", "@media (color-gamut: rec2020)");
  // dynamic range
  addVariant("sdr", "@media (dynamic-range: standard)");
  addVariant("hdr", "@media (dynamic-range: high)");
  // forced-colors
  addVariant("forced-colors-none", "@media (forced-colors: none)");
  addVariant("forced-colors", "@media (forced-colors: active)");
  // inverted-colors
  addVariant("inverted-colors-none", "@media (inverted-colors: none)");
  addVariant("inverted-colors", "@media (inverted-colors: inverted)");
  // overflow-block
  addVariant("overflow-block-none", "@media (overflow-block: none)");
  addVariant("overflow-block-scroll", "@media (overflow-block: scroll)");
  addVariant("overflow-block-optional-paged", "@media (overflow-block: optional-paged)");
  addVariant("overflow-block-paged", "@media (overflow-block: paged)");
  // overflow-inline
  addVariant("overflow-inline-none", "@media (overflow-inline: none)");
  addVariant("overflow-inline-scroll", "@media (overflow-inline: scroll)");
  // prefers-contrast
  addVariant("contrast-normal", "@media (prefers-contrast: no-preference)");
  addVariant("contrast-more", "@media (prefers-contrast: more)");
  addVariant("contrast-less", "@media (prefers-contrast: less)");
  addVariant("contrast-custom", "@media (prefers-contrast: custom)");
  // prefers-reduced-data
  addVariant("data-normal", "@media (prefers-reduced-data: no-preference)");
  addVariant("data-reduce", "@media (prefers-reduced-data: reduce)");
  // prefers-reduced-transparency
  addVariant("transparency-safe", "@media (prefers-reduced-transparency: no-preference)");
  addVariant("transparency-reduce", "@media (prefers-reduced-transparency: reduce)");
  // scripting
  addVariant("scripting-none", "@media (scripting: none)");
  addVariant("scripting-initial", "@media (scripting: initial-only)");
  addVariant("scripting", "@media (scripting: enabled)");
  // update
  addVariant("update-none", "@media (update: none)");
  addVariant("update-slow", "@media (update: slow)");
  addVariant("update-fast", "@media (update: fast)");
});

const perspectivePlugin = plugin(({ matchUtilities }) => {
  matchUtilities({
    perspective: (value) => ({
      perspective: value,
    }),
  });
});

const pointerQueryPlugin = plugin(({ addVariant }) => {
  addVariant("any-pointer-none", "@media (any-pointer: none)");
  addVariant("any-pointer-coarse", "@media (any-pointer: coarse)");
  addVariant("any-pointer-fine", "@media (any-pointer: fine)");
  addVariant("pointer-none", "@media (pointer: none)");
  addVariant("pointer-coarse", "@media (pointer: coarse)");
  addVariant("pointer-fine", "@media (pointer: fine)");
});

const stopColorPlugin = plugin(({ matchUtilities, theme }) => {
  matchUtilities(
    {
      stop: (value) => {
        return { "stop-color": toColorValue(value) };
      },
    },
    { values: flattenColorPalette(theme("stopColor")), type: ["color", "any"] },
  );
});

const viewTimelinePlugin = plugin(({ addUtilities, matchUtilities }) => {
  addUtilities({
    ".view-timeline-block": {
      "view-timeline-axis": "block",
    },
    ".view-timeline-inline": {
      "view-timeline-axis": "inline",
    },
  });
  matchUtilities({
    "view-timeline-name": (value) => ({
      "view-timeline-name": `--${value}`,
    }),
  });
});

module.exports = {
  anchor: anchorPlugin,
  animationTimeline: animationTimelinePlugin,
  boxReflect: boxReflectPlugin,
  hocus: hocusPlugin,
  mediaQuery: mediaQueryPlugin,
  perspective: perspectivePlugin,
  pointerQuery: pointerQueryPlugin,
  stopColor: stopColorPlugin,
  viewTimeline: viewTimelinePlugin,
};
