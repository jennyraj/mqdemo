import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';

import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {createStyles, fade, Theme, makeStyles, createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {IconButton, InputBase} from "@material-ui/core";
import Autocomplete from "./autocomplete";

import FormDialogAdd from "./formadd";
import FormDialogEdit from "./formedit";

{/*
import purple from '@material-ui/colors/purple';
import green from '@material-ui/colors/green';


const purpleTheme = createMuiTheme({
    palette: {
        primary: purple,
        secondary: green
    }
});

const fontTheme = createMuiTheme({
    palette: {
        secondary: purple,
        primary: green,
    },
    typography: {
        fontFamily: ['Courier', 'Helvetica'],
    }
})


const themes = [defaultTheme, purpleTheme, fontTheme]
const    setTheme = (idx:any) => { setState( {...state, theme: themes[idx] } ) }
*/}

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Medquest Associates
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme: Theme) => ({
    icon: {
        marginRight: theme.spacing(2, 0, 0),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4, 0, 0),
    },
    cardGrid: {
        paddingTop: theme.spacing(8, 0, 0),
        paddingBottom: theme.spacing(8, 0, 0),
    },

    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        alignItems: 'bottom',
        padding: theme.spacing(6, 0, 0),
    },
}));


export default function Album() {
    const classes = useStyles();
   const [state,setState]=useState();

    const defaultTheme = createMuiTheme();
    const theme = createMuiTheme({
        palette: {
            primary: {
                // light: will be calculated from palette.primary.main,
                main: '#ff4400',
                // dark: will be calculated from palette.primary.main,
                // contrastText: will be calculated to contrast with palette.primary.main
            },
            secondary: {
                light: '#0066ff',
                main: '#0044ff',
                // dark: will be calculated from palette.secondary.main,
                contrastText: '#ffcc00',
            },
            // Used by `getContrastText()` to maximize the contrast between
            // the background and the text.
            contrastThreshold: 3,
            // Used by the functions below to shift a color's luminance by approximately
            // two indexes within its tonal palette.
            // E.g., shift from Red 500 to Red 300 or Red 700.
            tonalOffset: 0.2,
        },
    });

    return (
        <React.Fragment>
            <MuiThemeProvider
               theme={theme}
            >
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Medquest Application
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{'aria-label': 'search'}}
                        />
                    </div>
                </Toolbar>
            </AppBar>

            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h6" variant="h6" align="center"
                                    color="textPrimary" gutterBottom>
                            Quick Search
                        </Typography>

                        <Autocomplete/>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <FormDialogAdd />
                                </Grid>
                                  <Grid item>
                                  <FormDialogEdit/>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>

            </main>

            {/* Footer */}
            <footer className={classes.footer}>

                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    All rights reserved
                </Typography>
                <Copyright key={"xxx"}/>
            </footer>
            {/* End footer */}
            </MuiThemeProvider>
        </React.Fragment>
    );
}