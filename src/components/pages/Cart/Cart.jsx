import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { CartContext } from '../../../context/CartContext.jsx';
import styles from './Cart.module.css';

export default function Cart(){
  const {cartItems, toggleModalCart} = useContext(CartContext);
  const totalItems = cartItems.reduce((acc, item) => acc + item.count, 0);

  return(
      <div onClick={toggleModalCart}>
        <motion.p 
          className={styles.count}
          whileHover={{ transition: { duration: 0.3 } }}
        >
            <svg
              className={styles.countImg}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="40"
              height="40"
            >
              <path d="M23.38,4H6.49l-.26-1.84c-.17-1.23-1.23-2.16-2.48-2.16h-1.76V1h1.76c.75,0,1.38,.56,1.49,1.29l2.02,14.55c.17,1.23,1.23,2.16,2.48,2.16h11.26v-1H9.74c-.75,0-1.38-.56-1.49-1.29l-.24-1.71h13.16l2.2-11ZM7.88,14l-1.25-9h15.53l-1.8,9H7.88Zm1.12,6c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Zm0,3c-.55,0-1-.45-1-1s.45-1,1-1,1,.45,1,1-.45,1-1,1Zm9-3c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Zm0,3c-.55,0-1-.45-1-1s.45-1,1-1,1,.45,1,1-.45,1-1,1ZM3.74,6H0v-1H3.6l.14,1Zm.56,4H0v-1H4.16l.14,1Zm.42,3l.14,1H0v-1H4.71Z"/>
            </svg>
              {totalItems}
        </motion.p> 
      </div>

  )
}

