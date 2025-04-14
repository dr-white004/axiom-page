import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="w-full">
        <nav className="max-w-[85rem] mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

          {/* LEFT SIDE (Brand + Nav Links) */}
          <div className="flex items-center gap-8">
            {/* Brand Always Visible */}
            <a href="#" className="text-xl font-semibold text-white dark:text-white">Brand</a>

            {/* Nav Links - Only visible on md+ */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm text-white dark:text-neutral-200">Home</a>
              <a href="#" className="text-sm text-white dark:text-neutral-200">Pages</a>
              <a href="#" className="text-sm text-white dark:text-neutral-200">Portfolio</a>
              <a href="#" className="text-sm text-white dark:text-neutral-200">Blog</a>
              <a href="#" className="text-sm text-white dark:text-neutral-200">Contacts</a>
              
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            {/* Auth Buttons - Only on md+ */}
            <div className="hidden md:flex items-center gap-6">
             
              <a href="#" className="text-md bg-blue-600 text-white px-10 py-4 rounded-full">Let's Talk</a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              className="md:hidden text-white dark:text-white text-2xl"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </nav>

        {/* Mobile Fullscreen Menu */}
        {isMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-screen bg-neutral-800 text-white z-50 flex flex-col p-6 space-y-6 transition-transform animate-slideDown">
            {/* Exit button */}
            <div className="w-full flex justify-end">
              <button onClick={closeMenu} className="text-white text-2xl" aria-label="Close menu">✕</button>
            </div>

            {/* Mobile Nav Links */}
            <a href="#" className="text-lg flex items-center gap-2">→ Home</a>
            <a href="#" className="text-lg flex items-center gap-2">→ Pages</a>
            <a href="#" className="text-lg flex items-center gap-2">→ portfolio</a>
            <a href="#" className="text-lg flex items-center gap-2">→ Blog</a>
            <a href="#" className="text-lg flex items-center gap-2 mt-4 text-blue-400">→ Sign in</a>
            <a href="#" className="text-lg flex items-center gap-2 bg-blue-600 px-3 py-1 rounded-md">→ Get started</a>
          </div>
        )}
      </header>

      {/* Slide down animation */}
      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); }
          to { transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.4s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Navbar;
