import { createTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';
import { koKR } from '@material-ui/core/locale';
import { addAdminHomeTheme } from './admin/AdminHomeTheme';

let theme = createTheme({
    palette: {
        background: {
            dark: '#F4F6F8',
            default: colors.common.white,
            paper: colors.common.white,
            red: '#f44336',
            darkRed: '#CF1D1D',
        },
        primary: {
            main: '#1d2d50'
        },
        secondary: {
            main: "#133B5C" // colors.indigo[500]
        },
        tertiary: {
            main: colors.common.white
        },
        quaternary: {
            main: colors.white
        },
        warning: {
            main: colors.orange[500],
        },
        error: {
            main: colors.red[500],
        },
        text: {
            primary: colors.blueGrey[900],
            secondary: colors.blueGrey[600],
            tertiary: colors.blueGrey[100],
            quaternary: colors.blueGrey[300],
        },
        white: {
            main: colors.white
        },
    },
    shadows,
    typography: {
        fontFamily: [
            'Noto Sans Korean',
        ].join(","),
        h1: {
            fontSize: "2.5rem"
        },
        h2: {
            fontSize: "2rem"
        },
        h3: {
            fontSize: "1.5rem"
        },
        h4: {
            fontSize: "1.2rem"
        },
        h5: {
            fontSize: "1.1rem"
        },
        h6: {
            fontSize: "1rem"
        },
        body1: {
            fontSize: "1rem"
        },
        body2: {
            fontSize: "0.9rem"
        },
    }
}, koKR);

//theme = addAdminHomeTheme(theme)

export default theme;