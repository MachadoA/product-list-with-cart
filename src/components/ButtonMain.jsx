import styles from './ButtonMain.module.css';

export default function ButtonMain({onClick, label}) {
  return (
    <button onClick={onClick} className={styles.btn}>{label}</button>
  )
}
