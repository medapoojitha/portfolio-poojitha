import { motion } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-gray-900 p-8 rounded max-w-xl w-full relative"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold">{project.title}</h2>
        <p className="text-gray-400 mt-4">{project.description}</p>
        <p className="text-sm text-violet-400 mt-4">{project.tech}</p>
<img
  src={project.image}
  alt={project.title}
  className="w-full h-48 object-cover rounded mb-4"
/>

<h2 className="text-2xl font-bold">{project.title}</h2>
<p className="text-gray-400 mt-3">{project.description}</p>
<p className="text-sm text-violet-400 mt-3">{project.tech}</p>

        <a
          href={project.github}
          target="_blank"
          className="inline-block mt-6 px-5 py-2 bg-violet-600 rounded"
        >
          View GitHub
        </a>
      </motion.div>
    </motion.div>
  );
}
