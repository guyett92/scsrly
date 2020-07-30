// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import userService from '../../utils/userService';

// class LoginPage extends Component {
  
//   state = {
//     email: '',
//     pw: ''
//   };

//   handleChange = (e) => {
//     // TODO: implement in an elegant way
//     this.setState({
//       // Using ES2015 Computed Property Names
//       [e.target.name]: e.target.value
//     });
//   }

//   handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await userService.login(this.state);
//       // Successfully signed up - show GamePage
//       this.props.handleSignupOrLogin();
//       this.props.history.push('/');
//     } catch (err) {
//       console.log(err);
//       // Invalid user data (probably duplicate email)

//     }
//   }

//   render() {
//     return (
//       <div className="LoginPage">
//         <header className="header-footer">Log In</header>
//         <form className="form-horizontal" onSubmit={this.handleSubmit} >
//           <div className="form-group">
//             <div className="col-sm-12">
//               <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
//             </div>
//           </div>
//           <div className="form-group">
//             <div className="col-sm-12">
//               <input type="password" className="form-control" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
//             </div>
//           </div>
//           <div className="form-group">
//             <div className="col-sm-12 text-center">
//               <button className="btn btn-default">Log In</button>&nbsp;&nbsp;&nbsp;
//               <Link to='/'>Cancel</Link>
//             </div>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default LoginPage;


import React, { Component } from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  withStyles
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import userService from '../../utils/userService';
import './LoginPage.css';

const styles = theme => ({
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  grid: {
    marginTop: theme.spacing(1),
  },
});

class LoginPage extends Component {

    state = {
      email: '',
      pw: ''
    };

    handleChange = (e) => {
      // TODO: implement in an elegant way
      this.setState({
        // Using ES2015 Computed Property Names
        [e.target.name]: e.target.value
      });
    }

    handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await userService.login(this.state);
        // Successfully signed up - show GamePage
        this.props.handleSignupOrLogin();
        this.props.history.push('/');
      } catch (err) {
        console.log(err);
        // Invalid user data (probably duplicate email)
      }
    }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={this.props.classes.paper}>
          <Avatar className={this.props.classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <form className={this.props.classes.form} noValidate onSubmit={this.handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={this.handleChange}
              value={this.state.email}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="pw"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={this.handleChange}
              value={this.state.pw}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={this.props.classes.submit}
            >
              Sign In
            </Button>
            <Link href="/" className="cancel">
              <Button 
                fullWidth
                variant="contained"
                color="danger"       
              >
                Cancel
              </Button>
            </Link>
            <Grid container className={this.props.classes.grid}>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://aarondguyett.com">
              Aaron Guyett
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Box>
      </Container>
    );
  }
}

export default withStyles(styles)(LoginPage);