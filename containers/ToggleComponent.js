import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { toggleComponent } from '../actions'

class ToggleComponent extends Component {
  render() {
    const { text, toggle } = this.props

    if (toggle) {
      return (
        <div>
          {text}
        </div>

      )
    }
  }
}

ToggleComponent.propTypes = {
  text: PropTypes.string.isRequired,
  toggle: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  return {
    text: 'tdfgdfgdfggfgdf',
    toggle: true
  }
}

export default connect(
  mapStateToProps,
  { toggleComponent }
)(ToggleComponent)
