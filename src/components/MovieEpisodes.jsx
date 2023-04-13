import React,{ useState,useEffect } from 'react'
import '../styles/MovieEpisode.css'
import GridSystem from './GridSystem'
import { useGlobalContext } from '../content';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';


const MovieEpisodes = () => {

  const { id,setShowModal,showModal,name } = useGlobalContext();
  const [modalTitle, setmodalTitle] = useState('')
  const [modalText, setmodalText] = useState('')
  const [ModalImg, setModalImg] = useState('')
  const regex = /(<([^>]+)>)/ig;

  const [showPost, setShowPost] = useState([])
  const navigate = useNavigate();

  

  useEffect(() => {
    const apiUrl = `https://api.tvmaze.com/shows/${id}/episodes`
    async function pullData() {
      const response = await fetch(apiUrl);
      const responseData = await response.json();
      setShowPost(responseData)
    }
    pullData()
  },[]) // eslint-disable-line react-hooks/exhaustive-deps

  const ModalDisplay = (name,img,summary) => {
    setShowModal(true);
    setmodalText(summary);
    setmodalTitle(name);
    setModalImg(img)
  }



  const Item = props => {
    const { image,name,season,episode,id,summary } = props

    return (
      <div key={id} onClick={() => ModalDisplay(name,image,summary)} className='element-card'>
        <img src={image} alt={name} /> 
        <p>Season {season}: Episode {episode}</p>
        <p>{name}</p>
      </div>
    )
  }

  return (
    <div>
       <div className='text-center'>
        <h1 className='title'  onClick={() => navigate("/series/info")}>{name}</h1>
       </div>
        <GridSystem colCount={3}>
          {
            showPost && showPost.map((item) => {
              return <Item key={item.id} id={item.id} image={item?.image.medium} summary={item?.summary.replace(regex,'')} season={item?.season} episode={item?.number} name={item?.name} ></Item>
            })
          }
        </GridSystem>
      { showModal && <Modal title={modalTitle} image={ModalImg} text={modalText} /> }
    </div>
  )
}

export default MovieEpisodes