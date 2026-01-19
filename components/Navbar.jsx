"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu,
  X,
  ChevronDown,
  Search,
  User,
  BookOpen,
  Heart,
  Accessibility,
} from "lucide-react"

/* =====================================================
   MEGA MENU (more compact: reduced column gap & tighter spacing)
===================================================== */
function MegaMenu({ label, columns }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 text-gray-700 hover:text-[#8B1538] transition-colors font-medium">
        {label}
        <ChevronDown className="w-4 h-4" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.18 }}
            /* Constrained & compact dropdown */
            className="absolute left-1/2 top-full mt-4 -translate-x-1/2 bg-white border border-gray-200 shadow-xl rounded-lg z-50 w-[min(90vw,48rem)] max-w-[48rem] px-4 py-5"
          >
            <div className="grid grid-cols-2 gap-4">
              {columns.map((col) => (
                <div key={col.title}>
                  <h4 className="mb-2 text-sm font-bold text-[#002147] uppercase tracking-wide">
                    {col.title}
                  </h4>
                  <ul className="space-y-1">
                    {col.items.map((item) => (
                      <li key={item}>
                        <a
                          href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block text-sm text-gray-600 hover:text-[#8B1538] hover:translate-x-1 transition-all duration-200"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* =====================================================
   NAVBAR
===================================================== */
export default function ChurchLibraryNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* ================= TOP UTILITY BAR ================= */}
      <div className="bg-[#002147] text-white h-12">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-end gap-6 text-sm">
          <a href="/accessibility" className="flex items-center gap-2 hover:text-[#FDB515] transition-colors">
            <Accessibility className="w-4 h-4" />
            Support Us
          </a>
          <a href="/account" className="flex items-center gap-2 hover:text-[#FDB515] transition-colors">
            <User className="w-4 h-4" />
            My Account
          </a>
          <a href="/search" className="flex items-center gap-2 hover:text-[#FDB515] transition-colors">
            <Search className="w-4 h-4" />
            Search
          </a>
          <a
            href="/book"
            className="ml-2 bg-[#FDB515] text-[#002147] font-semibold px-5 py-2 rounded-full hover:bg-[#fdc645] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Support Us
          </a>
        </div>
      </div>

      {/* ================= MAIN NAV ================= */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* LEFT - LOGO & TAGLINE */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="bg-[#8B1538] p-2 rounded-lg group-hover:bg-[#6B1028] transition-colors">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="text-lg font-bold text-[#002147] uppercase tracking-tight">
                New Creation Life Ministries
              </div>
              <div className="text-xs text-[#8B1538] font-semibold">
                Living the Life, Manifesting God's Power
              </div>
            </div>
          </a>

          {/* CENTER (DESKTOP) - MAIN NAVIGATION */}
          <div className="hidden lg:flex items-center gap-8 text-sm">
             <a href="/" className="text-gray-700 hover:text-[#8B1538] transition-colors font-medium">
              Home
            </a>
            <MegaMenu
              label="Resources"
              columns={[
                {
                  title: "Scripture",
                  items: ["Bible Studies", "Commentaries", "Concordances", "Study Guides"],
                },
                {
                  title: "Sermons",
                  items: ["Audio Messages", "Video Series", "Manuscripts", "Sermon Notes"],
                },
              ]}
            />

            <a href="/collections" className="text-gray-700 hover:text-[#8B1538] transition-colors font-medium">
              Collections
            </a>
            <a href="/ministry" className="text-gray-700 hover:text-[#8B1538] transition-colors font-medium">
              Ministry
            </a>

            <a href="/about" className="text-gray-700 hover:text-[#8B1538] transition-colors font-medium">
              About Us
            </a>

          <a
            href="/webstore"
            className="ml-2 bg-[#FDB515] text-[#002147] font-semibold px-5 py-2 rounded-full hover:bg-[#fdc645] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Web Store
          </a>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button 
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors" 
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 z-40"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Slide-in Menu */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-2xl overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>

              {/* Mobile Menu Content */}
              <div className="p-6">
                {/* Logo */}
                <div className="mb-8 flex items-center gap-3">
                  <div className="bg-[#8B1538] p-2 rounded-lg">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-bold text-[#002147]">
                    Church Digital Library
                  </div>
                </div>

                {/* Navigation Links */}
                <nav className="space-y-1">
                  <a href="/" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#8B1538] rounded-lg transition-colors font-medium">
                    Home
                  </a>
                  
                  <div className="py-2">
                    <div className="px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-wide">
                      Resources
                    </div>
                    <a href="/bible-studies" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-[#8B1538] rounded-lg transition-colors">
                      Bible Studies
                    </a>
                    <a href="/sermons" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-[#8B1538] rounded-lg transition-colors">
                      Sermons
                    </a>
                    <a href="/devotionals" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-[#8B1538] rounded-lg transition-colors">
                      Devotionals
                    </a>
                    <a href="/theology" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-[#8B1538] rounded-lg transition-colors">
                      Theology
                    </a>
                  </div>

                  <a href="/collections" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#8B1538] rounded-lg transition-colors font-medium">
                    Collections
                  </a>
                  
                  <div className="py-2">
                    <div className="px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-wide">
                      Ministry
                    </div>
                    <a href="/worship" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-[#8B1538] rounded-lg transition-colors">
                      Worship Resources
                    </a>
                    <a href="/education" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-[#8B1538] rounded-lg transition-colors">
                      Education
                    </a>
                    <a href="/leadership" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-[#8B1538] rounded-lg transition-colors">
                      Leadership
                    </a>
                  </div>

                  <a href="/events" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#8B1538] rounded-lg transition-colors font-medium">
                    Events & Workshops
                  </a>
                  
                  <a href="/help" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#8B1538] rounded-lg transition-colors font-medium">
                    Help & Support
                  </a>
                  
                  <a href="/about" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#8B1538] rounded-lg transition-colors font-medium">
                    About Us
                  </a>
                </nav>

                {/* CTA Button */}
                <a
                  href="/support"
                  className="mt-6 flex items-center justify-center gap-2 bg-[#8B1538] text-white font-semibold px-6 py-4 rounded-full hover:bg-[#6B1028] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Heart className="w-5 h-5" />
                  Support Our Mission
                </a>

                {/* Quick Links */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="space-y-3 text-sm">
                    <a href="/account" className="flex items-center gap-2 text-gray-600 hover:text-[#8B1538]">
                      <User className="w-4 h-4" />
                      My Account
                    </a>
                    <a href="/search" className="flex items-center gap-2 text-gray-600 hover:text-[#8B1538]">
                      <Search className="w-4 h-4" />
                      Search Library
                    </a>
                    <a href="/accessibility" className="flex items-center gap-2 text-gray-600 hover:text-[#8B1538]">
                      <Accessibility className="w-4 h-4" />
                      Accessibility
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}