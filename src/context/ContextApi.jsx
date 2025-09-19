import React, { createContext } from 'react'
import { useState } from 'react'

let ProductProvider = createContext([])

const ContextApi = ({children}) => {
  let [quantity , setQuantity] = useState(0)
  let [cartProducts , setCartProducts] = useState([])
  const [favourites, setFavourites] = useState([]);
  const [favouritesCount, setFavouritesCount] = useState(0);


  let value = {
    cartProducts , setCartProducts ,
    quantity , setQuantity ,
    favourites, setFavourites ,
    favouritesCount, setFavouritesCount
  }

  return <ProductProvider.Provider value={value} > {children} </ProductProvider.Provider>
}

export {ContextApi , ProductProvider}