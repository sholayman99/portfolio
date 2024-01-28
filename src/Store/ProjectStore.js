import {create} from "zustand";
import axios from "axios";
import {Toaster} from "react-hot-toast";
import React from "react";


const ProjectStore = create((set)=>({
    ProjectList :null,
    ProjectListRequest : async ()=>{
        let res = await axios.get("https://sholayman-portfolio-server.vercel.app/api/v1/FindProjects");
        let data = await res['data'];
        if(data['status']==="success"){
            set({ProjectList:data['data']});
        }
    },
    SingleProject:null,
    SingleProjectRequest:async(id)=>{
        let res = await axios.get(`https://sholayman-portfolio-server.vercel.app/api/v1/FindAProject/${id}`);
        let data = await res['data'];
        if(data['status']==="success"){
            set({SingleProject:data['data']});
        }
    },

    ToolsList :null,
    ToolsListRequest : async ()=>{
        let res = await axios.get("https://sholayman-portfolio-server.vercel.app/api/v1/FindTools");
        let data = await res['data'];
        if(data['status']==="success"){
            set({ToolsList:data['data']});
        }
    },

}))

export default ProjectStore;