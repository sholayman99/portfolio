import React from 'react';
import ProjectStore from "../Store/ProjectStore.js";
import DetailSkeleton from "../Skeleton/DetailSkeleton.jsx";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import ProjectImages from "./ProjectImages.jsx";


const Details = () => {
    const {SingleProject} = ProjectStore();

    if(SingleProject===null){
        return <DetailSkeleton />
    }else{
        return (
            <section>
               <div>
               <ProjectImages />
               </div>
            </section>
        );
    }
};

export default Details;