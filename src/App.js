import React, {Component} from 'react';
import './App.css';
import Time from './Time.js';

export default class App extends Component {  
 
  render(){
    return ( 
      <div>        
        <h1>{this.props.msg.text} by {this.props.msg.author}</h1>
        <Time />
      </div>
    );
  }
}