import { Link } from 'react-router-dom';
import styles from './Card.module.css';

export default function Card(props) {
    const { name, image, continent, id } = props;
    
    return (
        <div className={styles.Card}>
            <Link to={`/detail/${id}`}>
                
                <h1 className={styles.Names}>{name}</h1>
                
                
                <img className={styles.Img} src={image} alt={name} />
                <br />
                <h3 className={styles.Continent}>{continent}</h3>
            </Link>
        </div>
    )
}



