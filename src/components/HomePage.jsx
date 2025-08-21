import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="min-h-screen bg-rose-50 flex items-center justify-center p-8">
    <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">
      {/* Profile Image */}
      <div className="w-full max-w-sm">
        <div className="relative">
          <img 
            src="/path-to-your-image.jpg" // Replace this with your actual image path
            alt="Jasmine Hall" 
            className="w-full rounded-lg mx-auto object-cover"
            style={{ aspectRatio: '3/4' }}
          />
        </div>
      </div>
      
      {/* Content */}
      <div className="w-full text-center">
        <h1 className="text-5xl lg:text-6xl font-bold text-red-500 mb-2 leading-tight">
          JASMINE<br/>HALL
        </h1>
        <p className="text-red-400 text-base mb-6 tracking-widest uppercase">SOFTWARE ENGINEER</p>
        
        {/* Decorative arrow */}
        <div className="text-red-400 text-2xl mb-8">↓</div>
        
        <div className="flex flex-col gap-3">
          <Link 
            to="/resume" 
            className="text-red-400 hover:text-red-500 underline text-base transition-colors decoration-red-400 hover:decoration-red-500"
          >
            See my Resume
          </Link>
          <a 
            href="#" 
            className="text-red-400 hover:text-red-500 underline text-base transition-colors decoration-red-400 hover:decoration-red-500"
          >
            See my portfolio
          </a>
          <a 
            href="#" 
            className="text-red-400 hover:text-red-500 underline text-base transition-colors decoration-red-400 hover:decoration-red-500"
          >
            Read my blog posts
          </a>
          <a 
            href="mailto:jasminehall.dev@gmail.com" 
            className="text-red-400 hover:text-red-500 underline text-base transition-colors decoration-red-400 hover:decoration-red-500"
          >
            Send me an email
          </a>
          <Link 
            to="/social" 
            className="text-red-400 hover:text-red-500 underline text-base transition-colors decoration-red-400 hover:decoration-red-500"
          >
            Find me on social media
          </Link>
          <a 
            href="#" 
            className="text-red-400 hover:text-red-500 underline text-base transition-colors decoration-red-400 hover:decoration-red-500"
          >
            Read my Product Case Studies
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;