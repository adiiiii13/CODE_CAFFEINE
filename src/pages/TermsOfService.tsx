import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowLeft, Calendar, Users, Shield, AlertTriangle } from 'lucide-react';
import Navigation from '../components/Navigation';
import { useNavigate } from 'react-router-dom';

const TermsOfService: React.FC = () => {
  const navigate = useNavigate();

  const sections = [
    {
      icon: Users,
      title: "Membership Terms",
      content: [
        "Membership in Code Caffeine is open to all students of Gargi Memorial Institute of Technology.",
        "Members must maintain respectful behavior and follow the college's code of conduct.",
        "Membership can be revoked for violations of these terms or inappropriate behavior.",
        "All members are expected to contribute positively to the community and participate in club activities."
      ]
    },
    {
      icon: Shield,
      title: "Code of Conduct",
      content: [
        "Respect all members regardless of their background, experience level, or opinions.",
        "No harassment, discrimination, or inappropriate behavior will be tolerated.",
        "Maintain a professional and inclusive environment during all club activities.",
        "Report any violations to club leadership immediately."
      ]
    },
    {
      icon: FileText,
      title: "Intellectual Property",
      content: [
        "All code, projects, and materials created during club activities remain the property of their creators.",
        "Club members may not claim ownership of others' work without permission.",
        "Open source contributions should follow proper attribution guidelines.",
        "Respect copyright and intellectual property rights of third parties."
      ]
    },
    {
      icon: AlertTriangle,
      title: "Limitations and Disclaimers",
      content: [
        "Code Caffeine is not responsible for any damages or losses resulting from club activities.",
        "Members participate in activities at their own risk.",
        "The club does not guarantee job placements or career outcomes.",
        "All advice and information shared is for educational purposes only."
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
              <FileText className="h-12 w-12 text-orange-400" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Terms of Service
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl">
              Please read these terms carefully before participating in Code Caffeine activities. 
              By joining our community, you agree to abide by these terms.
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

          {/* Terms Sections */}
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
            transition={{ delay: 0.6 }}
            className="mt-12 p-8 bg-gradient-to-r from-orange-900/30 to-red-900/30 rounded-xl border border-orange-500/20"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Questions About These Terms?</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about these Terms of Service, please contact us through our 
              contact form or reach out to club leadership directly.
            </p>
            <motion.button
              onClick={() => navigate('/about')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300"
            >
              Contact Us
            </motion.button>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-400 text-sm">
              These terms are subject to change. Members will be notified of any updates.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
