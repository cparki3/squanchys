import React, {Component} from 'react';

const EmptyCart = (props) =>{
    return(
        <div className="empty-cart">
            <img src={process.env.PUBLIC_URL + "images/empty_cart.png"}  alt="sad Jerry"/>
            <h2>You cart is sad and empty!</h2>
        </div>
    )
};

export default EmptyCart;
