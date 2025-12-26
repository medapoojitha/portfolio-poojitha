import heroImg from "../assets/pro-pic.png";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* Background Image */}
      <img
        src={heroImg}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover object-right opacity-30"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
              Meda Poojitha Reddy
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl">
            B.Tech AI & ML student passionate about building intelligent systems
            and modern React-based web applications.
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="/projects"
              className="px-6 py-3 bg-violet-600 rounded-lg font-medium
              hover:bg-violet-500 transition shadow-lg shadow-violet-600/30"
            >
              View Projects
            </a>

            <a
              href="/resume"
              className="px-6 py-3 border border-gray-600 rounded-lg
              hover:border-violet-400 hover:text-violet-400 transition"
            >
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
