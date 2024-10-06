"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { learningStats } from "@/constants";

export default function Home() {
  useEffect(() => {
    const text = document.getElementById("text");
    const bird1 = document.getElementById("bird1");
    const bird2 = document.getElementById("bird2");
    const btn = document.getElementById("btn");
    const rocks = document.getElementById("rocks");
    const forest = document.getElementById("forest");
    const water = document.getElementById("water");
    const header = document.getElementById("header");
    const joinNow = document.getElementById("joinNow");

    const handleScroll = () => {
      const value = window.scrollY;

      if (text) text.style.top = 100 + value * -0.5 + "%";
      if (bird1) {
        bird1.style.top = value * -1.0 + "px"; 
        bird1.style.left = value * 2 + "px"; 
      }
      if (bird2) {
        bird2.style.top = value * -1.0 + "px"; 
        bird2.style.left = value * -5 + "px"; 
      }
      if (btn) btn.style.marginTop = value * 1.5 + "px";
      if (rocks) rocks.style.top = value * -0.12 + "px";
      if (forest) forest.style.top = value * 0.25 + "px";
      if (header) header.style.top = value * 0.5 + "px";
      if (joinNow) joinNow.style.marginTop = value * 1.5 + "px";
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="overflow-x-hidden min-h-screen">
      <div className="w-full relative min-h-screen bg-blue-50 flex justify-center flex-col items-center text-center para_before">
        <h2 
          id="text" 
          className=" text-[#094b65] mb-[400px] text-[120px] bold animate_inX"
          style={{ "--index": 1 } as React.CSSProperties}
          >
          <span className="text-[20px]">learn with</span>
          <br />
          SDG learning
          
        </h2>
        
        <img
          id="bird1"
          src="/bird1.png"
          alt="Bird 1"
          className="parallax_img absolute animate_inY"
          style={{ "--index": 2 } as React.CSSProperties}
        />
        <img
          id="bird2"
          src="/bird2.png"
          alt="Bird 2"
          className="parallax_img absolute animate_inY"
          style={{ "--index": 3 } as React.CSSProperties}
        />
        <div className=" absolute top-[60%] left-1/2 transform -translate-x-1/2 z-[2]">
          <Link className="animated-button bg-[#094b65] text-white  py-4 px-10 animate_inX  rounded-full" style={{ "--index": 1 } as React.CSSProperties} href="/">
            <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
            <span className="text">Join Now!</span>
            <span className="circle"></span>
            <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
          </Link>
        </div>
        

        <img
          id="forest"
          src="/forest.png"
          alt="Forest"
          className="parallax_img absolute "

        />
        <img
          id="rocks"
          src="/rocks.png"
          alt="Rocks"
          className="parallax_img absolute"
        />
        <img
          id="water"
          src="/water.png"
          alt="Water"
          className="parallax_img absolute"
        />
      </div>
      <div className="bg-[#21949a] w-full relative pt-32 pb-[400px] whyus_before">
        <div className="flex  items-center w-full lg:w-[1280px] mx-auto justify-center ">
        <div className="flex-1">
          <Image src="/whyus.png" alt="" width={500} height={500} className="w-[600px] object-cover"/>
        </div>
        <div className="flex-1">
          <h2 className="capitalize text-[60px] font-bold">We provide <br/><Link href="/" className=" text-[55px] px-7 border-2 border-black rounded-full bold bg-[#30abb1]">smart</Link>  online<br/> education</h2>
          <p className="text-gray-800 text-lg">
            Empowering students with flexible, interactive learning resources that inspire growth, knowledge, and success in every field.
          </p>
        </div>
        </div>
       
      </div>
      <div className="bg-[#fff] w-full relative py-32">
        <div className="flex w-full lg:w-[1280px] mx-auto justify-center items-center">
          <div className="text-left">
            <h2 className="capitalize text-[60px] font-bold">It's easy to start <br/> 
              <Link href="/" className="text-[55px] px-7 border-2 border-black rounded-full medium bg-[#30abb1]">learning</Link> 
            </h2>
            <p className="text-gray-500 text-lg pt-10 w-[75%]">
              Unlock unlimited learning opportunities with just a few clicks. Start your journey today and grow your skills effortlessly.
            </p>
            <ul className=" flex flex-col gap-2 pt-5">
            {learningStats.map((item)=>(
              <div className="flex gap-2 items-center">
                  <div className="bg-[#21949a] flex justify-center items-center p-2 rounded-full">
                    <Image src="/check.svg" alt="" width={18} height={18} className=" object-cover"/>
                  </div>
                  <p className="text-[18px]">{item.title}</p>
              </div>
            ))}
            </ul>
          </div>

          <div className="flex justify-center items-center">
            <Image src="/start.png" alt="" width={500} height={500} className="w-[600px] object-cover"/>
          </div>
        </div>
      </div>
      <div className="bg-[#fff] w-full relative py-32">
        <div className="flex w-full lg:w-[1280px] mx-auto justify-center items-center">
          <div className="flex justify-center items-center flex-1">
            <Image src="/teach.svg" alt="" width={500} height={500} className="w-[1000px] object-cover"/>
          </div>
          <div className="text-left flex-1">
          <h2 className="capitalize text-[60px] font-bold">What is a <br/> 
              <Link href="/" className="text-[55px] px-7 border-2 border-black rounded-full medium bg-[#30abb1]">SDG</Link>?
            </h2>
            <p className="text-gray-800 text-lg pt-10 w-[75%]">
              A Sustainable Development Goal (SDG) is a global objective set by the United Nations to address pressing challenges such as poverty, inequality, climate change, and more, aiming for a better and sustainable future for all.
            </p>

          </div>

          
        </div>
      </div>
      <div className="bg-white py-32">
        <div className="bg-[#21949a] w-full flex lg:w-[1280px] mx-auto justify-center items-center pt-5 px-10  rounded-[18px]">
          <div className="flex-1">
            <Image src="/teach.svg" alt="" width={500} height={500} className="w-[500px] object-cover"/>
          </div>
          <div className="flex-1">
              <h2 className="text-[50px] font-bold">Get Started Right Now!</h2>
              <p className="text-lg text-gray-800 mt-4">
                Get a taste of what it feels like to learn on a platform designed to help you achieve your goals. Discover new skills and transform your learning experience today!
              </p>
              <div className="mt-10">
                <Link href="/" className=" py-4 px-9 rounded-full border-2 border-transparent duration-200 transition-all ease-linear hover:bg-[#fff] hover:border-black bg-[#30abb1]">Get Started</Link>
              </div>
            </div>

        </div>
      </div>
    </main>
  );
}