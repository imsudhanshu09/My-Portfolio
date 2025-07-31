// import Link from "next/link";

// export const Header = () => {
//   return (
//     <div className="fixed top-0 left-0 w-full z-50 flex justify-center">
//       <nav className="flex gap-1 p-1 mt-4 border border-white/15 rounded-full bg-white/10 backdrop-blur shadow-md">
//         <a href="#home" className="nav-item">Home</a>
//         <a href="#projects" className="nav-item">Projects</a>
//         <a href="#about" className="nav-item">About</a>
//         <a href="#hackathons" className="nav-item">Hackathons</a>
//         <a href="#contact" className="nav-item">Contact</a>
//       </nav>
//     </div>
//   );
// };


"use client";
import { useState } from "react";
import Link from "next/link";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* Hamburger / Close Icon - Mobile */}
        <button
          className="text-white focus:outline-none md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Logo */}
        <Link
  href="/"
  className="text-white text-xl sm:text-2xl font-bold ml-auto md:ml-0 md:mr-4 leading-none relative"
>
  <span className="relative top-1 md:top-2
  text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">My Portfolio</span>
</Link>


        {/* Desktop Navigation with Floating Style */}
        <div className="hidden md:flex justify-center flex-grow">
          <nav className="absolute left-1/2 md:top-2 transform -translate-x-1/2 flex gap-1 p-1 border border-white/15 rounded-full bg-white/10 backdrop-blur shadow-md">
            <a href="#home" className="nav-item">Home</a>
            <a href="#projects" className="nav-item">Projects</a>
            <a href="#hackathons" className="nav-item">Hackathons</a>
            <a href="#about" className="nav-item">About</a>
            <a href="#footer" className="nav-item">Profile</a>
          </nav>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="flex flex-col items-start gap-2 px-6 pb-4 md:hidden">
          <a href="#home" className="nav-item">Home</a>
          <a href="#projects" className="nav-item">Projects</a>
          <a href="#hackathons" className="nav-item">Hackathons</a>
          <a href="#about" className="nav-item">About</a>
          <a href="#footer" className="nav-item">Profile</a>
        </div>
      )}
    </header>
  );
};
