import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import HomePage from '../HomePage/HomePage';
import userService from '../../utils/userService';
import { getQOD } from '../../utils/quote';



export default class App extends Component {

  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  async componentDidMount() {
    const quote = await getQOD('inspire');
    this.setState({
      quote: quote.contents.quotes[0].quote,
      quoteAuth: quote.contents.quotes[0].author
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.quote} - {this.state.quoteAuth}
        <Switch>
          <Route exact path ='/' render={() => 
            <HomePage
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
          }/>
          <Route exact path='/signup' render={ (props) =>
            <SignupPage
              {...props}
              history={props.history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={ (props) => 
            <LoginPage
              {...props}
              history={props.history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
        </Switch>
      </div>
    );
  }
}

