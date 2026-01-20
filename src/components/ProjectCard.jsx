import React from "react";
import RotatingBorder from "./Rotatingborder";

const ProjectCard=({title,image,description,tech,github,livelink,features})=>{
    return(
        
        <div className="project-card  bg-white border border-slate-200 hover:border-blue-600 hover:border-2  rounded-xl shadow-sm hover:shadow-lg hover:translate-y-1 transition p-6 flex flex-col gap-6 items-center mx-auto my-12  overflow-y-auto text-sm">
           <div className='project-image rounded-lg overflow-hidden w-full'>
                <img src={image} className='w-full object-cover h-56'/>
           </div>

           <div className='project-info flex flex-col gap-4 py-2 px-6 items-center'>
                <div className='text-2xl font-semibold text-slate-900 text-center'>{title}</div>
                <div className="description text-center text-slate-600 leading-reading max-w-2xl ">
                        {description}
                </div>
                <div className='tech-stack w-full text-left'>
                    <div className='py-2 font-bold text-blue-500'>Tech Stack:</div>
                    <ul className='flex flex-wrap gap-2'>
                        {
                            tech.map((tool)=>(
                                <li className='bg-slate-100 text-slate-700 rounded-lg py-1 px-3 text-sm '>
                                    {tool}
                                </li>
                            ))
                        }
                        </ul>
                </div>
                <div className='features w-full text-left'>
                    <div className='py-2 font-bold text-blue-500'>Features:</div>
                        <ul className='list-disc space-y-1 pl-4 text-slate-700'>
                            {
                              features.map((feature)=>(
                                <li className=''>
                                    {feature}
                                </li>
                            ))  
                            }
                        </ul>
                </div>
                <div className='links flex gap-4'>
                        <button className='btn'>Github Repo</button>
                        <button className='btn'>Live Demo</button>
                </div>

           </div>

        </div>
        
    )
}

export default ProjectCard;
