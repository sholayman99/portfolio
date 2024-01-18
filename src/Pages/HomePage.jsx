import React, {useEffect, useRef} from 'react';
import AppNavbar from "../Components/AppNavbar.jsx";
import Header from "../Components/Header.jsx";
import ImportantLinks from "../Components/ImportantLinks.jsx"
import About from "../Components/About.jsx";
import Projects from "../Components/Projects.jsx";
import ProjectStore from "../Store/ProjectStore.js";


const HomePage = () => {

    const {ProjectListRequest} = ProjectStore()

    useEffect(() => {
        (async()=>{
            await ProjectListRequest()
        })()
    }, []);

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