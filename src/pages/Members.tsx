import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Github, Linkedin, Mail, Crown, Star, Heart } from 'lucide-react';
import Navigation from '../components/Navigation';

const Members: React.FC = () => {
  const leadership = [
    {
      name: "Aditya Routh",
      role: "President",
      major: "Computer Science",
      bio: "Passionate about AI and machine learning. Leading Court Caffeine towards innovative tech solutions.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      github: "alexchen",
      linkedin: "alex-chen-dev",
      email: "alex@courtcaffeine.tech"
    },
    {
      name: "Payel Dey",
      role: "Vice President",
      major: "Software Engineering",
      bio: "Full-stack developer with expertise in React and Node.js. Organizing workshops and events.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      github: "sarahkumar",
      linkedin: "sarah-kumar-tech",
      email: "sarah@courtcaffeine.tech"
    },
    {
      name: "Lucky Pandey",
      role: "Community Lead & Speaker Coordinator",
      major: "Data Science",
      bio: "Data science enthusiast and competitive programmer. Mentoring members in algorithm design.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      github: "marcusj",
      linkedin: "marcus-johnson-ds",
      email: "marcus@courtcaffeine.tech"
    },
    {
      name: "Anirban Das",
      role: "Technical Lead & Project Lead",
      major: "Information Systems",
      bio: "Expert in project management and event planning. Creating memorable experiences for members.",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg",
      github: "emilyzhang",
      linkedin: "emily-zhang-is",
      email: "emily@courtcaffeine.tech"
    }
  ];

  const achievements = [
    { icon: Award, title: "1st Place", description: "Regional Hackathon 2023" },
    { icon: Star, title: "Best Club", description: "University Tech Awards" },
    { icon: Crown, title: "Innovation Award", description: "Student Leadership Council" },
    { icon: Heart, title: "Community Impact", description: "Tech for Good Initiative" }
  ];

  const stats = [
    { number: "500+", label: "Active Members" },
    { number: "50+", label: "Alumni Network" },
    { number: "25+", label: "Team Leaders" },
    { number: "100%", label: "Fun Factor" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-gray-900">
      <Navigation />
      
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Users className="h-16 w-16 text-green-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Amazing <span className="text-green-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the passionate individuals who make Code Caffeine a thriving 
              community of innovators, creators, and tech enthusiasts.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-gray-800/50 rounded-xl p-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Leadership Team */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Leadership Team
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ y: -5 }}
                  className="bg-gray-800/80 rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300"
                >
                  <div className="text-center mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-green-400 font-medium mb-1">{member.role}</p>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 text-center">
                    {member.bio}
                  </p>
                  
                  <div className="flex justify-center space-x-3">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={`https://github.com/${member.github}`}
                      className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      <Github className="h-4 w-4 text-gray-300" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={`https://linkedin.com/in/${member.linkedin}`}
                      className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      <Linkedin className="h-4 w-4 text-gray-300" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={`mailto:${member.email}`}
                      className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      <Mail className="h-4 w-4 text-gray-300" />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Achievements */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Our Achievements
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.7 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-green-900/30 to-gray-800/30 p-6 rounded-xl border border-green-500/30 text-center"
                  >
                    <Icon className="h-12 w-12 text-green-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {achievement.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Join Team CTA */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center bg-gradient-to-r from-green-900/20 to-blue-900/20 p-8 rounded-xl"
          >
            <Users className="h-16 w-16 text-green-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Want to Join Our Team?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're always looking for passionate individuals who want to make a difference 
              in the tech community. Whether you're a beginner or experienced, there's a place for you!
            </p>
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-300"
              >
                Become a Member
              </motion.button>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Members;