import React, {useRef} from 'react';
import AppNavbar from "../Components/AppNavbar.jsx";
import Header from "../Components/Header.jsx";
import ImportantLinks from "../Components/ImportantLinks.jsx"
import About from "../Components/About.jsx";
import Projects from "../Components/Projects.jsx";


const HomePage = () => {

    return (
        <>

            <AppNavbar />
            <Header />
            <ImportantLinks />
            <About />
            <Projects />

        </>

    );
};

export default HomePage;