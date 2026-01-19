"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  User,
  Calendar,
  BookOpen,
  Video,
  Users,
  ArrowRight,
  MessageCircle,
  ChevronDown,
  Sparkles,
  Heart,
  TrendingUp,
  Clock,
  Filter,
  X
} from "lucide-react";

/* =======================
   Tabs (Library Sections)
======================= */
const tabs = [
  { id: "sermons", label: "Sermons", icon: Video },
  { id: "library", label: "Digital Library", icon: BookOpen },
  { id: "events", label: "Church Events", icon: Calendar },
  { id: "community", label: "Community", icon: Users },
];

const categories = [
  "All Resources",
  "Bible Studies",
  "Sermons",
  "Devotionals",
  "Theology",
  "Worship",
  "Youth Ministry",
  "Prayer"
];

const timeframes = [
  "This Week",
  "This Month",
  "This Quarter",
  "This Year",
  "All Time"
];

/* =======================
   Animations
======================= */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function EnhancedChurchLibraryHero() {
  const [activeTab, setActiveTab] = useState("sermons");
  const [showPrayerModal, setShowPrayerModal] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showTimeframeDropdown, setShowTimeframeDropdown] = useState(false);
  const [searchData, setSearchData] = useState({
    keyword: "",
    category: "All Resources",
    timeframe: "This Month",
  });

  const handleSearch = () => {
    console.log("Searching with:", searchData);
    alert(`Searching for: "${searchData.keyword}" in ${searchData.category} (${searchData.timeframe})`);
  };

  const handleExploreLibrary = () => {
    window.scrollTo({ top: 600, behavior: 'smooth' });
  };

  return (
    <>
      <div className="relative min-h-screen bg-[#002147] overflow-hidden">
        {/* =======================
            Animated Background
        ======================= */}
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
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8B1538]/20 rounded-full blur-3xl"
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
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#FDB515]/10 rounded-full blur-3xl"
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

          {/* Pattern overlay */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* =======================
            Hero Content
        ======================= */}
        <div className="relative z-10 pt-28 pb-40 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              A Digital Home for
              <br />
              Faith, Learning & Growth
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-white/80 max-w-xl"
            >
              Explore sermons, devotionals, Bible studies, and church resources
              designed to strengthen your walk with God.
            </motion.p>

            <motion.button
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="mt-10 px-10 py-4 bg-[#C9A24D] text-[#121826] font-semibold rounded-full hover:bg-[#B8943E] transition-colors"
            >
              Explore the Library
            </motion.button>
          </motion.div>
        </div>
      </div>

        {/* =======================
            Library Search Widget
        ======================= */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="relative z-20 -mt-32 px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-gray-200 bg-gray-50">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const active = tab.id === activeTab;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 flex items-center justify-center gap-2 py-5 text-sm font-semibold transition-all ${
                      active
                        ? "text-[#8B1538] bg-white border-b-3 border-[#8B1538] shadow-sm"
                        : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="hidden lg:inline">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Search Form */}
            <div className="p-6 lg:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                {/* Search Input */}
                <div className="lg:col-span-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Search Resources
                  </label>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder={`Search ${activeTab}...`}
                      value={searchData.keyword}
                      onChange={(e) =>
                        setSearchData({
                          ...searchData,
                          keyword: e.target.value,
                        })
                      }
                      className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#8B1538] focus:border-[#8B1538] transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Category Dropdown */}
                <div className="lg:col-span-3 relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Category
                  </label>
                  <button
                    onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                    className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-xl text-left flex items-center justify-between hover:border-gray-400 transition-colors"
                  >
                    <span className="text-gray-700">{searchData.category}</span>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </button>
                  
                  <AnimatePresence>
                    {showCategoryDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full mt-2 w-full bg-white border-2 border-gray-200 rounded-xl shadow-xl z-50 max-h-60 overflow-y-auto"
                      >
                        {categories.map((category) => (
                          <button
                            key={category}
                            onClick={() => {
                              setSearchData({ ...searchData, category });
                              setShowCategoryDropdown(false);
                            }}
                            className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors text-gray-700 hover:text-[#8B1538] font-medium"
                          >
                            {category}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Timeframe Dropdown */}
                <div className="lg:col-span-3 relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Timeframe
                  </label>
                  <button
                    onClick={() => setShowTimeframeDropdown(!showTimeframeDropdown)}
                    className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-xl text-left flex items-center justify-between hover:border-gray-400 transition-colors"
                  >
                    <span className="text-gray-700">{searchData.timeframe}</span>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </button>
                  
                  <AnimatePresence>
                    {showTimeframeDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full mt-2 w-full bg-white border-2 border-gray-200 rounded-xl shadow-xl z-50"
                      >
                        {timeframes.map((timeframe) => (
                          <button
                            key={timeframe}
                            onClick={() => {
                              setSearchData({ ...searchData, timeframe });
                              setShowTimeframeDropdown(false);
                            }}
                            className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors text-gray-700 hover:text-[#8B1538] font-medium"
                          >
                            {timeframe}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mt-6 gap-4">
                <div className="flex items-start gap-2">
                  <Heart className="w-5 h-5 text-[#8B1538] mt-0.5" />
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Access faith-building content curated by your church community.<br />
                    <span className="text-[#8B1538] font-medium">Free for all members.</span>
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSearch}
                  className="px-8 py-3.5 bg-[#8B1538] text-white font-bold rounded-full hover:bg-[#6B1028] transition-colors shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  <Search className="w-5 h-5" />
                  Search Library
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* =======================
          Prayer / Help Button
      ======================= */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowPrayerModal(true)}
        className="fixed bottom-8 right-8 z-50 bg-[#FDB515] text-[#002147] p-4 rounded-full shadow-2xl hover:shadow-3xl transition-shadow"
        aria-label="Prayer & Support"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* =======================
          Prayer Modal
      ======================= */}
      <AnimatePresence>
        {showPrayerModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPrayerModal(false)}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-2xl shadow-2xl z-50 p-8"
            >
              <button
                onClick={() => setShowPrayerModal(false)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>

              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#FDB515] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-[#002147]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Prayer & Support</h3>
                <p className="text-gray-600">We're here for you. How can we pray with you today?</p>
              </div>

              <textarea
                placeholder="Share your prayer request..."
                rows={5}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl resize-none focus:ring-2 focus:ring-[#8B1538] focus:border-[#8B1538] outline-none mb-4"
              />

              <div className="flex gap-3">
                <button
                  onClick={() => setShowPrayerModal(false)}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    alert("Prayer request submitted. Our team will be praying for you!");
                    setShowPrayerModal(false);
                  }}
                  className="flex-1 px-6 py-3 bg-[#8B1538] text-white font-semibold rounded-full hover:bg-[#6B1028] transition-colors"
                >
                  Submit
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}