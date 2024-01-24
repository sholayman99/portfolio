import React from 'react';
import {Avatar} from "@material-tailwind/react";
import ProjectStore from "../Store/ProjectStore.js";

const MyTools = () => {
    const {ToolsList} = ProjectStore();


    return (
        <div>
            <h3 className={"lg:text-2xl text-xl"}>Tools I Use Everyday</h3>
            <div className={"w-full h-0.5 rounded-xl my-5 bg-gray-700"}></div>
          <div className={"grid lg:grid-cols-6 grid-cols-3 gap-10"}>
              {
                  ToolsList===null?(<h3 className={"text-gray-600"}>Loading..</h3>):(ToolsList?.map((image,i) =>{
                      return(
                          <Avatar key={i} className={"w-12"} src={image?.img} alt="avatar" variant="rounded" />
                      )
                  }))

              }
          </div>
        </div>
    );
};

export default MyTools;