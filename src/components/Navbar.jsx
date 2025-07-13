import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';
import { motion, AnimatePresence } from 'framer-motion';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

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

    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Logged in user:", currentUser); // ✅ check this in console
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);


    const handleClick = (path) => {
        setActiveAnchor(path);
        setMenuOpen(false);
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setDropdownOpen(false);
            // alert("Logged out!");
        } catch (error) {
            alert("Logout failed: " + error.message);
        }
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
                                className={`px-1 ${activeAnchor === item.path
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

                {/* Right side: login/signup or user profile */}
                <div className="flex items-center gap-4 cursor-pointer relative">
                    {!user ? (
                        <>
                            <button
                                onClick={() => setShowLogin(true)}
                                className="hidden lg:block text-primary bg-white border px-4 py-2 font-bold border-gray-300 rounded-lg hover:bg-gray-100"
                            >
                                Log in
                            </button>
                            <button
                                onClick={() => setShowSignup(true)}
                                className="hidden lg:block bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark"
                            >
                                Signup Now
                            </button>
                        </>
                    ) : (
                        <div className="relative flex items-center gap-2">
                            <img
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                src={user?.photoURL || "/default-user.png"}
                                alt="Profile"
                                className="w-10 h-10 rounded-full border-2 border-primary cursor-pointer"
                                referrerPolicy="no-referrer"
                            />

                            <span

                                className="hidden lg:block font-medium text-gray-700 hover:text-primary cursor-pointer"
                            >
                                {user.displayName || "User"}
                            </span>

                            {/* Dropdown */}
                            {dropdownOpen && (
                                <div className="absolute right-0 top-0 mt-12 bg-white shadow-lg rounded-lg w-48 z-50">
                                    <div className="px-4 py-2 text-sm text-primary-light truncate">{user.email}</div>
                                    
                                    <button
                                        onClick={handleLogout}
                                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Mobile menu toggle */}
                    <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden z-[60]">
                        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {menuOpen && (
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
                                        className={`block px-2 py-1 ${activeAnchor === item.path
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
                            {!user ? (
                                <>
                                    <button
                                        onClick={() => {
                                            setMenuOpen(false);
                                            setShowLogin(true);
                                        }}
                                        className="text-primary bg-white border px-4 py-2 font-bold border-gray-300 rounded-lg hover:bg-gray-100 w-full"
                                    >
                                        Log in
                                    </button>
                                    <button
                                        onClick={() => {
                                            setMenuOpen(false);
                                            setShowSignup(true);
                                        }}
                                        className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark w-full"
                                    >
                                        Sign Up
                                    </button>
                                </>
                            ) : (
                                <>
                                    <div className="text-gray-600 text-sm">{user.email}</div>
                                    <button
                                        onClick={() => {
                                            handleLogout();
                                            setMenuOpen(false);
                                        }}
                                        className="text-red-600 border border-red-500 px-4 py-2 rounded-lg hover:bg-red-50 w-full"
                                    >
                                        Logout
                                    </button>
                                </>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Login & Signup Modals */}
            {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
            {showSignup && <SignupModal onClose={() => setShowSignup(false)} />}
        </div>
    );
};

export default Navbar;
