"use client";

import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Search,
  Filter,
  Grid3x3,
  List,
  ChevronDown,
  Star,
  Clock,
  TrendingUp,
  Heart,
  Download,
  Eye,
  Play,
  Headphones,
  FileText,
  Video,
  Music,
  BookMarked,
  Users,
  Calendar,
  ArrowRight,
  X,
  Check,
  Sparkles
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export default function CollectionsPage() {
  const [viewMode, setViewMode] = useState("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedFormat, setSelectedFormat] = useState("All Formats");
  const [sortBy, setSortBy] = useState("Popular");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);
  const [savedItems, setSavedItems] = useState([]);
  const [selectedCollection, setSelectedCollection] = useState(null);

  const categories = [
    { name: "All", count: 10234, icon: BookOpen, color: "gray" },
    { name: "Bible Studies", count: 2456, icon: BookMarked, color: "blue" },
    { name: "Sermons", count: 3891, icon: Play, color: "purple" },
    { name: "Devotionals", count: 1823, icon: Heart, color: "pink" },
    { name: "Theology", count: 1567, icon: BookOpen, color: "green" },
    { name: "Worship", count: 892, icon: Music, color: "orange" },
    { name: "Youth", count: 605, icon: Users, color: "teal" }
  ];

  const formats = [
    { name: "All Formats", icon: BookOpen },
    { name: "Audio", icon: Headphones },
    { name: "Video", icon: Video },
    { name: "PDF", icon: FileText },
    { name: "Interactive", icon: Sparkles }
  ];

  const sortOptions = ["Popular", "Newest", "Most Downloaded", "Highest Rated", "A-Z"];

  const featuredCollections = [
    {
      id: 1,
      title: "Essential Bible Study Collection",
      description: "Comprehensive guides for in-depth Scripture exploration",
      resources: 234,
      subscribers: 5420,
      image: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?w=800&q=80",
      category: "Bible Studies",
      featured: true
    },
    {
      id: 2,
      title: "Sunday Sermon Series 2025",
      description: "Weekly messages from our senior pastor",
      resources: 48,
      subscribers: 8932,
      image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&q=80",
      category: "Sermons",
      featured: true
    },
    {
      id: 3,
      title: "Daily Devotional Journey",
      description: "365 days of spiritual reflection and growth",
      resources: 365,
      subscribers: 12453,
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
      category: "Devotionals",
      featured: true
    }
  ];

  const resources = [
    {
      id: 1,
      title: "Understanding Romans: A Deep Dive",
      author: "Dr. Timothy Richards",
      category: "Bible Studies",
      format: "PDF",
      duration: "8 weeks",
      rating: 4.8,
      downloads: 3420,
      views: 12340,
      date: "2025-01-15",
      image: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?w=400&q=80",
      description: "An in-depth exploration of Paul's letter to the Romans, covering key theological themes.",
      tags: ["Theology", "New Testament", "Advanced"]
    },
    {
      id: 2,
      title: "The Power of Prayer: Audio Series",
      author: "Pastor Sarah Johnson",
      category: "Devotionals",
      format: "Audio",
      duration: "12 sessions",
      rating: 4.9,
      downloads: 5892,
      views: 18920,
      date: "2025-01-10",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80",
      description: "Transform your prayer life with this powerful audio teaching series.",
      tags: ["Prayer", "Spiritual Growth", "Beginner"]
    },
    {
      id: 3,
      title: "Worship Leading Masterclass",
      author: "Elder Michael Chen",
      category: "Worship",
      format: "Video",
      duration: "6 hours",
      rating: 4.7,
      downloads: 2103,
      views: 8745,
      date: "2025-01-05",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&q=80",
      description: "Learn the art and heart of leading worship in modern church settings.",
      tags: ["Worship", "Music", "Leadership"]
    },
    {
      id: 4,
      title: "Gospel of John Study Guide",
      author: "Dr. Grace Adeyemi",
      category: "Bible Studies",
      format: "Interactive",
      duration: "10 weeks",
      rating: 4.9,
      downloads: 4567,
      views: 15234,
      date: "2024-12-28",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80",
      description: "Interactive study through the Gospel of John with video lessons and quizzes.",
      tags: ["New Testament", "Interactive", "Intermediate"]
    },
    {
      id: 5,
      title: "Youth Ministry Curriculum 2025",
      author: "Youth Ministry Team",
      category: "Youth",
      format: "PDF",
      duration: "52 weeks",
      rating: 4.8,
      downloads: 1893,
      views: 6721,
      date: "2024-12-20",
      image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&q=80",
      description: "Complete year-long curriculum for youth groups and small groups.",
      tags: ["Youth", "Curriculum", "Small Groups"]
    },
    {
      id: 6,
      title: "Systematic Theology Lectures",
      author: "Dr. James Thompson",
      category: "Theology",
      format: "Video",
      duration: "24 hours",
      rating: 4.9,
      downloads: 3421,
      views: 11234,
      date: "2024-12-15",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&q=80",
      description: "Comprehensive systematic theology course covering all major doctrines.",
      tags: ["Theology", "Doctrine", "Advanced"]
    },
    {
      id: 7,
      title: "Morning Devotions Podcast",
      author: "Pastor David Emmanuel",
      category: "Devotionals",
      format: "Audio",
      duration: "Daily",
      rating: 4.7,
      downloads: 8932,
      views: 23456,
      date: "2024-12-10",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80",
      description: "Start your day with uplifting devotional messages and Scripture readings.",
      tags: ["Devotional", "Daily", "Podcast"]
    },
    {
      id: 8,
      title: "Church History: From Acts to Today",
      author: "Dr. Rebecca Martinez",
      category: "Theology",
      format: "PDF",
      duration: "16 weeks",
      rating: 4.8,
      downloads: 2678,
      views: 9123,
      date: "2024-12-05",
      image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&q=80",
      description: "Journey through 2000 years of church history and its impact on faith today.",
      tags: ["History", "Church", "Advanced"]
    }
  ];

  const toggleSaveItem = (id) => {
    setSavedItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || resource.category === selectedCategory;
    const matchesFormat = selectedFormat === "All Formats" || resource.format === selectedFormat;
    return matchesSearch && matchesCategory && matchesFormat;
  });

  const getFormatIcon = (format) => {
    switch(format) {
      case "Audio": return Headphones;
      case "Video": return Video;
      case "PDF": return FileText;
      case "Interactive": return Sparkles;
      default: return BookOpen;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#002147] via-[#1a3a5c] to-[#8B1538] py-20 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-[#FDB515]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20 mb-6"
            >
              <BookOpen className="w-4 h-4 text-[#FDB515]" />
              <span className="text-white/90 font-medium text-sm">Resource Collections</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Explore Our <span className="text-[#FDB515]">Digital Collections</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-white/80 max-w-3xl mx-auto mb-8"
            >
              Access thousands of carefully curated spiritual resources to strengthen your faith and deepen your understanding
            </motion.p>

            {/* Search Bar */}
            <motion.div variants={fadeInUp} className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search resources, authors, topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-6 py-4 rounded-full bg-white shadow-xl focus:ring-4 focus:ring-[#FDB515]/30 outline-none text-gray-900 font-medium"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {featuredCollections.map((collection) => (
              <motion.div
                key={collection.id}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedCollection(collection)}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-48">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${collection.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute top-4 right-4 bg-[#FDB515] text-[#002147] px-3 py-1 rounded-full text-xs font-bold">
                    FEATURED
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white/80 text-xs font-semibold mb-1">{collection.category}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{collection.title}</h3>
                  <p className="text-gray-600 mb-4">{collection.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4 text-gray-500">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        {collection.resources}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {collection.subscribers.toLocaleString()}
                      </span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#8B1538]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b bg-white sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.name;
              return (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-[#8B1538] text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className={`text-xs ${isActive ? 'text-white/80' : 'text-gray-500'}`}>
                    ({category.count.toLocaleString()})
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
              >
                <Filter className="w-4 h-4" />
                <span className="font-medium">Filters</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>

              {/* Format Filter */}
              <div className="flex gap-2">
                {formats.map((format) => {
                  const Icon = format.icon;
                  const isActive = selectedFormat === format.name;
                  return (
                    <button
                      key={format.name}
                      onClick={() => setSelectedFormat(format.name)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                        isActive
                          ? "bg-[#002147] text-white"
                          : "bg-white text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="hidden sm:inline">{format.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white border-2 border-gray-300 rounded-lg font-medium text-sm focus:outline-none focus:border-gray-400"
              >
                {sortOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>

              {/* View Mode */}
              <div className="flex gap-1 bg-white rounded-lg p-1 border-2 border-gray-300">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded ${viewMode === "grid" ? "bg-gray-200" : "hover:bg-gray-100"}`}
                >
                  <Grid3x3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded ${viewMode === "list" ? "bg-gray-200" : "hover:bg-gray-100"}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredResources.length}</span> resources
            {searchQuery && ` for "${searchQuery}"`}
          </div>
        </div>
      </section>

      {/* Resources Grid/List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className={
              viewMode === "grid"
                ? "grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                : "space-y-4"
            }
          >
            {filteredResources.map((resource) => {
              const FormatIcon = getFormatIcon(resource.format);
              const isSaved = savedItems.includes(resource.id);

              return viewMode === "grid" ? (
                <motion.div
                  key={resource.id}
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedResource(resource)}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="relative h-48">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${resource.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSaveItem(resource.id);
                      }}
                      className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                    >
                      <Heart className={`w-4 h-4 ${isSaved ? 'fill-[#8B1538] text-[#8B1538]' : 'text-gray-600'}`} />
                    </button>
                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                      <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                        <FormatIcon className="w-3 h-3 text-gray-700" />
                        <span className="text-xs font-semibold text-gray-700">{resource.format}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-[#8B1538] font-semibold mb-2">{resource.category}</div>
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#8B1538] transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{resource.author}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-[#FDB515] text-[#FDB515]" />
                        <span className="font-semibold">{resource.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="w-3 h-3" />
                        <span>{resource.downloads.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={resource.id}
                  variants={fadeInUp}
                  whileHover={{ x: 4 }}
                  onClick={() => setSelectedResource(resource)}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="flex gap-6">
                    <div className="relative w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${resource.image})` }}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="text-xs text-[#8B1538] font-semibold mb-1">{resource.category}</div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{resource.title}</h3>
                          <p className="text-sm text-gray-600">{resource.author}</p>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleSaveItem(resource.id);
                          }}
                          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                          <Heart className={`w-5 h-5 ${isSaved ? 'fill-[#8B1538] text-[#8B1538]' : 'text-gray-400'}`} />
                        </button>
                      </div>
                      <p className="text-gray-600 mb-4">{resource.description}</p>
                      <div className="flex items-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <FormatIcon className="w-4 h-4" />
                          <span>{resource.format}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{resource.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 fill-[#FDB515] text-[#FDB515]" />
                          <span className="font-semibold">{resource.rating}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Download className="w-4 h-4" />
                          <span>{resource.downloads.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          <span>{resource.views.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Resource Detail Modal */}
      <AnimatePresence>
        {selectedResource && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedResource(null)}
              className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-0 flex items-center justify-center p-4 z-50"
            >
              <div className="w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-y-auto">
              <button
                onClick={() => setSelectedResource(null)}
                className="sticky top-4 right-4 float-right p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Image */}
                  <div className="relative h-80 rounded-xl overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${selectedResource.image})` }}
                    />
                  </div>

                  {/* Details */}
                  <div>
                    <div className="text-sm text-[#8B1538] font-semibold mb-2">{selectedResource.category}</div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">{selectedResource.title}</h2>
                    <p className="text-lg text-gray-600 mb-4">by {selectedResource.author}</p>
                    
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 fill-[#FDB515] text-[#FDB515]" />
                        <span className="font-bold text-lg">{selectedResource.rating}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Download className="w-4 h-4" />
                        <span>{selectedResource.downloads.toLocaleString()} downloads</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Eye className="w-4 h-4" />
                        <span>{selectedResource.views.toLocaleString()} views</span>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">{selectedResource.description}</p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3">
                        {React.createElement(getFormatIcon(selectedResource.format), { className: "w-5 h-5 text-gray-600" })}
                        <span className="text-gray-700">Format: <span className="font-semibold">{selectedResource.format}</span></span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-gray-600" />
                        <span className="text-gray-700">
                          Duration: <span className="font-semibold">{selectedResource.duration}</span>
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-gray-600" />
                        <span className="text-gray-700">
                          Published:{" "}
                          <span className="font-semibold">
                            {new Date(selectedResource.date).toDateString()}
                          </span>
                        </span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {selectedResource.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm bg-gray-100 rounded-full text-gray-700 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-4">
                      <button className="flex items-center gap-2 px-6 py-3 bg-[#8B1538] text-white font-semibold rounded-lg hover:bg-[#6f112e] transition-colors">
                        <Download className="w-5 h-5" />
                        Download Resource
                      </button>

                      <button className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition-colors">
                        <Play className="w-5 h-5" />
                        Preview
                      </button>

                      <button
                        onClick={() => toggleSaveItem(selectedResource.id)}
                        className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        <Heart
                          className={`w-5 h-5 ${
                            savedItems.includes(selectedResource.id)
                              ? "fill-[#8B1538] text-[#8B1538]"
                              : ""
                          }`}
                        />
                        {savedItems.includes(selectedResource.id) ? "Saved" : "Save"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Collection Detail Modal */}
      <AnimatePresence>
        {selectedCollection && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCollection(null)}
              className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-0 flex items-center justify-center p-4 z-50"
            >
              <div className="w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-y-auto">
              <button
                onClick={() => setSelectedCollection(null)}
                className="sticky top-4 right-4 float-right p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Image */}
                  <div className="relative h-80 rounded-xl overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${selectedCollection.image})` }}
                    />
                  </div>

                  {/* Details */}
                  <div>
                    <div className="text-sm text-[#8B1538] font-semibold mb-2">{selectedCollection.category}</div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">{selectedCollection.title}</h2>
                    
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-gray-600" />
                        <span className="font-bold text-lg">{selectedCollection.resources} resources</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users className="w-5 h-5" />
                        <span>{selectedCollection.subscribers.toLocaleString()} subscribers</span>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">{selectedCollection.description}</p>

                    {/* Collection Stats */}
                    <div className="bg-gray-50 rounded-lg p-6 mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Collection Overview</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-[#8B1538]">{selectedCollection.resources}</div>
                          <div className="text-sm text-gray-600">Resources</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-[#002147]">{selectedCollection.subscribers.toLocaleString()}</div>
                          <div className="text-sm text-gray-600">Subscribers</div>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-4">
                      <button className="flex items-center gap-2 px-6 py-3 bg-[#8B1538] text-white font-semibold rounded-lg hover:bg-[#6f112e] transition-colors">
                        <BookOpen className="w-5 h-5" />
                        Browse Collection
                      </button>

                      <button className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition-colors">
                        <Users className="w-5 h-5" />
                        Subscribe
                      </button>

                      <button className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition-colors">
                        <TrendingUp className="w-5 h-5" />
                        View Stats
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
