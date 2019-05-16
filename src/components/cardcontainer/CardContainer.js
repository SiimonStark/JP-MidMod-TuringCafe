import React from 'react';
import './CardContainer.css';
import ResesrvCard from '../reservcard/ReservCard';

const CardContainer =(props)=>{
  let resyMap = props.resy.map(res=> 
    <ResesrvCard {...res} key={res.id} />)
  return (
    <main className="">
      {resyMap}
    </main>
  )
}

export default CardContainer;