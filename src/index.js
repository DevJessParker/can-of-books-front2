import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';


// TODO: wrap everything in Auth0 *****DONE****
ReactDOM.render(
  <Auth0Provider
    domain="dev-43fqro-e.us.auth0.com"
    clientId="9Mi0Px3HaSoF4VAbx3ocFme75HKz1pr7"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

// reportWebVitals();
