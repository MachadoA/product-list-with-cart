import { useContext } from 'react';
import { CartContext } from "../../../context/CartContext";
import ButtonAdd from "../../shared/Button/ButtonAdd";
import ButtonAddActive from "../../shared/Button/ButtonActive";
import ImageWidth from "../../utils/ImageWidth.jsx";
import { formatPrice } from '../../utils/FormatPrice.js';

import styles from './Card.module.css';

export default function Item({ item }) {
  const { cartItems, setCartItems } = useContext(CartContext);

  const { image, name, category, price } = item;

  const addItemToCart = () => {
    const findItem = cartItems.find((item) => item.name === name);
    if (findItem) {
      setCartItems(
        cartItems.map((item) =>
          item.name === name ? { ...item, count: item.count + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { count: 1, ...item }]);
    }
  };

  const removeItemToCart = () => {
    const findItem = cartItems.find((item) => item.name === name);
    if (findItem.count > 1) {
      setCartItems(
        cartItems.map((item) =>
          item.name === name ? { ...item, count: item.count - 1 } : item
        )
      );
    } else {
      setCartItems(cartItems.filter((item) => item.name !== name));
    }
  };

  const checkItemInCart = () => cartItems.some((item) => item.name === name);

  return (
    <article key={item.name} className={styles.cardMain}>
      <div className={styles.cartImage}>
        <ImageWidth image={image} alt={`Image ${name}`} className={`${styles.img} ${checkItemInCart() ? styles.activeImg : ''}`} />
        {checkItemInCart() ? (
          <ButtonAddActive
            className={styles.button}
            item={item}
            addItemToCart={addItemToCart}
            removeItemToCart={removeItemToCart}
            cartItems={cartItems}
          />
        ) : (
          <ButtonAdd addItemToCart={addItemToCart} />
        )}
      </div>

      <article className={styles.article}>
        <p className={styles.name}>{category}</p>
        <div className={styles.column}>
          <p className={styles.title}>{name}</p>
          <p className={styles.price}>${formatPrice(price)}</p>
        </div>
      </article>

    </article>
  );
}
