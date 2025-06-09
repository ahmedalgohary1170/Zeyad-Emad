import React, { useState, useEffect } from 'react';
import userData from '../userData';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-${isScrolled ? '95' : '85'} backdrop-blur-sm text-white px-4 sm:px-6 md:px-16 lg:px-24 transition-all duration-300 ${isScrolled ? 'shadow-lg py-2' : 'py-4'}`}>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* Logo/Brand */}
          <div className={`${isScrolled ? 'text-xl' : 'text-2xl'} font-bold transition-all duration-300`}>{userData.name}</div>
          
          {/* Desktop Menu */}
          <div className='hidden md:flex space-x-2 lg:space-x-6 items-center'>
            <a href="#home" className='hover:text-green-400 transition-colors duration-300 text-sm lg:text-base' onClick={handleLinkClick}>Home</a>
            <a href="#about" className='hover:text-green-400 transition-colors duration-300 text-sm lg:text-base' onClick={handleLinkClick}>About Me</a>
            <a href="#service" className='hover:text-green-400 transition-colors duration-300 text-sm lg:text-base' onClick={handleLinkClick}>Services</a>
            <a href="#project" className='hover:text-green-400 transition-colors duration-300 text-sm lg:text-base' onClick={handleLinkClick}>Projects</a>
            <a href="#contact" className='hover:text-green-400 transition-colors duration-300 text-sm lg:text-base' onClick={handleLinkClick}>Contact</a>
            <a href={userData.contact.whatsapp} className='ml-2 lg:ml-4'>
              <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white 
              transform transition-all duration-300 hover:scale-105 px-3 py-1 lg:px-4 lg:py-2 rounded-full text-sm lg:text-base'>
                Connect Me
              </button>
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className='md:hidden text-white focus:outline-none'
            onClick={toggleMenu}
            aria-label="Toggle menu"
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
          <div className='md:hidden flex flex-col mt-4 space-y-2 pb-4 border-t border-gray-800 pt-2 animate-fadeIn'>
            <a href="#home" className='hover:text-green-400 transition-colors duration-300 py-2 px-2 block' onClick={handleLinkClick}>Home</a>
            <a href="#about" className='hover:text-green-400 transition-colors duration-300 py-2 px-2 block' onClick={handleLinkClick}>About Me</a>
            <a href="#service" className='hover:text-green-400 transition-colors duration-300 py-2 px-2 block' onClick={handleLinkClick}>Services</a>
            <a href="#project" className='hover:text-green-400 transition-colors duration-300 py-2 px-2 block' onClick={handleLinkClick}>Projects</a>
            <a href="#contact" className='hover:text-green-400 transition-colors duration-300 py-2 px-2 block' onClick={handleLinkClick}>Contact</a>
            <a href={userData.contact.whatsapp} className='mt-2'>
              <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white 
              transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full w-full'>
                Connect Me
              </button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;