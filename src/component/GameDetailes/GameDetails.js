import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUrlData } from "../../redux/actions";
import "./GameDetails.css";
import GameName from "./GameName/GameName";
import SimilarGames from "./GameName/SimilarGame/SimilarGames";
import GameScreenShots from "./gameScreenShots/gameScreenShots";
import GameStores from "./gameStores/gameStores";
import ImgCard from "./imgCard/ImgCard";
// import img from '../image 1 copy.jpg'
// import { useEffect } from "react";
function GameDetails() {
  const Game = useSelector((state)=> state.GameDetailes.GameDetailes)
  const dispatch = useDispatch()
  useEffect(() => {
  //  dispatch(getUrlData())
  //  console.log(Games);
  }, [])
  
  let imgUrl = "./image 1 copy.jpg";
  return (
    <>
    {console.log('Games',Game)}
      <div className="detailes">
        {/* ===== overlay ===== */}
        <div className="overlayGameDet" style={{backgroundImage:`linear-gradient(
      0deg,
      #27264e 0%,
      #27264efa 55%,
      #27264edd 64%,
      #27264ea7 90%
    ),url(${Game.background_image!=undefined?Game.background_image:imgUrl})`}}
        // {{backgroundImage:`${Game.background_image}`}}
        >
          <div className="image" ></div>
        </div>
      </div>
      <div className="container">
        {/* ===== game detailes =====  */}
        <div className="gameDetailes mt-5 w-80 m-auto   ">
          <div className="row ">
            <div className="col-12 col-md-6  col-lg-4">
                <ImgCard img={Game.background_image}/>
            </div>

            <div className="col-12 col-md-6 col-lg-8 mt-5">
              <div className="imgContent">
                {/* ===== game name and description */}
                <GameName name={Game.name}/>
                {/* ===== game screen shotes ==== */}
                  <GameScreenShots screenShotes={Game.short_screenshots} />
              
                {/* ===== avivable store */}
                {/* <GameStores /> */}
              </div>
            </div>
          </div>
        </div>

        {/* ===== similar games =====  */}
        <div className="row " style={{marginTop:"120px"}}>
          <h4  style={{zIndex:"2"}}>Similar Games</h4>
          <SimilarGames tags={Game.tags}/>
        </div>
      </div>{" "}
      {/*   {//container} */}
    </>
  );
}

export default GameDetails;
