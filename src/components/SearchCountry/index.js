import React from "react";
import "./SearchCountry.css";
const SearchCountry = ({ setName, darkMode }) => {
    return (
        <article className="search-input-container">
            <div
                className={
                    darkMode ? "search-input dark-light" : "search-input"
                }
            >
                <svg
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.9782 22.525C17.1132 25.6206 11.4557 25.3769 7.87291 21.7941C4.02869 17.9499 4.02869 11.7172 7.87291 7.87296C11.7171 4.02874 17.9499 4.02874 21.7941 7.87296C25.3769 11.4558 25.6205 17.1133 22.525 20.9782L30.0436 28.4969C30.4708 28.924 30.4708 29.6165 30.0436 30.0437C29.6165 30.4708 28.924 30.4708 28.4968 30.0437L20.9782 22.525ZM9.41971 20.2473C6.42976 17.2574 6.42976 12.4097 9.41971 9.41976C12.4097 6.4298 17.2573 6.4298 20.2473 9.41976C23.235 12.4075 23.2372 17.2503 20.2539 20.2407C20.2517 20.2429 20.2495 20.2451 20.2473 20.2473C20.2451 20.2495 20.2429 20.2517 20.2407 20.2539C17.2502 23.2373 12.4075 23.2351 9.41971 20.2473Z"
                        fill="black"
                        fillOpacity="0.46"
                    />
                </svg>

                <input
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    placeholder="Search for a country..."
                    type="text"
                    className={darkMode && "dark-light"}
                />
            </div>
        </article>
    );
};

export { SearchCountry };
