import React from 'react';
import ProjectStore from "../Store/ProjectStore.js";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"

const ProjectImages = () => {
    const {SingleProject} = ProjectStore();
    let images =[
        {original:SingleProject['img1'] , thumbnail:SingleProject['img1']},
        {original:SingleProject['img2'] , thumbnail:SingleProject['img2']},
        {original:SingleProject['img3'] , thumbnail:SingleProject['img3']},
        {original:SingleProject['img4'] , thumbnail:SingleProject['img4']},
        {original:SingleProject['img5'] , thumbnail:SingleProject['img5']},
        {original:SingleProject['img6'] , thumbnail:SingleProject['img6']},

    ]
    return (
        <div >
            <ImageGallery autoplay={true} items={images} />
        </div>
    );
};

export default ProjectImages;