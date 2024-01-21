import React from 'react';
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import {motion} from "framer-motion";

const SocialLink = () => {
    return (
        <div className={"fixed top-72 right-0 z-50 rounded-tl-lg rounded-bl-lg  bg-gray-100 shadow-xl text-black" +
            " lg:w-16 md:w-14 w-10 lg:py-5 md:py-5 py-3 flex flex-col lg:gap-8 md:gap-6 gap-4 items-center " +
            "justify-center"}>
            <motion.a   whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                       target={"_blank"} href={""} className={"text-lg md:text-2xl lg:text-3xl"}>
                <FaGithub />
            </motion.a>
            <motion.a   whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                       target={"_blank"} href={""} className={"text-lg md:text-2xl lg:text-3xl"}>
                <FaLinkedin />
            </motion.a>
            <motion.a   whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                       target={"_blank"} href={""} className={"text-lg md:text-2xl lg:text-3xl"}>
                <FaFacebook />
            </motion.a>
            <motion.a  whileHover={{ scale: 1.2 }}
                       whileTap={{ scale: 0.9 }}
                       transition={{ type: "spring", stiffness: 400, damping: 17 }}
                       target={"_blank"} href={""} className={"text-lg md:text-2xl lg:text-3xl"}>
                <FaInstagram />
            </motion.a>

        </div>
    );
};

export default SocialLink;