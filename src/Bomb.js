import React,{useState} from 'react';

export default function ({initialCount}) {

const [secondsLeft,setSecondLeft]=useState(initialCount)

 
    const message = secondsLeft === 0 ? 'Boom!' : `${secondsLeft} seconds left before I go boom!`;

    return (
      <div>{message}</div>
    )
  }

