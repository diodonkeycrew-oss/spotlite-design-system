import localFont from "next/font/local";
import { Figtree, Roboto } from "next/font/google";
import { createTheme, css, styled } from "@mui/material/styles";
import { MaterialDesignContent } from "notistack";

const SPOTLITE_BORDER_RADIUS = "0.75rem";
const SPOTLITE_LARGE_BUTTON_PADDING = "1rem 1rem";
const SPOTLITE_XLARGE_BUTTON_PADDING = "1.5rem 2rem";
const SPOTLITE_MEDIUM_BUTTON_PADDING = "0.75rem 1rem";
const SPOTLITE_SMALL_BUTTON_PADDING = "0.625rem 0.875rem";
const SPOTLITE_LARGE_BUTTON_FONT_SIZE = "1rem";
const SPOTLITE_XLARGE_BUTTON_FONT_SIZE = "1.5rem";
const SPOTLITE_MEDIUM_BUTTON_FONT_SIZE = "0.875rem";
const SPOTLITE_SMALL_BUTTON_FONT_SIZE = "0.75rem";
const SPOTLITE_BUTTON_TEXT_LINE_HEIGHT = 1;
const SPOTLITE_LARGE_BUTTON_FONT_WEIGHT = 600;
const SPOTLITE_XLARGE_BUTTON_FONT_WEIGHT = 600;
const SPOTLITE_MEDIUM_BUTTON_FONT_WEIGHT = 600;
const SPOTLITE_SMALL_BUTTON_FONT_WEIGHT = 600;

declare module "@mui/material/styles" {
  interface TypographyVariants {
    spotliteBody: React.CSSProperties; // Content
    spotliteBodyStrong: React.CSSProperties; // Content Link
    spotliteCaption: React.CSSProperties; // Sub Content
    spotliteCaptionStrong: React.CSSProperties; // Sub Content Link
    spotliteCaptionSmall: React.CSSProperties; // Sub Content Small
  }

  // allow configuration using `createTheme()`
  interface TypographyVariantsOptions {
    spotliteBody?: React.CSSProperties;
    spotliteBodyStrong?: React.CSSProperties;
    spotliteCaption?: React.CSSProperties;
    spotliteCaptionStrong?: React.CSSProperties;
    spotliteCaptionSmall?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    spotliteBody: true;
    spotliteBodyStrong: true;
    spotliteCaption: true;
    spotliteCaptionStrong: true;
    spotliteCaptionSmall: true;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    accent: Palette["primary"];
    minor: Palette["secondary"];
    negative: Palette["error"];
    line: Palette["primary"];
    highLight: Palette["primary"];
    spotliteText: Palette["text"];
    spotliteLightGrey: Palette["secondary"];
    spotliteFloatingBg: Palette["primary"];
  }

  interface PaletteOptions {
    accent?: PaletteOptions["primary"];
    minor?: PaletteOptions["secondary"];
    negative?: PaletteOptions["error"];
    line?: PaletteOptions["primary"];
    highLight?: PaletteOptions["primary"];
    spotliteText?: PaletteOptions["text"];
    spotliteLightGrey?: PaletteOptions["secondary"];
    spotliteFloatingBg?: PaletteOptions["primary"];
  }

  // interface PaletteColor {
  //   highLight: string;
  // }

  // interface SimplePaletteColorOptions {
  //   highLight?: string;
  // }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    line: true;
    lineDisconnect: true;
    search: true;
    searchSelected: true;
    option: true;
    optionSelected: true;
    chatAction: true;
    spotlite: true;
    spotliteLogin: true;
  }

  interface ButtonPropsColorOverrides {
    negative: true;
    accent: true;
    minor: true;
  }

  interface ButtonPropsSizeOverrides {
    xlarge: true;
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
    accent: true;
    minor: true;
    negative: true;
  }
}

export const pretendard = localFont({
  src: [
    {
      path: "../../public/assets/fonts/Pretendard-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Pretendard-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Pretendard-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Pretendard-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Pretendard-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Pretendard-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Pretendard-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Pretendard-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Pretendard-Thin.woff2",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
});

export const metropolis = localFont({
  src: [
    {
      path: "../../public/assets/fonts/Metropolis-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Metropolis-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Metropolis-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Metropolis-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Metropolis-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Metropolis-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Metropolis-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Metropolis-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Metropolis-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Metropolis-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../../public/assets/fonts/Metropolis-ExtraBoldItalic.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../../public/assets/fonts/Metropolis-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/assets/fonts/Metropolis-SemiBoldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/assets/fonts/Metropolis-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/assets/fonts/Metropolis-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/assets/fonts/Metropolis-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/assets/fonts/Metropolis-ExtraLightItalic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/assets/fonts/Metropolis-ThinItalic.otf",
      weight: "100",
      style: "italic",
    },
  ],
  variable: "--font-metropolis",
});

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const figtree = Figtree({
  weight: ["300", "400", "500", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
});

// Create a theme instance.
const theme = createTheme({
  cssVariables: true,
  shape: {
    borderRadius: 2,
  },
  typography: {
    fontFamily: [metropolis.style.fontFamily, pretendard.style.fontFamily].join(
      ","
    ),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1600,
    },
  },
  palette: {
    mode: "light",
    background: { default: "#ffffff" },
    text: {
      primary: "#000000",
      secondary: "#5A5A5A",
    },
    primary: {
      main: "#000000",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#EDEEFC",
      contrastText: "#5058E3",
    },
    accent: {
      main: "#5058e3",
      contrastText: "#ffffff",
    },
    minor: {
      main: "#F1F1F1",
    },
    info: {
      main: "#5058e3",
    },
    warning: {
      light: "#FEF8D4",
      main: "#FFDA00",
    },
    error: {
      main: "#ff0000",
    },
    success: {
      main: "#5058e3",
    },
    negative: {
      main: "#D32F2F",
      contrastText: "#ffffff",
    },
    line: {
      main: "#06C755",
      dark: "#05a84e",
      contrastText: "#ffffff",
    },
    highLight: {
      main: "#FFFF99",
    },
    spotliteText: {
      primary: "#000000",
      secondary: "#5A5A5A",
    },
    spotliteLightGrey: {
      main: "#E1E1E1",
      light: "rgba(225, 225, 225, 0.2)",
    },
    spotliteFloatingBg: {
      main: "#000000CC",
    },
  },
});

theme.typography = {
  ...theme.typography,
  h1: {
    // Main Heading
    fontSize: "3rem",
    fontWeight: 600,
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  h2: {
    // Sub Heading
    fontSize: "3rem",
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  h3: {
    // Subsection Heading
    fontSize: "1.5rem",
    fontWeight: 600,
    color: theme.palette.spotliteText.secondary,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
    },
  },
  h4: {
    // Detailed Section Heading
    fontSize: "1.5rem",
    fontWeight: 500,
    color: theme.palette.spotliteText.primary,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
    },
  },
  h5: {
    fontSize: "1rem",
    fontWeight: 700,
  },
  h6: {
    fontSize: "0.9rem",
    fontWeight: 600,
  },
  body1: {
    fontSize: "1rem",
    fontWeight: 500,
    color: theme.palette.spotliteText.secondary,
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
    },
  },
  body2: {
    fontSize: "0.8rem",
  },
  caption: {
    fontSize: "0.7rem",
  },
  spotliteBody: {
    fontSize: "1rem",
    fontWeight: 500,
    color: theme.palette.spotliteText.secondary,
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
    },
  },
  spotliteBodyStrong: {
    fontSize: "1rem",
    fontWeight: 600,
    color: theme.palette.spotliteText.primary,
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
    },
  },
  spotliteCaption: {
    fontSize: "0.875rem",
    fontWeight: 400,
    color: theme.palette.spotliteText.secondary,
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.75rem",
    },
  },
  spotliteCaptionStrong: {
    fontSize: "0.875rem",
    fontWeight: 500,
    color: theme.palette.spotliteText.secondary,
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.75rem",
    },
  },
  spotliteCaptionSmall: {
    fontSize: "0.775rem",
    fontWeight: 400,
    color: theme.palette.spotliteText.secondary,
  },
};

theme.components = {
  MuiCssBaseline: {
    styleOverrides: css`
      @font-face {
        font-family: ${pretendard.style.fontFamily};
        font-display: swap;
        font-weight: 100 900;
        src: local("Pretendard-Regular"), local("Pretendard-SemiBold"),
          local("Pretendard-Thin"), local("Pretendard-Medium"),
          local("Pretendard-Light"), local("Pretendard-ExtraLight"),
          local("Pretendard-ExtraBold"), local("Pretendard-Bold"),
          local("Pretendard-Black");
        unicode-range: U+AC00-D7A3, U+0030-0039;
      }

      @font-face {
        font-family: ${metropolis.style.fontFamily};
        font-display: swap;
        font-weight: 100 900;
        src: local("Metropolis-Regular"), local("Metropolis-Bold"),
          local("Metropolis-Black"), local("Metropolis-ExtraBold"),
          local("Metropolis-ExtraLight"), local("Metropolis-Light"),
          local("Metropolis-Medium"), local("Metropolis-SemiBold"),
          local("Metropolis-Thin");
        unicode-range: U+0041-005A, U+0061-007A;
      }

      @font-face {
        font-family: ${metropolis.style.fontFamily};
        font-display: swap;
        font-weight: 100 900;
        font-style: italic;
        src: local("Metropolis-RegularItalic"), local("Metropolis-BoldItalic"),
          local("Metropolis-BlackItalic"), local("Metropolis-ExtraBoldItalic"),
          local("Metropolis-ExtraLightItalic"), local("Metropolis-LightItalic"),
          local("Metropolis-MediumItalic"), local("Metropolis-SemiBoldItalic"),
          local("Metropolis-ThinItalic");
        unicode-range: U+0041-005A, U+0061-007A;
      }

      pre {
        font-family: ${`${metropolis.style.fontFamily},${pretendard.style.fontFamily}`};
        font-size: 0.875rem;
        font-weight: 300;
      }

      :-webkit-autofill {
        -webkit-box-shadow: none !important;
        -webkit-text-fill-color: inherit !important;
      }
    `.styles,
  },
  MuiFormLabel: {
    styleOverrides: {
      root: {
        color: theme.palette.text.primary,
        fontWeight: 700,
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 10,
        boxShadow: "none",
        border: "1px solid",
        borderColor: theme.palette.minor.main,
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.default,
      },
    },
  },
  MuiAccordion: {
    styleOverrides: {
      root: {
        "::before": {
          backgroundColor: "transparent",
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 10,
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.accent.main,
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.accent.main,
        },
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        "&.Mui-focused": {
          color: theme.palette.accent.main,
        },
      },
    },
  },
  MuiFormControl: {
    styleOverrides: {
      root: {
        "&:hover .MuiInputLabel-root": {
          color: theme.palette.accent.main,
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.accent.main,
        },
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      paper: {
        borderRadius: 10,
      },
    },
  },

  MuiButton: {
    variants: [
      {
        props: { size: "xlarge" },
        style: {
          padding: SPOTLITE_XLARGE_BUTTON_PADDING,
          fontSize: SPOTLITE_XLARGE_BUTTON_FONT_SIZE,
          fontWeight: SPOTLITE_XLARGE_BUTTON_FONT_WEIGHT,
        },
      },
      {
        props: { variant: "spotlite", color: "primary" },
        style: {
          borderRadius: theme.spacing(1),
          backgroundColor: theme.palette.primary.main,
          fontSize: "24px",
          fontWeight: 600,
          color: theme.palette.primary.contrastText,
          "&.Mui-disabled": {
            border: "none",
            boxShadow: "none",
            color: "#FFFFFF",
            backgroundColor: theme.palette.spotliteLightGrey.main,
          },
        },
      },
      {
        props: { variant: "spotliteLogin" },
        style: {
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          border: "1px solid",
          borderColor: theme.palette.spotliteLightGrey.main,
          borderRadius: theme.spacing(1),
          color: theme.palette.spotliteLightGrey.contrastText,
          backgroundColor: "#FFFFFF",
          "&:hover": {
            backgroundColor: theme.palette.spotliteLightGrey.main,
          },
          "&.Mui-disabled": {
            border: "none",
            boxShadow: "none",
            backgroundColor: theme.palette.spotliteLightGrey.main,
            ".MuiTypography-root": {
              color: "#FFFFFF",
            },
          },
        },
      },
      {
        props: { variant: "text", color: "secondary" },
        style: {
          padding: "0 1.5rem",
          color: "black",
          "&:hover": {
            backgroundColor: theme.palette.secondary.main,
          },
        },
      },
      {
        props: { variant: "line" },
        style: {
          color: theme.palette.line.contrastText,
          backgroundColor: theme.palette.line.main,
          "&:hover": {
            backgroundColor: theme.palette.line.dark,
          },
          "&.Mui-disabled": {
            color: theme.palette.text.secondary,
            backgroundColor: theme.palette.secondary.main,
          },
        },
      },
      {
        props: { variant: "lineDisconnect" },
        style: {
          color: theme.palette.line.main,
          border: "1px solid",
          borderColor: theme.palette.line.main,
        },
      },
      {
        props: { variant: "searchSelected" },
        style: {
          boxShadow: "0 0 1px 1px blue inset",
          borderRadius: 10,
          transition: "all 0.2s ease-in-out",
        },
      },
      {
        props: { variant: "search" },
        style: {
          borderRadius: 10,
          backgroundColor: theme.palette.minor.main,
          color: theme.palette.primary.main,
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            boxShadow: "0 0 0 1px blue inset",
          },
        },
      },
      {
        props: { variant: "option" },
        style: {
          padding: "0.4rem 1rem",
          backgroundColor: "white",
          border: "1px solid",
          borderColor: theme.palette.spotliteLightGrey.main,
          borderRadius: "2rem",
          lineHeight: 1.5,
          "&:hover": {
            backgroundColor: theme.palette.minor.main,
          },
        },
      },
      {
        props: { variant: "optionSelected" },
        style: {
          padding: "0.4rem 1rem",
          color: theme.palette.spotliteLightGrey.contrastText,
          lineHeight: 1.5,
          border: "1px solid",
          borderColor: theme.palette.primary.main,
          backgroundColor: theme.palette.minor.main,
          borderRadius: "2rem",
          fontWeight: 700,
        },
      },
      {
        props: { variant: "outlined", color: "minor" },
        style: {
          color: theme.palette.common.black,
          borderColor: theme.palette.minor.main,
          "&:hover": {
            backgroundColor: theme.palette.minor.main,
          },
        },
      },
    ],
    styleOverrides: {
      root: {
        lineHeight: SPOTLITE_BUTTON_TEXT_LINE_HEIGHT,
        borderRadius: SPOTLITE_BORDER_RADIUS,
        boxShadow: "none",
        textTransform: "none",
      },
      sizeLarge: {
        padding: SPOTLITE_LARGE_BUTTON_PADDING,
        fontSize: SPOTLITE_LARGE_BUTTON_FONT_SIZE,
        fontWeight: SPOTLITE_LARGE_BUTTON_FONT_WEIGHT,
      },
      sizeMedium: {
        padding: SPOTLITE_MEDIUM_BUTTON_PADDING,
        fontSize: SPOTLITE_MEDIUM_BUTTON_FONT_SIZE,
        fontWeight: SPOTLITE_MEDIUM_BUTTON_FONT_WEIGHT,
      },
      sizeSmall: {
        padding: SPOTLITE_SMALL_BUTTON_PADDING,
        fontSize: SPOTLITE_SMALL_BUTTON_FONT_SIZE,
        fontWeight: SPOTLITE_SMALL_BUTTON_FONT_WEIGHT,
      },
    },
  },
  MuiContainer: {
    defaultProps: {
      maxWidth: "xl",
    },
    styleOverrides: {
      root: {
        paddingTop: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
          paddingTop: theme.spacing(2),
        },
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        fontWeight: 700,
      },
    },
  },
  // MuiChip: {
  //   variants: [
  //     {
  //       props: { variant: "filled", color: "success", size: "small" },
  //       style: {
  //         fontWeight: 600,
  //         borderRadius: SPOTLITE_BORDER_RADIUS,
  //       },
  //     },
  //   ],
  //   styleOverrides: {
  //     root: {
  //       fontWeight: 700,
  //     },
  //   },
  // },
  MuiSlider: {
    styleOverrides: {
      markLabel: {
        color: theme.palette.secondary.dark,
        fontSize: "0.7rem",
      },
    },
  },
  MuiRadio: {
    styleOverrides: {
      root: {
        paddingRight: 0,
        paddingLeft: 0,
        svg: {
          fontSize: "1.8rem",
        },
      },
    },
  },
  MuiList: {
    styleOverrides: {
      root: {
        ".MuiPaper-root > &": {
          maxHeight: "70vh",
        },
      },
    },
  },
  MuiAlert: {
    variants: [
      {
        props: { severity: "info" },
        style: {
          border: "1px solid",
          borderColor: theme.palette.text.secondary,
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
        },
      },
      {
        props: { severity: "warning" },
        style: {
          borderRadius: 5,
          backgroundColor: theme.palette.warning.light,
          color: theme.palette.spotliteText.secondary,
        },
      },
      {
        props: { severity: "error" },
        style: {
          border: "1px solid",
          borderColor: theme.palette.error.main,
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.palette.background.default,
          color: theme.palette.error.main,
        },
      },
    ],
  },
  MuiFab: {
    styleOverrides: {
      root: {
        boxShadow: "none",
        backgroundColor: "#FFFFFF",
        "&:hover": {
          backgroundColor: "#E1E1E1",
        },
      },
    },
    variants: [
      {
        props: { size: "large" },
        style: {
          width: 80,
          height: 80,
        },
      },
    ],
  },
  MuiTooltip: {
    defaultProps: {
      placement: "bottom-start",
    },
    styleOverrides: {
      tooltip: {
        backgroundColor: theme.palette.spotliteFloatingBg.main,
        color: theme.palette.spotliteFloatingBg.contrastText,
        borderRadius: 5,
      },
    },
  },
  MuiPopover: {
    defaultProps: {
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right",
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    },
  },
};

export const NotistackSnackbar = styled(MaterialDesignContent)(() => ({
  "&.notistack-MuiContent-success": {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.success.contrastText,
  },
  "&.notistack-MuiContent-error": {
    border: "1px solid",
    borderColor: theme.palette.error.main,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.default,
    color: theme.palette.error.main,
  },
  "&.notistack-MuiContent-info": {
    border: "1px solid",
    borderColor: theme.palette.text.secondary,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
  "&.notistack-MuiContent-warning": {
    border: "1px solid",
    borderColor: theme.palette.warning.main,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.default,
    color: theme.palette.warning.dark,
  },
}));

export default theme;