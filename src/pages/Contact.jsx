export default function Contact() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Get In <span className="text-violet-400">Touch</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          I’m open to internships, project collaborations, and learning
          opportunities. Feel free to reach out if you’d like to connect or
          discuss ideas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email */}
          <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
            <h3 className="text-lg font-semibold text-white">Email</h3>
            <p className="text-gray-400 mt-2">
              medapoojitha31@gmail.com
            </p>
          </div>

          {/* GitHub */}
          <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
            <h3 className="text-lg font-semibold text-white">GitHub</h3>
            <p className="text-gray-400 mt-2">
              github.com/<span className="text-violet-400">medapoojitha</span>
            </p>
          </div>

          {/* Location */}
          <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
            <h3 className="text-lg font-semibold text-white">Location</h3>
            <p className="text-gray-400 mt-2">Hyderabad,Telangana</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <a
            href="mailto:medapoojitha31@gmail.com"
            className="inline-block px-8 py-4 bg-violet-600 rounded-lg 
            font-medium hover:bg-violet-500 transition shadow-lg shadow-violet-600/30"
          >
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
}
