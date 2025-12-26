export default function Resume() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-bold mb-4">
          My <span className="text-violet-400">Resume</span>
        </h2>

        <p className="text-gray-400 mb-8 max-w-2xl">
          You can view my resume below.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-6 py-3 bg-violet-600 rounded-lg font-medium
            hover:bg-violet-500 transition shadow-lg shadow-violet-600/30"
          >
            Open Resume
          </a>

          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 border border-gray-700 rounded-lg
            hover:border-violet-400 hover:text-violet-400 transition"
          >
            Download Resume
          </a>
        </div>

        {/* Desktop PDF Preview ONLY */}
        <div className="hidden md:block w-full h-[700px] border border-gray-800 rounded-lg overflow-hidden">
          <iframe
            src="/resume.pdf"
            title="Resume"
            className="w-full h-full"
          />
        </div>

        {/* Mobile Notice */}
        <div className="md:hidden text-gray-400 text-sm mt-4">
          PDF preview is not supported on mobile browsers.  
          Please tap <span className="text-violet-400">Open Resume</span>.
        </div>
      </div>
    </section>
  );
}
