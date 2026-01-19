"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  BookOpen, 
  Heart, 
  Bookmark, 
  Share2,
  User,
  ChevronRight,
  TrendingUp,
  Sparkles,
  Book,
  Cross,
  Music,
  Users,
  GraduationCap,
  Church
} from "lucide-react";

export default function ChurchLibraryBooksPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Featured Resources
  const featuredResources = [
    {
      id: 1,
      title: "The Richest Man in Babylon",
      author: "George Clason",
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&q=80",
      category: "Financial Wisdom"
    },
    {
      id: 2,
      title: "The Alchemist",
      author: "Paulo Coelho",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80",
      category: "Inspirational"
    },
    {
      id: 3,
      title: "The Courage to be Disliked",
      author: "Ichiro Kishimi",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80",
      category: "Personal Growth"
    },
    {
      id: 4,
      title: "How to be Led by the Spirit",
      author: "Kenneth Hagin",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80",
      category: "Spirituality"
    },
    {
      id: 5,
      title: "7 Habits of Highly Effective People",
      author: "Stephen Covey",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&q=80",
      category: "Leadership"
    }
  ];

  // Genre Categories
  const genres = [
    { name: "Theology", icon: Book, count: "234 Resources", color: "bg-green-500" },
    { name: "Self-Help", icon: Sparkles, count: "189 Resources", color: "bg-blue-500" },
    { name: "Devotional", icon: Heart, count: "312 Resources", color: "bg-orange-500" },
    { name: "Spirituality", icon: Cross, count: "267 Resources", color: "bg-purple-500" },
    { name: "Worship", icon: Music, count: "156 Resources", color: "bg-pink-500" },
    { name: "History", icon: Book, count: "198 Resources", color: "bg-yellow-600" },
    { name: "Ministry", icon: Users, count: "145 Resources", color: "bg-teal-500" },
    { name: "Education", icon: GraduationCap, count: "201 Resources", color: "bg-red-500" }
  ];

  // Trending Resources
  const trendingResources = [
    {
      id: 1,
      title: "The Richest Man in Babylon",
      author: "George Clason",
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&q=80"
    },
    {
      id: 2,
      title: "Nearly All Men Are Mad",
      author: "Various Authors",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&q=80"
    },
    {
      id: 3,
      title: "The Greatest Salesman",
      author: "Og Mandino",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&q=80"
    },
    {
      id: 4,
      title: "A Good Morning My Soul",
      author: "Paul David Tripp",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300&q=80"
    },
    {
      id: 5,
      title: "Power",
      author: "Rhonda Byrne",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&q=80"
    },
    {
      id: 6,
      title: "The Art of Laziness",
      author: "Library Mindset",
      image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&q=80"
    }
  ];

  // New Releases
  const newReleases = [
    {
      id: 1,
      title: "The Courage to be Disliked",
      author: "Ichiro Kishimi",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&q=80"
    },
    {
      id: 2,
      title: "The Believer's Authority",
      author: "Kenneth Hagin",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&q=80"
    },
    {
      id: 3,
      title: "The Total Money Makeover",
      author: "Dave Ramsey",
      image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&q=80"
    },
    {
      id: 4,
      title: "The Greatest Salesman",
      author: "Og Mandino",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&q=80"
    },
    {
      id: 5,
      title: "Holy Spirit: My Senior Partner",
      author: "David Oyedepo",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300&q=80"
    }
  ];

  const tabs = ["All", "Fiction", "Romance", "Motivation", "Business", "Science & Tech", "Biography", "Children & Teens"];

  return (
    <div className="min-h-screen bg-[#3d3d3a]">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Header with Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl font-bold mb-2">
            <span className="text-white">The </span>
            <span className="bg-[#d4cfc4] text-[#3d3d3a] px-4 py-1 inline-block transform -skew-x-6">
              Solution
            </span>
          </h1>
        </motion.div>

        {/* Sidebar and Main Content Layout */}
        <div className="flex gap-6">
          
          {/* Left Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="w-20 flex flex-col items-center gap-6 bg-[#2d2d2a] rounded-2xl py-6 px-4"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white rounded-xl hover:bg-gray-100 transition-colors"
            >
              <Heart className="w-6 h-6 text-[#3d3d3a]" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 hover:bg-white/10 rounded-xl transition-colors"
            >
              <BookOpen className="w-6 h-6 text-white" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 hover:bg-white/10 rounded-xl transition-colors"
            >
              <Bookmark className="w-6 h-6 text-white" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 hover:bg-white/10 rounded-xl transition-colors"
            >
              <Share2 className="w-6 h-6 text-white" />
            </motion.button>

            <div className="flex-1"></div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              className="p-3 hover:bg-white/10 rounded-xl transition-colors"
            >
              <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full"></div>
            </motion.button>
          </motion.div>

          {/* Main Content Area */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-8 shadow-2xl"
            >
              
              {/* Search Bar with Tooltip */}
              <div className="relative mb-8">
                <div className="absolute -top-16 right-0 bg-[#2d2d2a] text-white px-6 py-3 rounded-2xl text-sm">
                  Search first. Get to any book instantly.
                  <div className="absolute -bottom-2 right-8 w-4 h-4 bg-[#2d2d2a] transform rotate-45"></div>
                </div>
                
                <div className="flex items-center gap-4 bg-gray-50 rounded-2xl p-4 border-2 border-gray-200">
                  <Search className="w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for books, authors, or categories..."
                    className="flex-1 bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
                  />
                  <button className="bg-black text-white px-6 py-2 rounded-xl font-medium hover:bg-gray-800 transition-colors">
                    Search
                  </button>
                </div>

                <div className="flex items-center gap-3 mt-4 justify-end">
                  <User className="w-5 h-5 text-gray-600" />
                  <span className="text-sm text-gray-600">Olawale John</span>
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full"></div>
                </div>
              </div>

              {/* Today's Feature */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900">Today's Feature</h2>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
                    See All <ChevronRight className="w-4 h-4" />
                  </a>
                </div>

                <div className="grid grid-cols-5 gap-4">
                  {featuredResources.map((resource) => (
                    <motion.div
                      key={resource.id}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="cursor-pointer group"
                    >
                      <div className="aspect-[2/3] rounded-xl overflow-hidden shadow-lg mb-2">
                        <div
                          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                          style={{ backgroundImage: `url(${resource.image})` }}
                        />
                      </div>
                      <h3 className="font-semibold text-sm text-gray-900 truncate">{resource.title}</h3>
                      <p className="text-xs text-gray-500">{resource.author}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Discover Based on Genre */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Discover Based on Genre</h2>
                
                <div className="grid grid-cols-4 gap-3">
                  {genres.map((genre, index) => {
                    const Icon = genre.icon;
                    return (
                      <motion.button
                        key={genre.name}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`${genre.color} text-white rounded-xl p-4 flex items-center justify-between group hover:shadow-xl transition-all`}
                      >
                        <div className="text-left">
                          <div className="flex items-center gap-2 mb-1">
                            <Icon className="w-5 h-5" />
                            <span className="font-bold">{genre.name}</span>
                          </div>
                          <span className="text-xs opacity-90">{genre.count}</span>
                        </div>
                        <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* New Releases */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">New Releases</h2>
                
                {/* Tabs */}
                <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                        tab === "All" 
                          ? "bg-gray-900 text-white" 
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-5 gap-4">
                  {newReleases.map((resource) => (
                    <motion.div
                      key={resource.id}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="cursor-pointer group"
                    >
                      <div className="aspect-[2/3] rounded-xl overflow-hidden shadow-lg mb-2">
                        <div
                          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                          style={{ backgroundImage: `url(${resource.image})` }}
                        />
                      </div>
                      <h3 className="font-semibold text-sm text-gray-900 truncate">{resource.title}</h3>
                      <p className="text-xs text-gray-500">{resource.author}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Sidebar - Trending */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="w-80 space-y-4"
          >
            {/* Trending Books Card */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-[#8B1538]" />
                <h3 className="font-bold text-gray-900">Trending Books</h3>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {trendingResources.map((resource) => (
                  <motion.div
                    key={resource.id}
                    whileHover={{ scale: 1.05 }}
                    className="cursor-pointer"
                  >
                    <div className="aspect-[2/3] rounded-lg overflow-hidden shadow-md">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${resource.image})` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tooltip Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-[#2d2d2a] text-white p-6 rounded-2xl"
            >
              <p className="text-sm leading-relaxed">
                Trending picks, powered by the crowd.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-[#2d2d2a] text-white p-6 rounded-2xl"
            >
              <p className="text-sm leading-relaxed mb-2">
                <span className="font-bold">Tip:</span> Did you know the average person reads 238 words per minute?
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Tooltips */}
        <div className="flex justify-between mt-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-[#2d2d2a] text-white px-6 py-4 rounded-2xl max-w-xs"
          >
            <p className="text-sm">Fresh drops — always something new to read.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-[#2d2d2a] text-white px-6 py-4 rounded-2xl max-w-xs"
          >
            <p className="text-sm">Discover by genre, not just endless scrolls.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}