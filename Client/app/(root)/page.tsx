import Encryption from "@/components/Encryption";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
<<<<<<< HEAD
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
=======
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
>>>>>>> 5df6a1e (header done)
      </div>
    </main>
  );
}
