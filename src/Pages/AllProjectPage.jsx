import React, {useEffect} from 'react';
import ProjectStore from "../Store/ProjectStore.js";
import AllProject from "../Components/AllProject.jsx";

const AllProjectPage = () => {
    const {ProjectListRequest} = ProjectStore();

    useEffect(() => {
        (async()=>{
            await ProjectListRequest();
        })()
    }, []);

    return (

            <div>
                <AllProject />
            </div>


    );
};

export default AllProjectPage;