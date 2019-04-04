import React, { Component } from 'react';
import {toys} from './resources/toys';
import ToyHeader from './ToyHeader'
import ToyContainer from './ToyContainer'
import './index.css'

class App extends Component {

  state = {
    toys: toys
  }

  updateLike = (toy) => {

    let filteredToy = this.state.toys.filter(stateToy => stateToy !== toy)

    toy.likes++
   
    this.setState({
      toys: [...filteredToy, toy]
    })

  }

  render() {
    console.log("These are my toys: ", this.state.toys)
    return (
      <div className="App">
        <ToyHeader />
        <ToyContainer toys={this.state.toys} updateLike={this.updateLike}/>
      </div>
    );
  }
}

export default App;
