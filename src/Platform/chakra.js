import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/300.css";

const theme = extendTheme({
    fonts: {
        heading: "Open Sans",
        body: "Open Sans",
    },
    colors: {
        brand: {
            50: "#ffeedc",
            100: "#ffd0b0",
            200: "#ffb37f",
            500: "#ff9a56",
            600: "#b34800",
            700: "#813300",
            800: "#4f1e00",
            900: "#200700",
        },
        actionBlue: "#18A0FB",
        gray5: "#202224",
        gray4: "#404445",
        gray1: "#DDDDDD",
        green1: "#1E7580",
        green2: "rgba(30, 117, 128, 0.3)",
        primary: "#FF9A56",
        yellow1: "#FFD978",
        gray2: "#CCCCCC",
        grayDot: "#C4C4C4",
        lightgray: "#F2F5F5",
        linkblue: "#18A0FB",
        redDot: "#D7392F",
        grayBox: "#DBE5F4",
        brightGreen: "#C7F48D",
        graygreen: "#F2F5F5",
        errorNotification: "rgba(215, 57, 47, 0.1)",
        errorText: "#D44417",
        cream: "#FFF8F3",
    },
});

const PlatformProvider = ({ children }) => (
    <ChakraProvider theme={theme} resetCSS>
        {children}
    </ChakraProvider>
);

export default PlatformProvider;