import { useEffect, useState } from 'react';
import Button from './Button';
import styles from './Card.module.css';

export default function Card({ changeToCart, reset, setReset }) {
    const [data, setData] = useState([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [activeItems, setActiveItems] = useState(new Set());
    const [quantities, setQuantities] = useState({});
    const [clickedItems, setClickedItems] = useState(new Set());

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
            setActiveItems(new Set());
            setQuantities({});
            setClickedItems(new Set());
            setReset(false); // Reseta o estado de reset no App
        }
    }, [reset, setReset]);

    const getImageSrc = (image) => {
        if (windowWidth < 576) return image.mobile;
        if (windowWidth >= 576 && windowWidth < 768) return image.tablet; 
        if (windowWidth >= 768 && windowWidth < 992) return image.desktop; 
        return image.desktop; 
    };

    const handleItemClick = (item) => {
        setActiveItems((prevItems) => {
            const newItems = new Set(prevItems);
            if (newItems.has(item.name)) {
                newItems.delete(item.name);
            } else {
                newItems.add(item.name);
            }
            return newItems;
        });

        setClickedItems((prevClickedItems) => {
            const newClickedItems = new Set(prevClickedItems);
            if (!newClickedItems.has(item.name)) {
                newClickedItems.add(item.name);
                if (!quantities[item.name]) {
                    changeToCart({ ...item, quantity: 1 });
                }
            }
            return newClickedItems;
        });
    };

    const handleIncrement = (item) => {
        setQuantities((prevQuantities) => {
            const newQuantity = (prevQuantities[item.name] || 1) + 1;
            return {
                ...prevQuantities,
                [item.name]: newQuantity
            };
        });
        changeToCart({ ...item, quantity: (quantities[item.name] || 1) + 1 });
    };

    const handleDecrement = (item) => {
        setQuantities((prevQuantities) => {
            const newQuantity = (prevQuantities[item.name] || 1) - 1;
            if (newQuantity <= 0) {
                setClickedItems((prevClickedItems) => {
                    const newClickedItems = new Set(prevClickedItems);
                    newClickedItems.delete(item.name);
                    return newClickedItems;
                });
            }
            return {
                ...prevQuantities,
                [item.name]: newQuantity > 0 ? newQuantity : 0
            };
        });
        changeToCart({ ...item, quantity: Math.max((quantities[item.name] || 1) - 1, 0) });
    };

    return (
        <section className={styles.cardSection}>
            {data.map((item) => (
                <article key={item.name} className={styles.cardMain}>
                    <div className={styles.cartImage}>
                        <img
                            className={`${styles.img} ${activeItems.has(item.name) ? styles.activeImg : ''}`}
                            src={getImageSrc(item.image)}
                            alt={item.name}
                        />
                        <Button
                            className={styles.btn}
                            onClick={() => handleItemClick(item)}
                            onIncrement={() => handleIncrement(item)}
                            onDecrement={() => handleDecrement(item)}
                            quantity={quantities[item.name] || 1}
                            isClicked={clickedItems.has(item.name)}
                        />
                    </div>
                    <article className={styles.article}>
                        <p className={styles.name}>{item.category}</p>
                        <h2 className={styles.title}>{item.name}</h2>
                        <p className={styles.price}>${item.price.toFixed(2)}</p>
                    </article>
                </article>
            ))}
        </section>
    );
}
