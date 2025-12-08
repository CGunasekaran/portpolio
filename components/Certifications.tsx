export default function Certifications() {
  const certifications = [
    "Active participant in Technical meetups and brown bag sessions",
    "Contributor to engineering knowledge-sharing initiatives",
    "Early adopter of AI-assisted development tools (GitHub Copilot, Ford LLM)",
    "Azure: create a REST API using NodeJS Serverless Functions",
    "Cloud Computing and GCP Fundamentals",
    "Test Accessibility of Your Design with WAVE",
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Certifications & Continuous Learning
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Committed to staying current with technology trends and advancing my
            expertise
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
