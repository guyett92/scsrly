import React from 'react';
import {
    Grid, ListItem, ListItemText, List, ListItemIcon, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AssignmentTurnedInRoundedIcon from '@material-ui/icons/AssignmentTurnedInRounded';
import StreetviewRoundedIcon from '@material-ui/icons/StreetviewRounded';
import LockOpenRoundedIcon from '@material-ui/icons/LockOpenRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';
import InstagramIcon from '@material-ui/icons/Instagram';
import ComputerIcon from '@material-ui/icons/Computer';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    grid: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    listItem: {
        width: "50%",
        margin: '0 auto',
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
}))

export default function FooterCollapse() {
    const classes = useStyles();

    return(
        <Grid className={classes.root} container alignContent='center' alignItems='center'>
            <Grid className={classes.grid} item xs={4}>
                <List component="nav" aria-label="sitemap">
                    <Link to="/" className={classes.link}>
                        <ListItem button className={classes.listItem}>
                            <ListItemIcon>
                                <HomeRoundedIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Home
                            </ListItemText>
                        </ListItem>
                    </Link>
                    <Link to="/goals" className={classes.link}>
                        <ListItem button className={classes.listItem}>
                            <ListItemIcon>
                                <AssignmentTurnedInRoundedIcon />
                            </ListItemIcon>
                            <ListItemText>
                                User Goals
                            </ListItemText>
                        </ListItem>
                    </Link>
                    <Link to="/sharedgoals" className={classes.link}>
                        <ListItem button className={classes.listItem}>
                            <ListItemIcon>
                                <StreetviewRoundedIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Public Goals - Coming soon!
                            </ListItemText>
                        </ListItem>
                    </Link>
                    <Link to="/signup" className={classes.link}>
                        <ListItem button className={classes.listItem}>
                            <ListItemIcon>
                                <LockOpenRoundedIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Sign Up
                            </ListItemText>
                        </ListItem>
                    </Link>
                    <Link to="/login" className={classes.link}>
                        <ListItem button className={classes.listItem}>
                            <ListItemIcon>
                                <ExitToAppRoundedIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Login
                            </ListItemText>
                        </ListItem>
                    </Link>
                </List>
            </Grid>
            <Grid className={classes.grid} item xs={4}>
                <Typography component="p" color="textSecondary">
                    Thanks for visiting!
                </Typography>
            </Grid>
            <Grid className={classes.grid} item xs={4}>
                <List component="nav" aria-label="external resources">
                    <a href="https://linkedin.com/in/aarondguyett" target="_blank" rel="noopener noreferrer" className={classes.link}>
                        <ListItem button className={classes.listItem}>
                            <ListItemIcon>
                                <LinkedInIcon />
                            </ListItemIcon>
                            <ListItemText>
                                LinkedIn
                            </ListItemText>
                        </ListItem>
                    </a>
                    <a href="https://github.com/guyett92" target="_blank" rel="noopener noreferrer" className={classes.link}>
                        <ListItem button className={classes.listItem}>
                            <ListItemIcon>
                                <GitHubIcon />
                            </ListItemIcon>
                            <ListItemText>
                                GitHub
                            </ListItemText>
                        </ListItem>
                    </a>
                    <a href="https://aarondguyett.com" target="_blank" rel="noopener noreferrer" className={classes.link}>
                        <ListItem button className={classes.listItem}>
                            <ListItemIcon>
                                <WebIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Portfolio
                            </ListItemText>
                        </ListItem>
                    </a>
                    <a href="https://instagram.com/aarong_aesthetics" target="_blank" rel="noopener noreferrer" className={classes.link}>
                        <ListItem button className={classes.listItem}>
                            <ListItemIcon>
                                <InstagramIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Instagram
                            </ListItemText>
                        </ListItem>
                    </a>
                    <a href="https://www.hackerrank.com/aaronguyett" target="_blank" rel="noopener noreferrer" className={classes.link}>
                        <ListItem button className={classes.listItem}>
                            <ListItemIcon>
                                <ComputerIcon />
                            </ListItemIcon>
                            <ListItemText>
                                HackerRank
                            </ListItemText>
                        </ListItem>
                    </a>
                </List>
            </Grid>
        </Grid>
    )
}