import React from 'react';

const HomePage = () => {
  return (
    <div>
      

      {/* Welcome Section */}
      <section className="container mx-auto p-6 text-center">
        <div className="">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
          <img
            src="/logo192.png"
            alt="Iuliia Obukhova"
            className="rounded-full mx-auto w-110 h-110 mb-6 border-1 border-gray-800"
          />
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Explore my projects and get in touch to discuss how we can work together to create amazing web experiences.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
