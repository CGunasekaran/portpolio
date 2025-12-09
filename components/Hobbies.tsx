export default function Hobbies() {
  const hobbyCategories = [
    {
      title: "Tech-Adjacent Hobbies",
      icon: "💻",
      gradient: "from-primary-500 via-blue-500 to-accent-500",
      borderColor: "border-primary-200 dark:border-primary-700",
      iconBg: "bg-gradient-to-br from-primary-100 to-blue-100 dark:from-primary-900/50 dark:to-blue-900/50",
      hobbies: [
        {
          name: "Hackathons & coding competitions",
          description: "Participating in challenges or mentoring teams",
          icon: "🏆",
        },
        {
          name: "Building side projects",
          description: "Creating apps, tools, or automation scripts",
          icon: "🔧",
        },
        {
          name: "Photography (especially drone/tech photography)",
          description: "Merging creativity with technology",
          icon: "📷",
        },
        {
          name: "Podcasting about tech trends",
          description: "Sharing industry insights",
          icon: "🎙️",
        },
        {
          name: "Mentoring junior developers",
          description: "Community contribution",
          icon: "🎓",
        },
      ],
    },
    {
      title: "Creative & Strategic",
      icon: "🎨",
      gradient: "from-accent-500 via-green-500 to-emerald-500",
      borderColor: "border-accent-200 dark:border-accent-700",
      iconBg: "bg-gradient-to-br from-accent-100 to-green-100 dark:from-accent-900/50 dark:to-green-900/50",
      hobbies: [
        {
          name: "Chess or strategy games",
          description: "Demonstrates analytical thinking",
          icon: "♟️",
        },
        {
          name: "Reading (tech books, sci-fi, leadership)",
          description: "Shows continuous learning mindset",
          icon: "📚",
        },
        {
          name: "Cooking/baking",
          description:
            "Shows precision, process-following, and experimentation",
          icon: "🍳",
        },
        {
          name: "Traveling & Exploring new cultures",
          description: "Global perspective, adaptability",
          icon: "✈️",
        },

        {
          name: "Public speaking at conferences",
          description: "Thought leadership",
        },
      ],
    },
    {
      title: "Active & Team-Oriented",
      icon: "⚡",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      borderColor: "border-orange-200 dark:border-orange-700",
      iconBg: "bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/50 dark:to-red-900/50",
      hobbies: [
        {
          name: "Cricket, football, basketball",
          description: "Team collaboration, strategy",
          icon: "⚽",
        },
        {
          name: "Running",
          description: "Discipline, goal-setting, endurance",
          icon: "🏃",
        },
        {
          name: "Cycling or hiking",
          description: "Problem-solving, perseverance",
          icon: "🚴",
        },
        {
          name: "Esports or competitive gaming",
          description: "Quick decision-making, team coordination",
          icon: "🎮",
        },
        {
          name: "Language learning",
          description: "Communication skills, cultural awareness",
          icon: "🗣️",
        },
      ],
    },
  ];

  return (
    <section id="hobbies" className="relative py-24 overflow-hidden">
      {/* Modern background with gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-blue-50/30 to-purple-50/30 dark:from-neutral-950 dark:via-blue-950/30 dark:to-purple-950/30">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20 dark:opacity-10"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-100/30 via-transparent to-primary-100/30 dark:from-accent-900/20 dark:to-primary-900/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full border border-primary-200 dark:border-primary-800 mb-6">
            <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
              🎯 Personal Interests
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold mb-8">
            <span className="gradient-text">Beyond Code</span>
            <span className="block text-3xl sm:text-4xl text-neutral-700 dark:text-neutral-300 font-semibold mt-4">
              Hobbies & Interests
            </span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto leading-relaxed">
            Beyond coding, I explore various interests that complement my technical skills,
            foster creativity, and drive continuous personal growth.
          </p>
        </div>

        {/* Enhanced hobby categories grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {hobbyCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="modern-card h-full">
                {/* Category header with gradient */}
                <div className="relative p-6 pb-4">
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-5 rounded-t-2xl`}></div>
                  <div className="relative flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-2xl ${category.iconBg} flex items-center justify-center text-2xl border ${category.borderColor}`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                        {category.title}
                      </h3>
                      <div className={`w-12 h-1 bg-gradient-to-r ${category.gradient} rounded-full mt-2`}></div>
                    </div>
                  </div>
                </div>

                {/* Hobbies list */}
                <div className="px-6 pb-6 space-y-4">
                  {category.hobbies.map((hobby, hobbyIndex) => (
                    <div
                      key={hobbyIndex}
                      className="group/hobby flex items-start space-x-4 p-4 rounded-xl bg-neutral-50/50 dark:bg-neutral-800/30 hover:bg-gradient-to-r hover:from-white/60 hover:to-neutral-50 dark:hover:from-neutral-700/50 dark:hover:to-neutral-800/50 transition-all duration-300 border border-neutral-200/50 dark:border-neutral-700/50 hover:border-primary-200 dark:hover:border-primary-700 hover:shadow-lg hover:-translate-y-1"
                    >
                      {hobby.icon && (
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-white to-neutral-100 dark:from-neutral-700 dark:to-neutral-800 rounded-xl flex items-center justify-center text-lg border border-neutral-200 dark:border-neutral-600 group-hover/hobby:scale-110 transition-transform duration-300">
                          {hobby.icon}
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1 group-hover/hobby:text-primary-600 dark:group-hover/hobby:text-primary-400 transition-colors duration-300">
                          {hobby.name}
                        </h4>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                          {hobby.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact highlight section */}
        <div className="text-center animate-fade-in-up animate-delay-1000">
          <div className="modern-card max-w-4xl mx-auto">
            <div className="relative p-8">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-accent-500/5 to-purple-500/5 rounded-2xl"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6">
                  💡
                </div>
                <blockquote className="text-xl font-medium text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  "These diverse interests help me bring unique perspectives to problem-solving
                  and foster continuous learning both in and outside the tech world."
                </blockquote>
                <div className="flex items-center justify-center space-x-6 mt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">15+</div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">Active Hobbies</div>
                  </div>
                  <div className="w-1 h-12 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full opacity-30"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent-600 dark:text-accent-400">3</div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">Categories</div>
                  </div>
                  <div className="w-1 h-12 bg-gradient-to-b from-accent-500 to-purple-500 rounded-full opacity-30"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">∞</div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">Learning</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
