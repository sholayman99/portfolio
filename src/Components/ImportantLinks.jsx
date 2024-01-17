import React from 'react';
import { motion } from "framer-motion"
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import {Link} from "react-router-dom";

const ImportantLinks = () => {

    return (
        <div className={"grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 px-10 pb-20"}>

            <motion.a  whileHover={{ scale: 1.1 }}
                       whileTap={{ scale: 0.9 }}
                       target={"_blank"} href={""} className={"flex items-center h-[70px] rounded-xl " +
                "lg:text-xl md:text-lg text-md font-semibold justify-center bg-white bg-opacity-5"}>
            <FaGithub />
            <h2 >  GitHub </h2>
            </motion.a>
            <motion.a whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
                target={"_blank"} href={""} className={"flex items-center h-[70px] rounded-xl lg:text-xl md:text-lg " +
                "text-md font-semibold justify-center bg-white bg-opacity-5"}>
               <h2>Linked</h2>
                <FaLinkedin />
            </motion.a>
            <motion.a whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
               target={"_blank"} href={""} className={"flex items-center h-[70px] rounded-xl lg:text-xl md:text-lg " +
                "text-md font-semibold justify-center bg-white bg-opacity-5"}>
                <FaFacebook />
                <h2 >  acebook </h2>
            </motion.a>
            <motion.a whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
               target={"_blank"} href={""} className={"flex items-center h-[70px] rounded-xl lg:text-xl md:text-lg " +
                "text-md font-semibold justify-center bg-white bg-opacity-5"}>
                <FaInstagram />
                <h2 >  Instagram </h2>
            </motion.a>
        </div>
    );
};

export default ImportantLinks;