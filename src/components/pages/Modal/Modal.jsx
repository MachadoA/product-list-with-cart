import { useContext } from "react";
import {motion} from 'framer-motion';
import { CartContext } from "../../../context/CartContext";
import TotalPrice from "../Cart/TotalPrice";
import CartItem from "../Cart/CartItem";
import ResulModalItem from "../Cart/ResultModalItem";
import ButtonMain from "../../shared/ButtonMain/ButtonMain";
import iconOrderConfirmed from "/images/icon-order-confirmed.svg";

import styles from "./Modal.module.css";

export default function Modal() {
  const { cartItems, setCartItems, isOpenModal, setIsOpenModal, setIsOpenModalCart } =
    useContext(CartContext);

  const handleReset = () => {
    setCartItems([]);
    setIsOpenModal(false);
    setIsOpenModalCart(false);
  };

  function closeModalFinal(){
    setIsOpenModal(false);
    setIsOpenModalCart(false);
  }

  return (
    <>
      {isOpenModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2 >
              <img src={iconOrderConfirmed} alt="icon confirmation order" />
              Order Confirmed
            </h2>
            <p>We hope you enjoy your food!</p>

            <ul className={styles.list}>
              {cartItems.map((item, index) => (
                <ResulModalItem
                  key={index}
                  item={item}
                  confirmOrder={true}
                />
              ))}
            </ul>
            
            <TotalPrice />
            
            <button className={styles.closeModalBtn} onClick={closeModalFinal}>Continue Shopping </button>
            <motion.div
              whileHover={{ scale: 1.025 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <ButtonMain label='Start New Order' onClick={handleReset}/>
            </motion.div>

          </div>
        </div>
      )}
    </>
  );
}
