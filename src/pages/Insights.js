import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/common/Navigation';
import Footer from '../components/common/Footer';
import InsightsBanner from '../components/sections/InsightsBanner';
import { getPosts } from '../lib/sanity';
import { urlFor } from '../lib/sanity';

const Insights = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsData = await getPosts();

        console.log("POSTS:", postsData);

        setPosts(postsData);

        // Generate categories dynamically from categories array
        const uniqueCategories = [
          "All",
          ...new Set(
            postsData.flatMap((post) =>
              post.categories?.map((cat) => cat.title) || []
            )
          ),
        ];

        setCategories(uniqueCategories);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) =>
          post.categories?.some((cat) => cat.title === selectedCategory)
        );

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

      <InsightsBanner />

      <section className="py-12 px-6" ref={ref}>
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >

            
            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((cat, index) => (
                <button
                  key={`${cat}-${index}`}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-3 rounded-full font-medium transition ${
                    selectedCategory === cat
                      ? 'bg-[#5B6CFF] text-white'
                      : 'bg-white text-[#5B6CFF] border border-[#5B6CFF]/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.length === 0 ? (
                <p className="text-center col-span-3 text-white">
                  No posts found.
                </p>
              ) : (
                filteredPosts.map((post) => (
                  <motion.div
                    key={post._id}
                    onClick={() => navigate(`/insights/${post.slug.current}`)}
                    className="group bg-[#000047] rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-cyan-500/60 shadow-cyan-500/40 transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100"
                    whileHover={{ y: -8, scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * filteredPosts.indexOf(post) }}
                  >
                    {/* Image Container */}
                    <div className="relative h-56 overflow-hidden">
                      {post.mainImage ? (
                        <img
                          src={urlFor(post.mainImage).width(600).height(400).url()}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#5B6CFF] to-[#00ffff] flex items-center justify-center">
                          <span className="text-white text-2xl font-bold">
                            {post.title?.charAt(0) || 'B'}
                          </span>
                        </div>
                      )}
                      
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Category badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#5B6CFF] text-xs font-semibold rounded-full">
                          {post.categories?.[0]?.title || "Uncategorized"}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-[#5B6CFF] transition-colors duration-200">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-200 mb-4 line-clamp-3 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center text-gray-500 text-xs">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {new Date(post.publishedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </div>
                        
                        <div className="flex items-center text-gray-400 group-hover:text-[#5B6CFF] transition-colors duration-200">
                          <span className="text-xs font-medium">Read more</span>
                          <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Insights;