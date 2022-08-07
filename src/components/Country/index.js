import React from "react";
import "./Country.css";
import { Link } from "react-router-dom";
import { numberWithCommas } from "../../services/numberWithCommas";
const Country = ({ img, population, region, capital, name, darkMode }) => {
    return (
        <Link
            to={`/country/${name}`}
            className={darkMode ? "country dark-light" : "country"}
        >
            <img className="country-img" src={img} alt={name} />
            <div className="single-country">
                <h2 className="country-main-name">{name}</h2>
                <p className="country-detail">
                    Population: <span>{numberWithCommas(population)}</span>
                </p>
                <p className="country-detail">
                    Region: <span>{region}</span>
                </p>
                <p className="country-detail">
                    Capital: <span>{capital}</span>
                </p>
            </div>
        </Link>
    );
};

export { Country };
