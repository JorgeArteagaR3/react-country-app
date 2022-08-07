import React from "react";
import { Country } from "../Country";

const Results = ({ countries, darkMode }) => {
    return (
        <>
            {countries.map((nation) => {
                return (
                    <Country
                        darkMode={darkMode}
                        key={nation.name.common}
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
