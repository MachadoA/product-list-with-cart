import React, { useContext } from 'react';
import {motion} from 'framer-motion';
import CartItem from './CartItem';
import TotalPrice from './TotalPrice';
import ButtonMain from '../../shared/ButtonMain/ButtonMain';
import carbonNeutral from '/images/icon-carbon-neutral.svg';
import styles from './Cart.module.css';
import { CartContext } from '../../../context/CartContext';
import { removeItemToCart } from '../../utils/RemoveItemToCart';

export default function OrderCart() {
    const { cartItems, setCartItems, setIsOpenModal } = useContext(CartContext);
    
    const handleItem = (name) => {
        removeItemToCart(name, cartItems, setCartItems);
    };
    
    return (
        <>
            <ul>
                {cartItems.map(item => (
                    <CartItem key={item.name} item={item} onClick={() => handleItem(item.name)} confirmOrder={false} /> 
                ))}
                <TotalPrice />
                <li className={styles.carbonNeutral}>
                    <img src={carbonNeutral} alt="icon carbon neutral" />
                        <p>This is a <b>carbon-neutral</b> delivery</p>
                </li>
                <li>
                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
                >
                    <ButtonMain onClick={() => setIsOpenModal(true)} label='Confirm Order' />
                </motion.div>
                </li>
            </ul>
        </>
    )
}
