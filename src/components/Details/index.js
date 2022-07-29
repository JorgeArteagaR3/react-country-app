import React, { useState, useEffect } from "react";
import "./Details.css";
import { useParams } from "react-router-dom";
import { BackBtn } from "../BackBtn";
import { numberWithCommas } from "../../services/numberWithCommas";
import { DetailsSkeleton } from "../DetailsSkeleton";
const Details = () => {
    const { name } = useParams();
    const [country, setCountry] = useState(null);

    useEffect(() => {
        requestCountry();
    }, []);
    console.log(country);

    async function requestCountry() {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await res.json();
        setCountry(data[0]);
    }
    if (!country) return <DetailsSkeleton />;
    const currency = Object.values(country.currencies);
    const currencies = currency
        .map((item) => item.name)
        .toString()
        .replaceAll(",", ", ");
    const lang = Object.values(country.languages);
    const language = lang.toString().replaceAll(",", ", ");
    return (
        <>
            <BackBtn></BackBtn>
            <div className="country-info">
                <img
                    alt={country.name.common}
                    className="flag"
                    src={country.flags.png}
                />
                <article className="country-details">
                    <div className="main-details">
                        <h2 className="country-name">{country.name.common}</h2>
                        <p className="country-detail">
                            Native name: <span>{country.name.official}</span>
                        </p>
                        <p className="country-detail">
                            Population:{" "}
                            <span>{numberWithCommas(country.population)}</span>
                        </p>
                        <p className="country-detail">
                            Region: <span>{country.region}</span>
                        </p>
                        <p className="country-detail">
                            Sub Region: <span>{country.subregion}</span>
                        </p>
                        <p className="country-detail">
                            Capital: <span>{country.capital[0]}</span>
                        </p>
                    </div>
                    <div className="more-details">
                        <p className="country-detail">
                            Top Level Domain: <span>{country.tld[0]}</span>
                        </p>
                        <p className="country-detail">
                            Currencies: <span>{currencies}</span>
                        </p>
                        <p className="country-detail">
                            Languages: <span>{language}</span>
                        </p>
                    </div>
                    <div className="near-countries">
                        <p className="country-detail">Border Countries:</p>
                        <div className="border-countries">
                            {country.borders ? (
                                country.borders.map((border) => (
                                    <a href="/" key={border}>
                                        {border}
                                    </a>
                                ))
                            ) : (
                                <p className="no-borders-found">
                                    No country borders found
                                </p>
                            )}
                        </div>
                    </div>
                </article>
            </div>
        </>
    );
};

export { Details };
