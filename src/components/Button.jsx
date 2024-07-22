import addCart from '../assets/images/icon-add-to-cart.svg';
import styles from './Button.module.css';

export default function Button({className}) {
  return (
    <button className={`${styles.btn} ${className}`}> <img src={addCart} alt="icon add to cart" />Add to Cart</button>
  )
}
