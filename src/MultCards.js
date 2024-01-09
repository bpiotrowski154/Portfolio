import React from "react"
import Card from "./Card.js"
import SOS from './assets/sosimg.png'
import Capstone from './assets/capstoneimg.png'
import ColorDarkGreen from './assets/color183d3d.png'


const projects = [
    {
        imageURL: SOS,
        backURL: ColorDarkGreen,
        gitURL: "https://github.com/bpiotrowski154/SOS-Board-Game",
        demoURL: "/",
        name: "SOS Game"
    },
    {
        imageURL: Capstone,
        backURL: ColorDarkGreen,
        gitURL: "/",
        demoURL: "/",
        name: "Capstone Project"
    },
];

function MultipleCards(){
    return (
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#5C8374]'>Projects</p>
                <p className='py-6'>// Check out some of my projects</p>
            </div>
            
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4 relative'>
                {projects.map((project, index) => (
                    <Card 
                        key={index} 
                        imageURL={project.imageURL} 
                        backURL={project.backURL}
                        gitURL={project.gitURL} 
                        demoURL={project.demoURL} 
                        name={project.name}/>
                ))}
            </div>
        </div>
    );
}

export default MultipleCards;
