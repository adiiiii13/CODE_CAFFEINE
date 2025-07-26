import React from 'react';
import { motion } from 'framer-motion';
import { Code, Wrench } from 'lucide-react';
import Navigation from '../components/Navigation';

export const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <Navigation />

      {/* Coming Soon Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative p-12 rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />
            
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="mx-auto w-24 h-24 mb-8 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl rotate-45" />
              <div className="absolute inset-2 bg-gray-900 rounded-xl rotate-45" />
              <Wrench className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-10 w-10 text-cyan-400" />
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-6xl font-black text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Launching Soon
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-xl text-gray-300 leading-relaxed">
                Get ready to explore our incredible projects! We're putting the finishing 
                touches on some amazing innovations that will showcase the talent and 
                creativity of our team members.
              </p>

              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-2 text-cyan-400 font-mono">
                  <Code className="h-5 w-5" />
                  <span>{'<ProjectShowcase status="loading" />'}</span>
                </div>

                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="flex items-center space-x-2 text-purple-400"
                >
                  <span className="w-2 h-2 bg-purple-400 rounded-full animate-ping" />
                  <span className="text-sm">Projects going live soon...</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Bottom gradient line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};
