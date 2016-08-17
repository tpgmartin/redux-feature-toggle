import React, { PropTypes } from 'react'

const ToggleComponent = ({ text, toggle }) => (
  <div> 
    {toggle}
    {text}
  </div>
)

ToggleComponent.propTypes = {
  text: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired
}

export default ToggleComponent
