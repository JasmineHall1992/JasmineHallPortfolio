const ResumePage = () => (
  <div className="min-h-screen bg-rose-50 p-8">
    <div className="max-w-4xl mx-auto">
      {/* Decorative elements */}
      <div className="relative">
        <div className="absolute top-4 right-4">
          <div className="w-4 h-4 bg-red-500 rounded-full"></div>
        </div>
        <div className="absolute top-20 left-8">
          <svg className="w-6 h-6 text-red-500 fill-current" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        <div className="absolute bottom-20 left-4">
          <div className="w-8 h-8 bg-red-500 rounded-full"></div>
        </div>
        <div className="absolute bottom-4 right-8">
          <svg className="w-6 h-6 text-red-500 fill-current" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
      </div>

      <div className="border-4 border-purple-500 rounded-lg p-12 bg-white relative overflow-hidden">
        {/* Decorative heart */}
        <div className="absolute top-8 left-8">
          <svg className="w-8 h-8 text-red-500 fill-current" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>

        <div className="text-center">
          <h1 className="text-5xl font-bold text-red-500 mb-6">Resume and Skills</h1>
          
          <a 
            href="#" 
            className="inline-block bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors mb-12 underline"
          >
            Download My Resume
          </a>

          <div className="mb-12">
            <h2 className="text-4xl font-bold text-red-500 mb-6">Certifications</h2>
            <div className="space-y-3">
              <a href="#" className="block text-red-400 hover:text-red-500 underline text-lg">
                Operation Spark
              </a>
              <a href="#" className="block text-red-400 hover:text-red-500 underline text-lg">
                Google Coursera
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-red-500 mb-8">Technical Skills</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-red-500 text-white px-8 py-3 rounded-full text-lg font-medium">
                JavaScript
              </span>
              <span className="bg-red-500 text-white px-8 py-3 rounded-full text-lg font-medium">
                Tailwind CSS
              </span>
              <span className="bg-red-500 text-white px-8 py-3 rounded-full text-lg font-medium">
                GitHub
              </span>
              <span className="bg-red-500 text-white px-8 py-3 rounded-full text-lg font-medium">
                React Router
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ResumePage;