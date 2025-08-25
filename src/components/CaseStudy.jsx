import { Link } from 'react-router-dom';

const CaseStudyPage = () => {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 px-6 py-20 relative overflow-hidden font-sans">

      {/* Floating sparkles for ✨ vibes */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <span className="floating-object" style={{ top: '8%', left: '5%', color: '#f472b6' }}>♡</span>
        <span className="floating-object delay-1" style={{ top: '18%', right: '10%', color: '#fbbf24' }}>✦</span>
        <span className="floating-object delay-2" style={{ bottom: '10%', left: '12%', color: '#facc15' }}>★</span>
        <span className="floating-object delay-3" style={{ bottom: '18%', right: '6%', color: '#f43f5e' }}>❀</span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-pink-600 mb-2">Low Pay, Low Play</h1>
          <p className="text-lg text-gray-600 italic">How Pay Rate Influences Shift Fulfillment on Clipboard Health</p>
          <p className="mt-2 text-sm text-gray-500">By Jasmine Hall • July 23, 2025</p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          <Section title="Summary">
            <p>
              In analyzing CBH’s marketplace shift data, I found that lower pay rates strongly correlated with lower shift claim rates and a higher likelihood of deletion by workplaces. This insight suggests a key pain point in supply and demand matching. I recommend testing interventions that will increase visibility or incentivize action on low-paying shifts.
            </p>
          </Section>

          <Section title="Context">
            <p>
              Clipboard Health operates a two-sided healthcare marketplace where workplaces post open shifts and per diem workers can browse and claim them. This model relies heavily on a consistent supply and demand match. When a shift goes unclaimed, it is not only lost revenue, but a missed care opportunity. I aimed to investigate what factors contribute to shifts being claimed or not.
            </p>
          </Section>

          <Section title="How I Analyzed the Data">
            <p>
              The dataset provided was view-only, so I manually sampled the data by tallying rows based on: <strong>pay_rate</strong>, <strong>claimed_at</strong>, <strong>deleted_at</strong>, and <strong>is_ncns</strong>. 
              I tracked over 20 shifts across low (&lt;$22), mid ($22–26), and high (&gt;$26) pay ranges. Despite being nontraditional, this let me find directional patterns: lower pay = lower claim rate and higher deletion rate.
            </p>
          </Section>

          <Section title="What I Found">
            <p>
              Shifts under $22/hr were often unclaimed and deleted. High-paying shifts (&gt;$26/hr) were almost always claimed quickly. Mid-range shifts were inconsistent, depending on duration and timing. Interestingly, no-call-no-show behavior wasn’t tied to pay rate, hinting that reliability may be driven by other factors.
            </p>
          </Section>

          <Section title="What We Could Try Next">
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li><strong>Boost Visibility:</strong> Automatically elevate underbooked, low-paying shifts in worker feeds.</li>
              <li><strong>Worker Incentives:</strong> Offer bonuses or loyalty points for taking less popular shifts.</li>
              <li><strong>Smart Notifications:</strong> Alert workers when higher-than-usual rates appear for shifts they often ignore.</li>
            </ul>
          </Section>
        </div>

        {/* Back button */}
        <div className="text-center mt-16">
          <Link to="/" className="cute-btn text-sm">
            ← Back to Homepage
          </Link>
        </div>
      </div>

      {/* Styles */}
      <style>
        {`
          .floating-object {
            position: absolute;
            font-size: 1.5rem;
            animation: floaty 6s ease-in-out infinite;
            opacity: 0.85;
          }

          .delay-1 { animation-delay: 0.5s; }
          .delay-2 { animation-delay: 1s; }
          .delay-3 { animation-delay: 1.5s; }

          @keyframes floaty {
            0% { transform: translateY(0) rotate(0); opacity: 0.6; }
            50% { transform: translateY(-10px) rotate(5deg); opacity: 1; }
            100% { transform: translateY(0) rotate(0); opacity: 0.6; }
          }

          .cute-btn {
            display: inline-block;
            background-color: white;
            border: 2px solid #f9c2d3;
            color: #d63384;
            padding: 0.6rem 1.2rem;
            border-radius: 9999px;
            font-weight: 500;
            box-shadow: 0 4px 8px rgba(255, 192, 203, 0.25);
            transition: all 0.2s ease;
          }

          .cute-btn:hover {
            background-color: #f9c2d3;
            color: white;
            transform: translateY(-2px);
          }
        `}
      </style>
    </div>
  );
};

// Reusable section component
const Section = ({ title, children }) => (
  <div>
    <h2 className="text-2xl text-pink-500 font-semibold mb-3">{title}</h2>
    <div className="bg-white rounded-xl p-6 shadow-md border border-pink-100 text-gray-700 leading-relaxed text-base">
      {children}
    </div>
  </div>
);

export default CaseStudyPage;
