import React, {Component} from 'react';
import './App.css';
import Time from './Time.js';

export default class App extends Component {  
 
  render(){
    return ( 
      <div>        
        <h1>{this.props.com}</h1>
        <Time />
      </div>
    );
  }
}