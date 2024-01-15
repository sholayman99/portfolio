import React from 'react';
import {TypeAnimation} from "react-type-animation";
import img from "../assets/images/me.jpg"

const Header = () => {
    return (
        <div className={"flex items-center justify-center gap-5 lg:h-screen flex-col"}>
            <img src={img} alt={""} className={"w-48 rounded-full"} />
             <h2 className={"text-3xl font-genos"}>MD.SHOLAYMAN</h2>
            <TypeAnimation
                sequence={[
                    "Full-Stack Developer",
                    1000,
                    "Mern-Stack Developer",
                    1000,
                    'Aspire to be a leader',
                    1000,
                    'Next Gen Developer',
                    1000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2.5em', display: 'inline-block',color:'#ffffff' }}
                repeat={Infinity}
            />

        </div>
    );
};

export default Header;