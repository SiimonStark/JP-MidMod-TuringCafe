import React from 'react';

const ResesrvCard =({id, name, date, time, number})=>{
  return (
    <article>
      <h5>{name}</h5>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests: {number}</p>
      <button id={id}>CANCEL</button>
    </article>
  )
}

export default ResesrvCard;