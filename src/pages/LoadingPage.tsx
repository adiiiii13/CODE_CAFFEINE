import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleDigIn = () => {
    navigate('/home');
  };

  useEffect(() => {
    // Only prevent default touch behaviors on the 3D scene
    const splineContainer = document.querySelector('.spline-container');
    const preventDefaultTouch = (e: TouchEvent) => {
      if (e.target && (e.target as Element).closest('.spline-container')) {
        e.preventDefault();
      }
    };

    document.addEventListener('touchmove', preventDefaultTouch, { passive: false });
    document.addEventListener('touchstart', preventDefaultTouch, { passive: false });

    return () => {
      document.removeEventListener('touchmove', preventDefaultTouch);
      document.removeEventListener('touchstart', preventDefaultTouch);
    };
  }, []);

  return (
    <div className="w-full h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-black">
      <div 
        className="w-full h-full spline-container" 
        style={{ 
          touchAction: 'none',
          WebkitTouchCallout: 'none',
          WebkitUserSelect: 'none',
          userSelect: 'none'
        }}
      >
        <Spline
          scene="https://prod.spline.design/kmOqcbxOtPeb37kG/scene.splinecode"
          className="w-full h-full opacity-80"
          style={{ touchAction: 'none' }}
        />
      </div>

      {/* Bottom Overlay with Quote and GMIT */}
      <div className="absolute bottom-0 left-0 right-0 z-50 overflow-hidden">
        <div className="relative">
          {/* Background layers */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-transparent h-32 md:h-32 h-40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 mix-blend-overlay"></div>
          
          {/* Content container */}
          <div className="relative flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-3 md:py-4 space-y-3 md:space-y-0">
            {/* Coding quote */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex-1 md:mr-8 text-center md:text-left"
            >
              <p className="text-xs md:text-sm text-gray-400 font-mono leading-relaxed">
                <span className="text-cyan-400">&gt;</span> Where creativity meets code, 
                <span className="text-purple-400"> innovation</span> takes flight.
              </p>
              <p className="text-[10px] md:text-xs text-gray-500 mt-1 font-mono">
                ~ Code Caffeine Club
              </p>
            </motion.div>

            {/* GMIT Logo */}
            <motion.div 
              className="select-none group w-full md:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-black rounded-xl blur-md"></div>
                <div className="absolute -inset-3 bg-gradient-to-br from-black via-purple-900/50 to-black rounded-lg"></div>
                <div className="absolute inset-0 bg-black/90 rounded-lg backdrop-blur-lg"></div>
                
                {/* GMIT Text layers */}
                <div className="relative px-4 py-2 flex flex-col items-center md:items-end">
                  <div className="text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                    GMIT
                  </div>
                  <div className="text-[10px] md:text-xs text-gray-500 font-mono mt-1">
                    innovate • create • code
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Spline watermark styling */}
      <style dangerouslySetInnerHTML={{ __html: `
        .spline-watermark {
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(139, 92, 246, 0.15), rgba(236, 72, 153, 0.15)) !important;
          backdrop-filter: blur(8px) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          border-radius: 8px !important;
          padding: 4px 8px !important;
          color: rgba(255, 255, 255, 0.4) !important;
          font-family: monospace !important;
          mix-blend-mode: overlay !important;
          opacity: 0.6 !important;
          transform: scale(0.8) !important;
          transition: all 0.3s ease !important;
        }
        .spline-watermark:hover {
          opacity: 0.4 !important;
          transform: scale(0.75) !important;
        }
      `}} />
      
      {/* Glitch overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-purple-900/20 pointer-events-none" />
      
      {/* Main content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center relative mb-12"
        >
          {/* Glitch effect background */}
          <div className="absolute inset-0 text-4xl md:text-7xl font-black text-cyan-400 opacity-20 blur-sm transform translate-x-1 translate-y-1">
            CODE CAFFEINE
          </div>
          <div className="absolute inset-0 text-4xl md:text-7xl font-black text-pink-400 opacity-20 blur-sm transform -translate-x-1 -translate-y-1">
            CODE CAFFEINE
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 relative z-10 tracking-tight">
            CODE
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
              CAFFEINE
            </span>
          </h1>
          
          <motion.div
            animate={{ 
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex items-center justify-center space-x-2"
          >
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
            <p className="text-lg text-gray-300 font-mono">
              ready_to_explore.exe
            </p>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-ping delay-75" />
          </motion.div>
        </motion.div>
        
        {/* Dig in button */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 30px rgba(6, 182, 212, 0.4)",
            y: -5
          }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDigIn}
          className="pointer-events-auto group relative px-12 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white rounded-2xl font-black text-xl overflow-hidden border-2 border-transparent hover:border-cyan-400/50 transition-all duration-300"
        >
          <span className="relative z-10 flex items-center space-x-3">
            <span>DIG IN</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-2xl"
            >
              →
            </motion.div>
          </span>
          
          {/* Animated background */}
          <motion.div
            animate={{ 
              background: [
                "linear-gradient(45deg, #06b6d4, #8b5cf6, #ec4899)",
                "linear-gradient(45deg, #ec4899, #06b6d4, #8b5cf6)",
                "linear-gradient(45deg, #8b5cf6, #ec4899, #06b6d4)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 opacity-80"
          />
          
          {/* Glitch effect on hover */}
          <div className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-200" />
        </motion.button>
      </div>
    </div>
  );
};

export default LoadingPage;