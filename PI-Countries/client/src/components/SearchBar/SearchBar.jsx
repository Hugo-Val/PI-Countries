import { useState } from 'react';




export default function SearchBar({ onSearch }) {
    const [city, setCity] = useState('');
    
    const handleInputChange = (e) => {
        e.preventDefault();
        setCity(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(city);
        setCity('');
    }

    return (
        <>
            <div>   
                <input
                    type="search"
                    name='search'
                    placeholder="Search..."
                    value={city}
                    onChange={handleInputChange}
                />
                <button onClick={handleSubmit}>Search</button>
            </div>
        </>
    )


}