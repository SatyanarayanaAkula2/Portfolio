import React from "react";

const SkillCard = ({ title, image, skills,index }) => {
   const position=index%3;
   const animationclass=position==0?'animate-left':position==1?'animate-center':'animate-right';
  return (
    <div style={{animationDelay:`${index*0.12}s`}} className={`skillcard border border-slate-200 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] overflow-hidden ${animationclass} animate-view `}>
            <div className=" flex items-center justify-center bg-slate-50 py-4 gap-2">
            <img src={image} alt={title} className="w-14 h-14 object-contain"/>
             <h1 className="text-center  text-slate-800 font-semibold text-xl">{title}</h1>
            </div>
            <div className="">
                <ul className="flex flex-wrap p-8 justify-center gap-6">
                    {
                      skills.map((skill)=>{
                        const Icon=skill.icon;
                        return(
                        <li key={skill.name} className="flex items-center gap-3 border border-slate-200 rounded-xl py-2 px-4 hover:bg-slate-100 hover:shadow-md ">
                          {Icon && (<Icon className='text-xl' style={{color:skill.color||'#000000'}}/>)}
                          <span>{skill.name}</span>
                        </li>
                      );
                    })
                    }
                </ul>
            </div>
    </div>
  );
};

export default SkillCard;
