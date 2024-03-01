import React, { useState, useEffect } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import Product from './components/Product';
import CartPage from './components/CartPage';

function App() {
    const navigate = useNavigate();

    // Mengambil data keranjang dari local storage saat komponen dimount
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    const [products] = useState([
        { id: 1, name: 'Product 1', description: 'Description 1', price: 50.99, image: 'https://shorturl.at/byAX5' },
        { id: 2, name: 'Product 2', description: 'Description 2', price: 20.99, image: 'https://shorturl.at/qBRXZ' },
        { id: 3, name: 'Product 3', description: 'Description 3', price: 10.99, image: 'https://shorturl.at/dktE6' },
        { id: 4, name: 'Product 4', description: 'Description 4', price: 20.99, image: 'https://shorturl.at/tHL14' }, // Ganti dengan URL yang valid
        { id: 5, name: 'Product 5', description: 'Description 5', price: 10.99, image: 'https://shorturl.at/iqJPZ' }, // Ganti dengan URL yang valid
        { id: 6, name: 'Product 6', description: 'Description 6', price: 20.99, image: 'https://github.com/dawijaya/toko_online/blob/main/public/image/laptop6.jpeg?raw=true' }, // Ganti dengan URL yang valid
    ]);

    const [cart, setCart] = useState([]);
    const [cartPageVisible, setCartPageVisible] = useState(false);

    const addToCart = (product) => {
        const updatedCart = [...cart, product];
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const handleShowCartPage = () => {
        setCartPageVisible(!cartPageVisible);
        navigate('/cart');
    };

    return (
        <div className="App">
            <div className="cart-icon" onClick={handleShowCartPage}>
                <span className="cart-text">Cart</span>
                <img src="https://github.com/dawijaya/toko_online/blob/main/public/image/carticon.jpeg?raw=true" alt="Cart" />
                {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
            </div>
            <h1 className="welcome-text">Welcome</h1>
            <div className="product-list">
                <h1>Our Products</h1>
                <div className="products">
                    {products.map((product) => (
                        <Product key={product.id} product={product} addToCart={addToCart} />
                    ))}
                </div>
            </div>
            {cartPageVisible && <CartPage cart={cart} removeFromCart={removeFromCart} totalPrice={totalPrice} />}
        </div>
    );
}

export default App;
