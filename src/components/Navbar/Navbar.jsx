import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
   AppBar,
   Toolbar,
   IconButton,
   Avatar,
   Paper,
   Divider,
   InputBase,
   Button,
   Hidden,
   withStyles
   } from '@material-ui/core';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import './Navbar.css';

const styles = theme => ({
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
});


class Navbar extends Component {
  render() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link className="unlink">
        <figure className="image">
          <img src="/img/favicon.ico" alt="logo" />
        </figure>
        </Link>
        {this.props.user ? 
              <>
                <IconButton>
                  <ExitToAppRoundedIcon onClick={this.props.handleLogout}/>
                </IconButton>
                <IconButton>
                  {this.props.user.avatarUrl ?
                    <Avatar alt={this.props.user.name} src={this.props.user.avatarUrl} />
                  :
                    <AccountCircleRoundedIcon />
                  }
                </IconButton>
                &nbsp;&nbsp;&nbsp;&nbsp;
              </>
            :
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Button><Link to="/login" className="login">LOG IN</Link></Button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Button><Link to="/signup" className="login">SIGN UP</Link></Button>
              &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
        }
        <Paper component="form" className={this.props.classes.root}>
          <InputBase
            className={this.props.classes.input}
            placeholder="Search..."
            inputProps={{ 'aria-label': 'Search' }}
          />
          <Divider className={this.props.classes.divider} orientation="vertical" />
          <IconButton type="submit" color="secondary" className={this.props.classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        <Hidden lgUp>
          <IconButton onClick={this.props.onSidebarOpen} className='right' edge="end" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
  }
}

export default withStyles(styles)(Navbar);