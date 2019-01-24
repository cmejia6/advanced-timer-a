import React from 'react'

const Keypad = props => {
    return(
        <div>
            {props.status === 'stopped' || true &&
                <div className='keypad'>
                    <div className="keypad-row">
                        <button className="btn btn-light btn-small">1</button>
                        <button className="btn btn-light btn-small">2</button>
                        <button className="btn btn-light btn-small">3</button>
                    </div>

                    <div className="keypad-row">
                        <button className="btn btn-light btn-small">4</button>
                        <button className="btn btn-light btn-small">5</button>
                        <button className="btn btn-light btn-small">6</button>
                    </div>

                    <div className="keypad-row">
                        <button className="btn btn-light btn-small">7</button>
                        <button className="btn btn-light btn-small">8</button>
                        <button className="btn btn-light btn-small">9</button>
                    </div>

                    <div className="keypad-row">
                        
                        <button className="btn btn-light btn-small"> 
                            <i className="fa fa-close"></i>
                        </button>

                        <button className="btn btn-light btn-small">0</button>
                        <button className="btn btn-light btn-small">&nbsp;</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Keypad;