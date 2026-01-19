"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Heart,
  Users,
  Target,
  Eye,
  Award,
  TrendingUp,
  Globe,
  Clock,
  CheckCircle,
  Quote,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { assets } from "@/assets/assets";
import Image from "next/image";

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

export default function AboutUsPage() {
  const [activeValue, setActiveValue] = useState(0);

  const stats = [
    { number: "10,000+", label: "Resources Available", icon: BookOpen },
    { number: "5,000+", label: "Active Members", icon: Users },
    { number: "15+", label: "Years of Service", icon: Award },
    { number: "24/7", label: "Access Anytime", icon: Clock }
  ];

  const values = [
    {
      icon: Heart,
      title: "Faith-Centered",
      description: "Everything we do is rooted in biblical principles and dedicated to strengthening your relationship with God."
    },
    {
      icon: Users,
      title: "Community-Driven",
      description: "We believe in the power of shared learning and growing together as a body of believers."
    },
    {
      icon: Target,
      title: "Excellence in Service",
      description: "We are committed to providing high-quality, thoroughly vetted resources that honor God and serve His people."
    },
    {
      icon: Globe,
      title: "Accessible to All",
      description: "Breaking down barriers to spiritual growth by making resources freely available to everyone, everywhere."
    }
  ];

  const team = [
    {
      name: "Apostle Kingsley Lawend",
      role: "General Overseer",
      image: assets.Apostle1,
      bio: "20+ years in ministry leadership"
    },
    {
      name: "Pastor Marlien Lawend",
      role: "Content Curator",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      bio: "PhD in Theological Studies"
    },
    {
      name: "Pastor Charles Adakole",
      role: "Lead Pastor, Abuja Church",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      bio: "Digital ministry specialist"
    },
    {
      name: "Minister Shenn Damon",
      role: "Lead Pastor, Netherland Church",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      bio: "Digital ministry specialist"
    },
    {
      name: "Minister Victor Gonzalez",
      role: "Lead Pastor, Venezuela Church",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      bio: "Passionate about discipleship"
    }
  ];

  const milestones = [
    { year: "2023", event: "Library Founded", description: "Started with 10+ physical books" },
    { year: "2025", event: "Digital Transition", description: "Launched our first online platform" },
    { year: "2026", event: "10,000 Members", description: "Reached major community milestone" },
    { year: "2026", event: "Mobile App Launch", description: "Made resources accessible anywhere" },
    { year: "2026", event: "AI-Powered Search", description: "Enhanced resource discovery" }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#002147] via-[#1a3a5c] to-[#8B1538] py-24 lg:py-32 overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-[#FDB515]/20 rounded-full blur-3xl"
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
              <Sparkles className="w-4 h-4 text-[#FDB515]" />
              <span className="text-white/90 font-medium text-sm">About Our Ministry</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl lg:text-7xl font-bold text-white mb-6"
            >
              Empowering Faith Through
              <br />
              <span className="text-[#FDB515]">Knowledge & Community</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-white/80 max-w-3xl mx-auto"
            >
              Since 2008, we've been dedicated to providing believers with access to 
              quality spiritual resources that inspire, educate, and transform lives.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#8B1538] rounded-2xl mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-[#002147] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Mission */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="bg-gradient-to-br from-[#8B1538] to-[#6B1028] rounded-3xl p-8 lg:p-12 text-white"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                To provide accessible, high-quality spiritual resources that equip believers 
                to grow in their faith, deepen their understanding of Scripture, and live out 
                their calling with confidence and purpose.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FDB515] mt-1 flex-shrink-0" />
                  <span className="text-white/90">Curate theologically sound resources</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FDB515] mt-1 flex-shrink-0" />
                  <span className="text-white/90">Foster a community of learners</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FDB515] mt-1 flex-shrink-0" />
                  <span className="text-white/90">Make discipleship resources accessible</span>
                </li>
              </ul>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="bg-gradient-to-br from-[#002147] to-[#1a3a5c] rounded-3xl p-8 lg:p-12 text-white"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                To become the leading digital platform where believers worldwide can discover, 
                learn, and grow spiritually through comprehensive, biblically-grounded resources 
                that transform lives and communities.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FDB515] mt-1 flex-shrink-0" />
                  <span className="text-white/90">Reach 100,000+ believers globally</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FDB515] mt-1 flex-shrink-0" />
                  <span className="text-white/90">Partner with 500+ churches worldwide</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FDB515] mt-1 flex-shrink-0" />
                  <span className="text-white/90">Offer multilingual resources</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape how we serve our community
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => setActiveValue(index)}
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                    activeValue === index ? 'bg-[#8B1538]' : 'bg-gray-100'
                  } transition-colors`}>
                    <Icon className={`w-7 h-7 ${
                      activeValue === index ? 'text-white' : 'text-gray-600'
                    }`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Our Story / Timeline */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to a thriving digital ministry
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#8B1538] to-[#FDB515] hidden lg:block" />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-12"
            >
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg inline-block">
                      <div className="text-3xl font-bold text-[#8B1538] mb-2">
                        {milestone.year}
                      </div>
                      <div className="text-xl font-bold text-gray-900 mb-2">
                        {milestone.event}
                      </div>
                      <div className="text-gray-600">
                        {milestone.description}
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:block w-6 h-6 bg-[#8B1538] rounded-full border-4 border-white shadow-lg z-10" />

                  <div className="flex-1" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dedicated servants passionate about helping you grow in your faith
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square bg-gradient-to-br from-[#002147] to-[#8B1538]">
                  <Image
                    className="w-full h-full object-cover"
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                  />

                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#8B1538] font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-br from-[#002147] to-[#1a3a5c]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <Quote className="w-16 h-16 text-[#FDB515] mx-auto mb-8" />
            <blockquote className="text-2xl lg:text-3xl font-medium text-white mb-8 leading-relaxed">
              "The Church Digital Library has transformed how our congregation accesses 
              spiritual resources. It's become an invaluable tool for discipleship and 
              spiritual growth in our community."
            </blockquote>
            <div className="text-[#FDB515] font-semibold text-lg">
              Apostle Kingsley Lawend
            </div>
            <div className="text-white/70">
              Presiding, New Creation Life Ministries
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="bg-gradient-to-r from-[#8B1538] to-[#6B1028] rounded-3xl p-12 lg:p-16 text-center text-white"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Join Our Community
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Become part of a growing community of believers committed to spiritual growth 
                and biblical learning
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-[#8B1538] font-bold rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors"
                >
                  Contact Us
                </motion.button>
              </div>

              <div className="flex flex-col lg:flex-row justify-center gap-8 text-white/90">
                <div className="flex items-center justify-center gap-3">
                  <Mail className="w-5 h-5" />
                  <span>library@church.org</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span>+234 (0) 800-LIBRARY</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <span>Abuja, Nigeria</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}