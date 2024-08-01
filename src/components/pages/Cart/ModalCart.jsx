import React, { useContext } from 'react';
import { CartContext } from '../../../context/CartContext.jsx';
import EmptyCart from './EmptyCart';
import OrderCart from './OrderCart';
import removeItem from '/images/icon-remove.svg';
import styles from './Cart.module.css';

export default function ModalCart(){
  const {cartItems, isOpenModalCart,setIsOpenModalCart} = useContext(CartContext);
  const totalItems = cartItems.reduce((acc, item) => acc + item.count, 0);

  if(!isOpenModalCart){
    return null;
  }

  function closeModal(){
    setIsOpenModalCart(false); 
  }

  return(
    <>
      <section className={styles.cartComponentModal}>
        <article className={styles.articleModal}>
           <div className={styles.titleLine}>
             <h2>Your Cart ({totalItems})</h2>
             <button className={styles.closeModalBtn}><img src={removeItem} alt='remove item' className={styles.closeModal} onClick={closeModal}/></button>
           </div>
               {totalItems <= 0 ? <EmptyCart/> : <OrderCart/>}
        </article>
      </section>
    </>
  )
}

