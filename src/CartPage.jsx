// CartPage.jsx
import React from 'react';
import './App.css';

const CartPage = ({ cart, removeFromCart, totalPrice, isCheckout }) => {
    const handleCheckout = () => {
        const message = `Hello, I want to make a payment for the order with a total price of $${totalPrice}.`;
        const phoneNumber = '+6285175232251';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl);
    };

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            <div className="cart-items">
                {cart && cart.length > 0 ? (
                    cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <p>{item.name} - ${item.price}</p>
                            {isCheckout && <button onClick={() => removeFromCart(item.id)}>Remove</button>}
                        </div>
                    ))
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </div>
            <div>Total Price: ${totalPrice}</div>
            {!isCheckout && <button className="checkout-button">Checkout</button>}
        </div>
    );
};

export default CartPage;
