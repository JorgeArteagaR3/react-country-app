import React from "react";
import { BackBtn } from "../BackBtn";
import "./DetailsSkeleton.css";
const DetailsSkeleton = () => {
    return (
        <>
            <BackBtn />
            <div className="country-info">
                <div className="img-skeleton "></div>
                <article className="country-details">
                    <div className="main-details">
                        <h2 className="country-name">
                            <div className="country-name-skeleton borders"></div>
                        </h2>
                        <p className="country-detail">
                            Native name:
                            <div className="country-detail-skeleton borders"></div>
                        </p>
                        <p className="country-detail">
                            Population:{" "}
                            <span>
                                {" "}
                                <div className="country-detail-skeleton borders"></div>
                            </span>
                        </p>
                        <p className="country-detail">
                            Region:{" "}
                            <span>
                                {" "}
                                <div className="country-detail-skeleton borders"></div>
                            </span>
                        </p>
                        <p className="country-detail">
                            Sub Region:{" "}
                            <span>
                                {" "}
                                <div className="country-detail-skeleton borders"></div>
                            </span>
                        </p>
                        <p className="country-detail">
                            Capital:{" "}
                            <span>
                                {" "}
                                <div className="country-detail-skeleton borders"></div>
                            </span>
                        </p>
                    </div>
                    <div className="more-details">
                        <p className="country-detail">
                            Top Level Domain:{" "}
                            <div className="country-detail-skeleton borders"></div>
                        </p>
                        <p className="country-detail">
                            Currencies:{" "}
                            <div className="country-detail-skeleton borders"></div>
                        </p>
                        <p className="country-detail">
                            Languages:{" "}
                            <div className="country-detail-skeleton borders"></div>
                        </p>
                    </div>
                    <div className="near-countries">
                        <p className="country-detail">Border Countries:</p>
                        <div className="border-countries">
                            <div className="country-detail-skeleton borders"></div>
                            <div className="country-detail-skeleton borders"></div>
                            <div className="country-detail-skeleton borders"></div>
                        </div>
                    </div>
                </article>
            </div>
        </>
    );
};

export { DetailsSkeleton };
