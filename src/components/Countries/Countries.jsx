import { useState } from 'react';
import { use } from "react";
import './Countries.css';
import Country from "../Country/Country";

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]); 

    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const countriesData = use(countriesPromise);


    const countries = countriesData.countries;
    return (
        <div >
            <h1>In the Countries: {countries.length}</h1>
            <h3>Total Country Visited: {visitedCountries.length} </h3>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>

            <div className="Countries">
                {countries.map(country => (
                <Country
                    handleVisitedCountries={handleVisitedCountries}
                    key={country.cca3.cca3}
                    country={country}
                ></Country>
            ))}
            </div>
        </div>
    );
};

export default Countries;