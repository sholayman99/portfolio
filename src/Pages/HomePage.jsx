import React, {useEffect} from 'react';
import AppNavbar from "../Components/AppNavbar.jsx";
import Header from "../Components/Header.jsx";
import About from "../Components/About.jsx";
import Projects from "../Components/Projects.jsx";
import ProjectStore from "../Store/ProjectStore.js";
import ContactForm from "../Components/ContactForm.jsx";
import Services from "../Components/Services.jsx";
import Footer from "../Components/Footer.jsx";



const HomePage = () => {

    const {ProjectListRequest,ToolsListRequest} = ProjectStore()

    useEffect(() => {
        (async()=>{
            await ProjectListRequest();
            await ToolsListRequest();

        })()
    }, []);

    return (
        <>

            <AppNavbar />
            <Header />
            <About />
            <Projects />
            <Services />
            <ContactForm />
            <Footer />

        </>

    );
};

export default HomePage;