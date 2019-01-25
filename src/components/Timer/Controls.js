import React from 'react'
import PropTypes from 'prop-types'

const Controls = props => {
  return (
    <div>
      <div className="controls">

        {
          props.status !== 'started' &&
          <div className="buttons stopped">
            <button className="btn btn-success btn-lg btn-block"
              onClick={props.onStart}
              disabled={!props.canStart}>
                START
            </button>
          </div>
        }

        {
          props.status === 'started' &&
          <div className="buttons started">
            <button className="btn btn-danger btn-lg btn-block"
              onClick={props.onStop}>
              STOP
            </button>
            <button className="btn btn-primary btn-lg btn-block"
              onClick={props.onReset}>
              RESET
            </button>
          </div>
        }

      </div>
    </div>
  )
}

Controls.propTypes = {

}

export default Controls