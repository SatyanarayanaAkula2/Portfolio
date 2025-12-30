import React from "react";
import ProjectCard from "./ProjectCard";

const Projects=()=>{
    const projects=[
        {
        title:'Movie Recommendation App',
        image:'',
        description:'An AI-powered movie recommendation app that suggests films based on user preferences with a conversational chat interface using memory-based responses.',
        tech:['Python','Streamlit','LangChain','Prompt Engineering','LLM Memory'],
        features:['AI-driven movie suggestions','Conversational chat interface','Prompt engineering for accurate recommendations'],
        github:'',
        livelink:'',
        
        }

    ]
    return(
        <section className='projects py-16'>
            <div className="font-bold text-center text-xl">
                <h1>My Work</h1>
            </div>
            <div className="projects-bar ">
            <ProjectCard title='Movie Recommendation App' image='/src/assets/frontend.png' description='An AI-powered movie recommendation app that suggests films based on user preferences with a conversational chat interface using memory-based responses.' 
            tech={['Python','Streamlit','LangChain','Prompt Engineering','LLM Memory']} github='' livelink='' features={['AI-driven movie suggestions','Conversational chat interface','Prompt engineering for accurate recommendations']} />
            </div>
        </section>
    );
}
export default Projects;