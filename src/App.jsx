import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";

const App = () => {
    return (
        <div className={"bg-[#141A2A] max-w-7xl mx-auto"}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={ <HomePage /> } />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;