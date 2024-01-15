import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";

const App = () => {
    return (
        <div className={"bg-[#141A2A] font-roboto max-w-7xl mx-auto text-[#e5e7eb]"}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={ <HomePage /> } />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;