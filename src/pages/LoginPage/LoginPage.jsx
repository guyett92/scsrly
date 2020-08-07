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
  Typography,
  Container,
  Snackbar,
  IconButton,
  withStyles,
  InputAdornment
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CloseIcon from '@material-ui/icons/Close';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import userService from '../../utils/userService';
import Head from '../../components/Head/Head';
import Header from '../../components/Header/Header';
import FormCopyright from '../../components/FormCopyRight/FormCopyRight';
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
      pw: '',
      message: '',
      open: false,
      showPassword: false,
    };

    handleClickShowPassword = (e) => {
      if (this.state.showPassword) {
        this.setState({ showPassword: false });
      } else {
        this.setState({ showPassword: true });
      }
    };

    updateMessage = (msg) => {
      this.setState({message: msg, open: true});
    }

    handleClose = (e, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      this.setState({open: false});
    }  

    handleChange = (e) => {
      // TODO: implement in an elegant way
      this.updateMessage('');
      this.setState({
        // Using ES2015 Computed Property Names
        [e.target.name]: e.target.value
      });
    }

    handleClick = (e) => {
      this.updateMessage('We always remember you!');
      this.setState({
        remember: e.target.checked,
        open: true
      });
    }

    handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await userService.login(this.state);
        this.props.handleSignupOrLogin();
        this.props.history.push('/');
      } catch (err) {
        
        // Invalid user data (probably duplicate email)
      }
    }

    isFormInvalid() {
      return !(this.state.email && this.state.pw);
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
            pageTitle='Login'
            description="Login now to begin at Scsr.ly!"
          />
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
                value={this.state.email}
                onChange={this.handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="pw"
                label="Password"
                type={!this.state.showPassword ? "password" : "text"}
                id="password"
                autoComplete="current-password"
                value={this.state.pw}
                onChange={this.handleChange}
                InputProps={{
                  endAdornment: 
                    <InputAdornment position="end">
                      <IconButton onClick={this.handleClickShowPassword} aria-label="toggle password visibility" edge="end">
                        {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                }}
              />
              <FormControlLabel
                control={<Checkbox
                   color="primary"
                   name="remember"
                   defaultChecked={this.state.remember}
                   onChange={this.handleClick}
                />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={this.isFormInvalid()}
                className={this.props.classes.submit}
              >
                Sign In
              </Button>
              <Link href="/" className="cancel">
                <Button 
                  fullWidth
                  variant="contained"    
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
          <FormCopyright />
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

export default withStyles(styles)(LoginPage);