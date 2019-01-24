import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Display = props =>  {
    return (
        <div className="display">
            {props.status !== 'started' && (
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

            {props.status === 'started' && (
                <div className="display-countdown">
                    <div>
                        <label type="text" className="display-countdown-label">H</label>
                        <label type="text" className="display-countdown-label">M</label>
                        <label type="text" className="display-countdown-label">S</label>
                        <label type="text" className="display-countdown-label">MS</label>
                    </div>
                    
                    <div className="display-countdown-time">
                        {props.time}
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