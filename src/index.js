import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';

const msg = {
  text: "This is a React Application",
  author: "Abhishek K"
}

ReactDOM.render(<App msg={msg}/>, document.getElementById('root'));