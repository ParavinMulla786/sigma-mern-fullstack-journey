import React from 'react'
import Price from './Price'
import './Product.css'


function Product({title ,idx}){

  let oldPrices = ["1000", "5000", "49000" ,"8999"]
  let newPrices = ["599" ,"3999", "29990" ,"7999"]
  let Description = [["Elite wireless audio." ," Top-tier sound quality"],
     ["Advanced fitness smartwatch." , "Sleek GPS smartwatch"],
      [" Fast portable storage." , "Expanded digital storage."],
      ["Versatile everyday laptop.", "Powerful touchscreen PC."]]
  return (
    <>
    <div className='Product'>
    <h4>{title}</h4>
    <p>{Description[idx][0]}</p>
    <p>{Description[idx][1]}</p>

    <Price oldPrice = {oldPrices[idx]} newPrice = {newPrices[idx]}/>
  
    </div>
    </>
  )
}


export default Product