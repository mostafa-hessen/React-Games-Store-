import React from "react";
import { useEffect, useState } from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "../hero/Hero";
import SearchNav from "../searchNav/SearchNav";
import GameCard from "../GameCard/GameCard";
// import FilterComp from "../FilterComponent/FilterComp";
import FavoriteStore from "../FavouriteStore/FavoriteStore";
import { useDispatch, useSelector } from "react-redux";
import { getFromLocalStorage, getUrlData } from "../../redux/actions/index";
import FilterComp from "../FilterComponent/FilterComp";
import SkeltonEffect from "../SkeltonEffect/SkeltonEffect";
function Home() {
  // let arr[]

  const dispatch = useDispatch();
  const GamesData = useSelector((state) => state.allGame.Games); // array of Games => 15 array
  const sraechVal = useSelector((state) => state.allGame.searchValue);
  const filterVal = useSelector((state) => state.allGame.filterValue);
  let [pageNumber, setpageNumber] = useState(1);
  let [filter, setpageFilter] = useState(7);
  let [search, setsearch] = useState("");
  let [isloading, setisLoading] = useState(true);
  useEffect(() => {
    setisLoading(true);

    setTimeout(() => {
      setisLoading(false);
    }, 2000);
    dispatch(getUrlData(pageNumber, search, filter));
  }, [pageNumber]);
  // [pageNumber, filter, search]);
 

  useEffect(() => {
    setisLoading(true);

    setTimeout(() => {
      setisLoading(false);
    }, 2000);



    
    dispatch(getUrlData(pageNumber, search, filterVal));
  }, [filterVal]);














  useEffect(() => {
    setisLoading(true);
    setTimeout(() => {
      setisLoading(false);
    }, 2000);
    dispatch(getUrlData(pageNumber, sraechVal, filterVal));
  }, [sraechVal]);

  useEffect(() => {
    let getitemFromLocal = JSON.parse(localStorage.getItem("FavouriteItems"));

    setfavorite(getitemFromLocal);

    dispatch(
      getFromLocalStorage(JSON.parse(localStorage.getItem("FavouriteItems")))
    );
  }, []);

  const [favorite, setfavorite] = useState([]);
  const [alert, setalert] = useState("");
  // let alert='kjwidjqiwojiojciowoejfdiowejfioejfioqej';
  let setToLocalStorage = (ele) => {
    localStorage.setItem("FavouriteItems", JSON.stringify(ele));
  };

  const favoriteFunc = (element) => {
    // let i =  favorite!=[]? [...favorite]:favorite
    let newItem = [...favorite];

    favorite.find((ele) => ele.id == element.id)
      ? setalert(
          <div class="alert alert-danger" role="alert">
            A simple danger alert—check it out!
          </div>
        )
      : newItem.push(element);

    newItem.find((ele) => console.log(ele));

    setfavorite(newItem);

    setToLocalStorage(newItem);

    dispatch(
      getFromLocalStorage(JSON.parse(localStorage.getItem("FavouriteItems")))
    );
  };
  return (
    <div className="row">
      <div className="col-lg-3 p-4   d-none  d-lg-block">
        <FilterComp />
        <FavoriteStore />
      </div>

      <div className="col-12 col-lg-9">
        {}
        <Hero />
        <SearchNav />
        <div className="row p-3">
          {isloading
            ? GamesData.map((ele) => {
                return <SkeltonEffect key={ele.id} />;
              })
            : GamesData.map((ele) => {
                return (
                  <GameCard
                    key={ele.id}
                    element={ele}
                    addtofavorit={favoriteFunc}
                  />
                );
              })}

          <div className="text-center  mypagination  ">
            <button
              className="mt-3 p-2 text-white text-capitalize btn me-2 bg-danger"
              onClick={() => setpageNumber(pageNumber > 1 ? --pageNumber : 1)}
            >
              previouse
            </button>

            <button
              className="mt-3 btn bg-primary text-white text-capitalize p-2 "
              onClick={() => setpageNumber(++pageNumber)} //1 2 3 4 5
            >
              next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
