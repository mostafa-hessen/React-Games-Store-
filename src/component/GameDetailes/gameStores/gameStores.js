import React from 'react'
import img from '../image 1 copy.jpg'
function GameStores() {
  return (
    <div>
        <h3 className='text-capitalize'>avivable at</h3>
        <ul className='list-unstyled d-flex'>
            <li className='rounded-circle ms-2'><img className='rounded-circle' width={40} height={40}src={img} alt=""  /></li>
            <li className='rounded-circle ms-2'><img className='rounded-circle' width={40} height={40} src={img} alt=""  /></li>
        </ul>
    </div>
  )
}

export default GameStores