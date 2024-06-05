'use client';
import React, { useEffect, useState } from "react";
import { VscHome } from "react-icons/vsc";
import { IoDocumentText } from "react-icons/io5";
import { MdContactPhone } from "react-icons/md";
import Link  from "next/link";
import { BsPeople } from "react-icons/bs";
import {usePathname} from "next/navigation";
import { FaFileDownload } from "react-icons/fa";
 
const Navbar = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1EyFCl1mh-zEKZ19u77FoWGNlIxdZ0Vt8'; 
    link.download = 'subash_resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
const links = [
    { name: "Home", path: "/", icon: <VscHome size={20} /> },
    { name: "About", path: "/about", icon: <BsPeople size={20} /> },
    { name: "Portfolio", path: "/portfolio", icon: <IoDocumentText size={20} /> },
    { name: "Contact", path: "/contact", icon: <MdContactPhone size={20} /> },
    ];
  const menuName = usePathname();
   const [nav, setNav] = useState('/');
    useEffect(() => {
        setNav(menuName);
    }, [menuName]);
  let headerStyle ='text-sm flex justify-center items-center gap-1 transition-all duration-500 font-semibold  bg-white  rounded-xl px-3  group py-2';

  return (
<div className="w-full">
<div className="w-full px-4 sm:px-8 md:px-12 lg:px-28 xl:-px-48 flex  justify-between transition-all duration-500 items-center  z-10 bg-transparent ">
    <Link href={"/"} passHref className="hidden sm:flex justify-center items-center w-fit px-2 py-2 rounded-lg bg-black text-white font-semibold">
        <span className="px-2">Subash </span>
        <span className="px-2 py-2 rounded-lg bg-white text-black">Kumar Yadav</span>
    </Link>

      <ul className="hidden sm:flex justify-center items-center px-4 py-1 drop-shadow-lg gap-4  ">
        {links.map((link, index) => (
            <li key={index}>
            <Link href={link.path} className={nav===link.path?headerStyle:''}>
              
                <span className={nav===link.path?'':'hidden'}>{link.icon}</span>
                <span>{link.name}</span>
            </Link>
            </li>
        ))}
       
       
      
      </ul>
      <button onClick={handleDownload}  className="bg-white px-4 py-2 flex justify-center items-center gap-1 ring-1 ring-white rounded-lg drop-shadow-sm hover:drop-shadow-md font-semibold hover:font-bold"> <span className="hidden sm:flex"> <FaFileDownload size={20} /> </span> <span className="sm:hidden md:flex">Download</span> CV </button>
      
    </div>
  
  <div className="w-full sm:hidden flex justify-center fixed bottom-1 z-50 px-2 ">
        <ul className=" w-full h-12 flex justify-between px-2 items-center bg-black/70 rounded-xl text-sm ">
        {links.map((link, index) => (
            <li key={index}>
            <Link href={link.path} className={nav===link.path?headerStyle:'p-2 flex justify-center items-center rounded-full'}>
            <span className={nav===link.path?'':'text-white rounded-full'}>{link.icon}</span>
                <span className={nav===link.path?'':'hidden'}>{link.name}</span>
                
            </Link>
            </li>
        ))}
       
        </ul>
      </div>
      </div>
 
  );
};

export default Navbar;