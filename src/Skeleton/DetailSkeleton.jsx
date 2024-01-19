import React from 'react';
import {Typography} from "@material-tailwind/react";

const DetailSkeleton = () => {
    return (
        <div  className={""}>
            <div className={'grid lg:grid-cols-2 grid-cols-1 gap-4 lg:gap-10 h-screen items-center  lg:px-10'}>
                {
                    Array.from({length:2}).map((i)=>{
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
                                    Array.from({length:20}).map((i)=>{
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
            <div>

            </div>
        </div>
    );
};

export default DetailSkeleton;