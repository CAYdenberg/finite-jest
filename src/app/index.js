import React from 'react'
import ReactDOM from 'react-dom'
import getPrice from './getPrice'
import formatPrice from './formatPrice'
import UI from './ui'

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
    this.setState({housePrice: null})

    getPrice().then(price => {
      const formattedPrice = formatPrice(price)
      this.setState({housePrice: formattedPrice})
    }).catch(() => {
      alert('Error getting response from network')
    })
  }

  render() {
    const {state} = this

    return (
      <UI getPrice={this._getHousePrice} price={state.housePrice} />
    )
  }
}

ReactDOM.render(
  <Controller />,
  document.getElementById('app')
)
