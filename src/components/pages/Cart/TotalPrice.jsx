import React, { useContext } from 'react';
import {CartContext} from '../../../context/CartContext';
import { formatPrice } from '../../utils/FormatPrice';
import styles from './Cart.module.css';

export default function TotalPrice() {
    const {cartItems} = useContext(CartContext);

    const totalPrice = cartItems.reduce(
      (acc, item) => acc + item.price * item.count, 0
    );

  return (
    <li className={styles.orderSummary}>
        <p className={styles.orderTotal}>Order Total </p>
        <span>${formatPrice(totalPrice)}</span>
    </li>
  )
}
