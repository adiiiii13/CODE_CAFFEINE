import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import Navigation from '../components/Navigation';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'events', label: 'Events' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'hackathons', label: 'Hackathons' },
    { id: 'projects', label: 'Projects' }
  ];

  const images = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
      title: "HackCaffeine 2023 Winners",
      category: "hackathons",
      description: "Celebrating our championship team"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
      title: "React Workshop",
      category: "workshops",
      description: "Hands-on coding session"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg",
      title: "Industry Meetup",
      category: "events",
      description: "Networking with professionals"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      title: "AI Project Demo",
      category: "projects",
      description: "Student project showcase"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg",
      title: "Team Building Event",
      category: "events",
      description: "Club bonding activities"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
      title: "Coding Bootcamp",
      category: "workshops",
      description: "Intensive learning session"
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg",
      title: "Mobile App Competition",
      category: "hackathons",
      description: "48-hour app development challenge"
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg",
      title: "Web Development Project",
      category: "projects",
      description: "Full-stack application demo"
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
      title: "Tech Talk Series",
      category: "events",
      description: "Guest speaker presentation"
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const openModal = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };

  const selectedImageData = selectedImage 
    ? filteredImages.find(img => img.id === selectedImage)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900">
      <Navigation />
      
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Camera className="h-16 w-16 text-indigo-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Gallery & <span className="text-indigo-400">Memories</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Capturing moments of innovation, collaboration, and growth. 
              Explore our journey through events, workshops, and achievements.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Image Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                  onClick={() => openModal(image.id)}
                >
                  <div className="relative overflow-hidden rounded-xl bg-gray-800 aspect-square">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-semibold text-lg mb-1">
                          {image.title}
                        </h3>
                        <p className="text-gray-300 text-sm">
                          {image.description}
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                        <Image className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Image Modal */}
          <AnimatePresence>
            {selectedImage && selectedImageData && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
                onClick={closeModal}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="relative max-w-4xl max-h-[80vh] mx-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={selectedImageData.src}
                    alt={selectedImageData.title}
                    className="w-full h-auto rounded-lg"
                  />
                  
                  {/* Navigation Buttons */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage('prev');
                    }}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage('next');
                    }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                  
                  {/* Close Button */}
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                  
                  {/* Image Info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                    <h3 className="text-white text-xl font-semibold mb-2">
                      {selectedImageData.title}
                    </h3>
                    <p className="text-gray-300">
                      {selectedImageData.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Gallery;