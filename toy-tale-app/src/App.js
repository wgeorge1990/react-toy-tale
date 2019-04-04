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
    
    /* 
    1. Get you toy object from the onClick event in the Toy Card
    2. Map over your current state of toys to find the toy object
    3. If the toy in state matches the oty object you passed in, increase the likes
    4. Else return the toy
    5. Save the new toy array into a variable and update it in setState

    Cleaner Solution courtesy of Ryan Riesenberg
    */

   let updatedToys = this.state.toys.map(stateToy => stateToy === toy ? {...toy, likes: ++toy.likes } : stateToy)

  
   
    this.setState({
      toys: updatedToys
    }, ()=> console.log("Woody",this.state.toys[0]))

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
