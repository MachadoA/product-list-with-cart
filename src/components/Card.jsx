import { useEffect } from 'react';
import Button from './Button';

import styles from './Card.module.css';
import { useState } from 'react';

export default function Card() {
    const [data, setData] = useState([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    },[]);
    
    useEffect(() => {
        fetch('/data.json')
        .then((response) => response.json())
        .then(data => {
            setData(data); 
        })
        .catch(error => console.error('There was a problem with the fetch operation:', error));
    },[]);

    const getImageSrc = (image) => {
        if (windowWidth < 576) return image.mobile;
        if (windowWidth >= 576 && windowWidth < 768) return image.tablet; 
        if (windowWidth >= 768 && windowWidth < 992) return image.desktop; 
        return image.desktop; 
    }
    
    return (
        <section className={styles.cardSection}>
            {
                data.map((item, index) => (
                    <article key={index} className={styles.cardMain}>
                        <div className={styles.cartImage}>
                            <img className={styles.img} src={getImageSrc(item.image)} alt={item.name} />
                            <Button className={styles.btn} />
                        </div>
                        <article className={styles.article}>
                            <p className={styles.name}>{item.category}</p>
                            <h2 className={styles.title}>{item.name}</h2>
                            <p className={styles.price}>${item.price.toFixed(2)}</p>
                        </article>
                    </article>
                ))
            }
        </section>
    )
}
