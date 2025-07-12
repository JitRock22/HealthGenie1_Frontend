

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Features', path: '#features' },
    { name: 'Reviews', path: '#reviews' },
    { name: 'Pricing', path: '#pricing' }
];

const Navbar = () => {
    const [activeAnchor, setActiveAnchor] = useState('#home');
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = (path) => {
        setActiveAnchor(path);
        setMenuOpen(false);
    };

    return (
        <div className="bg-bg-primary shadow-md px-5 py-3 sticky top-0 z-50">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <span className="flex items-center gap-2 text-primary-font">
                    <img src="/logo.jpg" alt="Logo" className="w-5 sm:w-10" />
                    <h2 className="text-xl font-bold text-primary">HealthGenie</h2>
                </span>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 text-lg font-semibold text-primary-font relative">
                    {navItems.map((item) => (
                        <li key={item.name} className="relative">
                            <a
                                href={item.path}
                                onClick={() => handleClick(item.path)}
                                className={`px-1 ${
                                    activeAnchor === item.path
                                        ? 'text-primary'
                                        : 'text-gray-700 hover:text-primary'
                                }`}
                            >
                                {item.name}
                            </a>
                            {activeAnchor === item.path && (
                                <div className="absolute left-0 right-0 -bottom-1 h-[2px] bg-primary rounded transition-all duration-300" />
                            )}
                        </li>
                    ))}
                </ul>

                {/* Right Buttons + Toggle */}
                <div className="flex items-center gap-4 cursor-pointer">
                    <button className=" hidden lg:block text-primary bg-white border px-4 py-2 font-bold border-gray-300 rounded-lg hover:bg-gray-100">
                        Log in
                    </button>
                    <button className="hidden lg:block bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark">
                        Signup Now
                    </button>
                    {/* Mobile Menu Toggle */}
                    <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden z-[60]">
                        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Framer Motion Overlay & Sidebar */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        {/* Backdrop Overlay */}
                       

                        {/* Animated Sidebar */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 p-6 flex flex-col gap-6"
                        >
                            <ul className="text-base font-semibold text-primary-font">
                                {navItems.map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.path}
                                            onClick={() => handleClick(item.path)}
                                            className={`block px-2 py-1 ${
                                                activeAnchor === item.path
                                                    ? 'text-primary'
                                                    : 'text-gray-700 hover:text-primary'
                                            }`}
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-col gap-3 mt-auto">
                                <button className="text-primary bg-white border px-4 py-2 font-bold border-gray-300 rounded-lg hover:bg-gray-100 w-full">
                                    Log in
                                </button>
                                <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark w-full">
                                    Sign Up
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
