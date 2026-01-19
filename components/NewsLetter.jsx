"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function ChurchLibraryHero() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-[#8B1538]" />
            <span className="text-xl font-bold text-gray-900">Digital Library</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <a href="#premium-collection" className="hover:text-[#8B1538] transition-colors">
              Premium Collection
            </a>
            <a href="#devotionals" className="hover:text-[#8B1538] transition-colors">
              Daily Devotionals
            </a>
            <a href="#sermons" className="hover:text-[#8B1538] transition-colors">
              Sermon Archive
            </a>
            <a href="#resources" className="hover:text-[#8B1538] transition-colors">
              Faith Resources
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#002147] via-[#1a3a5c] to-[#8B1538]" />
          
          {/* Animated gradient overlays */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#8B1538]/30 via-transparent to-[#FDB515]/20"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Floating orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#8B1538]/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#FDB515]/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Subtle pattern overlay */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <div className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
                <p className="text-white/90 font-medium text-sm tracking-wide">
                  SPIRITUAL GROWTH STARTS HERE
                </p>
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Sacred Scripture Collection
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Unlock exclusive spiritual experiences tailored for you. Access our comprehensive digital library today and be part of your faith journey.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#8B1538] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <BookOpen className="w-5 h-5" />
              <span>Discover resources</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Visual Elements - Icons representing different content types */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Bible Icon */}
          <motion.div
            className="absolute top-1/4 left-[15%] w-20 h-20"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-full h-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center">
              <BookOpen className="w-10 h-10 text-white/40" />
            </div>
          </motion.div>

          {/* Cross Symbol */}
          <motion.div
            className="absolute top-1/3 right-[20%] w-16 h-16"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <div className="w-full h-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-white/40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 3h-4v7H3v4h7v7h4v-7h7v-4h-7V3z"/>
              </svg>
            </div>
          </motion.div>

          {/* Music Note */}
          <motion.div
            className="absolute bottom-1/3 left-[25%] w-14 h-14"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <div className="w-full h-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center">
              <svg className="w-7 h-7 text-white/40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
              </svg>
            </div>
          </motion.div>

          {/* Prayer Hands */}
          <motion.div
            className="absolute bottom-1/4 right-[15%] w-18 h-18"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -8, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          >
            <div className="w-full h-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center p-2">
              <svg className="w-8 h-8 text-white/40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />
      </section>
    </div>
  );
}