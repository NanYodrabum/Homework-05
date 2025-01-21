import React from 'react'

function ProductItem(props) {
    const { product } = props

    return (
        <div className='border p-2'>
            <p>
                {product.id}, {product.title}
            </p>
            <p>
                {product.category}, {product.price}
            </p>
        </div>
    )
}

export default ProductItem

