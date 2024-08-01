import React, { useContext } from 'react';
import { CartContext } from '../../../context/CartContext.jsx';
import iconCart from "../../../../public/images/icon-cart.svg";

import styles from './Cart.module.css';

export default function Cart(){
  const {cartItems, toggleModalCart} = useContext(CartContext);
  const totalItems = cartItems.reduce((acc, item) => acc + item.count, 0);

  return(
      <div onClick={toggleModalCart}>
        <p className={styles.count}>
          <img src={iconCart} alt="icon cart" /> {totalItems}
        </p> 
      </div>

  )
}

