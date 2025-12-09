import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Ford - North America Non-Vehicle Commerce",
      description:
        "A customer-facing e-commerce platform designed to host distinct sites for Ford Accessories, Ford Parts, Electric Chargers, and Lincoln Accessories. The platform enables customers to browse products, place order, track their purchases in real-time, and choose between shipping or pickup fulfillment options.",
      image: "/projects/project1.jpg",
      category: "E-commerce Platform",
      impact: "Multi-million dollar revenue platform",
      icon: "🚗",
      tech: [
        "Next.js",
        "TypeScript",
        "Stripe",
        "Playwright",
        "Tailwind CSS",
        "Monorepo",
        "MFE",
        "Storybook",
        "Jest",
        "Redis",
        "SEO",
      ],
      demo: "https://www.ford.com/cl/accessories",
    },
    {
      id: 2,
      title: "Ford Move MVP",
      description:
        "A platform that tracks/manages moving goods from one location to another. Pilot version for Detroit HVC enabling operation teams to place orders and create schedules to move requested parts from Detroit High Velocity Center to respective dealers.",
      image: "/projects/project2.jpg",
      category: "Logistics Platform",
      impact: "Streamlined supply chain operations",
      icon: "📦",
      tech: [
        "React JS",
        "Redux",
        "Bootstrap Framework",
        "Here Maps",
        "Prime React",
        "Jest",
        "Flex Box",
      ],
      demo: "https://www.ford.com/parts",
    },
    {
      id: 3,
      title: "Wiley Digital Archives & Admin",
      description:
        "Digital archives initiative partnering with world's leading societies, libraries, and archives to digitize unique primary sources. Admin interface manages customers, institutions, and locations with IP/user-based authentication.",
      image: "/projects/project-wiley.jpg",
      category: "Digital Archives",
      impact: "Preserved digital heritage globally",
      icon: "📚",
      tech: [
        "Angular 9",
        "Bootstrap Framework",
        "OpenseaDragon Image viewer",
        "Leaflet JS Map visualization",
        "React / Redux",
        "Google Maps API",
      ],
      demo: "https://app.wileydigitalarchives.com/wiley/auth/pass;getIp=true",
    },
    {
      id: 4,
      title: "Cengage Learning Australia / New Zealand",
      description:
        "Leading provider of learning solutions for school and higher education markets. Publishes successful range of educational resources written by Australian and New Zealand authors who are specialists in their field.",
      image: "/projects/project-cengage.jpg",
      category: "Educational Platform",
      impact: "Enhanced learning experience",
      icon: "📖",
      tech: [
        "Angular 2",
        "Bootstrap Framework",
        "CSS 3",
        "HTML 5",
        "jQuery",
        "YSlow",
        "JavaScript",
      ],
      demo: "https://cengage.com.au/",
    },
    {
      id: 5,
      title: "Mamta Housing Finance Company",
      description:
        "NHB Licensed home loan and property loan provider committed to transform the housing sector in India by providing affordable housing finance to urban and rural population.",
      image: "/projects/project-mamta.jpg",
      category: "Financial Services",
      impact: "Affordable housing solutions",
      icon: "🏠",
      tech: [
        "Bootstrap Framework",
        "CSS 3",
        "HTML 5",
        "jQuery",
        "JavaScript",
        "WordPress",
      ],
      demo: "https://www.mamtahousing.com/",
    },
    {
      id: 6,
      title: "HTC Global Services",
      description:
        "Global technology partner shaping business success through technology and innovation since 1990. Designing IT and business process solutions that help organizations operate smarter, scale faster, and stay competitive.",
      image: "/projects/project-htc.jpg",
      category: "Corporate Website",
      impact: "Enhanced digital presence",
      icon: "🌐",
      tech: [
        "React JS",
        "Jest",
        "Bootstrap Framework",
        "CSS 3",
        "HTML 5",
        "jQuery",
        "JavaScript",
        "WordPress",
      ],
      demo: "https://www.htcinc.com/about-us/who-we-are/",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-100/20 via-transparent to-primary-100/20 dark:from-accent-900/10 dark:to-primary-900/10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Title */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-accent-100 dark:bg-accent-900/30 rounded-full mb-6">
            <span className="text-sm font-medium text-accent-700 dark:text-accent-300">
              🚀 My work showcase
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-neutral-900 dark:text-neutral-100">
              Featured
            </span>{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Here are some of the projects that showcase my technical expertise
            and impact
          </p>
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group card-modern overflow-hidden hover:shadow-glow animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Enhanced Project Image */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 z-10"></div>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={project.id <= 3}
                />

                {/* Project category overlay */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center space-x-2 px-3 py-1 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm rounded-full text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    <span className="text-lg">{project.icon}</span>
                    <span>{project.category}</span>
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-end">
                  <div className="p-6 text-white">
                    <p className="text-sm font-medium">{project.impact}</p>
                  </div>
                </div>
              </div>

              {/* Enhanced Project Content */}
              <div className="p-6">
                {/* Project header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-3">
                    {project.impact}
                  </p>
                  <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full group-hover:w-16 transition-all duration-300"></div>
                </div>

                <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Enhanced Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 6).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-md text-xs font-medium hover:from-primary-100 hover:to-accent-100 dark:hover:from-primary-900/30 dark:hover:to-accent-900/30 hover:text-primary-700 dark:hover:text-primary-300 transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 6 && (
                      <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-md text-xs font-medium">
                        +{project.tech.length - 6} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Enhanced Project Link */}
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-sm"
                >
                  <span>View Project</span>
                  <svg
                    className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="card-modern p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Interested in my work?
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              Let's discuss how I can help bring your next project to life
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl font-medium hover:shadow-glow transform hover:-translate-y-1 transition-all duration-300"
            >
              Get In Touch
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
