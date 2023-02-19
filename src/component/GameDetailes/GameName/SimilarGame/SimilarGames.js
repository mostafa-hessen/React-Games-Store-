import React from 'react'
import ImgCard from '../../imgCard/ImgCard'
import MySimilarImgCard from './MySimilarImgCard/MySimilarImgCard'
import './similarGames.css'
function SimilarGames(props) {
  return (
    <div className='d-flex similarContaier'>
        {
            props.tags?
            props.tags.map(ele=>{
             return <MySimilarImgCard  className="myCardSimilar"   img={ele} />
             })
             :  "nothing"
        }
            </div>
  )
}

export default SimilarGames