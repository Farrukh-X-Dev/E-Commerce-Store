import React from 'react'
import Navbar from './components/Navbar'
import Router from './router/Router'
import { useLocation } from 'react-router-dom'

const App = () => {
  let currentRoute = useLocation()
  
  return (
    <>
    { currentRoute.pathname == '/login' || currentRoute.pathname == '/signup' ? null :  <Navbar />}
    <Router />
    </>
  )
}

export default App