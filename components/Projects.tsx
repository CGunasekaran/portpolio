import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Ford - North America Non-Vehicle Commerce",
      description:
        "A customer-facing e-commerce platform designed to host distinct sites for Ford Accessories, Ford Parts, Electric Chargers, and Lincoln Accessories. The platform enables customers to browse products, place order, track their purchases in real-time, and choose between shipping or pickup fulfillment options. ",
      image: "/projects/project1.jpg",
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
      title: "Ford Move MVP ",
      description:
        "It is a platform that tracks/manages moving goods from one location to another. It is a pilot version for Detroit HVC (FCSD). As part of this Minimum Viable Product, the Operation team can place orders, create schedules to move the requested parts from Detroit High Velocity Center (HVC) to respective dealers. Business partner would like to create a new platform for North America Market to move goods from one location to another.",
      image: "/projects/project2.jpg",
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
      title: "Wiley Digital Archives and Wiley Admin ",
      description:
        "Wiley Digital Archives is an ongoing initiative to partner with the world’s leading societies, libraries, and archives to digitize the unique and rare primary sources that tell the story behind the contemporary research content we publish today. Wiley admin interface provides facility to manage customers, institutions, and locations. Authentication through IP address/user account can be managed based on locations of institutions. ",
      image: "/projects/project-wiley.jpg",
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
      title: "Cengage Learning Australia / New Zealand ",
      description:
        "Cengage Learning Australia is a leading provider of learning solutions for the school and higher education markets for Australia and New Zealand. Cengage Learning Australia publishes a successful range of school and university educational resources, written by Australian and New Zealand authors who are specialists in their field. ",
      image: "/projects/project-cengage.jpg",
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
      title: "Mamta Housing Finance Company ",
      description:
        "Mamta Housing Finance Company (MHFC) is a group company of HTC Global Services. MHFC is an NHB Licensed home loan and property loan provider. MHFC takes pride in its purpose-driven team of enthusiastic people who are committed to transform the housing sector in India by providing affordable housing finance to the urban and rural population. ",
      image: "/projects/project-mamta.jpg",
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
      title: "HTC Global Services Home Page",
      description:
        "A global technology partner with a passion for solving complex challenges and driving real-world impact. HTC Global Services has been shaping business success through technology and innovation since 1990. With a deep understanding of industry challenges and opportunities, we design IT and business process solutions that help organizations operate smarter, scale faster, and stay ahead in a competitive world.",
      image: "/projects/project-htc.jpg",
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
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gray-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={project.id <= 3}
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600 transition"
                  >
                    Live Demo →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
