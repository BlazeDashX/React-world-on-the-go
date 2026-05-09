import { use } from "react";
import './Countries.css';
import Country from "../Country/Country";

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    return (
        <div >
            <h1>In the Countries: {countries.length}</h1>

            <div className="Countries">
                {countries.map(country => (
                <Country
                    key={country.cca3.cca3}
                    country={country}
                ></Country>
            ))}
            </div>
        </div>
    );
};

export default Countries;