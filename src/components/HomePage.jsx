import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="min-h-screen bg-pink-200 text-gray-800 px-6 pt-16 pb-32 font-sans relative overflow-hidden flex flex-col justify-between">

    {/* ✨ Floating Background Objects */}
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <span className="floating-object" style={{ top: '5%', left: '8%', color: '#f472b6' }}>♡</span>
      <span className="floating-object delay-1" style={{ top: '10%', right: '12%', color: '#fbbf24' }}>✦</span>
      <span className="floating-object delay-2" style={{ top: '20%', left: '40%', color: '#ec4899' }}>★</span>
      <span className="floating-object delay-3" style={{ top: '35%', left: '20%', color: '#f43f5e' }}>❀</span>
      <span className="floating-object delay-4" style={{ top: '45%', right: '10%', color: '#facc15' }}>✧</span>
      <span className="floating-object delay-5" style={{ top: '50%', left: '70%', color: '#fb7185' }}>♡</span>
      <span className="floating-object delay-2" style={{ bottom: '15%', left: '5%', color: '#f472b6' }}>★</span>
      <span className="floating-object delay-4" style={{ bottom: '10%', right: '5%', color: '#fcd34d' }}>✦</span>
      <span className="floating-object delay-3" style={{ bottom: '20%', left: '40%', color: '#ec4899' }}>❀</span>
    </div>

    {/* Main Content */}
    <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-20">
      
      {/* Profile Image */}
      <div className="w-full max-w-sm">
        <img
          src="/images/profile.jpg"
          alt="Jasmine Hall"
          className="w-full rounded-[2rem] object-cover shadow-xl border-4 border-pink-200"
          style={{ aspectRatio: '3/4' }}
        />
      </div>

      {/* Text Section */}
      <div className="w-full flex-1 text-center lg:text-left">
        <h1 className="text-5xl font-extrabold text-pink-600 leading-tight tracking-tight mb-2 flex items-center justify-center lg:justify-start gap-3">
          <span className="font-cute">Jasmine Hall</span>
          <span className="w-6 h-6 inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="currentColor" className="text-pink-400">
              <path d="M32 4c2 8 4 12 12 14-8 2-10 4-12 12-2-8-4-10-12-12 8-2 10-6 12-14zm0 56c-2-8-4-12-12-14 8-2 10-4 12-12 2 8 4 10 12 12-8 2-10 6-12 14zm28-28c-8 2-12 4-14 12-2-8-4-10-12-12 8-2 10-4 12-12 2 8 6 10 14 12zM4 32c8-2 12-4 14-12 2 8 4 10 12 12-8 2-10 4-12 12-2-8-6-10-14-12z"/>
              <circle cx="32" cy="32" r="6" fill="pink"/>
            </svg>
          </span>
        </h1>

        <p className="text-pink-700 font-semibold uppercase text-sm tracking-widest mb-4">
          Software Engineer + Project Manager
        </p>

        <p className="text-3xl leading-relaxed mb-6 text-gray-700 max-w-xl mx-auto lg:mx-0">
          Welcome! My name is Jasmine Hall and I am a developer and project manager passionate about crafting joyful digital experiences. My background managing film sets brings creativity, calm, and coordination to every project 🌷
        </p>

        {/* Chips */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-4">
          <Link to="/resume" className="cute-btn">Resume</Link>
          <Link to="/portfolio" className="cute-btn">Portfolio</Link>
          <Link to="/blog" className="cute-btn">Blog</Link>
         <Link to="/case-studies" className="cute-btn">Case Studies</Link>
          <Link to="/contact" className="cute-btn">Contact</Link>
        </div>
      </div>
    </div>

    {/* ✨ Tagline (Bottom Center) */}
    <div className="absolute bottom-8 w-full text-center z-10">
      <p className="text-pink-600 font-semibold text-lg sm:text-3xl tracking-wide">
        “Where creativity meets clarity.”
      </p>
    </div>

    {/* 🌸 Styles */}
    <style>
      {`
        .font-cute {
          font-family: 'Pacifico', cursive;
        }

        .cute-btn {
          background-color: white;
          border: 2px solid #f9c2d3;
          color: #d63384;
          padding: 0.6rem 1.2rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 500;
          box-shadow: 0 4px 8px rgba(255, 192, 203, 0.25);
          transition: all 0.2s ease;
          text-align: center;
        }

        .cute-btn:hover {
          background-color: #f9c2d3;
          color: white;
          transform: translateY(-2px);
        }

        .floating-object {
          position: absolute;
          font-size: 1.5rem;
          animation: floaty 6s ease-in-out infinite;
          opacity: 0.85;
        }

        .delay-1 { animation-delay: 0.5s; }
        .delay-2 { animation-delay: 1s; }
        .delay-3 { animation-delay: 1.5s; }
        .delay-4 { animation-delay: 2s; }
        .delay-5 { animation-delay: 2.5s; }

        @keyframes floaty {
          0% { transform: translateY(0) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-12px) rotate(5deg); opacity: 1; }
          100% { transform: translateY(0) rotate(0deg); opacity: 0.6; }
        }
      `}
    </style>

    {/* Google Font */}
    <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
  </div>
);

export default HomePage;
