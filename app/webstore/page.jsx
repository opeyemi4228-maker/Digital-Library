"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { 
  BookOpen, Heart, HandHeart, Search, Filter, ChevronDown, Star,
  ShoppingCart, ArrowRight, Sparkles, TrendingUp, Clock, X,
  Minus, Plus, Trash2, CreditCard, Building2, CheckCircle2, ArrowLeft
} from "lucide-react";
import { assets } from "@/assets/assets";

const categories = [
  { id: "books", name: "Books", icon: BookOpen, color: "from-blue-600 to-blue-800", count: "2,500+ items", description: "Theological texts, commentaries, and Christian literature" },
  { id: "devotionals", name: "Devotionals", icon: Heart, color: "from-rose-600 to-rose-800", count: "1,200+ items", description: "Daily devotionals and spiritual growth materials" },
  { id: "prayer", name: "Prayer Guides", icon: HandHeart, color: "from-purple-600 to-purple-800", count: "800+ items", description: "Prayer journals, guides, and meditation resources" }
];

const featuredProducts = [
  { id: 1, title: "New Creation and the Mere Men", author: "Apostle Kingsley Lawend", category: "books", price: 19.99, rating: 4.9, reviews: 1284, image: assets.NewCreation, badge: "New" },
  { id: 2, title: "30 Days of Transformation", author: "Apostle Kingsley Lawend", category: "devotionals", price: 14.99, rating: 4.8, reviews: 856, image: assets.Days, badge: "Best Seller" },
  { id: 3, title: "The Difference Maker", author: "Apostle Kingsley Lawend", category: "books", price: 12.99, rating: 4.7, reviews: 642, image: assets.Difference, badge: "Trending" },
  { id: 4, title: "60 Days Prayer Guide Vol. 1", author: "Apostle Kingsley Lawend", category: "prayer", price: 24.99, rating: 4.9, reviews: 923, image: assets.PrayerGuide, badge: "Featured" }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

export default function ChurchWebStore() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState("cart");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [orderNumber, setOrderNumber] = useState("");

  const addToCart = (productId) => {
    const product = featuredProducts.find(p => p.id === productId);
    const existingItem = cartItems.find(item => item.id === productId);
    if (existingItem) {
      setCartItems(cartItems.map(item => item.id === productId ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, change) => {
    setCartItems(cartItems.map(item => {
      if (item.id === productId) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const paymentMethods = {
    Nigeria: [
      { id: "bank-transfer", name: "Bank Transfer", icon: Building2, description: "Direct bank transfer" },
      { id: "paystack", name: "Paystack", icon: CreditCard, description: "Card & mobile money" }
    ],
    Netherlands: [
      { id: "ideal", name: "iDEAL", icon: Building2, description: "Dutch online banking" },
      { id: "paystack-nl", name: "Paystack", icon: CreditCard, description: "Credit/Debit card" }
    ],
    USA: [
      { id: "paypal", name: "PayPal", icon: CreditCard, description: "PayPal account" },
      { id: "cashapp", name: "Cash App", icon: CreditCard, description: "Cash App payment" },
      { id: "card", name: "Credit/Debit Card", icon: CreditCard, description: "Visa, Mastercard, Amex" }
    ]
  };

  const completeOrder = () => {
    setOrderNumber(Math.random().toString(36).substr(2, 9).toUpperCase());
    setCheckoutStep("confirmation");
  };

  const filteredProducts = selectedCategory ? featuredProducts.filter(p => p.category === selectedCategory) : featuredProducts;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="relative bg-gradient-to-br from-[#002147] via-[#003366] to-[#002147] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center max-w-4xl mx-auto">
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-yellow-400" />
              <span className="text-sm font-medium tracking-wider uppercase text-yellow-400">Digital Church Store</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Discover Resources for Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">Spiritual Journey</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg lg:text-xl text-gray-300 mb-10">
              Browse thousands of books, devotionals, and prayer guides to strengthen your faith
            </motion.p>

            <motion.div variants={fadeInUp} className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search for books, authors, or topics..." className="w-full pl-14 pr-6 py-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white/15 transition-all" />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 px-6 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-xl transition-colors">Search</button>
              </div>
            </motion.div>

            <motion.button variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setIsCartOpen(true)} className="fixed top-24 right-6 z-50 bg-[#8B1538] hover:bg-[#6B1028] text-white p-4 rounded-full shadow-2xl transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">{cartCount}</motion.span>
              )}
            </motion.button>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="rgb(249, 250, 251)"/>
          </svg>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 -mt-20 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.id;
            return (
              <motion.button key={category.id} variants={fadeInUp} onClick={() => setSelectedCategory(isSelected ? null : category.id)} whileHover={{ y: -8, scale: 1.02 }} whileTap={{ scale: 0.98 }} className={`relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 text-left group ${isSelected ? "ring-4 ring-yellow-400" : ""}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                <div className="relative p-8 lg:p-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${category.color} mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-sm font-medium text-gray-600 mb-3">{category.count}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">{category.description}</p>
                  <div className="flex items-center gap-2 text-[#8B1538] font-semibold group-hover:gap-4 transition-all">
                    <span>Browse collection</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                  {isSelected && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute top-6 right-6 bg-yellow-400 text-gray-900 px-4 py-1.5 rounded-full text-sm font-bold">Selected</motion.div>}
                </div>
                <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} opacity-5 rounded-tl-full`} />
              </motion.button>
            );
          })}
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 bg-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold text-gray-900">{selectedCategory ? `${categories.find(c => c.id === selectedCategory)?.name}` : "Featured Products"}</h2>
            <span className="text-sm text-gray-600">{filteredProducts.length} items</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-colors">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-colors">
              <span className="text-sm font-medium">Sort by</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <motion.div key={product.id} variants={fadeInUp} whileHover={{ y: -8 }} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-64 bg-gray-200 overflow-hidden">
                <Image src={product.image} alt={product.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${product.badge === "Best Seller" ? "bg-yellow-400 text-gray-900" : product.badge === "New" ? "bg-green-500 text-white" : product.badge === "Featured" ? "bg-purple-500 text-white" : "bg-red-500 text-white"}`}>{product.badge}</span>
                </div>
                <motion.button onClick={() => addToCart(product.id)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="absolute bottom-4 right-4 p-3 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-yellow-400">
                  <ShoppingCart className="w-5 h-5 text-[#8B1538]" />
                </motion.button>
              </div>
              <div className="p-5">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">{categories.find(c => c.id === product.category)?.name}</p>
                <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2">{product.title}</h3>
                <p className="text-sm text-gray-600 mb-3">by {product.author}</p>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />)}
                  </div>
                  <span className="text-xs text-gray-600">{product.rating} ({product.reviews})</span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-2xl font-bold text-[#8B1538]">€{product.price}</span>
                  <motion.button onClick={() => addToCart(product.id)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-4 py-2 bg-[#8B1538] hover:bg-[#6B1028] text-white text-sm font-semibold rounded-xl transition-colors">Add to Cart</motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-gradient-to-r from-[#002147] to-[#003366] hover:from-[#003366] hover:to-[#002147] text-white font-semibold rounded-full shadow-lg transition-all">Load More Products</motion.button>
        </motion.div>
      </section>

      <section className="bg-gradient-to-r from-[#8B1538] to-[#6B1028] text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center">
              <TrendingUp className="w-10 h-10 mb-3 text-yellow-400" />
              <p className="text-3xl font-bold mb-1">4,500+</p>
              <p className="text-white/80">Total Resources</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center">
              <Star className="w-10 h-10 mb-3 text-yellow-400" />
              <p className="text-3xl font-bold mb-1">4.8★</p>
              <p className="text-white/80">Average Rating</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center">
              <Clock className="w-10 h-10 mb-3 text-yellow-400" />
              <p className="text-3xl font-bold mb-1">24/7</p>
              <p className="text-white/80">Instant Access</p>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isCartOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => checkoutStep !== "confirmation" && setIsCartOpen(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} onClick={(e) => e.stopPropagation()} className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
              <div className="bg-gradient-to-r from-[#002147] to-[#003366] text-white p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {checkoutStep === "payment" && (
                    <button onClick={() => setCheckoutStep("cart")} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                  )}
                  <div>
                    <h2 className="text-2xl font-bold">
                      {checkoutStep === "cart" && "Shopping Cart"}
                      {checkoutStep === "payment" && "Payment Method"}
                      {checkoutStep === "confirmation" && "Order Confirmed!"}
                    </h2>
                    {checkoutStep !== "confirmation" && (
                      <p className="text-sm text-white/70 mt-1">
                        {checkoutStep === "cart" && `${cartCount} item${cartCount !== 1 ? 's' : ''} in cart`}
                        {checkoutStep === "payment" && "Choose your payment method"}
                      </p>
                    )}
                  </div>
                </div>
                <button onClick={() => { if (checkoutStep === "confirmation") setCartItems([]); setIsCartOpen(false); setCheckoutStep("cart"); }} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {checkoutStep === "cart" && (
                <div className="flex-1 overflow-y-auto p-6">
                  {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                        <ShoppingCart className="w-16 h-16 text-gray-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h3>
                      <p className="text-gray-600 mb-8">Start adding amazing resources to your cart!</p>
                      <button onClick={() => setIsCartOpen(false)} className="px-8 py-3 bg-[#8B1538] hover:bg-[#6B1028] text-white font-semibold rounded-xl transition-colors shadow-lg">Continue Shopping</button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {cartItems.map((item) => (
                        <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex gap-4 bg-gray-50 rounded-2xl p-4 hover:bg-gray-100 transition-colors">
                          <div className="relative w-24 h-32 bg-gray-200 rounded-xl overflow-hidden flex-shrink-0">
                            <Image src={item.image} alt={item.title} fill className="object-cover" />
                          </div>
                          <div className="flex-1 flex flex-col justify-between">
                            <div>
                              <h3 className="font-bold text-gray-900 mb-1 line-clamp-1">{item.title}</h3>
                              <p className="text-sm text-gray-600">by {item.author}</p>
                              <p className="text-sm text-gray-500 mt-1">€{item.price.toFixed(2)} each</p>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                              <div className="flex items-center gap-3 bg-white rounded-lg p-1">
                                <button onClick={() => updateQuantity(item.id, -1)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors"><Minus className="w-4 h-4" /></button>
                                <span className="font-semibold w-8 text-center">{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, 1)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors"><Plus className="w-4 h-4" /></button>
                              </div>
                              <div className="flex items-center gap-4">
                                <span className="text-xl font-bold text-[#8B1538]">€{(item.price * item.quantity).toFixed(2)}</span>
                                <button onClick={() => removeFromCart(item.id)} className="p-2 hover:bg-red-100 text-red-600 rounded-lg transition-colors"><Trash2 className="w-5 h-5" /></button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {checkoutStep === "payment" && (
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Select Your Country</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {Object.keys(paymentMethods).map((country) => (
                        <motion.button key={country} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => { setSelectedCountry(country); setSelectedPaymentMethod(""); }} className={`p-4 rounded-xl border-2 transition-all ${selectedCountry === country ? "border-[#8B1538] bg-[#8B1538]/5" : "border-gray-200 hover:border-gray-300"}`}>
                          <p className="font-semibold text-gray-900">{country}</p>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                  {selectedCountry && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Choose Payment Method</label>
                      <div className="space-y-3">
                        {paymentMethods[selectedCountry].map((method) => {
                          const Icon = method.icon;
                          return (
                            <button key={method.id} onClick={() => setSelectedPaymentMethod(method.id)} className={`w-full p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${selectedPaymentMethod === method.id ? "border-[#8B1538] bg-[#8B1538]/5" : "border-gray-200 hover:border-gray-300"}`}>
                              <div className={`p-3 rounded-lg ${selectedPaymentMethod === method.id ? "bg-[#8B1538] text-white" : "bg-gray-100 text-gray-600"}`}>
                                <Icon className="w-6 h-6" />
                              </div>
                              <div className="flex-1 text-left">
                                <p className="font-semibold text-gray-900">{method.name}</p>
                                <p className="text-sm text-gray-600">{method.description}</p>
                              </div>
                              {selectedPaymentMethod === method.id && <CheckCircle2 className="w-6 h-6 text-[#8B1538]" />}
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </div>
              )}

              {checkoutStep === "confirmation" && (
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="text-center py-8">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", duration: 0.6 }} className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
                      <CheckCircle2 className="w-12 h-12 text-green-600" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Thank You for Your Order!</h3>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto">Your order has been successfully placed. You will receive a confirmation email shortly with your order details and access links.</p>
                    <div className="bg-gray-50 rounded-2xl p-6 mb-6 text-left max-w-md mx-auto">
                      <h4 className="font-bold text-gray-900 mb-4">Order Summary</h4>
                      <div className="space-y-2 mb-4">
                        {cartItems.map((item) => (
                          <div key={item.id} className="flex justify-between text-sm">
                            <span className="text-gray-600">{item.title} × {item.quantity}</span>
                            <span className="font-semibold text-gray-900">€{(item.price * item.quantity).toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-4 border-t border-gray-200 flex justify-between">
                        <span className="font-bold text-gray-900">Total</span>
                        <span className="font-bold text-[#8B1538] text-xl">€{cartTotal.toFixed(2)}</span>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-600"><span className="font-semibold">Country:</span> {selectedCountry}</p>
                        <p className="text-sm text-gray-600"><span className="font-semibold">Payment Method:</span> {paymentMethods[selectedCountry]?.find(m => m.id === selectedPaymentMethod)?.name}</p>
                        <p className="text-sm text-gray-600 mt-2"><span className="font-semibold">Order ID:</span> #{orderNumber}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <button onClick={() => { setCartItems([]); setIsCartOpen(false); setCheckoutStep("cart"); setSelectedCountry(""); setSelectedPaymentMethod(""); }} className="w-full max-w-md px-6 py-3 bg-[#8B1538] hover:bg-[#6B1028] text-white font-semibold rounded-xl transition-colors">Continue Shopping</button>
                    </div>
                  </div>
                </div>
              )}

              {checkoutStep !== "confirmation" && cartItems.length > 0 && (
                <div className="border-t border-gray-200 p-6 bg-gray-50">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-gray-700">Total</span>
                    <span className="text-3xl font-bold text-[#8B1538]">€{cartTotal.toFixed(2)}</span>
                  </div>
                  {checkoutStep === "cart" && (
                    <button onClick={() => setCheckoutStep("payment")} className="w-full py-4 bg-gradient-to-r from-[#8B1538] to-[#6B1028] hover:from-[#6B1028] hover:to-[#8B1538] text-white font-bold rounded-xl transition-all shadow-lg">Proceed to Payment</button>
                  )}
                  {checkoutStep === "payment" && (
                    <button onClick={completeOrder} disabled={!selectedCountry || !selectedPaymentMethod} className="w-full py-4 bg-gradient-to-r from-[#8B1538] to-[#6B1028] hover:from-[#6B1028] hover:to-[#8B1538] text-white font-bold rounded-xl transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">Complete Order</button>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}