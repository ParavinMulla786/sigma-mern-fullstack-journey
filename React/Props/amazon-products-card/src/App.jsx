import { useState } from 'react'
import ProductTab from './ProductTab'

import './App.css'
import Button from './Button'
import Form from './Form'

function App() {


  return (
    <>
     <h2>BlockBuster Deals!! <button> Shop Now </button> </h2>
      <ProductTab/>
      <Button/>
      <Form/>
    </>
  )
}

export default App
