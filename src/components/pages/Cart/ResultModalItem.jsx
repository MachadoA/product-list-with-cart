import removeItem from '/images/icon-remove-item.svg';
import { formatPrice } from "../../utils/FormatPrice";
import ImageWidth from '../../utils/ImageWidth';

import styles from './Cart.module.css';

export default function ResulModalItem({ item, onClick, confirmOrder }) {
  const { image, name, price, count = 1 } = item;

  console.log(image)
  
  return (
    <ul>
      <li className={styles.cartItem}>
        <div className={styles.itemInfo}>
          <h3 className={styles.itemName}>{name}</h3>
          <div className={styles.itemDetails}>
            {/* <img src={`/images/${image}`} alt={name} /> */}
            <ImageWidth image={image} alt={name} />
            <p className={styles.itemQuantity}>{count}x</p>
            <p className={styles.itemPrice}>@ ${formatPrice(price)}</p>
              {!confirmOrder && (
                <p className={styles.itemTotal}> ${formatPrice(price * count)} </p>
              )}
              {!confirmOrder ? (
              <button className={styles.remove}><img src={removeItem} alt='remove item' className={styles.removeBtn} onClick={onClick}/></button>
                ) : (
                <p >${formatPrice(price * count)}</p>
                )}
          </div>
        </div>
      </li>
    </ul>
  );
}