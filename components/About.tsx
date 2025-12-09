export default function About() {
  const skills = [
    "Frontend architecture",
    "Accessibility compliance (WCAG 2.1)",
    "Performance optimization",
    "Cross-functional team leadership",
    "Team leadership",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "REST APIs",
    "GraphQL",
    "Angular",
    "Playwright",
    "Google Maps API",
    "Jest",
    "Here Maps",
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* About Text */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Get to know me!
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                For the past 10+ years, I've been solving a question that
                fascinates me: how do you build e-commerce platforms that scale
                to millions of users while staying fast, reliable, and
                delightful
              </p>
              <p>
                As a Technical Anchor, I've led cross-functional teams to
                architect enterprise-grade solutions that answer this question
                with measurable results: 99.9% system uptime, 95% code coverage,
                and performance metrics that set industry benchmarks.
              </p>
              <p>
                I'm driven by technical excellence and the impact it creates –
                whether that's optimizing a critical user flow, mentoring team
                members, or implementing architectures that stand the test of
                scale. My work has been recognized with Employee of the Quarter
                awards twice, but what really motivates me is seeing millions of
                users benefit from what we build.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              My Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
