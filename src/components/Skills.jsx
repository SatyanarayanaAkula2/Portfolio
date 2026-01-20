import React,{useState} from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiScikitlearn,
  SiTensorflow,
  SiNumpy,
  SiPandas,
} from "react-icons/si";

import { MdComputer, MdBuild } from "react-icons/md";

import SkillCard from "./Skillcard";

export default function Skills(){
    const skillset=[
        {
            title:'Frontend',
            image:"/src/assets/frontend.png",
            skills:[
                {name:'HTML',icon:FaHtml5,color:'#E34F26'},
                {name:'CSS',icon:FaCss3Alt,color:'#1572B6'},
                {name:'JavaScript',icon:FaJs,color:'#F7DF1E'},
                {name:'React',icon:FaReact,color:'#61DAFB'},
                {name:'Tailwindcss',icon:SiTailwindcss,color:'#38BDF8'}
            ]
        },
        {
            title:'Backend',
            image:'/src/assets/frontend.png',
            skills:[
                {name:'NodeJs',icon:FaNodeJs,color:'#339933'},
                {name:'ExpressJs',icon:SiExpress,color:'#000000'},
                {name:'JWT',icon:SiJsonwebtokens,color:''},
                {name:'SQL',icon:SiMysql,color:' #4479A1'},
                {name:'MongoDB',icon:SiMongodb,color:'#47A248'}
            ]
        },
        {
            title:'AI Tools',
            image:'/src/assets/frontend.png',
            skills:[
                {name:'ScikitLearn',icon:SiScikitlearn,color:'#F7931E'},
                {name:'TensorFlow',icon:SiTensorflow,color:'#FF6F00'},
                {name:'Numpy',icon:SiNumpy,color:'#013243'},
                {name:'Pandas',icon:SiPandas,color:'#150458'},
                {name:'Matplotlib',icon:'',color:'#11557C'}
            ]
        },
        {
            title:'CS Fundamentals',
            image:'/src/assets/frontend.png',
            skills:[
                {name:'OOPS',},
                {name:'DSA',},
                {name:'DBMS'},
                {name:'OS',}
            ]
        },
        {
            title:'Tools',
            image:'/src/assets/frontend.png',
            skills:[
                {name:'VS Code',icon:'',color:'#007ACC'},
                {name:'Git',icon:FaGit,color:'#F05032'}
            ]
        }
    ]
    return(
        <section id='Skills' className="skills scroll-mt-20 bg-blue-50 pb-20 ">
           <h1 className="text-center py-12 font-semibold text-2xl text-slate-800">Skills</h1>

            <div className="px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          
                  {
                    skillset.map((set,index)=>(
                        <SkillCard title={set.title} image={set.image} skills={set.skills} index={index}/>
                    ))
                  }


           </div>
        </section>
    )
}