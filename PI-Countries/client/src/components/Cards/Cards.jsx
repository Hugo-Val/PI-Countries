import Card from '../Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import Paginate from '../Paginate/Paginate';
import { useEffect } from 'react';
import { getAllCountries } from '../../redux/actions/actions';

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
    console.log(countries.length);
    let viewCountries = countries?.slice(desde, hasta);
    console.log(viewCountries, countries);

    return (
        
        <div>
            <div>
                <h1>Countries</h1>
                
                
                {
                    viewCountries.map((country) => (
                        <Card
                            key={country.id}
                            name={country.name}
                            image={country.image}
                            continent={country.continent}

                        />
                    )) 
                }
            </div>
            {/* <Paginate cantPages={countriesPage} /> */}
        </div>
    )
}

