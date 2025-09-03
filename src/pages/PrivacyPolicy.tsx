import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowLeft, Calendar, Eye, Lock, Database, Mail, Users, AlertCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();

  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        "Personal information you provide when joining the club (name, email, year, department)",
        "Contact information submitted through our contact forms",
        "Participation data in club events and activities",
        "Technical information such as IP address and browser type (for website analytics)",
        "Photos and videos taken during club events (with consent)"
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "To communicate with you about club activities and events",
        "To send newsletters and updates about Code Caffeine",
        "To organize and manage club events and competitions",
        "To improve our website and services",
        "To maintain records of club membership and participation"
      ]
    },
    {
      icon: Lock,
      title: "Information Protection",
      content: [
        "We implement appropriate security measures to protect your personal information",
        "Your data is stored securely and access is limited to authorized club members",
        "We do not sell, trade, or rent your personal information to third parties",
        "All data transmission is encrypted using industry-standard protocols",
        "Regular security audits are conducted to ensure data protection"
      ]
    },
    {
      icon: Users,
      title: "Information Sharing",
      content: [
        "We may share your information with college administration for official purposes",
        "Event photos may be shared on our social media platforms (with consent)",
        "We may share anonymized data for research and improvement purposes",
        "Information may be disclosed if required by law or to protect our rights",
        "We never share personal information with external companies for marketing"
      ]
    },
    {
      icon: Mail,
      title: "Your Rights",
      content: [
        "You have the right to access your personal information we hold",
        "You can request correction of any inaccurate information",
        "You may request deletion of your personal information",
        "You can opt-out of communications at any time",
        "You have the right to withdraw consent for data processing"
      ]
    },
    {
      icon: AlertCircle,
      title: "Cookies and Tracking",
      content: [
        "Our website uses cookies to improve user experience",
        "We use analytics tools to understand website usage patterns",
        "You can disable cookies in your browser settings",
        "Third-party services (like Google Maps) may use their own cookies",
        "We do not use cookies for advertising or tracking across other websites"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900">
      <Navigation />
      
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center space-x-4 mb-6">
              <motion.button
                onClick={() => navigate(-1)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                title="Go back"
              >
                <ArrowLeft className="h-6 w-6 text-orange-400" />
              </motion.button>
              <Shield className="h-12 w-12 text-orange-400" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Privacy Policy
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl">
              Your privacy is important to us. This policy explains how Code Caffeine collects, 
              uses, and protects your personal information.
            </p>
          </motion.div>

          {/* Last Updated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12 p-6 bg-gray-800/50 rounded-xl border border-orange-500/30"
          >
            <div className="flex items-center space-x-3">
              <Calendar className="h-6 w-6 text-orange-400" />
              <div>
                <h3 className="text-lg font-semibold text-white">Last Updated</h3>
                <p className="text-gray-300">September 2025</p>
              </div>
            </div>
          </motion.div>

          {/* Privacy Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="bg-gray-800/60 p-8 rounded-xl border border-gray-700 hover:border-orange-500/30 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl">
                      <Icon className="h-8 w-8 text-orange-400" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">
                        {section.title}
                      </h2>
                      <ul className="space-y-3">
                        {section.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-300 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-12 p-8 bg-gradient-to-r from-orange-900/30 to-red-900/30 rounded-xl border border-orange-500/20"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Questions About Your Privacy?</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about this Privacy Policy or how we handle your data, 
              please contact us. We're committed to addressing your concerns promptly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={() => navigate('/about')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300"
              >
                Contact Us
              </motion.button>
              <motion.button
                onClick={() => navigate('/terms')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-orange-500 text-orange-400 rounded-lg font-semibold hover:bg-orange-500/10 transition-all duration-300"
              >
                View Terms of Service
              </motion.button>
            </div>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-400 text-sm">
              This privacy policy may be updated periodically. We will notify members of any significant changes.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
