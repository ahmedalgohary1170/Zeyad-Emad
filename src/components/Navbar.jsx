import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='bg-black text-white px-4 md:px-16 lg:px-24'>
      <div className='container mx-auto py-4'>
        <div className='flex justify-between items-center'>
          {/* Logo/Brand */}
          <div className='text-2xl font-bold'>Zeyad Emad</div>
          
          {/* Desktop Menu */}
          <div className='hidden md:flex space-x-6 items-center'>
            <a href="#home" className='hover:text-gray-400'>Home</a>
            <a href="#about" className='hover:text-gray-400'>About Me</a>
            <a href="#service" className='hover:text-gray-400'>Services</a>
            <a href="#project" className='hover:text-gray-400'>Projects</a>
            <a href="#contact" className='hover:text-gray-400'>Contact</a>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white 
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full ml-4'>
              Connect Me
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className='md:hidden text-white focus:outline-none'
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden flex flex-col mt-4 space-y-4 pb-4'>
            <a href="#home" className='hover:text-gray-400 py-2 px-2 block'>Home</a>
            <a href="#about" className='hover:text-gray-400 py-2 px-2 block'>About Me</a>
            <a href="#service" className='hover:text-gray-400 py-2 px-2 block'>Services</a>
            <a href="#project" className='hover:text-gray-400 py-2 px-2 block'>Projects</a>
            <a href="#contact" className='hover:text-gray-400 py-2 px-2 block'>Contact</a>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white 
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full w-full mt-2'>
              Connect Me
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;