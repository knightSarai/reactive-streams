import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { MainProvider } from '../context/main.context';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core/';
import Nav from './Nav'

import './App.css'
const rootFont = "'Roboto', sans-serif"
const useStyle = makeStyles({
    root: {
        fontFamily: rootFont,
        margin: 0,
        padding:0,
    },
    papper: {
        height: "100vh"
    }
});

export default function App() {
    const classes = useStyle()
    return (
        <MainProvider>
            <Paper className={classes.papper}>
            <div className={classes.root}>
                <Nav/>
                <Typography variant="h1">
                    my App
                </Typography>
            </div>
        </Paper>
        </MainProvider>
        
    )
}
