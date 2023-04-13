import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../content';
import "../styles/MovieList.css"

const MovieList = () => {

  const { searchTerm,setId,setSearchTerm,setName } = useGlobalContext();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true)
  const [showPost, setShowPost] = useState([])
  const apiUrl = "https://api.tvmaze.com/shows"

  async function pullJson(){
    const response = await fetch(apiUrl);
    const responseData = await response.json();
    setLoading(false)
    setShowPost(responseData)
  }


  useEffect(() => {
    pullJson()
  },[])

  const setSeries = (movie,name) => {
    setSearchTerm("")
    setId(movie)
    setName(name)
    navigate("/series/info")
  }



  return (
    <div>
      <div className="searchBar-div">
        <input type="text" placeholder="Search.." onChange={event => {setSearchTerm(event.target.value)}} />
      </div>
      {loading ? <h4>Loading</h4> : (
       <div className="card-container">
       {
         showPost.filter((val) => {
           if (searchTerm === ""){
             return val
           } else if (val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
             return val
           } 
            return false
         }).map((todo,index) => {
           return (
             <div key={index} className="card mb-3" title={todo.name} onClick={() => setSeries(todo.id,todo.name)} >
              <img src={todo.image.medium} alt={todo.name}/>
              <div className="container">
                <h3>{todo.name}</h3>
                <h4>⭐ {todo.rating.average}</h4>
              </div>
             </div>
           )
         })
       }
       </div>
     )}
    </div>
  )
}

export default MovieList