import React from 'react';

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();


    return (
        <footer className={"flex flex-col gap-5"}>
          <div className={"w-full h-0.5 bg-gray-700"}></div>
          <div className={"px-3 py-6 flex items-center justify-center gap-5"}>
             <div>
                 <h2 className={"text-lg text-gray-500"}>Version</h2>
                 <p className={"text-sm text-gray-200"}>January , {year}<span dangerouslySetInnerHTML={{ __html: "&copy;" }} /> (Edition-1)</p>
             </div>
              <div>
                  <h2 className={"text-lg text-gray-500"}>Local Time</h2>
                  <p className={"text-sm text-gray-200"}>January , {year}<span dangerouslySetInnerHTML={{ __html: "&copy;" }} /> (Edition-1)</p>
              </div>
          </div>
        </footer>
    );
};

export default Footer;