import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      sushis: [],
      indexes: {
        initialIndex: 0,
        finalIndex: 4
      },
      sushisEaten: [],
      budget: 100
    }
  }
  componentDidMount() {
    this.fetchSushis()
  }

  fetchSushis = () => {
    fetch(API)
      .then(resp=>resp.json())
      .then(sushis=>{
        this.setState({
          sushis: sushis,
        })
        this.setState({
          sushisEaten: new Array(this.state.sushis.length).fill(false)
        })
      })
  }

  handleIndexes = () => {
    this.setState(prevState => ({
      ...prevState,
      indexes: {
        ...prevState.indexes,
        initialIndex: prevState.indexes.initialIndex + 4,
        finalIndex: prevState.indexes.finalIndex + 4
      }
    }))
  }

  handleSushiAndBudget = (sushiIndex,price) => {
    const newSushisEaten = this.state.sushisEaten
    if (this.state.budget >= price) {
      newSushisEaten[sushiIndex] = true
      this.setState(prevState => ({
        sushisEaten: newSushisEaten,
        budget: prevState.budget - price
      }))
    }
  }


  render() {
    return (
      <div className="app">
        <SushiContainer 
          sushis={this.state.sushis} 
          indexes={this.state.indexes}
          sushisEaten={this.state.sushisEaten}
          handleIndexes={this.handleIndexes} 
          handleSushiAndBudget={this.handleSushiAndBudget}/>
        <Table budget={this.state.budget} sushisEaten={this.state.sushisEaten}/>
      </div>
    );
  }
}

export default App;