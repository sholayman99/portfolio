import React from 'react';
import {Typography} from "@material-tailwind/react";

const ProjectSkeleton = () => {
    return (
        <div className={"grid grid-cols-2 gap-10 lg:px-20 lg:py-10"}>
            {
                Array.from({length:4}).map((i)=>{
                    return(
                        <div key={i} className="max-w-full animate-pulse">
                            <Typography
                                as="div"
                                variant="h1"
                                className="mb-4 h-3  rounded-full bg-gray-300"
                            >
                                &nbsp;
                            </Typography>
                            {
                                Array.from({length:10}).map((i)=>{
                                    return(
                                        <Typography
                                             key={i}
                                            as="div"
                                            variant="paragraph"
                                            className="mb-2 h-2  rounded-full bg-gray-300"
                                        >
                                            &nbsp;
                                        </Typography>
                                    )
                                })
                            }

                        </div>
                    )
                })
            }
        </div>
    );
};

export default ProjectSkeleton;