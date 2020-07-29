import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Avatar, Paper, Divider, InputBase, Button } from '@material-ui/core';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import './Navbar.css';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
    float: 'right'
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));


export default function(props) {

  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Link className="unlink">
        <figure className="image">
          <img src="/img/favicon.ico" alt="logo" />
          <caption><span>Success Snake</span> ✔️</caption>
        </figure>
        </Link>
        {props.user ? 
              <>
                <IconButton>
                  <ExitToAppRoundedIcon onClick={props.handleLogout}/>
                </IconButton>
                <IconButton>
                  {props.user.avatarUrl ?
                    <Avatar alt={props.user.name} src={props.user.avatarUrl} />
                  :
                    <AccountCircleRoundedIcon />
                  }
                </IconButton>
                &nbsp;&nbsp;&nbsp;&nbsp;
              </>
            :
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Button><Link to="/login">LOG IN</Link></Button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Button><Link to="/signup">SIGN UP</Link></Button>
              &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
        }
                <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search..."
          inputProps={{ 'aria-label': 'Search' }}
        />
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton type="submit" color="secondary" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
        <IconButton className='right' edge="end" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

