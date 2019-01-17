import React, { Component } from 'react'
import '../styles/Display.scss'

export default class Display extends Component {
  render() {
    return (
      <div>

        <div className="label-container">
            <label type="text" className="display-countdown-label">H</label>
            <label type="text" className="display-countdown-label">M</label>
            <label type="text" className="display-countdown-label">S</label>
        </div>

        <div className="input-group display-input-group input-group-lg">
            <input type="text" className="form-control display-time" maxLength="2"
                placeholder="00"/>
            <input type="text" className="form-control display-time" maxLength="2"
                placeholder="00"/>
            <input type="text" className="form-control display-time" maxLength="2"
                placeholder="00"/>
        </div>

      </div>

    )
  }
}
