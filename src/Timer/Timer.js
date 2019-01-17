import React, { Component } from 'react'
import Display from './Display'
import '../styles/Timer.scss'

export default class Timer extends Component {
  render() {
    return (
      <div className="timer">
        <Display />
      </div>
    )
  }
}
