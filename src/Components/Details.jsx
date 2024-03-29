import React from 'react';
import ProjectStore from "../Store/ProjectStore.js";
import DetailSkeleton from "../Skeleton/DetailSkeleton.jsx";
import ProjectImages from "./ProjectImages.jsx";
import {motion} from "framer-motion"
import {Link} from "react-router-dom";

const Details = () => {
    const {SingleProject} = ProjectStore();

    if(SingleProject===null){
        return <DetailSkeleton />
    }else{
        return (
            <section className={"lg:py-20 md:py-14 py-8 lg:px-14 overflow-hidden md:px-10 px-5  flex flex-col items-center" +
                " gap-10 md:gap-16 lg:gap-20"}>
               <div className={"flex flex-col items-center justify-center lg:py-10 lg:w-[70%] gap-8 lg:gap-10" +
                   " md:gap-10 rounded-xl"}>
                   <motion.h1 initial={{x:200}}   transition={{ duration: 1.3,ease:"easeOut"}}
                              whileInView={{x:0}}
                       className={"lg:text-5xl md:text-4xl text-2xl font-railway  font-bold"}>
                       {SingleProject['title']}
                   </motion.h1>
                   <div className={"w-10 h-0.5 rounded-xl bg-[#ffffff]"}></div>
                   <motion.p initial={{x:-200}}   transition={{ duration: 1.3,ease:"easeOut"}}
                             whileInView={{x:0}}
                       className={"lg:text-lg md:text-[15.5px] font-light text-sm text-gray-200"}>
                       This page contains the case study of
                       <span className={"font-[500]"}> {SingleProject['title']} </span>which includes the Project
                       Overview, Tools Used , Github Link and Live Link to the official product.
                   </motion.p>

                   <div className={"flex items-center gap-3"}>

                       <motion.button className={"hover:bg-opacity-20 bg-white bg-opacity-5"+
                           " font-bold lg:px-10 lg:text-lg md:text-[15px] text-[12px] md:px-8 md:py-4 px-6 py-3 " +
                           "lg:py-4 rounded-xl uppercase"}
                                      whileHover={{ scale: 1.1 }}
                                      whileTap={{ scale: 0.9 }}
                                      transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                           <a target={'_blank'} href={SingleProject['gitLink']}>GitHub Link</a>
                       </motion.button>

                       {
                           SingleProject['liveLink']?( <motion.button className={"bg-gray-200 text-black" +
                               " font-bold lg:px-10 lg:text-lg md:text-[15px] text-[12px] " +
                               "md:px-8 md:py-4 px-6 py-3 lg:py-4 rounded-xl uppercase"}
                                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                               <a target={'_blank'} href={SingleProject['liveLink']}>Live Link</a>
                           </motion.button>):(<p>Live link is not available</p>)
                       }

                   </div>

               </div>
                <div className={"bg-gray-700 h-0.5 w-full rounded-xl"}></div>
               <div className={"flex flex-col justify-center items-center md:gap-16 gap-10 lg:gap-20"}>

               <div className={"w-[70%] md:w-full lg:w-full"}>
                   <ProjectImages />
               </div>
                   <div className={"bg-white w-[70%] lg:w-full md:w-full mx-auto bg-opacity-5 lg:p-10 p-5 flex " +
                       "flex-col gap-6 lg:gap-10 rounded-xl"}>
                       <div className={"flex flex-col lg:gap-5 gap-3"}>
                           <h2 className={"lg:text-3xl md:text-2xl text-xl text-gray-200 font-medium font-roboto"}>Project
                               Overview:</h2>
                           <p className={"text-gray-400 md:text-[15px] text-xs lg:text-lg"}>{SingleProject['overview']}</p>
                       </div>
                       <div className={"flex flex-col lg:gap-5 gap-3"}>
                           <h2 className={"lg:text-3xl md:text-2xl text-xl text-gray-200 font-medium font-roboto"}>Key Features:</h2>
                           <div>
                               {
                                   SingleProject['feature'].split(',').map((item,i)=>{
                                       return(
                                           <p className={"text-gray-400 md:text-[15px] text-xs lg:text-lg"}>👉 {item}.</p>
                                       )
                                   })
                               }
                           </div>
                       </div>
                       <div className={"flex flex-col lg:gap-5 gap-3"}>
                           <h2 className={"lg:text-3xl md:text-2xl text-xl text-gray-200 font-medium font-roboto"}>Tools
                               Used:</h2>
                           <div
                               className={"grid lg:grid-cols-6 md:grid-cols-5 grid-cols-3 md:text-[15px] text-xs lg:text-lg gap-5"}>
                               {
                                   SingleProject['tools'].split(",").map((item, i) => {
                                       return (
                                           <button className={"bg-white bg-opacity-10 p-2 rounded-lg"}
                                                   key={i}>{item}</button>
                                       )
                                   })
                               }
                           </div>
                       </div>
                   </div>
               </div>

                <motion.button className={"hover:bg-opacity-20 bg-white bg-opacity-5 font-bold " +
                    "lg:px-10 lg:text-lg md:text-[15px] text-[12px] md:px-8 md:py-4 px-6 py-3 lg:py-4 " +
                    "rounded-xl uppercase"}
                               whileHover={{scale: 1.1}}
                               whileTap={{ scale: 0.9 }}
                               transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                    <Link to={"/"}>Return Home</Link>
                </motion.button>

            </section>
        );
    }
};

export default Details;