import React from 'react'
import './App.css';
import SideMenu from '../components/SideMenu';
import { makeStyles } from '@mui/styles';
import Header from '../components/Header';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PageHeader from '../components/PageHeader';
import AdbIcon from '@mui/icons-material/Adb';

const theme = createTheme({
  palette: {
    primary: {
      dark: "#00002b",
      main: "#042354",
      light: "#3b4a81"
    },
    secondary: {
      dark: "#7eebff",
      main: "#41b9e4",
      light: "#0089b2"
    },
    background: {
      default: "#f4f5fd"
    }
  },
  shape: {
    borderRadius: '12px'
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform:'translateZ(0)'
      }
    }
  },
  props: {
    MuiIconButton: {
      disableRipple: true
    }
  }
})

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
})

function App() {
  const classes = useStyles();

  return (
    //<React.Fragment>
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <PageHeader
          title="Page Header"
          subtitle="Page Description"
          icon={<AdbIcon fontSize="large"/>}
        />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
