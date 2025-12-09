export default function Education() {
  const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Nehru Institute of Information Technology And Management",
      location: "Coimbatore, India",
      icon: "🎓",
      level: "Master's",
    },
    {
      degree: "Bachelor of Science, Computer Science",
      institution: "Thiagarajar College of Arts And Science",
      location: "Madurai, India",
      icon: "🎓",
      level: "Bachelor's",
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My academic journey in computer science and applications
          </p>
        </div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">{edu.icon}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 sm:mb-0">
                          {edu.degree}
                        </h3>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                          {edu.level}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <p className="text-lg font-medium text-gray-800">
                          {edu.institution}
                        </p>
                        <div className="flex items-center gap-2 text-gray-600">
                          <span>📍</span>
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative border */}
                <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                <span className="text-sm font-medium">
                  Computer Science Specialization
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                <span className="text-sm font-medium">
                  Information Technology Focus
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// Deployment trigger
