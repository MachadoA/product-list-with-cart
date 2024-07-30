import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [reset, setReset] = useState(false);

    const changeToCart = (item) => {
        setCartItems((prevItems) => {
            const itemExists = prevItems.find((i) => i.name === item.name);
            if (itemExists) {
                if (item.quantity <= 0) {
                    return prevItems.filter((i) => i.name !== item.name);
                }
                return prevItems.map((i) =>
                    i.name === item.name ? { ...i, quantity: item.quantity } : i
                );
            } else {
                return [...prevItems, { ...item, quantity: item.quantity }];
            }
        });
    };

    const handleConfirmOrder = () => {
        setIsModalOpen(true);
    };

    const handleResetOrder = () => {
        setCartItems([]); 
        setIsModalOpen(false); 
        setReset(true); 
    };

    const removeFromCart = (name) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.name !== name));

    };

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

    const totalItem = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider value={{
            cartItems,
            changeToCart,
            isModalOpen,
            handleConfirmOrder,
            handleResetOrder,
            removeFromCart,
            totalPrice,
            totalItem,
            reset,
            setReset
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
