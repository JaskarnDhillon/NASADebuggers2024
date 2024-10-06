import React from 'react';

const About = () => {
  return (
    <div className=" ">
      <div
        className="relative bg-cover bg-center w-full h-[1500px] aboutusbg"
        style={{ backgroundImage: "url('/aboutusbackground.jpg')" }}
      >
        <div className="flex flex-col items-center text-white">
          <h1 className="text-8xl font-bold mt-[100px]">The Team Behind</h1>
          <h1 className="text-8xl font-bold bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent mt-5">
            SDG Labs
          </h1>
        </div>

        {/* Left Franco */}
        <div className="mt-10 flex">
          <img
            src="/francoAvatar.png"
            alt="Franco's Avatar"
            className="mt-[200px]"
          />
          <div className="ml-4 mt-[300px]">
            <h2 className="text-6xl font-bold text-white">Francesco Coniglione (CEO)</h2>
            <h3 className="text-3xl font-bold mt-10 text-white">
              Franco is the project leader and CEO of SDG Innovation Lab. His
              ideas and constant effort are what make him a valuable CEO.
            </h3>
          </div>
        </div>

      <div className='relative bg-cover bg-center w-full h-[1500px] z-10 mt-[-100px]'
       style={{ backgroundImage: "url('/aboutusbackgroundwithoutsun.png')" }}>
        {/* Right Jaskarn */} 
        <div className="mt-10 flex z-10">
          <div className="mr-4 ml-10 mt-[300px]">
            <h2 className="text-6xl font-bold text-white">Jaskarn Dhillon (CTO)</h2>
            <h3 className="text-3xl font-bold mt-10 text-white">
              Jaskarn, our Chief Technology Officer (CTO), is exceptionally smart and brings a wealth of knowledge to our team. His expertise and innovative thinking drive our technological advancements, propelling our company forward in the industry.
            </h3>
          </div>
          <img
            src="/jasAvatar.png"
            alt="Jaskarn's Avatar"
            className="mt-[200px]"
          />
        </div>

        {/* Left Beni */}
        <div className="mt-[-200px] flex">
          <img
            src="/beniAvatar.png"
            alt="Beni's Avatar"
            className="mt-[200px]"
          />
          <div className="ml-4 mt-[300px]">
            <h2 className="text-6xl font-bold text-white">Benjamin Noje (CPO)</h2>
            <h3 className="text-3xl font-bold mt-10 text-white">
              Beni, our Chief Product Officer (CPO), is exceptionally creative and excels in front-end development. His innovative designs and expertise in crafting engaging user interfaces greatly enhance our products and drive our company's success.
            </h3>
          </div>
        </div>

        <div className='relative bg-cover bg-center w-full h-[1500px] z-10 mt-[-350px]'
       style={{ backgroundImage: "url('/aboutusbackgroundwithoutsun.png')" }}>

        {/* Right Kalem */}
        <div className="mt-[100px] flex">
          <div className="mr-4 ml-10 mt-[300px]">
            <h2 className="text-6xl font-bold text-white">Kalem Sdao (CMO)</h2>
            <h3 className="text-3xl font-bold mt-10 text-white">
              Kalem, our Chief Marketing Officer (CMO), is a highly intelligent businessman who brings exceptional strategic insight to our team. His expertise in marketing and keen business acumen drive our growth and strengthen our market presence.
            </h3>
          </div>
          <img
            src="/kalemAvatar.png"
            alt="Kalem's Avatar"
            className="mt-[200px]"
          />
        </div>

        {/* Left Mikey */}
        <div className="mt-[-200px] flex">
          <img
            src="/mikeyAvatar.png"
            alt="Mikey's Avatar"
            className="mt-[200px]"
          />
          <div className="ml-4 mt-[300px]">
            <h2 className="text-6xl font-bold text-white">Mike Rosanelli (COO)</h2>
            <h3 className="text-3xl font-bold mt-10 text-white">
              Mike, our Chief Operating Officer (COO), is a highly dedicated leader who ensures our company's operations run smoothly and efficiently. His strategic planning and commitment to excellence drive our success and support our continued growth.
            </h3>
          </div>
        </div>

        <div className='relative bg-cover bg-center w-full h-[1500px] z-10 mt-[-250px]'
       style={{ backgroundImage: "url('/aboutusbackgroundwithoutsun.png')" }}>

        {/* Right Jack */}
        <div className="mt-10 flex">
          <div className="mr-4 ml-10 mt-[300px]">
            <h2 className="text-6xl font-bold text-white">Jack Douma (CIO)</h2>
            <h3 className="text-3xl font-bold mt-10 text-white">
              Jack, our Chief Information Officer (CIO), is a vital asset to our team with his deep expertise in information systems and technology management. His strategic vision and leadership in IT drive innovation and efficiency throughout our organization.
            </h3>
          </div>
          <img
            src="/jackAvatar.png"
            alt="Jack's Avatar"
            className="mt-[200px]"
          />
        </div>
        <h1 className='z-[10] flex flex-col items-center text-white text-8xl font-bold mt-[250px]'>The thing about us, is we care.</h1>
        <a href="/sign-up">
  <button
    className="block mx-auto bg-gray-700 rounded-md text-white font-bold w-64 h-16 relative
      before:w-full before:h-full before:scale-x-[1.15] before:scale-y-[1.35] before:absolute before:top-1/2 before:left-1/2
      before:-z-10 before:-translate-x-1/2 before:-translate-y-1/2
      before:from-blue-300 before:to-gray-600 before:bg-gradient-to-br
      before:rounded-md
      hover:bg-gray-600 transition-all duration-300 mt-[100px]"
  >
    Join our Journey here.
  </button>
</a>
        </div>
</div>
</div>
      </div>
    </div>
  );
};

export default About;