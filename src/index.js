import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import firebaseConfig from './config';
import firebase from 'firebase/app';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
