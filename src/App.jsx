import { useState } from 'react';
import Footer from './components/Footer';
import Card from './components/Card';
import Header from './components/Header';
import Cart from './components/Cart';
import Modal from './components/Modal';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reset, setReset] = useState(false);

  const changeToCart = (item) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((i) => i.name === item.name);
      if (itemExists) {
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
    setCartItems([]); // Reseta o estado do carrinho
    setIsModalOpen(false); // Fecha o modal
    setReset(true); // indica que o card deve ser resetado
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <>
      <Header />
      <div className='main-content'>
        <Card changeToCart={changeToCart}  reset={reset} setReset={setReset}/>
        <Cart items={cartItems} onConfirmOrder={handleConfirmOrder} />
      </div>
      <Footer />
      {isModalOpen && <Modal items={cartItems} totalPrice={totalPrice} onResetOrder={handleResetOrder} />}
    </>
  );
}

export default App;
