import React from 'react'
import ReactDOM from 'react-dom'
var Reveal = require('reveal')

Reveal.initialize({
  center: false,
  progress: false,
  history: true
})

class Controller extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      housePrice: null
    }

    this._getHousePrice = this._getHousePrice.bind(this)
  }

  _getHousePrice() {
    this.setState({
      housePrice: 'Hello world'
    })
  }

  render() {
    const {state} = this

    return (
      <div>
        <button type="button" onClick={this._getHousePrice}>Get house price</button>
        <p>{state.housePrice}</p>
      </div>
    )
  }
}

ReactDOM.render(
  <Controller />,
  document.getElementById('app')
)
