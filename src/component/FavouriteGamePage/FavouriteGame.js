import React from 'react'
import { useSelector } from 'react-redux'
import FavouritCard from './favouritCard/favouritCard'

function FavouriteGame() {
  
   let  MyFavouriteGames=useSelector( state=>state.MyFavouriteGames.favoriteGames)
//  useEffect(() => {
//  }, [])
 
  console.log("=>",MyFavouriteGames);
  return (
    <div className="container mt-3">
      <div className='row'>
         {MyFavouriteGames==undefined? "":MyFavouriteGames.map(ele=> <FavouritCard img={ele}/>)}
      </div>
    </div>
  )
}

export default FavouriteGame