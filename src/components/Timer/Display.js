import React, { Component } from 'react'

const Display = props =>  {
    return (
        <div className="display">
            {props.status === 'stopped' || true && (
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
                            placeholder="00"/>
                        
                        <span className="display-time display-separator">:</span>

                        <input type="text" className="form-control display-time display-minutes" maxLength="2"
                            placeholder="00"/>

                        <span className="display-time display-separator">:</span>

                        <input type="text" className="form-control display-time display-seconds" maxLength="2"
                            placeholder="00"/>
                            
                    </div>
                </div>
            </div>
            )}

            {props.status === 'started' && false && (
                <div>
                    {props.time}
                </div>
            )}

        </div>
    )
}

export default Display