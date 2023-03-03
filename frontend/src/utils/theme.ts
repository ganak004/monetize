const lightPalette = {
  skyPurple: "#7180AC",
  mutedGreen: "#7C9885",
  lightGreen: "#CEDF97",
  red: "#C83E4D",
  lightBlue: "#729BB9",
  darkBlue: "#0F3047",
  purple: "#9E3D8C",
  vibrantPeach: "#F47979",
  peach: "#FFB7B7",
  yellow: "#FEDC97",
  lightGrey: "#E9E8E8",
  darkGrey: "#616161",
  black: "#131313",
  white: "#F0F2F3",
  successGreen: "#82D37A",
};
const darkPalette = {
  // skyPurple: "#7180AC",
  // mutedGreen: "#7C9885",
  // lightGreen: "#CEDF97",
  // red: "#C83E4D",
  // lightBlue: "#729BB9",
  // darkBlue: "#0F3047",
  // purple: "#9E3D8C",
  // vibrantPeach: "#F47979",
  // peach: "#FFB7B7",
  // yellow: "#FEDC97",
  // lightGrey: "#E9E8E8",
  // darkGrey: "#616161",
  // black: "#131313",
  // white: "#F0F2F3",
  // successGreen: "#82D37A",
};

export const theme = {
  ...lightPalette,
  keyColours: {
    background: lightPalette.white,
    primary: lightPalette.skyPurple,
    success: lightPalette.successGreen,
    danger: lightPalette.red,
    failure: lightPalette.red,
  },
  fontSize: {
    xxs: 8,
    xs: 12,
    s: 18,
    m: 23,
    l: 36,
    xl: 40,
  },
  textVariants: {
    header: {
      fontFamily: "Baloo Paaji",
      fontSize: 36,
      color: lightPalette.white,
    },
    body: {
      fontFamily: "Palanquin",
      fontSize: 16,
    },
  },
};

export const darkTheme = {
  ...theme,
  keyColours: {
    ...theme.keyColours,
    background: lightPalette.black,
    foreground: lightPalette.white,
  },
};
