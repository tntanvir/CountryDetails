import React from 'react';
import { Link } from 'react-router-dom';

const CountryHome = (props) => {
    const Country = props.Country
    // console.log(Country);
    const { name, flags } = Country;
    return (
        <div style={{ border: '2px solid black', width: "50%", flexdirection: 'column', alignitems: 'center', margin: "2px", padding: '2px', borderRadius: '10px' }}>
            <img style={{ width: '200px' }} src={flags.png} alt="" />
            <h2>{name.common}</h2>
            <Link to={'/country/' + name.common}>
                <button>
                    More Information
                </button>
            </Link>
        </div>
    );
};

export default CountryHome;