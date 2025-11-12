import React from 'react';
import BlurText from '../React/BlurText/BlurText';
import AnimatedContent from '../React/AnimatedContent/AnimatedContent';

const About: React.FC = () => {
    return (
        <section id="about" className="min-h-screen flex items-start px-6 md:px-12 pt-2">
            <div className="max-w-7xl w-full mx-auto">
                {/* Título de la sección */}
                <div className="relative mb-12">
                    <h2 className="cursor-target relative left-0 md:-left-2 text-6xl md:text-7xl font-extrabold text-white">
                        <BlurText
                            text="About Me"
                            delay={385}
                            animateBy="letters"
                            direction="bottom"
                        />
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">

                    {/* Columna principal */}
                    <div className="space-y-8">
                        <AnimatedContent
                            distance={90}
                            direction="vertical"
                            reverse={false}
                            duration={2}
                            ease="bounce.out"
                            initialOpacity={0.6}
                            animateOpacity
                            scale={1.1}
                            threshold={0.2}
                            delay={0.2}>
                            {/* Introducción */}
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 cursor-target transition-all duration-300 hover:bg-white/10">
                                <h3 className="text-white text-xl font-semibold mb-3">Who I am</h3>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    I'm Nicolás, a frontend developer from Colombia who loves crafting clean, interactive, and human-centered digital experiences. I mix creativity and logic to turn ideas into something people can actually enjoy using.
                                </p>
                            </div>
                        </AnimatedContent>

                        {/* Especialización */}
                        <AnimatedContent
                            distance={90}
                            direction="vertical"
                            reverse={false}
                            duration={2}
                            ease="bounce.out"
                            initialOpacity={0.6}
                            animateOpacity
                            scale={1.1}
                            threshold={0.2}
                            delay={0.2}>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 cursor-target transition-all duration-300 hover:bg-white/10">
                                <h3 className="text-white text-xl font-semibold mb-3">What I do</h3>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    I specialize in building responsive and dynamic web apps using React, Vite, and Tailwind CSS. I'm also comfortable working with APIs, state management, and creating clean, scalable component structures.
                                </p>
                            </div>
                        </AnimatedContent>

                        {/* Visión */}
                        <AnimatedContent
                            distance={90}
                            direction="vertical"
                            reverse={false}
                            duration={2}
                            ease="bounce.out"
                            initialOpacity={0.6}
                            animateOpacity
                            scale={1.1}
                            threshold={0.2}
                            delay={0.2}>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 cursor-target transition-all duration-300 hover:bg-white/10">
                                <h3 className="text-white text-xl font-semibold mb-3">My vision</h3>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    I believe good design is invisible — it should just feel right. My goal is to keep learning, keep creating, and keep making the web a little more aesthetic and human.
                                </p>
                            </div>
                        </AnimatedContent>
                    </div>

                    {/* Columna de Fun Facts */}
                    <div className="flex items-center">
                        <AnimatedContent
                            distance={90}
                            direction="vertical"
                            reverse={false}
                            duration={2}
                            ease="bounce.out"
                            initialOpacity={0.6}
                            animateOpacity
                            scale={1.1}
                            threshold={0.2}
                            delay={0.2}>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 cursor-target transition-all duration-300 hover:bg-white/10 w-full">
                                <h3 className="text-white text-xl font-semibold mb-8">Fun facts about me</h3>
                                <ul className="space-y-6">
                                    <li className="flex items-center gap-4 text-gray-300 text-lg group cursor-target">
                                        <span className="text-3xl group-hover:scale-125 transition-transform">☕</span>
                                        <span>Coffee-powered developer</span>
                                    </li>
                                    <li className="flex items-center gap-4 text-gray-300 text-lg group cursor-target">
                                        <span className="text-3xl group-hover:scale-125 transition-transform">🎧</span>
                                        <span>Music makes me code faster</span>
                                    </li>
                                    <li className="flex items-center gap-4 text-gray-300 text-lg group cursor-target">
                                        <span className="text-3xl group-hover:scale-125 transition-transform">🏍️</span>
                                        <span>Big fan of late-night rides</span>
                                    </li>
                                </ul>
                            </div>
                        </AnimatedContent>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;