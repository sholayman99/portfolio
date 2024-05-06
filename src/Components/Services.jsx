import React from 'react';
import {motion} from "framer-motion";
import {BsCodeSlash} from "react-icons/bs";
import {MdClass} from "react-icons/md";

const Services = () => {
    const data = [
        {
            icon: <BsCodeSlash />,
            title: "Website Development",
            desc: "Harnessing nearly 2 years of hands-on experience,I specialize in creating dynamic and visually captivating websites. My expertise lies in MERN stack development,ensuring that your web solutions are not only contemporary but also exceptionally functional. Whether you require a personal blog,an e-commerce platform or a corporate website,I possess the skills to transform your vision into a compelling digital presence.Please pay a visit to the Projects section to see some of works i've done."
        },
        {
            icon: <MdClass />,
            title: "One to One Programming Class",
            desc: "Embark on your programming journey with personalized one-on-one classes.With over 2 years of experience in learning and applying programming concepts,I've had the privilege of instructing at a respected EdTech company.Whether you're taking your first steps in coding or seeking to enhance your skills,I'm here to provide guidance and support as you navigate the world of programming,helping you build a solid foundation and pursue your coding goals.Please pay a visit to the projects section to see some of works i've done."
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
                    technologies.</p>
            </div>
            <motion.div initial={{y:120}} transition={{ duration: 1.2,ease:"easeOut"}} whileInView={{y:0}}
                        className={"flex lg:flex-row flex-col items-center justify-around gap-10 md:p-20 lg:p-10"}>
                {
                    data?.map((item,i)=>{
                        return(
                            <div key={i} className={"bg-white bg-opacity-5 rounded-xl m-5 p-6"}>
                              <h2 className="w-fit p-[10px] lg:text-4xl text-xl md:text-3xl rounded-full border-[#fff] border-[2px]
                              text-[#fff]">{item?.icon}</h2>
                               <div className={"py-5"}>
                               <h2 className={"lg:text-2xl md:text-2xl text-lg font-railway "}>{item?.title}</h2>
                               <p className={"lg:text-[16px] md:text-[16px] text-sm  text-gray-300 pt-3"}>{item?.desc}</p>
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