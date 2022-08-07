import "./App.css";
import React, { useState } from "react";
import { Header } from "./components/Header";
import { RegionSelect } from "./components/RegionSelect";
import { Details } from "./components/Details/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <BrowserRouter>
            <Header setDarkMode={setDarkMode} darkMode={darkMode} />
            <Routes>
                <Route
                    path="/"
                    element={<RegionSelect darkMode={darkMode} />}
                />
                <Route
                    path="/country/:name"
                    element={<Details darkMode={darkMode} />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
