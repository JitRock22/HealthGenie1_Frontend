import React from 'react';

const featureData = [
  {
    emoji: "🤖",
    title: "AI-Powered Symptom Checker",
    description: "Instantly understand potential causes of your symptoms with intelligent analysis.",
  },
  {
    emoji: "🎙️",
    title: "Voice-Based Interaction",
    description: "Interact with HealthGenie using natural language voice commands.",
  },
  {
    emoji: "🖼️",
    title: "Image & Report Analysis",
    description: "Effortlessly analyze medical images and reports for accurate insights.",
  },
  {
    emoji: "🕒",
    title: "24/7 Virtual Health Assistant",
    description: "Get support anytime, even during late nights or emergencies.",
  },
  {
    emoji: "📈",
    title: "Health Score Tracking",
    description: "Receive a personalized health score to track your wellness over time.",
  },
  {
    emoji: "🌐",
    title: "Multi-Language Support (Coming Soon)",
    description: "Communicate with HealthGenie in your preferred language.",
  },
];

const Features = () => {
  return (
    <div className="scroll-mt-20 py-16 px-6 md:px-16 bg-gradient-to-b from-white to-[#f9f9ff]">
      <h1 id="features" className="text-4xl md:text-5xl font-bold text-center text-primary mb-4">
        Features
      </h1>
      <p className="text-center text-gray-600 mb-12 text-lg">
        Discover the innovative features that make HealthGenie your go-to health companion.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {featureData.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 text-center transform hover:scale-105 transition-all duration-300 ease-in-out border border-transparent hover:border-blue-400"
          >
            <div className="text-4xl mb-4">{feature.emoji}</div>
            <h2 className="text-2xl font-semibold text-primary-light mb-2">{feature.title}</h2>
            <p className="text-gray-600 text-base">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
