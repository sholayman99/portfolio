import {create} from "zustand";
import axios from "axios";


const ProjectStore = create((set)=>({
    ProjectList:null,
    ProjectListRequest:async()=>{
           let res = await axios.get('http://localhost:5060/api/v1/FindProjects');
           let data = await res['result'];
           if(data['status']==="success"){
               set({ProjectStore:data['data']});
           }
    },
    SingleProject:null,
    SingleProjectRequest:async(id)=>{
        let res = await axios.get(`http://localhost:5060/api/v1/FindProjects/${id}`);
        let data = await res['result'];
        if(data['status']==="success"){
            set({SingleProject:data['data']});
        }
    }
}))

export default ProjectStore()