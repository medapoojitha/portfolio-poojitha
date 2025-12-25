import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} onClick={setSelected} />
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
