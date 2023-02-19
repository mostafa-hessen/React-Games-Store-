import React from 'react'
import './ImgCard.css'
import img from './../image\ 1\ copy.jpg'
function ImgCard(props) {
  console.log(props.img);
  return (
    <div className="card mb-3" style= {{minWidth:"200px",
    minHeight:"300px",
    backgroundImage: `url(${props.img?props.img:img})`}} >
     
   </div>
  )
}

export default ImgCard