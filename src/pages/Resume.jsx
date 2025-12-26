import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export default function Resume() {
  const layoutPlugin = defaultLayoutPlugin();

  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-bold mb-6">
          My <span className="text-violet-400">Resume</span>
        </h2>

        <div className="h-[80vh] border border-gray-800 rounded-lg overflow-hidden">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer
              fileUrl="/resume.pdf"
              plugins={[layoutPlugin]}
            />
          </Worker>
        </div>
      </div>
    </section>
  );
}
