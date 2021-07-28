import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import Profile from './Profile.js';
import BestBooks from './BestBooks.js';
import Login from './Login.js';
import { withAuth0 } from '@auth0/auth0-react';
import Content from './Content.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {


  render() {
    console.log('app', this.props);
    return(
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
            <Switch>
              <Route exact path="/">
            {this.props.auth0.isAuthenticated ?
              <BestBooks />:  <Login />
            }
              </Route>
              <Route exact path="/profile">
            {this.props.auth0.isAuthenticated &&
               <Profile />
              }
              </Route>
              <Content />
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router> 
      </>
    );
  }
}

export default withAuth0(App);
