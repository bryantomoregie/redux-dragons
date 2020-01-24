import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { store } from './store.js'

// Use the Provider to provide the store to the rest of your App

ReactDOM.render(<App />, document.getElementById('root'));