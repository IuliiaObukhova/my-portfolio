
import React from 'react';

const Header = () => (
  <header className="bg-gray-800 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-3xl">Iuliia</h1>
      <nav>
        <a href="#about" className="mr-4 hover:text-gray-400">About</a>
        <a href="#projects" className="mr-4 hover:text-gray-400">Projects</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>
      </nav>
    </div>
  </header>
);

export default Header;
