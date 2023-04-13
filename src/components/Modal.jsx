import React from 'react'
import  "../styles/Modal.css"
import { useGlobalContext } from '../content';


const Modal = ({image,title,text}) => {

  const { setShowModal } = useGlobalContext();

  return (
    <aside className='modal-overlay'>
      <div className="modal-container">
        <img src={image} alt={title} className="img modal-img"/>
        <div className='modal-content'>
          <h4>{title}</h4>
          <p>Summary:</p>
          <p>{text}</p>
          <button onClick={() => setShowModal(false)} className='btn btn-hipster close-btn'>Close</button>
        </div>
      </div>
    </aside>
  )
}

export default Modal