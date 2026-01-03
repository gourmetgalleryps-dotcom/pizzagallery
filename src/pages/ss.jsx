import React, { useState, createContext, useContext, useEffect } from 'react';
import { Pizza, Truck, ShoppingCart, Star, Plus, X, MapPin, Phone, Clock, Award, Users, UtensilsCrossed, Sparkles, ChefHat, Heart, Quote, Mail, Instagram, Facebook, Twitter, Zap, Shield, Leaf, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import logo from '@/images/logo.png';
// Cart Context
const CartContext = createContext();
const useCart = () => useContext(CartContext);

function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  
  const addItem = (item) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? {...i, quantity: (i.quantity || 1) + 1} : i);
      }
      return [...prev, {...item, quantity: 1}];
    });
  };
  
  return (
    <CartContext.Provider value={{ items, addItem }}>
      {children}
    </CartContext.Provider>
  );
}

// Menu Data
const menuItems = [
  {
    id: 1,
    name: "Margherita Classic",
    description: "Fresh mozzarella, basil, and our signature tomato sauce on a crispy thin crust",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=400&fit=crop",
    category: "veg",
    badge: "Popular",
    rating: 4.8,
    type: "pizza"
  },
  {
    id: 2,
    name: "Pepperoni Supreme",
    description: "Double pepperoni, premium cheese blend, and Italian herbs",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=400&fit=crop",
    category: "non-veg",
    badge: "Bestseller",
    rating: 4.9,
    type: "pizza"
  },
  {
    id: 3,
    name: "Veggie Delight",
    description: "Bell peppers, mushrooms, olives, onions, and fresh tomatoes",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&h=400&fit=crop",
    category: "veg",
    rating: 4.7,
    type: "pizza"
  },
  {
    id: 4,
    name: "BBQ Chicken",
    description: "Grilled chicken, BBQ sauce, red onions, and cilantro",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop",
    category: "non-veg",
    badge: "New",
    rating: 4.8,
    type: "pizza"
  },
  {
    id: 5,
    name: "Hawaiian Paradise",
    description: "Ham, pineapple, mozzarella, and sweet tomato sauce",
    price: 14.49,
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=400&fit=crop",
    category: "non-veg",
    rating: 4.6,
    type: "pizza"
  },
  {
    id: 6,
    name: "Truffle Mushroom",
    description: "Wild mushrooms, truffle oil, parmesan, and arugula",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop",
    category: "veg",
    badge: "Premium",
    rating: 4.9,
    type: "pizza"
  },
  {
    id: 7,
    name: "Spicy Italian",
    description: "Spicy salami, jalapeños, hot peppers, and chili flakes",
    price: 15.49,
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=400&h=400&fit=crop",
    category: "non-veg",
    rating: 4.7,
    type: "pizza"
  },
  {
    id: 8,
    name: "Four Cheese",
    description: "Mozzarella, parmesan, gorgonzola, and fontina cheese blend",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1548369937-47519962c11a?w=400&h=400&fit=crop",
    category: "veg",
    badge: "Popular",
    rating: 4.8,
    type: "pizza"
  }
];

// Product Card Component
function ProductCard({ product }) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: "Medium",
    });
  };

  const getCategoryIndicator = () => {
    if (product.category === "veg") {
      return <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>;
    } else if (product.category === "non-veg") {
      return <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[8px] border-b-red-500"></div>;
    }
    return null;
  };

  return (
    <div className="group relative flex flex-col p-3 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 md:hover:-translate-y-1 md:hover:shadow-xl md:hover:shadow-[#88f59b]/20 md:hover:border-[#88f59b] transition-all duration-300">
      <div className="relative w-full aspect-square mb-3 rounded-xl overflow-hidden bg-slate-700">
        <img
          src={product.image}
          alt={product.description}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute top-2 right-2 w-6 h-6 rounded bg-white/90 flex items-center justify-center backdrop-blur-sm border border-green-600/20">
          {getCategoryIndicator()}
        </span>
        {product.badge && (
          <div className="absolute bottom-2 left-2">
            <span className={`px-2 py-1 text-[10px] font-bold rounded-full ${
              product.badge === 'Bestseller' ? 'bg-[#88f59b] text-slate-900' :
              product.badge === 'Popular' ? 'bg-blue-500 text-white' :
              product.badge === 'New' ? 'bg-purple-500 text-white' :
              'bg-amber-500 text-white'
            }`}>
              {product.badge}
            </span>
          </div>
        )}
        {product.rating && (
          <div className="absolute top-2 left-2 px-2 py-0.5 bg-yellow-500 text-white text-[10px] font-bold rounded-full flex items-center gap-0.5">
            <Star className="w-2.5 h-2.5 fill-white" />
            {product.rating}
          </div>
        )}
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-base font-bold text-white leading-tight">
            {product.name}
          </h3>
        </div>
        <p className="text-xs text-gray-400 line-clamp-2 mb-3">
          {product.description}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-black text-white">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={handleAddToCart}
            className="relative flex items-center justify-center min-w-[44px] min-h-[44px] -mr-2 -mt-2 -mb-2 transition-all duration-200 active:scale-95 md:hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#88f59b]/50 focus:ring-offset-1 rounded-full"
            aria-label={`Add ${product.name} to cart`}
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-[#88f59b] to-[#5fd672] text-slate-900 shadow-md shadow-[#88f59b]/30 hover:shadow-lg hover:shadow-[#88f59b]/40 transition-all pointer-events-none">
              <Plus size={18} className="font-bold" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

// Main Component
export default function TruckPizzaWebsite() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filters = [
    { id: 'all', label: 'All Pizzas', count: menuItems.length },
    { id: 'veg', label: 'Vegetarian', count: menuItems.filter(i => i.category === 'veg').length },
    { id: 'non-veg', label: 'Non-Veg', count: menuItems.filter(i => i.category === 'non-veg').length },
  ];

  const filteredItems = selectedFilter === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedFilter);

  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
               <Image src={logo} alt="Truck Pizza" width={50} height={50} className='object-contain' />
                <span className="text-2xl font-black">PIZZA GALLERY</span>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-8">
                <a href="#menu" className="text-gray-300 hover:text-[#88f59b] transition-colors">Menu</a>
                <a href="#about" className="text-gray-300 hover:text-[#88f59b] transition-colors">About</a>
                <a href="#location" className="text-gray-300 hover:text-[#88f59b] transition-colors">Location</a>
                <button 
                  className="relative px-6 py-2 bg-gradient-to-r from-[#88f59b] to-[#5fd672] rounded-full font-bold text-slate-900 hover:scale-105 transition-transform"
                >
                  <ShoppingCart className="w-5 h-5 inline mr-2" />
                  Cart
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
                <a href="#menu" className="text-gray-300 hover:text-[#88f59b] transition-colors">Menu</a>
                <a href="#about" className="text-gray-300 hover:text-[#88f59b] transition-colors">About</a>
                <a href="#location" className="text-gray-300 hover:text-[#88f59b] transition-colors">Location</a>
                <button className="px-6 py-2 bg-gradient-to-r from-[#88f59b] to-[#5fd672] rounded-full font-bold text-slate-900 text-left">
                  <ShoppingCart className="w-5 h-5 inline mr-2" />
                  Cart
                </button>
              </nav>
            )}
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEzNiwgMjQ1LCAxNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
          
          {/* Floating Pizza Decorations */}
          <div className="absolute top-32 left-10 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
            <Pizza className="w-16 h-16 text-[#88f59b] opacity-20" />
          </div>
          <div className="absolute bottom-32 right-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
            <Pizza className="w-20 h-20 text-[#88f59b] opacity-20" />
          </div>

          <div className="relative z-10 text-center px-6 max-w-5xl">
            <div className="inline-flex items-center gap-3 mb-6 bg-[#88f59b]/20 px-6 py-3 rounded-full border border-[#88f59b]/50">
              <Truck className="w-6 h-6 text-[#88f59b]" />
              <span className="text-[#88f59b] font-semibold">Now Serving!</span>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-[#88f59b] via-[#6ee685] to-[#88f59b] text-transparent bg-clip-text animate-pulse">
                TRUCK
              </span>
              <br />
              <span className="text-white">PIZZA</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Fresh, hot pizza delivered from our mobile kitchen. Track us down for the best slice in town!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-[#88f59b] to-[#5fd672] rounded-full font-bold text-lg text-slate-900 hover:scale-105 transition-transform shadow-lg shadow-[#88f59b]/50"
              >
                View Menu
              </button>
              <button 
                className="px-8 py-4 border-2 border-[#88f59b] rounded-full font-bold text-lg text-[#88f59b] hover:bg-[#88f59b]/10 transition-all"
              >
                <MapPin className="w-5 h-5 inline mr-2" />
                Find Our Truck
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-slate-800/50 to-slate-900/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#88f59b]/5"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { icon: Users, number: "10K+", label: "Happy Customers", color: "from-blue-500 to-cyan-500" },
                { icon: Pizza, number: "50+", label: "Pizza Varieties", color: "from-[#88f59b] to-[#5fd672]" },
                { icon: Award, number: "4.9", label: "Average Rating", color: "from-yellow-500 to-amber-500" },
                { icon: Truck, number: "100+", label: "Cities Served", color: "from-purple-500 to-pink-500" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center group">
                  <div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${stat.color} mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <div className="text-3xl md:text-5xl font-black text-white mb-2">{stat.number}</div>
                  <div className="text-sm md:text-base text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#88f59b]/10 rounded-full border border-[#88f59b]/30">
                <Sparkles className="w-5 h-5 text-[#88f59b]" />
                <span className="text-[#88f59b] font-semibold">Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-4">What Makes Us Special</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">Experience the difference with our premium ingredients and authentic recipes</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Leaf, title: "Fresh Ingredients", desc: "We source only the freshest, locally-sourced ingredients daily for maximum flavor and quality." },
                { icon: ChefHat, title: "Master Chefs", desc: "Our pizzas are crafted by experienced chefs using traditional Italian techniques." },
                { icon: Zap, title: "Fast Delivery", desc: "Get your pizza hot and fresh in 30 minutes or less, guaranteed satisfaction." },
                { icon: Shield, title: "Quality Assured", desc: "Every pizza is made to order with strict quality standards and hygiene protocols." },
                { icon: Heart, title: "Made with Love", desc: "Each pizza is prepared with passion and care, ensuring the perfect taste every time." },
                { icon: TrendingUp, title: "Award Winning", desc: "Recognized as the best mobile pizza service in the region for 3 consecutive years." }
              ].map((feature, idx) => (
                <div key={idx} className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-[#88f59b] transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#88f59b]/20">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#88f59b] to-[#5fd672] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#88f59b] transition-colors">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Offers Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#88f59b]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#88f59b]/10 rounded-full blur-3xl"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#88f59b]/20 rounded-full border border-[#88f59b]/50">
                <Zap className="w-5 h-5 text-[#88f59b]" />
                <span className="text-[#88f59b] font-semibold">Limited Time</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-4">Special Offers</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Family Feast Deal", discount: "30% OFF", desc: "Order 3 or more pizzas and get 30% off on your entire order. Perfect for family gatherings!", code: "FAMILY30", gradient: "from-[#88f59b] to-[#5fd672]" },
                { title: "Weekend Special", discount: "Buy 1 Get 1", desc: "Every weekend, buy any large pizza and get another one absolutely free. Don't miss out!", code: "WEEKEND", gradient: "from-purple-500 to-pink-500" }
              ].map((offer, idx) => (
                <div key={idx} className={`relative bg-gradient-to-br ${offer.gradient} rounded-3xl p-8 md:p-10 overflow-hidden group hover:scale-105 transition-transform`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                  <div className="relative z-10">
                    <div className="text-5xl md:text-7xl font-black text-white mb-2">{offer.discount}</div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{offer.title}</h3>
                    <p className="text-white/90 mb-6 text-sm md:text-base">{offer.desc}</p>
                    <div className="flex items-center gap-3">
                      <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                        <span className="text-xs text-white/80">Code:</span>
                        <div className="text-lg font-black text-white">{offer.code}</div>
                      </div>
                      <button className="px-6 py-2 bg-white text-slate-900 rounded-lg font-bold hover:scale-105 transition-transform">
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="py-20 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-black mb-4">Our Menu</h2>
              <p className="text-gray-400 text-lg">Handcrafted pizzas made fresh daily</p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {filters.map(filter => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    selectedFilter === filter.id
                      ? 'bg-gradient-to-r from-[#88f59b] to-[#5fd672] text-slate-900 shadow-lg shadow-[#88f59b]/30'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700 border border-slate-700'
                  }`}
                >
                  {filter.label}
                  <span className="ml-2 text-xs opacity-70">({filter.count})</span>
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredItems.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 bg-slate-800/30 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#88f59b]/10 rounded-full border border-[#88f59b]/30">
                  <Heart className="w-5 h-5 text-[#88f59b]" />
                  <span className="text-[#88f59b] font-semibold">Our Story</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black mb-6">Crafting Pizza Perfection Since 2015</h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  What started as a single food truck with a passion for authentic Italian pizza has grown into a beloved local institution. Our journey began when our founder, a third-generation Italian chef, decided to bring the authentic taste of Naples to the streets.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Every pizza we serve is a testament to our commitment to quality, freshness, and the art of traditional pizza-making. We use only the finest ingredients, hand-stretch our dough daily, and fire our pizzas in our custom-built wood-fired oven.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#88f59b]"></div>
                    <span className="text-gray-300">100% Fresh Ingredients</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#88f59b]"></div>
                    <span className="text-gray-300">Wood-Fired Oven</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#88f59b]"></div>
                    <span className="text-gray-300">Family Recipe</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden border-4 border-[#88f59b]/30">
                  <div className="aspect-[4/3] bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                    <Pizza className="w-32 h-32 text-[#88f59b] opacity-50" />
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#88f59b] to-[#5fd672] rounded-2xl flex items-center justify-center shadow-xl">
                  <Award className="w-12 h-12 text-slate-900" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#88f59b]/5 to-transparent"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#88f59b]/10 rounded-full border border-[#88f59b]/30">
                <Star className="w-5 h-5 text-[#88f59b] fill-[#88f59b]" />
                <span className="text-[#88f59b] font-semibold">Testimonials</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-4">What Our Customers Say</h2>
              <p className="text-gray-400 text-lg">Real reviews from real pizza lovers</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Sarah Johnson", role: "Food Blogger", rating: 5, text: "Best pizza I've ever had! The crust is perfectly crispy and the toppings are incredibly fresh. The truck location feature is genius!", avatar: "SJ" },
                { name: "Mike Chen", role: "Regular Customer", rating: 5, text: "Been ordering from Pizza Gallery for 2 years now. Consistently amazing quality and the fastest delivery. Highly recommend!", avatar: "MC" },
                { name: "Emily Rodriguez", role: "Chef", rating: 5, text: "As a professional chef, I can appreciate the quality here. The ingredients are top-notch and the technique is spot-on. Outstanding!", avatar: "ER" }
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-[#88f59b] transition-all hover:scale-105">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#88f59b] mb-4 opacity-50" />
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#88f59b] to-[#5fd672] flex items-center justify-center text-slate-900 font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 px-6 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#88f59b]/10 rounded-full border border-[#88f59b]/30">
                <UtensilsCrossed className="w-5 h-5 text-[#88f59b]" />
                <span className="text-[#88f59b] font-semibold">Gallery</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-4">Our Delicious Creations</h2>
              <p className="text-gray-400 text-lg">A visual feast of our mouth-watering pizzas</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="group relative aspect-square rounded-2xl overflow-hidden border border-slate-700 hover:border-[#88f59b] transition-all hover:scale-105">
                  <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                    <Pizza className="w-16 h-16 text-[#88f59b] opacity-30 group-hover:opacity-50 transition-opacity" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white font-semibold text-sm">Pizza #{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Info */}
        <section id="location" className="py-20 px-6 bg-slate-800/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black text-center mb-12">Find Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 text-center hover:scale-105 transition-transform border border-[#88f59b]/30">
                <MapPin className="w-12 h-12 text-[#88f59b] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Location</h3>
                <p className="text-gray-400">Downtown & Main Street<br />Check our live location</p>
              </div>

              <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 text-center hover:scale-105 transition-transform border border-[#88f59b]/30">
                <Clock className="w-12 h-12 text-[#88f59b] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Hours</h3>
                <p className="text-gray-400">Mon-Fri: 11AM - 10PM<br />Sat-Sun: 12PM - 11PM</p>
              </div>

              <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 text-center hover:scale-105 transition-transform border border-[#88f59b]/30">
                <Phone className="w-12 h-12 text-[#88f59b] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-gray-400">(555) PIZZA-01<br />Pre-order available</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#88f59b]/10 rounded-full border border-[#88f59b]/30">
                <Mail className="w-5 h-5 text-[#88f59b]" />
                <span className="text-[#88f59b] font-semibold">Get In Touch</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-4">Contact Us</h2>
              <p className="text-gray-400 text-lg">Have questions? We'd love to hear from you!</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-[#88f59b] transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#88f59b] to-[#5fd672] flex items-center justify-center">
                      <Phone className="w-6 h-6 text-slate-900" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Phone</h3>
                      <p className="text-gray-400 text-sm">Call us anytime</p>
                    </div>
                  </div>
                  <p className="text-[#88f59b] font-semibold">(555) PIZZA-01</p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-[#88f59b] transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#88f59b] to-[#5fd672] flex items-center justify-center">
                      <Mail className="w-6 h-6 text-slate-900" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Email</h3>
                      <p className="text-gray-400 text-sm">Send us a message</p>
                    </div>
                  </div>
                  <p className="text-[#88f59b] font-semibold">hello@pizzagallery.com</p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-[#88f59b] transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#88f59b] to-[#5fd672] flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-slate-900" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Follow Us</h3>
                      <p className="text-gray-400 text-sm">Stay connected</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 rounded-lg bg-slate-700 hover:bg-[#88f59b] flex items-center justify-center transition-colors">
                      <Instagram className="w-5 h-5 text-white" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-lg bg-slate-700 hover:bg-[#88f59b] flex items-center justify-center transition-colors">
                      <Facebook className="w-5 h-5 text-white" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-lg bg-slate-700 hover:bg-[#88f59b] flex items-center justify-center transition-colors">
                      <Twitter className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#88f59b] transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#88f59b] transition-colors"
                    />
                  </div>
                  <div>
                    <textarea
                      rows="4"
                      placeholder="Your Message"
                      className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#88f59b] transition-colors resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-[#88f59b] to-[#5fd672] rounded-lg font-bold text-slate-900 hover:scale-105 transition-transform shadow-lg shadow-[#88f59b]/30"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-slate-700 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Image src={logo} alt="Pizza Gallery" width={40} height={40} className='object-contain' />
                  <span className="text-xl font-black">PIZZA GALLERY</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">Fresh, hot pizza delivered from our mobile kitchen. The best slice in town!</p>
                <div className="flex gap-3">
                  <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#88f59b] flex items-center justify-center transition-colors">
                    <Instagram className="w-4 h-4 text-white" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#88f59b] flex items-center justify-center transition-colors">
                    <Facebook className="w-4 h-4 text-white" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#88f59b] flex items-center justify-center transition-colors">
                    <Twitter className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-white mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#menu" className="text-gray-400 hover:text-[#88f59b] transition-colors text-sm">Menu</a></li>
                  <li><a href="#about" className="text-gray-400 hover:text-[#88f59b] transition-colors text-sm">About Us</a></li>
                  <li><a href="#location" className="text-gray-400 hover:text-[#88f59b] transition-colors text-sm">Locations</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-[#88f59b] transition-colors text-sm">Contact</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-white mb-4">Support</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-[#88f59b] transition-colors text-sm">FAQ</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-[#88f59b] transition-colors text-sm">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-[#88f59b] transition-colors text-sm">Terms of Service</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-[#88f59b] transition-colors text-sm">Refund Policy</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-white mb-4">Newsletter</h4>
                <p className="text-gray-400 text-sm mb-4">Subscribe to get special offers and updates</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-gray-400 focus:outline-none focus:border-[#88f59b] text-sm"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-[#88f59b] to-[#5fd672] rounded-lg font-bold text-slate-900 hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-700 text-center">
              <p className="text-gray-400 text-sm">© 2024 Pizza Gallery. All rights reserved. Made with <Heart className="w-4 h-4 inline text-[#88f59b]" /> for pizza lovers.</p>
            </div>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
}