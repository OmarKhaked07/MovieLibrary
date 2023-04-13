import React,{ useContext, useEffect, useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({children}) => {

  const [showModal, setShowModal] = useState(false)
  const [name, setName] = useState('')

  const [searchTerm, setSearchTerm] = useState('')
  const [id, setId] = useState(localStorage.getItem('id'));

  useEffect(()=>{
    localStorage.setItem('id', id)
  },[id]);




  return (
    <AppContext.Provider value={{searchTerm,setSearchTerm,id,setId,showModal,setShowModal,setName,name}}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export default AppProvider