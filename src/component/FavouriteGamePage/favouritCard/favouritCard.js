import React from "react";
import './favouritCard.css'
import { getFromLocalStorage, getUrlData } from "../../../redux/actions/index";
import { useDispatch } from "react-redux";


function FavouritCard(props) {
  let dispatch =useDispatch()
  let setToLocalStorage = (ele) => {
    localStorage.setItem("FavouriteItems", JSON.stringify(ele));
  };

  const removeFromVav =(id)=>{
    console.log(id);
    let afterDelete= JSON.parse( localStorage.getItem('FavouriteItems')).filter(ele=>ele.id!=id)
    localStorage.setItem('FavouriteItems',JSON.stringify(afterDelete))
    dispatch(
      getFromLocalStorage(JSON.parse(localStorage.getItem("FavouriteItems")))
    );
  }
  return (
    // <divFavouritCard</div>

    <div className="col-12  col-sm-6 col-md-4 ">
        { console.log(props.img.image_background)}
      <div
        className="mycard_favourite mb-3 rounded-4"
        style={{
          minWidth: "200px",
          minHeight: "330px",
          backgroundImage: `url(${
            props.img.background_image ? props.img.background_image : ""
          })`,
        }}
      >


        <div className="myCardDescription p-3">
            <h4>{ props.img.name}</h4>
            <button className="btn btn-danger" onClick={()=>removeFromVav(props.img.id)} >X</button>
        </div>
      </div>
    </div>
  );
}

export default FavouritCard;
