import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import Navigation from '../components/Navigation';

type ImageId = number | string;

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<ImageId | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showBytestormEvents, setShowBytestormEvents] = useState(false);
  const [showTrainingEvents, setShowTrainingEvents] = useState(false);
  const [showCodeRushEvents, setShowCodeRushEvents] = useState(false);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'events', label: 'Events' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'hackathons', label: 'Hackathons' },
    { id: 'projects', label: 'Projects' }
  ];

  const bytestormEventImages = [
    {
      id: 'bytestorm-1',
      src: "/src/Events/Bytestorm/1.jpg",
      title: "Bytestorm Event Photo 1",
      category: "events",
      description: "Bytestorm 1.0 event moments"
    },
    {
      id: 'bytestorm-2',
      src: "/src/Events/Bytestorm/2.jpg",
      title: "Bytestorm Event Photo 2",
      category: "events",
      description: "Bytestorm 1.0 event moments"
    },
    {
      id: 'bytestorm-3',
      src: "/src/Events/Bytestorm/3.jpg",
      title: "Bytestorm Event Photo 3",
      category: "events",
      description: "Bytestorm 1.0 event moments"
    },
    {
      id: 'bytestorm-4',
      src: "/src/Events/Bytestorm/4.jpg",
      title: "Bytestorm Event Photo 4",
      category: "events",
      description: "Bytestorm 1.0 event moments"
    }
  ];

  const trainingEventImages = [
    {
      id: 'training-1',
      src: "/src/Events/Training/1.jpg",
      title: "Training Session Photo 1",
      category: "events",
      description: "Training session moments"
    },
    {
      id: 'training-2',
      src: "/src/Events/Training/2.jpg",
      title: "Training Session Photo 2",
      category: "events",
      description: "Training session moments"
    },
    {
      id: 'training-3',
      src: "/src/Events/Training/3.jpg",
      title: "Training Session Photo 3",
      category: "events",
      description: "Training session moments"
    },
    {
      id: 'training-4',
      src: "/src/Events/Training/4.jpg",
      title: "Training Session Photo 4",
      category: "events",
      description: "Training session moments"
    },
    {
      id: 'training-5',
      src: "/src/Events/Training/5.jpg",
      title: "Training Session Photo 5",
      category: "events",
      description: "Training session moments"
    },
    {
      id: 'training-6',
      src: "/src/Events/Training/6.jpg",
      title: "Training Session Photo 6",
      category: "events",
      description: "Training session moments"
    },
    {
      id: 'training-7',
      src: "/src/Events/Training/7.jpg",
      title: "Training Session Photo 7",
      category: "events",
      description: "Training session moments"
    }
  ];

  const codeRushEventImages = [
    {
      id: 'coderush-round2-1',
      src: "/src/Events/Code Rush/round 2/round 2/1.jpg",
      title: "Code Rush Round 2 - Photo 1",
      category: "events",
      description: "Code Rush competition moments"
    },
    {
      id: 'coderush-round2-2',
      src: "/src/Events/Code Rush/round 2/round 2/2.jpg",
      title: "Code Rush Round 2 - Photo 2",
      category: "events",
      description: "Code Rush competition moments"
    },
    {
      id: 'coderush-round2-3',
      src: "/src/Events/Code Rush/round 2/round 2/3.jpg",
      title: "Code Rush Round 2 - Photo 3",
      category: "events",
      description: "Code Rush competition moments"
    },
    {
      id: 'coderush-round2-4',
      src: "/src/Events/Code Rush/round 2/round 2/4.jpg",
      title: "Code Rush Round 2 - Photo 4",
      category: "events",
      description: "Code Rush competition moments"
    },
    {
      id: 'coderush-round2-5',
      src: "/src/Events/Code Rush/round 2/round 2/5.jpg",
      title: "Code Rush Round 2 - Photo 5",
      category: "events",
      description: "Code Rush competition moments"
    },
    {
      id: 'coderush-round3-1',
      src: "/src/Events/Code Rush/round 3/1.jpg",
      title: "Code Rush Round 3 - Photo 1",
      category: "events",
      description: "Code Rush competition moments"
    },
    {
      id: 'coderush-round3-2',
      src: "/src/Events/Code Rush/round 3/2.jpg",
      title: "Code Rush Round 3 - Photo 2",
      category: "events",
      description: "Code Rush competition moments"
    },
    {
      id: 'coderush-round3-3',
      src: "/src/Events/Code Rush/round 3/3.jpg",
      title: "Code Rush Round 3 - Photo 3",
      category: "events",
      description: "Code Rush competition moments"
    },
    {
      id: 'coderush-round3-4',
      src: "/src/Events/Code Rush/round 3/4.jpg",
      title: "Code Rush Round 3 - Photo 4",
      category: "events",
      description: "Code Rush competition moments"
    },
    {
      id: 'coderush-round3-5',
      src: "/src/Events/Code Rush/round 3/5.jpg",
      title: "Code Rush Round 3 - Photo 5",
      category: "events",
      description: "Code Rush competition moments"
    }
  ];

  const images = [
    {
      id: 1,
      src: "/src/Events/Bytestorm/POV.png",
      title: "Bytestorm 1.0 Poster",
      category: "events",
      description: "POV - Bytestorm 1.0 Event Poster",
      isPoster: true
    },
    {
      id: 2,
      src: "/src/Events/Training/Poster.jpg",
      title: "Training Session Poster",
      category: "events",
      description: "Training Session Event Poster",
      isPoster: true
    },
    {
      id: 3,
      src: "/src/Events/Code Rush/CODERUSH POSTER.png",
      title: "Code Rush Poster",
      category: "events",
      description: "Code Rush Competition Event Poster",
      isPoster: true
    },
    {
      id: 4,
      src: "/src/Events/CS.jpeg",
      title: "HackCaffeine 2023 Winners",
      category: "hackathons",
      description: "Celebrating our championship team"
    },
    {
      id: 5,
      src: "/src/Events/CS.jpeg",
      title: "React Workshop",
      category: "workshops",
      description: "Hands-on coding session"
    },
    {
      id: 6,
      src: "/src/Events/CS.jpeg",
      title: "Industry Meetup",
      category: "events",
      description: "Networking with professionals"
    },
    {
      id: 7,
      src: "/src/Events/CS.jpeg",
      title: "AI Project Demo",
      category: "projects",
      description: "Student project showcase"
    },
    {
      id: 8,
      src: "/src/Events/CS.jpeg",
      title: "Team Building Event",
      category: "events",
      description: "Club bonding activities"
    },
    {
      id: 9,
      src: "/src/Events/CS.jpeg",
      title: "Coding Bootcamp",
      category: "workshops",
      description: "Intensive learning session"
    },
    {
      id: 10,
      src: "/src/Events/CS.jpeg",
      title: "Mobile App Competition",
      category: "hackathons",
      description: "48-hour app development challenge"
    },
    {
      id: 11,
      src: "/src/Events/CS.jpeg",
      title: "Web Development Project",
      category: "projects",
      description: "Full-stack application demo"
    },
    {
      id: 12,
      src: "/src/Events/CS.jpeg",
      title: "Tech Talk Series",
      category: "events",
      description: "Guest speaker presentation"
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const openModal = (imageId: ImageId) => {
    const image = images.find(img => img.id === imageId);
    if (image && image.isPoster) {
      if (image.title === "Bytestorm 1.0 Poster") {
        setShowBytestormEvents(true);
      } else if (image.title === "Training Session Poster") {
        setShowTrainingEvents(true);
      } else if (image.title === "Code Rush Poster") {
        setShowCodeRushEvents(true);
      }
    } else {
      setSelectedImage(imageId);
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const closeBytestormEvents = () => {
    setShowBytestormEvents(false);
  };

  const closeTrainingEvents = () => {
    setShowTrainingEvents(false);
  };

  const closeCodeRushEvents = () => {
    setShowCodeRushEvents(false);
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
                    title="Previous image"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage('next');
                    }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    title="Next image"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                  
                  {/* Close Button */}
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    title="Close modal"
                    aria-label="Close modal"
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

          {/* Bytestorm Events Modal */}
          <AnimatePresence>
            {showBytestormEvents && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
                onClick={closeBytestormEvents}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="relative max-w-6xl max-h-[90vh] mx-4 overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border border-indigo-500/30 shadow-2xl backdrop-blur-md p-6">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-3xl font-bold text-white">
                        Bytestorm 1.0 Event Photos
                      </h2>
                      <button
                        onClick={closeBytestormEvents}
                        className="text-gray-400 hover:text-white transition-colors p-2"
                        title="Close Bytestorm events"
                        aria-label="Close Bytestorm events"
                      >
                        <X className="h-6 w-6" />
                      </button>
                    </div>
                    
                    {/* Event Images Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {bytestormEventImages.map((image, index) => (
                        <motion.div
                          key={image.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          className="group cursor-pointer"
                                                      onClick={() => {
                              setSelectedImage(image.id);
                              setShowBytestormEvents(false);
                            }}
                        >
                          <div className="relative overflow-hidden rounded-xl bg-gray-800 aspect-video">
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
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Training Events Modal */}
          <AnimatePresence>
            {showTrainingEvents && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
                onClick={closeTrainingEvents}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="relative max-w-6xl max-h-[90vh] mx-4 overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border border-indigo-500/30 shadow-2xl backdrop-blur-md p-6">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-3xl font-bold text-white">
                        Training Session Event Photos
                      </h2>
                      <button
                        onClick={closeTrainingEvents}
                        className="text-gray-400 hover:text-white transition-colors p-2"
                        title="Close Training events"
                        aria-label="Close Training events"
                      >
                        <X className="h-6 w-6" />
                      </button>
                    </div>
                    
                    {/* Event Images Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {trainingEventImages.map((image, index) => (
                        <motion.div
                          key={image.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          className="group cursor-pointer"
                                                      onClick={() => {
                              setSelectedImage(image.id);
                              setShowTrainingEvents(false);
                            }}
                        >
                          <div className="relative overflow-hidden rounded-xl bg-gray-800 aspect-video">
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
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Code Rush Events Modal */}
          <AnimatePresence>
            {showCodeRushEvents && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
                onClick={closeCodeRushEvents}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="relative max-w-6xl max-h-[90vh] mx-4 overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border border-indigo-500/30 shadow-2xl backdrop-blur-md p-6">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-3xl font-bold text-white">
                        Code Rush Event Photos
                      </h2>
                      <button
                        onClick={closeCodeRushEvents}
                        className="text-gray-400 hover:text-white transition-colors p-2"
                        title="Close Code Rush events"
                        aria-label="Close Code Rush events"
                      >
                        <X className="h-6 w-6" />
                      </button>
                    </div>
                    
                    {/* Round 2 Section */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-indigo-400 mb-4">Round 2</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {codeRushEventImages.filter(img => img.id.includes('round2')).map((image, index) => (
                          <motion.div
                            key={image.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="group cursor-pointer"
                            onClick={() => {
                              setSelectedImage(image.id);
                              setShowCodeRushEvents(false);
                            }}
                          >
                            <div className="relative overflow-hidden rounded-xl bg-gray-800 aspect-video">
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
                      </div>
                    </div>

                    {/* Round 3 Section */}
                    <div>
                      <h3 className="text-xl font-semibold text-indigo-400 mb-4">Round 3</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {codeRushEventImages.filter(img => img.id.includes('round3')).map((image, index) => (
                          <motion.div
                            key={image.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: (index + 5) * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="group cursor-pointer"
                            onClick={() => {
                              setSelectedImage(image.id);
                              setShowCodeRushEvents(false);
                            }}
                          >
                            <div className="relative overflow-hidden rounded-xl bg-gray-800 aspect-video">
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
                      </div>
                    </div>
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