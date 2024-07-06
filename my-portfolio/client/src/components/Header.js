import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="bg-gray-800 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-3xl">Iuliia</h1>
      <nav>
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "mr-4 text-yellow-500" : "mr-4 hover:text-gray-400"}
          end
        >
          Welcome
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? "mr-4 text-yellow-500" : "mr-4 hover:text-gray-400"}
          end
        >
          About
        </NavLink>
        <NavLink 
          to="/project1" 
          className={({ isActive }) => isActive ? "mr-4 text-yellow-500" : "mr-4 hover:text-gray-400"}
        >
          Project 1
        </NavLink>
        <NavLink 
          to="/project2" 
          className={({ isActive }) => isActive ? "mr-4 text-yellow-500" : "mr-4 hover:text-gray-400"}
        >
          Project 2
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => isActive ? "mr-4 text-yellow-500" : "mr-4 hover:text-gray-400"}
        >
          Contact
        </NavLink>
      </nav>
    </div>
  </header>
);

export default Header;
