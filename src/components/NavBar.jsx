import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import Search from './Search';

const NavBar = ({ children }) => {
  return (
    <nav className="bg-white text-black p-4 ">
      <div className="container mx-auto flex justify-between items-center relative md:w-[70em] ">
        <Link to="/" className="text-2xl font-semibold">
          <img src='https://www.vasterad.com/themes/chow_html/images/logo.png' className='w-20' />
        </Link>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          {children}
        </div>

        <div className="ml-auto">
          <NavLink to="/add" className="hover:text-blue-300">
            <button className='bg-red-400 shadow-lg shadow-red-400 border-b-4 border-b-red-300 text-white rounded-xl px-3 py-2'>Add Post</button>
          </NavLink>
        </div>
      </div>
    </nav>


  );
};

export default NavBar;
