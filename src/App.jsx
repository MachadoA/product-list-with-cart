import React from 'react';
import Footer from './components/layout/Footer/Footer';
import Card from './components/pages/Card/Card';
import Header from './components/layout/Header/Header';
import Cart from './components/pages/Cart/Cart';
import Modal from './components/pages/Modal/Modal';
import { CartProvider, useCart } from './context/CartContext';
import './App.css';

function App() {
  const { cartItems, isModalOpen, handleConfirmOrder, handleResetOrder, totalPrice, reset, setReset } = useCart();

  return (
    <>
      <section className='main-content'>
        <article>
          <Header />
          <Card changeToCart={useCart().changeToCart} reset={reset} setReset={setReset} />
        </article>
        <Cart onConfirmOrder={handleConfirmOrder} />
      </section>
      <Footer />
      {isModalOpen && <Modal items={cartItems} totalPrice={totalPrice} onResetOrder={handleResetOrder} />}
    </>
  );
}

export default App;
