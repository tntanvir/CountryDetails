import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const [Country, setCountry] = useState({})
    const [Name, setName] = useState();
    const [Flag, setFlag] = useState()
    const { CountryName } = useParams()
    // console.log(CountryName);

    useEffect(() => {
        async function data() {
            try {
                const dataCountry = await axios.get(`https://restcountries.com/v3.1/name/${CountryName}`);
                console.log(dataCountry.data[0].flags.png);
                setCountry(dataCountry.data[0])
                setName(dataCountry.data[0]["name"]["common"])
                setFlag(dataCountry.data[0]["flags"]["png"])
                // setRegion(dataCountry.data[0].region)
                console.log(dataCountry.data);
            } catch (error) {
                console.log(error);
            }
        }
        data();
    }, []);
    return (
        <div>
            {console.log(Name, Flag)}
            <h1>Country: {Name}</h1>
            <img src={Flag} alt="Flag" />
            <li>Area:{Country.area}</li>
            <li>Region:{Country.region}</li>
            <li>Population:{Country.population}</li>
        </div>
    );
};

export default CountryDetail