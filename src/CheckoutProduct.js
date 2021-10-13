import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id,image,title,price,rating }) {
const[{ basket }, dispatch] = useStateValue();   

const removeFromBasket = () =>{
//remove from cart
dispatch({
    type:'REMOVE_FROM_BASKET',
    id: id,
})
}


    return (
        <div className="checkoutproduct">
            <img src={image} alt="product"/>
            <div className="checkoutproduct__info">
                <p>{title}</p>
                <p>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutproduct__rating">
                    {Array(rating).fill().map((_,i)=>(
                    <p>⭐</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
