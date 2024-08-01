import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isOpenModalCart, setIsOpenModalCart] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModalCart = () => {
    setIsOpenModalCart(!isOpenModalCart);
  };

  const openOrderModal = () => {
    setIsOpenModal(true);
    setIsOpenModalCart(false);
    console.log('fechar cartModal')
  };

  const closeOrderModal = () => {
    setIsOpenModal(false);
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{
      cartItems, setCartItems,
      isOpenModalCart,  setIsOpenModalCart,toggleModalCart,
      isOpenModal, setIsOpenModal,
      openOrderModal, closeOrderModal
    }}>
      {children}
    </CartContext.Provider>
  );
};