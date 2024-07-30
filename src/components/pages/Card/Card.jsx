import React, { useEffect, useState } from 'react';
import { useCart } from '../../../context/CartContext';
import styles from './Card.module.css';
import Button from '../../shared/Button/Button';

const Card = () => {
    const { changeToCart, reset, setReset, removeFromCart } = useCart();
    const [data, setData] = useState([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [quantities, setQuantities] = useState({});

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        fetch('/data.json')
            .then((response) => response.json())
            .then(data => setData(data))
            .catch(error => console.error('There was a problem with the fetch operation:', error));
    }, []);

    useEffect(() => {
        if (reset) {
            setQuantities({});
            setReset(false);
        }
    }, [reset, setReset]);

    const getImageSrc = (image) => {
        if (windowWidth < 576) return image.mobile;
        if (windowWidth >= 576 && windowWidth < 768) return image.tablet; 
        if (windowWidth >= 768 && windowWidth < 992) return image.desktop; 
        return image.desktop; 
    };

    const handleItemClick = (item) => {
        const newQuantity = quantities[item.name] || 1;
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [item.name]: newQuantity
        }));

        changeToCart({ ...item, quantity: newQuantity });
    };

    const handleIncrement = (item) => {
        setQuantities((prevQuantities) => {
            const newQuantity = (prevQuantities[item.name] || 1) + 1;
            changeToCart({ ...item, quantity: newQuantity });
            return {
                ...prevQuantities,
                [item.name]: newQuantity
            };
        });
    };

    const handleDecrement = (item) => {
        setQuantities((prevQuantities) => {
            const newQuantity = Math.max((prevQuantities[item.name] || 1) - 1, 0);
            if (newQuantity === 0) {
                removeFromCart(item.name);
            } else {
                changeToCart({ ...item, quantity: newQuantity });
            }
            return {
                ...prevQuantities,
                [item.name]: newQuantity,
            };
        });
    };

    return (
        <section className={styles.cardSection}>
            {data.map((item) => {
                const quantity = quantities[item.name] || 0;

                return (
                    <article key={item.name} className={styles.cardMain}>
                        <div className={styles.cartImage}>
                            <img
                                className={`${styles.img} ${quantity > 0 ? styles.activeImg : ''}`}
                                src={getImageSrc(item.image)}
                                alt={item.name}
                            />
                            <Button
                                className={styles.btn}
                                onClick={() => handleItemClick(item)}
                                onIncrement={() => handleIncrement(item)}
                                onDecrement={() => handleDecrement(item)}
                                quantity={quantity}
                                isClicked={quantity > 0} 
                            />
                        </div>
                        <article className={styles.article}>
                            <p className={styles.name}>{item.category}</p>
                            <h2 className={styles.title}>{item.name}</h2>
                            <p className={styles.price}>${item.price.toFixed(2)}</p>
                        </article>
                    </article>
                );
            })}
        </section>
    );
};

export default Card;
