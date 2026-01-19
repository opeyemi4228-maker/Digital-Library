"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function FeaturedResources() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const resources = [
    {
      id: 1,
      category: "BIBLICAL STUDIES",
      title: "Old Testament Theology",
      description: "Access comprehensive studies until 22 Dec 25",
      price: "Free Access",
      image: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?w=800&q=80"
    },
    {
      id: 2,
      category: "BIBLICAL STUDIES",
      title: "New Testament Insights",
      description: "Premium commentary access until 22 Dec 25",
      price: "from USD 29*",
      image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&q=80"
    },
    {
      id: 3,
      category: "BIBLICAL STUDIES",
      title: "Systematic Theology",
      description: "Complete collection available until 22 Dec 25",
      price: "from USD 49*",
      image: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=800&q=80"
    }
  ];

  return (
    <section className="py-16 lg:py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-2xl lg:text-3xl text-gray-700">
              Featured 
              <span className="font-bold text-gray-900"> Resources</span>
            </h2>
            <div className="flex items-center gap-2 bg-[#8B1538] text-white px-4 py-2 rounded-lg">
              <span className="font-bold text-sm">Best Price</span>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Resource Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {resources.map((resource, index) => (
            <motion.div
              key={resource.id}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer group">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${resource.image})`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs font-semibold text-gray-500 tracking-widest mb-2">
                    {resource.category}
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {resource.description}
                  </p>
                  <p className="text-lg font-bold text-gray-900">
                    {resource.price}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {/* Explore More */}
          <motion.a
            href="/resources"
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-gray-900 font-semibold hover:text-[#8B1538] transition-colors group"
          >
            <span className="border-b-2 border-transparent group-hover:border-[#8B1538] transition-all">
              Explore more resources
            </span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>

          {/* See More Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-md hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            See more resources
          </motion.button>

          {/* Browse Catalog */}
          <motion.a
            href="/catalog"
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-gray-900 font-semibold hover:text-[#8B1538] transition-colors group"
          >
            <span className="border-b-2 border-transparent group-hover:border-[#8B1538] transition-all">
              Browse our catalog
            </span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Terms */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-8"
        >
          <p className="text-sm text-gray-500">*Terms and conditions apply</p>
        </motion.div>
      </div>
    </section>
  );
}