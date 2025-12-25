import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass =
    "block py-2 text-gray-300 hover:text-violet-400 transition";

  return (
    <nav className="bg-gray-950 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <span className="text-xl font-bold text-violet-400">
          Poojitha.dev
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/blog" className={linkClass}>Blog</NavLink>
          <NavLink to="/resume" className={linkClass}>Resume</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 border-t border-gray-800">
          <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={linkClass} onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/projects" className={linkClass} onClick={() => setOpen(false)}>Projects</NavLink>
          <NavLink to="/blog" className={linkClass} onClick={() => setOpen(false)}>Blog</NavLink>
          <NavLink to="/resume" className={linkClass} onClick={() => setOpen(false)}>Resume</NavLink>
          <NavLink to="/contact" className={linkClass} onClick={() => setOpen(false)}>Contact</NavLink>
        </div>
      )}
    </nav>
  );
}
