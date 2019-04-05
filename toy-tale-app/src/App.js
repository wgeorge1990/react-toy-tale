import React, { Component } from 'react';
import {toys} from './resources/toys';
import ToyHeader from './ToyHeader'
import ToyContainer from './ToyContainer'
import './index.css'

class App extends Component {

  state = {
    toys: toys,
    filtered: []
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
    })

  }

  filterLike = () => {
    //Give me all the toys that have more than 0 likes
      let toys = this.state.toys.filter(toy => toy.likes > 0)
      console.log("These are my filtered toys: ", toys)

    // Place these filtered toys into state
      this.setState({
        filtered: toys
      })
  }

  addToy = (e) => {
    e.preventDefault()
    //  console.log("toy name", e.target.name.value)

     let toy = {
       name: e.target.name.value,
       image: e.target.image.value,
       likes: 0
     }

     this.setState({
       toys: [...this.state.toys, toy]
     })
  }

  render() {
    return (
      <div className="App">
        <ToyHeader filterLike={this.filterLike} addToy={this.addToy}/>
        {/* After filtering, how would I go back to showing all the toys? */}
        <ToyContainer toys={this.state.filtered.length === 0 ? this.state.toys : this.state.filtered} updateLike={this.updateLike} addToy={this.addToy}/>
      </div>
    );
  }
}

export default App;
