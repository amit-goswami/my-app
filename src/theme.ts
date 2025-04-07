import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: {
    fontFamily: "Bungee Tint",
    fontSize: 24,
    fontWeightLight: 300,
    fontWeightRegular: 400,
  },
});

export default theme;
