import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

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

const useStyles = makeStyles((theme: { spacing: (arg0: number, arg1: number | undefined, arg2: number | undefined) => any; palette: { background: { paper: any; }; }; }) => ({
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
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6, 0, 0),
    },
}));


export default function Album() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline/>
            <AppBar position="relative">
                <Toolbar>
                    <AccessibilityNewIcon className={classes.icon}/>
                    <Typography variant="h6" color="inherit" noWrap>
                        Medquest Associates
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                           Patient Search
                        </Typography>

                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        Main call to action
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Secondary action
                                    </Button>
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
        </React.Fragment>
    );
}