import React from 'react';
import ProjectStore from "../Store/ProjectStore.js";
import {Link} from "react-router-dom";
import {Typography} from "@material-tailwind/react";
import {motion} from "framer-motion";
import ProjectSkeleton from "../Skeleton/ProjectSkeleton.jsx";

const AllProject = () => {
    const {ProjectList} = ProjectStore();
    if(ProjectList ===null){
        return <ProjectSkeleton />
    }else{
        return (
            <section className={"text-center lg:p-20 md:p-16 p-8 "}>
               <div className={"flex flex-col items-center lg:gap-12 md:gap-10 gap-8"}>
                   <div className={"lg:w-[70%] "}>
                       <h2 className={"lg:text-4xl md:text-3xl text-2xl font-semibold font-railway"}>All Projects</h2>
                       <p className={"lg:text-lg md:text-[15.5px] mt-3 font-light text-sm text-gray-200"}>
                           This page contains all the projects that i've completed so far.Visit the Details page to
                           know more about these projects
                       </p>

                   </div>
                   <div className={"w-full h-0.5 bg-gray-700"}></div>
               </div>

                <motion.div initial={{y:120}} transition={{ duration: 1.2,ease:"easeOut"}} whileInView={{y:0}}
                            className={"lg:py-20 py-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5"}>
                    {
                        ProjectList.slice(0,4).map((item,i)=>{
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
                    "lg:px-10 lg:text-lg md:text-[15px] text-[12px] md:px-8 md:py-4 px-6 py-3 lg:py-4 " +
                    "rounded-xl uppercase"}
                               whileHover={{ scale: 1.1 }}
                               whileTap={{ scale: 0.9 }}
                               transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                    <Link to={"/"}>Return Home</Link>
                </motion.button>
            </section>

        );
    }

};

export default AllProject;