import React from 'react';

const About = () => {
    let skills ="HTML,CSS,JavaScript,React.js,Node.js,express.js,MongoDB,Mongoose,Git,GitHub," +
        "Tailwind CSS,Bootstrap,zustand,React-Redux Basic"
    return (
        <section id={"about"} className={"py-20 flex  items-center justify-center px-10  flex-col gap-4 "}>
           <div className={"flex items-center justify-center w-[50%]  flex-col gap-6"}>
               <h2 className={"title-text lg:md:text-4xl text-xl"}>ABOUT ME</h2>
               <div className={"w-8 h-1 rounded-xl bg-[#ffffff]"}></div>
               <p className={"text-gray-400 font-[400] text-center text-xl"}>Here you will find more information about me, what I do,
                   and my current skills mostly in terms of programming and technology</p>
           </div>
            <div className={"flex justify-between items-center py-20 gap-16"}>
                <div className={"lg:max-w-[50%]"}>
                    <h3 className={"text-2xl mb-10 font-semibold"}>Get to know me!</h3>
                    <p className={"text-gray-400 font-[300] text-justify text-lg"}>
                        I'm a <span className={"text-white font-[500]"}>Mern-stack </span>
                        Web Developer building the  <span className={"text-white font-[500]"}>Full-stack </span> of
                        Websites and <span className={"text-white font-[500]"}>Web Applications </span>
                        that leads to the success of the overall product. Check out some of my work in the Projects
                        section. I also like sharing content related to the stuff that I have learned over the
                        years in Web Development so it can help other people of the Dev Community.
                        Feel free to Connect or Follow me on my Linkedin,GitHub,Facebook and Instagram where
                        I post useful content related to Web Development and Programming I'm open to Job
                        opportunities and Internship where I can contribute, learn and grow. If you have a good
                        opportunity that matches my skills and experience then don't hesitate to contact me.</p>
                </div>
                <div className={"grid grid-cols-4 gap-3"}>
                    {
                        skills.split(",").map((item,i)=>{
                            return <button className={"bg-white rounded-lg bg-opacity-5 h-14 "} key={i}>{item}</button>
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default About;