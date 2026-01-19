"use client";

import { motion } from "framer-motion";
import { 
  BookOpen, Heart, Users, Globe, MapPin, Phone, Mail, 
  ChevronRight, Sparkles, Target, Award, Church, User
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const locations = [
  {
    country: "Nigeria",
    city: "Abuja",
    address: "6th Avenue Gwarimpa, Abuja",
    phone: null,
    isHQ: false,
    pastor: "Pastor Charles Adakole"
  },
  {
    country: "Netherlands",
    city: "Zoeterwoude",
    address: "Energieweg 14, 2382 NJ Zoeterwoude",
    phone: "+31 (0)6 304 770 48",
    isHQ: false,
    pastor: "Minister Shenn Damon"
  },
  {
    country: "USA",
    city: "Florida",
    address: "3201 Davie Blvd, Fort Lauderdale, FL 33312",
    phone: "+1 (321) 714-0794",
    isHQ: false,
    pastor: null
  },
  {
    country: "USA",
    city: "Houston, Texas",
    address: "Headquarters",
    phone: null,
    isHQ: true,
    pastor: null
  },
  {
    country: "Venezuela",
    city: "Venezuela",
    address: null,
    phone: null,
    isHQ: false,
    pastor: "Minister Victor Gonzalez"
  }
];

const leadership = [
  {
    name: "Apostle Kingsley Lawend",
    position: "President",
    role: "Founder & Senior Pastor",
    gradient: "from-[#8B1538] to-[#6B1028]"
  },
  {
    name: "Pastor Marlein Lawend",
    position: "Europe Coordinator",
    role: "Regional Overseer",
    gradient: "from-[#002147] to-[#003366]"
  },
  {
    name: "Pastor Charles Adakole",
    position: "Nigeria Pastor",
    role: "Country Leader",
    gradient: "from-blue-600 to-blue-800"
  },
  {
    name: "Minister Victor Gonzalez",
    position: "Venezuela Minister",
    role: "Country Leader",
    gradient: "from-purple-600 to-purple-800"
  },
  {
    name: "Minister Shenn Damon",
    position: "Netherlands Pastor",
    role: "Country Leader",
    gradient: "from-rose-600 to-rose-800"
  }
];

const coreValues = [
  {
    icon: BookOpen,
    title: "Word-Centered",
    description: "We believe in the power of God's word to change lives and value the practical application of His word",
    color: "from-blue-600 to-blue-800"
  },
  {
    icon: Heart,
    title: "Love of God",
    description: "Reaching the world with the love of God through His undiluted and uncompromising Word and standard",
    color: "from-rose-600 to-rose-800"
  },
  {
    icon: Users,
    title: "Leadership Development",
    description: "Commissioned with a mandate to raise godly leaders and saints ready to give their lives for the gospel",
    color: "from-purple-600 to-purple-800"
  },
  {
    icon: Target,
    title: "End-Time Mission",
    description: "An end-time revolution ready to reach out to the lost, equip the saved and release leaders",
    color: "from-amber-600 to-amber-800"
  }
];

export default function MinistryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#002147] via-[#003366] to-[#002147] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-yellow-400" />
              <span className="text-sm font-medium tracking-wider uppercase text-yellow-400">
                Not Church As Usual
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              New Creation Life Ministries{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                International
              </span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed"
            >
              A vibrant, dynamic, multi-ethnic and non-denominational ministry commissioned with a mandate to raise godly leaders and saints ready to give their lives for the gospel of our Lord and Savior Jesus Christ.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-4">
              <button className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-xl transition-colors shadow-lg">
                Join Our Movement
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold rounded-xl transition-colors border border-white/20">
                Find a Location
              </button>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="rgb(249, 250, 251)"/>
          </svg>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 -mt-16 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-gradient-to-br from-[#8B1538] to-[#6B1028] text-white rounded-3xl p-8 lg:p-12 shadow-2xl"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-white/20 rounded-xl">
              <Target className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-white/90 leading-relaxed mb-4">
                To reach the world with the love of God through His undiluted and uncompromising Word and standard. To position the saints for the prolific move of God's Spirit in these last days.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                We are committed to ministering to your destiny; to help you through the Word of God to become all that God has called you to become and to be an example of His very nature in every facet of your life, home and community.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Who We Are */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              An End-Time Revolution
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              NCLM is not a "church as usual," but a revolution!
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We believe in the power of God's word to change lives and value the practical application of His word to make a tremendous difference in who we are and what we do, and called to do. We also understand that believing and obeying His Word leads us in a discovery of real life and hope for eternity.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              New Creation Life Ministries International is an end-time revolution ready to reach out to the lost, equip the saved and release leaders into their God-given assignments for the body of Christ in the end time.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The foundation of our ministry and mission
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {coreValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${value.color} mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Leadership
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Godly leaders committed to raising up the next generation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 group"
              >
                <div className={`h-2 bg-gradient-to-r ${leader.gradient}`}></div>
                <div className="p-6">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${leader.gradient} mb-4`}>
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-[#8B1538] font-semibold mb-1">{leader.position}</p>
                  <p className="text-gray-600 text-sm">{leader.role}</p>
                </div>
                <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${leader.gradient} opacity-5 rounded-tl-full`}></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Locations Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Globe className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl lg:text-5xl font-bold">Our Locations</h2>
              </div>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Find a New Creation Life Ministries church near you
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.map((location, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.03 }}
                  className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border ${location.isHQ ? 'border-yellow-400' : 'border-white/20'} hover:bg-white/15 transition-all duration-300`}
                >
                  {location.isHQ && (
                    <div className="mb-3">
                      <span className="px-3 py-1 bg-yellow-400 text-gray-900 text-xs font-bold rounded-full">
                        HEADQUARTERS
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-1">{location.country}</h3>
                      <p className="text-gray-300 text-sm">{location.city}</p>
                    </div>
                  </div>

                  {location.address && (
                    <p className="text-gray-300 mb-3 text-sm leading-relaxed">
                      {location.address}
                    </p>
                  )}

                  {location.phone && (
                    <div className="flex items-center gap-2 mb-2">
                      <Phone className="w-4 h-4 text-yellow-400" />
                      <a href={`tel:${location.phone}`} className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                        {location.phone}
                      </a>
                    </div>
                  )}

                  {location.pastor && (
                    <div className="mt-4 pt-4 border-t border-white/20">
                      <p className="text-sm text-gray-400">Pastor</p>
                      <p className="text-white font-semibold">{location.pastor}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-gradient-to-br from-[#002147] to-[#003366] rounded-3xl p-8 lg:p-12 text-white text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Have questions or want to learn more about New Creation Life Ministries International?
          </p>
          
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-yellow-400" />
              <a href="mailto:info@nclmnation.com" className="text-xl hover:text-yellow-400 transition-colors">
                info@nclmnation.com
              </a>
            </div>
          </div>

          <button className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-xl transition-colors shadow-lg">
            Contact Us Today
          </button>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-[#8B1538] to-[#6B1028] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Join the Revolution
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Become part of an end-time movement that's reaching the lost, equipping the saved, and releasing leaders into their God-given assignments.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="px-8 py-4 bg-white hover:bg-gray-100 text-[#8B1538] font-bold rounded-xl transition-colors shadow-lg flex items-center gap-2">
                Visit A Location
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white font-semibold rounded-xl transition-colors border border-white/30">
                Watch Online
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}