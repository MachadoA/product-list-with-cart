import Cart from '../../pages/Cart/Cart';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src="/images/logo.png" alt="logo sweet haven" />
      <Cart />
    </header>
  )
}
