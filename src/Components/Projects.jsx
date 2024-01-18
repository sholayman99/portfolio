import React from 'react';
import {motion} from "framer-motion";
import ProjectStore from "../Store/ProjectStore.js";
import {Typography} from "@material-tailwind/react";
import {Link} from "react-router-dom"


const Projects = () => {

    const {ProjectList} = ProjectStore();

    if(ProjectList===null){
        return <h2> Loading.... </h2>
    }else{
        return (
            <section id={"projects"} className={"lg:py-24 py-8 flex  items-center justify-center px-6  flex-col gap-4 "}>
                <div className={"flex items-center justify-center lg:w-[60%]  flex-col gap-4 lg:gap-6"}>
                    <motion.h2 initial={{x:-200}}   transition={{ duration: 1.3,ease:"easeOut"}} whileInView={{x:0}}
                               className={"title-text lg:text-4xl md:text-4xl text-2xl"}>PROJECTS</motion.h2>
                    <div className={"w-8 h-1 rounded-xl bg-[#ffffff]"}></div>
                    <p className={"text-gray-400 font-[400] text-center lg:text-xl md:text-lg text-sm"}>Here you will
                        find some of the personal and clients projects that I created with each project containing
                        its own case study.</p>
                </div>
                 <motion.div initial={{y:120}} transition={{ duration: 1.2,ease:"easeIn"}} whileInView={{y:0}}
                             className={"lg:py-20 py-10 grid lg:grid-cols-2 grid-cols-1 gap-5"}>
                     {
                         ProjectList.map((item,i)=>{
                             return(
                                 <Link className={"transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:shadow"} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} key={i} to={`/details/${item['_id']}`}>
                                     <figure  className="relative h-64 md:h-96 lg:h-96 w-full">
                                         <img
                                             className="h-full w-full rounded-xl object-cover object-center"
                                             src={item['cover']}
                                             alt="nature image"
                                         />
                                         <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                                             <div>
                                                 <Typography className={"lg:text-xl md:text-xl font-semibold text-sm"} color="blue-gray">
                                                     {item['title']}
                                                 </Typography>
                                                 <Typography color="gray" className="mt-2 text-xs md:text-[15px] lg:text-[15px] font-normal">
                                                     {item['shortDes']}
                                                 </Typography>
                                             </div>
                                         </figcaption>
                                     </figure>
                                 </Link>
                             )
                         })
                     }
                 </motion.div>
            </section>
        );
    }
};

export default Projects;