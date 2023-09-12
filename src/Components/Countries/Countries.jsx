import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountry, setVisitedCountry] = useState([]);

    const handleVisitedCountry = country => {
        const newVisitedCountry = [...visitedCountry, country];
        setVisitedCountry(newVisitedCountry);
    }

    useEffect(()=> {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h3>Rest Countries: {countries.length} </h3>
            <div>
                <h4>Visited Countries: {visitedCountry.length} </h4>
                <ul>
                    {
                        visitedCountry.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="country-container">
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        handleVisitedCountry={handleVisitedCountry}
                        country={country}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;