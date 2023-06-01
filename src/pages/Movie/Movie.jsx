import React from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../../context';
import MovieDetails from '../../components/moviedetails/MovieDetails';

const Movie = () => {

const {movies}=useGlobalContext();
    const {id}=useParams();
    
  return (
    <>
     { movies.filter((item)=>{
       return item.show.id===Number(id);
    }).map((item)=>{
        return <MovieDetails data={item}/>
    })}
    </>
  )
}

export default Movie
