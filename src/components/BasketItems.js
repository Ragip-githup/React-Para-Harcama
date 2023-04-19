import React from 'react'

function BasketItems({ item, product }) {
    const itemprice =(product.price * item.amount)
    
    return (
        <>
        <li className='basket-item'>
            {product.title} <span> x {item.amount}</span> = <span className='item-price'>{itemprice} $</span>

        </li>
        <style jsx>{`
            .basket-item{
                display: flex;
                gap: 5px;
                position: relative;
                padding: 0.5rem;
                font-size: 1.25rem;
                font-family: 'Roboto', sans-serif;
                border: 1px solid #999 ;
                border-radius: 0.5rem;
                margin: 10px;
            }
            
            .basket-item span{
                color: #999;
            }
            .basket-item .item-price{
                position: absolute;
                right: 10px;
                font-weight: 600;
                color: green;
            }
            `}
        </style>
        </>

    )
}

export default BasketItems