import { useState } from 'react';
import { use } from "react";
import './Countries.css';
import Country from "../Country/Country";

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleAddVisitedFlag = (flag) => {
        const newVisitedFlags =[...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);

    }

    const countriesData = use(countriesPromise);


    const countries = countriesData.countries;
    return (
        <div >
            <h1>In the Countries: {countries.length}</h1>
            <h3>Total Country Visited: {visitedCountries.length} </h3>
            <h3>Total Visited Flags: {visitedFlags.length} </h3>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>

            <div className='visited-flag-container'>
                visited Flags: {
                    visitedFlags.map((flag, index) => <img key={index}  src={flag}  />)
                }
            </div>

            <div className="Countries">
                {countries.map(country => (
                    <Country
                        key={country.cca3.cca3}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                        handleAddVisitedFlag={handleAddVisitedFlag}
                    ></Country>
                ))}
            </div>
        </div>
    );
};

export default Countries;