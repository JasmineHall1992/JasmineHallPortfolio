const ResumePage = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/path-to-your-resume.pdf';
    link.download = 'Jasmine_Hall_Resume.pdf';
    link.click();
  };

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
              JASMINE HALL
            </h1>
            <div className="inline-block bg-gradient-to-r from-red-400 to-orange-400 text-white px-8 py-3 rounded-full text-lg font-bold tracking-wider uppercase shadow-lg">
              Software Engineer
            </div>
            
            {/* Contact Info with Icons */}
            <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-red-400">
              <div className="flex items-center gap-2">
                <span className="text-xl">📱</span>
                <span className="font-medium">(504) 606-9751</span>
              </div>
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <div className="flex items-center gap-2">
                <span className="text-xl">✉️</span>
                <a href="mailto:jasminehall.dev@gmail.com" className="hover:text-red-500 underline font-medium">jasminehall.dev@gmail.com</a>
              </div>
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <div className="flex items-center gap-2">
                <span className="text-xl">💻</span>
                <a href="https://github.com/JasmineHall1992" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 underline font-medium">GitHub</a>
              </div>
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🔗</span>
                <a href="https://www.linkedin.com/in/jasmine-hall-1128672a1/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 underline font-medium">LinkedIn</a>
              </div>
            </div>
            
            {/* Download Button with Icon */}
            <div className="mt-10">
              <button 
                onClick={handleDownloadResume}
                className="group bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span className="flex items-center gap-3">
                  <span className="text-xl group-hover:animate-bounce">📄</span>
                  Download Resume PDF
                </span>
              </button>
            </div>
          </div>

          {/* Professional Summary - Feature Section */}
          <section className="mb-20">
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-red-100">
              <div className="absolute -top-6 left-10">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full text-lg font-bold flex items-center gap-2">
                  <span className="text-xl">🌟</span>
                  Professional Summary
                </div>
              </div>
              <div className="pt-8">
                <p className="text-gray-700 leading-relaxed text-lg text-center max-w-4xl mx-auto">
                  Creative and resourceful Software Engineer with a background in film production, project coordination, and tech-forward problem-solving. Known for delivering polished, user-centric apps with style and strategy. Equally comfortable building responsible frontends, architecting backends, or leading agile sprints.
                </p>
              </div>
            </div>
          </section>

          {/* Skills Section with Visual Elements */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-red-500 mb-4 flex items-center justify-center gap-3">
                <span className="text-3xl">⚡</span>
                Technical Arsenal
                <span className="text-3xl">⚡</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-orange-400 rounded-full mx-auto"></div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  'JavaScript', 'React', 'SQL', 'MySQL', 'Sequelize', 'NoSQL', 'MongoDB',
                  'Mongoose', 'Node', 'Express', 'Rest APIs', 'Webpack', 'Babel',
                  'TailwindCSS', 'MUI', 'Git', 'GitHub', 'Cloud Deployment', 'HTML', 'CSS',
                  'Agile', 'Scrum'
                ].map((skill, index) => (
                  <div key={index} className="group">
                    <div className="bg-gradient-to-r from-red-100 to-orange-100 hover:from-red-200 hover:to-orange-200 text-red-700 px-4 py-3 rounded-xl text-center font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-red-200">
                      {skill}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section - Cards Layout */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-red-500 mb-4 flex items-center justify-center gap-3">
                <span className="text-3xl">🚀</span>
                Featured Projects
                <span className="text-3xl">🚀</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-orange-400 rounded-full mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* StreamScene Project */}
              <div className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 border border-red-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <span>🎬</span>
                    Full-Stack
                  </div>
                  <a href="https://github.com/JasmineHall1992/stream-scene" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-500 transition-colors">
                    <span className="text-2xl">📂</span>
                  </a>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">StreamScene</h3>
                <p className="text-gray-600 italic mb-4 text-sm">A comprehensive platform for filmmakers, streamers, and artists to manage creative projects and income.</p>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">▸</span>
                    <span>MySQL Schema with Sequelize for project management</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">▸</span>
                    <span>Project hub with scripts, pitch decks, and idea tracking</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">▸</span>
                    <span>Budget tracker with income/expense categorization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">▸</span>
                    <span>AI-powered weekly planner for productivity</span>
                  </div>
                </div>
              </div>

              {/* DigiCry Project */}
              <div className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 border border-red-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <span>🤖</span>
                    AI Integration
                  </div>
                  <a href="https://github.com/JasmineHall1992/digicry" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-500 transition-colors">
                    <span className="text-2xl">📂</span>
                  </a>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">DigiCry</h3>
                <p className="text-gray-600 italic mb-4 text-sm">Legacy app refactored into a maintainable, scalable journaling platform.</p>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">▸</span>
                    <span>Gemini AI integration for personalized prompts</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">▸</span>
                    <span>Full CRUD functionality for prompt management</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">▸</span>
                    <span>Responsive MUI layouts with accessibility focus</span>
                  </div>
                </div>
              </div>

              {/* Tabetai Project */}
              <div className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 border border-red-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <span>🍳</span>
                    API Integration
                  </div>
                  <a href="https://github.com/JasmineHall1992/tabetai-app" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-500 transition-colors">
                    <span className="text-2xl">📂</span>
                  </a>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Tabetai</h3>
                <p className="text-gray-600 italic mb-4 text-sm">Smart recipe finder that suggests meals based on available ingredients.</p>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">▸</span>
                    <span>Fridge-themed UI with Tailwind CSS</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">▸</span>
                    <span>Spoonacular API for ingredient-based matching</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">▸</span>
                    <span>React Router with full CRUD operations</span>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Experience & Education Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            
            {/* Experience */}
            <section>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-red-500 mb-4 flex items-center justify-center gap-3">
                  <span className="text-2xl">💼</span>
                  Experience
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-red-400 to-orange-400 rounded-full mx-auto"></div>
              </div>
              <div className="space-y-6">
                
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-red-100">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-3 rounded-xl text-xl">💻</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-lg">Technical Analyst & Project Manager</h3>
                      <p className="text-red-400 font-medium text-sm">TechByChoice | Jul 2024 - Sep 2024</p>
                      <div className="mt-3 space-y-1 text-sm text-gray-700">
                        <div className="flex items-start gap-2">
                          <span className="text-orange-400 mt-1">▸</span>
                          <span>Directed virtual dev teams through agile ceremonies</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-orange-400 mt-1">▸</span>
                          <span>Oversaw custom frontend widget development</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-orange-400 mt-1">▸</span>
                          <span>Created SOPs and managed GitHub/Linear workflows</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-red-100">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-3 rounded-xl text-xl">🎬</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-lg">Production Coordinator</h3>
                      <p className="text-red-400 font-medium text-sm">IATSE LOCAL 478 | Jan 2021 - Jul 2024</p>
                      <div className="mt-3 space-y-1 text-sm text-gray-700">
                        <div className="flex items-start gap-2">
                          <span className="text-orange-400 mt-1">▸</span>
                          <span>Led logistics for high-stakes productions</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-orange-400 mt-1">▸</span>
                          <span>Maintained creative consistency under tight deadlines</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* Education */}
            <section>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-red-500 mb-4 flex items-center justify-center gap-3">
                  <span className="text-2xl">🎓</span>
                  Education
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-red-400 to-orange-400 rounded-full mx-auto"></div>
              </div>
              <div className="space-y-6">
                
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-red-100">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-3 rounded-xl text-xl">💻</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-lg">Operation Spark</h3>
                      <p className="text-red-400 font-medium text-sm">New Orleans, LA | Aug 2024 - Aug 2025</p>
                      <p className="text-gray-700 text-sm mt-2">IBC Fundamentals of JavaScript, Functional Programming, and Web Development Level 3</p>
                      <p className="text-orange-600 text-xs font-medium mt-1">1200+ hours intensive coding bootcamp</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-red-100">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-3 rounded-xl text-xl">🏛️</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-lg">University of New Orleans</h3>
                      <p className="text-red-400 font-medium text-sm">New Orleans, LA | Aug 2018 - May 2020</p>
                      <p className="text-gray-700 text-sm mt-2">Public Administration Credits</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-red-100">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-3 rounded-xl text-xl">🎓</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-lg">Loyola University</h3>
                      <p className="text-red-400 font-medium text-sm">New Orleans, LA | Aug 2010 - May 2014</p>
                      <p className="text-gray-700 text-sm mt-2">Psychological Studies</p>
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

export default ResumePage;