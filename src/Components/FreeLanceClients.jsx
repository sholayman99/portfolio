import React from 'react';

const FreeLanceClients = () => {
    let clients ="";
    if(clients === ""){
        return <div>
            <h3 className={"lg:text-2xl text-xl"}>Freelance Clients</h3>
            <div className={"w-full h-0.5 rounded-xl my-5 bg-gray-700"}></div>
            <h3 className={"text-gray-800 text-lg"}>Loading...</h3>
        </div>
    }else{
        return (
            <div>
                <h3 className={"lg:text-2xl md:text-2xl text-xl"}>Tools I Use Everyday</h3>
                <div className={"w-full h-0.5 rounded-xl my-5 bg-gray-700"}></div>
            </div>
        );
    }
};

export default FreeLanceClients;