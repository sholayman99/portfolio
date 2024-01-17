import React from 'react';
import {motion} from "framer-motion"

const About = () => {
    let skills ="HTML,CSS,JavaScript,React.js,Node.js,express.js,MongoDB,Mongoose,Git,GitHub," +
        "Tailwind CSS,Bootstrap,zustand,React-Redux Basic"
    return (
        <section id={"about"} className={"lg:py-20 md:py-20 py-10 flex  items-center justify-center px-10  flex-col gap-4 "}>
           <div className={"flex items-center justify-center lg:w-[50%]  flex-col gap-4 lg:gap-6"}>
               <h2 className={"title-text lg:md:text-4xl text-xl"}>ABOUT ME</h2>
               <div className={"w-8 h-1 rounded-xl bg-[#ffffff]"}></div>
               <p className={"text-gray-400 font-[400] text-center lg:text-xl md:text-lg text-md"}>Here you will find more information about me, what I do,
                   and my current skills mostly in terms of programming and technology</p>
           </div>
            <div  className={"flex lg:flex-row flex-col justify-between items-center lg:py-20 md:py-20 py-10" +
                " lg:gap-16 gap-10"}>
                <div className={"lg:max-w-[50%]"}>
                    <h3 className={"lg:text-2xl md:text-2xl text-xl mb-10 "}>Get to know me!</h3>
                    <motion.p initial={{y:150}}   transition={{ duration: 1.2}} whileInView={{y:0}}
                        className={"text-gray-400 font-[300] text-justify lg:text-lg md:text-[17px] text-sm"}>
                        I'm a <span className={"text-white font-[500]"}>Mern-stack </span>
                        Web Developer building the  <span className={"text-white font-[500]"}>Full-stack </span> of
                        Websites and Web Applications that leads to the success of the overall product.
                        Check out some of my work in the Projects section. I also like sharing content related
                        to the stuff that I have learned over the years in <span className={"text-white font-[500]"}> Web Development </span> so it can help
                        other people of the Dev Community.Feel free to Connect or Follow me on my
                        <span className={"text-white font-[500]"}> Linkedin,GitHub,Facebook and Instagram </span> where
                        I post useful content related to Web Development and Programming I'm open to
                        <span className={"text-white font-[500]"}> Job </span> opportunities and
                        <span className={"text-white font-[500]"}> Internship </span> where I can contribute, learn and grow.
                        If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</motion.p>
                </div>
                <motion.div initial={{y:150}}    transition={{ duration: 1.5 }} whileInView={{y:0}}>
                    <div className={"grid lg:md:grid-cols-4 md:grid-cols-7 grid-cols-3 gap-3"}>
                        {
                            skills.split(",").map((item,i)=>{
                                return <button className={"bg-white  lg:text-lg md:text-md text-sm px-2 rounded-lg bg-opacity-5  h-14 "} key={i}>{item}</button>
                            })
                        }
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;