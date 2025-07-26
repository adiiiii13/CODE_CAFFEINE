import React from 'react';
import { motion } from 'framer-motion';
import { Info, Target, Heart, Lightbulb, Coffee, Code2, Users2, Rocket } from 'lucide-react';
import Navigation from '../components/Navigation';

const About: React.FC = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We foster creativity and encourage thinking outside the box to solve real-world problems."
    },
    {
      icon: Users2,
      title: "Collaboration",
      description: "We believe in the power of teamwork and diverse perspectives to achieve greatness."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We're driven by genuine enthusiasm for technology and its potential to change the world."
    },
    {
      icon: Rocket,
      title: "Growth",
      description: "We're committed to continuous learning and helping each member reach their full potential."
    }
  ];

  const milestones = [
    {
      year: "2021",
      title: "Club Founded",
      description: "Started with 15 passionate students in a small computer lab"
    },
    {
      year: "2022",
      title: "First Hackathon",
      description: "Organized our inaugural HackCaffeine with 100+ participants"
    },
    {
      year: "2023",
      title: "500 Members",
      description: "Reached our milestone of 500+ active members across all majors"
    },
    {
      year: "2024",
      title: "Industry Partners",
      description: "Established partnerships with leading tech companies and startups"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900">
      <Navigation />
      
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Info className="h-16 w-16 text-orange-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-orange-400">Code Caffeine</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn about our journey, mission, and the values that drive us to 
              create an exceptional tech community where innovation meets collaboration.
            </p>
          </motion.div>

          {/* Story Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Code Caffeine was born from a simple idea: what if we could create a space 
                    where technology enthusiasts could come together, share knowledge, and fuel 
                    their passion for innovation with the energy of community collaboration?
                  </p>
                  <p>
                    Founded in 2021 by a group of computer science students, we started as a 
                    small study group meeting in the campus coffee shop. The name "Court Caffeine" 
                    small study group meeting in the campus coffee shop. The name "Code Caffeine" 
                    reflects our belief that great ideas are often sparked over a good cup of 
                    coffee and meaningful conversations.
                  </p>
                  <p>
                    Today, we've grown into one of the largest and most active tech organizations 
                    on campus, with over 500 members from diverse academic backgrounds, all united 
                    by our shared love for technology and learning.
                  </p>
                </div>
              </div>
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative rounded-xl overflow-hidden"
                >
                  <img
                    src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                    alt="Team collaboration"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/50 to-transparent"></div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Mission & Vision */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gray-800/80 p-8 rounded-xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300"
              >
                <Target className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300">
                  To create an inclusive, supportive environment where students can explore 
                  technology, develop their skills, build meaningful projects, and prepare 
                  for successful careers in the tech industry while fostering lifelong 
                  friendships and professional networks.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gray-800/80 p-8 rounded-xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300"
              >
                <Coffee className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300">
                  To be the premier tech community that bridges the gap between academic 
                  learning and industry application, empowering the next generation of 
                  innovators to solve real-world challenges and make a positive impact 
                  on society through technology.
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* Values */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Values</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.7 }}
                    whileHover={{ y: -5 }}
                    className="bg-gray-800/60 p-6 rounded-xl border border-gray-700 hover:border-orange-500/30 transition-all duration-300 text-center"
                  >
                    <Icon className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Timeline */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Journey</h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 to-blue-500 rounded-full"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + 0.9 }}
                    className={`flex items-center ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                      <div className="bg-gray-800/80 p-6 rounded-xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300">
                        <div className="text-2xl font-bold text-orange-400 mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-300">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="relative z-10 w-4 h-4 bg-orange-500 rounded-full border-4 border-gray-900"></div>
                    
                    <div className="w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Contact CTA */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="text-center bg-gradient-to-r from-orange-900/20 to-red-900/20 p-8 rounded-xl"
          >
            <Code2 className="h-16 w-16 text-orange-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Be Part of Our Story?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Whether you're a beginner or an experienced developer, there's a place for you 
              in our community. Join us and help write the next chapter of Code Caffeine!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300"
              >
                Join Code Caffeine
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-orange-500 text-orange-400 rounded-lg font-semibold hover:bg-orange-500/10 transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default About;