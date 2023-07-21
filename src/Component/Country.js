import React, { useEffect, useState } from 'react';
import CountryHome from './CountryHome';
import './country.css'
const Country = () => {
    const [Country, setCountry] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])
    return (
        <div className='country'>
            {
                Country.map(Desh => <CountryHome key={Desh.name.common} Country={Desh}></CountryHome>)
            }
        </div >
    );
};

export default Country;