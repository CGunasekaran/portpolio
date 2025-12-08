export default function Awards() {
  const awards = [
    {
      title: "Employee of the Quarter (2x)",
      description:
        "Recognized for exceptional technical leadership and delivery excellence",
    },
    {
      title: "Spot Award",
      description:
        "Outstanding performance in critical production deployment. Received 6 APA (Asia Pacific and Africa) Recognition on 2024 and 2025",
    },
    {
      title: "GitHub Copilot Champion",
      description:
        "Achieved 90% active engagement and shared best practices across organization",
    },
  ];

  return (
    <section id="awards" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Awards & Recognition
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Recognition for technical excellence and leadership contributions
          </p>
        </div>

        {/* Awards Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🏆</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {award.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
