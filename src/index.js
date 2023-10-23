import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';
// v9n3zkfVdrNAJUlg36jRnnR6jJIB0gNJ;
// dev-s4sntqpxtaxhnghq.us.auth0.com;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-s4sntqpxtaxhnghq.us.auth0.com"
      clientId="v9n3zkfVdrNAJUlg36jRnnR6jJIB0gNJ"
   
        redirectUri ={window.location.origin}
        cacheLocation='localstorage'
    
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
