import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Message from Portfolio Contact Form');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:jasminehall.dev@gmail.com?subject=${subject}&body=${body}`;
    
    // Open mailto link
    window.location.href = mailtoLink;
    
    // Show success message
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setSubmitStatus(null);
    }, 3000);
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
        <div className="max-w-4xl mx-auto">
          
          {/* Hero Header */}
          <div className="text-center mb-16 relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-red-400 to-orange-400 rounded-full"></div>
            <h1 className="text-6xl lg:text-7xl font-bold text-red-500 mb-6 leading-tight">
              GET IN TOUCH
            </h1>
            <div className="inline-block bg-gradient-to-r from-red-400 to-orange-400 text-white px-8 py-3 rounded-full text-lg font-bold tracking-wider uppercase shadow-lg">
              Let's Build Something Amazing Together
            </div>
            <p className="mt-8 text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
              Have a project in mind? Want to collaborate? Or just want to say hello? I'd love to hear from you! Fill out the form below and I'll get back to you as soon as possible.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-red-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              
              {/* Form Section */}
              <div className="p-12">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                    <span className="text-2xl">✉️</span>
                    Send Me a Message
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    I'm always excited to discuss new opportunities, answer questions, or just have a chat about tech!
                  </p>
                </div>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg">
                    <p className="font-medium">✅ Your email client should open now! Thanks for reaching out!</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-white"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-white"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-white"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-white resize-none"
                      placeholder="Tell me about your project, ask a question, or just say hi!"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="animate-spin">⏳</span>
                        Opening Email Client...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Send Message
                        <span>📧</span>
                      </span>
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Info Section */}
              <div className="bg-gradient-to-br from-red-500 to-orange-500 p-12 text-white">
                <div className="h-full flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-8">Let's Connect!</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <span className="text-2xl">📧</span>
                      </div>
                      <div>
                        <p className="font-bold">Email</p>
                        <p className="text-red-100">jasminehall.dev@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <span className="text-2xl">💻</span>
                      </div>
                      <div>
                        <p className="font-bold">GitHub</p>
                        <p className="text-red-100">JasmineHall1992</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <span className="text-2xl">🔗</span>
                      </div>
                      <div>
                        <p className="font-bold">LinkedIn</p>
                        <p className="text-red-100">jasmine-hall-1128672a1</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <span className="text-2xl">📍</span>
                      </div>
                      <div>
                        <p className="font-bold">Location</p>
                        <p className="text-red-100">New Orleans, LA</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <span className="text-2xl">⏰</span>
                      </div>
                      <div>
                        <p className="font-bold">Response Time</p>
                        <p className="text-red-100">Usually within 24 hours</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 p-6 bg-white/10 rounded-xl">
                    <p className="text-sm text-red-100 italic">
                      "I'm always excited to connect with fellow developers, potential collaborators, and anyone interested in creating amazing digital experiences!"
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Alternative Contact Methods */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Prefer a Different Way to Connect?</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="https://github.com/JasmineHall1992" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-red-100"
              >
                <span className="text-2xl">💻</span>
                <span className="font-medium text-gray-700">GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/jasmine-hall-1128672a1/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-red-100"
              >
                <span className="text-2xl">🔗</span>
                <span className="font-medium text-gray-700">LinkedIn</span>
              </a>
              <a 
                href="https://medium.com/@jasminehall5935" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-red-100"
              >
                <span className="text-2xl">📖</span>
                <span className="font-medium text-gray-700">Medium</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;