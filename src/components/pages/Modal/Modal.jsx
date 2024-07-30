import React from 'react';
import { useCart } from '../../../context/CartContext';
import styles from './Modal.module.css';
import confirmation from '../../../assets/images/icon-order-confirmed.svg';
import ButtonMain from '../../shared/ButtonMain/ButtonMain';

const Modal = ({ onResetOrder }) => {
    const { cartItems, totalPrice } = useCart();

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <img src={confirmation} alt="icon check confirmation" />
                <h2>Order Confirmed</h2>
                <p>We hope you enjoy your food!</p>

                <ul className={styles.list}>
                    {cartItems.map(item => (
                        <li key={item.name} className={styles.cardItem}>
                            <img src={item.image.thumbnail} alt="image food" />
                            <article className={styles.itemInfo}>
                                <h3>{item.name}</h3>
                                <div className={styles.itemDetails}>
                                    <p className={styles.itemQuantity}>{item.quantity}x </p>
                                    <p className={styles.itemPrice}>@ ${item.price.toFixed(2)}</p>
                                </div>
                            </article>
                            <p className={styles.itemTotal}>${(item.price * item.quantity).toFixed(2)}</p>
                        </li>
                    ))}

                    <li className={styles.orderSummary}>
                        <span className={styles.orderSummaryP}>Order Total </span>
                        <span>${totalPrice}</span>
                    </li>
                </ul>

                <ButtonMain label='Start New Order' onClick={onResetOrder} />
            </div>
        </div>
    );
}

export default Modal;
