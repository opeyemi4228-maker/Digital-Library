"use client";

import { motion } from "framer-motion";
import { 
  BookOpen, 
  Mail, 
  Facebook, 
  Twitter, 
  Youtube, 
  Instagram,
  Linkedin,
  ExternalLink
} from "lucide-react";
import { useState } from "react";

export default function ChurchLibraryFooter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      console.log("Subscribed:", email);
      setEmail("");
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="bg-[#2a2a2a] text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* About Us Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-white font-bold text-lg mb-4">About us</h3>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="hover:text-white transition-colors duration-200 flex items-center gap-2">
                  About us
                </a>
              </li>
              <li>
                <a href="/ministry" className="hover:text-white transition-colors duration-200 flex items-center gap-2">
                  Our Ministry
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="/leadership" className="hover:text-white transition-colors duration-200 flex items-center gap-2">
                  Leadership Team
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="/mission" className="hover:text-white transition-colors duration-200">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="/beliefs" className="hover:text-white transition-colors duration-200">
                  Statement of Faith
                </a>
              </li>
              <li>
                <a href="/community" className="hover:text-white transition-colors duration-200">
                  Our Communities
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Help Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-white font-bold text-lg mb-4">Help</h3>
            <ul className="space-y-3">
              <li>
                <a href="/contact" className="hover:text-white transition-colors duration-200">
                  Help and Contact
                </a>
              </li>
              <li>
                <a href="/updates" className="hover:text-white transition-colors duration-200">
                  Ministry Updates
                </a>
              </li>
              <li>
                <a href="/support" className="hover:text-white transition-colors duration-200">
                  Technical Support
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-white transition-colors duration-200">
                  Frequently asked questions
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Resources Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="/sermons" className="hover:text-white transition-colors duration-200">
                  Sermon Library
                </a>
              </li>
              <li>
                <a href="/bible-studies" className="hover:text-white transition-colors duration-200">
                  Bible Studies
                </a>
              </li>
              <li>
                <a href="/devotionals" className="hover:text-white transition-colors duration-200">
                  Daily Devotionals
                </a>
              </li>
              <li>
                <a href="/guides" className="hover:text-white transition-colors duration-200">
                  Study Guides
                </a>
              </li>
              <li>
                <a href="/worship" className="hover:text-white transition-colors duration-200">
                  Worship Resources
                </a>
              </li>
              <li>
                <a href="/reading-plans" className="hover:text-white transition-colors duration-200">
                  Reading Plans
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Membership Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-white font-bold text-lg mb-4">Membership</h3>
            <ul className="space-y-3">
              <li>
                <a href="/login" className="hover:text-white transition-colors duration-200">
                  Log in to your account
                </a>
              </li>
              <li>
                <a href="/join" className="hover:text-white transition-colors duration-200">
                  Join our community
                </a>
              </li>
              <li>
                <a href="/partners" className="hover:text-white transition-colors duration-200">
                  Ministry Partners
                </a>
              </li>
              <li>
                <a href="/giving" className="hover:text-white transition-colors duration-200">
                  Support Our Mission
                </a>
              </li>
              <li>
                <a href="/volunteer" className="hover:text-white transition-colors duration-200">
                  Volunteer Opportunities
                </a>
              </li>
              <li>
                <a href="/benefits" className="hover:text-white transition-colors duration-200">
                  Membership Benefits
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-12"></div>

        {/* Newsletter and App Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Newsletter Subscription */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-white font-bold text-xl mb-3">Subscribe to our special offers</h3>
            <p className="text-gray-400 mb-6">
              Receive weekly devotionals and inspiring content.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="flex-1 px-4 py-3 bg-white text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B1538]"
              />
              <button
                onClick={handleSubscribe}
                className="px-8 py-3 bg-transparent border border-white text-white font-semibold rounded-md hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-400">
              For details on how we use your information, please see our{" "}
              <a href="/privacy" className="text-gray-300 hover:text-white underline">
                privacy policy
              </a>
              .
            </p>
            <div className="mt-4">
              <a 
                href="/unsubscribe" 
                className="text-sm text-gray-400 hover:text-white underline"
              >
                Unsubscribe or change your preferences
              </a>
            </div>
          </motion.div>

          {/* Mobile App and Social Media */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-white font-bold text-xl mb-3">Church Library App</h3>
            <p className="text-gray-400 mb-6">
              Access spiritual resources on the go.
            </p>
            
            {/* App Store Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <a 
                href="#" 
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <div className="bg-black rounded-lg px-4 py-2.5 flex items-center gap-2 border border-gray-600">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="white">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] text-gray-300">Download on the</div>
                    <div className="text-sm font-semibold text-white">App Store</div>
                  </div>
                </div>
              </a>

              <a 
                href="#" 
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <div className="bg-black rounded-lg px-4 py-2.5 flex items-center gap-2 border border-gray-600">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] text-gray-300">GET IT ON</div>
                    <div className="text-sm font-semibold text-white">Google Play</div>
                  </div>
                </div>
              </a>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-white font-semibold mb-4">Connect with us</h4>
              <p className="text-gray-400 mb-4 text-sm">Share your faith journey.</p>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#8B1538] flex items-center justify-center transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#8B1538] flex items-center justify-center transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#8B1538] flex items-center justify-center transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#8B1538] flex items-center justify-center transition-colors duration-300"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#8B1538] flex items-center justify-center transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          {/* Legal Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href="/contact" className="hover:text-white transition-colors">
              Contact us
            </a>
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms and conditions
            </a>
            <a href="/cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
            <a href="/security" className="hover:text-white transition-colors">
              Security
            </a>
            <a href="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>

          {/* Logo and Copyright */}
          <div className="flex items-center gap-4">
            <div className="bg-[#8B1538] px-6 py-4 rounded">
              <div className="flex items-center gap-2">
                <BookOpen className="w-8 h-8 text-white" />
                <div>
                  <div className="text-white font-bold text-lg leading-tight">New Creation Life Ministries</div>
                  <div className="text-white text-xs">Living the Life, Manifesting God's Power</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center lg:text-left">
          <p className="text-sm text-gray-400">
            © 2025 Church Digital Library. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}