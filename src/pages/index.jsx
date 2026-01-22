import { Be_Vietnam_Pro } from "next/font/google";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/features/hero/HeroSection";
import MenuGrid from "@/components/features/menu/MenuGrid";
import React, { useState } from 'react';
import Head from 'next/head';
import { Pizza, Truck, ShoppingCart, Star, Plus, X, MapPin, Phone, Clock, Award, Users, UtensilsCrossed, Sparkles, ChefHat, Heart, Quote, Mail, Instagram, Facebook, Twitter, Zap, Shield, Leaf, TrendingUp } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import CartDrawer from '@/components/features/cart/CartDrawer';
import Image from 'next/image';
import hero from '@/images/home-land.jpg'
import logo from '@/images/logo.png';
import about from '@/images/story.jpeg';
const beVietnamPro = Be_Vietnam_Pro({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { getTotalItems, getTotalPrice, cart } = useCart();

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Pizza Gallery - Authentic Italian Pizza Food Truck | Fresh Wood-Fired Pizzas</title>
        <meta name="title" content="Pizza Gallery - Authentic Italian Pizza Food Truck | Fresh Wood-Fired Pizzas" />
        <meta name="description" content="Experience authentic Italian pizza from our mobile food truck. Handcrafted wood-fired pizzas with fresh ingredients. Serving Margherita, Funghi e Tartufo, Verdure Grigliate, and more. Located in Hyderabad. Order now!" />
        <meta name="keywords" content="pizza, Italian pizza, food truck, wood-fired pizza, authentic pizza, Margherita pizza, pizza delivery, Hyderabad pizza, mobile pizza, artisanal pizza, fresh pizza, pizza near me" />
        <meta name="author" content="Pizza Gallery" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pizzagallery.com/" />
        <meta property="og:title" content="Pizza Gallery - Authentic Italian Pizza Food Truck" />
        <meta property="og:description" content="Experience authentic Italian pizza from our mobile food truck. Handcrafted wood-fired pizzas with fresh ingredients. Order now!" />
        <meta property="og:image" content="https://pizzagallery.com/logo.png" />
        <meta property="og:site_name" content="Pizza Gallery" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://pizzagallery.com/" />
        <meta name="twitter:title" content="Pizza Gallery - Authentic Italian Pizza Food Truck" />
        <meta name="twitter:description" content="Experience authentic Italian pizza from our mobile food truck. Handcrafted wood-fired pizzas with fresh ingredients." />
        <meta name="twitter:image" content="https://pizzagallery.com/logo.png" />

        {/* Additional SEO Tags */}
        <meta name="geo.region" content="IN-TS" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.5143459;78.3673687" />
        <meta name="ICBM" content="17.5143459, 78.3673687" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://pizzagallery.com/" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />

        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FoodEstablishment",
              "name": "Pizza Gallery",
              "description": "Authentic Italian pizza food truck serving handcrafted wood-fired pizzas",
              "url": "https://pizzagallery.com",
              "telephone": "+919550455537",
              "email": "gourmet.gallery.ps@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "17.5143459",
                "longitude": "78.3673687"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "11:00",
                  "closes": "22:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Sunday",
                  "opens": "12:00",
                  "closes": "21:00"
                }
              ],
              "servesCuisine": "Italian",
              "priceRange": "$$"
            })
          }}
        />
      </Head>
      <div className={`${beVietnamPro.variable} font-display`}>
        <header className=" top-0 left-0 right-0 z-40 bg-[#565c40] backdrop-blur-md border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
              <Image src={logo} alt="Truck Pizza" width={50} height={50} className='object-contain' />
              <span className="text-2xl font-black text-white">PIZZA GALLERY</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="/menu" className="text-gray-300 hover:text-[#88f59b] transition-colors cursor-pointer">Menu</a>
              <a href="#about" className="text-gray-300 hover:text-[#88f59b] transition-colors">About</a>
              {/* <a href="#location" className="text-gray-300 hover:text-[#88f59b] transition-colors">Location</a> */}
              <button
                onClick={() => setCartOpen(true)}
                className="relative px-6 py-2 bg-gradient-to-r from-[#88f59b] to-[#5fd672] rounded-full font-bold text-slate-900 hover:scale-105 transition-transform"
              >
                <ShoppingCart className="w-5 h-5 inline mr-2" />
                Cart {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#565c40] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden flex flex-col gap-4 pt-4 pb-2">
              <a href="/menu" className="text-gray-300 hover:text-[#88f59b] transition-colors cursor-pointer">Menu</a>
              <a href="#about" className="text-gray-300 hover:text-[#88f59b] transition-colors">About</a>
              <a href="#location" className="text-gray-300 hover:text-[#88f59b] transition-colors">Location</a>
              <button 
                onClick={() => setCartOpen(true)}
                className="px-6 py-2 bg-gradient-to-r from-[#88f59b] to-[#5fd672] rounded-full font-bold text-slate-900 text-left"
              >
                <ShoppingCart className="w-5 h-5 inline mr-2" />
                Cart {getTotalItems() > 0 && `(${getTotalItems()})`}
              </button>
            </nav>
          )}
        </div>
      </header>
      <div className="flex items-center justify-center bg-[#ebe4d2]">
        <Image src={hero} alt="Hero" width={1200} height={1200} />
      </div>
      <section id="about" className="py-20 px-6 bg-gradient-to-br from-[#88f59b]/10 via-white to-[#88f59b]/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#565c40]/50 rounded-full border border-[#565c40]/30">
                <Heart className="w-5 h-5 text-[#565c40]" />
                <span className="text-white font-semibold">Our Story</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 text-[#565c40]">Crafting Pizza Perfection </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                What started as a single food truck with a passion for authentic Italian pizza has grown into a beloved local institution. Our journey began when our founder, a third-generation Italian chef, decided to bring the authentic taste of Naples to the streets.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Every pizza we serve is a testament to our commitment to quality, freshness, and the art of traditional pizza-making. We use only the finest ingredients, hand-stretch our dough daily, and fire our pizzas in our custom-built wood-fired oven.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#88f59b]"></div>
                  <span className="text-gray-700">100% Fresh Ingredients</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#88f59b]"></div>
                  <span className="text-gray-700">Wood-Fired Oven</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#88f59b]"></div>
                  <span className="text-gray-700">Family Recipe</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden border-4 border-[#88f59b]/30">
                <div className="aspect-[5/3] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                 <Image src={about} alt="About" width={800} height={800} />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#565c40] rounded-2xl flex items-center justify-center shadow-xl">
                <Award className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#88f59b]/20 rounded-full">
              <Sparkles className="w-5 h-5 text-[#565c40]" />
              <span className="text-[#565c40] font-semibold">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-4 text-[#565c40]">What Makes Us Special</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Experience the difference of authentic Italian craftsmanship</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ChefHat, title: "Master Chefs", description: "Trained in traditional Italian techniques, our chefs bring decades of experience to every pizza." },
              { icon: Leaf, title: "Fresh Daily", description: "We prepare our dough fresh every morning and source ingredients from trusted local suppliers." },
              { icon: Zap, title: "Fast Service", description: "Quick preparation without compromising quality. Your pizza is ready in minutes, not hours." },
              { icon: Shield, title: "Quality Guaranteed", description: "We stand behind every pizza. If you're not satisfied, we'll make it right." },
              { icon: Truck, title: "Mobile Kitchen", description: "We bring authentic Italian pizza directly to your neighborhood with our food truck." },
              { icon: TrendingUp, title: "Customer Favorite", description: "Rated 4.9/5 by thousands of satisfied customers who keep coming back." }
            ].map((feature, index) => (
              <div key={index} className="bg-[#ebe4d2]/50 rounded-3xl p-8 border border-[#565c40]/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-[#565c40] rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-[#565c40] mb-3">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENU PREVIEW SECTION */}
      {/* <section id="menu" className="py-20 px-6 bg-gradient-to-br from-[#ebe4d2] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#565c40]/80 rounded-full">
              <UtensilsCrossed className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Our Menu</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-4 text-[#565c40]">Featured Creations</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Discover our handcrafted selection of authentic Italian pizzas and appetizers</p>
          </div>
          <MenuGrid />
        </div>
      </section> */}

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#88f59b]/20 rounded-full">
              <Quote className="w-5 h-5 text-[#565c40]" />
              <span className="text-[#565c40] font-semibold">Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-4 text-[#565c40]">What Our Customers Say</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Real feedback from pizza lovers who've experienced our authentic flavors</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rajesh Kumar", rating: 5, text: "Best pizza I've had in years! The wood-fired flavor is incredible. The Margherita is absolutely perfect.", role: "Regular Customer" },
              { name: "Priya Sharma", rating: 5, text: "The Bruschetta Trio is amazing! Fresh ingredients and authentic taste. This food truck is a gem in our neighborhood.", role: "Food Enthusiast" },
              { name: "Amit Patel", rating: 5, text: "Fast service, great quality, and reasonable prices. The Funghi e Tartufo pizza is my new favorite. Highly recommended!", role: "Local Resident" }
            ].map((testimonial, index) => (
              <div key={index} className="bg-[#ebe4d2]/50 rounded-3xl p-8 border border-[#565c40]/10 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#88f59b] text-[#88f59b]" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-[#565c40]/30 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="pt-4 border-t border-[#565c40]/10">
                  <p className="font-bold text-[#565c40]">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION & CONTACT SECTION */}
      <section id="location" className="py-20 px-6 bg-gradient-to-br from-[#88f59b]/10 via-white to-[#88f59b]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#565c40]/80 rounded-full">
              <MapPin className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Find Us</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-4 text-[#565c40]">Visit Our Food Truck</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">We're always on the move, bringing authentic pizza to your neighborhood</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#565c40] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#565c40] mb-2">Location</h3>
                  <p className="text-gray-700 leading-relaxed">We operate as a mobile food truck, serving various locations throughout the city. Follow us on social media for daily location updates!</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#565c40] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#565c40] mb-2">Hours</h3>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">Monday - Saturday:</span> 11:00 AM - 10:00 PM<br />
                    <span className="font-semibold">Sunday:</span> 12:00 PM - 9:00 PM
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#565c40] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#565c40] mb-2">Contact</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Phone: <a href="tel:+919550455537" className="text-[#565c40] hover:text-[#88f59b] font-semibold">+91 95504 55537</a><br />
                    Email: <a href="mailto:gourmet.gallery.ps@gmail.com" className="text-[#565c40] hover:text-[#88f59b] font-semibold">gourmet.gallery.ps@gmail.com</a>
                  </p>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <a href="#" className="w-12 h-12 bg-[#565c40] rounded-full flex items-center justify-center hover:bg-[#88f59b] transition-colors">
                  <Facebook className="w-6 h-6 text-white" />
                </a>
                <a href="https://www.instagram.com/pizzagallery.in?igsh=MXcydDFpMW0wMW84OQ==" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#565c40] rounded-full flex items-center justify-center hover:bg-[#88f59b] transition-colors cursor-pointer">
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a href="#" className="w-12 h-12 bg-[#565c40] rounded-full flex items-center justify-center hover:bg-[#88f59b] transition-colors">
                  <Twitter className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
            <div className="bg-[#ebe4d2] rounded-3xl p-8 border-4 border-[#565c40]/20">
              <div className="aspect-[4/3] bg-white rounded-2xl overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.856843131669!2d78.3673687!3d17.5143459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb920a00e23377%3A0x9a89952997126418!2sDivya%20Shree%20Shakthi!5e0!3m2!1sen!2sin!4v1767434129314!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#565c40] text-white py-12 px-6 pb-24 md:pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image src={logo} alt="Pizza Gallery" width={40} height={40} className='object-contain' />
                <span className="text-xl font-black">PIZZA GALLERY</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">Bringing authentic Italian pizza to your neighborhood, one slice at a time.</p>
            </div>
            <div>
              <h4 className="font-black mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="/menu" className="hover:text-[#88f59b] transition-colors">Menu</a></li>
                <li><a href="#about" className="hover:text-[#88f59b] transition-colors">About Us</a></li>
                {/* <li><a href="#location" className="hover:text-[#88f59b] transition-colors">Location</a></li> */}
                {/* <li><a href="/menu" className="hover:text-[#88f59b] transition-colors">Full Menu</a></li> */}
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 95504 55537</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>gourmet.gallery.ps@gmail.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Mobile Food Truck</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-4">Follow Us</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#88f59b] transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/pizzagallery.in?igsh=MXcydDFpMW0wMW84OQ==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#88f59b] transition-colors cursor-pointer">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#88f59b] transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center">
            <p className="text-gray-300 text-sm">© 2024 Pizza Gallery. All rights reserved. Made with <Heart className="w-4 h-4 inline text-[#88f59b]" /> for pizza lovers.</p>
          </div>
        </div>
      </footer>

      {/* CART DRAWER */}
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />

      {/* Floating Cart Button - Mobile Only */}
      {cart.items.length > 0 && (
        <button
          onClick={() => setCartOpen(true)}
          className="fixed bottom-6 left-6 right-6 z-40 md:hidden flex items-center justify-between px-6 py-4 bg-gradient-to-r from-[#88f59b] to-[#5fd672] rounded-full font-bold text-slate-900 shadow-2xl hover:scale-105 transition-transform"
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <ShoppingCart className="w-6 h-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#565c40] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold">View Cart</div>
              <div className="text-xs opacity-80">{getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'}</div>
            </div>
          </div>
          <div className="text-lg font-black">
            ₹{getTotalPrice().toLocaleString('en-IN')}
          </div>
        </button>
      )}
      </div>
    </>
  );
}
