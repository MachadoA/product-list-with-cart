import React, { useContext } from 'react';
import { motion } from 'framer-motion';
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
             <motion.button
              className={styles.removeBtnAnimation}
              onClick={closeModal}
              whileHover={{ rotate: 90, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <img src={removeItem} alt="remove item" className={styles.removeBtn} />
            </motion.button>
           </div>
               {totalItems <= 0 ? <EmptyCart/> : <OrderCart/>}
        </article>
      </section>
    </>
  )
}

