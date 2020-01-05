import React, {Component} from 'react';

export default class Time extends Component {  
  constructor(props){
    super(props);
    this.state = {
      date: new Date()
    }
  }
  componentDidMount() {
    this.timerID = setInterval( () => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render(){
    return ( 
      <div>
        <h2 style={{zIndex: -1, backgroundColor: "black", bottom: 0, position: "fixed", color: "white", opacity: .5}}>
          {this.state.date.toLocaleTimeString()}
        </h2>
      </div>
    );
  }
}