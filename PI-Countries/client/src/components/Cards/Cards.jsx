import Card from '../Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import Paginate from '../Paginate/Paginate';
import { useEffect } from 'react';
import { getAllCountries, order } from '../../redux/actions/actions';
import styles from './Cards.module.css';
let suma = 0;
let countriesFilter;
export default function Cards() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCountries());
    }, [dispatch]);


    const { countries } = useSelector(state => state);
    const { currentPage } = useSelector(state => state);
    const { countriesByName } = useSelector(state => state);

    
    console.log(countriesByName.length, "countriesByName");
    
    if (countriesByName.length > 0) {
        countriesFilter = countriesByName;
        
    } else {
        countriesFilter = countries;
        
    }
    let desde = (currentPage - 1) * 4;
    let hasta = desde + 10;
    
    let countriesPage = Math.floor(countriesFilter.length / 10);
    let viewCountries = countriesFilter?.slice(desde, hasta);

    console.log(viewCountries, "viewCountries");
    
    
    const handleOrder = (e) => {
        e.preventDefault();
        return dispatch(order(e.target.value));
    }

    return (
        
        <div>
            <div >
                <div className={styles.Header}>
                    <h1>Countries</h1>
                </div>
                    <Paginate cantPages={countriesPage} />
                <div className={styles.SelOrd}>
                    <select onClick={handleOrder}>
                        <option value="order" disabled="disabled">Order by</option>
                        <option value="asc">A-Z</option>
                        <option value="desc">Z-A</option>
                        <option value="population_asc">Population Asc</option>
                        <option value="population_desc">Population Desc</option>
                    </select>
                </div>
                <div className={styles.Countries}>
                    {
                        viewCountries.map((country) => (
                            // console.log(country.name, "name"),
                            <Card
                                key={suma++}
                                id={country.id}
                                name={country.name}
                                image={country.image}
                                continent={country.continent}

                            />
                        )) 
                    }
                </div>   
            </div>
        </div>
    )
}

