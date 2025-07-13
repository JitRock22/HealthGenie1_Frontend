import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';
import AlertModal from './AlertModel.jsx';

const Hero = ({ onLoginClick }) => {
  const [user, setUser] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  const handleGetStarted = () => {
    if (user) {
      window.location.href = 'https://doctor-companion-backend.onrender.com';
    } else {
      setShowAlert(true);
    }
  };

  return (
    <>
      <div id="home" className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 bg-bg-primary h-screen">
        <div className="flex flex-col items-start gap-4 w-full md:w-1/2">
          <h1 className="text-3xl text-primary-dark font-bold md:text-4xl lg:text-5xl">
            Your Voice is Enough.<br />
            <span className=""> AI</span> Delivers the Rest.
          </h1>
          <p className="text-gray-600">
            Speak your symptoms, upload a photo, and receive concise medical insight instantly.
            <br /> No appointments. No waiting. Just real-time AI medical help...
          </p>

          <div className="flex flex-row mt-3 items-center justify-center gap-4 w-full md:w-auto">
            <motion.button
              onClick={handleGetStarted}
              className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark shadow-lg transition duration-300"
              whileHover={{ scale: 1.05 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </motion.button>

            <button className="text-primary bg-white border px-6 py-3 font-bold border-gray-300 rounded-lg hover:bg-gray-100">
              <a href="#how-it-works">How it Works</a>
            </button>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg">
          <img src="/hero-img.jpg" alt="Hero" />
        </div>
      </div>

      {showAlert && (
        <AlertModal
          message="Please log in or sign up to get started."
          onClose={() => {
            setShowAlert(false);
            onLoginClick && onLoginClick(); // Optional: open login modal
          }}
        />
      )}
    </>
  );
};

export default Hero;
