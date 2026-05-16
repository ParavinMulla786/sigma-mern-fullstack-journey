import React from 'react'
import Product from './Product'

const ProductTab = () => {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent:"center",
    alignItems:"center",
  }

  return (
    <div style={styles}>
   
      <Product title="Sony WH-1000XM4 Wireless Headphones, Silver" idx={0} />
      <Product title="Apple Watch Series 9 GPS 41mm, Midnight" idx={1} />
      <Product title="SanDisk 128GB Ultra microSDXC Card, Red" idx={2} />
      <Product title="HP Pavilion 15 Touchscreen Laptop, Silver" idx={3} />
    </div>
  )
}

export default ProductTab