import React from 'react';
import './Subtotal.css';
import { useStateValue } from './StateProvider';
import { useHistory } from 'react-router-dom';


function Subtotal() {
    const[{ basket }, dispatch] = useStateValue();
    const history = useHistory();
    return (
        <div className="subtotal">
            <p>subtotal({basket?.length} items): $<strong>{basket?.reduce((amount,item)=>item.price + amount, 0)}</strong></p>
            <input type="checkbox"/>This order contains a gift
            <button onClick={e=>history.push('/payment')}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
