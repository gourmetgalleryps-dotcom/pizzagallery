import Image from "next/image";
import { Be_Vietnam_Pro } from "next/font/google";
import { Sparkles } from "lucide-react";
import React, { useState } from 'react';
import Head from 'next/head';
import { Pizza, Truck, ShoppingCart, Star, Plus, X, MapPin, Phone, Clock, Award, Users, UtensilsCrossed, ChefHat, Heart, Quote, Mail, Instagram, Facebook, Twitter, Zap, Shield, Leaf, TrendingUp } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import CartDrawer from '@/components/features/cart/CartDrawer';
import logo from '@/images/logo.png';
import bruschettaTrio from '@/images/Bruschetta-Trio.png';
import capreseSalad from '@/images/Caprese-Salad.png';
import dessert1 from '@/images/dessert1.jpeg';
import homeLand from '@/images/home-land.jpg';
import pizza1 from '@/images/pizza1.jpeg';
import pizza2 from '@/images/pizza2.jpeg';
import pizza3 from '@/images/pizza3.jpeg';
import pizza4 from '@/images/pizza4.jpeg';
import pizza5 from '@/images/pizza5.jpeg';
import story from '@/images/story.jpeg';

const beVietnamPro = Be_Vietnam_Pro({
    weight: ["400", "500", "700", "900"],
    subsets: ["latin"],
    variable: "--font-be-vietnam-pro",
    display: "swap",
});

// Menu data with categories
const menuData = [
    {
        id: 1,
        title: "Bruschetta Trio",
        description: "Classic Tomato Basil, Roasted Garlic Mushroom, Basil Pesto, Caprese Salad Skewers, Cherry tomatoes, Fresh Mozzarella, Basil, Drizzled with Balsamic Glaze",
        image: bruschettaTrio,
        category: "appetizers",
        price: 250,
        isPizza: false
    },
    {
        id: 2,
        title: "Caprese Salad Skewers",
        description: "Cherry tomatoes, Fresh Mozzarella, Basil, Balsamic Glaze drizzle",
        image: capreseSalad,
        category: "appetizers",
        price: 220,
        isPizza: false
    },
    {
        id: 3,
        title: "Margherita",
        description: "San Marzano Sauce, Fior Di Latte, Basil, Parmesan Cheese, EVOO Drizzle",
        image: pizza1,
        category: "pizza",
        price: 280,
        isPizza: true
    },
    {
        id: 4,
        title: "Funghi e Tartufo",
        description: "Fresh shredded Mozzarella, Cheese sauce, Mushrooms, Truffle oil drizzle, Cheddar Cheese, Arugula Leaves",
        image: pizza3,
        category: "pizza",
        price: 450,
        isPizza: true
    },
    {
        id: 5,
        title: "Verdure Grigliate",
        description: "Grilled Zucchini, Bell peppers, Smoked Mozzarella, Monterey jack, San Marzano Sauce, Fresh oregano",
        image: pizza4,
        category: "pizza",
        price: 420,
        isPizza: true
    },
    {
        id: 6,
        title: "Basil Pesto Pizza",
        description: "Fresh Basil, Pesto, Fior Di Latte, Confit Cherry Tomatoes, Olives, Roasted Pine nuts, Micro Greens, Feta Cheese dollops, EVOO drizzle",
        image: pizza5,
        category: "pizza",
        price: 380,
        isPizza: true
    },
    {
        id: 7,
        title: "Panna Cotta",
        description: "Fresh Cream, Full Cream Milk, Vanilla Essence, Veg Gelatin, Sugar, Blueberries and Lemon",
        image: dessert1,
        category: "dessert",
        price: 180,
        isPizza: false
    }
];

export default function MenuPage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [activeFilter, setActiveFilter] = useState("all");
    const [customizationModal, setCustomizationModal] = useState(null);
    const { addItem, getTotalItems, getTotalPrice, cart } = useCart();

    const filteredMenu = activeFilter === "all"
        ? menuData
        : menuData.filter(item => item.category === activeFilter);

    const handleAddToCart = () => {
        if (!customizationModal) return;

        const item = customizationModal;

        addItem({
            id: item.id,
            name: item.title,
            price: item.price,
            image: item.image,
            size: item.isPizza ? "Small (10\")" : "Regular",
            description: item.description
        });

        setCustomizationModal(null);
    };

    return (
        <>
            <Head>
                {/* Primary Meta Tags */}
                <title>Menu - Pizza Gallery | Artisanal Italian Pizzas, Appetizers & Desserts</title>
                <meta name="title" content="Menu - Pizza Gallery | Artisanal Italian Pizzas, Appetizers & Desserts" />
                <meta name="description" content="Explore our full menu featuring authentic Italian pizzas including Margherita, Funghi e Tartufo, Verdure Grigliate, Basil Pesto Pizza, plus appetizers like Bruschetta Trio and Caprese Salad Skewers, and desserts like Panna Cotta. Fresh ingredients, wood-fired perfection." />
                <meta name="keywords" content="pizza menu, Italian pizza menu, Margherita pizza, Funghi e Tartufo, Verdure Grigliate, Basil Pesto Pizza, Bruschetta, Caprese Salad, Panna Cotta, pizza food truck menu, artisanal pizza menu, wood-fired pizza menu" />
                <meta name="author" content="Pizza Gallery" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="7 days" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://pizzagallery.com/menu" />
                <meta property="og:title" content="Menu - Pizza Gallery | Artisanal Italian Pizzas" />
                <meta property="og:description" content="Explore our full menu featuring authentic Italian pizzas, appetizers, and desserts. Fresh ingredients, wood-fired perfection." />
                <meta property="og:image" content="https://pizzagallery.com/logo.png" />
                <meta property="og:site_name" content="Pizza Gallery" />
                <meta property="og:locale" content="en_IN" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://pizzagallery.com/menu" />
                <meta name="twitter:title" content="Menu - Pizza Gallery | Artisanal Italian Pizzas" />
                <meta name="twitter:description" content="Explore our full menu featuring authentic Italian pizzas, appetizers, and desserts." />
                <meta name="twitter:image" content="https://pizzagallery.com/logo.png" />

                {/* Additional SEO Tags */}
                <meta name="geo.region" content="IN-TS" />
                <meta name="geo.placename" content="Hyderabad" />
                <meta name="geo.position" content="17.5143459;78.3673687" />
                <meta name="ICBM" content="17.5143459, 78.3673687" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://pizzagallery.com/menu" />

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/logo.png" />

                {/* Structured Data - JSON-LD for Menu */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Menu",
                            "name": "Pizza Gallery Menu",
                            "description": "Authentic Italian pizza menu featuring artisanal wood-fired pizzas, appetizers, and desserts",
                            "url": "https://pizzagallery.com/menu",
                            "hasMenuSection": [
                                {
                                    "@type": "MenuSection",
                                    "name": "Appetizers",
                                    "description": "Fresh Italian appetizers",
                                    "hasMenuItem": [
                                        {
                                            "@type": "MenuItem",
                                            "name": "Bruschetta Trio",
                                            "description": "Classic Tomato Basil, Roasted Garlic Mushroom, Basil Pesto, Caprese Salad Skewers, Cherry tomatoes, Fresh Mozzarella, Basil, Drizzled with Balsamic Glaze",
                                            "offers": {
                                                "@type": "Offer",
                                                "price": "250",
                                                "priceCurrency": "INR"
                                            }
                                        },
                                        {
                                            "@type": "MenuItem",
                                            "name": "Caprese Salad Skewers",
                                            "description": "Cherry tomatoes, Fresh Mozzarella, Basil, Balsamic Glaze drizzle",
                                            "offers": {
                                                "@type": "Offer",
                                                "price": "220",
                                                "priceCurrency": "INR"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "@type": "MenuSection",
                                    "name": "Artisanal Sourdough Pizza",
                                    "description": "Handcrafted wood-fired pizzas",
                                    "hasMenuItem": [
                                        {
                                            "@type": "MenuItem",
                                            "name": "Margherita",
                                            "description": "San Marzano Sauce, Fior Di Latte, Basil, Parmesan Cheese, EVOO Drizzle",
                                            "offers": {
                                                "@type": "Offer",
                                                "price": "280",
                                                "priceCurrency": "INR"
                                            }
                                        },
                                        {
                                            "@type": "MenuItem",
                                            "name": "Funghi e Tartufo",
                                            "description": "Fresh shredded Mozzarella, Cheese sauce, Mushrooms, Truffle oil drizzle, Cheddar Cheese, Arugula Leaves",
                                            "offers": {
                                                "@type": "Offer",
                                                "price": "450",
                                                "priceCurrency": "INR"
                                            }
                                        },
                                        {
                                            "@type": "MenuItem",
                                            "name": "Verdure Grigliate",
                                            "description": "Grilled Zucchini, Bell peppers, Smoked Mozzarella, Monterey jack, San Marzano Sauce, Fresh oregano",
                                            "offers": {
                                                "@type": "Offer",
                                                "price": "420",
                                                "priceCurrency": "INR"
                                            }
                                        },
                                        {
                                            "@type": "MenuItem",
                                            "name": "Basil Pesto Pizza",
                                            "description": "Fresh Basil, Pesto, Fior Di Latte, Confit Cherry Tomatoes, Olives, Roasted Pine nuts, Micro Greens, Feta Cheese dollops, EVOO drizzle",
                                            "offers": {
                                                "@type": "Offer",
                                                "price": "380",
                                                "priceCurrency": "INR"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "@type": "MenuSection",
                                    "name": "Dessert",
                                    "description": "Italian desserts",
                                    "hasMenuItem": [
                                        {
                                            "@type": "MenuItem",
                                            "name": "Panna Cotta",
                                            "description": "Fresh Cream, Full Cream Milk, Vanilla Essence, Veg Gelatin, Sugar, Blueberries and Lemon",
                                            "offers": {
                                                "@type": "Offer",
                                                "price": "180",
                                                "priceCurrency": "INR"
                                            }
                                        }
                                    ]
                                }
                            ]
                        })
                    }}
                />
            </Head>
            <div className={`${beVietnamPro.variable} font-display bg-[#ebe4d2]`}>
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
                            <a href="#location" className="text-gray-300 hover:text-[#88f59b] transition-colors">Location</a>
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
            {/* HERO */}
            <section className="py-16 pb-10 text-center">
                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#565c40]/80 text-white font-semibold">
                    <Sparkles size={18} /> Our Menu
                </span>

                <h1 className="mt-6 text-5xl md:text-7xl font-black text-[#565c40]">
                    Artisanal Creations
                </h1>

                <p className="mt-4 max-w-2xl mx-auto text-gray-700 text-lg">
                    Handcrafted Italian recipes made fresh daily, inspired by tradition
                    and served with love from our mobile kitchen.
                </p>
            </section>

            {/* FILTER BUTTONS */}
            <section className="max-w-7xl mx-auto px-6 pb-8">
                <div className="flex flex-wrap gap-3 justify-center">
                    {[
                        { id: "all", label: "All Menu" },
                        { id: "appetizers", label: "Appetizers" },
                        { id: "pizza", label: "Pizza" },
                        { id: "dessert", label: "Dessert" }
                    ].map(filter => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-6 py-3 rounded-full font-bold transition-all ${activeFilter === filter.id
                                    ? "bg-[#565c40] text-white shadow-lg scale-105"
                                    : "bg-white/80 text-[#565c40] hover:bg-white shadow-md hover:scale-105"
                                }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>
            </section>

            {/* MENU ITEMS */}
            {activeFilter === "all" ? (
                // Show all categories grouped
                <>
                    <MenuSection title="Appetizers">
                        {menuData.filter(item => item.category === "appetizers").map(item => (
                            <MenuCard
                                key={item.id}
                                item={item}
                                onAddClick={() => setCustomizationModal(item)}
                            />
                        ))}
                    </MenuSection>
                    <MenuSection title="Artisanal Sourdough Pizza">
                        {menuData.filter(item => item.category === "pizza").map(item => (
                            <MenuCard
                                key={item.id}
                                item={item}
                                onAddClick={() => setCustomizationModal(item)}
                            />
                        ))}
                    </MenuSection>
                    <MenuSection title="Dessert">
                        {menuData.filter(item => item.category === "dessert").map(item => (
                            <MenuCard
                                key={item.id}
                                item={item}
                                onAddClick={() => setCustomizationModal(item)}
                            />
                        ))}
                    </MenuSection>
                </>
            ) : (
                // Show filtered category
                <MenuSection title={
                    activeFilter === "appetizers" ? "Appetizers" :
                        activeFilter === "pizza" ? "Artisanal Sourdough Pizza" :
                            "Dessert"
                }>
                    {filteredMenu.map(item => (
                        <MenuCard
                            key={item.id}
                            item={item}
                            onAddClick={() => setCustomizationModal(item)}
                        />
                    ))}
                </MenuSection>
            )}

            <div className="h-32 md:h-32 pb-24 md:pb-0" />

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
                                <a href="#" className="w-12 h-12 bg-[#565c40] rounded-full flex items-center justify-center hover:bg-[#88f59b] transition-colors">
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

            {/* CUSTOMIZATION MODAL */}
            {customizationModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
                    <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-2xl font-black text-[#565c40]">
                                {customizationModal.title}
                            </h3>
                            <button
                                onClick={() => {
                                    setCustomizationModal(null);
                                }}
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                            >
                                <X size={20} className="text-gray-700" />
                            </button>
                        </div>

                        <div className="mb-6">
                            <Image
                                src={customizationModal.image}
                                alt={customizationModal.title}
                                width={300}
                                height={300}
                                className="w-full h-48 object-cover rounded-2xl mb-4"
                            />
                            <p className="text-gray-700 mb-4">
                                {customizationModal.description}
                            </p>
                        </div>

                        {customizationModal.isPizza && (
                            <div className="mb-6 p-4 bg-[#88f59b]/10 rounded-2xl border border-[#88f59b]/30">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-bold text-[#565c40] mb-1">
                                            Size: Small (10")
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            Standard size for all pizzas
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="flex items-center justify-between mb-4">
                            <span className="text-lg font-bold text-[#565c40]">Total:</span>
                            <span className="text-2xl font-black text-[#565c40]">
                                ₹{customizationModal.price.toLocaleString('en-IN')}
                            </span>
                        </div>

                        <button
                            onClick={handleAddToCart}
                            className="w-full py-4 bg-gradient-to-r from-[#88f59b] to-[#5fd672] rounded-full font-bold text-slate-900 hover:scale-105 transition-transform shadow-lg"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            )}
            {/* FOOTER */}
            <footer className="bg-[#565c40] text-white py-12 px-6">
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
                                <li><a href="/#menu" className="hover:text-[#88f59b] transition-colors">Menu</a></li>
                                <li><a href="/#about" className="hover:text-[#88f59b] transition-colors">About Us</a></li>
                                <li><a href="/#location" className="hover:text-[#88f59b] transition-colors">Location</a></li>
                                <li><a href="/menu" className="hover:text-[#88f59b] transition-colors">Full Menu</a></li>
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
                                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#88f59b] transition-colors">
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

/* ---------------- Components ---------------- */

function MenuSection({ title, children }) {
    return (
        <section className="max-w-7xl mx-auto px-6 py-10">
            <h2 className="text-4xl md:text-5xl font-black text-[#565c40] mb-12 text-center">
                {title}
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">  
                {children}
            </div>
        </section>
    );
}

function MenuCard({ item, onAddClick }) {
    return (
        <div className="bg-white/80 backdrop-blur rounded-3xl p-6 border border-[#565c40]/20 shadow-lg hover:shadow-xl transition relative group flex flex-col h-full">
            {/* IMAGE */}
            <div className="aspect-[4/4] rounded-2xl bg-[#88f59b]/20 flex items-center justify-center mb-4 overflow-hidden">
                <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                />
            </div>

            <h3 className="text-2xl font-bold text-[#565c40] mb-3">
                {item.title}
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4 flex-grow">
                {item.description}
            </p>

            <div className="flex items-center justify-between mt-auto">
                <span className="text-xl font-black text-[#565c40]">
                    ₹{item.price.toLocaleString('en-IN')}
                </span>
                <button
                    onClick={onAddClick}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#88f59b] to-[#5fd672] rounded-full font-bold text-slate-900 hover:scale-105 transition-transform shadow-md"
                >
                    <Plus size={20} />
                    Add
                </button>
            </div>
        </div>
    );
}
