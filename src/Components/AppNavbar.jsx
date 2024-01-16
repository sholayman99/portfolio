import React, {useState} from 'react';
import {HashLink as NavLink} from "react-router-hash-link";

const AppNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
         <section className={""}>
             <nav className="flex right-3 flex-wrap items-center bg-[#111827] justify-between p-4">
                 <div className="flex items-center  flex-shrink-0 text-white mr-6 lg:mr-72">
                     <h2 className={"text-2xl uppercase"}>md.sholayman</h2>
                 </div>
                 <div className="block lg:hidden">
                     <button
                         onClick={() => setIsOpen(!isOpen)}
                         className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
                     >
                         <svg
                             className={`fill-current h-5 w-5 ${isOpen ? "hidden" : "block"}`}
                             viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg"
                         >
                             <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                         </svg>
                         <svg
                             className={`fill-current h-5 w-5 ${isOpen ? "block" : "hidden"}`}
                             viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg"
                         >
                             <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                         </svg>
                     </button>
                 </div>
                 <div
                     className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
                 >
                     <div className="lg:md:text-[16px]  text-sm font-medium py-4  flex flex-col lg:flex-row lg:items-center lg:gap-10 gap-2  uppercase lg:flex-grow">
                         <NavLink to={"#"} smooth
                             className="block  lg:inline-block lg:mt-0 text-white-200">
                             Home
                         </NavLink>
                         <NavLink to={"#about"} smooth
                              className="block  lg:inline-block lg:mt-0 text-white-200">
                             About
                         </NavLink>
                         <NavLink to={"#projects"} smooth
                              className="block  lg:inline-block lg:mt-0 text-white-200">
                             Projects
                         </NavLink>
                         <NavLink to={"#contact"} smooth
                               className="block  lg:inline-block lg:mt-0 text-white-200">
                             Contact
                         </NavLink>
                     </div>

                 </div>
             </nav>
         </section>

    );
};

export default AppNavbar;