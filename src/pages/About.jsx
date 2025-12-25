export default function About() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10">
          About <span className="text-violet-400">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              I’m <span className="text-white font-semibold">Meda Poojitha Reddy</span>,
              a B.Tech student specializing in
              <span className="text-violet-400"> Artificial Intelligence & Machine Learning</span>.
            </p>

            <p>
              I enjoy solving real-world problems using machine learning models
              and presenting those solutions through clean, scalable
              <span className="text-violet-400"> React applications</span>.
            </p>

            <p>
              My interests lie at the intersection of
              <span className="text-white"> data, intelligence, and user experience</span>.
              I focus on writing understandable code, building practical ML systems,
              and continuously improving my engineering skills.
            </p>

            <p>
              I’m currently seeking opportunities to learn, build, and contribute
              to impactful projects in software and AI-driven development.
            </p>
          </div>

          {/* Right: Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
              <h3 className="text-2xl font-bold text-violet-400">5+</h3>
              <p className="text-gray-400 mt-2">Projects Built</p>
            </div>

            <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
              <h3 className="text-2xl font-bold text-violet-400">AI & ML</h3>
              <p className="text-gray-400 mt-2">Core Focus</p>
            </div>

            <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
              <h3 className="text-2xl font-bold text-violet-400">React</h3>
              <p className="text-gray-400 mt-2">Frontend Expertise</p>
            </div>

            <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
              <h3 className="text-2xl font-bold text-violet-400">2027</h3>
              <p className="text-gray-400 mt-2">Expected Graduation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
