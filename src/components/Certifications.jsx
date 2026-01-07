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
            title:'Data Analytics Job Simulation',
            logo:'src/assets/deloitte.jpg',
            link:'',
            completion:'June,2025',
            skills:'Data Analysis using Tableau and Excel',
            issuer:'Deloitte',
            color:'green'
        },
        {
            title:'Data Analytics Job Simulation',
            logo:'src/assets/deloitte.jpg',
            link:'',
            completion:'June,2025',
            skills:'Data Analysis using Tableau and Excel',
            issuer:'Deloitte',
            color:'orange'
        },
        {
            title:'Data Analytics Job Simulation',
            logo:'src/assets/deloitte.jpg',
            link:'',
            completion:'June,2025',
            skills:'Data Analysis using Tableau and Excel',
            issuer:'Deloitte',
            color:'yellow'
        },
        {
            title:'Data Analytics Job Simulation',
            logo:'src/assets/deloitte.jpg',
            link:'',
            completion:'June,2025',
            skills:'Data Analysis using Tableau and Excel',
            issuer:'Deloitte',
            color:'blue'
        }
    ]
    return(
       <section className="certification-display my-4 bg-blue-50">
        <div className=" font-bold py-6 text-center text-3xl">
            <p>My Certifications</p>
        </div>
        <div className='main  py-16 px-20 justify-items-center  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
            {
                certifications.map((certification,key)=>(
                    <CertificationCard title={certification.title} logo={certification.logo} link={certification.link} completion={certification.completion} skills={certification.skills}  issuer={certification.issuer} color={certification.color} />
                ))
            }
        </div>
       </section>
    )
}

export default Certfications;