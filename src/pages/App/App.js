import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import HomePage from '../HomePage/HomePage';
import userService from '../../utils/userService';
import { getQOD } from '../../utils/quote';
import theme from '../theme';
import { ThemeProvider } from '@material-ui/core/styles';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      title: "Success Snake",
      openSidebar: false
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleSidebarOpen = () => {
    this.setState({ openSidebar: true });
  };

  handleSidebarClose = () => {
    this.setState({ openSidebar: false });
  };

  async componentDidMount() {
    const quote = await getQOD('inspire');
    this.setState({
      quote: quote.contents.quotes[0].quote,
      quoteAuth: quote.contents.quotes[0].author
    });
  }

  render() {
    return (
      <ThemeProvider theme={theme} className="App">
          <Switch>
            <Route exact path ='/' render={() => 
              <HomePage
                user={this.state.user}
                handleLogout={this.handleLogout}
                title={this.state.title}
                quote={this.state.quote}
                quoteAuth={this.state.quoteAuth}
                open={this.state.openSidebar}
                onOpen={this.handleSidebarOpen}
                onClose={this.handleSidebarClose}
              />
            }/>
            <Route exact path='/signup' render={ (props) =>
              <SignupPage
                {...props}
                history={props.history}
                handleSignupOrLogin={this.handleSignupOrLogin}
                title={this.state.title}
                quote={this.state.quote}
                quoteAuth={this.state.quoteAuth}
              />
            }/>
            <Route exact path='/login' render={ (props) => 
              <LoginPage
                {...props}
                history={props.history}
                handleSignupOrLogin={this.handleSignupOrLogin}
                title={this.state.title}
                quote={this.state.quote}
                quoteAuth={this.state.quoteAuth}
              />
            }/>
          </Switch>
      </ThemeProvider>
    );
  }
}

