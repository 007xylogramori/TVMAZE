import React from "react";
import "./moviedetails.css";
import { NavLink } from "react-router-dom";


const MovieDetails = ({ data }) => {
  return (
    <div className="container">
      <div className="moviedetails">
        <img src={data.show.image.original} alt="" />
        <div className="movie-info">
          <h1 className="head-info">
            <div>{data.show.name}</div>
            <div>
              ⭐ {data.show.rating.average || Math.round(data.score * 10, 1)}
            </div>
          </h1>
          <div> Language: {data.show.language} </div>
          <div>
            {" "}
            Genre :{" "}
            {data.show.genres.map((i) => {
              return i + " ";
            })}{" "}
          </div>
          <div>Summary-</div>
          <div>{data.show.summary.slice(3, -4)}</div>

          <p>Status:{data.show.status}</p>
          <p>Premiered:{data.show.premiered}</p>

          {}
          <div className="btn-conatiner">
        <NavLink to='/'><button className="view-btn" >Back</button></NavLink>
      <NavLink to='/form'><button className="view-btn">Book Ticket🎫</button></NavLink>
      </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default MovieDetails;
