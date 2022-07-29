import React from "react";
import "./BackBtn.css";
import { useNavigate } from "react-router-dom";

const BackBtn = () => {
    const navigate = useNavigate();
    return (
        <div className="button-container">
            <button
                onClick={() => navigate(-1)}
                className="go-back-btn"
                type="button"
            >
                <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 6L2 16L10 26M2 16H30"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                Back
            </button>
        </div>
    );
};

export { BackBtn };
