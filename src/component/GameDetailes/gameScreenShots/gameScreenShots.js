import React from 'react'
import img from '../image 1 copy.jpg'
import './gameScreenShotes.css'
function GameScreenShots(props) {
  return (
    <div className='GameScreenShotes'>
    <h4 className='text-capitalize mt-3'>screen shotes  </h4>
    <ul className='list-unstyled d-flex ul'  >
      {/* {console.log()} */}
      {props.screenShotes!=undefined?props.screenShotes.map(ele=>{
        return <li className='rounded-circle ms-2'><img className='rounded-3' width={80} src={ele.image} alt=""  /></li>

      }):<li className='rounded-circle ms-2'><img className='rounded-3' width={80} src={img} alt=""  /></li>}
        {/* <li className='rounded-circle ms-2'><img className='rounded-3' width={40} src={img} alt=""  /></li> */}
    </ul>
</div>
  )
}

export default GameScreenShots