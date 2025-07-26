import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, Star, Zap, Coffee, X } from 'lucide-react';
import Navigation from '../components/Navigation';

const Events: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  
  const upcomingEvents = [
    {
      id: 1,
      title: "Club Orientation Program",
      date: "July 25, 2025",
      time: "4:45 PM",
      location: "Language lab",
      participants: "Open",
      description: "Join us for the official orientation of Code Caffeine. Learn about our vision, upcoming activities, and how you can be part of this amazing tech community.",
      image: "https://images.pexels.com/photos/2740956/pexels-photo-2740956.jpeg",
      featured: true
    }
  ];

  const pastEvents: { title: string; date: string; participants: string; description: string; }[] = [];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <Navigation />
      
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-8">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <Calendar className="h-20 w-20 text-purple-400" />
                <div className="absolute inset-0 bg-purple-400 blur-xl opacity-30" />
              </motion.div>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              EVENTS &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                EXPERIENCES
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              From mind-bending hackathons to chill coffee chats with industry legends. 
              Every event is designed to push boundaries and create unforgettable moments.
            </p>
          </motion.div>

          {/* Upcoming Events */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-black text-white mb-12 flex items-center">
              <Zap className="h-10 w-10 text-yellow-400 mr-4" />
              WHAT'S COMING UP
            </h2>
            
            <div className="space-y-8">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 ${
                    event.featured ? 'ring-2 ring-purple-500/50 shadow-2xl shadow-purple-500/20' : ''
                  }`}
                >
                  <div className="lg:flex">
                    <div className="lg:w-2/5 relative overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      {event.featured && (
                        <div className="absolute top-4 left-4">
                          <div className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold rounded-full flex items-center space-x-2">
                            <Star className="h-4 w-4" />
                            <span>FEATURED</span>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="lg:w-3/5 p-8">
                      <h3 className="text-3xl font-black text-white mb-4 group-hover:text-purple-400 transition-colors">
                        {event.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-6 text-lg leading-relaxed">{event.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center text-gray-400 space-x-3">
                          <Calendar className="h-5 w-5 text-purple-400" />
                          {event.date}
                        </div>
                        <div className="flex items-center text-gray-400 space-x-3">
                          <Clock className="h-5 w-5 text-purple-400" />
                          {event.time}
                        </div>
                        <div className="flex items-center text-gray-400 space-x-3">
                          <MapPin className="h-5 w-5 text-purple-400" />
                          {event.location}
                        </div>
                        <div className="flex items-center text-gray-400 space-x-3">
                          <Users className="h-5 w-5 text-purple-400" />
                          {event.participants} participants expected
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Past Events */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-black text-white mb-12 flex items-center">
              <Coffee className="h-10 w-10 text-orange-400 mr-4" />
              LEGENDARY MOMENTS
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl">
              Stay tuned for our upcoming Tech Talk on AI next week! Our journey of creating legendary moments is about to begin.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="group relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500"
                >
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{event.description}</p>
                  <div className="flex justify-between items-center text-gray-400">
                    <span className="font-semibold">{event.date}</span>
                    <span className="text-orange-400 font-bold">{event.participants} attended</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <div className="relative p-12 rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  Got an Epic
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    Event Idea?
                  </span>
                </h2>
                <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                  Whether it's a workshop, hackathon, or something completely wild - 
                  we're here to make it legendary. Let's create something unforgettable together.
                </p>
                <motion.button
                  onClick={() => setShowPopup(true)}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 0 40px rgba(147, 51, 234, 0.4)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white rounded-2xl font-black text-xl hover:from-purple-700 hover:to-orange-700 transition-all duration-300"
                >
                  Propose Your Event
                </motion.button>
              </div>
            </div>
          </motion.section>

          {/* Popup */}
          <AnimatePresence>
            {showPopup && (
              <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                  onClick={() => setShowPopup(false)}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  className="relative w-full max-w-sm mx-auto"
                >
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl border border-purple-500/30 shadow-2xl backdrop-blur-md">
                    <button
                      onClick={() => setShowPopup(false)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                    >
                      <X className="h-6 w-6" />
                    </button>
                    <div className="text-center py-4">
                      <motion.h3 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4"
                      >
                        Coming Soon!
                      </motion.h3>
                      <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-300 text-lg leading-relaxed"
                      >
                        Event proposal feature will be live within a few days. Stay tuned for updates!
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-6"
                      >
                        <button
                          onClick={() => setShowPopup(false)}
                          className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all"
                        >
                          Got it!
                        </button>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Events;