import React,{useEffect, useState} from "react";
import Navbar from "./Navbar";

export default function Hero(){
    const [index,setindex]=useState(0);
    const[deleting,setdeleting]=useState(false);
    const[text,settext]=useState("");
    const identities=["Full Stack Developer","AI and ML Enthusiast","Aspiring Software Engineer"];
    const[title,settitle]=useState("");

    const [greeting,setgreeting]= useState("");
    useEffect(()=>{
        const updategreeting= ()=>{
            const hour=new Date().getHours();
            if(hour>=5&&hour<12) setgreeting("Good Morning");
            else if(hour<17) setgreeting("Good Afternoon");
            else setgreeting("Good Evening");
        };
        updategreeting();
    },[]);

    const titles=[greeting,"I am Satyanarayana"]
    const[deleting2,setdeleting2]=useState(false);
    const[index2,setindex2]=useState(0);
    useEffect(()=>{

       let fulltitle=titles[index2];
        let timeout;
         if (index2 === 1 && title === fulltitle && !deleting) {
    return;
         }
        if(!deleting2){
            if(title!==fulltitle){
                timeout=setTimeout(()=>{
                    settitle(fulltitle.slice(0,title.length+1))
                },80)
            }
            else{
                 if (index2 === 0) {
        timeout = setTimeout(() => {
          setdeleting2(true);
        }, 1200);
      }
            }
        }
        else{
            if(title!==""){
                timeout=setTimeout(()=>{
                    settitle(fulltitle.slice(0,title.length-1))
                },80);
            }
            else{
                setdeleting2(false);
                setindex2(1);
            }
        }
        return ()=>clearTimeout(timeout);
    },[title, deleting2, index2, titles]);

    useEffect(()=>{
            let fulltext=identities[index];
            let timeout;
            if(!deleting){
            if(text!==fulltext){
                timeout=setTimeout(()=>{
                    settext(fulltext.slice(0,text.length+1));
                },80);
            }
            else{
                timeout=setTimeout(()=>{
                    setdeleting(true)
                },1200)
            }
        }
        else{
            if(text!==""){
                timeout=setTimeout(()=>{
                    settext(fulltext.slice(0,text.length-1))
                },80);
            }
            else{
                setdeleting(false);
                setindex((i)=>(i+1)%identities.length);
            }
        }
      return ()=> clearTimeout(timeout);
    },[text,deleting,index]);

    return(
        <>
            <section id='Home' className=" hero py-[25vh] flex flex-col lg:flex-row
             gap-8 md:gap-16 lg:gap-16
             scroll-mt-20
             px-6 md:px-12
             items-center justify-center
             max-w-screen-xl mx-auto box-border">
                <div className='hero_left flex flex-col gap-4 max-w-xl'>
                    <h1 className="text-3xl font-bold text-slate-700">Hi,{title}</h1>
                    <h1 className="text-2xl min-h-[2.5rem] font-bold text-slate-700">{text}</h1>
                    <div className="hero_text text-slate-600 leading-relaxed ">
                        <p className="max-w-xl leading-relaxed">I build reliable full stack web applications with clean UI and solid backend logic.
                            Exploring AI-tools to enhance.
                        </p>
                    </div>
                    <div className="btns flex flex-wrap pt-10 gap-10">
                        <button className="btn">Download Resume </button>
                        <button className="btn">Contact Me</button>
                    </div>
                </div>
                <div className='hero_right'>
                        <img src='src/assets/hero_image.jpg' className='h-[300px] w-full max-w-[350px] object-cover'/>
                </div>
            </section>
            
        </>
    )
}