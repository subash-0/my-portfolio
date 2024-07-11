"use client";
import Image from "next/image";
import Link from "next/link";
import { motion} from "framer-motion";
import { useEffect, useState } from "react";
const Home = () => {
  const [coordinate, setCoordinate] = useState({
    x: 0.5,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoordinate({
        x: e.clientX / window.innerWidth,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [coordinate]);

  return (
    <motion.div
      className="h-full  sm:cursor-pointer"
      initial={{ y: "-200vh" }}
      animate={{ y: "0vh" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex  flex-col sm:flex-row px-4   justify-center items-center  sm:px-8 md:px-12 lg:px-28 xl:px-48  ">
        <div className="relative w-80 h-96 md:w-96 md:h-64 lg:w-[800px] lg:h-[800px] max-w-full max-h-full rounded-lg z-10">
          <Image
            src="./subash1.png"
            alt="/"
            sizes="sm"
            priority={true}
            fill
            className="object-contain z-10 drop-shadow-[0_35px_35px_rgba(100,100,100,1)] mix-blend-multiply"
          />
        </div>
        <div className="h-1/2 sm:h-96 sm:w-1/2 flex flex-col z-10 gap-3 sm:gap-8 justify-center items-center">
          <motion.h1
            initial={{ x: "-200vh" }}
            animate={{ x: "0vh" }}
            transition={{ duration: 1 }}
            className=" text-3xl sm:text-4xl font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent "
          >
            Unleashing Creative Designs with Every Click
          </motion.h1>
          <p>
            Welcome to my portfolio , where innovation and creativity converge ,
            with a keen eye for aesthetics and a mastery of code, my portfolio
            showcase a diverse collection of projects that reflect my commitment
            to excellence{" "}
          </p>
          <div className="flex justify-center items-center gap-8 z-10">
            <Link
              href="/portfolio"
              className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500  ring-2 ring-white text-white px-2 py-3 rounded-lg  hover:text-blue-700"
            >
              View my works{" "}
            </Link>
            <Link
              href="/contact"
              className="bg-gradient-to-r h-12 flex justify-center items-center text-center p-1 w-28 from-pink-500 via-red-500 to-yellow-500 rounded-lg hover:text-white   "
            >
              {" "}
              <span className="w-full h-full flex justify-center items-center hover:bg-transparent rounded-lg bg-black text-white ">
                Contact Me{" "}
              </span>{" "}
            </Link>
          </div>
        </div>
        <motion.h1
          style={{ opacity: coordinate.x }}
          className="text-4xl absolute top-48 left-40 rotate-90 sm:text-8xl bg-clip-text sm:flex text-center  w-full overflow-y-hidden text-white  sm:-rotate-12 z-0 skew-x-3 font-bold  sm:left-0  drop-shadow-md"
        >
          Subash Kumar Yadav
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default Home;
