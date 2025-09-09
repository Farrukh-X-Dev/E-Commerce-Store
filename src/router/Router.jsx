import React from 'react'
import Home from '../pages/Home'
import Shop from '../pages/Shop';
import About from '../pages/About';
import { nav_items } from '../config';
import Collection from '../pages/Collection';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import PageNotFound from '../pages/PageNotFound';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import ProductDescription from '../pages/ProductDescription';
import Cart from '../pages/Cart';

const PrivateRoutes = () => {
  let User = JSON.parse(localStorage.getItem('User'))
  return (
    <>
      {User == true ? <Outlet /> : <Navigate to='signup' />}
    </>
  )
}

const Router = () => {

  return (
    <Routes >
      <Route element={<PrivateRoutes />}>
        <Route path={nav_items[0].path} element={<Home />} />
        <Route path={nav_items[1].path} element={<About />} />
        <Route path={nav_items[2].path} element={<Collection />} />
        <Route path={nav_items[3].path} element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/products/:id' element={<ProductDescription />} />

      </Route>

      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/*' element={<PageNotFound />} />
    </Routes>

  )
}

export default Router