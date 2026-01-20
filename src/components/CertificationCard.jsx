import React from "react";

export default function CertificationCard({title,logo,link,completion,skills,issuer,color,id}){
    const colors={
        blue:["border-blue-500",'bg-blue-600'],
        green:["border-green-500",'bg-green-600'],
        orange:["border-orange-500",'bg-orange-600'],
        yellow:["border-yellow-500",'bg-yellow-600'],
        red:["border-red-500",'bg-red-600'],
    }
    const animationdelay=id*1000;
    return(
        <div style={{animationDelay:`${animationdelay}ms`}}className={`certify_card animate-appearance  relative border  border-2 rounded-xl  shadow-sm hover:translate-y-1 hover:shadow-xl transition-all duration-300 ${colors[color][0]} py-8 px-12 text-center flex flex-col gap-6 max-w-md w-full`}>
            <div className='text-xl font-semibold text-slate-900 '>
                <p>{title}</p>
                <div className={`w-full h-[2px] ${colors[color][1]} mx-auto mt-2 rounded-full`}></div>
            </div>

            <div className='flex gap-6'>
                <img className='w-1/4' src={logo}/>
                <p>{completion}</p>
            </div>

            <div>
               {skills}
            </div>

            <div className="text-blue-800 ">
                <a href='www.google.com'>Visit now</a>
            </div>

            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                <div className={`${colors[color][1]} rounded-full  text-white text-xs font-semibold px-6 py-1 shadow-md`}>CERTIFIED</div>
            </div>
        </div>
    )
}