import React,{useState} from "react";

export default function Navbar(){
    return(
        <nav className="navbar fixed top-0 w-full z-50 flex items-center px-[calc(15vw)] h-20 bg-blue-50 backdrop-blur-md text-slate-700">
            <div className="heading flex flex-1">
                <div className="font-bold text-xl ">Satya<span className="text-blue-500">Narayana</span></div>
            </div>
            <div className="Links flex-1">
                <ul className="flex justify-center gap-12 ">
                    <li className="hover:text-blue-700">Home</li>
                    <li className="hover:text-blue-700">Skills</li>
                    <li className="hover:text-blue-700">Projects</li>
                    <li className="hover:text-blue-700">About</li>
                </ul>
            </div>
            <div className="login_prof flex flex-1 justify-end">
                <button className="btn">login</button>
            </div>
        </nav>
    )
}