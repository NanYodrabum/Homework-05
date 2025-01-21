import React from 'react'
import ProductItem from './ProductItem'

function ProductList() {

    return (
       <div className="flex flex-col gap-2 mt-2" >
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
       </div>
    )
  }
  
  export default ProductList