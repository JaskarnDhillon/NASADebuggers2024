"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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
          className=" text-[#094b65] mb-[300px] text-[120px] bold animate_inX"
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

      <div className="bg-[#075470] relative p-28">
        <h2>Lorem, ipsum.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatibus voluptatum eos, totam minima officiis aliquid facilis.
          Culpa, saepe? Architecto, et sapiente repellendus maxime ea delectus
          explicabo fugit, libero veritatis nemo quam nam assumenda incidunt?
          Ipsum voluptatibus id facilis, asperiores expedita dolor vero fugit
          maxime? Enim earum a numquam voluptatibus?
        </p>
      </div>
    </main>
  );
}
