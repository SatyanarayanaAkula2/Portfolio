import React,{useState} from "react";

export default function Navbar(){
    return(
        <nav id='navbar' className="navbar  fixed top-0 left-0 w-full z-50 flex items-center lg:px-24 h-20 bg-blue-50 backdrop-blur-md text-slate-700">
            <div className="heading flex flex-1">
                <div className="font-bold text-xl ">Satya<span className="text-blue-500">Narayana</span></div>
            </div>
            <div className="Links flex-1">
                <ul className="flex justify-center gap-12 ">
                    <li className="hover:text-blue-700"><a href='#Home'>Home</a></li>
                    <li className="hover:text-blue-700"><a href='#Skills'>Skills</a></li>
                    <li className="hover:text-blue-700"><a href='#Projects'>Projects</a></li>
                    <li className="hover:text-blue-700"><a href='#Certifications'>Certifications</a></li>
                    <li className="hover:text-blue-700"><a href='#About'>About</a></li>
                </ul>
            </div>
            <div className="login_prof flex flex-1 justify-end">
                <button className="btn"><a href='#Contact'>contact</a></button>
            </div>
        </nav>
    )
}