import React from 'react';
import {motion} from "framer-motion"
import MyTools from "./MyTools.jsx";
import FreeLanceClients from "./FreeLanceClients.jsx";

const About = () => {
    let skills ="HTML,CSS,Git,GitHub,JavaScript,React.js,Node.js,express.js,MongoDB,Mongoose,Zustand," +
        "Firebase,Tailwind CSS,Bootstrap,Redux Basic"


    return (
        <section id={"about"} className={"lg:py-20 md:py-14 py-8 flex  items-center justify-center px-8  flex-col gap-4 "}>
           <div className={"flex items-center justify-center lg:w-[60%]  flex-col gap-4 lg:gap-6"}>
               <motion.h2 initial={{x:-200}}   transition={{ duration: 1.3,ease:"easeOut"}} whileInView={{x:0}}
                          className={"title-text lg:text-4xl md:text-4xl text-2xl"}>ABOUT ME</motion.h2>
               <div className={"w-10 h-0.5 rounded-xl bg-[#ffffff]"}></div>
               <p className={"text-gray-400 font-[400] text-center lg:text-xl md:text-lg text-sm"}>Here you will
                   find more information about me, what I do, and my current skills mostly in terms of
                   programming and technology</p>
           </div>
            <div  className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:py-20 md:py-16 py-10" +
                " lg:gap-16 gap-10"}>
                <motion.div initial={{y:120}} transition={{ duration: 1.2,ease:"easeOut"}} whileInView={{y:0}}
                            >
                    <h3 className={"lg:text-2xl text-xl"}>Get to know me!</h3>
                    <div className={"w-full h-0.5 rounded-xl my-5 bg-gray-700"}></div>
                    <p className={"text-gray-400 font-[300] text-justify lg:text-lg md:text-[15px] text-sm"}>
                        I'm a <span className={"text-white font-[500]"}>Mern-stack </span>
                        Web Developer building the  <span className={"text-white font-[500]"}>Full-stack </span>
                        Websites and Web Applications that leads to the success of the overall product.I'm passionate
                        and dedicated about my work and flexible to learn anything new.
                        Check out some of my work in the Projects section. I also like sharing content related
                        to the stuff that I have learned over the years in <span className={"text-white font-[500]"}> Web Development </span> so it can help
                        other people of the Dev Community.Feel free to Connect or Follow me on my
                        <span className={"text-white font-[500]"}> Linkedin,GitHub,Facebook and Instagram </span> where
                        I post useful content related to Web Development and Programming.I'm open to
                        <span className={"text-white font-[500]"}> Job </span> opportunities and
                        <span className={"text-white font-[500]"}> Internship </span> where I can contribute, learn and grow.
                        If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
                </motion.div>
                <motion.div initial={{y:120}}  transition={{ duration: 1.2 ,ease:"easeOut"}} whileInView={{y:0}}>
                    <h3 className={"lg:text-2xl text-xl"}>My Skills</h3>
                    <div className={"w-full h-0.5 rounded-xl my-5 bg-gray-700"}></div>
                    <div className={"grid lg:md:grid-cols-4 grid-cols-3 gap-3"}>
                        {
                            skills.split(",").map((item,i)=>{
                                return <button className={"bg-white  lg:text-lg md:text-md text-sm p-2 rounded-lg bg-opacity-5  "} key={i}>{item}</button>
                            })
                        }
                    </div>
                </motion.div>
                <motion.div initial={{y:120}} transition={{ duration: 1.2,ease:"easeOut"}} whileInView={{y:0}}>
                    <MyTools />
                </motion.div>
                <motion.div initial={{y:120}} transition={{ duration: 1.2,ease:"easeOut"}} whileInView={{y:0}}>
                    <FreeLanceClients />
                </motion.div>

            </div>
        </section>
    );
};

export default About;