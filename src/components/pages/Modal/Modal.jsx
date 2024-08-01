import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import TotalPrice from "../Cart/TotalPrice";
import CartItem from "../Cart/CartItem";
import ButtonMain from "../../shared/ButtonMain/ButtonMain";
import iconOrderConfirmed from "/images/icon-order-confirmed.svg";
import iconCloseModal from "/images/icon-close.svg";

import styles from "./Modal.module.css";

export default function Modal() {
  const { cartItems, setCartItems, isOpenModal, setIsOpenModal, setIsOpenModalCart } =
    useContext(CartContext);

  const handleReset = () => {
    setCartItems([]);
    setIsOpenModal(false);
    setIsOpenModalCart(false)
  };

  function closeModalFinal(){
    setIsOpenModal(false);
  }

  return (
    <>
      {isOpenModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <img src={iconOrderConfirmed} alt="icon confirmation order" />
            <h2 >Order Confirmed</h2>
            <p>We hope you enjoy your food!</p>

            <ul className={styles.list}>
              {cartItems.map((item, index) => (
                <CartItem
                  key={index}
                  item={item}
                  confirmOrder={true}
                />
              ))}
            </ul>
            
            <TotalPrice />
            
            <button className={styles.closeModalBtn} onClick={closeModalFinal}>Continue Shopping </button>
            <ButtonMain label='Start New Order' onClick={handleReset}/>

          </div>
        </div>
      )}
    </>
  );
}
