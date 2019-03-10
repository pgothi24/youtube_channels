import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#87A3C7",
      main: "#345A8A",
      dark: "#193d69",
      contrastText: "#FFFFFF"
    },
    secondary: {
      light: "#72A0B3",
      main: "#2E6880",
      dark: "#154D63",
      contrastText: "#FFFFFF"
    }
  },
  typography: {
    useNextVariants: true
  },
  overrides: {
    MuiInputBase: {
      error: {
        backgroundColor: "#FFF",
        borderRadius: 4,
        color: "#6D6D6D",
        border: "2px solid #C91827"
      }
    },
    MuiInput: {
      input: {
        backgroundColor: "#FFF",
        borderRadius: 3,
        color: "#6D6D6D",
        border: "1px solid #919191",
        padding: "8px 12px",
        "&:focus": {
          border: "1px solid #4B6E9A"
        }
      },
      inputMultiline: {
        border: 0,
        padding: "8px 12px"
      },
      multiline: {
        backgroundColor: "#F5F5F5",
        borderRadius: 3,
        color: "#6D6D6D",
        border: "1px solid #919191"
      }
    },
    MuiSelect: {
      select: {
        backgroundColor: "#FFF",
        borderRadius: 3,
        color: "#6D6D6D",
        border: "1px solid #919191",
        padding: "8px 12px",
        "&:focus": {
          borderRadius: 3,
          backgroundColor: "#FFF",
          border: "1px solid #4B6E9A"
        }
      },
      icon: {
        color: "#6D6D6D"
      }
    },
    MuiButton: {
      root: {
        borderRadius: 3
      }
    },
    MuiTableCell: {
      root: {
        paddingRight: "36px"
      },
      head: {
        fontSize: 13
      },
      body: {
        fontSize: 14
      }
    }
  },
  snackbar: {
    error: "#9E3C46",
    success: "#549970"
  }
});

export default theme;
