import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Link, Router } from 'react-router-dom'
import './Nav.css'
function Nav() {
  
  let MyFavouriteGames=useSelector( state=>state.MyFavouriteGames.favoriteGames)
  //   const [count, setCount] = useState()
  // useEffect(() => {
  //   setCount(MyFavouriteGames)
  // }, [])
  
  return (
    <div className="row nav">
    {/* <!-- =====header======== --> */}
    <div className="col-12 p-3 text-capitalize border-bottom  ">
      <header className="d-flex  align-items-center justify-content-between">

        <div className=" col-6    BeboSocialContainer justify-content-center text-center">
          <h3 className="log text-light">BeboSocial</h3>
        </div>

{/* {console.log(MyFavouriteGames)} */}

        <div className="col-6   imgBtnContainer">

          <div className="imgBtn d-flex  align-items-center justify-content-center">
          <div className="img rounded-circle me-3"></div>
            
            {/* <button className="btn btn-primary rounded-5 py-1 m-2 font-weight-bold text-capitalize">
              creat
            </button> */}
{/* <BrowserRouter> */}
{/* 
<Router> */}

           <Link to='/favouritesGames' className='favourite' >

             <span>{MyFavouriteGames?MyFavouriteGames.length:0}</span>
               <i className="fa-regular text-danger fa-heart fs-xl"></i>
           </Link>
{/* </Router>
</BrowserRouter> */}
              
          </div>
        </div>

      </header>
    </div>
    </div>
  )
}

export default Nav