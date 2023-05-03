import Card from '../Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import Paginate from '../Paginate/Paginate';
import { useEffect } from 'react';
import { getAllCountries, order } from '../../redux/actions/actions';

export default function Cards() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCountries());
    }, [dispatch]);


    const { countries } = useSelector(state => state);
    const { currentPage } = useSelector(state => state);


    let desde = (currentPage - 1) * 4;
    let hasta = desde + 10;
    let countriesPage = Math.floor(countries.length / 10);
    let viewCountries = countries?.slice(desde, hasta);
    
    const handleOrder = (e) => {
        // e.preventDefault();
        return dispatch(order(e.target.value));
    }

    return (
        
        <div>
            <div>
                <h1>Countries</h1>
                <select onClick={handleOrder}>
                    <option value="order" disabled="disabled">Order by</option>
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                    <option value="population_asc">Population Asc</option>
                    <option value="population_desc">Population Desc</option>
                </select>
                
                {
                    viewCountries.map((country) => (
                        <Card
                            id={country.id}
                            name={country.name}
                            image={country.image}
                            continent={country.continent}

                        />
                    )) 
                }
            </div>
            <Paginate cantPages={countriesPage} />
        </div>
    )
}

