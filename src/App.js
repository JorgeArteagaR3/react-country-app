import "./App.css";
import React from "react";
import { Header } from "./components/Header";
import { RegionSelect } from "./components/RegionSelect";
import { Details } from "./components/Details/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<RegionSelect />} />
                <Route path="/country/:name" element={<Details />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
