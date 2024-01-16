import React, {useRef} from 'react';
import AppNavbar from "../Components/AppNavbar.jsx";
import Header from "../Components/Header.jsx";
import ImportantLinks from "../Components/ImportantLinks.jsx"
import {motion} from "framer-motion"
import About from "../Components/About.jsx";


const HomePage = () => {
    const scrollRef = useRef(null)
    return (
        <div ref={scrollRef} style={{ overflow: "scroll" }}>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ root: scrollRef }}>
            <AppNavbar />
            <Header />
            <ImportantLinks />
            <About />
            </motion.div>
        </div>

    );
};

export default HomePage;