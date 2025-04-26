import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';




const TitleCards = ({title,category}) => {
    
    const cardsRef = useRef();
const [apiData,setApiData]=useState([])
    const handleWheel = (event) => {
      event.preventDefault();
      cardsRef.current.scrollLeft += event.deltaY;
    };

useEffect(()=>{
  
fetch(`https://api.themoviedb.org/3/movie/${category ? category :"now_playing"}?language=en-US&page=1`, options)
.then(res => res.json())
.then(res => setApiData(res.results))
.catch(err => console.error(err));

   cardsRef.current.addEventListener('wheel', handleWheel);
},[])

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzFjOWM3YTMwM2YxOTg2MDQ1NTIwNTVjYWE3ZDg4NSIsIm5iZiI6MTY4ODI4MTM3MS42NDcsInN1YiI6IjY0YTEyMTFiYzM5MGM1MDBlYjM1NDAwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.USDzubFj1XkNgU3NZS2Fhn9UBfBnIwahiaZKmtGv6vs'
  }
};


  return (
    <div className='title-cards'>

    <h2>{title ? title:"Popular on Netflix"}</h2>
    <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index)=>{
                return <Link to={`/player/${card.id}`} className="card" key={index}>
                    <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt="" />
                    <p>{card.original_title}</p>
                </Link>
        })}
    </div>
    </div>
  )
}

export default TitleCards