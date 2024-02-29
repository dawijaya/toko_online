// Apps12.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import CartPage from './components/CartPage';

const Apps12 = () => {
    const [cart, setCart] = useState([]);

    // Muat data keranjang dari local storage saat komponen dimuat
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    // Buat fungsi untuk menghapus item dari keranjang
    const removeFromCart = (productId) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
        // Simpan data keranjang ke local storage setiap kali diperbarui
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    // Hitung total harga
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return (
        <CartPage cart={cart} removeFromCart={removeFromCart} totalPrice={totalPrice} />
    );
};

export default Apps12;
