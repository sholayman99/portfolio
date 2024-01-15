import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={ <HomePage /> } />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;