export default function Resume() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6">
          My <span className="text-violet-400">Resume</span>
        </h2>

        <p className="text-gray-400 mb-8 max-w-2xl">
          You can view my resume below or download a copy for offline reference.
        </p>

        {/* Download Button */}
        <a
          href="/resume.pdf"
          download
          className="inline-block mb-8 px-6 py-3 bg-violet-600 rounded-lg 
          font-medium hover:bg-violet-500 transition shadow-lg shadow-violet-600/30"
        >
          Download Resume
        </a>

        {/* Resume Viewer */}
        <div className="w-full h-[700px] border border-gray-800 rounded-lg overflow-hidden">
          <iframe
            src="/resume.pdf"
            title="Resume"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
