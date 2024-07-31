import emptyCart from '/images/illustration-empty-cart.svg';
import styles from './Cart.module.css';

export default function EmptyCart() {
  return (
    <>
        <img className={styles.emptyCart}  src={emptyCart} alt="No item in cart" />
        <p>Your added items will appear here</p>
    </>
  )
}
