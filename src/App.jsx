import React, { useState, useEffect } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom'; // Mengganti useHistory dengan useNavigate
import Product from './components/Product';
import CartPage from './components/CartPage';

function App() {
    const navigate = useNavigate(); // Menggunakan useNavigate untuk navigasi

    // Mengambil data keranjang dari local storage saat komponen dimount
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', description: 'Description 1', price: 10.99, image: 'laptop1.jpeg' },
        { id: 2, name: 'Product 2', description: 'Description 2', price: 20.99, image: 'laptop2.jpeg' },
        { id: 3, name: 'Product 3', description: 'Description 3', price: 10.99, image: 'laptop3.jpeg' },
        { id: 4, name: 'Product 4', description: 'Description 4', price: 20.99, image: 'laptop4.jpeg' },
        { id: 5, name: 'Product 5', description: 'Description 5', price: 10.99, image: 'laptop5.jpeg' },
        { id: 6, name: 'Product 6', description: 'Description 6', price: 20.99, image: 'laptop6.jpeg' },
    ]);

    const [cart, setCart] = useState([]);
    const [cartPageVisible, setCartPageVisible] = useState(false);

    const addToCart = (product) => {
        const updatedCart = [...cart, product];
        setCart(updatedCart);
        // Menyimpan data keranjang ke local storage setiap kali keranjang diperbarui
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
        // Menyimpan data keranjang ke local storage setiap kali keranjang diperbarui
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const handleShowCartPage = () => {
        setCartPageVisible(!cartPageVisible);
        navigate('/cart'); // Navigasi ke halaman /cart saat ikon keranjang diklik
    };

    return (
        <div className="App">
    <div className="cart-icon" onClick={handleShowCartPage}>
        <span className="cart-text">Cart</span>
        <img src="/image/carticon.jpeg" alt="/Cart" />
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
