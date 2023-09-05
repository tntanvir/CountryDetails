import React from "react";
import { Link } from "react-router-dom";

const CountryHome = ({ country }) => {
  const { name, flags } = country;

  return (
    <div className="country">
      <img src={flags.png} alt={name} />
      <h2>{name.common}</h2>
      <Link to={"/country/" + name.common}>
        <button>More Information</button>
      </Link>
    </div>
  );
};

export default CountryHome;
