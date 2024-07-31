import React, { useContext } from 'react';
import { CartContext } from '../../../context/CartContext.jsx';
import EmptyCart from './EmptyCart';
import OrderCart from './OrderCart';
import styles from './Cart.module.css';

export default function Cart(){
  const {cartItems} = useContext(CartContext);
  const totalItems = cartItems.reduce((acc, item) => acc + item.count, 0);

  return(
    <section className={styles.cartComponent}>
      <article className={styles.article}>
         <h2>Your Cart ({totalItems})</h2> 
             {totalItems <= 0 ? <EmptyCart/> : <OrderCart/>}
      </article>
    </section>
  )
}

