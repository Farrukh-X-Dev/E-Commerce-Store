import React, { createContext } from 'react'
import { useState } from 'react'

let ProductProvider = createContext([])

const ContextApi = ({children}) => {
  let [cartProducts , setCartProducts] = useState([])
  let [quantity , setQuantity] = useState(0)

  let value = {cartProducts , setCartProducts , quantity , setQuantity , }
  return <ProductProvider.Provider value={value} > {children} </ProductProvider.Provider>
}

export {ContextApi , ProductProvider}