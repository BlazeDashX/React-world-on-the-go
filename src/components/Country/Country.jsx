import { useState } from 'react';
import './Country.css';

const Country = ({ country, handleVisitedCountries }) => {
    const [visited, setVisited] = useState(false);

    const handleVisited = () => { 
        setVisited(visited ? false : true);
        handleVisitedCountries(country);
        // console.log('Visited: ', country.name.common);
    };   

    return (
        <div className={`Country ${visited ? 'Country-visited' : 'Country-not-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {
                country.area.area > 10000 ? "Big Country": "Small Country"   
            }</p>
            <button onClick={handleVisited}>
                {visited ? "Visited": "Not Visited"}
            </button>
            
        </div>
    );
};

export default Country;