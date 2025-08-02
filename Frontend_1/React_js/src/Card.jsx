import React from 'react'

const Card = () => {
  return (
    <div> 
    <img src={props.imageUrl} alt="thumbnail"/>
    <h1>{props.title}</h1>
    <p>{props.description}</p>
    </div>
  )
}

export default Card