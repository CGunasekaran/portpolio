export default function About() {
  const skills = [
    { name: "Frontend Architecture", category: "Architecture", icon: "🏗️" },
    { name: "Accessibility (WCAG 2.1)", category: "Standards", icon: "♿" },
    { name: "Performance Optimization", category: "Performance", icon: "⚡" },
    { name: "Team Leadership", category: "Leadership", icon: "👥" },
    { name: "JavaScript", category: "Languages", icon: "🟨" },
    { name: "TypeScript", category: "Languages", icon: "🔷" },
    { name: "React", category: "Frontend", icon: "⚛️" },
    { name: "Next.js", category: "Frontend", icon: "🖤" },
    { name: "Node.js", category: "Backend", icon: "🟢" },
    { name: "Tailwind CSS", category: "Styling", icon: "🎨" },
    { name: "MongoDB", category: "Database", icon: "🍃" },
    { name: "PostgreSQL", category: "Database", icon: "🐘" },
    { name: "Git", category: "Tools", icon: "📝" },
    { name: "REST APIs", category: "APIs", icon: "🔗" },
    { name: "GraphQL", category: "APIs", icon: "🌐" },
    { name: "Angular", category: "Frontend", icon: "🅰️" },
    { name: "Playwright", category: "Testing", icon: "🎭" },
    { name: "Jest", category: "Testing", icon: "🧪" },
  ];

  const achievements = [
    {
      icon: "🏆",
      title: "Employee of the Quarter",
      subtitle: "Twice recipient",
      description: "Recognition for outstanding technical leadership",
    },
    {
      icon: "📈",
      title: "99.9% Uptime",
      subtitle: "System reliability",
      description: "Maintained enterprise-grade platform stability",
    },
    {
      icon: "🎯",
      title: "95% Test Coverage",
      subtitle: "Quality assurance",
      description: "Implemented comprehensive testing strategies",
    },
    {
      icon: "👥",
      title: "Cross-functional Leadership",
      subtitle: "Team coordination",
      description: "Led diverse teams to deliver complex projects",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-950 dark:to-neutral-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-100/20 via-transparent to-accent-100/20 dark:from-primary-900/10 dark:to-accent-900/10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Title */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-6">
            <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
              👨‍💼 Get to know me
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-neutral-900 dark:text-neutral-100">
              About
            </span>{" "}
            <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Passionate about building scalable solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Enhanced About Content */}
          <div className="space-y-8">
            <div className="card-modern p-8 hover:shadow-glow">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl">💡</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                    My Journey
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
                </div>
              </div>

              <div className="space-y-6 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                <p className="text-lg">
                  For the past{" "}
                  <span className="font-semibold text-primary-600 dark:text-primary-400">
                    10+ years
                  </span>
                  , I've been solving a question that fascinates me: how do you
                  build
                  <span className="font-semibold text-accent-600 dark:text-accent-400">
                    {" "}
                    e-commerce platforms
                  </span>{" "}
                  that scale to millions of users while staying fast, reliable,
                  and delightful?
                </p>

                <p>
                  As a{" "}
                  <span className="font-semibold text-primary-600 dark:text-primary-400">
                    Technical Anchor
                  </span>
                  , I've led cross-functional teams to architect
                  enterprise-grade solutions that answer this question with
                  measurable results:{" "}
                  <span className="text-green-600 dark:text-green-400 font-medium">
                    99.9% system uptime
                  </span>
                  ,
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    {" "}
                    95% code coverage
                  </span>
                  , and performance metrics that set industry benchmarks.
                </p>

                <p>
                  I'm driven by technical excellence and the impact it creates –
                  whether that's optimizing a critical user flow, mentoring team
                  members, or implementing architectures that stand the test of
                  scale. What really motivates me is seeing millions of users
                  benefit from what we build.
                </p>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="card-modern p-6 text-center group hover:shadow-glow-purple"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl mb-3 group-hover:animate-bounce">
                    {achievement.icon}
                  </div>
                  <h4 className="font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                    {achievement.title}
                  </h4>
                  <p className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-2">
                    {achievement.subtitle}
                  </p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Skills Section */}
          <div className="space-y-8">
            <div className="card-modern p-8">
              <div className="flex items-start space-x-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                    Technical Arsenal
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-accent-500 to-purple-500 rounded-full"></div>
                </div>
              </div>

              {/* Skills organized by category */}
              <div className="space-y-6">
                {[
                  "Languages",
                  "Frontend",
                  "Backend",
                  "Database",
                  "Testing",
                  "Tools",
                ].map((category) => (
                  <div key={category}>
                    <h4 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-3">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills
                        .filter((skill) => skill.category === category)
                        .map((skill, index) => (
                          <span
                            key={index}
                            className="group inline-flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-lg hover:from-primary-100 hover:to-accent-100 dark:hover:from-primary-900/50 dark:hover:to-accent-900/50 hover:text-primary-700 dark:hover:text-primary-300 transition-all duration-300 cursor-default transform hover:-translate-y-1 hover:shadow-lg"
                          >
                            <span className="text-sm group-hover:animate-pulse">
                              {skill.icon}
                            </span>
                            <span className="text-sm font-medium">
                              {skill.name}
                            </span>
                          </span>
                        ))}
                    </div>
                  </div>
                ))}

                {/* Special categories */}
                {[
                  "Architecture",
                  "Standards",
                  "Performance",
                  "Leadership",
                  "APIs",
                ].map((category) => (
                  <div key={category}>
                    <h4 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-3">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills
                        .filter((skill) => skill.category === category)
                        .map((skill, index) => (
                          <span
                            key={index}
                            className="group inline-flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 text-primary-700 dark:text-primary-300 rounded-lg hover:from-primary-100 hover:to-accent-100 dark:hover:from-primary-800/40 dark:hover:to-accent-800/40 transition-all duration-300 cursor-default transform hover:-translate-y-1 hover:shadow-lg border border-primary-200 dark:border-primary-800"
                          >
                            <span className="text-sm group-hover:animate-pulse">
                              {skill.icon}
                            </span>
                            <span className="text-sm font-medium">
                              {skill.name}
                            </span>
                          </span>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
