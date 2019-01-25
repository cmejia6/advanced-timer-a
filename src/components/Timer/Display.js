import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Time from '../../lib/Time'

const Display = props =>  {

    const time = new Time()

    return (
        <div className="display">
            {!props.timeInterval && (
            //fix css later class display
            <div>
                <div> 
                    <div className="label-container">
                        <label type="text" className="display-countdown-label">H</label>
                        <label type="text" className="display-countdown-label">M</label>
                        <label type="text" className="display-countdown-label">S</label>
                    </div>

                    <div className="input-group display-input-group input-group-lg">
                        <input type="text" className="form-control display-time display-hours" maxLength="2"
                            placeholder="00"
                            maxLength="2"
                            onFocus={() => props.onFocusChange('HH')}
                            value={props.hours}
                            onChange={props.onInputChange} />
                        
                        <span className="display-time display-separator">:</span>

                        <input type="text" className="form-control display-time display-minutes" maxLength="2"
                            placeholder="00"
                            maxLength="2"
                            onFocus={() => props.onFocusChange('MM')}
                            value={props.minutes}
                            onChange={props.onInputChange} />

                        <span className="display-time display-separator">:</span>

                        <input type="text" className="form-control display-time display-seconds" maxLength="2"
                            placeholder="00"
                            maxLength="2"
                            onFocus={() => props.onFocusChange('SS')}
                            value={props.seconds}
                            onChange={props.onInputChange} />
                            
                    </div>
                </div>
            </div>
            )}

            {props.timeInterval && (
                <div className="display-countdown">
                    <div>
                        <label type="text" className="display-countdown-label">H</label>
                        <label type="text" className="display-countdown-label">M</label>
                        <label type="text" className="display-countdown-label">S</label>
                        <label type="text" className="display-countdown-label">MS</label>
                    </div>
                    
                    <div className="display-countdown-time">
                        {time.getTime(props.timeInterval)}
                    </div>
                </div>
            )}

        </div>
    )
}

Display.defaultProps ={
    onFocusChange : input => console.log(input),
    onInputChange : () => {},
    hours : '00',
    minutes : '00',
    seconds : '00',
    timeInterval : null
}

Display.propTypes = {
    onFocusChange: PropTypes.func,
    onInputChange : PropTypes.func,
    hours: PropTypes.string,
    minutes: PropTypes.string,
    seconds: PropTypes.string,
    timeInterval: PropTypes.number
}

export default Display