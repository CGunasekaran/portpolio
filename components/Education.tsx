export default function Education() {
  const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Nehru Institute of Information Technology And Management",
      location: "Coimbatore, India",
      icon: "🎓",
      level: "Master's",
      year: "2010-2013",
      highlights: [
        "Software Engineering Focus",
        "Database Management",
        "Web Technologies",
      ],
    },
    {
      degree: "Bachelor of Science, Computer Science",
      institution: "Thiagarajar College of Arts And Science",
      location: "Madurai, India",
      icon: "🎓",
      level: "Bachelor's",
      year: "2007-2010",
      highlights: [
        "Programming Fundamentals",
        "Data Structures",
        "Computer Networks",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="py-24 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-950 dark:to-neutral-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-100/20 via-transparent to-accent-100/20 dark:from-primary-900/10 dark:to-accent-900/10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Title */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-6">
            <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
              🎓 Academic background
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-neutral-900 dark:text-neutral-100">My</span>{" "}
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            My academic journey in computer science and applications
          </p>
        </div>

        {/* Enhanced Education Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="card-modern p-8 hover:shadow-glow animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-8">
                {/* Enhanced Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-3xl text-white">{edu.icon}</span>
                </div>

                {/* Enhanced Content */}
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                        {edu.degree}
                      </h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-4"></div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <span className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-semibold bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">
                        {edu.level}
                      </span>
                      <span className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300">
                        {edu.year}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                        {edu.institution}
                      </h4>
                      <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 mb-4">
                        <span className="text-lg">📍</span>
                        <span className="font-medium">{edu.location}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h5 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-3">
                        Key Areas
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-lg text-sm font-medium"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Additional Info */}
        <div className="text-center mt-16">
          <div className="card-modern p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
              Educational Focus Areas
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-xl">
                <div className="w-3 h-3 bg-primary-500 rounded-full flex-shrink-0"></div>
                <div className="text-left">
                  <h4 className="font-semibold text-primary-700 dark:text-primary-300">
                    Computer Science Specialization
                  </h4>
                  <p className="text-sm text-primary-600 dark:text-primary-400">
                    Core programming and system design
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-accent-50 dark:bg-accent-900/20 rounded-xl">
                <div className="w-3 h-3 bg-accent-500 rounded-full flex-shrink-0"></div>
                <div className="text-left">
                  <h4 className="font-semibold text-accent-700 dark:text-accent-300">
                    Information Technology Focus
                  </h4>
                  <p className="text-sm text-accent-600 dark:text-accent-400">
                    Modern web technologies and frameworks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// Deployment trigger
