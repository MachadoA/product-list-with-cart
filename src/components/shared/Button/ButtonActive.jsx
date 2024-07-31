import increment from '/images/icon-increment-quantity.svg';
import decrement from '/images/icon-decrement-quantity.svg';
import styles from './Button.module.css';

export default function ButtonActive({ item, addItemToCart, removeItemToCart, cartItems }) {
    const itemCount = () => {
      const cartItem = cartItems.find((cartItem) => cartItem.name === item.name);
      return cartItem ? cartItem.count : 0;
    };

  return (
    <button className={styles.active}>
        <div className={styles.btnContent}>
          <img 
            src={decrement} alt="decrement" 
            onClick={removeItemToCart} 
            className={styles.decrease}
          />
          <span className={styles.quantity}>{itemCount()}</span>
          <img 
            src={increment} alt="increment" 
            onClick={addItemToCart} 
            className={styles.increase}
          />
        </div>
    </button>
  );
}
