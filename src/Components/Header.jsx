import React from 'react';
import {TypeAnimation} from "react-type-animation";
import img from "../assets/images/me.jpg"
import SocialLink from "./SocialLink.jsx";
import {motion} from "framer-motion"

const Header = () => {
    return (
       <>
           <section id={"#"} className={"flex items-center justify-center gap-5 lg:h-screen  h-[55vh] flex-col"}>
               <motion.img
                   animate={{
                       scale: [1, 2, 2, 1, 1],
                       rotate: [0, 0, 270, 270, 0],
                   }}
                   transition={{
                       duration: 2,
                       ease: "easeInOut",
                       times: [0, 0.2, 0.5, 0.8, 1],
                       repeatDelay: 1
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
                   className={"lg:text-[2.5rem] md:text-[2rem] text-[1.6rem] inline-block text-base"}
                   repeat={Infinity}
               />

           </section>
           <SocialLink />
       </>

    );
};

export default Header;