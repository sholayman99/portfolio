import React from 'react';
import {TypeAnimation} from "react-type-animation";
import img from "../assets/images/me.jpg"

const Header = () => {
    return (
        <section id={"#"} className={"flex items-center justify-center gap-5 lg:md:h-screen h-[60vh] flex-col"}>
            <img src={img} alt={""} className={"lg:md:w-48 w-32 rounded-full"} />
             <h2 className={"lg:md:text-3xl text-xl font-genos"}>MD.SHOLAYMAN</h2>
            <TypeAnimation
                sequence={[
                    "Full-Stack Developer",
                    1200,
                    "Mern-Stack Developer",
                    1200,
                    'Aspire To Be A Leader',
                    1200,
                    'Next Gen Developer',
                    1200
                ]}
                wrapper="span"
                speed={40}
                className={"lg:md:text-[2.5em] text-[1.8rem] inline-block text-base"}
                repeat={Infinity}
            />
        </section>
    );
};

export default Header;