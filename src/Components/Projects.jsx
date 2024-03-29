import React from 'react';
import {motion} from "framer-motion";
import ProjectStore from "../Store/ProjectStore.js";
import {Typography} from "@material-tailwind/react";
import {Link} from "react-router-dom"
import ProjectSkeleton from "../Skeleton/ProjectSkeleton.jsx";



const Projects = () => {

    const {ProjectList} = ProjectStore();

    if(ProjectList===null){
        return <ProjectSkeleton />
    }else{
        return (
            <section id={"projects"} className={"lg:py-20 md:py-14 py-8 flex  items-center justify-center px-6  flex-col gap-4 "}>
                <div className={"flex items-center justify-center lg:w-[60%]  flex-col gap-4 lg:gap-6"}>
                    <motion.h2 initial={{x:-200}}   transition={{ duration: 1.3,ease:"easeOut"}} whileInView={{x:0}}
                               className={"title-text lg:text-4xl md:text-4xl text-2xl"}>PROJECTS</motion.h2>
                    <div className={"w-10 h-0.5 rounded-xl bg-[#ffffff]"}></div>
                    <p className={"text-gray-400 font-[400] text-center lg:text-xl md:text-lg text-sm"}>Here you will
                        find some of the personal and clients projects that I created with each project containing
                        its own case study.</p>
                </div>
                 <motion.div initial={{y:120}} transition={{ duration: 1.2,ease:"easeOut"}} whileInView={{y:0}}
                             className={"lg:py-20 py-10 lg:px-5 md:px-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8"}>
                     {
                         ProjectList.slice(0,6).map((item,i)=>{
                             return(
                                 <Link key={i} to={`/details/${item['_id']}`}
                                     className={"transition transform hover:-translate-y-2 " +
                                         "motion-reduce:transition-none motion-reduce:hover:transform-none hover:shadow"} >
                                     <figure  className="relative h-40 md:h-60 lg:h-60 w-full">
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
                <motion.button className={"hover:bg-opacity-20 bg-white bg-opacity-5 font-bold " +
                    "lg:px-10 lg:text-lg md:text-[15px] text-[12px] md:px-8 md:py-4 px-6 py-3 lg:py-4 rounded-xl uppercase"}
                               whileHover={{ scale: 1.1 }}
                               whileTap={{ scale: 0.9 }}
                               transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                    <Link to={"/all-project"}>Show All</Link>
                </motion.button>
            </section>
        );
    }
};

export default Projects;