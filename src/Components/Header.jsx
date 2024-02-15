import React from 'react';
import {TypeAnimation} from "react-type-animation";
import img from "../assets/images/me.png"
import SocialLink from "./SocialLink.jsx";
import {motion} from "framer-motion"

const Header = () => {
    return (
       <>
           <section id={"#"} className={"flex items-center justify-center gap-5 lg:h-screen  h-[70vh] flex-col"}>
               <motion.img
                   initial={{ opacity: 0, scale: 0.5 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{
                       duration: 0.8,
                       delay: 0.5,
                       ease: [0, 0.71, 0.2, 1.01]
                   }}
                   src={img} alt={""} className={"lg:w-48 md:w-48 w-32 rounded-full"} />
               <h2 className={"lg:text-3xl md:text-3xl text-xl font-genos"}>MD.SHOLAYMAN</h2>
               <TypeAnimation
                   sequence={[
                       "Full-Stack Developer",
                       1200,
                       "Mern-Stack Developer",
                       1200,
                       'Aspire To Be A Leader',
                       1200,
                       'Next Gen Developer',
                       1200
                   ]}
                   wrapper="span"
                   speed={40}
                   className={"lg:text-[2.5rem] md:text-[2rem] text-[1.6em] inline-block text-base"}
                   repeat={Infinity}
               />

           </section>
           <SocialLink />
       </>

    );
};

export default Header;