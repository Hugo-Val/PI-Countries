import { Link } from 'react-router-dom';
import './Card.css';

export default function Card(props) {
    const { name, image, continent, id, } = props;
    return (
        <div>
            <Link to={`/countries/${id}`}>
                <h1>{name}</h1>
                <img src={image} alt={name} />
                <h3>{continent}</h3>
            </Link>
        </div>
    )
}



