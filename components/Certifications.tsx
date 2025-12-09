export default function Certifications() {
  const certifications = [
    {
      title: "Technical Leadership & Knowledge Sharing",
      items: [
        "Active participant in Technical meetups and brown bag sessions",
        "Contributor to engineering knowledge-sharing initiatives",
      ],
      icon: "👥",
      category: "Leadership",
    },
    {
      title: "AI & Modern Development Tools",
      items: [
        "Early adopter of AI-assisted development tools (GitHub Copilot, Ford LLM)",
        "GitHub Copilot Champion with 95% engagement",
      ],
      icon: "🤖",
      category: "Innovation",
    },
    {
      title: "Cloud & Infrastructure",
      items: [
        "Azure: create a REST API using NodeJS Serverless Functions",
        "Cloud Computing and GCP Fundamentals",
      ],
      icon: "☁️",
      category: "Cloud Technologies",
    },
    {
      title: "Accessibility & Quality Assurance",
      items: [
        "Test Accessibility of Your Design with WAVE",
        "WCAG 2.1 Accessibility Compliance",
      ],
      icon: "♿",
      category: "Quality & Standards",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-24 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-950 dark:to-neutral-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-green-100/20 dark:from-blue-900/10 dark:to-green-900/10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Title */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              📚 Continuous learning
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-neutral-900 dark:text-neutral-100">
              Certifications &
            </span>{" "}
            <span className="gradient-text">Learning</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Committed to staying current with technology trends and advancing
            expertise
          </p>
        </div>

        {/* Enhanced Certifications Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="card-modern p-8 hover:shadow-glow animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-2xl text-white">{cert.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                        {cert.title}
                      </h3>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                        {cert.category}
                      </span>
                    </div>
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  {cert.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-700 hover:from-blue-50 hover:to-green-50 dark:hover:from-blue-900/20 dark:hover:to-green-900/20 transition-all duration-300"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex-shrink-0 mt-2"></div>
                      <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning philosophy */}
        <div className="text-center mt-16">
          <div className="card-modern p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-2xl">🎯</span>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                Continuous Learning Philosophy
              </h3>
            </div>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
              Staying at the forefront of technology through active
              participation in the developer community and early adoption of
              emerging tools and practices.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-xl">📈</span>
                </div>
                <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                  Growth Mindset
                </h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Always learning new technologies
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-xl">🤝</span>
                </div>
                <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                  Knowledge Sharing
                </h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Contributing to team growth
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-xl">🚀</span>
                </div>
                <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                  Early Adoption
                </h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Embracing cutting-edge tools
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
