"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BookOpen, Bell, Mail, MapPin } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
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
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

export default function ChurchLibraryFeatures() {
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && agreed) {
      console.log("Subscribed:", { email, location });
      // Handle subscription logic
    }
  };

  return (
    <section className="py-16 lg:py-24 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Looking for spiritual resources?
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
            Access our comprehensive digital library with sermons, devotionals, and theological resources to deepen your faith journey.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8 lg:mb-12"
        >
          {/* Card 1: Premium Collection */}
          <motion.div variants={fadeInUp}>
            <Link href="/premium-collection">
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-shadow duration-500"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src="/church-library-premium.jpg"
                    alt="Premium Theological Collection"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#8B1538]/90 via-[#8B1538]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                </div>

                {/* Content Overlay */}
                <div className="relative h-full flex flex-col justify-between p-8 lg:p-10">
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="self-start"
                  >
                    <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/30">
                      <p className="text-white font-semibold text-lg italic">Featured</p>
                    </div>
                  </motion.div>

                  {/* Title */}
                  <div>
                    <motion.div
                      className="w-20 h-1 bg-white mb-4"
                      initial={{ width: 0 }}
                      whileInView={{ width: 80 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    />
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                      The Premium Collection
                    </h3>
                    <p className="text-white/90 text-base mb-4">
                      Access exclusive theological texts, historical church documents, and rare Biblical manuscripts
                    </p>
                    <motion.div
                      className="flex items-center gap-2 text-white font-medium group-hover:gap-4 transition-all duration-300"
                    >
                      <span>Explore collection</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        →
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Card 2: Special Offer */}
          <motion.div variants={fadeInUp}>
            <Link href="/membership-offer">
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-shadow duration-500"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src="/church-community.jpg"
                    alt="Church Community Reading"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/90 via-[#002147]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                </div>

                {/* Content Overlay */}
                <div className="relative h-full flex flex-col justify-end p-8 lg:p-10">
                  <motion.div
                    className="w-20 h-1 bg-white mb-4"
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  />
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                    Free Access for New Members
                  </h3>
                  <p className="text-white/90 text-base mb-4">
                    Join our community and get unlimited access to over 10,000 Christian resources
                  </p>
                  <motion.div
                    className="flex items-center gap-2 text-white font-medium group-hover:gap-4 transition-all duration-300"
                  >
                    <span>Join today</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      →
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - Image */}
            <div className="relative h-[300px] lg:h-auto">
              <Image
                src="/church-reading.jpg"
                alt="Church Library Members"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30 lg:to-black/50" />
            </div>

            {/* Right Side - Form */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 lg:p-12 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#8B1538] rounded-lg">
                    <Bell className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white">
                    Never miss an update
                  </h3>
                </div>

                <p className="text-gray-300 text-base lg:text-lg mb-8">
                  Subscribe to receive weekly devotionals, new resource alerts, and exclusive spiritual content.
                </p>

                {/* Subscription Form */}
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Email Input */}
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email address"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8B1538] focus:bg-white/15 transition-all"
                      />
                    </div>

                    {/* Location Input */}
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Your church location"
                        className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8B1538] focus:bg-white/15 transition-all"
                      />
                    </div>
                  </div>

                  {/* Checkbox */}
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-1 w-5 h-5 rounded border-white/30 text-[#8B1538] focus:ring-[#8B1538] focus:ring-offset-0 bg-white/10 cursor-pointer"
                      required
                    />
                    <span className="text-sm text-gray-300 leading-relaxed">
                      I'd like to receive devotionals and updates from the Church Digital Library. I understand the{" "}
                      <Link href="/privacy" className="text-[#FDB515] hover:underline">
                        Privacy Policy
                      </Link>{" "}
                      and acknowledge that I can unsubscribe anytime using the link at the bottom of each message.
                    </span>
                  </label>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full lg:w-auto px-10 py-4 bg-[#8B1538] hover:bg-[#6B1028] text-white font-semibold rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!agreed || !email}
                  >
                    Subscribe to updates
                  </motion.button>
                </form>

                {/* Additional Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="mt-8 pt-6 border-t border-white/10"
                >
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      <span>10,000+ Resources</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>•</span>
                      <span>Weekly Updates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>•</span>
                      <span>Free Access</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}