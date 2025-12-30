import React,{useState} from "react";
import SkillCard from "./Skillcard";

export default function Skills(){
    const skillset=[
        {
            title:'Frontend',
            image:"/src/assets/frontend.png",
            skills:['HTML','CSS','Javascript','React','TailwindCSS']
        },
        {
            title:'Backend',
            image:'/src/assets/frontend.png',
            skills:['NodeJs','ExpressJs','JWT','SQL','MongoDB']
        },
        {
            title:'AI Tools',
            image:'/src/assets/frontend.png',
            skills:['ScikitLearn','TensorFlow','Numpy','Pandas','Matplotlib']
        },
        {
            title:'CS Fundamentals',
            image:'/src/assets/frontend.png',
            skills:['OOP concepts','DSA','DBMS','OS']
        },
        {
            title:'Tools',
            image:'/src/assets/frontend.png',
            skills:['VS code','Git']
        }
    ]
    return(
        <section className="skills bg-blue-50 pb-6">
           <h1 className="text-center py-12 font-semibold text-2xl text-slate-800">Skills</h1>

            <div className="px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          
                  {
                    skillset.map((set)=>(
                        <SkillCard title={set.title} image={set.image} skills={set.skills}/>
                    ))
                  }


           </div>
        </section>
    )
}