import React from "react";
import { useEffect, useState } from "react";
import "./RegionSelect.css";
import { Results } from "../Results/index";
import { SearchCountry } from "../SearchCountry/index";
const RegionSelect = () => {
    const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
    const [region, setRegion] = useState("");
    const [loading, setLoading] = useState(false);
    const [countries, setCountries] = useState([]);
    const [name, setName] = useState("");
    useEffect(() => {
        requestCountriesByRegion();
    }, [region]);
    useEffect(() => {
        requestCountriesByName();
    }, [name]);

    async function requestCountriesByName() {
        if (name.length < 2) return;
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await res.json();

        if (res.status === 404) {
            setCountries([]);
        } else {
            setCountries(data);
        }
    }

    async function requestCountriesByRegion() {
        if (!region.length) return;
        setLoading(true);
        const res = await fetch(
            `https://restcountries.com/v3.1/region/${region}`
        );
        const data = await res.json();
        setCountries(data);
        setLoading(false);
    }
    return (
        <div className="country-options">
            <SearchCountry setName={setName} />
            <article className="region-container">
                <select
                    title="regions"
                    name="regions"
                    onChange={(e) => {
                        setRegion(e.target.value);
                    }}
                >
                    <option value={region}>Filter by region</option>
                    {regions.map((region, index) => {
                        return (
                            <option key={index} value={region}>
                                {region}
                            </option>
                        );
                    })}
                </select>
            </article>
            <div className="country-container">
                {countries.length ? (
                    <Results countries={countries} />
                ) : (
                    <p className="error">No matches found</p>
                )}
            </div>
        </div>
    );
};

export { RegionSelect };
