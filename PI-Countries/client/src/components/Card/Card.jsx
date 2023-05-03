import { Link } from 'react-router-dom';
import './Card.css';

export default function Card(props) {
    const { name, image, continent, id } = props;
    console.log(props, 'props');
    return (
        <div>
            <Link to={`/detail/${id}`}>
                <h6>{id}</h6>
                <h1>{name}</h1>
                <img src={image} alt={name} />
                <h3>{continent}</h3>
            </Link>
        </div>
    )
}



