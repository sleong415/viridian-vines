import React, { createContext, useContext, useState, useEffect } from 'react';

const CartItemContext = createContext();

// holds the data to be shared between components
export function CartItemProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
        let total = cartTotal + (item.amount * item.price)
        setCartTotal(Math.round(total * 100) / 100);
    };

    const removeFromCart = (removeItem) => {
        const updatedCartItems = cartItems.filter(item => item.id !== removeItem.id);
        setCartItems(updatedCartItems);
        let total = cartTotal - (removeItem.amount * removeItem.price)
        setCartTotal(Math.round(total * 100) / 100);
    };

    const removeOne = (item) => {
        if (item.amount == 1) {
            removeFromCart(item);
        } else {
            item.amount -= 1;
            let total = cartTotal - item.price;
            setCartTotal(Math.round(total * 100) / 100);
        }
    }

    const addOne = (item) => {
        item.amount += 1;
        let total = cartTotal + item.price;
        setCartTotal(Math.round(total * 100) / 100);
    }

    const isItemInCart = (itemId) => {
        return cartItems.some(item => item.id === itemId);
    };

    const calcTotalItems = () => {
        let totalItems = 0
        cartItems.forEach(item => totalItems += item.amount);
        console.log(totalItems);
        return totalItems;
    }

    const clearCart = () => {
        setCartItems([]);
        setCartTotal(0);
    };

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    return (
        <CartItemContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, cartTotal, isItemInCart, removeOne, addOne, calcTotalItems }}>
            {children}
        </CartItemContext.Provider>
    );
}

export function useCart() {
    return useContext(CartItemContext);
}