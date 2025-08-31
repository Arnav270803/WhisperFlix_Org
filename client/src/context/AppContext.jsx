import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AppContext = createContext()

const AppContextProvider = (props) => {
  const [user, setUser] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate(); // Add the navigate function

  const value = {
    user,
    setUser,
    setShowLogin,
    showLogin,
    navigate // Include navigate in the context value
  }

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider