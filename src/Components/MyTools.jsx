import React from 'react';
import {Avatar} from "@material-tailwind/react";

const MyTools = () => {

    let tools =[
        {
            img:"https://afnan-nanopien.vercel.app/_next/image?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F9a%2FVisual_Studio_Code_1.35_icon.svg%2F2048px-Visual_Studio_Code_1.35_icon.svg.png&w=128&q=75"
        },
        {
          img:"https://afnan-nanopien.vercel.app/_next/image?url=https%3A%2F%2Fcutewallpaper.org%2F24%2Fgithub-logo-png%2Fgithub-logo-icon-free-download-on-iconfinder.png&w=128&q=75"
        },
        {
            img:"https://afnan-nanopien.vercel.app/_next/image?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fa%2Fad%2FFigma-1-logo.png&w=128&q=75"
        },
        {
            img:"https://afnan-nanopien.vercel.app/_next/image?url=https%3A%2F%2Fseeklogo.com%2Fimages%2FP%2Fpostman-logo-0087CA0D15-seeklogo.com.png&w=128&q=75"
        },
        {
            img:"https://afnan-nanopien.vercel.app/_next/image?url=https%3A%2F%2Fstatic.macupdate.com%2Fproducts%2F62461%2Fm%2Fmongodb-compass-logo.png%3Fv%3D1663508519&w=128&q=75"
        },
        {
            img:"https://afnan-nanopien.vercel.app/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Ffavicon%2Fvercel%2F152x152.png&w=128&q=75"
        },
        {
            img:"https://i.ibb.co/k04tCwk/webstorm-logo.jpg"
        }

    ]

    return (
        <div>
            <h3 className={"lg:text-2xl text-xl"}>Tools I Use Everyday</h3>
            <div className={"w-full h-0.5 rounded-xl my-5 bg-gray-700"}></div>
          <div className={"grid lg:grid-cols-6 grid-cols-3 gap-10"}>
              {
                  tools?.map((image,i) =>{
                      return(
                          <Avatar key={i} src={image?.img} alt="avatar" variant="rounded" />
                      )
                  })
              }
          </div>
        </div>
    );
};

export default MyTools;