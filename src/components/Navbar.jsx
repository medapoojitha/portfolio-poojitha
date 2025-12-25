import { NavLink } from "react-router-dom";

export default function Navbar() {
  const link =
    "text-sm font-medium text-gray-300 hover:text-violet-400 transition";

  return (
    <nav className="bg-gray-950 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <span className="text-xl font-bold text-violet-400">
          Poojitha.dev
        </span>

        <div className="flex gap-8">
          <NavLink to="/" className={link}>Home</NavLink>
          <NavLink to="/about" className={link}>About</NavLink>
          <NavLink to="/projects" className={link}>Projects</NavLink>
          <NavLink to="/blog" className={link}>Blog</NavLink>
          <NavLink to="/resume" className={link}>Resume</NavLink>
          <NavLink to="/contact" className={link}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}
