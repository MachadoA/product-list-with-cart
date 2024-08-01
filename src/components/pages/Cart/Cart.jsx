import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { CartContext } from '../../../context/CartContext.jsx';
import iconCart from "../../../../public/images/icon-cart.svg";

import styles from './Cart.module.css';
import { MotionConfig } from 'framer-motion';

export default function Cart(){
  const {cartItems, toggleModalCart} = useContext(CartContext);
  const totalItems = cartItems.reduce((acc, item) => acc + item.count, 0);

  return(
      <div onClick={toggleModalCart}>
        <motion.p 
          className={styles.count}
          whileHover={{ transition: { duration: 0.3 } }}
        >
            <img src={iconCart} alt="icon cart" /> {totalItems}
        </motion.p> 
      </div>

  )
}

