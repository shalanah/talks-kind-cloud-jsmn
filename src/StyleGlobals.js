import { createGlobalStyle } from "styled-components";

const meyerReset = `
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
  display: block;
  }
  body {
  line-height: 1;
  }
  ol, ul {
  list-style: none;
  }
  table {
  border-collapse: collapse;
  border-spacing: 0;
  }
`;
const buttonReset = `
button {
  border: none;
  background: none;
  cursor: pointer;
  :focus {
    outline: none;
  }
}
`;
const formResets = `
  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    user-select: none
    background: transparent;

    /* inherit font & color from ancestor */
    color: inherit;
    font: inherit;

    /* Normalize line-height. Cannot be changed from normal in Firefox 4+. */
    line-height: normal;

    /* Corrects font smoothing for webkit */
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;

    /* Corrects inability to style clickable input types in iOS */
    -webkit-appearance: none;
  }

  /* Remove excess padding and border in Firefox 4+ */
  button::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  button, select {
    cursor: pointer;
  }
  button:focus, select:focus {
    outline: none;
  }

  select {
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  select::-ms-expand {
    display: none;
  }
`;

const positioning = `
  body, html {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .pos-full {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .pos-center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .pos-horiz-center {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const boxSizing = `
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

export const theme = {
  drkBlue: {
    default: true,
    bg: "#12102c",
    bgBreath: "#2c344b",
    bgBreathHalo: "#2c344b",
    opacityBreathHalo: 0.4,
    illustrationStroke: "#12102c",
    step1CloudExtraFill: "#12102c",
    step1CloudExtraStroke: "#2c344b",
    text: "#a1cef7",
    mainCloud: "#87aad5",
    bgClouds: "#2b344d",
    cheek: "#13142b",
    radioBg: "#2b344d",
    radioText: "#a1cef7",
    radioCheckedBg: "#87aad5",
    radioCheckedText: "#000",
    features: "#12102c",
    titleOpacity: 0.7,
    navLinkBorder: "#2b344d",
    pill: "#2b344d",
    pillDone: "#a1cef799",
    light: false,
  },
};

const floatTarget = `
  .floatTarget {
    pointer-events: all;
    cursor: pointer;
  }
`;

const heart = `
  .heart {
    pointer-events: none;
    visibility: hidden;
    position: absolute;
    z-index: 100;
    &:before,
    &:after {
      position: absolute;
      content: '';
      left: 5vmin;
      top: 0;
      width: 5vmin;
      height: 8vmin;
      background: currentColor;
      border-radius: 5vmin 5vmin 0 0;
      transform: rotate(-45deg);
      transform-origin: 0 100%;
    }
    &:after {
      left: 0;
      transform: rotate(45deg);
      transform-origin: 100% 100%;
    }
  }
`;

const makeTheme = (name) => {
  return `
    :root {
    --main-bg: ${theme[name].bg};
    --homepage-bg: ${theme[name].bg};
    --main-text: ${theme[name].text};
    --title-opacity: ${theme[name].titleOpacity};

    --menu-btn-border: ${theme[name].mainCloud};
    --menu-btn-hover-bg: ${theme[name].mainCloud};

    --kind-cloud-cheeks: ${theme[name].cheek};
    --kind-cloud-bg-clouds: ${theme[name].bgClouds};

    --illustration-bg: ${theme[name].mainCloud};
    --illustration-fleck: ${theme[name].fleck || theme[name].mainCloud};
    --illustration-facial-eyes: ${
      theme[name].eyes || theme[name].features
    }; // eyes, mouth
    --illustration-facial-mouth: ${theme[name].mouth || theme[name].features};
    --illustration-stroke: ${theme[name].illustrationStroke};

    --radio-checked-text: ${theme[name].radioCheckedText};
    --radio-checked-bg: ${theme[name].radioCheckedBg};
    --radio-bg: ${theme[name].radioBg};
    --radio-text: ${theme[name].radioText};

    --breath-circle-bg: ${theme[name].bgBreath};
    --breath-circle-halo-bg: ${theme[name].bgBreathHalo};
    --breath-circle-halo-opacity: .4;

    --step-1-cloud-extra-fill: ${theme[name].step1CloudExtraFill};
    --step-1-cloud-extra-stroke: ${theme[name].step1CloudExtraStroke};

    --nav-link-border: ${theme[name].navLinkBorder};

    --pill: ${theme[name].pill};
    --pill-done: ${theme[name].pillDone};
  }
  `;
};

const colors = `
  ${Object.keys(theme)
    .map((name) => makeTheme(name))
    .join("")}
`;

const removeTapHighlight = `
  body {
    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
  }
`;

export const StyleGlobals = createGlobalStyle`
  ${meyerReset}
  ${positioning}
  ${colors}
  ${boxSizing}
  ${removeTapHighlight}
  ${formResets}
  ${floatTarget}
  ${buttonReset}
  .pointer-events-none-important {
    pointer-events: none !important;
    * {
      pointer-events: none !important;
    }
  }
  html, body, button {
    font-family: strokeweight, sans-serif;
    font-weight:  140;
    line-height: 1.5;
  }
  button {
    font-weight:  60;
  }
  html, body {
    position: fixed;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  a {
    text-decoration: none;
    color: currentColor;
  }
  ${heart}
  body {
    background: var(--main-bg) !important;
  }
  body > div > div > div > div {
    /* Override theme for now, should place elsewhere ... do in a more mdx-slide way*/
    background: transparent !important;
    color: var(--main-text) !important;
  }

  header {
    width: 100% !important;
    height: 100% !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
`;
