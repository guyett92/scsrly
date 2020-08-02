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
  SwipeableDrawer
  } from "@material-ui/core";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded"
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import AssignmentTurnedInRoundedIcon from '@material-ui/icons/AssignmentTurnedInRounded';
import './Sidebar.css';

const styles = {
  fullList: {
    width: 300
  }
};

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
        onClick={onClose}
        onKeyDown={onClose}
      >
        <List>
          {user ?
            <>
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
              <ListItem button key="Log Out" aria-label="logout" onClick={handleLogout}>
                <ListItemIcon>
                  <ExitToAppRoundedIcon />
                </ListItemIcon>
                <ListItemText>
                  Log Out
                </ListItemText>
              </ListItem>
            </>
            :
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
          <Link to="/goals" className="login">
            <ListItem button key="Goals" aria-label="goals">
              <ListItemIcon>
                <AssignmentTurnedInRoundedIcon />
              </ListItemIcon>
              <ListItemText>
                Goals
              </ListItemText>
            </ListItem>
          </Link>
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
