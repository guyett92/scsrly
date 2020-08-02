// import React, { Component } from 'react';
// import SignupForm from '../../components/SignupForm/SignupForm';
// import Head from '../../components/Head/Head';

// class SignupPage extends Component {
  
//   constructor(props) {
//     super(props);
//     this.state = {message: ''}
//   }

//   updateMessage = (msg) => {
//     this.setState({message: msg});
//   }

//   render() {
//     return (
//       <div className='SignupPage'>
//         <Head 
//           title={this.props.title}
//           pageTitle='Sign Up'
//         />
//         <SignupForm {...this.props} updateMessage={this.updateMessage} />
//         <p>{this.state.message}</p>
//       </div>
//     );
//   }
// }

// export default SignupPage;

import React, { Component } from 'react';
import {
  CssBaseline,
  Snackbar,
  Container,
  IconButton
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Head from '../../components/Head/Head';
import Header from '../../components/Header/Header';
import SignUpForm from '../../components/SignupForm/SignupForm';
import CloseIcon from '@material-ui/icons/Close';

const styles =theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class SignupPage extends Component {

  constructor(props) {
    super(props);
    this.state = {message: ''}
    this.state.open = false;
  }

  updateMessage = (msg) => {
    this.setState({message: msg, open: true});
  }

  handleClose = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({open: false});
  }

  render() {

    return (
      <>
        <Header 
            user={this.props.user}
            handleLogout={this.props.handleLogout}
            quote={this.props.quote}
            quoteAuth={this.props.quoteAuth}
            open={this.props.open}
            onOpen={this.props.onOpen}
            onClose={this.props.onClose}
        />
        <Container component="main" maxWidth="xs">
          <Head 
            title={this.props.title}
            pageTitle='Sign Up'
          />
          <CssBaseline />
          <SignUpForm {...this.props} updateMessage={this.updateMessage} />
          {this.state.message &&
            <Snackbar
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              open={this.state.open}
              autoHideDuration={6000}
              onClose={this.handleClose}
              message={this.state.message}
              action={
                <React.Fragment>
                  <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleClose}>
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </React.Fragment>
              }
            />
          }
        </Container>
      </>
    );
  }
}

export default withStyles(styles)(SignupPage);