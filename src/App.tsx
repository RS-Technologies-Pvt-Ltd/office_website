import React, { useState } from 'react';
import { Code2, Laptop, Globe2, ArrowRight, Monitor, Database, Lock, Mail, Phone, MapPin, Linkedin, Github, Twitter, Server } from 'lucide-react';
import logo from '../src/logo.png'

function App() {
  const [activeSection, setActiveSection] = useState('home');
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const handleGetStarted = () => {
    scrollToSection('contact');
  };

  const handleStartProject = () => {
    scrollToSection('contact');
  };

  const handleContactUs = () => {
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
              <img src={logo} className="h-8 w-8 text-blue-600"/>
              
              <span className="ml-2 text-xl font-bold text-gray-900">RS Technologies</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a 
                href="#home"
                onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
                className={`${activeSection === 'home' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors`}
              >
                Home
              </a>
              <a 
                href="#services"
                onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
                className={`${activeSection === 'services' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors`}
              >
                Services
              </a>
              <a 
                href="#tech-stack"
                onClick={(e) => { e.preventDefault(); scrollToSection('tech-stack'); }}
                className={`${activeSection === 'tech-stack' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors`}
              >
                Tech Stack
              </a>
              <a 
                href="#about"
                onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                className={`${activeSection === 'about' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors`}
              >
                About
              </a>
              <a 
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                className={`${activeSection === 'contact' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors`}
              >
                Contact
              </a>
            </nav>
           {/* <button 
              onClick={handleGetStarted}
              className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>*/}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore Services for
              <span className="block text-blue-600">Web, Mobile & Desktop</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Building responsive, industrial-grade applications using React, Node, Python — 
              engineered for scalability, security, and cross-platform excellence.
            </p>
            {/*<button 
              onClick={handleStartProject}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>*/}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Comprehensive Solutions</h2>
            <p className="mt-4 text-lg text-gray-600">End-to-end development across all platforms</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Monitor className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cross-Platform Development</h3>
              <p className="text-gray-600">Web, mobile, and desktop applications built with modern frameworks and pixel-perfect design.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Lock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Enterprise Security</h3>
              <p className="text-gray-600">Industry-standard security practices and robust authentication systems for enterprise applications.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Database className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Scalable Architecture</h3>
              <p className="text-gray-600">Cloud-native solutions designed to scale with your business needs and user demands.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div id="tech-stack" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Tech Stack
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We craft modern, scalable, and cross-platform apps using proven technologies across frontend, backend, and infrastructure.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Frontend Card */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <div className="flex items-start space-x-4">
              <div className="h-12 w-12 flex items-center justify-center bg-blue-100 rounded-full">
                <Code2 className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Frontend Technologies</h3>
                <ul className="space-y-1 text-gray-600 list-disc list-inside">
                  <li>Responsive web applications</li>
                  <li>App development</li>
                  <li>Desktop applications</li>
                  <li>Modern UI/UX</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Backend Card */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <div className="flex items-start space-x-4">
              <div className="h-12 w-12 flex items-center justify-center bg-blue-100 rounded-full">
                <Laptop className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Backend Excellence</h3>
                <ul className="space-y-2 text-gray-600 list-disc list-inside">
                  <li>Scalable server applications</li>
                  <li>Data processing & automation</li>
                  <li>RESTful & GraphQL APIs</li>
                  <li>Cloud-native architecture</li>
                </ul>
              </div>
            </div>
          </div>

          {/* DevOps / Infra Card */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <div className="flex items-start space-x-4">
              <div className="h-12 w-12 flex items-center justify-center bg-blue-100 rounded-full">
                <Server className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">DevOps & Infrastructure</h3>
                <ul className="space-y-2 text-gray-600 list-disc list-inside">
                  <li>Docker & container </li>
                  <li>CI/CD </li>
                  <li>AWS, Firebase, and GCP deploy</li>
                  <li>Scalable database design</li>
                </ul>
              </div>
            </div>
            </div>
            </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">About Us</h2>
            <p className="mt-4 text-lg text-gray-600">Pioneering the future of software development</p>
          </div>
          <div className="prose prose-lg mx-auto text-justify text-gray-600">
            <p className="mb-6">
              <b>RS Technologies </b> is a leading software development company specializing in creating innovative solutions 
              for businesses across various industries. Founded by Akshay Kumar Gupta, our team brings together expertise 
              in modern web technologies, mobile development, and enterprise solutions.
            </p>
            <p className="mb-6">
              With a focus on quality and innovation, we deliver scalable applications that help businesses 
              achieve their digital transformation goals. Our commitment to excellence and customer satisfaction 
              has made us a trusted partner for organizations worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Ideas?</h2>
            <p className="text-xl text-blue-100 mb-8">Let's build something amazing together</p>
            <button 
              onClick={handleContactUs}
              className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
            <p className="mt-4 text-lg text-gray-600">We'd love to hear from you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-3" />
                  <a href="mailto:1997akshay04@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                    1997akshay04@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-600">+91 (866) 885-5737</span>
                </li>   
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-600">Kanpur, Uttar Pradesh, India</span>
                </li>
              </ul>
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/akshay0497/" className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="https://github.com/akshay0497" className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Github className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="col-span-1">
              <div className="flex items-center mb-4">
                <img src={logo} className="h-8 w-8 text-blue-600"/>
                <span className="ml-2 text-xl font-bold">RS Technologies</span>
              </div>
              <p className="text-gray-400 mb-4">
                The digital transformation of businesses by providing intelligent, reliable, and scalable software solutions that drive long-term value
              </p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/akshay0497/" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://github.com/akshay0497" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#about"
                    onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a 
                    href="#services"
                    onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a 
                    href="#tech-stack"
                    onClick={(e) => { e.preventDefault(); scrollToSection('tech-stack'); }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Tech Stack
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mobile Apps</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Desktop Software</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cloud Solutions</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-500 mr-2" />
                  <a href="mailto:1997akshay04@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                    1997akshay04@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-gray-400">+91 (866) 885-5737</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-gray-400">Kanpur, Uttar Pradesh, India</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} RS Technologies Pvt Ltd. All rights reserved.
              </p>
              <div className="mt-4 md:mt-0">
                <p className="text-gray-400">
                  Founder & CEO: <span className="text-white">Akshay Kumar Gupta</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;