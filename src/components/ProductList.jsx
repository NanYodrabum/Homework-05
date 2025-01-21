import React from 'react'
import ProductItem from './ProductItem'

function ProductList(props) {
    const {products} = props
    console.log(products);

    return (
       <div className="flex flex-col gap-2 mt-2" >
        { products.map (el => (
            <ProductItem key={el.id}  product={el}/>
        ))

        }
       </div>
    )
  }
  
  export default ProductList