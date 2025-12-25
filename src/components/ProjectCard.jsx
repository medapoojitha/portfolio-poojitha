import { motion } from "framer-motion";

export default function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="border border-gray-800 rounded p-6 cursor-pointer hover:border-violet-500"
      onClick={() => onClick(project)}
    >
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-gray-400 mt-2">{project.short}</p>
      <p className="text-sm text-violet-400 mt-2">{project.tech}</p>
    </motion.div>
  );
}
