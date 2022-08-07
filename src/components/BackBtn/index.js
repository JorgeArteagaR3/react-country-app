import React from "react";
import "./BackBtn.css";
import { useNavigate } from "react-router-dom";

const BackBtn = ({ darkMode }) => {
    const navigate = useNavigate();
    return (
        <div
            className={darkMode ? "button-container dark" : "button-container"}
        >
            <button
                onClick={() => navigate(-1)}
                className={darkMode && "dark-light"}
                type="button"
            >
                <svg viewBox="0 0 32 32" fill="none">
                    <path
                        d="M10 6L2 16L10 26M2 16H30"
                        stroke={darkMode ? "white" : "black"}
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
