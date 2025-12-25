import { useState } from "react";
import { blogs } from "../data/blogs";

export default function Blog() {
  const [open, setOpen] = useState(null);

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6">Blog</h2>

      {blogs.map((b, i) => (
        <div
          key={i}
          className="border border-gray-800 p-5 rounded mb-4 cursor-pointer hover:border-violet-500"
          onClick={() => setOpen(open === i ? null : i)}
        >
          <h3 className="text-xl font-semibold">{b.title}</h3>
          <p className="text-gray-400 mt-2">{b.summary}</p>

          {open === i && (
            <p className="text-gray-300 mt-4">{b.content}</p>
          )}
        </div>
      ))}
    </section>
  );
}
