import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ darkMode, setDarkMode }) => {
    return (
        <header className={darkMode && "dark-light"}>
            <h1>Where in the world?</h1>
            <Link
                to={"/"}
                className={
                    darkMode
                        ? "dark-mode-container dark-text"
                        : "dark-mode-container"
                }
                onClick={() => {
                    setDarkMode(!darkMode);
                }}
            >
                <svg
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M32 21.9144C29.075 23.0901 25.8689 23.3807 22.7801 22.7499C19.6913 22.1191 16.8561 20.5948 14.6269 18.3664C12.3976 16.138 10.8727 13.3039 10.2417 10.2163C9.61065 7.12873 9.9013 3.92382 11.0775 1C7.61376 2.39465 4.74317 4.95028 2.95787 8.22878C1.17257 11.5073 0.583748 15.3045 1.29234 18.9694C2.00094 22.6344 3.96281 25.9388 6.84166 28.3162C9.7205 30.6936 13.337 31.996 17.0712 32C20.2823 32.0001 23.4201 31.0397 26.0806 29.2423C28.7411 27.4449 30.8026 24.8928 32 21.9144Z"
                        stroke="black"
                        fill="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>

                <p>Dark Mode</p>
            </Link>
        </header>
    );
};

export { Header };
