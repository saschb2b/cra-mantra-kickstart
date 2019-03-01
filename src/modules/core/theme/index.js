import { createMuiTheme } from "@material-ui/core/styles";
import { blue, yellow } from "@material-ui/core/colors";

export const muiTheme = (themeType = "light") =>
  createMuiTheme({
    palette: {
      primary: {
        main: blue[500]
      },
      secondary: {
        main: yellow[700]
      },
      type: themeType
    },
    typography: { useNextVariants: true }
  });
