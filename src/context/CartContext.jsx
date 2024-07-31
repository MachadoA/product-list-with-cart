import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, isOpenModal, setIsOpenModal }}>
      {children}
    </CartContext.Provider>
  );
};
