export default function Awards() {
  const awards = [
    {
      title: "Employee of the Quarter (2x)",
      description:
        "Recognized for exceptional technical leadership and delivery excellence",
      icon: "🏆",
      year: "2024 & 2025",
      category: "Leadership Excellence",
    },
    {
      title: "Spot Award",
      description:
        "Outstanding performance in critical production deployment. Received 6 APA (Asia Pacific and Africa) Recognition on 2024 and 2025",
      icon: "⭐",
      year: "2024-2025",
      category: "Performance Excellence",
    },
    {
      title: "GitHub Copilot Champion",
      description:
        "Achieved 95% active engagement and shared best practices across organization",
      icon: "🚀",
      year: "2024",
      category: "Innovation & Adoption",
    },
  ];

  return (
    <section
      id="awards"
      className="py-24 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-100/20 via-transparent to-orange-100/20 dark:from-yellow-900/10 dark:to-orange-900/10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Title */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-full mb-6">
            <span className="text-sm font-medium text-yellow-700 dark:text-yellow-300">
              🏆 Recognition & achievements
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-neutral-900 dark:text-neutral-100">
              Awards &
            </span>{" "}
            <span className="gradient-text">Recognition</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Recognition for technical excellence and leadership contributions
          </p>
        </div>

        {/* Enhanced Awards Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div
                key={index}
                className="card-modern p-8 hover:shadow-glow-purple text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:animate-bounce">
                    <span className="text-3xl text-white">{award.icon}</span>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300">
                    {award.year}
                  </span>
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                    {award.title}
                  </h3>
                  <p className="text-sm font-medium text-orange-600 dark:text-orange-400 mb-3">
                    {award.category}
                  </p>
                  <div className="w-12 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mx-auto"></div>
                </div>

                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition summary */}
        <div className="text-center mt-16">
          <div className="card-modern p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-2xl">🎖️</span>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                Recognition Summary
              </h3>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              Consistent recognition for technical excellence, leadership, and
              innovation across multiple years
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                  8+
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  Total Awards
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                  2x
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  Employee of Quarter
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  95%
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  Copilot Engagement
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
