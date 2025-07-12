import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Anjali S.",
    role: "College Student",
    text: "HealthGenie gave me peace of mind when I couldn't visit a doctor. It's fast, smart, and super easy to use.",
  },
  {
    name: "Ravi K.",
    role: "IT Professional",
    text: "The voice feature feels like I’m actually talking to a doctor. Amazing innovation!",
  },
  {
    name: "Dr. Meena Verma",
    role: "General Physician",
    text: "As a doctor, I see HealthGenie as a great assistive tool for early health guidance.",
  },
  {
    name: "Priya D.",
    role: "Working Mom",
    text: "Being able to talk and upload my child’s reports anytime is a lifesaver!",
  },
  {
    name: "Farhan M.",
    role: "Engineering Student",
    text: "HealthGenie gave me answers quickly when I was feeling uneasy during exams.",
  },
]

const TestimonialsSlider = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1,
      spacing: 20,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 24,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 32,
        },
      },
    },
  })

  return (
    <section className="bg-white py-20 px-4 md:px-20 relative">
      <h2 id="reviews" className="text-4xl md:text-5xl font-bold text-center text-primary mb-6">
        You’re Not Alone — Hear from Real Users
      </h2>
      <p className="text-center text-gray-500 mb-10 text-lg max-w-xl mx-auto">
        Hear directly from people who trust HealthGenie every day.
      </p>

      <div className="relative">
        {/* Navigation buttons */}
        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 shadow-md rounded-full z-10 hover:bg-gray-100 hidden md:block"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="keen-slider__slide bg-gray-50 p-6 rounded-xl shadow-sm text-center border-gray-200"
            >
              <p className="text-gray-700 italic mb-4 leading-relaxed">"{t.text}"</p>
              <h4 className="font-semibold text-lg text-primary">{t.name}</h4>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 shadow-md rounded-full z-10 hover:bg-gray-100 hidden md:block"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </section>
  )
}

export default TestimonialsSlider
