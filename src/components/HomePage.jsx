import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="min-h-screen bg-rose-50 flex items-center justify-center p-8">
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
      {/* Profile Image */}
      <div className="lg:w-1/2">
        <img 
          src="https://images.unsplash.com/photo-1594736797933-d0411e4d22ee?w=500&h=400&fit=crop&crop=face" 
          alt="Jasmine Hall" 
          className="w-full max-w-md rounded-lg shadow-lg mx-auto"
        />
      </div>
      
      {/* Content */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-6xl lg:text-7xl font-bold text-red-500 mb-4">
          JASMINE<br/>HALL
        </h1>
        <p className="text-red-400 text-lg mb-8 tracking-wide">SOFTWARE ENGINEER</p>
        
        <div className="flex flex-col gap-4">
          <Link 
            to="/resume" 
            className="text-red-400 hover:text-red-500 underline text-lg transition-colors"
          >
            See my Resume
          </Link>
          <a 
            href="#" 
            className="text-red-400 hover:text-red-500 underline text-lg transition-colors"
          >
            See my portfolio
          </a>
          <a 
            href="#" 
            className="text-red-400 hover:text-red-500 underline text-lg transition-colors"
          >
            Read my blog posts
          </a>
          <a 
            href="mailto:jasminehall.dev@gmail.com" 
            className="text-red-400 hover:text-red-500 underline text-lg transition-colors"
          >
            Send me an email
          </a>
          <Link 
            to="/social" 
            className="text-red-400 hover:text-red-500 underline text-lg transition-colors"
          >
            Find me on social media
          </Link>
          <a 
            href="#" 
            className="text-red-400 hover:text-red-500 underline text-lg transition-colors"
          >
            Read my Product Case Studies
          </a>
        </div>
      </div>
    </div>
    
    {/* Decorative arrow */}
    <div className="absolute top-10 right-10 text-red-400 text-2xl">↓</div>
  </div>
);

export default HomePage;