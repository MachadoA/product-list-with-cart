import iconOrderConfirmed from "/images/icon-order-confirmed.svg";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import TotalPrice from "../Cart/TotalPrice";
import CartItem from "../Cart/CartItem";
import styles from "./Modal.module.css";
import ButtonMain from "../../shared/ButtonMain/ButtonMain";

export default function Modal() {
  const { cartItems, setCartItems, isOpenModal, setIsOpenModal } =
    useContext(CartContext);

  const handleReset = () => {
    setCartItems([]);
    setIsOpenModal(false);
  };

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
            
            <ButtonMain label='Start New Order' onClick={handleReset}/>

          </div>
        </div>
      )}
    </>
  );
}
