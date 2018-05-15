import React, { Component } from 'react'
import tradingData from './data.json'

import OrderBookList from './OrderBookList'

class App extends Component {
  state = {
    searchTerm: 'hi'
  }

  handleInputChange = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <input 
          onChange={this.handleInputChange}
          value={this.state.searchTerm}
        />
        <p>{this.state.searchTerm}</p>
        <h2>bid</h2>
        {
          tradingData.bid.map(list => <OrderBookList item={list} key={list[0]} />)
        }
        <h2>ask</h2>
        {
          tradingData.ask.map(list => <OrderBookList item={list} key={list[0]} />)
        }
      </div>
    );
  }
}

export default App
