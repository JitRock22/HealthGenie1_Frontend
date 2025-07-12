import React from "react"

const plans = [
  {
    name: "Free",
    price: "₹0",
    features: [
      "Basic symptom checker",
      "Limited voice queries",
      "AI image analysis (5/month)",
      "Community support",
    ],
    button: "Get Started",
    highlight: false,
  },
  {
    name: "Pro",
    price: "₹299/mo",
    features: [
      "Unlimited symptom checks",
      "Unlimited voice commands",
      "Full image/report analysis",
      "Health Score tracking",
      "Priority email support",
    ],
    button: "Start Pro",
    highlight: true,
  },
  {
    name: "Premium",
    price: "₹599/mo",
    features: [
      "Everything in Pro",
      "24/7 doctor chat access",
      "Early access to new features",
      "Personalized AI Health Coach",
      "Dedicated support",
    ],
    button: "Go Premium",
    highlight: false,
  },
]

const Pricing = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="text-center mb-12">
        <h1 id="pricing" className="text-4xl md:text-5xl font-bold text-primary">Choose Your Plan</h1>
        <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
          Simple, transparent pricing — no hidden fees. Start for free, upgrade anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`p-8 rounded-2xl shadow-md border transition duration-300 ${
              plan.highlight
                ? "border-primary bg-blue-50 scale-105"
                : "bg-white hover:shadow-lg hover:scale-105"
            }`}
          >
            {plan.highlight && (
              <span className="inline-block mb-4 px-3 py-1 text-sm font-medium bg-blue-100 text-primary rounded-full ">
                Most Popular
              </span>
            )}
            <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">{plan.name}</h2>
            <p className="text-center text-3xl font-extrabold text-primary">{plan.price}</p>
            <ul className="mt-6 space-y-3 text-gray-600 text-sm md:text-base">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-start gap-2">
                  ✅ <span>{f}</span>
                </li>
              ))}
            </ul>
            <button className="mt-8 w-full bg-primary text-white font-semibold py-2 rounded-lg hover:bg-primary-dark transition">
              {plan.button}
            </button>
          </div>
        ))}
      </div>

      
      <div className="text-center mt-16">
        <p className="text-gray-600">Still not sure which plan suits you?</p>
        <button className="mt-3 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark">
          Contact Our Team
        </button>
      </div>
    </section>
  )
}

export default Pricing
