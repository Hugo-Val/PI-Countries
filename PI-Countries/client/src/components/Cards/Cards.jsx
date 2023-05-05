import Card from '../Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import Paginate from '../Paginate/Paginate';
import { useEffect } from 'react';
import { getAllCountries, order } from '../../redux/actions/actions';
import styles from './Cards.module.css';

export default function Cards() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCountries());
    }, [dispatch]);


    const { countries } = useSelector(state => state);
    const { currentPage } = useSelector(state => state);
const { countriesByName } = useSelector(state => state);

    let desde = (currentPage - 1) * 4;
    let hasta = desde + 10;
    let countriesPage = Math.floor(countries.length / 10);
    let viewCountries = countries?.slice(desde, hasta);
    console.log(countriesByName, 'countriesByName');
    const handleOrder = (e) => {
        // e.preventDefault();
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
                            <Card
                                key={country.id}
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

