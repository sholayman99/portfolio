import React, {useRef, useState} from "react";
import { motion } from "framer-motion";
import { Input, Textarea } from "@material-tailwind/react";
import toast, { Toaster } from "react-hot-toast";
import ProjectStore from "../Store/ProjectStore.js";
import * as emailjs from "@emailjs/browser";

const ContactForm = () => {
    const form = useRef();




    const sendEmail = async(e) => {
        e.preventDefault();


     let serID="service_28zjekj"; let pbKey="template_f7wmfee";let tempKey="ucZWwsP_PL0klx1C6"
       await emailjs.sendForm(serID,tempKey,form.current,pbKey)
            .then((result) => {
                console.log(result.text);
                toast.success('Send successfully')
            }, (error) => {
                console.log(error.text);
                toast.error('Failed Attempt');
            });
    };

  return (
    <section id={"contact"} className={"lg:py-24 md:py-16 py-8 flex  items-center justify-center px-6 " +
        " flex-col gap-4 "}>
      <div
        className={
          "flex items-center justify-center lg:w-[60%] lg:py-20 py-8 md:py-16 flex-col gap-4 lg:gap-6"}>
        <motion.h2
          initial={{ x: -200 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          whileInView={{ x: 0 }}
          className={"title-text lg:text-4xl md:text-4xl text-2xl"}
        >
          CONTACT
        </motion.h2>
        <div className={"w-10 h-0.5 rounded-xl bg-[#ffffff]"}></div>
        <p
          className={
            "text-gray-400 font-[400] text-center lg:text-xl md:text-lg text-sm"
          }
        >
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
      </div>

      <motion.form
          onSubmit={sendEmail} ref={form}
        initial={{ y: 120 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        whileInView={{ y: 0 }}
        className={
          "bg-white bg-opacity-10  rounded-xl  lg:w-[75%] w-full md:p-14 p-8 lg:p-20 flex flex-col gap-10"
        }
      >
         <div>
             <label>Name</label>
             <input type="text" name="from_name"
              className={"w-full outline-none lg:text-md lg:p-2 bg-transparent text-gray-300 border-b"} />
         </div>
          <div>
              <label>Email</label>
              <input type="email" name="from_email"
              className={"w-full outline-none lg:text-md lg:p-2 bg-transparent text-gray-300 border-b"}/>
          </div>
         <div>
             <label>Message</label>
             <textarea name="message"
              className={"w-full outline-none lg:text-md lg:p-2 bg-transparent text-gray-300 border-b"}/>
         </div>
          <motion.input type={"submit"} value={"Submit"}
          className={
            "hover:bg-white lg:w-[25%] md:w-[25%] w-[40%]  bg-opacity-15 text-white hover:text-black border" +
            " font-bold lg:px-8 lg:text-md md:text-sm text-[12px] md:px-8 md:py-4 px-6 py-3 lg:py-5 rounded-xl" +
            " uppercase"
          }
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        />

      </motion.form>
      <Toaster position="top-center" reverseOrder={false} gutter={8}  toastOptions={{duration: 3000}} />
    </section>
  );
};

export default ContactForm;
