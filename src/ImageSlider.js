import React,{useState} from 'react';

export default function () {

const [currentSlideIndex,setCurrentSlideIndex]=useState(0);

  return <h1>I am on slide {currentSlideIndex}</h1>;
    
}
