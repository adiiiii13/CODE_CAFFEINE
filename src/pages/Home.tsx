import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Code, Users, Calendar, Trophy, ArrowRight, Zap, Globe, Cpu, Coffee, Terminal, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';

const Home: React.FC = () => {
  const navigate = useNavigate();
  
  const features = [
    {
      icon: Code,
      title: "Coding Excellence",
      description: "Learn cutting-edge technologies and build amazing projects"
    },
    {
      icon: Users,
      title: "Collaborative Community",
      description: "Connect with like-minded tech enthusiasts and grow together"
    },
    {
      icon: Trophy,
      title: "Competitions",
      description: "Participate in hackathons and coding competitions"
    },
    {
      icon: Globe,
      title: "Industry Connect",
      description: "Network with industry professionals and startups"
    }
  ];

  const stats = [
    { number: "5+", label: "Active Members" },
    { number: "0+", label: "Projects Built" },
    { number: "1", label: "Events Hosted" },
    { number: "0", label: "Years Running" }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center space-x-2 text-cyan-400 font-mono text-sm"
                >
                  <Terminal className="h-4 w-4" />
                  <span>$ welcome_to_Code_caffeine.sh</span>
                </motion.div>
                
                <h1 className="text-6xl md:text-8xl font-black text-white leading-none">
                  <span className="block">CODE</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                    CAFFEINE
                  </span>
                </h1>
                
                <div className="flex items-center space-x-3 text-gray-400">
                  <div className="w-12 h-px bg-gradient-to-r from-cyan-400 to-transparent" />
                  <span className="font-mono text-sm">where_code_meets_coffee</span>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                We're not your typical tech club. We're a collective of caffeine-fueled 
                innovators, late-night coders, and dream builders who believe the best 
                ideas happen when brilliant minds collide.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  onClick={() => navigate('/events')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{ backgroundSize: "200% 200%" }}
                  />
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "radial-gradient(circle at center, rgba(6,182,212,0.3) 0%, transparent 70%)",
                    }}
                  />
                  <motion.span 
                    className="relative z-10 text-white flex items-center space-x-2"
                    whileHover={{ letterSpacing: "0.05em" }}
                    transition={{ duration: 0.3 }}
                  >
                    <span>Start the Journey</span>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 300,
                        damping: 15
                      }}
                    >
                      <ArrowRight className="h-5 w-5 text-white" />
                    </motion.div>
                  </motion.span>
                </motion.button>
                
                <motion.button
                  onClick={() => navigate('/projects')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 rounded-xl font-bold hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-sm"
                >
                  Explore Projects
                </motion.button>
              </motion.div>
            </motion.div>
            
            {/* Right side - Visual element */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-96 flex items-center justify-center">
                {/* Floating elements */}
                <motion.div
                  animate={{ 
                    y: [-10, 10, -10],
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-10 left-10 p-4 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-cyan-500/30"
                >
                  <Code className="h-8 w-8 text-cyan-400" />
                </motion.div>
                
                <motion.div
                  animate={{ 
                    y: [10, -10, 10],
                    rotate: [0, -5, 0, 5, 0]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute top-20 right-10 p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl backdrop-blur-sm border border-purple-500/30"
                >
                  <Coffee className="h-8 w-8 text-purple-400" />
                </motion.div>
                
                <motion.div
                  animate={{ 
                    y: [-5, 15, -5],
                    rotate: [0, 10, 0, -10, 0]
                  }}
                  transition={{ 
                    duration: 7, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                  className="absolute bottom-20 left-20 p-4 bg-gradient-to-br from-pink-500/20 to-cyan-500/20 rounded-2xl backdrop-blur-sm border border-pink-500/30"
                >
                  <Sparkles className="h-8 w-8 text-pink-400" />
                </motion.div>
                
                {/* Central element */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                  }}
                  className="relative"
                >
                  <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20" />
                    <Cpu className="h-16 w-16 text-white relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/50 to-transparent animate-pulse" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.5, type: "spring", bounce: 0.4 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group"
              >
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 group-hover:border-cyan-500/50 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-semibold">{stat.label}</div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              What Makes Us
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Different
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We don't just teach code. We build legends. Every line of code, every late-night 
              debugging session, every breakthrough moment - it all happens here.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 0.8 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500"
                >
                  <div className="relative">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-8 w-8 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="relative p-12 rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
            <div className="relative z-10">
              <Zap className="h-20 w-20 text-yellow-400 mx-auto mb-8" />
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Ready to Join the
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                  Revolution?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Your journey from curious coder to tech innovator starts with a single click. 
                Are you ready to change the world?
              </p>
              <motion.button
                onClick={() => navigate('/events')}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 50px rgba(251, 191, 36, 0.4)" 
                }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-black rounded-2xl font-black text-xl hover:from-yellow-400 hover:to-red-400 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Start Your Journey</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;