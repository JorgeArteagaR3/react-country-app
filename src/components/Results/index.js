import React from "react";
import { Country } from "../Country";

const Results = ({ countries }) => {
    return (
        <>
            {countries.map((nation) => {
                return (
                    <Country
                        key={nation.population}
                        img={nation.flags.png}
                        population={nation.population}
                        region={nation.region}
                        capital={nation.capital}
                        name={nation.name.common}
                    />
                );
            })}
        </>
    );
};

export { Results };
