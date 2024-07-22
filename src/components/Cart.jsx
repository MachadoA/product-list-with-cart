import emptyCart from '../assets/images/illustration-empty-cart.svg';

import styles from './Cart.module.css';

export default function Cart() {
  return (
    <section className={styles.cartComponent}>
        <article className={styles.article}>
            <h2>Your Cart (quantidade)</h2>
            <img src={emptyCart} alt="" />
            <p>Your added items will appear here</p>
        </article>
    </section>
  )
}
