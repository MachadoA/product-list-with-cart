import data from '../../../../public/data.json';
import  Item  from './Item';

import styles from './Card.module.css';


export default function Card(){
    return (
        <section className={styles.cardSection}>
            {data.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </section>
    )
}
