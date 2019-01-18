import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Controls.scss'

const Controls = props => {
  return (
    <div>
      <div className="controls">

        <button className="buttons btn btn-success btn-lg btn-block">
            START
        </button>

      </div>
    </div>
  )
}

Controls.propTypes = {

}

export default Controls