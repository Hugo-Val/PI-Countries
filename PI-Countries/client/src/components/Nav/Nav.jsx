import SearchBar from "../SearchBar/SearchBar";
import { Link } from 'react-router-dom';


export default function Nav({onSearch}) {
    
    
    

   

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