import React, { createContext } from 'react'
import { useState } from 'react'

let ProductProvider = createContext([])

const ContextApi = ({children}) => {
  let [quantity , setQuantity] = useState(0)
  let [cartProducts , setCartProducts] = useState([])
  let [Userquery, setUserquery] = useState("");
  let [favourites, setFavourites] = useState([]);
  let [favouritesCount, setFavouritesCount] = useState(0);


  let value = {
    cartProducts , setCartProducts ,
    quantity , setQuantity ,
    favourites, setFavourites ,
    favouritesCount, setFavouritesCount,
    Userquery, setUserquery
  }

  return <ProductProvider.Provider value={value} > {children} </ProductProvider.Provider>
}

export {ContextApi , ProductProvider}