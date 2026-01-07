import React,{useState,useEffect,useRef} from "react";
import ProjectCard from "./ProjectCard";

const Projects=()=>{
    const sliderRef=useRef(null);
    const projects=[
        {
        title:'Movie Recommendation App',
        image:'src/assets/frontend.png',
        description:'An AI-powered movie recommendation app that suggests films based on user preferences with a conversational chat interface using memory-based responses.',
        tech:['Python','Streamlit','LangChain','Prompt Engineering','LLM Memory'],
        features:['AI-driven movie suggestions','Conversational chat interface','Prompt engineering for accurate recommendations'],
        github:'https://github.com',
        livelink:'https://google.com',
        
        },
          {
        title:'Movie Recommendation App',
        image:'src/assets/frontend.png',
        description:'An AI-powered movie recommendation app that suggests films based on user preferences with a conversational chat interface using memory-based responses.',
        tech:['Python','Streamlit','LangChain','Prompt Engineering','LLM Memory'],
        features:['AI-driven movie suggestions','Conversational chat interface','Prompt engineering for accurate recommendations'],
        github:'https://github.com',
        livelink:'https://google.com',
        
        }

    ]
    const [currentIndex,setcurrentIndex]=useState(1);
    const handleprev=()=>{
        setcurrentIndex(prev=>prev-1);
    }
    const handlenext=()=>{
        setcurrentIndex(prev=>prev+1);
    }
    useEffect(() => {
    if (currentIndex === projects.length + 1) {
      
      setTimeout(() => {
        sliderRef.current.style.transition = "none";
        setcurrentIndex(1);
        sliderRef.current.style.transform = `translateX(-100%)`;
        setTimeout(() => {
          sliderRef.current.style.transition = "transform 0.5s";
        }, 20);
      }, 500);
    }
    if (currentIndex === 0) {
     
      setTimeout(() => {
        sliderRef.current.style.transition = "none";
        setcurrentIndex(projects.length);
        sliderRef.current.style.transform = `translateX(-${projects.length * 100}%)`;
        setTimeout(() => {
          sliderRef.current.style.transition = "transform 0.5s";
        }, 20);
      }, 500);
    }
  }, [currentIndex, projects.length]);

    return(
        <section className='projects py-16 relative items-center  '>
            <div className="font-bold text-center text-3xl mb-10">
                <h1>My Work</h1>
            </div>
            <div className="flex items-center justify-center gap-6 w-full">
       
        <button
          onClick={handleprev}
          className="bg-blue-500 text-white px-3 py-2 rounded-lg"
        >
          ⬅️
        </button>

        
        <div className="relative w-[50%] sm:w-[60%] md:w-[50%] lg:w-[45%] overflow-hidden">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
                <div className="min-w-full flex justify-center">
                    <ProjectCard {...projects[projects.length-1]} />
                </div> 
            {projects.map((project, index) => (
                
              <div
                className="min-w-full flex justify-center"
                key={index}
              >
                <ProjectCard {...project} />
              </div>
            ))}
                <div className="min-w-full flex justify-center">
                    <ProjectCard {...projects[0]} />
                </div>
          </div>
        </div>

        
        <button
          onClick={handlenext}
          className="bg-blue-500 text-white px-3 py-2 rounded-lg"
        >
          ➡️
        </button>
      </div>
            
        </section>
    );
}
export default Projects;