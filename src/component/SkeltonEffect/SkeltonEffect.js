import React from 'react'
import './SkeltonEffect.css'
function SkeltonEffect() {
  return (
    <div
    className="col-12 col-sm-6 col-lg-4 mt-3"
  >
    {/* {console.log(props.element.stores[Math.floor(Math.random()*props.element.stores.length)].store.slug)} */}
    {/* ==== Game ==== */}
    <div className=" Skelton__container  ">
      {/* ==== Game Img ==== */}
      <div className="img design3">
      </div>

      {/* ==== Game head ==== */}

      <div className="skelton-head mt-3 d-flex align-items-center">
        <div className="StoreIcon">

        </div>
        <h3 className="skeltonName text-capitalize"></h3>
      </div>
      <hr />

      {/* ==== Game body Description ==== */}
     

      {/* ==== Game Fotter => Icons ==== */}
      <div className="skelton-footer d-flex align-items-center">
       
       <div className='mybtn'>

       </div>
        <div className="startIcon icons">

        </div>

        <div
          className="favourit icons"
        >
           
        </div>
        <div className=" icons">
          
        </div>

  
      </div>
    </div>
  </div>
  )
}

export default SkeltonEffect