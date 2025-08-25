import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="min-h-screen bg-rose-50 relative overflow-hidden">
    {/* Floating Background Shapes */}
    <div className="absolute inset-0 pointer-events-none">
      {/* Hearts */}
      <div className="absolute top-20 left-10 text-red-200 text-2xl animate-pulse">♡</div>
      <div className="absolute top-40 right-20 text-red-300 text-lg animate-pulse" style={{animationDelay: '1s'}}>♡</div>
      <div className="absolute bottom-32 left-20 text-red-200 text-xl animate-pulse" style={{animationDelay: '2s'}}>♡</div>
      
      {/* Stars */}
      <div className="absolute top-32 right-40 text-red-200 text-xl animate-pulse" style={{animationDelay: '0.5s'}}>✦</div>
      <div className="absolute bottom-20 right-10 text-red-300 text-lg animate-pulse" style={{animationDelay: '1.5s'}}>✦</div>
      <div className="absolute top-60 left-32 text-red-200 text-sm animate-pulse" style={{animationDelay: '3s'}}>✦</div>
      
      {/* Circles */}
      <div className="absolute top-16 left-1/3 w-3 h-3 bg-red-200 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>
      <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-red-300 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
      <div className="absolute top-1/2 left-16 w-4 h-4 bg-red-200 rounded-full animate-pulse" style={{animationDelay: '1.8s'}}></div>
      
      {/* Diamonds */}
      <div className="absolute top-28 right-1/4 text-red-200 text-lg animate-pulse" style={{animationDelay: '1.2s'}}>◆</div>
      <div className="absolute bottom-28 left-1/4 text-red-300 text-sm animate-pulse" style={{animationDelay: '2.8s'}}>◆</div>
      <div className="absolute top-3/4 right-32 text-red-200 text-xl animate-pulse" style={{animationDelay: '0.3s'}}>◆</div>
    </div>

    {/* Main Content */}
    <div className="relative z-10 min-h-screen flex items-center justify-center px-8 py-12">
      <div className="w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12">
          
          {/* Profile Image - Left Side */}
          <div className="w-full max-w-sm lg:max-w-md flex-shrink-0 lg:ml-16">
            <div className="relative">
              <img 
                src="/images/profile.jpg"
                alt="Jasmine Hall" 
                className="w-full rounded-lg object-cover shadow-lg"
                style={{ aspectRatio: '3/4' }}
              />
            </div>
          </div>
          
          {/* Content - Right Side */}
          <div className="w-full lg:w-auto flex-1 flex flex-col items-center lg:items-center lg:mr-16">
            <div className="text-center max-w-lg">
              <h1 className="text-5xl lg:text-7xl font-bold text-red-500 mb-2 leading-tight">
                JASMINE<br/>HALL
              </h1>
              <p className="text-red-400 text-base mb-6 tracking-widest uppercase">SOFTWARE ENGINEER</p>
              
              {/* Decorative arrow */}
              <div className="text-red-400 text-2xl mb-8">↓</div>
              
              <div className="flex flex-col gap-3 items-center">
                <Link 
                  to="/resume" 
                  className="text-red-400 hover:text-red-500 underline text-base font-bold transition-colors decoration-red-400 hover:decoration-red-500"
                >
                  See my Resume
                </Link>
                <a 
                  href="#" 
                  className="text-red-400 hover:text-red-500 underline text-base font-bold transition-colors decoration-red-400 hover:decoration-red-500"
                >
                  See my portfolio
                </a>
                <a 
                  href="#" 
                  className="text-red-400 hover:text-red-500 underline text-base font-bold transition-colors decoration-red-400 hover:decoration-red-500"
                >
                  Read my blog posts
                </a>
                <a 
                  href="mailto:jasminehall.dev@gmail.com" 
                  className="text-red-400 hover:text-red-500 underline text-base font-bold transition-colors decoration-red-400 hover:decoration-red-500"
                >
                  Send me an email
                </a>
                <Link 
                  to="/social" 
                  className="text-red-400 hover:text-red-500 underline text-base font-bold transition-colors decoration-red-400 hover:decoration-red-500"
                >
                  Find me on social media
                </Link>
                <a 
                  href="#" 
                  className="text-red-400 hover:text-red-500 underline text-base font-bold transition-colors decoration-red-400 hover:decoration-red-500"
                >
                  Read my Product Case Studies
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;