import React from 'react';
import BlurText from '../React/BlurText/BlurText';
import AnimatedContent from '../React/AnimatedContent/AnimatedContent';

const About: React.FC = () => {
    return (
        <section id="about" className="flex items-start px-6 md:px-12 py-16">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Card 1 */}
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
                            <h3 className="text-white text-xl font-semibold mb-3">Who I am</h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                I'm Nicolás, a frontend developer from Colombia who loves crafting clean, interactive, and human-centered digital experiences. I mix creativity and logic to turn ideas into something people can actually enjoy using.
                            </p>
                        </div>
                    </AnimatedContent>

                    {/* Card 2 */}
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
                            <h3 className="text-white text-xl font-semibold mb-3">What I do</h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                I specialize in building responsive and dynamic web apps using React, Vite, and Tailwind CSS. I'm also comfortable working with APIs, state management, and creating clean, scalable component structures.
                            </p>
                        </div>
                    </AnimatedContent>

                    {/* Card 3 */}
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
                            <h3 className="text-white text-xl font-semibold mb-3">My vision</h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                I believe good design is invisible — it should just feel right. My goal is to keep learning, keep creating, and keep making the web a little more aesthetic and human.
                            </p>
                        </div>
                    </AnimatedContent>

                    {/* Card 4 */}
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
                            <h3 className="text-white text-xl font-semibold mb-4">Fun facts about me</h3>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-center gap-4"><span className="text-2xl">☕</span><span>Coffee-powered developer</span></li>
                                <li className="flex items-center gap-4"><span className="text-2xl">🎧</span><span>Music makes me code faster</span></li>
                                <li className="flex items-center gap-4"><span className="text-2xl">🏍️</span><span>Big fan of late-night rides</span></li>
                            </ul>
                        </div>
                    </AnimatedContent>
                </div>
            </div>
        </section>
    );
};

export default About;