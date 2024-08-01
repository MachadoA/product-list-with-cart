import { useContext } from 'react';
import './App.css';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
import Card from './components/pages/Card/Card';
import Cart from './components/pages/Cart/Cart';
import Modal from './components/pages/Modal/Modal';
import { CartContext, CartProvider } from './context/CartContext';
import ModalCart from './components/pages/Cart/ModalCart';

function MainContent() {
  const { isOpenModal, isOpenModalCart } = useContext(CartContext);
  return (
      <>
        <Header />
        <section className="main-content">
          <article>
            <Card />
          </article>
          {isOpenModalCart && <ModalCart />}
          {isOpenModal && <Modal />}
        </section>
      </>
  );
}

export default function App() {
  return (
    <CartProvider>
      <MainContent />
      <Footer />
    </CartProvider>
  );
}



