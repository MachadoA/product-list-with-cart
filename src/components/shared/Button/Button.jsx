/* eslint-disable react/prop-types */
import increment from '../../../assets/images/icon-increment-quantity.svg';
import decrement from '../../../assets/images/icon-decrement-quantity.svg';
import addCart from '../../../assets/images/icon-add-to-cart.svg';
import styles from './Button.module.css';

export default function Button({ className, onClick, onIncrement, onDecrement, quantity, isClicked }) {
  return (
    <button className={`${styles.btn} ${isClicked ? styles.active : ''} ${className}`} onClick={onClick}>
      {isClicked ? (
        <div className={styles.btnContent}>
          <img 
            src={decrement} 
            alt="decrement" 
            onClick={(e) => {
              e.stopPropagation();
              onDecrement();
            }} 
            className={styles.decrease}
          />
          <span className={styles.quantity}>{quantity}</span>
          <img 
            src={increment} 
            alt="increment" 
            onClick={(e) => {
              e.stopPropagation();
              onIncrement();
            }} 
            className={styles.increase}
          />
        </div>
      ) : (
        <>
          <img src={addCart} alt="icon add to cart" />Add to Cart
        </>
      )}
    </button>
  );
}
