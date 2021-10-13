import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';


function Checkout() {
    //need basket to pass data to checkout product component
    const[{ basket,user }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                {/* <img className="checkout__ad"
                src="https://www.eiffeldesign.com/media_products/RFE_BannerAd01_2_w600.jpg"
                alt="checkout_ad"/> */}
                <div className="checkout__title">
                    <h5>hello {user?.email} !!!</h5>
                    <h2>Your shopping cart</h2>
                </div>
                {basket.map(item=>(
                    <CheckoutProduct
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
