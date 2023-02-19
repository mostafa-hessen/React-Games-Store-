import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GameDetaileFunc } from "../../redux/actions";
import "./GameCard.css";
import NintendoStore from "./imaged/playstation-store.jpg";

// import img from "./image 1 copy.jpg";

function GameCard(props) {
  
  let MyFavouriteGames=useSelector( state=>state.MyFavouriteGames.favoriteGames)

  let my="playstation-store"
  const filterVal = useSelector((state) => state.allGame.filterValue);
  const dispatch = useDispatch();
  const ClickedDetailes = (e) => {
    dispatch(GameDetaileFunc(e));
  };
 



  let nameOFImage = () => {
  return   props.element.stores?
     props.element.stores[
      Math.floor(Math.random() * props.element.stores.length)
    ].store.name
      .split("")
      .map((item) => item.trim(""))
      .join(""):{}
  };

  return (
    <div
      className="col-12 col-sm-6 col-lg-4 mt-3"
      onClick={() => ClickedDetailes(props.element)}
    >
      {/* {console.log(props.element.stores[Math.floor(Math.random()*props.element.stores.length)].store.slug)} */}
      {/* ==== Game ==== */}
      <div className="Game__container   ">
        {/* ==== Game Img ==== */}
        <div className="img design3">
          <img
            src={props.element.background_image}
            alt="portfolio"
            loding="lazy"
          />
        </div>

        {/* ==== Game head ==== */}

        <div className="Game-head mt-3 d-flex align-items-center">
          <div className="StoreIcon">
        
            <img
              width={50}
              className="rounded-5 me-2 myStoreImg"
              src={require(`./imaged/${nameOFImage()}.jpg`)}
              alt="this is  image"
            />
          </div>
          <h3 className="GameName text-capitalize">{props.element.name}</h3>
        </div>
        <hr />

        {/* ==== Game body Description ==== */}
       

        {/* ==== Game Fotter => Icons ==== */}
        <div className="Game-footer d-flex align-items-center">
          <button
            type="button"
            className={`btn btn-${
              filterVal == 1
                ? "danger"
                : filterVal == 4
                ? "orange"
                : filterVal == 5
                ? "gold"
                : "primary"
            } rounded-5  text-capitalize`}
          >
            {filterVal == 1
              ? "Trending"
              : filterVal == 4
              ? "Popular"
              : filterVal == 5
              ? "Top Rated"
              : "all"}
          </button>
          <div className="startIcon icons">
            <i className="fa-solid fa-star text-gold "></i>
            <span className="county">
                122
             
            </span>

          </div>
          <div
            className="favourit icons"
            onClick={()=>props.addtofavorit(props.element)}
          >
            {/* props.addtofavorit.favoriteFunc(props.element) */}

      {MyFavouriteGames.find(ele=>ele.id==props.element.id)? 
            <i className="fa-solid fa-heart text-danger"> 13</i>  :
            <i className="fa-regular text-danger fa-heart"
            // onClick={()=>favoriteFunc(props.element)}
            > 12</i> 

      
    
    }

            {/* <i className="fa-solid fa-heart"></i>
            <i className="fa-regular text-danger fa-heart"
            onClick={()=>favoriteFunc(props.element)}
            ></i> */}
            {/* <span className="count">12</span> */}
          </div>
          <div className=" icons">
            {/* <i class="fa-thin fa-comment-dots"></i> */}
            <i className="fa-solid fa-paper-plane text-darktheme"></i>
            32
            {/* <span className="count">{props.element.ratings[0]['id']}</span> */}
          </div>

          <div className=" icons iconLink">
            <Link to={"/detailes"} className="myLink">
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
    // </Link>
    // <button className="btn bg-primary">Next</button>
  );
}

export default GameCard;
