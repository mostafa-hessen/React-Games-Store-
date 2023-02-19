import React from 'react'
import './FavoriteStore.css'
import img from './logo192.png'
import playstaion from './imaged/playstaion.jpg'
import OIP from './imaged/OIP.jpg'
import R from './imaged/R.jpg'
import steam from './imaged/steam.jpg'
import th from './imaged/th.jpg'
import OIP2 from './imaged/OIP2.jpg'

function FavoriteStore() {
  return (
    <div className="Favourite__container text-capitalize mt-5 ">
   <i className="fa-solid fa-star" style={{color:"orange"}}></i>
    <h6 className="mb-4 d-inline p-2 ">Favorite Store</h6>

    <ul className="unstyle-list m-0  mt-3 p-0">

   
      <li className="list-group-item d-flex justify-content-between align-items-center mb-3  py-2">
          <div className='d-flex align-items-center'>
          <img src={playstaion}alt=""  width={30} className="rounded-2"/>
               <h6 className='p-2 mb-0 '>play</h6>
          </div>
        <span className="badge  rounded-pill">1012</span>
      </li>

      
      
      <li className="list-group-item d-flex justify-content-between align-items-center mb-3 py-2">
          <div className='d-flex align-items-center'>
          <img src={OIP}alt=""  width={30} className="rounded-2"/>
               <h6 className='p-2 mb-0 '>OIP Games</h6>
          </div>
        <span className="badge  rounded-pill">130</span>
      </li>

      
      <li className="list-group-item d-flex justify-content-between align-items-center mb-3  py-2">
          <div className='d-flex align-items-center'>
          <img src={steam}alt=""  width={30} className="rounded-2"/>
               <h6 className='p-2  mb-0 '>Steam</h6>
          </div>
        <span className="badge  rounded-pill">103</span>
      </li>

      
      <li className="list-group-item d-flex justify-content-between align-items-center mb-3  py-2">
          <div className='d-flex align-items-center'>
            <img src={R}alt=""  width={30} className="rounded-2"/>
               <h6 className='ps-2 mb-0  '>TA Games</h6>
          </div>
        <span className="badge  rounded-pill">10</span>
      </li>

  
     
      <li className="list-group-item d-flex justify-content-between align-items-center mb-3  py-1">
          <div className='d-flex align-items-center'>
            <img src={OIP2}alt=""  width={30} className="rounded-2"/>
               <h6 className='ps-2 mb-0'>Snake Store</h6>
          </div>
        <span className="badge  rounded-pill">220</span>
      </li>


      <li className="list-group-item d-flex justify-content-between align-items-center mb-3  py-1">
          <div className='d-flex align-items-center'>
            <img src={th}alt=""  width={30} className="rounded-2"/>
               <h6 className='ps-2 mb-0'>The King</h6>
          </div>
        <span className="badge  rounded-pill">33</span>
      </li>



    </ul>
  </div>
  )
}

export default FavoriteStore