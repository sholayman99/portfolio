import {create} from "zustand";
import axios from "axios";
import {Toaster} from "react-hot-toast";
import React from "react";


const ProjectStore = create((set)=>({
    ProjectList :null,
    ProjectListRequest : async ()=>{
        let res = await axios.get("http://localhost:5050/api/v1/FindProjects");
        let data = await res['data'];
        if(data['status']==="success"){
            set({ProjectList:data['data']});
        }
    },
    SingleProject:null,
    SingleProjectRequest:async(id)=>{
        let res = await axios.get(`http://localhost:5050/api/v1/FindAProject/${id}`);
        let data = await res['data'];
        if(data['status']==="success"){
            set({SingleProject:data['data']});
        }
    },
    SendEmail:null,
    SendEmailRequest:async(body)=>{
        let res = await axios.post(`http://localhost:5050/api/v1/SendEmail`,body);
        let data = await res['data'];
        if(data['status']==="success"){
            set({SingleProject:data});
        }
    }
}))

export default ProjectStore;