import React from 'react'
import snehalimg from '../assets/snehal.png'
import './UserCards.css'

const UserCards = (props) => {
  return (
    <div className='user-container'>
      <p id='title'>{props.name}</p>
      <img id='user-img' src={props.image} alt={props.name} />
      <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default UserCards
