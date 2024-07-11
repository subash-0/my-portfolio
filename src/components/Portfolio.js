"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useRef, useState } from "react";
const works = [
    {
        id: 1,
        color: "from-indigo-500 via-purple-500 to-pink-500",
        title: "3S-Finder",
        desc: " it is a project made to help people around dharan to not worry about for room seeking . It is an open for everyone to create a listing of room , vacant around. It includes the features like filtering of listing according to status (vacant or not) , pricing , location and etc. it is hosted on render.com",
        imag: "https://images.pexels.com/photos/20396077/pexels-photo-20396077/free-photo-of-bed-near-windows.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        link: "https://threes-finder.onrender.com/",
    },
    {
        id: 2,
        color: "from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%",
        title: "3s-food-delivery",
        desc: "  It  is a showcase project design for practice using react  and tailwind css. It is hosted on github pages . it include the features like showcasing the food according to the country i.e. nepali food ,indian food , thai food  .  which includes the price and restaurant’s name . ",
        imag: "https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        link: "https://subash-0.github.io/3s-food-delivery/",
    },
    {
        id: 3,
        color: "from-green-400 to-blue-500",
        title: "Youtube clone",
        desc: "  It has the same features as that of youtube  original excluding features like comment, like share and subscribe. Visitors can search, play video and have feature of infinite scroll and top loading bar.",
        imag: "https://images.pexels.com/photos/13883890/pexels-photo-13883890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        link: "https://github.com/subash-0/youtubeclone",
    },
    {
        id: 4,
        color: "from-pink-500 to-yellow-500",
        title: "Ledger",
        desc: "A digital khata where a person can add customer , product in his/her store and can add the  transaction with due amount . it includes home page showing today’s due , today’s payment and  today’s  total amount . It also shows the today’s customer. It has due page where a person can filter the customer with due and can clear the due.",
        imag: "https://images.pexels.com/photos/164686/pexels-photo-164686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        link: "https://github.com/subash-0/mini-hackthan-01",
    },
    {
        id: 5,
        color: "from-green-400 to-blue-500",
        title: "Dashboard",
        desc: " A dashboard for 3s solutions which have customer and others showing revenues  and others  dealing .  It includes  the data manipulation using sync fusion charts. ",
        imag: "https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        link: "https://github.com/subash-0/3s-solution-DashBoard",
    },
    {
        id: 6,
        color: "from-purple-400 via-pink-500 to-red-500",
        title: "Solar System",
        desc: "  Using three js , the revolution of planets around the sun has been implemented . showing their speed of revolution and their own orbital spin. ",
        imag: "https://images.pexels.com/photos/1983032/pexels-photo-1983032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        link: "https://github.com/subash-0/solarsystemThreejs",
    },
    {
        id: 7,
        color: "from-green-700 to-yellow-500",
        title: "SOMES",
        desc: " Website for  Society of mechanical engineering students  ",
        imag: "https://images.pexels.com/photos/3785926/pexels-photo-3785926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        link: "https://someserc.ioepc.edu.np/",
    },
];
const Portfolio = () => {
    const [current, setCurrent] = useState({
        x: 0,
        y: 0,
    });
    const animateRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: animateRef });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
    useEffect(() => {
        const handleMouseMove = (e) => {
            setCurrent({
                x: e.clientX / window.innerWidth,
                y: (e.clientY / window.innerHeight) * 100 + 30,
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <div className="h-[1200vh]" ref={animateRef}>
                <motion.div className="w-full h-[calc(100vh-6rem)] relative flex justify-center items-center p-4">
                    <motion.h1 style={{y:current.y}} className="text-xl sm:text-2xl md:text-4xl lg:text-8xl text-white flex justify-center items-center font-extrabold uppercase h-96 w-1/2 ring-2 ring-white bg-black rounded-lg ">
                    <span>My Works</span>
                    
                    </motion.h1>
                </motion.div>
                <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex">
                        <div className="h-screen w-screen flex justify-center items-center  bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500" />
                        {works.map((work) => (
                            <div
                                key={work.id}
                                className={`h-screen w-screen flex justify-center items-center  bg-gradient-to-r ${work.color}`}
                            >
                                <div className=" flex flex-col gap-6 text-white ">
                                    <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                                        {work.title}
                                    </h1>
                                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[320px] rounded">
                                        <Image
                                            src={work.imag}
                                            fill
                                            sizes="4xl"
                                            alt={work.title}
                                            className="rounded"
                                        />
                                    </div>
                                    <p className="  w-80 md:w-96 lg:w-[600px]  xl:w-[800px]">
                                        {work.desc}
                                    </p>
                                    <Link
                                        href={work.link}
                                        target="_blank"
                                        passHref
                                        className="ring-1 w-fit ring-white rounded px-8 hover:bg-white hover:text-black hover:ring-white self-end"
                                    >
                                        Demo
                                    </Link>
                                </div>
                            </div>
                        ))}
                        <div className="h-screen w-screen flex justify-center items-center  bg-gradient-to-r from-yellow-500 to-green-500" />
                    </motion.div>
                </div>
            </div>
            <div className="h-screen w-screen flex flex-col justify-center items-center text-center">
                <h1 className="text-2xl sm:text-4xl flex flex-col gap-1">
                    Do You Have Project ?
                    <span className="text-sm text-red-800">
                        If you want to hire me, click 0n white dot{" "}
                    </span>
                </h1>
                <div className="relative">
                    <motion.svg
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                        viewBox="0 0 300 300"
                        className="h-64 w-64 md:h-[400px] md:w-[400px]"
                    >
                        <defs>
                            <path
                                id="circlePath"
                                d="M 150, 150 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                            />
                        </defs>
                        <text fill="#000">
                            <textPath
                                xlinkHref="#circlePath"
                                className="text-lg drop-shadow-md uppercase"
                            >
                                Front End Developer
                            </textPath>
                        </text>
                    </motion.svg>
                    <Link
                        href="/contact"
                        passHref
                        className="w-16 h-16 md:w-28 md:h-28 absolute top-0 bottom-0 left-0 right-0 m-auto bg-black text-white rounded-full flex flex-col items-center justify-center"
                    >
                        Hire Me
                        <div className="bg-white h-1 w-1 rounded-full absolute bottom-2" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default Portfolio;
