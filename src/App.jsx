import Footer from './components/Footer';
import Card from './components/Card';
import Header from './components/Header';
import Cart from './components/Cart';

import './App.css';

function App() {
  
  
  return (
    <>
      <Header />
      <div className='main-content'>
        <Card />
        <Cart />
      </div>
      <Footer/>
    </>
  )
}

export default App
