import React, { Component } from 'react'
import Display from './Display'
import Keypad from './Keypad'
import Controls from './Controls'
import { debug } from 'util';

export default class Timer extends Component {
  constructor(){
    super();

    this.state = {
      seconds : '00',
      minutes : '00',
      hours : '00',
      status : null,
      unitOfTime : null
    }

    this.startTimer = this.startTimer.bind(this);
    this.handleDisplayFocusChange = this.handleDisplayFocusChange.bind(this);
    this.handleControlStop = this.handleControlStop.bind(this);
    this.handleControlsReset = this.handleControlsReset.bind(this);
    this.handleKeypadClick = this.handleKeypadClick.bind(this);
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

  handleDisplayFocusChange(unitOfTime) {
    this.setState(() => ({ unitOfTime }))
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

  handleKeypadClick(time){

    if (this.state.unitOfTime === 'HH'){
      this.setHours(time)
    } else if (this.state.unitOfTime === 'MM') {
      this.setMinutes(time)
    } else if (this.state.unitOfTime === 'SS'){
      this.setSeconds(time)
    }

    

    this.canStart();
  }

  setHours(hours){
    if (hours < 0){
      this.setState(() => ({hours: '00'}))
    } else {
      this.setState((prevState) => {

        hours = parseInt(this.formatTime(prevState.hours + hours))

        if (hours > 99){
          hours = prevState.hours;
        }

       console.log(hours)
        return ({ hours : this.formatTime(hours)})
      })
    }

  }

  setMinutes(minutes) {
    if (minutes < 0) {
        this.setState(() => ({ minutes: '00' }));
    } else {
        this.setState((prevState) => {
            minutes = parseInt(this.formatTime(prevState.minutes + minutes));

            if (minutes < 60) {
                if (parseInt(minutes.toString()[0]) > 5) {
                    minutes = 59;
                }
            } else if (minutes > 59) {
                minutes = parseInt(minutes.toString().slice(minutes.toString().length - 1));
            }

            return ({ minutes: this.formatTime(minutes) });
        });
    }
}

setSeconds(seconds) {

  if (seconds < 0) {
      this.setState(() => ({ seconds: '00' }));
  } else {
      this.setState((prevState) => {
          seconds = parseInt(this.formatTime(prevState.seconds + seconds));

          if (seconds < 60) {
              if (parseInt(seconds.toString()[0]) > 5) {
                  seconds = 59;
              }
          } else if (seconds > 59) {
              seconds = parseInt(seconds.toString().slice(seconds.toString().length - 1));
          }

          return ({ seconds: this.formatTime(seconds) });
      });
  }
}

formatTime(time){
  time = parseInt(time)
  return time < 10 ? '0' + time : time.toString().slice(time.toString().length - 2)
}

canStart() {
  this.setState((prevState) => ({
    canStart: prevState.status !== 'started' &&
      parseInt(prevState.hours) > 0 ||
      parseInt(prevState.minutes) > 0 ||
      parseInt(prevState.seconds) > 0   
  }))
}

render() {
  return (
    <div className="timer">
      <Display 
        onFocusChange={this.handleDisplayFocusChange}
        status={this.state.status}
        hours={this.state.hours}
        minutes={this.state.minutes}
        seconds={this.state.seconds}/>

      <Keypad 
        onClick={this.handleKeypadClick}
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