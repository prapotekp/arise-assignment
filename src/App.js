import React from "react";
import { Typography, Box, createTheme, ThemeProvider } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Products from './components/Products';
import Banner from "./components/Banner";

const theme = createTheme({
  typography: {
    fontFamily: '"Segoe UI"',
  }
});

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  header: {
    flexGrow: 1,
  },
  title: {
    color: "#091333",
    paddingTop: "16px",
  },
  box: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center",
    justifySelf: "center",
    textAlign: "center",
  },
  productsSection: {
    marginTop: "6px",
    height: '100vh'
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <div>
          <Banner />
        </div>
        <div className={classes.header}>
          <Box display="flex" justifyContent="center" alignItems="center" padding="16px">
            <Typography
              variant="h4"
              fontWeight="bold"
              className={classes.title}
            >
              Products
            </Typography>
          </Box>
        </div>
        <div className={classes.productsSection}>
          <Products />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
