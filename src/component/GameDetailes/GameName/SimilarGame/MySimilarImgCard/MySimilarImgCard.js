import React from 'react'
import './MySimilarImgCard.css'
function MySimilarImgCard(props) {
    console.log(props.img);
    return (
      <div className="mycard mb-3 rounded-4" style= {{minWidth:"200px",
      minHeight:"300px",
      backgroundImage: `url(${props.img.image_background?props.img.image_background:""})`}} >
       
     </div>
    )
  }


export default MySimilarImgCard