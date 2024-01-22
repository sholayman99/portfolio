import React from 'react';
import nf from "../assets/images/404.jpeg"
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className={" bg-white lg:h-[80vh] h-[55vh] flex flex-col items-center justify-center gap-5"}>
           <img src={nf} className={"lg:w-[45%] w-[60%] md:w-[50%] h-48 lg:h-72"} alt={"Not Found"} />
            <motion.button className={"bg-opacity-20 bg-black text-black hover:bg-opacity-30 font-bold " +
                "lg:px-10 lg:text-lg md:text-[15px] text-[12px] md:px-8 md:py-4 px-6 py-3 lg:py-4 " +
                "rounded-xl uppercase"}
                           whileHover={{ scale: 1.1 }}
                           whileTap={{ scale: 0.9 }}
                           transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                <Link to={"/"}>Return Home</Link>
            </motion.button>

        </div>
    );
};

export default NotFoundPage;