import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Info, Target, Heart, Lightbulb, Coffee, Code2, Users2, Rocket, Users, BookOpen, Zap, Star, ArrowRight, Calendar, Trophy, X, Send, MapPin, Phone, Mail, Globe, Facebook, Youtube, Instagram, Linkedin, Github, Slack, MessageCircle, Figma, ExternalLink } from 'lucide-react';
import Navigation from '../components/Navigation';

const About: React.FC = () => {
  const navigate = useNavigate();
  const [showContactForm, setShowContactForm] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formspreeState, formspreeSubmit] = useForm("mdklwjzq");

  useEffect(() => {
    if (formspreeState.succeeded) {
      setShowContactForm(false);
      setShowThankYou(true);
    }
  }, [formspreeState.succeeded]);

  // Refresh 1s after showing Thank You
  useEffect(() => {
    if (!showThankYou) return;
    const timeoutId = setTimeout(() => {
      window.location.reload();
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [showThankYou]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    year: '',
    department: '',
    query: ''
  });

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

  const benefits = [
    {
      icon: Users,
      emoji: "🤝",
      title: "Networking opportunities",
      description: "Connect with like-minded peers, industry professionals, and potential collaborators"
    },
    {
      icon: BookOpen,
      emoji: "🚀",
      title: "Skill-building workshops & challenges",
      description: "Participate in hands-on workshops and coding challenges to enhance your technical skills"
    },
    {
      icon: Zap,
      emoji: "💡",
      title: "Teamwork & collaboration",
      description: "Work on exciting projects with diverse teams and learn from different perspectives"
    },
    {
      icon: Star,
      emoji: "🎉",
      title: "A fun and motivating environment",
      description: "Enjoy a supportive community where learning is fun and every achievement is celebrated"
    }
  ];

  const futureGoals = [
    {
      icon: Users2,
      title: "Expanding the community",
      description: "Growing our membership and reaching more students across different disciplines"
    },
    {
      icon: Calendar,
      title: "Hosting larger coding events & hackathons",
      description: "Organizing bigger and better events that bring together the entire tech community"
    },
    {
      icon: Trophy,
      title: "Building impactful real-world projects",
      description: "Creating solutions that make a real difference in our community and beyond"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const requiredFields: Array<keyof typeof formData> = ['name', 'email', 'year', 'department', 'query'];
    const isFormValid = requiredFields.every((field) => formData[field].trim() !== '');
    if (!isFormValid) {
      alert('Please fill in all required fields');
      return;
    }
    await formspreeSubmit(e);
  };

  const closeContactForm = () => {
    setShowContactForm(false);
    setFormData({
      name: '',
      email: '',
      year: '',
      department: '',
      query: ''
    });
  };

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
                  Code Caffeine was founded in 2025 by Team Recursion during a late-night coding marathon, where endless lines of code met endless cups of coffee. What started as a fun accident while naming the club quickly became an identity—combining our love for coding with the fuel that kept us going.
                  </p>
                  <p>
                  From just a few enthusiasts, we have now grown into a vibrant community of 100+ students who share the same passion for problem-solving, innovation, and learning together. Here, coding never stops, ideas flow freely, and every member enjoys being part of a culture that's energetic, creative, and collaborative.
                  </p>
                  <p>
                    At Code Caffeine, coding is not just a practice—it's a lifestyle, a journey, and above all, a celebration of technology with friends. 🚀💻
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
                To build a passionate community of students who learn, create, and innovate through coding. We aim to provide a space where knowledge is shared freely, challenges are solved together, and every member grows both technically and personally.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gray-800/80 p-8 rounded-xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300"
              >
                <Coffee className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300">
                To become a hub of innovation and creativity where students turn ideas into impactful solutions, making Code Caffeine a recognized symbol of coding excellence, teamwork, and endless possibilities.
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

          {/* Benefits of Joining */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Benefits of Joining</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.9 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-gray-800/60 p-6 rounded-xl border border-gray-700 hover:border-orange-500/30 transition-all duration-300 text-center group"
                  >
                    <div className="flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-orange-400 mr-2" />
                      <span className="text-2xl">{benefit.emoji}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Motivational Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 p-8 rounded-xl border border-orange-500/20">
                <blockquote className="text-2xl md:text-3xl font-bold text-white italic">
                  "At Code Caffeine, you don't just code—you grow."
                </blockquote>
                <div className="mt-4 flex items-center justify-center">
                  <ArrowRight className="h-6 w-6 text-orange-400" />
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* Future Goals */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Future Goals</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-blue-500 rounded-full"></div>
                
                <div className="space-y-8">
                  {futureGoals.map((goal, index) => {
                    const Icon = goal.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 + 1.1 }}
                        className="flex items-start relative"
                      >
                        {/* Icon with background */}
                        <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-gray-800 rounded-full border-4 border-gray-900 flex items-center justify-center">
                          <Icon className="h-8 w-8 text-orange-400" />
                        </div>
                        
                        {/* Content */}
                        <div className="ml-6 flex-1">
                          <motion.div
                            whileHover={{ x: 5 }}
                            className="bg-gray-800/80 p-6 rounded-xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300"
                          >
                            <h3 className="text-xl font-semibold text-white mb-3">
                              {goal.title}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                              {goal.description}
                            </p>
                          </motion.div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
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
              <motion.a
                href="https://codecaffeine-cc.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 inline-block text-center"
              >
                Join Code Caffeine
              </motion.a>
              <motion.button
                onClick={() => setShowContactForm(true)}
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

      {/* Contact Form Popup */}
      <AnimatePresence>
        {showContactForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={closeContactForm}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-md bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-orange-500/30 shadow-2xl backdrop-blur-md"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-700">
                <h2 className="text-2xl font-bold text-white">Contact Us</h2>
                <button
                  onClick={closeContactForm}
                  className="text-gray-400 hover:text-white transition-colors p-1"
                  title="Close contact form"
                  aria-label="Close contact form"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="Enter your email address"
                  />
                  <ValidationError prefix="Email" field="email" errors={formspreeState.errors} />
                </div>

                {/* Year */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Year <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-orange-500 focus:outline-none transition-colors"
                    title="Select your academic year"
                    aria-label="Select your academic year"
                  >
                    <option value="">Select your year</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                  </select>
                </div>

                {/* Department */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Department <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-orange-500 focus:outline-none transition-colors"
                    title="Select your department"
                    aria-label="Select your department"
                  >
                    <option value="">Select your department</option>
                    <option value="CSE">Computer Science Engineering</option>
                    <option value="CSBS">Computer Science & Business Systems</option>
                    <option value="ECE">Electronics & Communication Engineering</option>
                    <option value="EE">Electrical Engineering</option>
                    <option value="ME">Mechanical Engineering</option>
                  </select>
                </div>

                {/* Query */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Query <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="query"
                    value={formData.query}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                  {/* Hidden field to map local 'query' state to Formspree 'message' */}
                  <input type="hidden" name="message" value={formData.query} />
                  <ValidationError prefix="Message" field="message" errors={formspreeState.errors} />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={formspreeState.submitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>{formspreeState.submitting ? 'Sending...' : 'Send Message'}</span>
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Thank You Popup */}
      <AnimatePresence>
        {showThankYou && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-orange-500/30 shadow-2xl backdrop-blur-md text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
                className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Send className="h-8 w-8 text-white" />
              </motion.div>
              <h2 className="text-3xl font-bold text-white mb-2">Thank You!</h2>
              <p className="text-gray-300">Your message has been sent successfully.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Club Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-2 mb-6">
                <Coffee className="h-8 w-8 text-orange-400" />
                <h3 className="text-2xl font-bold text-white">Code Caffeine</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                A passionate community of students who learn, create, and innovate through coding. 
                Where caffeine meets code and dreams become reality.
              </p>
              
              {/* Social Media Icons */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-3">Follow Us</h4>
                <div className="flex flex-wrap gap-3">
                  <motion.a
                    href="https://www.facebook.com/gmitcollege"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-300 group"
                    title="Facebook"
                  >
                    <Facebook className="h-5 w-5 text-gray-400 group-hover:text-white" />
                  </motion.a>
                  <motion.a
                    href="https://www.youtube.com/@gmitkolkata9593"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-gray-800 rounded-lg hover:bg-red-600 transition-colors duration-300 group"
                    title="YouTube"
                  >
                    <Youtube className="h-5 w-5 text-gray-400 group-hover:text-white" />
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/gmitkolkata/"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-gray-800 rounded-lg hover:bg-pink-600 transition-colors duration-300 group"
                    title="Instagram"
                  >
                    <Instagram className="h-5 w-5 text-gray-400 group-hover:text-white" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/company/gargi-memorial-institute-of-technology-gmit/"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-gray-800 rounded-lg hover:bg-blue-700 transition-colors duration-300 group"
                    title="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-white" />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Tech Platforms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <h4 className="text-lg font-semibold text-white mb-6">Our Platforms</h4>
              <div className="space-y-4">
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 group"
                >
                  <Github className="h-6 w-6 text-gray-400 group-hover:text-white" />
                  <span className="text-gray-300 group-hover:text-white">GitHub</span>
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 group"
                >
                  <Slack className="h-6 w-6 text-gray-400 group-hover:text-white" />
                  <span className="text-gray-300 group-hover:text-white">Slack</span>
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 group"
                >
                  <MessageCircle className="h-6 w-6 text-gray-400 group-hover:text-white" />
                  <span className="text-gray-300 group-hover:text-white">Discord</span>
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 group"
                >
                  <Figma className="h-6 w-6 text-gray-400 group-hover:text-white" />
                  <span className="text-gray-300 group-hover:text-white">Figma</span>
                </motion.a>
              </div>
            </motion.div>

            {/* College Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-1"
            >
              <h4 className="text-lg font-semibold text-white mb-6">College Info</h4>
              <div className="space-y-4">
                <motion.a
                  href="https://gmitkolkata.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 group"
                >
                  <Globe className="h-5 w-5 text-orange-400" />
                  <span className="text-gray-300 group-hover:text-white">GMIT Kolkata</span>
                  <ExternalLink className="h-4 w-4 text-gray-500" />
                </motion.a>
                <div className="flex items-start space-x-3 p-3">
                  <MapPin className="h-5 w-5 text-orange-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-300 text-sm leading-relaxed">
                    Baruipur, Mouza Beralia,<br />
                    Balarampur, Beralia,<br />
                    West Bengal 743610
                  </div>
                </div>
                <motion.a
                  href="tel:+918336942309"
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 group"
                >
                  <Phone className="h-5 w-5 text-orange-400" />
                  <span className="text-gray-300 group-hover:text-white">+91-83369 42309</span>
                </motion.a>
                <motion.a
                  href="mailto:marketing_gmit@jisgroup.org"
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 group"
                >
                  <Mail className="h-5 w-5 text-orange-400" />
                  <span className="text-gray-300 group-hover:text-white text-sm">marketing_gmit@jisgroup.org</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Google Maps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-1"
            >
              <h4 className="text-lg font-semibold text-white mb-6">Find Us</h4>
              <div className="relative rounded-lg overflow-hidden border border-gray-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.3533351304!2d88.4409415!3d22.378033499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a026d0097533aed%3A0xe18407a46f2e97f6!2sGargi%20Memorial%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1756847661788!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  className="rounded-lg border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps location of Gargi Memorial Institute of Technology"
                  aria-label="Interactive map showing the location of Gargi Memorial Institute of Technology in Baruipur, West Bengal"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 pt-8 border-t border-gray-700"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2025 Code Caffeine. All rights reserved. | Powered by caffeine and code ☕️
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <motion.button
                  onClick={() => navigate('/privacy')}
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-400 hover:text-orange-400 transition-colors cursor-pointer"
                >
                  Privacy Policy
                </motion.button>
                <motion.button
                  onClick={() => navigate('/terms')}
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-400 hover:text-orange-400 transition-colors cursor-pointer"
                >
                  Terms of Service
                </motion.button>
                <motion.button
                  onClick={() => setShowContactForm(true)}
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-400 hover:text-orange-400 transition-colors cursor-pointer"
                >
                  Contact
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default About;