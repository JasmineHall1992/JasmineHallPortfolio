const BlogPostsPage = () => {
  const blogPosts = [
    {
      title: "When Design Meets Function: A Technical Dive into UI",
      url: "https://medium.com/@jasminehall5935/when-design-meets-function-a-technical-dive-into-ui-48e77bdcbd62",
      date: "May 2025",
      description: "When referring to design in tech, UX (user experience) is usually the concept that gets all of the attention. But behind every seamless user experience is a user interface (UI) pulling double duty: making things look good and making sure users actually understand what they need to do on a webpage.",
      category: "UI/UX Design",
      emoji: "🎨",
      readTime: "5 min read",
      tags: ["UI Design", "UX", "Web Development", "Visual Hierarchy"]
    },
    {
      title: "Explaining UX: Software Design for the User Experience",
      url: "https://medium.com/@jasminehall5935/explaining-ux-software-design-for-the-user-experience-d79f32f022ad",
      date: "May 2025",
      description: "Have you ever quit a website because it was just way too confusing to navigate? I've had shopping experiences where the checkout button was nowhere in sight and navigating the site felt like being on a digital scavenger hunt. This is what happens when you treat user experience (UX) as an afterthought.",
      category: "UI/UX Design",
      emoji: "🎯",
      readTime: "4 min read",
      tags: ["UX Design", "User Experience", "Web Design", "Software Development"]
    },
    {
      title: "From Confused to Confident: How I Finally Began to Understand Map, Filter and Reduce",
      url: "https://medium.com/@jasminehall5935/from-confused-to-confident-how-i-finally-began-to-understand-map-filter-and-reduce-62619cd9a5e3",
      date: "2024",
      description: "When I began my journey into a coding bootcamp, I knew absolutely nothing about JavaScript. In fact, in an odd turn of events, my last job before bootcamp was an exciting role as an Assistant Property Master in the film industry. Here's how I used LEGO analogies to finally understand these essential JavaScript methods.",
      category: "JavaScript",
      emoji: "🧱",
      readTime: "6 min read",
      tags: ["JavaScript", "Array Methods", "Coding Bootcamp", "Career Change"]
    },
    {
      title: "Behavior-Driven Development: Writing Software That Matters",
      url: "https://medium.com/@jasminehall5935/behavior-driven-development-writing-software-that-matters-4198f42a3467",
      date: "2024",
      description: "Exploring the principles of behavior-driven development and how it helps create software that truly serves users' needs. A deep dive into writing meaningful, user-focused code.",
      category: "Software Development",
      emoji: "🔧",
      readTime: "7 min read",
      tags: ["BDD", "Software Development", "Testing", "Best Practices"]
    },
    {
      title: "Utility Types in TypeScript: The Powerup That JavaScript Deserves",
      url: "https://medium.com/@jasminehall5935/utility-types-in-typescript-the-powerup-that-javascript-deserves-0c1b9cd5987f",
      date: "2024",
      description: "TypeScript's utility types are like superpowers for JavaScript developers. Learn how these built-in type transformations can make your code more robust and maintainable.",
      category: "TypeScript",
      emoji: "⚡",
      readTime: "8 min read",
      tags: ["TypeScript", "JavaScript", "Type Safety", "Web Development"]
    },
    {
      title: "How CSS Powers HTML: Comparing Tailwind CSS and MUI",
      url: "https://medium.com/@jasminehall5935/how-css-powers-html-comparing-tailwind-css-and-mui-8ba6bdb97e4c",
      date: "2024",
      description: "A comprehensive comparison of two popular styling approaches - the utility-first philosophy of Tailwind CSS versus the component-based approach of Material-UI.",
      category: "CSS & Styling",
      emoji: "🎨",
      readTime: "6 min read",
      tags: ["CSS", "Tailwind", "Material-UI", "Styling Frameworks"]
    },
    {
      title: "Breaking Down NPM: A New Coder's Perspective",
      url: "https://medium.com/@jasminehall5935/breaking-down-npm-a-new-coders-perspective-cffea708e8f2",
      date: "2024",
      description: "NPM can be intimidating for new developers. Here's a beginner-friendly breakdown of what NPM is, why it matters, and how to use it effectively in your projects.",
      category: "Development Tools",
      emoji: "📦",
      readTime: "5 min read",
      tags: ["NPM", "Package Management", "JavaScript", "Development Tools"]
    }
  ];

  const categories = [...new Set(blogPosts.map(post => post.category))];

  return (
    <div className="min-h-screen bg-rose-50 relative overflow-hidden">
      {/* Floating Background Shapes - Orange Theme */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-orange-300 text-3xl animate-pulse">♡</div>
        <div className="absolute top-40 right-20 text-orange-400 text-lg animate-pulse" style={{animationDelay: '1s'}}>♡</div>
        <div className="absolute bottom-32 left-20 text-orange-300 text-2xl animate-pulse" style={{animationDelay: '2s'}}>♡</div>
        <div className="absolute top-32 right-40 text-orange-300 text-2xl animate-pulse" style={{animationDelay: '0.5s'}}>✦</div>
        <div className="absolute bottom-20 right-10 text-orange-400 text-xl animate-pulse" style={{animationDelay: '1.5s'}}>✦</div>
        <div className="absolute top-60 left-32 text-orange-300 text-lg animate-pulse" style={{animationDelay: '3s'}}>✦</div>
        <div className="absolute top-16 left-1/3 w-4 h-4 bg-orange-300 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-orange-400 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute top-1/2 left-16 w-5 h-5 bg-orange-300 rounded-full animate-pulse" style={{animationDelay: '1.8s'}}></div>
        <div className="absolute top-28 right-1/4 text-orange-300 text-2xl animate-pulse" style={{animationDelay: '1.2s'}}>◆</div>
        <div className="absolute bottom-28 left-1/4 text-orange-400 text-lg animate-pulse" style={{animationDelay: '2.8s'}}>◆</div>
        <div className="absolute top-3/4 right-32 text-orange-300 text-2xl animate-pulse" style={{animationDelay: '0.3s'}}>◆</div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen py-16 px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Header */}
          <div className="text-center mb-20 relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-red-400 to-orange-400 rounded-full"></div>
            <h1 className="text-6xl lg:text-7xl font-bold text-red-500 mb-6 leading-tight">
              MY BLOG
            </h1>
            <div className="inline-block bg-gradient-to-r from-red-400 to-orange-400 text-white px-8 py-3 rounded-full text-lg font-bold tracking-wider uppercase shadow-lg">
              Technical Writing & Insights
            </div>
            <p className="mt-8 text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
              From film industry to full-stack development, sharing my journey, insights, and lessons learned along the way. Specializing in beginner-friendly explanations of complex technical concepts.
            </p>
          </div>

          {/* Writing Stats */}
          <section className="mb-16">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-red-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-red-500 mb-2">{blogPosts.length}</div>
                  <p className="text-gray-600 font-medium">Published Articles</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-red-500 mb-2">{categories.length}</div>
                  <p className="text-gray-600 font-medium">Topic Categories</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-red-500 mb-2">📍</div>
                  <p className="text-gray-600 font-medium">Published on Medium</p>
                </div>
              </div>
            </div>
          </section>

          {/* Category Filter */}
          <section className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-red-500 mb-4 flex items-center justify-center gap-3">
                <span className="text-2xl">📂</span>
                Article Categories
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-orange-400 rounded-full mx-auto"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <div key={index} className="bg-gradient-to-r from-red-100 to-orange-100 text-red-700 px-6 py-3 rounded-full font-medium border border-red-200 shadow-sm">
                  {category}
                </div>
              ))}
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-red-500 mb-4 flex items-center justify-center gap-3">
                <span className="text-3xl">✍️</span>
                Latest Articles
                <span className="text-3xl">✍️</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-orange-400 rounded-full mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 border border-red-100">
                  
                  {/* Article Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-3 rounded-xl text-2xl">
                        {post.emoji}
                      </div>
                      <div>
                        <div className="bg-gradient-to-r from-red-100 to-orange-100 text-red-700 px-3 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </div>
                      </div>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <div>{post.date}</div>
                      <div className="mt-1 font-medium text-orange-600">{post.readTime}</div>
                    </div>
                  </div>

                  {/* Article Title */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 leading-tight group-hover:text-red-600 transition-colors">
                    {post.title}
                  </h3>

                  {/* Article Description */}
                  <p className="text-gray-600 leading-relaxed mb-6 line-clamp-4">
                    {post.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Button */}
                  <a 
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Read on Medium
                    <span className="text-lg">📖</span>
                  </a>
                </article>
              ))}
            </div>
          </section>

          {/* Writing Journey Section */}
          <section className="mb-20">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-red-100">
              <div className="text-center">
                <div className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full text-lg font-bold flex items-center gap-2 mb-6">
                  <span className="text-2xl">🎬</span>
                  My Writing Journey
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">From Film Sets to Code Blocks</h2>
                <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto mb-8">
                  My unique perspective comes from an exciting career transition - from working as an Assistant Property Master in the film industry (including projects with directors like Ryan Coogler) to becoming a full-stack developer. This journey gives me a special ability to explain complex technical concepts using creative analogies and real-world examples that resonate with career changers and coding beginners alike.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="bg-red-100 text-red-700 px-4 py-2 rounded-full font-medium">🎭 Film Industry Background</div>
                  <div className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium">🚀 Career Changer</div>
                  <div className="bg-red-100 text-red-700 px-4 py-2 rounded-full font-medium">🧱 LEGO Analogies</div>
                  <div className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium">👩‍💻 Bootcamp Graduate</div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="text-center py-16">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-3xl p-12 shadow-2xl">
              <h2 className="text-4xl font-bold mb-4">Want to Read More?</h2>
              <p className="text-red-100 mb-8 text-lg max-w-2xl mx-auto">
                Follow me on Medium for the latest articles about web development, UI/UX design, and the journey from career changer to software engineer.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a 
                  href="https://medium.com/@jasminehall5935" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-red-500 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-lg transform hover:scale-105"
                >
                  Follow on Medium 📖
                </a>
                <a 
                  href="mailto:jasminehall.dev@gmail.com" 
                  className="bg-white text-red-500 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-lg transform hover:scale-105"
                >
                  Suggest a Topic ✉️
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogPostsPage;