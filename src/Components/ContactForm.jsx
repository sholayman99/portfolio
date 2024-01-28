import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {motion} from "framer-motion";
import {toast, Toaster} from "react-hot-toast";

const ContactForm = () => {
    const form = useRef();

    const sendEmail = async(e) => {
        e.preventDefault();

        await emailjs.sendForm('service_28zjekj', 'template_f7wmfee', form.current,
            'ucZWwsP_PL0klx1C6')
            .then((result) => {
                toast.success("Message Sent Successfully")
                console.log(result.text);
            }, (error) => {
                toast.error("Something Went Wrong")
                console.log(error.text);
            });
    };

    return (
       <section id={"contact"} className={"lg:py-20 md:py-14 py-8 flex  items-center justify-center px-6  flex-col lg:gap-16 md:gap-12 gap-8 "}>
           <div className={"flex items-center justify-center lg:w-[60%]  flex-col gap-4 lg:gap-6"}>
               <motion.h2 initial={{x:-200}}   transition={{ duration: 1.3,ease:"easeOut"}} whileInView={{x:0}}
                          className={"title-text lg:text-4xl md:text-4xl text-2xl"}>CONTACT</motion.h2>
               <div className={"w-10 h-0.5 rounded-xl bg-[#ffffff]"}></div>
               <p className={"text-gray-400 font-[400] text-center lg:text-xl md:text-lg text-sm"}>  Feel free to Contact me by submitting the form below and I will get
                   back to you as soon as possible</p>
           </div>
           <motion.div initial={{y:120}} transition={{ duration: 1.2,ease:"easeOut"}} whileInView={{y:0}}
               className={"bg-black lg:w-[60%] bg-opacity-10 px-10 py-10 rounded-xl"}>
               <form ref={form} onSubmit={sendEmail} className={""}>
                   <label className={"text-gray-700"} htmlFor={"name"}>Name</label>
                   <input className={"w-full border-b focus:border-b-2 p-2 bg-transparent outline-none " +
                       "  text-md text-gray-300 mb-7 "} type="text" id={"name"} name="from_name" placeholder={"Your Name"} />
                   <label className={"text-gray-700 "} htmlFor={"email"}>Email</label>
                   <input className={"w-full border-b focus:border-b-2 p-2 bg-transparent outline-none " +
                       "  text-md text-gray-300 mb-7 "} type="email" id={"email"} name="from_email" placeholder={"Your Email"} />
                   <label className={"text-gray-700"} htmlFor={"message"}>Message</label>
                   <textarea className={"w-full border-b focus:border-b-2 p-2 bg-transparent outline-none " +
                       " text-md text-gray-300 resize-none"} id={"message"} name="message" placeholder={"Your Message"} />
                   <motion.input whileHover={{ scale: 1.1 }}
                                 whileTap={{ scale: 0.9 }}
                                 transition={{ type: "spring", stiffness: 400, damping: 17 }}
                   className={"bg-white bg-opacity-10 mt-8 lg:text-lg text-md px-8 py-2.5 cursor-pointer rounded-xl"}
                          type="submit" value="Send" />
               </form>
           </motion.div>
            <Toaster position={"bottom-center"} />
       </section>
    );
};

export default ContactForm;