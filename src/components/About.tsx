import React from 'react';
import BlurText from '../React/BlurText/BlurText';
import AnimatedContent from '../React/AnimatedContent/AnimatedContent';

const About: React.FC = () => {
    return (
        <section id="about" className="flex items-start px-6 md:px-12 py-16">
            <div className="max-w-7xl w-full mx-auto">
                {/* Section title */}
                <div className="relative mb-12">
                    <h2 className="cursor-target relative left-0 md:-left-2 text-6xl md:text-7xl font-extrabold text-white">
                        <BlurText
                            text="About Me"
                            delay={385}
                            animateBy="letters"
                            direction="bottom"
                        />
                    </h2>
                    <p className="mt-4 text-gray-400 text-lg max-w-2xl">
                        Bridging software development, workflow automation, and IT infrastructure.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Card 1: Who I am */}
                    <AnimatedContent
                        distance={60}
                        direction="vertical"
                        reverse={false}
                        duration={1.6}
                        ease="power3.out"
                        initialOpacity={0.6}
                        animateOpacity
                        scale={1.03}
                        threshold={0.15}
                        delay={0.1}>
                        <div className="h-full flex flex-col bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 cursor-target transition-all duration-300 hover:bg-white/10">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-2xl">👨‍💻</span>
                                <h3 className="text-white text-xl font-semibold">Who I am</h3>
                            </div>
                            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                                I'm Dilan Nicolás Peña, a Software Development Technologist based in Cali, Colombia. I combine strong analytical problem-solving with web development, enterprise IT support, and automation to turn business challenges into efficient digital systems.
                            </p>
                        </div>
                    </AnimatedContent>

                    {/* Card 2: What I do */}
                    <AnimatedContent
                        distance={60}
                        direction="vertical"
                        reverse={false}
                        duration={1.6}
                        ease="power3.out"
                        initialOpacity={0.6}
                        animateOpacity
                        scale={1.03}
                        threshold={0.15}
                        delay={0.15}>
                        <div className="h-full flex flex-col bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 cursor-target transition-all duration-300 hover:bg-white/10">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-2xl">⚡</span>
                                <h3 className="text-white text-xl font-semibold">What I do</h3>
                            </div>
                            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                                I build modern web applications using React, TypeScript, and Tailwind CSS. Beyond web development, I develop AI-driven automation solutions, integrate platforms via REST APIs (Close CRM, Instantly), manage relational databases (SQL / MySQL), and handle IT asset infrastructure.
                            </p>
                        </div>
                    </AnimatedContent>

                    {/* Card 3: Education & Credentials */}
                    <AnimatedContent
                        distance={60}
                        direction="vertical"
                        reverse={false}
                        duration={1.6}
                        ease="power3.out"
                        initialOpacity={0.6}
                        animateOpacity
                        scale={1.03}
                        threshold={0.15}
                        delay={0.2}>
                        <div className="h-full flex flex-col bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 cursor-target transition-all duration-300 hover:bg-white/10">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-2xl">🎓</span>
                                <h3 className="text-white text-xl font-semibold">Education & Credentials</h3>
                            </div>
                            <ul className="space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                                <li>
                                    <strong className="text-white">Multimedia Engineering</strong> (In progress)
                                    <span className="block text-gray-400 text-xs">Universidad Nacional Abierta y a Distancia (UNAD)</span>
                                </li>
                                <li>
                                    <strong className="text-white">Software Development Technology</strong> (2022 – 2026)
                                    <span className="block text-gray-400 text-xs">Universidad del Valle · Solid foundations in networks, databases & software engineering</span>
                                </li>
                                <li>
                                    <strong className="text-white">Digital Transformation & IT Support</strong> (2025)
                                    <span className="block text-gray-400 text-xs">SENA Trainee Certification</span>
                                </li>
                            </ul>
                        </div>
                    </AnimatedContent>

                    {/* Card 4: Languages & Highlights */}
                    <AnimatedContent
                        distance={60}
                        direction="vertical"
                        reverse={false}
                        duration={1.6}
                        ease="power3.out"
                        initialOpacity={0.6}
                        animateOpacity
                        scale={1.03}
                        threshold={0.15}
                        delay={0.25}>
                        <div className="h-full flex flex-col bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 cursor-target transition-all duration-300 hover:bg-white/10">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-2xl">🌐</span>
                                <h3 className="text-white text-xl font-semibold">Languages & Strengths</h3>
                            </div>
                            <ul className="space-y-3 text-gray-300 text-sm md:text-base">
                                <li className="flex items-center gap-3">
                                    <span className="text-lg">🗣️</span>
                                    <span><strong>Spanish:</strong> Native · <strong>English:</strong> B1 (technical reading & conversational practice)</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-lg">📊</span>
                                    <span>Database control, data validation, and automated reporting</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-lg">🛠️</span>
                                    <span>Root-cause incident diagnosis & enterprise SaaS support</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-lg">☕</span>
                                    <span>Fast learner, detail-oriented, and coffee-fueled coder</span>
                                </li>
                            </ul>
                        </div>
                    </AnimatedContent>
                </div>
            </div>
        </section>
    );
};

export default About;