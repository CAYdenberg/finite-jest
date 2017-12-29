import React from 'react'
import PropTypes from 'prop-types'

export const UI = (props) => {
  return (
    <div>
      <button type="button" onClick={props.getPrice}>Get house price</button>
      <p>{props.price}</p>
    </div>
  )
}

UI.propTypes = {
  getPrice: PropTypes.func.isRequired,
  price: PropTypes.string
}

export default UI
