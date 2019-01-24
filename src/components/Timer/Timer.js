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
      status : null
    }

    this.startTimer = this.startTimer.bind(this);
    this.handleControlStop = this.handleControlStop.bind(this);
    this.handleControlsReset = this.handleControlsReset.bind(this);
  }

  startTimer(){
    if (this.state.status !== 'started'){

      this.setState(() => ({status : 'started'}))

      this.interval = setInterval(() => {

        //this.setState((prevState) => ({timeInterval : this.timeInterval}))
        this.setState((prevState) => ({seconds : prevState.seconds  - 10})) //milliseconds
      
      }, 10);
    }
  }

  handleControlStop(){
    if (this.state.status === 'started'){
      this.setState(() =>({status : 'stopped'})) 
      clearInterval(this.interval)

    }
  }

  handleControlsReset(){
    clearInterval(this.interval)
    this.setState(()=>({status:null}))
  }
  
  render() {
    return (
      <div className="timer">
        <Display 
          time={this.state.seconds}
          status={this.state.status}/>

        <Keypad 
          status={this.state.status}/>

        <Controls
          status={this.state.status} 
          startTimer={this.startTimer}
          onStop={this.handleControlStop}
          onReset={this.handleControlsReset}/>
      </div>
    )
  }
}