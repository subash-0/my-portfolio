'use client'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { FaFacebookMessenger, FaGithub, FaInstagram, FaLinkedin, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
const ContactPage = () => {
  const socials = [
    {icon:<FaGithub size={15} />, link:"https://github.com/subash-0"},
    {icon:<FaLinkedin size={15} />, link:"https://www.linkedin.com/in/subash-kumar-yadav"},
    {icon:<FaPhoneAlt size={15} />, link:"tel:+977-981-120-2751"},
    {icon:<FaWhatsapp size={15} />, link:"https://wa.me/9811202751"},
    {icon:<FaFacebookMessenger size={15} />, link:"https://m.me/allihavenothing"},
    {icon:<FaInstagram size={15} />, link:"https://www.instagram.com/subash0_"}
  ]
 
  let greeting = 'Say , Hello!'
  const form = useRef();
  const emailRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_q0630xd', 'template_tv7ws8l', form.current, {
        publicKey: 'U7nTJjrcEN9WbjMZ1',
      })
      .then(
        () => {
         toast.success('Message sent successfully');
          form.current.reset();
         
        },
      (error) => {
        toast.error('Something went wrong, Please try again!');
        },
      );
  };
 useEffect(() => {
  emailRef.current.focus();
  }, [])
  return (
    <motion.div className="h-full mb-6 overflow-y-scroll  sm:py-4 " initial={{y:"-200vh"}} animate={{y:"0vh"}} transition={{duration:1}} >
    <div className="h-full flex flex-col lg:flex-row px-4  sm:px-8 md:px-12 lg:px-28 xl:px-48  ">
       <div className='h-1/3 lg:h-full lg:w-1/2  flex flex-col gap-4 sm:gap-8 items-center justify-center text-4xl'>
        <motion.div>
          {greeting.split('').map((letter, index) =>(
            <motion.span key={index} initial={{opacity:1}} animate={{opacity:0}} transition={{duration:3, repeat:Infinity,delay:index*0.1}}>{letter} </motion.span>
          ))}
           &#128522;
        </motion.div>
        <div className='flex flex-col justify-center items-center '>
          <h1 className='text-2xl font-bold' >AT</h1>
          <div className='flex justify-center items-center gap-4 py-4'>
           {
              socials.map((social, index) => (
                <Link href={social.link} key={index} target='_blank' className='bg-white text-black rounded-full  drop-shadow-md hover:drop-shadow-xl p-2' >{social.icon} </Link>
                 
              ))
           }
            
            
            
          </div>

        </div>
       
       </div>
       <form ref={form} onSubmit={sendEmail} className='h-2/3 mb-4 sm:mb-0 lg:h-full lg:w-1/2 flex flex-col justify-center p-10 gap-6 sm:p-24 sm:gap-8 bg-white rounded-2xl'>
  <div className='flex flex-col gap-2'>
    <label htmlFor="user_email" className='text-black font-semibold' >Valid Email Address :</label>
    <input type="email" id="user_email" name="user_email" placeholder='Your valid Email..' ref={emailRef} className='bg-transparent border-b-2 border-b-black outline-none' required />
  </div>
  <div className='flex flex-col gap-4'>
    <label htmlFor="user_message" className='text-black font-semibold'>Your Message:</label>
    <textarea type="" id="user_message" name="user_message" className='bg-transparent border-b-2 resize-none border-b-black outline-none py-4' placeholder='Your Message ...' required />
  </div>
  <span>Regards</span>
  <button type='submit' className='bg-sky-800 rounded font-semibold text-white p-4'>Send</button>
 
</form>

       
     </div>
   </motion.div>
  )
}

export default ContactPage
