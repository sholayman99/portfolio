import React, {useEffect, useRef} from 'react';
import AppNavbar from "../Components/AppNavbar.jsx";
import Header from "../Components/Header.jsx";
import About from "../Components/About.jsx";
import Projects from "../Components/Projects.jsx";
import ProjectStore from "../Store/ProjectStore.js";
import Contact from "../Components/Contact.jsx";



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
            <About />
            <Projects />
            <Contact />

        </>

    );
};

export default HomePage;