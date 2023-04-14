import React from 'react'
import "../styles/Header.css"
import { AiFillHome } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();

  return (
    <div className='text-center mb-3'>
      <div className='header'>
        <div><img width={"85"} src='https://img.icons8.com/clouds/200/000000/retro-tv.png' alt="TV-ICON"/></div>
       <div ><h1>Tv Maze Api</h1></div>
        <div><AiFillHome onClick={() => navigate("/home")} size={"25"} color={"lightblue"} /></div>
      </div>
      <div className='header-info'>
       <h5>Look up your favorite tv shows and series</h5>
      </div>
    </div>
  )
}

export default Header