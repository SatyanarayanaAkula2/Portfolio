import React from "react";

export default function About(){
    
    return(
        <section id='About' className='about py-8 scroll-mt-20'>
            <div className='text-center font-semibold text-xl py-8'>
                <h1>About Me</h1>
            </div>

            <div className='about animate-left  grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                <div className='flex justify-center'>
                    <img src='src/assets/frontend.png'/>
                </div>

                <div className='about animate-right   md:w-3/4 text-l border bg-blue-500/20 backdrop-blur-md border-blue-200/30 shadow-md hover:translate-y-1 hover:shadow-xl transition-all duration-300 p-16 m-4 rounded-xl'>
                    <ul className='flex flex-col gap-6 '>
                    <li>I’m a Full Stack Developer with a strong interest in building clean, scalable web applications. I enjoy working across the stack—from crafting responsive user interfaces to designing efficient backend APIs.</li>
                    <li>Alongside full stack development, I have hands-on experience with AI and Machine Learning concepts, including working with ML algorithms and neural network architectures. I have explored practical applications of these techniques and enjoy understanding how intelligent systems are designed and optimized.</li>
                    <li>Currently, I am strengthening my problem-solving skills by actively learning Data Structures and Algorithms, while continuing to explore AI-driven features that enhance application intelligence and user experience.</li>
                    </ul>
                </div>
            </div>

            <div className='bg-blue-50 py-16'>
                <p className='text-xl text-center font-bold'>Coding Profiles</p>
                <div className='py-8 flex gap-6 justify-center'>
                    <button className='code_platform animate-center   btn'>LeetCode</button>
                    <button className='code_platform animate-center btn'>GeeksForGeeks</button>
                </div>
            </div>

        </section>
    )
}