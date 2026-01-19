"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { assets } from "@/assets/assets";
const experiences = [
  {
    id: 1,
    category: "SPIRITUAL GROWTH",
    title: "Create your Faith Journey",
    image: assets.Apostle3,
    link: "/faith-journey",
    size: "large",
  },
  {
    id: 2,
    category: "RESOURCE COLLECTIONS",
    title: "Bible Studies",
    image: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?w=800&q=80",
    link: "/bible-studies",
    size: "small",
  },
  {
    id: 3,
    category: "RESOURCE COLLECTIONS",
    title: "Sermon Library",
    image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&q=80",
    link: "/sermons",
    size: "small",
  },
  {
    id: 4,
    category: "RESOURCE COLLECTIONS",
    title: "Devotionals",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    link: "/devotionals",
    size: "small",
  },
  {
    id: 5,
    category: "RESOURCE COLLECTIONS",
    title: "Worship Resources",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    link: "/worship",
    size: "small",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function ChurchLibraryExperience() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-16 px-6 lg:py-24 lg:px-12 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.p
            variants={titleVariants}
            className="text-xs lg:text-sm font-medium tracking-[0.2em] text-gray-600 mb-6 uppercase"
          >
            Exploring with Church Digital Library
          </motion.p>

          <motion.h1
            variants={titleVariants}
            className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Make it an <span className="italic text-[#8B1538]">incredible</span> journey
          </motion.h1>

          <motion.p
            variants={titleVariants}
            className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Explore our comprehensive library and plan an unforgettable spiritual
            growth experience beyond your expectations.
          </motion.p>
        </motion.div>
      </section>

      {/* Experience Grid */}
      <section className="px-6 lg:px-12 pb-16 lg:pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {/* Large Card */}
          <motion.div variants={itemVariants} className="lg:col-span-2 lg:row-span-2">
            <ExperienceCard experience={experiences[0]} size="large" />
          </motion.div>

          {/* Small Cards */}
          {experiences.slice(1).map((experience) => (
            <motion.div key={experience.id} variants={itemVariants}>
              <ExperienceCard experience={experience} size="small" />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

function ExperienceCard({ experience, size }) {
  const isLarge = size === "large";

  return (
    <a href={experience.link}>
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className={`relative overflow-hidden rounded-2xl bg-gray-900 group cursor-pointer
          shadow-lg hover:shadow-2xl transition-shadow duration-500
          ${isLarge ? "h-[400px] lg:h-full" : "h-[300px] lg:h-[280px]"}`}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${experience.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
        </div>

        {/* Content */}
        <div
          className={`relative h-full flex flex-col justify-end p-6 lg:p-8 ${
            isLarge ? "lg:p-12" : ""
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="text-xs lg:text-sm font-medium tracking-[0.15em] text-white/80 mb-3 uppercase">
              {experience.category}
            </p>

            <h2
              className={`font-bold text-white mb-4 ${
                isLarge
                  ? "text-3xl lg:text-5xl xl:text-6xl leading-tight"
                  : "text-xl lg:text-2xl"
              }`}
            >
              {experience.title}
            </h2>

            <motion.div
              className="w-16 h-1 bg-[#8B1538] mb-4"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            />

            <div className="flex items-center gap-2 text-white font-medium group-hover:gap-4 transition-all duration-300">
              <span className="text-sm lg:text-base">Learn more</span>
              <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </motion.div>
        </div>

        {/* Hover Border */}
        <div className="absolute inset-0 border-2 border-white/0 rounded-2xl group-hover:border-white/20 transition-colors duration-500 pointer-events-none" />
      </motion.div>
    </a>
  );
}