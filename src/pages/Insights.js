import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '../components/common/Navigation';
import Footer from '../components/common/Footer';
import { getPosts, getCategories } from '../lib/sanity';
import { urlFor } from '../lib/sanity';

const Insights = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsData, categoriesData] = await Promise.all([
          getPosts(),
          getCategories()
        ]);
        
        setPosts(postsData);
        setCategories([{ title: "All" }, ...categoriesData]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const filteredPosts = selectedCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fbfaf9] flex items-center justify-center">
        <div className="text-xl text-[#5B6CFF]">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fbfaf9]">
      <Navigation />
      
      <section className="py-24 px-6" ref={ref}>
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Header */}
            <motion.div 
              className="text-center mb-20"
              variants={itemVariants}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-heading">
                Insights
              </h1>
              <p className="text-xl text-subtext max-w-3xl mx-auto leading-relaxed">
                Thoughts, strategies, and frameworks on conscious brand building, founder performance, and human transformation
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div 
              className="flex flex-wrap justify-center gap-3 mb-16"
              variants={itemVariants}
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category.title || category}
                  onClick={() => setSelectedCategory(category.title || category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === (category.title || category)
                      ? 'bg-gradient-to-r from-[#5B6CFF] to-[#2D3AFF] text-white'
                      : 'bg-white text-[#5B6CFF] border border-[#5B6CFF]/20 hover:border-[#5B6CFF]/40'
                  }`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {category.title || category}
                </motion.button>
              ))}
            </motion.div>

            {/* Blog Posts Grid */}
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post._id}
                  className="card-light overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Image with gradient overlay */}
                  <div className="relative h-48 overflow-hidden">
                    {post.mainImage ? (
                      <img 
                        src={urlFor(post.mainImage).width(600).height(400).url()} 
                        alt={post.mainImage.alt || post.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-[#5B6CFF] to-[#2D3AFF] opacity-90"></div>
                    )}
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      {post.category && (
                        <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800 mb-2">
                          {post.category}
                        </span>
                      )}
                      <h3 className="text-white text-xl font-bold leading-tight group-hover:text-white/90 transition-colors">
                        {post.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <p className="text-subtext leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <i className="far fa-clock mr-1"></i>
                          {post.readTime}
                        </span>
                        <span className="flex items-center">
                          <i className="far fa-calendar mr-1"></i>
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </span>
                      </div>
                      <motion.button
                        className="text-[#5B6CFF] font-semibold hover:text-[#2D3AFF] transition-colors"
                        whileHover={{ x: 3 }}
                      >
                        Read More →
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div 
              className="mt-20 text-center"
              variants={itemVariants}
            >
              <div className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-[#5B6CFF]/10 to-[#2D3AFF]/10 rounded-2xl border border-[#5B6CFF]/20">
                <h2 className="text-3xl font-bold mb-4 text-heading">
                  Stay Updated
                </h2>
                <p className="text-subtext mb-6">
                  Get the latest insights on conscious brand building and founder performance delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#5B6CFF] transition-colors"
                  />
                  <motion.button
                    className="px-6 py-3 bg-gradient-to-r from-[#5B6CFF] to-[#2D3AFF] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Insights;
