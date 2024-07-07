import React from 'react';

const About = () => (
  
  <>
    {/* About Section */}
    <section id="about2" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 flex items-center">
        <div className="w-1/3 text-center">
        <img
              src="/myPicture2.png"
              alt="Iuliia Obukhova"
              className="rounded-full w-48 md:w-60 lg:w-80 border-1 border-gray-8"
            />
        </div>
        <div className="w-2/3 pl-8">
          <h2 className="text-4xl font-bold mb-6 text-left">About Me</h2>
          <p className="text-xl text-left">
            Hello, I'm <span className="font-semibold">Iuliia Obukhova</span>, a Full Stack Web Developer specializing in Three.js. I have a passion for creating dynamic and visually appealing web applications.
    </p>
  </div>
  </div>
</section>

</>
);

export default About;
