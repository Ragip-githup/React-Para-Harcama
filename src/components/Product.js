import React from 'react'
import { moneyFormat } from './helpers'


function Product({ product, total, money, basket, setBasket }) {
    const basketItem = basket.find(item => item.id === product.id)

    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id)

        if (checkBasket) {
            checkBasket.amount += 1
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
        } else {
            setBasket([...basket, {
                id: product.id,
                amount: 1,
            }])
        }

    }

    const removeBasket = () => {
        const currentBasket = basket.find(item => item.id === product.id)
        const basketWithoutCurrent = basket.filter(item => item.id !== product.id)
        currentBasket.amount -= 1
        if (currentBasket.amount === 0) {
            setBasket([...basketWithoutCurrent])
        } else {
            setBasket([...basketWithoutCurrent, currentBasket])
        }

    }

    return (
        <>
            <div className="product">
                <img src={product.image} alt="" />
                <h6>{product.title}</h6>
                <div className="price">$ {moneyFormat(product.price)}</div>
                <div className="actions">
                    <button className='sell-btn' disabled={!basketItem} onClick={removeBasket}>Sat</button>
                    <span className='amount'>{basketItem && basketItem.amount || 0}</span>
                    <button className='buy-btn' disabled={total + product.price > money} onClick={addBasket}>Satın AL</button>

                </div>
                <style jsx>{`
.product {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px; 
    background: #fff;
    border: 1px solid #ddd;
    margin-bottom : 20px;
    width: 24%;
}
.product img{
    width: 100%;  
}
.product h6{
    font-size: 1.5em;
    margin-bottom: 10px;
}
.product .price{
    font-size: 20px;
    color: green;
    font-weight: bold;
}
.product .actions{
    display: flex;
    align-items: center;
    margin-top: 15px;
    
}
.actions button{
    font-size: 0.90rem;
    height: 40px;
    flex: 1;
    cursor: pointer;
}
.actions button[disabled]{
    opacity: .3;
    cursor: not-allowed;
}
.actions .buy-btn{
    background: #48afcb;
    border-radius: 0 4px 4px 0;
    font-weight: 600;
    transition: all 0.5s;

}
.actions .buy-btn:hover{
    background: red;
    color: white;
    transition: all 0.5s;
}
.actions .sell-btn{
    background: #ccc;
    color: #333;
    border-radius:  4px 0 0 4px ;
    font-weight: 600;
    transition: all 0.5s;

}
.actions .sell-btn:hover{
    background: black;
    color: white;
    transition: all 0.5s;
}
.actions .amount {
    width: 50px;
    display: flex;
    justify-content: center;
    border: 1px solid #ddd;
    height: 40px;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: #555;
}
`}
                </style>
            </div>

        </>
    )
}

export default Product