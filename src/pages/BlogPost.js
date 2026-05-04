import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from '../components/common/Navigation';
import Footer from '../components/common/Footer';
import { getPostBySlug } from '../lib/sanity';
import { urlFor } from '../lib/sanity';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await getPostBySlug(slug);
        console.log('Post data:', postData);
        setPost(postData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching post:', error);
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fbfaf9] flex items-center justify-center">
        <div className="text-xl text-[#5B6CFF]">Loading...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-[#fbfaf9] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Post not found</h1>
          <button
            onClick={() => navigate('/insights')}
            className="px-6 py-3 bg-[#5B6CFF] text-white rounded-lg hover:bg-[#4a5ce6] transition"
          >
            Back to Insights
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fbfaf9] to-white">
      <Navigation />

      <article className="py-16 px-6 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back Button */}
            <motion.button
              onClick={() => navigate('/insights')}
              className="mb-8 inline-flex items-center px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-full hover:bg-gray-50 transition-all duration-300 group shadow-sm"
              whileHover={{ x: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Insights
            </motion.button>

            {/* Header */}
            <motion.header 
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {post.categories && post.categories.length > 0 && (
                <motion.span 
                  className="inline-block px-6 py-3 bg-gradient-to-r from-[#5B6CFF]/10 to-[#00ffff]/10 text-[#5B6CFF] rounded-full text-sm font-semibold mb-6 border border-[#5B6CFF]/20 shadow-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {post.categories[0].title}
                </motion.span>
              )}
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {post.title}
              </motion.h1>
              
              <motion.div 
                className="flex items-center justify-center text-gray-600 text-sm space-x-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-[#5B6CFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-[#00ffff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {Math.ceil((post.body || post.content)?.length || 0 / 1000) || 5} min read
                </div>
              </motion.div>
            </motion.header>

            {/* Featured Image */}
            {post.mainImage && (
              <motion.div 
                className="mb-16 rounded-3xl overflow-hidden shadow-xl group relative"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative aspect-video">
                  <img
                    src={urlFor(post.mainImage).width(1200).height(600).url()}
                    alt={post.mainImage.alt || post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#5B6CFF]/10 via-transparent to-[#00ffff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              </motion.div>
            )}

            {/* Excerpt */}
            {post.excerpt && (
              <motion.div 
                className="mb-16 p-8 bg-gradient-to-r from-[#5B6CFF]/5 via-[#00ffff]/5 to-white border border-[#5B6CFF]/20 rounded-3xl shadow-xl relative overflow-hidden"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#5B6CFF]/10 to-transparent rounded-full blur-2xl"></div>
                <div className="relative flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#5B6CFF] to-[#00ffff] rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700 italic leading-relaxed">{post.excerpt}</p>
                </div>
              </motion.div>
            )}

            {/* Content */}
            <motion.div 
              className="prose prose-lg max-w-none prose-headings:text-white prose-p:text-white prose-strong:text-white prose-em:text-[#5B6CFF] bg-[#000047] p-8 rounded-2xl shadow-xl shadow-cyan-500/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {(post.body || post.content) && (post.body || post.content).map((block, index) => {
                if (block._type === 'block') {
                  return (
                    <motion.div 
                      key={index} 
                      className="mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      {block.style === 'h1' && (
                        <motion.h1 
                          className="text-3xl md:text-5xl font-bold text-white mb-2 leading-tight"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          {block.children[0]?.text}
                        </motion.h1>
                      )}
                      {block.style === 'h2' && (
                        <motion.h2 
                          className="text-2xl md:text-4xl font-bold text-white mb-2 mt-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          {block.children[0]?.text}
                        </motion.h2>
                      )}
                      {block.style === 'h3' && (
                        <motion.h3 
                          className="text-xl md:text-3xl font-semibold text-white mb-2 mt-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          {block.children[0]?.text}
                        </motion.h3>
                      )}
                      {block.style === 'blockquote' && (
                        <motion.blockquote 
                          className="border-l-4 border-[#5B6CFF] pl-8 py-4 bg-gradient-to-r from-[#5B6CFF]/5 via-[#00ffff]/5 to-white rounded-r-2xl my-4 italic text-white text-xl relative overflow-hidden"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                        >
                          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#5B6CFF]/10 to-transparent rounded-full blur-xl"></div>
                          {block.children[0]?.text}
                        </motion.blockquote>
                      )}
                      {(!block.style || block.style === 'normal') && (
                        <motion.p 
                          className="text-white leading-relaxed mb-2 text-lg"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          {block.children?.map((child, childIndex) => (
                            <span key={childIndex}>
                              {child.marks?.includes('strong') && <strong className="font-semibold text-white">{child.text}</strong>}
                              {child.marks?.includes('em') && <em className="italic text-[#5B6CFF]">{child.text}</em>}
                              {!child.marks?.includes('strong') && !child.marks?.includes('em') && child.text}
                            </span>
                          ))}
                        </motion.p>
                      )}
                    </motion.div>
                  );
                }
                if (block._type === 'image') {
                  return (
                    <motion.div 
                      key={index} 
                      className="my-16 rounded-3xl overflow-hidden shadow-xl group relative"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="relative">
                        <img
                          src={urlFor(block).width(800).url()}
                          alt={block.alt || ''}
                          className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#5B6CFF]/10 via-transparent to-[#00ffff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      </div>
                      {block.caption && (
                        <motion.p 
                          className="text-sm text-gray-600 text-center mt-4 italic px-6 bg-gray-50 rounded-lg inline-block mx-auto"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          {block.caption}
                        </motion.p>
                      )}
                    </motion.div>
                  );
                }
                return null;
              })}
            </motion.div>

            {/* Share Section */}
            <motion.div 
              className="mt-16 pt-8 border-t border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Share this article</h3>
                  <p className="text-gray-600 text-sm">Help others discover these insights</p>
                </div>
                <div className="flex space-x-4">
                  <button className="p-3 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-all hover:text-[#5B6CFF]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                  <button className="p-3 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-all hover:text-[#00ffff]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </button>
                  <button className="p-3 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-all hover:text-[#5B6CFF]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Related Articles */}
            <motion.div 
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Continue Reading</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div 
                  className="p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all cursor-pointer hover:border-[#5B6CFF]/20"
                  whileHover={{ y: -4 }}
                >
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Scaling with Systems, Not Hustle</h4>
                  <p className="text-gray-600 text-sm">Learn the framework for building systems that scale your business without burning out.</p>
                </motion.div>
                <motion.div 
                  className="p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all cursor-pointer hover:border-[#00ffff]/20"
                  whileHover={{ y: -4 }}
                >
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Leadership in the Age of AI</h4>
                  <p className="text-gray-600 text-sm">How AI is reshaping leadership requirements and what founders need to do differently.</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
