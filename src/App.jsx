
import { useContext } from 'react';
import './App.css';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
import Card from './components/pages/Card/Card';
import Cart from './components/pages/Cart/Cart';
import Modal from './components/pages/Modal/Modal';
import { CartContext, CartProvider } from './context/CartContext';

function MainContent() {
  const { isOpenModal } = useContext(CartContext);
  return (
      <>
        <main>
          <Header />
          <Card />
        </main>
        <Cart />
        {isOpenModal && <Modal />}
      </>
  );
}

export default function App() {
  return (
    <CartProvider>
      <id className="main-content">
        <MainContent />
      </id>
      <Footer />
    </CartProvider>
  );
}



