import React from 'react'

function GameName(props) {
  return (
    <div className='text-uppercase'>
        <h2>{props.name?props.name:'place holder'}</h2>
    </div>
  )
}
 
export default GameName