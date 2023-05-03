import SearchBar from "../SearchBar/SearchBar";
import { Link, useNavigate } from 'react-router-dom';

export default function Nav(props) {
    const navigate = useNavigate();
    const { onSearch } = props;

   

    return (
        <div >
            <Link to='/home'>
                <button>Home</button>
            </Link>
            <br/>
            <Link to='/activity'>
                <button>Create Activity</button>
            </Link>
            <Link to='/about'>
                <button>About</button>
            </Link>
            <br/>
            <SearchBar onSearch={onSearch} />
        </div>
    )
}