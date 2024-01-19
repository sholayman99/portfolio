import React, {useEffect} from 'react';
import Details from "../Components/Details.jsx";
import ProjectStore from "../Store/ProjectStore.js";
import {useParams} from "react-router-dom";

const DetailPage = () => {
    const {SingleProjectRequest} = ProjectStore();
    const {id} = useParams();

    useEffect(() => {
        (async ()=>{
            await SingleProjectRequest(id);
        })()
    }, []);

    return (
        <div>
            <Details />
        </div>
    );
};

export default DetailPage;