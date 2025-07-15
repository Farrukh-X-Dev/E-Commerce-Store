import React from 'react'
import Home from '../pages/Home'
import Shop from '../pages/Shop';
import About from '../pages/About';
import { nav_items } from '../config';
import Collection from '../pages/Collection';
import { Route, Routes } from 'react-router-dom'
import PageNotFound from '../pages/PageNotFound';

const Router = () => {
    
  return (
    <Routes >
        <Route path={nav_items[0].path} element={ <Home />}/>
        <Route path={nav_items[1].path} element={<About />}/>
        <Route path={nav_items[2].path} element={<Collection />}/>
        <Route path={nav_items[3].path} element={<Shop />}/>
        <Route path='/*' element={<PageNotFound />}/>
    </Routes>

  )
}

export default Router