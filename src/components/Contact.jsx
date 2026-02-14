import React from "react";

export default function Contact(){
    return(
        <section id='Contact' className='py-16 bg-slate-50 scroll-mt-20'>
            <p className='text-xl font-bold text-center'>Contact Me</p>
            <div className=' py-16 flex justify-center '>
                <div className='w-full max-w-lg bg-white shadow-lg rounded-xl p-16'>
                    <form action="https://api.web3forms.com/submit" method="POST" className='flex flex-col gap-6'>
                      <input type="hidden" name="access_key" value="4f4e536f-27bf-42fe-93af-082968a6e021"></input>
                        <input className='border border-slate-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400' type='text' name='name' placeholder='Enter your name'/>
                        <input className='border border-slate-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400' type='email' name='email' placeholder='Enter your email'/>
                        <textarea className='border border-slate-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400'  name='message' placeholder="enter Your query/message"/>
                        <button className='btn w-1/2 flex mx-auto '>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}