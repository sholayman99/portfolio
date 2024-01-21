import React from 'react';
import {motion} from "framer-motion";
import {BsCodeSlash} from "react-icons/bs";
import {MdClass} from "react-icons/md";

const Services = () => {
    const datas = [
        {
            icon: <BsCodeSlash />,
            title: "Website Development",
            desc: "As a firm believer in continuous learning, I stay up-to-date with the latest advancements in web technologies.Please pay a visit to the Projects section to see some of works i've done."
        },
        {
            icon: <MdClass />,
            title: "One to One Programming Class",
            desc: "As a firm believer in continuous learning, I stay up-to-date with the latest advancements in web technologies.Please pay a visit to the Projects section to see some of works i've done."
        }
    ];
    return (
        <section id={"service"} className={"lg:py-20 md:py-14 py-8 flex  items-center justify-center px-6  flex-col gap-10"}>
            <div className={"flex items-center justify-center lg:w-[60%]  flex-col gap-4 lg:gap-6"}>
                <motion.h2 initial={{x:-200}}   transition={{ duration: 1.3,ease:"easeOut"}} whileInView={{x:0}}
                           className={"title-text lg:text-4xl md:text-4xl text-2xl"}> SERVICES</motion.h2>
                <div className={"w-10 h-0.5 rounded-xl bg-[#ffffff]"}></div>
                <p className={"text-gray-400 font-[400] text-center lg:text-xl md:text-lg text-sm"}>As a firm
                    believer in continuous learning, I stay up-to-date with the latest advancements in web
                    technologies. I am enthusiastic about taking on new challenges.</p>
            </div>
            <motion.div initial={{y:120}} transition={{ duration: 1.2,ease:"easeOut"}} whileInView={{y:0}}
                        className={"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:p-20 gap-10"}>
                {
                    datas.map((item,i)=>{
                        return(
                            <div key={i} className={"bg-white bg-opacity-5 rounded-xl md:px-5 py-8 px-6"}>
                              <h2 className="w-fit p-[10px] lg:text-4xl text-xl md:text-3xl rounded-full border-[#fff] border-[2px]
                              text-[#fff]">{item?.icon}</h2>
                               <div className={"py-5"}>
                               <h2 className={"lg:text-3xl md:text-2xl text-xl font-railway "}>{item?.title}</h2>
                               <p className={"lg:text-lg md:text-[16px] text-sm text-justify text-gray-300 pt-3"}>{item?.desc}</p>
                               </div>
                            </div>
                        )
                    })
                }

            </motion.div>
        </section>
    );
};

export default Services;