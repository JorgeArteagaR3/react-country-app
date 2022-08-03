import React from "react";
import "./CountrySkeleton.css";

const CountrySkeleton = () => {
    return (
        <div className="country">
            <div className="country-img skeleton"></div>
            <div className="single-country">
                <h2 className="country-main-name skeleton skeleton-name"></h2>
                <p className="country-detail">
                    Population:{" "}
                    <span className="skeleton skeleton-detail"></span>
                </p>
                <p className="country-detail">
                    Region: <span className="skeleton skeleton-detail"></span>
                </p>
                <p className="country-detail">
                    Capital: <span className="skeleton skeleton-detail"></span>
                </p>
            </div>
        </div>
    );
};

export { CountrySkeleton };
