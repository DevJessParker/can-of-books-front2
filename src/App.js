import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import Profile from './Profile.js';
import BestBooks from './BestBooks.js';
import Login from './Login.js';
import { withAuth0 } from '@auth0/auth0-react';
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
            {!this.props.auth0.isAuthenticated &&
              <Login />
            }
            {this.props.auth0.isAuthenticated &&
                <BestBooks /> 
                /* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */
            }
              </Route>
            </Switch>
            
            <Switch>
            {this.props.auth0.isAuthenticated &&
              <Route exact path="/profile">
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
               <Profile />
               {/* should we add content???? */}
              </Route>
            }
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router> 
        
      </>
    );
  }
}

export default withAuth0(App);

