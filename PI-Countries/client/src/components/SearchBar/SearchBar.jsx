import { useState } from 'react';

export default function SearchBar({ onSearch }) {
    const [city, setCity] = useState('');
    
    const handleInputChange = (e) => {
        e.preventDefault();
        setCity(e.target.value);
    }

    return (
        <>
            <div>   
                <input
                    type="text"
                    placeholder="Search..."
                    value={city}
                    onChange={handleInputChange}
                />
                <button onClick={() => onSearch(city)}>Search</button>
            </div>
        </>
    )


}