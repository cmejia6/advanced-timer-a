import React, { Component } from 'react'
import Display from './Display'
import Keypad from './Keypad'
import '../styles/Timer.scss'

export default class Timer extends Component {
  render() {
    return (
      <div className="timer">
        <Display />
        <Keypad />
      </div>
    )
  }
}