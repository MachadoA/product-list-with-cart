import addCart from '../../../assets/images/icon-add-to-cart.svg';
import styles from './Button.module.css';

export default function ButtonAdd({ addItemToCart }) {
  return (
    <button className={styles.btn} onClick={addItemToCart}>
        <img src={addCart} alt="icon add to cart" />
        Add to Cart
    </button>
  );
}
