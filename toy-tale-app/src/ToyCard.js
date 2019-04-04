import React from 'react'

const ToyCard = (props) => {
    return (
        <div className="card">
          <h2>Name: {props.toy.name}</h2>
          <img className="toy-avatar" src={props.toy.image} alt="toy"/>
          <p>Likes: {props.toy.likes === null ? 0 : props.toy.likes}</p>
          <button className="like-btn" data-id={props.toy.id} onClick={()=> props.updateLike(props.toy)}>Like Me</button>
        </div>
    )
}

export default ToyCard