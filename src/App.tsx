import React from 'react';
import { AppProvider } from './contexts/AppContext';
import { useApp } from './contexts/AppContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CalculatorGrid from './components/CalculatorGrid';
import AITutorChat from './components/AITutorChat';

function MainContent() {
  const { setSelectedCategory } = useApp();

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    document.getElementById('calculators')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Header */}
      <Header />
      
      {/* Main Layout */}
      <div className="flex relative">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <main className="flex-1 min-h-screen">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-blue-500 via-blue-400 to-blue-200 text-white relative overflow-hidden">
            {/* Math Background Elements - Enhanced Pattern */}
            <div className="absolute inset-0 opacity-10">
              {/* Math symbols scattered pattern */}
              <div className="absolute top-10 left-10 text-6xl text-white/15">∫</div>
              <div className="absolute top-20 right-20 text-4xl text-white/10">π</div>
              <div className="absolute top-40 left-1/4 text-5xl text-white/15">√</div>
              <div className="absolute bottom-20 right-1/4 text-7xl text-white/10">∑</div>
              <div className="absolute bottom-40 left-20 text-4xl text-white/15">α</div>
              <div className="absolute top-60 right-10 text-3xl text-white/10">β</div>
              <div className="absolute bottom-60 left-1/3 text-5xl text-white/15">γ</div>
              <div className="absolute top-80 left-2/3 text-4xl text-white/10">δ</div>
              <div className="absolute bottom-10 right-1/3 text-6xl text-white/15">∞</div>
              <div className="absolute top-32 left-2/3 text-3xl text-white/10">θ</div>
              <div className="absolute bottom-32 left-10 text-5xl text-white/15">Σ</div>
              <div className="absolute top-16 right-1/3 text-4xl text-white/10">∆</div>
              {/* Additional mathematical symbols */}
              <div className="absolute top-96 left-16 text-4xl text-white/10">∂</div>
              <div className="absolute top-72 right-32 text-3xl text-white/15">λ</div>
              <div className="absolute bottom-80 left-2/3 text-5xl text-white/10">φ</div>
              <div className="absolute top-48 left-12 text-4xl text-white/15">f(x)</div>
              <div className="absolute bottom-48 right-16 text-3xl text-white/10">x²</div>
              <div className="absolute top-24 left-1/2 text-4xl text-white/10">±</div>
              <div className="absolute bottom-24 left-1/2 text-5xl text-white/15">≤</div>
              <div className="absolute top-88 right-1/4 text-3xl text-white/10">≥</div>
            </div>
            <div className="relative z-10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center">
                  <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                    AI Tutor & 100+ Calculators
                    <span className="block text-3xl md:text-5xl font-bold text-blue-100 mt-4">
                      Numera Educational Platform
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-blue-50 mb-12 max-w-4xl mx-auto leading-relaxed font-medium" style={{ lineHeight: '1.5' }}>
                    Get <strong>100+ calculators</strong> across 13 categories and AI-powered tutoring for students
                  </p>
                  
                  {/* Key Features */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 text-center transition-all duration-300 transform hover:-translate-y-3 hover:scale-105" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)' }}>
                      <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="text-4xl font-black text-blue-600 mb-3">100+</div>
                      <div className="text-gray-700 font-semibold text-lg">Professional Calculators</div>
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 text-center transition-all duration-300 transform hover:-translate-y-3 hover:scale-105" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)' }}>
                      <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div className="text-4xl font-black text-green-600 mb-3">13</div>
                      <div className="text-gray-700 font-semibold text-lg">Academic Categories</div>
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 text-center transition-all duration-300 transform hover:-translate-y-3 hover:scale-105" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)' }}>
                      <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                      </div>
                      <div className="text-4xl font-black text-purple-600 mb-3">AI</div>
                      <div className="text-gray-700 font-semibold text-lg">Powered Chat</div>
                    </div>
                  </div>
                  
                  {/* Trust Building Stats */}
                  <div className="text-center mb-12">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-8 py-4 inline-block border border-white/30">
                      <span className="text-white text-lg font-bold flex items-center">
                        <span className="mr-2">✨</span>
                        Trusted by 1,000 students
                      </span>
                    </div>
                  </div>
                  
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <button 
                      onClick={() => document.getElementById('calculators')?.scrollIntoView({ behavior: 'smooth' })}
                      className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-3 hover:scale-105"
                    >
                      Explore 100+ Calculators
                    </button>
                    <button 
                      onClick={() => {
                        const event = new CustomEvent('openAITutor');
                        window.dispatchEvent(event);
                      }}
                      className="bg-white/10 backdrop-blur-sm border-3 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-3 hover:scale-105 flex items-center space-x-4"
                    >
                      <span>🤖</span>
                      <span>Try AI Tutor</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Features Section */}
          <div className="bg-white dark:bg-gray-800 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
                  Everything You Need for Academic Success
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-medium">
                  From basic arithmetic to advanced calculus, Numera's comprehensive suite of tools 
                  supports students, educators, and professionals at every level.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Feature 1 */}
                <div className="text-center">
                  <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Advanced Calculations</h3>
                  <p className="text-gray-600 dark:text-gray-300">Instant results with step-by-step explanations for complex mathematical operations.</p>
                </div>
                
                {/* Feature 2 */}
                <div className="text-center">
                  <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">AI-Powered Learning</h3>
                  <p className="text-gray-600 dark:text-gray-300">Get personalized explanations and guidance from our intelligent tutoring system.</p>
                </div>
                
                {/* Feature 3 */}
                <div className="text-center">
                  <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Personalized Experience</h3>
                  <p className="text-gray-600 dark:text-gray-300">Save favorites, track history, and customize your learning experience.</p>
                </div>
                
                {/* Feature 4 */}
                <div className="text-center">
                  <div className="bg-orange-100 dark:bg-orange-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Lightning Fast</h3>
                  <p className="text-gray-600 dark:text-gray-300">Optimized algorithms deliver instant results with precision and reliability.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Categories Preview */}
          <div className="bg-gray-50 dark:bg-gray-800 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
                  13 Comprehensive Categories
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-medium">
                  From basic mathematics to advanced engineering, Numera has all your calculation needs covered with 100+ professional tools.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {[
                  { name: 'Mathematics', count: 37, color: 'bg-blue-600', icon: '📐' },
                  { name: 'Physics', count: 53, color: 'bg-purple-600', icon: '⚛️' },
                  { name: 'Chemistry', count: 71, color: 'bg-green-600', icon: '🧪' },
                  { name: 'Algebra', count: 15, color: 'bg-red-600', icon: '📊' },
                  { name: 'Geometry', count: 74, color: 'bg-yellow-600', icon: '📏' },
                  { name: 'Trigonometry', count: 57, color: 'bg-pink-600', icon: '📐' },
                  { name: 'Calculus', count: 68, color: 'bg-indigo-600', icon: '∫' },
                  { name: 'Statistics', count: 52, color: 'bg-teal-600', icon: '📈' },
                  { name: 'Finance', count: 80, color: 'bg-emerald-600', icon: '💰' },
                  { name: 'Conversion', count: 8, color: 'bg-orange-600', icon: '🔄' },
                  { name: 'Engineering', count: 5, color: 'bg-gray-600', icon: '⚙️' },
                  { name: 'Computer Science', count: 4, color: 'bg-cyan-600', icon: '💻' },
                  { name: 'Health/Fitness', count: 4, color: 'bg-rose-600', icon: '🏃' }
                ].map((category) => (
                  <div 
                    key={category.name} 
                    className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-2"
                    onClick={() => handleCategoryClick(category.name)}
                  >
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1">
                      {category.name}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                      {category.count} tools
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
            
            {/* Calculator Grid Section */}
            <div id="calculators" className="bg-white dark:bg-gray-900">
              <CalculatorGrid />
            </div>
            
            {/* Footer */}
            <footer className="bg-gray-900 dark:bg-black text-white py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <div className="bg-blue-600 p-2 rounded-lg">
                      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Numera</h3>
                  </div>
                  
                  {/* Mobile: Single column layout below 768px */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    <div>
                      <h4 className="font-bold mb-4 text-white">Platform Features</h4>
                      <ul className="space-y-3">
                        <li>
                          <a href="#calculators" className="flex items-center text-gray-400 hover:text-blue-300 transition-colors duration-300 ease-in-out" aria-label="View 100+ Professional Calculators">
                            <svg className="w-4 h-4 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            100+ Professional Calculators
                          </a>
                        </li>
                        <li>
                          <a href="#ai-tutor" className="flex items-center text-gray-400 hover:text-blue-300 transition-colors duration-300 ease-in-out" aria-label="Learn more about AI-Powered Math Tutor">
                            <svg className="w-4 h-4 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                            AI-Powered Math Tutor
                          </a>
                        </li>
                        <li>
                          <a href="#solutions" className="flex items-center text-gray-400 hover:text-blue-300 transition-colors duration-300 ease-in-out" aria-label="View Step-by-Step Solutions">
                            <svg className="w-4 h-4 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            Step-by-Step Solutions
                          </a>
                        </li>
                        <li>
                          <a href="#dark-mode" className="flex items-center text-gray-400 hover:text-blue-300 transition-colors duration-300 ease-in-out" aria-label="Learn about Dark Mode Support">
                            <svg className="w-4 h-4 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                            Dark Mode Support
                          </a>
                        </li>
                        <li>
                          <a href="#favorites" className="flex items-center text-gray-400 hover:text-blue-300 transition-colors duration-300 ease-in-out" aria-label="Learn about Favorites & Search">
                            <svg className="w-4 h-4 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            Favorites & Search
                          </a>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold mb-4 text-white">Academic Categories</h4>
                      <ul className="space-y-3">
                        <li>
                          <a href="#mathematics" className="flex items-center text-gray-400 hover:text-blue-300 transition-colors duration-300 ease-in-out" aria-label="View Mathematics & Physics calculators">
                            <svg className="w-4 h-4 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            Mathematics & Physics
                          </a>
                        </li>
                        <li>
                          <a href="#chemistry" className="flex items-center text-gray-400 hover:text-blue-300 transition-colors duration-300 ease-in-out" aria-label="View Chemistry & Biology calculators">
                            <svg className="w-4 h-4 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                            Chemistry & Biology
                          </a>
                        </li>
                        <li>
                          <a href="#engineering" className="flex items-center text-gray-400 hover:text-blue-300 transition-colors duration-300 ease-in-out" aria-label="View Engineering & Computer Science calculators">
                            <svg className="w-4 h-4 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Engineering & CS
                          </a>
                        </li>
                        <li>
                          <a href="#finance" className="flex items-center text-gray-400 hover:text-blue-300 transition-colors duration-300 ease-in-out" aria-label="View Finance & Statistics calculators">
                            <svg className="w-4 h-4 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                            </svg>
                            Finance & Statistics
                          </a>
                        </li>
                        <li>
                          <a href="#health" className="flex items-center text-gray-400 hover:text-blue-300 transition-colors duration-300 ease-in-out" aria-label="View Health & Fitness calculators">
                            <svg className="w-4 h-4 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            Health & Fitness
                          </a>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold mb-4 text-white">For Students & Educators</h4>
                      <ul className="space-y-3">
                        <li>
                          <a href="#homework" className="flex items-center text-gray-400 hover:text-blue-300 transition-colors duration-300 ease-in-out" aria-label="Get homework assistance">
                            <svg className="w-4 h-4 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Homework Assistance
                          </a>
                        </li>
                        <li>
                          <a href="#concepts" className="flex items-center text-gray-400 hover:text-blue-300 transition-colors duration-300 ease-in-out" aria-label="Learn concepts with our tools">
                            <svg className="w-4 h-4 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                            Concept Learning
                          </a>
                        </li>
                        <li>
                          <a href="#exams" className="flex items-center text-gray-400 hover:text-blue-300 transition-colors duration-300 ease-in-out" aria-label="Prepare for exams">
                            <svg className="w-4 h-4 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Exam Preparation
                          </a>
                        </li>
                        <li>
                          <a href="#research" className="flex items-center text-gray-400 hover:text-blue-300 transition-colors duration-300 ease-in-out" aria-label="Get research support">
                            <svg className="w-4 h-4 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            Research Support
                          </a>
                        </li>
                        <li>
                          <a href="#development" className="flex items-center text-gray-400 hover:text-blue-300 transition-colors duration-300 ease-in-out" aria-label="Professional development resources">
                            <svg className="w-4 h-4 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Professional Development
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                      <p className="text-gray-400 text-sm text-center md:text-left">
                        © 2025 Numera Educational Platform. Designed for academic excellence. Built with precision.
                      </p>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs bg-gray-800 px-3 py-1 rounded-full border border-gray-700">
                          <span className="text-gray-400">Powered by </span>
                          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                            MiniMax Agent
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </main>
        </div>
        
        {/* AI Tutor Chat */}
        <AITutorChat />
      </div>
    );
}

function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}

export default App;