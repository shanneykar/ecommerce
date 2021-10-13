import React from 'react';
import './Payment.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';

function Payment() {
    const [{ basket,user },dispatch] = useStateValue();
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout(<Link to="/checkout">
                        {basket?.length} items
                        </Link>)
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React lane</p>
                        <p>Fulham, UK</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
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
                </div>
                <div className="payment__section">
                    <h3>Payment method</h3>
                    <div className="payment__details">
                        stripe
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment

