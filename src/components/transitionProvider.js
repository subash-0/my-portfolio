'use client'
import {motion, AnimatePresence } from "framer-motion"
import Navbar from "./Navbar"
import { usePathname } from "next/navigation"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const TransitionProvider = ({children}) => {
    const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
  <div key={pathname} className="w-screen h-screen bg-gradient-to-b from-green-50 to-orange-200">
    <motion.div className="h-screen w-screen fixed bg-red-200 rounded-b-[100px] z-40"
    animate={{width: "0vw"}}
    exit={{width: "140vw"}}
    transition={{duration: 0.5 , ease: "easeOut"}}
    />
     <motion.div className="fixed m-auto inset-0 cursor-default bg-red-400 px-3 rounded-lg text-white text-8xl z-50 w-fit h-fit"
    initial={{opacity: 1}}
    animate={{opacity: 0}}
    exit={{opacity: 1}}
    transition={{duration: 0.5 , ease: "easeOut"}}
    > {pathname.substring(1)} </motion.div>
    <motion.div className="h-screen w-screen fixed bg-black/75 rounded-t-[20px] z-40"
    initial={{width: "140vw"}}
    animate={{width: "0vhw", transition: {delay: 0.5}}}
   
    />
     <div className="h-12 sm:h-24 flex justify-center items-center">
          <Navbar />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            />
          </div>
          <div className="h-[calc(100vh-6rem)]">
          {children}
          </div>
       </div>
    </AnimatePresence>
  )
}

export default TransitionProvider
