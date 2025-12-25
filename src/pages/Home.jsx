import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-950 px-6">
      <div className="max-w-3xl text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          Meda Poojitha Reddy
        </motion.h1>

        <p className="text-lg md:text-xl text-gray-400">
          B.Tech AI & ML | React & Machine Learning Developer
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/projects"
            className="px-6 py-3 bg-violet-600 rounded-lg 
shadow-lg shadow-violet-600/30 hover:scale-105 transition"
          >
            View Projects
          </a>
          <a
            href="/resume"
            className="px-6 py-3 border border-gray-700 rounded-lg 
hover:border-violet-500 hover:text-violet-400 transition"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
