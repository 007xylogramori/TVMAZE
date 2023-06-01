import React from 'react'
import './home.css'
import { useGlobalContext } from '../../context'
import MovieCard from '../../components/movieCard/MovieCard';
const Home = () => {
    const {movies}= useGlobalContext();
    
  return (
    <div className='home-container'>
      
      {
        movies.map((item)=>{
            return <MovieCard data={item} key={item.show.id}/>
        })
      }
     
      
    </div>
  )
}

export default Home
