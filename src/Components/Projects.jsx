import React from 'react';
import {motion} from "framer-motion";

const Projects = () => {
    return (
        <section id={"projects"} className={"lg:py-20 md:py-20 py-10 flex  items-center justify-center px-10  flex-col gap-4 "}>
            <div className={"flex items-center justify-center lg:w-[60%]  flex-col gap-4 lg:gap-6"}>
                <motion.h2 initial={{x:-200}}   transition={{ duration: 1.3,ease:"easeOut"}} whileInView={{x:0}}
                           className={"title-text lg:text-4xl md:text-4xl text-2xl"}>PROJECTS</motion.h2>
                <div className={"w-8 h-1 rounded-xl bg-[#ffffff]"}></div>
                <p className={"text-gray-400 font-[400] text-center lg:text-xl md:text-lg text-sm"}>Here you will find more information about me, what I do,
                    and my current skills mostly in terms of programming and technology</p>
            </div>
        </section>
    );
};

export default Projects;