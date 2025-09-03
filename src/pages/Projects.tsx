import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Wrench, Users, ArrowLeft, ExternalLink } from 'lucide-react';
import Navigation from '../components/Navigation';

export const Projects: React.FC = () => {
  const [selectedTeamId, setSelectedTeamId] = useState<string | null>(null);

  const teams: Array<{
    id: string;
    name: string;
    photo: string;
    projects: Array<{
      title: string;
      description: string;
      tags: string[];
      link?: string;
      image?: string;
    }>;
  }> = [
    {
      id: 'team-recursion',
      name: 'Team Recursion',
      photo: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200',
      projects: [
        {
          title: 'Code Caffeine Website',
          description: 'Club website with events, gallery, and members built with React, Vite and Tailwind.',
          tags: ['React', 'Vite', 'TailwindCSS'],
          link: 'https://codecaffeine-cc.netlify.app/',
          image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200'
        },
        {
          title: 'Event Gallery Pipeline',
          description: 'Automated asset organization and gallery generation for club events.',
          tags: ['Automation', 'Node.js'],
          image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200'
        }
      ]
    },
    {
      id: 'team-syntax',
      name: 'Team Syntax',
      photo: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1200',
      projects: [
        {
          title: 'Hackathon Toolkit',
          description: 'A toolkit of reusable components and utilities for hackathon projects.',
          tags: ['TypeScript', 'Libraries'],
          image: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1200'
        }
      ]
    },
    {
      id: 'team-caffeine',
      name: 'Team Caffeine',
      photo: 'https://images.pexels.com/photos/3861952/pexels-photo-3861952.jpeg?auto=compress&cs=tinysrgb&w=1200',
      projects: [
        {
          title: 'Community Portal',
          description: 'Member onboarding and internal communication portal.',
          tags: ['React', 'Routing'],
          image: 'https://images.pexels.com/photos/3862135/pexels-photo-3862135.jpeg?auto=compress&cs=tinysrgb&w=1200'
        }
      ]
    },
    {
      id: 'team-datasurge',
      name: 'Team DataSurge',
      photo: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200',
      projects: [
        {
          title: 'Project Atlas',
          description: 'Data visualization dashboard for club activities and growth.',
          tags: ['Charts', 'Analytics'],
          image: 'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1200'
        }
      ]
    }
  ];

  const selectedTeam = teams.find(t => t.id === selectedTeamId) || null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <Navigation />

      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.h1 
              className="text-4xl md:text-5xl font-black text-white mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Projects
            </motion.h1>
            <p className="text-gray-300">Browse by team and explore their builds.</p>
          </div>

          <AnimatePresence mode="wait">
            {!selectedTeam && (
              <motion.div
                key="teams"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Users className="h-6 w-6 text-cyan-400 mr-2" /> Teams
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {teams.map((team, index) => (
                    <motion.button
                      key={team.id}
                      onClick={() => setSelectedTeamId(team.id)}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ y: -4 }}
                      className="text-left bg-gray-900/70 border border-gray-700 hover:border-cyan-500/50 rounded-2xl overflow-hidden group"
                    >
                      <div className="relative h-40 overflow-hidden">
                        <img src={team.photo} alt={team.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                      <div className="p-4">
                        <div className="text-white font-semibold text-lg group-hover:text-cyan-400 transition-colors">{team.name}</div>
                        <div className="text-sm text-gray-400 mt-1">{team.projects.length} project(s)</div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {selectedTeam && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={() => setSelectedTeamId(null)}
                    className="inline-flex items-center space-x-2 text-gray-300 hover:text-white"
                  >
                    <ArrowLeft className="h-5 w-5" />
                    <span>All Teams</span>
                  </button>
                </div>

                <div className="bg-gray-900/60 border border-gray-700 rounded-2xl overflow-hidden mb-8">
                  <div className="relative h-48">
                    <img src={selectedTeam.photo} alt={selectedTeam.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h2 className="text-3xl font-bold text-white">{selectedTeam.name}</h2>
                      <div className="text-gray-300">{selectedTeam.projects.length} project(s)</div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {selectedTeam.projects.map((p, idx) => (
                    <motion.div
                      key={p.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="bg-gray-900/70 border border-gray-700 rounded-2xl flex flex-col overflow-hidden"
                    >
                      {p.image && (
                        <div className="relative h-40">
                          <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>
                      )}
                      <div className="flex-1 p-6">
                        <h3 className="text-xl font-semibold text-white mb-2">{p.title}</h3>
                        <p className="text-gray-300 mb-4">{p.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {p.tags.map(tag => (
                            <span key={tag} className="px-2 py-1 text-xs rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">{tag}</span>
                          ))}
                        </div>
                      </div>
                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mx-6 mb-6 inline-flex items-center space-x-2 text-cyan-400 hover:text-white"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>View</span>
                        </a>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};
