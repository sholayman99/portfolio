import React from 'react';
import {motion} from "framer-motion";
import { Input,Textarea  } from "@material-tailwind/react";


const Contact = () => {

    return (
        <section id={"contact"} className={"lg:py-24 md:py-16 py-8 flex  items-center justify-center px-6  flex-col gap-4 "}>
            <div className={"flex items-center justify-center lg:w-[60%] lg:py-20 py-8 md:py-12 md:py-16 flex-col gap-4 lg:gap-6"}>
                <motion.h2 initial={{x:-200}}   transition={{ duration: 1.3,ease:"easeOut"}} whileInView={{x:0}}
                           className={"title-text lg:text-4xl md:text-4xl text-2xl"}>CONTACT</motion.h2>
                <div className={"w-10 h-0.5 rounded-xl bg-[#ffffff]"}></div>
                <p className={"text-gray-400 font-[400] text-center lg:text-xl md:text-lg text-sm"}>Feel free to
                    Contact me by submitting the form below and I will get back to you as soon as possible</p>
            </div>
            <motion.form initial={{y:120}} transition={{ duration: 1.2,ease:"easeOut"}} whileInView={{y:0}}
                className={"bg-gray-200 rounded-xl  lg:w-[75%] w-full md:p-14 p-8 lg:p-20 flex flex-col gap-10"}>
             <Input variant="standard" className={"lg:text-md"}  label="Name" placeholder="Your Name"/>
             <Input variant="standard" className={"lg:text-md"}  label="Email" placeholder="Your Email"/>
             <Textarea variant="standard"  label="Your Message" />
                <motion.button className={"hover:bg-black lg:w-[25%] md:w-[25%] w-[40%] bg-black bg-opacity-15 text-black hover:text-white" +
                    " font-bold lg:px-8 lg:text-md md:text-sm text-[12px] md:px-8 md:py-4 px-6 py-3 lg:py-5 rounded-xl" +
                    " uppercase"}
                               whileHover={{ scale: 1.1 }}
                               whileTap={{ scale: 0.9 }}
                               transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                   Submit
                </motion.button>
            </motion.form>
        </section>
    );
};

export default Contact;