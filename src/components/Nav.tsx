import React, { useState } from "react";

const Nav: React.FC = () => {
    const [open, setOpen] = useState(false);

    const scrollTo = (selector: string) => {
        document.querySelector(selector)?.scrollIntoView({
            behavior: 'smooth'
        });
        setOpen(false);
    };

    return (
        <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
            <nav className="rounded-xl backdrop-blur-lg bg-white/5 border border-white/10 shadow-lg">
                <div className="mx-4 sm:mx-6 lg:mx-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <a
                                href="#home"
                                className="text-white font-semibold text-lg select-none flex items-center gap-2"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollTo('#home');
                                }}
                            >
                                <span className="text-indigo-400 font-bold">&lt;/&gt;</span>
                                <span>Dev-Peña</span>
                            </a>
                        </div>

                        {/* Desktop Links */}
                        <div className="hidden md:flex md:items-center md:space-x-8">
                            <a
                                href="#about"
                                className="text-gray-200 hover:text-white transition text-sm font-medium"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollTo('#about');
                                }}
                            >
                                About
                            </a>
                            <a
                                href="#experience"
                                className="text-gray-200 hover:text-white transition text-sm font-medium"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollTo('#experience');
                                }}
                            >
                                Experience
                            </a>
                            <a
                                href="#projects"
                                className="text-gray-200 hover:text-white transition text-sm font-medium"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollTo('#projects');
                                }}
                            >
                                Projects
                            </a>
                            <a
                                href="#contact"
                                className="text-gray-200 hover:text-white transition text-sm font-medium"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollTo('#contact');
                                }}
                            >
                                Contact
                            </a>
                            <a
                                href="/CV_Dilan_Nicolas_Pena_English.pdf"
                                download="CV_Dilan_Nicolas_Pena_English.pdf"
                                className="px-3.5 py-1.5 rounded-lg bg-indigo-500/20 text-indigo-200 text-xs font-semibold border border-indigo-400/30 hover:bg-indigo-500/30 transition-all hover:scale-105"
                            >
                                CV PDF ↓
                            </a>
                        </div>

                        {/* Mobile hamburger */}
                        <div className="md:hidden">
                            <button
                                aria-label="Toggle menu"
                                onClick={() => setOpen((v) => !v)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white focus:outline-none"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    {open ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                {open && (
                    <div className="md:hidden px-4 pb-4">
                        <div className="flex flex-col space-y-2 pt-2 border-t border-white/10">
                            <a
                                href="#about"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-white"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollTo('#about');
                                }}
                            >
                                About
                            </a>
                            <a
                                href="#experience"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-white"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollTo('#experience');
                                }}
                            >
                                Experience
                            </a>
                            <a
                                href="#projects"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-white"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollTo('#projects');
                                }}
                            >
                                Projects
                            </a>
                            <a
                                href="#contact"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-white"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollTo('#contact');
                                }}
                            >
                                Contact
                            </a>
                            <a
                                href="/CV_Dilan_Nicolas_Pena_English.pdf"
                                download="CV_Dilan_Nicolas_Pena_English.pdf"
                                className="block px-3 py-2 rounded-md text-base font-medium text-indigo-300 hover:text-white bg-indigo-500/10"
                                onClick={() => setOpen(false)}
                            >
                                📄 Download CV (PDF)
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Nav;
