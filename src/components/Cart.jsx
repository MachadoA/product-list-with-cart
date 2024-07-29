import styles from './Cart.module.css';
import emptyCart from '../assets/images/illustration-empty-cart.svg';
import carbonNeutro from '../assets/images/icon-carbon-neutral.svg';
import ButtonMain from './ButtonMain';

// eslint-disable-next-line react/prop-types
export default function Cart({ items, onConfirmOrder }) {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  const handleConfirmOrder = () => {
    console.log('Order Items:', items);
    onConfirmOrder(items);
  };

  return (
    <section className={styles.cartComponent}>
      <article className={styles.article}>
        <h2>Your Cart ({totalItems})</h2>
        {totalItems === 0 ? (
          <>
            <img src={emptyCart} alt="empty cart" />
            <p>Your added items will appear here</p>
          </>
        ) : (
          <>
            <ul>
              {items.map(item => (
                <li key={item.name} className={styles.cartItem}>
                  <div className={styles.itemInfo}>
                    <h3 className={styles.itemName}>{item.name}</h3>
                    <div className={styles.itemDetails}>
                      <p className={styles.itemQuantity}>{item.quantity}x </p>
                      <p className={styles.itemPrice}>@ ${item.price.toFixed(2)}</p>
                      <p className={styles.itemTotal}>${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </li>
              ))}
              <li className={styles.orderSummary}>
                <p className={styles.orderTotal}>Order Total </p>
                <span>${totalPrice}</span>
              </li>
              <li className={styles.carbonNeutral}>
                <p><img src={carbonNeutro} alt="icon carbon neutro" /></p>
                <p>This is a <b>carbon-neutral</b> delivery</p>
              </li>
              <li>
                <ButtonMain onClick={handleConfirmOrder} label='Confirm Order' />
              </li>
            </ul>
          </>
        )}
      </article>
    </section>
  );
}
