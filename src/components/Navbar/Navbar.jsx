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
          <Link className="unlink" to="/">
            <figure className="image">
              <img src="/img/logo.jpg" alt="logo" />
            </figure>
          </Link>
          <Link className="unlink" to="/">Scsr.ly</Link>
          {this.props.user ? 
                <>
                  <Button onClick={this.props.handleLogout} className="login white" style={{marginLeft: "1.25rem"}}aria-label="login">LOG OUT</Button>
                  <Link to="/user">
                    <IconButton>
                      {this.props.user.avatarUrl ?
                        <Avatar alt={this.props.user.name} src={this.props.user.avatarUrl} />
                      :
                        <AccountCircleRoundedIcon style={{color: 'white'}}/>
                      }
                    </IconButton>
                  </Link>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </>
              :
              <Hidden smDown>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button aria-label="login"><Link to="/login" className="login white">LOG IN</Link></Button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button aria-label="sign up"><Link to="/signup" className="login white">SIGN UP</Link></Button>
                &nbsp;&nbsp;&nbsp;&nbsp;
              </Hidden>
          }
          <Hidden smDown>
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
          </Hidden>
            <IconButton onClick={this.props.onSidebarOpen} className='right' edge="end" aria-label="menu">
              <MenuIcon style={{color: "white"}} />
            </IconButton>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles)(Navbar);