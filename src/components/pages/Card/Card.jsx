// import data from '../../../../public/data.json';
import data from '../../data.json'
import  Item  from './Item';

import styles from './Card.module.css';


export default function Card(){
    return (
        <>
            <h1 className={styles.titleMain}>Desserts</h1>
            <section className={styles.cardSection}>
                {data.map((item, index) => (
                    <Item key={index} item={item} />
                ))}
            </section>
        </>
    )
}
