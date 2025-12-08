import React from "react";

const Hobbies = () => {
  const hobbyCategories = [
    {
      title: "Tech-Adjacent Hobbies",
      hobbies: [
        {
          name: "Hackathons & coding competitions",
          description: "Participating in challenges or mentoring teams",
        },
        {
          name: "Building side projects",
          description: "Creating apps, tools, or automation scripts",
        },
        {
          name: "Photography (especially drone/tech photography)",
          description: "Merging creativity with technology",
        },
        {
          name: "Podcasting about tech trends",
          description: "Sharing industry insights",
        },
        {
          name: "Mentoring junior developers",
          description: "Community contribution",
        },
      ],
    },
    {
      title: "Creative & Strategic",
      hobbies: [
        {
          name: "Chess or strategy games",
          description: "Demonstrates analytical thinking",
        },
        {
          name: "Reading (tech books, sci-fi, leadership)",
          description: "Shows continuous learning mindset",
        },
        {
          name: "Cooking/baking",
          description:
            "Shows precision, process-following, and experimentation",
        },
        {
          name: "Traveling & Exploring new cultures",
          description: "Global perspective, adaptability",
        },

        {
          name: "Public speaking at conferences",
          description: "Thought leadership",
        },
      ],
    },
    {
      title: "Active & Team-Oriented",
      hobbies: [
        {
          name: "Cricket, football, basketball",
          description: "Team collaboration, strategy",
        },
        {
          name: "Running",
          description: "Discipline, goal-setting, endurance",
        },
        {
          name: "Cycling or hiking",
          description: "Problem-solving, perseverance",
        },
        {
          name: "Esports or competitive gaming",
          description: "Quick decision-making, team coordination",
        },
        {
          name: "Language learning",
          description: "Communication skills, cultural awareness",
        },
      ],
    },
  ];

  return (
    <section id="hobbies" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tech-Adjacent Hobbies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Beyond coding, I explore various interests that complement my
            technical skills and foster creativity, strategic thinking, and
            personal growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {hobbyCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.hobbies.map((hobby, hobbyIndex) => (
                  <div
                    key={hobbyIndex}
                    className="border-l-4 border-blue-500 pl-4"
                  >
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {hobby.name}
                    </h4>
                    <p className="text-gray-600 text-sm">{hobby.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 italic">
            &ldquo;These diverse interests help me bring unique perspectives to
            problem-solving and foster continuous learning both in and outside
            the tech world.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
