const PortfolioPage = () => {
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
              MY PORTFOLIO
            </h1>
            <div className="inline-block bg-gradient-to-r from-red-400 to-orange-400 text-white px-8 py-3 rounded-full text-lg font-bold tracking-wider uppercase shadow-lg">
              Live Projects & Case Studies
            </div>
            <p className="mt-8 text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
              Explore my collection of full-stack applications, from creative project management tools to AI-powered journaling platforms. Each project showcases different aspects of modern web development.
            </p>
          </div>

          {/* Project Showcase */}
          <div className="space-y-20">
            
            {/* StreamScene Project */}
            <section className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-red-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                
                {/* Project Info */}
                <div className="p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                        <span>🎬</span>
                        Full-Stack Application
                      </div>
                      <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        Thesis Project
                      </div>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">StreamScene</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      A comprehensive platform designed specifically for filmmakers, streamers, and creative professionals to manage their projects, budgets, and creative workflow in one centralized hub.
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-red-500 mb-3 flex items-center gap-2">
                      <span>⚡</span>
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Node.js', 'Express', 'MySQL', 'Sequelize', 'AI Integration', 'TailwindCSS'].map((tech, index) => (
                        <span key={index} className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-red-500 mb-3 flex items-center gap-2">
                      <span>✨</span>
                      Key Features
                    </h3>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex items-start gap-2">
                        <span className="text-orange-400 mt-1">▸</span>
                        <span>Project hub with script and pitch deck management</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-orange-400 mt-1">▸</span>
                        <span>Advanced budget tracking with categorized expenses</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-orange-400 mt-1">▸</span>
                        <span>Media library for trailers and demo uploads</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-orange-400 mt-1">▸</span>
                        <span>AI-powered weekly planner for productivity optimization</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a 
                      href="https://streamscene.net" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      View Live Site 🚀
                    </a>
                    <a 
                      href="https://github.com/JasmineHall1992/stream-scene" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      View Code 📂
                    </a>
                  </div>
                </div>

                {/* Project Screenshot */}
                <div className="bg-gray-100 flex items-center justify-center p-12">
                  <div className="w-full max-w-md">
                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-8 text-center">
                        <div className="text-6xl mb-4">🎬</div>
                        <p className="text-gray-600 font-medium">StreamScene Screenshot</p>
                        <p className="text-gray-400 text-sm mt-2">Coming Soon</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* DigiCry Project */}
            <section className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-red-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                
                {/* Project Screenshot */}
                <div className="bg-gray-100 flex items-center justify-center p-12 order-2 lg:order-1">
                  <div className="w-full max-w-md">
                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-8 text-center">
                        <div className="text-6xl mb-4">🤖</div>
                        <p className="text-gray-600 font-medium">DigiCry Screenshot</p>
                        <p className="text-gray-400 text-sm mt-2">Coming Soon</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-12 flex flex-col justify-center order-1 lg:order-2">
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                        <span>🤖</span>
                        AI-Powered App
                      </div>
                      <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        Legacy Refactor
                      </div>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">DigiCry</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      A modern journaling platform that transformed a legacy application into a scalable, maintainable product with AI-powered prompt generation and intuitive user experience.
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-red-500 mb-3 flex items-center gap-2">
                      <span>⚡</span>
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Material-UI', 'Gemini AI', 'Node.js', 'Express', 'MongoDB'].map((tech, index) => (
                        <span key={index} className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-red-500 mb-3 flex items-center gap-2">
                      <span>✨</span>
                      Key Features
                    </h3>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex items-start gap-2">
                        <span className="text-orange-400 mt-1">▸</span>
                        <span>Gemini AI integration for personalized journal prompts</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-orange-400 mt-1">▸</span>
                        <span>Full CRUD operations for prompt management</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-orange-400 mt-1">▸</span>
                        <span>Responsive Material-UI design with accessibility focus</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-orange-400 mt-1">▸</span>
                        <span>Legacy codebase refactored for maintainability</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a 
                      href="https://digicry.net" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      View Live Site 🚀
                    </a>
                    <a 
                      href="https://github.com/JasmineHall1992/digicry" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      View Code 📂
                    </a>
                  </div>
                </div>

              </div>
            </section>

            {/* Tabetai Project */}
            <section className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-red-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                
                {/* Project Info */}
                <div className="p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                        <span>🍳</span>
                        API Integration
                      </div>
                      <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        Recipe Finder
                      </div>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Tabetai</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      An intelligent recipe discovery app that helps users find delicious meals based on ingredients they already have, reducing food waste and inspiring creative cooking.
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-red-500 mb-3 flex items-center gap-2">
                      <span>⚡</span>
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'TailwindCSS', 'Spoonacular API', 'React Router', 'Local Storage'].map((tech, index) => (
                        <span key={index} className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-red-500 mb-3 flex items-center gap-2">
                      <span>✨</span>
                      Key Features
                    </h3>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex items-start gap-2">
                        <span className="text-orange-400 mt-1">▸</span>
                        <span>Fridge-themed UI with playful pastel design</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-orange-400 mt-1">▸</span>
                        <span>Spoonacular API for intelligent recipe matching</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-orange-400 mt-1">▸</span>
                        <span>Save and manage favorite recipes</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-orange-400 mt-1">▸</span>
                        <span>Responsive design for mobile and desktop</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a 
                      href="https://tabetai.net" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      View Live Site 🚀
                    </a>
                    <a 
                      href="https://github.com/JasmineHall1992/tabetai-app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      View Code 📂
                    </a>
                  </div>
                </div>

                {/* Project Screenshot */}
                <div className="bg-gray-100 flex items-center justify-center p-12">
                  <div className="w-full max-w-md">
                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-8 text-center">
                        <div className="text-6xl mb-4">🍳</div>
                        <p className="text-gray-600 font-medium">Tabetai Screenshot</p>
                        <p className="text-gray-400 text-sm mt-2">Coming Soon</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;