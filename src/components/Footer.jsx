import React from 'react'
import { FaFacebookSquare,FaLinkedin } from "react-icons/fa";
import { FaInstagram,FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-primary">HealthGenie</h2>
          <p className="mt-2 text-sm text-gray-600">
            HealthGenie is your AI-powered health assistant — get instant, voice-enabled medical insights from the comfort of your home.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#home" className="hover:text-primary">Home</a></li>
            <li><a href="#about" className="hover:text-primary">About</a></li>
            <li><a href="#features" className="hover:text-primary">Features</a></li>
            <li><a href="#reviews" className="hover:text-primary">Reviews</a></li>
            <li><a href="#pricing" className="hover:text-primary">Pricing</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-2">Resources</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
            <li><a href="mailto:healthgenie.help@gmail.com" className="hover:text-primary">Email Support</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-semibold mb-2">Stay Connected</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" aria-label="Twitter" className="hover:text-black text-2xl md:text-3xl"><FaSquareXTwitter /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-700 text-2xl md:text-3xl"><FaLinkedin /></a>
            <a href="#" aria-label="Facebook" className="hover:text-blue-700 text-2xl md:text-3xl">
              <FaFacebookSquare />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500 text-2xl md:text-3xl"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 border-t pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} HealthGenie. All rights reserved.
      </div>
    </footer>

  )
}

export default Footer