import React, {
  useState,
  useCallback,
  useMemo,
  createContext,
  useContext,
} from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/styles';

import Clock from './components/clock';

const themes = {
  light: {
    primaryColor: '#000',
    secondaryColor: '#fff',
    backgroundColor: '#fff',
  },
  dark: {
    primaryColor: '#fff',
    secondaryColor: '#333',
    backgroundColor: '#111',
  },
};

const Context = createContext();

const themeMap = {
  light: 'dark',
  dark: 'light',
};

const themeTexts = {
  dark: 'Light mode',
  light: 'Dark mode',
};

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: '"Heebo", sans-serif',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'var(--content-height)',
    overflow: 'hidden',
    margin: 0,
    transition: 'all 0.5s ease-in',
    backgroundColor: theme.backgroundColor,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toggle: {
    cursor: 'pointer',
    backgroundColor: theme.primaryColor,
    color: theme.secondaryColor,
    border: 0,
    borderRadius: 4,
    padding: '8px 12px',
    position: 'absolute',
    top: 100,
    '&:focus': {
      outline: 'none',
    },
  },
}));

const ThemeClock = () => {
  const classes = useStyles();
  const { theme, toggleTheme } = useContext(Context);

  const themeName = useMemo(() => themeTexts[theme], [theme]);

  return (
    <div className={classes.root}>
      <button className={classes.toggle} onClick={() => toggleTheme()}>
        {themeName}
      </button>

      <div className={classes.container}>
        <Clock />

        <div className="time"></div>
        <div className="date"></div>
      </div>
    </div>
  );
};

export default function Theming() {
  const [theme, setTheme] = useState('light');
  const themeInstance = useMemo(() => themes[theme], [theme]);
  const toggleTheme = useCallback(() => {
    setTheme(theme => themeMap[theme]);
  }, []);

  return (
    <Context.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={themeInstance}>
        <ThemeClock />
      </ThemeProvider>
    </Context.Provider>
  );
}
