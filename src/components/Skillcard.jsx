import React from "react";

const SkillCard = ({ title, image, skills }) => {

  return (
    <div className="skillcard border border-slate-200 rounded-xl bg-white shadow-md hover:shadow-lg hover:scale-[1.02] overflow-hidden">
            <div className=" flex items-center justify-center bg-slate-50 py-4 gap-2">
            <img src={image} alt={title} className="w-14 h-14 object-contain"/>
             <h1 className="text-center  text-slate-800 font-semibold text-xl">{title}</h1>
            </div>
            <div className="">
                <ul className="flex flex-wrap p-8 justify-center gap-6">
                    {
                      skills.map((skill)=>(
                        <li className="border border-slate-200 rounded-xl py-2 px-4 hover:bg-slate-100 hover:shadow-md ">{skill}</li>
                      ))
                    }
                </ul>
            </div>
    </div>
  );
};

export default SkillCard;
