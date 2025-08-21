const SocialPage = () => (
  <div className="min-h-screen bg-rose-50 p-8">
    <div className="max-w-4xl mx-auto">
      {/* Decorative elements */}
      <div className="relative">
        <div className="absolute top-4 right-4">
          <svg className="w-6 h-6 text-red-500 fill-current" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        <div className="absolute bottom-4 left-4">
          <div className="w-6 h-6 bg-red-500 rounded-full"></div>
        </div>
        <div className="absolute top-1/2 right-8">
          <svg className="w-8 h-8 text-red-500 fill-current" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
      </div>

      <div className="text-center">
        <h1 className="text-5xl font-bold text-red-500 mb-12">Connect with me</h1>
        
        <div className="bg-red-500 text-white px-12 py-4 rounded-full inline-block mb-12 text-xl font-medium">
          Let's build something great together
        </div>

        <div className="flex justify-center gap-8 mb-16">
          <a href="#" className="block">
            <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
              <span className="text-white font-bold text-xl">in</span>
            </div>
          </a>
          <a href="#" className="block">
            <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
          </a>
          <a href="#" className="block">
            <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
              <span className="text-white font-bold text-xl">X</span>
            </div>
          </a>
          <a href="#" className="block">
            <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
              <span className="text-white font-bold text-sm">Medium</span>
            </div>
          </a>
        </div>

        <div className="bg-red-500 text-white px-16 py-8 rounded-3xl inline-block">
          <p className="text-lg">Social Media Stats</p>
        </div>
      </div>
    </div>
  </div>
);

export default SocialPage;