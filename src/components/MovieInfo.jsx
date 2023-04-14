import React,{ useEffect, useState } from "react";
import { useGlobalContext } from "../content";
import "../styles/MovieInfo.css"
import { Link } from "react-router-dom";

function MovieInfo() {

  const { id } = useGlobalContext();
  const regex = /(<([^>]+)>)/ig;

  const [showPost, setShowPost] = useState([])
  const [actor, setActor] = useState([])
  


  useEffect(() => {

    const apiUrl = `https://api.tvmaze.com/shows/${id}`
  const apiUrlActor = `https://api.tvmaze.com/shows/${id}?embed=cast`

  async function pullData(){
    const response = await fetch(apiUrl);
    const responseData = await response.json();
    setShowPost(responseData)
    const response1 = await fetch(apiUrlActor);
    const responseData1 = await response1.json();
    setActor(responseData1)
  }

    pullData()
  },[]) // eslint-disable-line react-hooks/exhaustive-deps


  return (
    <div className="container-fluid ">
      <div className="row mb-4">
        <div className="tv-poster col-12 col-md-4">
          <img src={showPost.image?.medium} alt={showPost.name}/>
        </div>
        <div className="tv-info col-12 col-md-8">
          <h1> {showPost.name}</h1>
          <h4>Language: {showPost.language}.</h4>
          <h4>Genres: {showPost.genres + ''}.</h4>
          <h4>Aired: {showPost.premiered}.</h4>
          <h4>Ended: {showPost.ended + ''}.</h4>
          <p className="fs-4">Summary: {showPost.summary?.replace(regex, "")}</p>
          <Link className="fs-3" to={"/series/episodes"} >Episodes</Link>
        </div>
      </div>
      <div className="text-center fs-1"><p>Cast</p></div>
      <div className="container-fluid text-center">
        <div className="row text-center">
      {actor._embedded?.cast.map((act,index) => {
        return (
          <div className="col-md-4 actor-card p-5 text-center" key={index}>
            <img src={act.person.image.medium} alt={act.person.name}/>
            <div>
            Actor: {act.person.name}
            </div>
            <div>
            Role: {act.character.name}
            </div>
          </div>
        )
      })}
      </div>
      </div>
    </div>
  );
}

export default MovieInfo;