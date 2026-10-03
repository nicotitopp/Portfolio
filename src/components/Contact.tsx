import React, { useState } from 'react';
import BlurText from '../React/BlurText/BlurText';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle'|'sent'|'error'>('idle');

    const siteEmail = 'dilan182003@gmail.com';
    const sitePhone = '+57 314 765 4749';
    const whatsappUrl = 'https://wa.me/573147654749';

    function validate() {
        if (!name.trim() || !email.trim() || !message.trim()) return false;
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    const handleSubmit: React.FormEventHandler = (e) => {
        e.preventDefault();
        if (!validate()) {
            setStatus('error');
            return;
        }

        const subject = encodeURIComponent(`Contact from Portfolio - ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${siteEmail}&su=${subject}&body=${body}`;

        window.open(gmailUrl, '_blank');
        setStatus('sent');
        setTimeout(() => setStatus('idle'), 2000);
    };

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(siteEmail);
            setStatus('sent');
            setTimeout(() => setStatus('idle'), 1500);
        } catch {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 1500);
        }
    };

    return (
        <section id="contact" className="min-h-[60vh] flex items-center px-6 md:px-12 py-16">
            <div className="max-w-7xl w-full mx-auto">
                <div className="relative mb-16">
                    <h2 className="cursor-target relative left-0 md:-left-2 text-6xl md:text-7xl font-extrabold text-white">
                        <BlurText
                            text="Contact"
                            delay={385}
                            animateBy="letters"
                            direction="bottom"
                        />
                    </h2>
                    <p className="mt-4 text-gray-400 text-lg max-w-2xl">
                        Let's connect! I am available immediately for on-site or remote roles.
                    </p>
                </div> 

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left: Contact Info + Quick Actions */}
                    <div className="space-y-6">
                        <div className="cursor-target bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                            <h3 className="text-xl font-semibold text-white mb-2">Get in touch ✉️</h3>
                            <p className="text-gray-300 text-sm leading-relaxed mb-6">
                                Feel free to reach out for job opportunities, project inquiries, technical collaborations, or just to say hello.
                            </p>

                            <div className="flex flex-wrap gap-3">
                                <button
                                    onClick={handleCopyEmail}
                                    className="px-4 py-2.5 bg-white/10 hover:bg-white/20 rounded-xl text-white text-sm font-medium border border-white/20 transition-all hover:scale-105"
                                    aria-label="Copy email"
                                >
                                    📋 Copy email
                                </button>
                                <a 
                                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteEmail}&su=${encodeURIComponent('Hello Nicolas')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2.5 bg-indigo-500/20 text-white hover:bg-indigo-500/30 rounded-xl text-sm font-medium border border-indigo-500/30 transition-all hover:scale-105"
                                >
                                    Open Gmail
                                </a>
                                <a 
                                    href="/CV_Dilan_Nicolas_Pena_English.pdf"
                                    download="CV_Dilan_Nicolas_Pena_English.pdf"
                                    className="px-4 py-2.5 bg-emerald-500/20 text-emerald-200 hover:bg-emerald-500/30 rounded-xl text-sm font-medium border border-emerald-500/30 transition-all hover:scale-105"
                                >
                                    📄 Download CV
                                </a>
                            </div>

                            {status === 'sent' && (
                                <p className="mt-4 text-sm text-green-300">✓ Action completed successfully!</p>
                            )}
                            {status === 'error' && (
                                <p className="mt-4 text-sm text-rose-400">Please complete all fields with a valid email.</p>
                            )}
                        </div>

                        <div className="cursor-target bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                            <h4 className="text-white font-semibold mb-4 text-lg">Direct Details</h4>
                            <ul className="text-gray-300 space-y-3 text-sm">
                                <li className="flex items-center gap-3">
                                    <span className="text-indigo-400">📍</span>
                                    <span><strong>Location:</strong> Cali, Colombia</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-indigo-400">📱</span>
                                    <span><strong>Phone / WhatsApp:</strong> <a className="text-white hover:underline" href={whatsappUrl} target="_blank" rel="noreferrer">{sitePhone}</a></span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-indigo-400">💼</span>
                                    <span><strong>LinkedIn:</strong> <a className="text-white hover:underline" href="https://www.linkedin.com/in/dilannicolas/" target="_blank" rel="noreferrer">linkedin.com/in/dilannicolas</a></span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-indigo-400">💻</span>
                                    <span><strong>GitHub:</strong> <a className="text-white hover:underline" href="https://github.com/nicotitopp" target="_blank" rel="noreferrer">github.com/nicotitopp</a></span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right: Message Form */}
                    <form onSubmit={handleSubmit} className="cursor-target bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-4">Send a direct message</h3>
                            <label className="block mb-3">
                                <span className="text-gray-300 text-sm">Your Name</span>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="mt-2 w-full px-3 py-2 rounded-xl bg-black/20 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
                                    placeholder="e.g. Jane Doe"
                                    aria-label="Name"
                                />
                            </label>

                            <label className="block mb-3">
                                <span className="text-gray-300 text-sm">Your Email</span>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="mt-2 w-full px-3 py-2 rounded-xl bg-black/20 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
                                    placeholder="jane@company.com"
                                    aria-label="Email"
                                    type="email"
                                />
                            </label>

                            <label className="block mb-4">
                                <span className="text-gray-300 text-sm">Message</span>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="mt-2 w-full px-3 py-2 rounded-xl bg-black/20 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400/50 h-32 resize-none"
                                    placeholder="Tell me about your project or role..."
                                    aria-label="Message"
                                />
                            </label>
                        </div>

                        <div className="flex items-center gap-3 pt-2">
                            <button
                                type="submit"
                                className="px-5 py-2.5 bg-indigo-500/30 hover:bg-indigo-500/50 text-white font-medium text-sm rounded-xl border border-indigo-500/40 transition-all hover:scale-105"
                            >
                                Send via Gmail
                            </button>
                            <button
                                type="button"
                                onClick={() => { setName(''); setEmail(''); setMessage(''); setStatus('idle'); }}
                                className="px-4 py-2.5 bg-transparent text-gray-400 hover:text-white border border-white/10 rounded-xl text-sm transition-colors"
                            >
                                Reset
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
