import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { 
  withStyles,
  ListItemAvatar,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  SwipeableDrawer,
  Paper,
  InputBase,
  IconButton,
  } from "@material-ui/core";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded"
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import AssignmentTurnedInRoundedIcon from '@material-ui/icons/AssignmentTurnedInRounded';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import StreetviewRoundedIcon from '@material-ui/icons/StreetviewRounded';
import SearchIcon from '@material-ui/icons/Search';
import MeetingRoomRoundedIcon from '@material-ui/icons/MeetingRoomRounded';
import './Sidebar.css';

const styles = theme => ({
  fullList: {
    width: 300
  },  
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

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openSidebar: false
    };
  }

  showDrawer = event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    this.setState({ openSidebar: true });
  };


  fullList = () => {
    const { classes, onClose, user, handleLogout, quote, quoteAuth} = this.props;
    return (
      <div
        className={classes.fullList}
        role="presentation"
      >
        <List>
          {user ?
            <div onClick={onClose}>
              <Link to="/user" className="login">
                <ListItem button key="Avatar" aria-label="avatar" >
                  <ListItemAvatar>
                    <Avatar alt={user.name} src={
                      user.avatarURL ?
                      user.avatarURL
                      :
                      ""
                    } />
                  </ListItemAvatar>
                  <ListItemText>
                    Hi there, {user.firstName}!
                  </ListItemText>
                </ListItem>
              </Link>
              <ListItem button key="Log Out" aria-label="logout" onClick={handleLogout}>
                <ListItemIcon>
                  <ExitToAppRoundedIcon />
                </ListItemIcon>
                <ListItemText>
                  Log Out
                </ListItemText>
              </ListItem>
            </div>
            :
            <div onClick={onClose}>
              <Link to="/signup" className="login">
                <ListItem button key="Sign Up" aria-label="sign up">
                  <ListItemIcon>
                    <MeetingRoomRoundedIcon />
                  </ListItemIcon>
                  <ListItemText>
                    Sign Up
                  </ListItemText>
                </ListItem>
                </Link>
                <Link to="/login" className="login">
                <ListItem button key="Log In" aria-label="login">
                  <ListItemIcon>
                    <AccountCircleRoundedIcon />
                  </ListItemIcon>
                  <ListItemText>
                    Log In
                  </ListItemText>
                </ListItem>
              </Link>
            </div>
          }
          <Divider />
          <ListItem>
            <ListItemText>
              {quote} {
                quoteAuth ?
                `- ${quoteAuth}`
                :
                "- Anonymous"
              }
            </ListItemText>
          </ListItem>
        </List>
        <Divider />
        <List>
          <div onClick={onClose}>
          <Link to="/goals" className="login">
            <ListItem button key="Goals" aria-label="goals">
              <ListItemIcon>
                <AssignmentTurnedInRoundedIcon />
              </ListItemIcon>
              <ListItemText>
                {user.firstName}'s Goals
              </ListItemText>
            </ListItem>
          </Link>
          <Link to="/addgoal" className="login">
            <ListItem button key="Add Goal" aria-label="add goal">
              <ListItemIcon>
                <AddCircleRoundedIcon />
              </ListItemIcon>
              <ListItemText>
                Add a Goal
              </ListItemText>
            </ListItem>
          </Link>
          <Link to="/viewgoals" className="login">
            <ListItem button key="View Goals" aria-label="view all goals">
              <ListItemIcon>
                <StreetviewRoundedIcon />
              </ListItemIcon>
              <ListItemText>
                View Goals
              </ListItemText>
            </ListItem>
          </Link>
          </div>
          <ListItem>
            <Paper component="form" className={classes.root}>
              <InputBase
                className={classes.input}
                placeholder="Search..."
                inputProps={{ 'aria-label': 'Search' }}
                onFocus={() => {}}
              />
              <Divider className={classes.divider} orientation="vertical" />
              <IconButton type="submit" color="secondary" className={classes.iconButton} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </ListItem>
        </List>
      </div>
    );
  };

  render() {
    const { open, onOpen, onClose } = this.props;

    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    return (
      <SwipeableDrawer
        open={open}
        onOpen={onOpen}
        onClose={onClose}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
      >
        {this.fullList()}
      </SwipeableDrawer>
    );
  }
}

export default withStyles(styles)(Sidebar);
