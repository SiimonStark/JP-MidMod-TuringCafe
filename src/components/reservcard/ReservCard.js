import React from 'react';
import './ReservCard.css';

const ResesrvCard =({id, name, date, time, number})=>{
  return (
    <article className="ReservCard">
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests: {number}</p>
      <button className="cancel" id={id}>CANCEL</button>
    </article>
  )
}

export default ResesrvCard;