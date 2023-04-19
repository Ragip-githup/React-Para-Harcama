import React from 'react'
import BasketItems from './BasketItems'

function Basket({ basket, total, resetBasket, products }) {
    return (
        <>
            <div className="basket-container container">
            <h3>Alış Veriş Detayları</h3>
            {basket.map(item => (
                <div>
                    <ul>
                    <BasketItems key={item.id} item={item} product={products.find(p => p.id === item.id)} />
                    </ul>
                </div>
            ))}
            <div className="total">
                Toplam: ${total}
            </div>
            <button className='basket-reset-btn' onClick={resetBasket}>Sepeti Sıfırla</button>
            </div>
            <style jsx>{`
                .basket-container {
                padding: 20px;
                background: #fff;
                border: 1px solid #ddd;
            }
            .basket-container h3{
                font-size: 1.5rem;
                margin-bottom: 0.75rem;    
            }
            .basket-container .total{
                border: 1px solid #ddd;
                padding-top: 0.75rem;
                margin-top: .5rem;
                font-size: 1.25rem;
                font-weight: bold;
                text-align: right;
                color: green;

            }
            .basket-reset-btn{
                background: #FF6969;
                height: 40px;
                padding: 0 20px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                border-radius: 5px;
                margin-top: 10px;
            }
            `}   
            </style>
        </>
    )
}

export default Basket
