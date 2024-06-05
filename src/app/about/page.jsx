'use client'
import { Brain } from '@/components'
import { motion, useInView, useScroll } from 'framer-motion'
import { useRef } from 'react'
const AboutPage = () => {
  const containerRef = useRef();
  const {scrollYProgress} = useScroll({container:containerRef});
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
 const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  const skills = [
    { name: "HTML", level: 70 },
    { name: "CSS", level: 60 },
    { name: "Tailwind", level: 40},
    { name: "JavaScript", level: 70 },
    { name: "React.js", level: 60 },
    {name:"Thee.js", level: 10},
    { name: "Node.js", level: 50 },
    { name: "C++", level: 50 },
    {name:"C", level: 70},
    

  ]
  return (
    <motion.div className="h-full " initial={{y:"-200vh"}} animate={{y:"0vh"}} transition={{duration:1}} >
    
      <div className='h-full overflow-y-scroll lg:flex ' ref={containerRef}>
          <div className='px-4 sm:px-8 md:px-12 lg:px-28 xl:px-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 xl:w-1/2 lg:pr-0 '>
            <div className='flex flex-col gap-4 justify-center '>
              <h1 className='font-bold text-2xl drop-shadow-md'>ABOUT ME</h1>
              <p className='text-lg sm:text-sm'>
                <span className='font-bold text-xl'>Hello</span><br/> I am Subash Kumar Yadav , from Bara district. I am passionate about learning new technologies and I am always eager to learn new things. I am a quick learner and I am always ready to take on new challenges. I am a team player and I am always ready to help my team members. I am a hardworking person and I am always ready to work hard to achieve my goals. I am a creative person and I am always ready to think out of the box. I am a responsible person and I am always ready to take responsibility for my work. I am a punctual person and I am always ready to complete my work on time.
                </p>
              <span className='italic text-sm '>Time and Works are the two things , if you care about , you will be on top.</span>
             
             <div className='self-end'>
             <svg width="165" height="53" viewBox="0 0 165 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.74893 17.7635C52.3447 17.7635 102.941 17.7635 153.536 17.7635C156.504 17.7635 159.472 17.7635 162.441 17.7635C165.747 17.7635 163.027 17.2534 161.317 16.8481C131.38 9.7523 100.261 6.9751 69.6122 5.23935C64.9548 4.97558 58.1608 4.74412 53.1353 4.65683C52.8706 4.65223 49.8859 4.40422 49.2033 4.71924C48.4469 5.06837 48.9329 8.72962 48.9329 9.4418C48.9329 10.1896 49.1706 11.4332 48.8496 12.1463C48.6547 12.5794 48.0461 12.3463 47.8926 12.6872C47.1835 14.2631 48.3164 19.5339 48.5792 17.8259C48.7768 16.5414 48.766 11.6253 50.3475 15.1838C51.3627 17.4679 51.7432 20.0355 52.4488 22.4236C53.2055 24.9848 54.5375 20.7824 54.9037 19.9687C55.8643 17.8339 56.7263 15.6142 57.5874 13.4362C57.9232 12.5868 58.1803 11.0334 58.9605 12.6872C59.0911 12.9641 59.5944 15.6681 59.6678 15.6414C60.7477 15.2487 61.8547 11.3924 62.3724 10.3572C62.4732 10.1555 63.1645 8.26983 63.5374 9.19215C64.4312 11.403 64.8725 14.208 65.2433 16.5568C65.7506 19.7696 65.508 18.738 66.2003 16.6609C66.5149 15.7172 69.9708 16.9842 70.4444 17.0977C74.0558 17.9636 78.0049 19.0619 81.7203 18.0963C87.3421 16.6353 90.6658 11.0828 90.8533 5.55141C90.8645 5.22123 91.1372 1.17827 90.6245 1.16172C88.6818 1.09906 86.5956 8.26879 86.0475 9.64984C81.5655 20.9447 79.8684 33.2584 77.0809 45.0586C76.5394 47.3511 76.4961 50.2839 75.6038 52.4649C75.2886 53.2355 75.5206 50.801 75.5206 49.9684" stroke="#080808" strokeWidth="0.374476" strokeLinecap="round"/>
<path d="M100.61 33.8659C74.6469 33.8659 48.6832 33.8659 22.7196 33.8659C19.1343 33.8659 8.37855 33.8659 11.9638 33.8659C15.3055 33.8659 18.634 34.0887 21.9706 34.2404" stroke="#080808" strokeWidth="0.374476" strokeLinecap="round"/>
<path d="M1 41.3554H65.0353" stroke="#080808" strokeWidth="0.374476" strokeLinecap="round"/>
</svg>

             </div>
             <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
            </div>
            <div className='flex flex-col gap-12 justify-center' ref={skillRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
              <motion.div className='flex flex-wrap gap-2'
               initial={{ x: "-300px" }}
               animate={isSkillRefInView ? { x: 0 } : {}}
              >
              {skills.map((skill, index) => (
              
              <div key={index}  className='rounded p-2 h-fit text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black w-fit'>
                {skill.name} 
              </div>
              ))  
            
              }
              
              </motion.div>
              <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
            </div>
            
            <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EDUCATION
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                   Primary School
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                   Shree Bajrangbali Primary Scholl, Maha Gadhi mai-9 ,Bara{" "}
                  </div>
                  
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                   Diploma in Computer Engineering
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Shree Durga Model Secondary School, Kalaiy, Bara{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2016 - 2020{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    CGPA : 3.39
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    BE-BCT{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                   TU,IOE, Purwanchal Campus, Dharan{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2022 - 2026{" "}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
          </div>
          <div className='hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2  '>
          <Brain scrollYProgress={scrollYProgress} />
          </div>

      </div>
    
     
    </motion.div>
  )
}

export default AboutPage
