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
      image: "/src/Images/Aditya.jpg",
      github: "https://github.com/adiiiii13",
      linkedin: "https://www.linkedin.com/in/aditya-routh-231716214/",
      email: "aditya72slg@gmail.com"
    },
    {
      name: "Payel Dey",
      role: "Vice President",
      major: "Software Engineering",
      bio: "Full-stack developer with expertise in React and Node.js. Organizing workshops and events.",
      image: "/src/Images/Payel.jpg",
      github: "https://github.com/PayelDey13",
      linkedin: "https://www.linkedin.com/in/payel-dey/",
      email: "deypayel933.com@gmail.com"
    },
    {
      name: "Lucky Pandey",
      role: "Community Lead & Speaker Coordinator",
      major: "Data Science",
      bio: "Data science enthusiast and competitive programmer. Mentoring members in algorithm design.",
      image: "/src/Images/Lucky.jpg",
      github: "https://github.com/luckypandey6291",
      linkedin: "https://www.linkedin.com/in/lucky-pandey-0265a2339/",
      email: "pandeylucky7500@gmail.com"
    },
    {
      name: "Anirban Das",
      role: "Technical Lead & Project Lead",
      major: "Information Systems",
      bio: "Expert in project management and event planning. Creating memorable experiences for members.",
      image: "/src/Images/Anirban.jpg",
      github: "https://github.com/Helix-1716",
      linkedin: "https://www.linkedin.com/in/anirban-das-261253322/",
      email: "anirbandas6778788@gmail.com"
    }
  ];

  const achievements = [
    { icon: Award, title: "1st Club", description: "Coding Club of GMIT" },
    { icon: Star, title: "Best Club", description: "College Tech Club" },
    { icon: Crown, title: "Innovation Projects", description: "Best Projects Done By GMITians" },
    { icon: Heart, title: "Community Impact", description: "Tech for Coding Culture Initiative" }
  ];

  const stats = [
    { number: "30+", label: "Active Members" },
    { number: "50+", label: "Alumni Network" },
    { number: "5+", label: "Team Leaders" },
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

          {/* Mentor Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Our Mentor
            </h2>
            
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative bg-gradient-to-br from-green-900/40 to-gray-800/60 rounded-2xl p-8 border border-green-500/30 max-w-2xl w-full"
              >
                {/* Glow effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl blur-xl opacity-50" />
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-2xl blur-2xl opacity-30" />
                
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                  <div className="relative">
                    <img
                      src="/src/Images/Biplab.png"
                      alt="Dr. Biplab Kanti Das"
                      className="w-32 h-32 rounded-full object-cover border-4 border-green-400/50 shadow-2xl"
                    />
                    {/* Profile picture glow */}
                    <div className="absolute inset-0 w-32 h-32 rounded-full bg-green-400/20 blur-xl" />
                  </div>
                  
                  <div className="text-center md:text-left flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Dr. Biplab Kanti Das
                    </h3>
                    <p className="text-green-400 font-semibold text-lg mb-3">
                      Our Mentor & Technical Advisor
                    </p>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      With over 25+ years of experience in the technical field, Dr. Biplab Kanti Das 
                      has been an invaluable mentor to our club. His expertise and guidance have 
                      shaped countless careers and helped us achieve remarkable milestones in 
                      technology and innovation.
                    </p>
                    <div className="flex items-center justify-center md:justify-start space-x-4">
                      <div className="flex items-center space-x-2 text-green-400">
                        <Award className="h-5 w-5" />
                        <span className="text-sm font-medium">25+ Years Experience</span>
                      </div>
                      <div className="flex items-center space-x-2 text-green-400">
                        <Star className="h-5 w-5" />
                        <span className="text-sm font-medium">Technical Expert</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
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
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      <Github className="h-4 w-4 text-gray-300" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
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
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href="https://codecaffeine-cc.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-300 text-center"
              >
                Become a Member
              </motion.a>
              <motion.a
                href="https://codecaffeine-cc.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 text-center"
              >
                Join Code Caffeine
              </motion.a>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Members;