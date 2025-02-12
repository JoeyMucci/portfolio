import { createTheme, rem } from '@mantine/core';

export const themeL = createTheme({
  colors: {
    lightBlue: [
      "#e1fbff",
      "#ccf1ff",
      "#9ce0ff",
      "#68cffe",
      "#40c0fd",
      "#2ab7fc",
      "#19b3fe",
      "#009de3",
      "#008ccc",
      "#0079b5"
    ],

    pink: [
      "#ffe8f2",
      "#ffcfdf",
      "#ff9cbb",
      "#fe6596",
      "#fd3977",
      "#fd1f63",
      "#fe1058",
      "#e30049",
      "#cb0040",
      "#b20036"
    ],

    orange: [
      "#fff4e1",
      "#ffe8cc",
      "#fed09b",
      "#fdb766",
      "#fca13a",
      "#fc931d",
      "#fc8c0c",
      "#e17800",
      "#c86a00",
      "#af5a00"
    ],

    dark: [
      "#acaebf",
      "#8c8fa3",
      "#666980",
      "#4d4f66",
      "#34354a",
      "#2b2c3d",
      "#1d1e30",
      "#0c0d21",
      "#01010a",
      "#000000"
    ]
  },

  primaryShade: { light: 4, dark: 6},

  white : 'lightBlue',
  autoContrast: true,

  fontFamily: `Patrick Hand`,

  fontFamilyMonospace: 'Monaco, Courier, monospace',

  headings : {
    fontFamily: `Patrick Hand`
  },

  fontSizes: {
    xs: rem(10),
    sm: rem(20),
    md: rem(30),
    lg: rem(40),
    xl: rem(50),
  },
});
