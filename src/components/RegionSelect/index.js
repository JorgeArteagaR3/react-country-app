import React from "react";
import { useEffect, useState } from "react";
import "./RegionSelect.css";
import { Results } from "../Results/index";
import { SearchCountry } from "../SearchCountry/index";
import { CountrySkeleton } from "../CountrySkeleton";
const RegionSelect = ({ darkMode }) => {
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

    useEffect(() => {
        requestCountries();
    }, []);
    async function requestCountries() {
        setLoading(true);
        const res = await fetch("https://restcountries.com/v3.1/lang/eng");
        const data = await res.json();
        setCountries(data);
        setLoading(false);
    }
    async function requestCountriesByName() {
        if (name.length < 2) return;
        setLoading(true);
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await res.json();
        if (res.status === 404) {
            setLoading(false);
            setCountries([]);
        } else {
            setCountries(data);
            setLoading(false);
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
        <div className={darkMode ? "country-options dark" : "country-options"}>
            <SearchCountry setName={setName} darkMode={darkMode} />
            <article className="region-container">
                <select
                    className={darkMode && "dark-light"}
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
                {loading && (
                    <>
                        <CountrySkeleton />
                        <CountrySkeleton />
                        <CountrySkeleton />
                        <CountrySkeleton />
                        <CountrySkeleton />
                        <CountrySkeleton />
                        <CountrySkeleton />
                        <CountrySkeleton />
                        <CountrySkeleton />
                        <CountrySkeleton />
                        <CountrySkeleton />
                        <CountrySkeleton />
                        <CountrySkeleton />
                        <CountrySkeleton />
                        <CountrySkeleton />
                    </>
                )}
                {!loading && countries.length > 0 && (
                    <Results darkMode={darkMode} countries={countries} />
                )}
                {!loading && countries.length === 0 && <p>No matches found</p>}
            </div>
        </div>
    );
};

export { RegionSelect };
