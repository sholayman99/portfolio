import React, {useEffect} from 'react';
import ProjectStore from "../Store/ProjectStore.js";

const AllProjectsPage = () => {
    const {ProjectList} = ProjectStore();

    useEffect(() => {
        (async()=>{
            await ProjectList();
        })()
    }, []);

    return (
        <div>
            
        </div>
    );
};

export default AllProjectsPage;