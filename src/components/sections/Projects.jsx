import { useState } from "react";

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null);

  const projects = [
    {
      title:
        "User Experience Design & Usability Study of Cardiac Patient Monitoring System",
      tech: "React.js • Node.js • MongoDB • Chart.js",
      points: [
        "Built a real-time monitoring dashboard improving interpretation speed by 35%",
        "Optimized rendering & APIs → reduced delays by 28% and improved fetch speed by 25%",
        "Applied usability heuristics → reduced cognitive load by 22%",
        "Designed clean, responsive UI for clinical environments",
        "Added error handling & feedback → improved task accuracy",
      ],
      link: "https://github.com/Riyabm116/Research-Project-2",
    },

    {
      title: "Smart Bookmark Manager",
      tech: "Vue 3 • JavaScript • CSS • LocalStorage",
      points: [
        "Built a Vue 3-based bookmark manager with full CRUD functionality",
        "Implemented real-time search & filtering across titles, URLs, and tags (80% success rate)",
        "Designed dark/light mode with persistent user preferences",
        "Used modular component-based architecture for maintainability",
        "Managed reactive state & local storage for smooth UI",
      ],
      link: "https://github.com/Riyabm116/smart-bookmark-manager",
    },
  ];

  return (
    <div id="projects" className="max-w-3xl mx-auto mt-16 px-4">

      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-10 
                     bg-gradient-to-r from-blue-400 to-teal-400 
                     bg-clip-text text-transparent">
        Projects
      </h2>

      {projects.map((project, index) => (
        <div key={index} className="mb-8">

          {/* Project Title */}
          <div
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
            className="cursor-pointer text-center group"
          >
            <p className="text-xl font-semibold text-white 
                          group-hover:text-blue-400 transition">
              {project.title}
            </p>

            <span className="text-gray-400 text-sm">
              {openIndex === index ? "▲ Hide details" : "▼ View details"}
            </span>
          </div>

          {/* Expand Section */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden 
            ${
              openIndex === index
                ? "max-h-[1000px] opacity-100 mt-6"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-8 rounded-2xl border border-white/10 
                            bg-gradient-to-br from-white/5 to-white/0 
                            backdrop-blur-xl shadow-xl">

              {/* Tech */}
              <p className="text-center text-sm text-gray-400 mb-6 tracking-wide">
                {project.tech}
              </p>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6"></div>

              {/* Points */}
              <ul className="space-y-3 text-gray-300 leading-relaxed">
                {project.points.map((point, i) => (
                  <li key={i} className="hover:text-white transition">
                    {point}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <div className="flex justify-center mt-8">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-lg border border-blue-400/30 
                             text-blue-400 hover:bg-blue-500/10 
                             hover:scale-105 transition-all"
                >
                  🔗 View Project
                </a>
              </div>

            </div>
          </div>

        </div>
      ))}

    </div>
  );
}