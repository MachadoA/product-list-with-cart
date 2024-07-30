import React from 'react';
import { useCart } from '../../../context/CartContext';
import ButtonMain from '../../shared/ButtonMain/ButtonMain';
import emptyCart from '../../../assets/images/illustration-empty-cart.svg';
import CarbonNeutral from '../../../assets/images/icon-carbon-neutral.svg';
import removeItem from '../../../assets/images/icon-remove-item.svg';
import styles from './Cart.module.css';

const Cart = () => {
  const { cartItems, totalPrice, handleConfirmOrder, removeFromCart, totalItem } = useCart();

  return (
    <section className={styles.cartComponent}>
      <article className={styles.article}>
        <h2>Your Cart ({totalItem})</h2> 
        {cartItems.length === 0 ? (
          <>
            <img className={styles.emptyCart} src={emptyCart} alt="empty cart" />
            <p>Your added items will appear here</p>
          </>
        ) : (
          <>
            <ul>
              {cartItems.map(item => (
                <li key={item.name} className={styles.cartItem}>
                  <div className={styles.itemInfo}>
                    <h3 className={styles.itemName}>{item.name}</h3>
                    <div className={styles.itemDetails}>
                      <p className={styles.itemQuantity}>{item.quantity}x </p>
                      <p className={styles.itemPrice}>@ ${item.price.toFixed(2)}</p>
                      <p className={styles.itemTotal}>${(item.price * item.quantity).toFixed(2)}</p>
                      <button className={styles.remove} onClick={() => removeFromCart(item.name)}>
                        <img className={styles.removeBtn} src={removeItem} alt="remove item" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
              <li className={styles.orderSummary}>
                <p className={styles.orderTotal}>Order Total </p>
                <span>${totalPrice}</span>
              </li>
              <li className={styles.carbonNeutral}>
                <img src={CarbonNeutral} alt="carbon neutral" />
                <p>This is a <b>carbon-neutral</b> delivery</p>
              </li>
              <li>
                <ButtonMain onClick={() => handleConfirmOrder()} label='Confirm Order' />
              </li>
            </ul>
          </>
        )}
      </article>
    </section>
  );
}

export default Cart;
