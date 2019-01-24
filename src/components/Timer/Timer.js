import React, { Component } from 'react'
import Display from './Display'
import Keypad from './Keypad'
import Controls from './Controls'

export default class Timer extends Component {
  constructor(){
    super();

    this.state = {
      seconds : 600,
      minutes : 0,
      hours : 0,
      //time : 0,
      status : 'started'
    }

    this.startTimer = this.startTimer.bind(this);
  }

  startTimer(){
    this.interval = setInterval(() => {

      //this.setState((prevState) => ({timeInterval : this.timeInterval}))
      this.setState((prevState) => ({seconds : prevState.seconds  - 10})) //milliseconds
    
    }, 10);
  }
  
  render() {
    return (
      <div className="timer">
        <Display 
          time={this.state.seconds}
          status={this.state.status}/>

        <Keypad />

        <Controls 
          startTimer={this.startTimer}/>
      </div>
    )
  }
}