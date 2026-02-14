import React,{useState} from "react";
import CertificationCard from "./CertificationCard";

function Certfications(){
    const certifications=[
        {
            title:'Data Analytics Job Simulation',
            logo:'src/assets/deloitte.jpg',
            link:'',
            completion:'June,2025',
            skills:'Data Analysis using Tableau and Excel',
            issuer:'Deloitte',
            color:'blue'
        },
        {
            title:'TCS iON Career Edge - Young Professional',
            logo:'src/assets/deloitte.jpg',
            link:'',
            completion:'May,2025',
            skills:'Soft Skills',
            issuer:'TCS iON',
            color:'green'
        },
        {
            title:'Introduction to Machine Learning',
            logo:'src/assets/deloitte.jpg',
            link:'',
            completion:'Sep,2024',
            skills:'Machine Learning',
            issuer:'IIT Kharagpur',
            color:'orange'
        },
        {
            title:'Angular',
            logo:'src/assets/deloitte.jpg',
            link:'',
            completion:'June,2025',
            skills:'Angular Web Framework',
            issuer:'Infosys Springboard',
            color:'yellow'
        },
        {
            title:'JavaScript',
            logo:'src/assets/deloitte.jpg',
            link:'',
            completion:'June,2025',
            skills:'JavaScript Scripting Language',
            issuer:'Infosys Springboard',
            color:'blue'
        }
    ]
    return(
       <section id='Certifications' className="certification-display my-4 bg-blue-50 scroll-mt-20 py-12 ">
        <div className=" font-bold py-6 text-center text-3xl">
            <p>My Certifications</p>
        </div>
        <div className='main  py-16 px-20 justify-items-center  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
            {
                certifications.map((certification,key)=>(
                    <CertificationCard title={certification.title} logo={certification.logo} link={certification.link} completion={certification.completion} skills={certification.skills}  issuer={certification.issuer} color={certification.color} id={key} />
                ))
            }
        </div>
       </section>
    )
}

export default Certfications;