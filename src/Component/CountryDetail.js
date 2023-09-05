import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CountryDetail = () => {
  const { name } = useParams();

  const [country, setCountry] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function data() {
      try {
        const countries = await axios.get(
          `https://restcountries.com/v3.1/name/${name}`
        );
        setCountry(countries.data[0]);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    data();
  }, []);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="country">
      <img src={country.flags?.png} alt={country.name.common} />
      <h2>{country.name.common}</h2>
      <p>
        <b>Area: </b>
        {country.area}
      </p>
      <p>
        <b>Region: </b>
        {country.region}
      </p>
      <p>
        <b>Population: </b>
        {country.population}
      </p>
      <Link to="/country">
        <button style={{ padding: ".7rem 1.4rem" }}>Go Back</button>
      </Link>
    </div>
  );
};

export default CountryDetail;
