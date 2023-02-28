const defaultModifiers = require("@tailwindcss/typography/src/styles");
const colors = require("tailwindcss/colors");

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;

const customModifiers = {
  sm: {
    css: [
      {
        "h5, h6": {
          marginTop: em(20, 14),
          marginBottom: em(8, 14),
          lineHeight: round(20 / 14),
        },
        details: {
          borderRadius: rem(8),
          marginTop: em(20, 12),
          marginBottom: em(20, 12),
          paddingTop: em(8, 12),
          paddingRight: em(12, 12),
          paddingBottom: em(8, 12),
          paddingLeft: em(12, 12),
        },
        "figure > picture > *": {
          marginTop: "0",
          marginBottom: "0",
        },
        "figure > video": {
          marginTop: "0",
          marginBottom: "0",
        },
        kbd: {
          borderRadius: rem(4),
          fontSize: em(12, 14),
          paddingTop: em(4, 12),
          paddingRight: em(6, 12),
          paddingBottom: em(4, 12),
          paddingLeft: em(6, 12),
        },
        pre: {
          borderRadius: rem(8),
        },
        samp: {
          fontSize: em(12, 14),
        },
        ".admonition": {
          marginTop: em(20, 12),
          marginBottom: em(20, 12),
          borderRadius: rem(8),
          paddingTop: em(8, 12),
          paddingRight: em(12, 12),
          paddingBottom: em(8, 12),
          paddingLeft: em(12, 12),
        },
        ".admonition > div > :first-child": {
          marginTop: "0",
        },
        ".admonition > div > :last-child": {
          marginBottom: "0",
        },
        ".admonition > svg": {
          height: em(24, 14),
        },
      },
    ],
  },
  base: {
    css: [
      {
        "h5, h6": {
          marginTop: em(24, 16),
          marginBottom: em(8, 16),
          lineHeight: round(24 / 16),
        },
        details: {
          borderRadius: rem(8),
          marginTop: em(24, 14),
          marginBottom: em(24, 14),
          paddingTop: em(12, 14),
          paddingRight: em(16, 14),
          paddingBottom: em(12, 14),
          paddingLeft: em(16, 14),
        },
        "figure > picture > *": {
          marginTop: "0",
          marginBottom: "0",
        },
        "figure > video": {
          marginTop: "0",
          marginBottom: "0",
        },
        kbd: {
          borderRadius: rem(4),
          fontSize: em(14, 16),
          paddingTop: em(6, 14),
          paddingRight: em(8, 14),
          paddingBottom: em(6, 14),
          paddingLeft: em(8, 14),
        },
        pre: {
          borderRadius: rem(8),
        },
        samp: {
          fontSize: em(14, 16),
        },
        ".admonition": {
          marginTop: em(24, 14),
          marginBottom: em(24, 14),
          borderRadius: rem(8),
          paddingTop: em(12, 14),
          paddingRight: em(16, 14),
          paddingBottom: em(12, 14),
          paddingLeft: em(16, 14),
        },
        ".admonition > div > :first-child": {
          marginTop: "0",
        },
        ".admonition > div > :last-child": {
          marginBottom: "0",
        },
        ".admonition > svg": {
          height: em(28, 16),
        },
      },
    ],
  },
  lg: {
    css: [
      {
        "h5, h6": {
          marginTop: em(32, 18),
          marginBottom: em(8, 18),
          lineHeight: round(28 / 18),
        },
        details: {
          borderRadius: rem(12),
          marginTop: em(32, 16),
          marginBottom: em(32, 16),
          paddingTop: em(16, 16),
          paddingRight: em(24, 16),
          paddingBottom: em(16, 16),
          paddingLeft: em(24, 16),
        },
        "figure > picture > *": {
          marginTop: "0",
          marginBottom: "0",
        },
        "figure > video": {
          marginTop: "0",
          marginBottom: "0",
        },
        kbd: {
          borderRadius: rem(6),
          fontSize: em(16, 18),
          paddingTop: em(8, 16),
          paddingRight: em(12, 16),
          paddingBottom: em(8, 16),
          paddingLeft: em(12, 16),
        },
        pre: {
          borderRadius: rem(12),
        },
        samp: {
          fontSize: em(16, 18),
        },
        ".admonition": {
          marginTop: em(32, 16),
          marginBottom: em(32, 16),
          borderRadius: rem(12),
          paddingTop: em(16, 16),
          paddingRight: em(24, 16),
          paddingBottom: em(16, 16),
          paddingLeft: em(24, 16),
        },
        ".admonition > div > :first-child": {
          marginTop: "0",
        },
        ".admonition > div > :last-child": {
          marginBottom: "0",
        },
        ".admonition > svg": {
          height: em(32, 18),
        },
      },
    ],
  },
  xl: {
    css: [
      {
        "h5, h6": {
          marginTop: em(36, 20),
          marginBottom: em(12, 20),
          lineHeight: round(32 / 20),
        },
        details: {
          borderRadius: rem(16),
          marginTop: em(36, 18),
          marginBottom: em(36, 18),
          paddingTop: em(20, 18),
          paddingRight: em(24, 18),
          paddingBottom: em(20, 18),
          paddingLeft: em(24, 18),
        },
        "figure > picture > *": {
          marginTop: "0",
          marginBottom: "0",
        },
        "figure > video": {
          marginTop: "0",
          marginBottom: "0",
        },
        kbd: {
          borderRadius: rem(8),
          fontSize: em(18, 20),
          paddingTop: em(10, 18),
          paddingRight: em(12, 18),
          paddingBottom: em(10, 18),
          paddingLeft: em(12, 18),
        },
        pre: {
          borderRadius: rem(16),
        },
        samp: {
          fontSize: em(18, 20),
        },
        ".admonition": {
          marginTop: em(36, 18),
          marginBottom: em(36, 18),
          borderRadius: rem(16),
          paddingTop: em(20, 18),
          paddingRight: em(24, 18),
          paddingBottom: em(20, 18),
          paddingLeft: em(24, 18),
        },
        ".admonition > div > :first-child": {
          marginTop: "0",
        },
        ".admonition > div > :last-child": {
          marginBottom: "0",
        },
        ".admonition > svg": {
          height: em(36, 20),
        },
      },
    ],
  },
  "2xl": {
    css: [
      {
        "h5, h6": {
          marginTop: em(40, 24),
          marginBottom: em(16, 24),
          lineHeight: round(36 / 24),
        },
        details: {
          borderRadius: rem(16),
          marginTop: em(40, 20),
          marginBottom: em(40, 20),
          paddingTop: em(24, 20),
          paddingRight: em(32, 20),
          paddingBottom: em(24, 20),
          paddingLeft: em(32, 20),
        },
        "figure > picture > *": {
          marginTop: "0",
          marginBottom: "0",
        },
        "figure > video": {
          marginTop: "0",
          marginBottom: "0",
        },
        kbd: {
          borderRadius: rem(8),
          fontSize: em(20, 24),
          paddingTop: em(12, 20),
          paddingRight: em(16, 20),
          paddingBottom: em(12, 20),
          paddingLeft: em(16, 20),
        },
        pre: {
          borderRadius: rem(16),
        },
        samp: {
          fontSize: em(20, 24),
        },
        ".admonition": {
          marginTop: em(40, 20),
          marginBottom: em(40, 20),
          borderRadius: rem(16),
          paddingTop: em(24, 20),
          paddingRight: em(32, 20),
          paddingBottom: em(24, 20),
          paddingLeft: em(32, 20),
        },
        ".admonition > div > :first-child": {
          marginTop: "0",
        },
        ".admonition > div > :last-child": {
          marginBottom: "0",
        },
        ".admonition > svg": {
          height: em(40, 24),
        },
      },
    ],
  },
};

const customDefault = {
  css: [
    {
      "h5, h6": {
        color: "var(--tw-prose-headings)",
        fontWeight: "600",
      },
      "h5 strong, h6 strong": {
        color: "inherit",
        fontWeight: "700",
      },
      blockquote: {
        borderLeftWidth: "1px",
        fontWeight: "normal",
      },
      "details summary": {
        cursor: "pointer",
        fontWeight: "700",
      },
      "figure > figcaption": {
        textAlign: "center",
      },
      kbd: {
        color: "var(--tw-prose-code)",
        fontWeight: "600",
      },
      mark: {
        backgroundColor: colors.pink[200],
      },
      samp: {
        color: "var(--tw-prose-code)",
        fontWeight: "600",
      },
      "samp::before": {
        content: '"`"',
      },
      "samp::after": {
        content: '"`"',
      },
      "tbody td": {
        verticalAlign: "top",
      },
    },
    defaultModifiers.gray.css,
    ...customModifiers.base.css,
  ],
};

module.exports = {
  DEFAULT: customDefault,
  ...customModifiers,
};
