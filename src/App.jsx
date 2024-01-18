import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import About from "./Components/About.jsx";
import DetailPage from "./Pages/DetailPage.jsx";


const App = () => {

    return (
        <div className={"bg-[#141A2A] font-roboto max-w-screen-2xl mx-auto text-[#ffffff]"}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={ <HomePage /> } />
                    <Route path={"/details/:id"} element={<DetailPage/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;