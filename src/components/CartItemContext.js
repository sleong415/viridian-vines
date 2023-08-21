import React, { createContext, useContext, useState, useEffect } from 'react';

const CartItemContext = createContext();

// holds the data to be shared between components
export function CartItemProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeFromCart = (itemId) => {
        const updatedCartItems = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCartItems);
    };

    const isItemInCart = (itemId) => {
        return cartItems.some(item => item.id === itemId);
    };

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    return (
        <CartItemContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartItemContext.Provider>
    );
}

export function useCart() {
    return useContext(CartItemContext);
}