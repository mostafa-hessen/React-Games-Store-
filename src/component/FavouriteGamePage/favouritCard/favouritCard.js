import React from "react";
import './favouritCard.css'
function FavouritCard(props) {
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
            <button className="btn btn-danger">X</button>
        </div>
      </div>
    </div>
  );
}

export default FavouritCard;
