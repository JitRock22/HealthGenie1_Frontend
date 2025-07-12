
import React from 'react';

const About = () => {
    return (
        <>
            <div id="about" className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-8 px-8 h-auto md:h-screen mt-10 md:mt-0">
                <div className="rounded-xl overflow-hidden shadow-lg hidden md:block">
                    <img src="/public/about_img.jpg" alt="Hero" />
                </div>
                <div className="flex flex-col items-start gap-4 w-full md:w-1/2">
                    <h1 className="text-3xl text-primary-dark font-bold md:text-4xl lg:text-5xl">
                        🩺 About HealthGenie
                    </h1>
                    <p className="text-gray-600 text-xl">
                        HealthGenie is your AI-powered healthcare companion, built to offer instant, reliable medical insights anytime, anywhere. Whether you're facing unusual symptoms, need quick answers, or want to understand a health report, HealthGenie is here to guide you — not replace your doctor, but assist you until you reach one.
                        <br />
                        <br />
                    </p>

                    <div className="flex flex-col md:flex-row md:mt-3 items-center justify-center gap-2 w-full md:w-auto">
                        <div>

                            <ul className='flex flex-col gap-2 md:gap-4'>
                                <li className='bg-box text-white p-4 rounded-xl'><strong>✅ AI Symptom Checker</strong> Understand possible causes in seconds</li>
                                <li className='bg-box text-white p-4 rounded-xl'><strong>🎙️ Voice-Based Interaction</strong> Speak naturally, get instant responses</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='flex flex-col gap-4'>
                                <li className='bg-box text-white p-4 rounded-xl'><strong>🧠 Image & Report Analysis</strong> Upload visuals for real-time insights</li>
                                <li className='bg-box text-white p-4 rounded-xl'><strong>🔒 Privacy First </strong> Your health data stays safe and secure</li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default About