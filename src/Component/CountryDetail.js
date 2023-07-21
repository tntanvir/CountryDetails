import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const [Country, setCountry] = useState({})
    const { CountryName } = useParams()
    // console.log(CountryName);

    useEffect(() => {
        async function data() {
            try {
                const dataCountry = await axios.get(`https://restcountries.com/v3.1/name/${CountryName}`);
                // console.log(dataCountry.data);
                setCountry(dataCountry.data[0])
            } catch (error) {
                console.log(error);
            }
        }
        data();
    }, []);
    // console.log(Country);
    const { name } = Country;
    return (
        <div>
            {console.log(name)}
            <li>{Country.area}</li>
            <li>{Country.area}</li>
        </div>
    );
};

export default CountryDetail;