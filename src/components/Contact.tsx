import React, { useState } from 'react';
import BlurText from '../React/BlurText/BlurText';

const Contacta: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle'|'sent'|'error'>('idle');

    const siteEmail = 'dilan182003@gmail.com'; // reemplaza si quieres otro email

    function validate() {
        if (!name.trim() || !email.trim() || !message.trim()) return false;
        // validación simple de email
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    const handleSubmit: React.FormEventHandler = (e) => {
        e.preventDefault();
        if (!validate()) {
            setStatus('error');
            return;
        }

        // Abrir Gmail en nueva pestaña con asunto y body
        const subject = encodeURIComponent(`Hello Nicolas`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${siteEmail}&su=${subject}&body=${body}`;

        window.open(gmailUrl, '_blank');
        setStatus('sent');
        setTimeout(() => setStatus('idle'), 1500);
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
                </div> 

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left: Información + acciones */}
                    <div className="space-y-6">
                        <div className="cursor-target bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                            <h3 className="text-xl font-semibold text-white mb-2">Say hi 👋</h3>
                            <p className="text-gray-300">If you'd like to collaborate or say hello, send me a message here or copy my email and contact me directly.</p>
                            <div className="mt-6 flex items-center gap-3">
                                <button
                                    onClick={handleCopyEmail}
                                    className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white border border-white/20 transition"
                                    aria-label="Copiar email al portapapeles"
                                >
                                    Copy email
                                </button>
                                <a 
                                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteEmail}&su=${encodeURIComponent('Hello Nicolas')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-transparent text-white/90 hover:text-white rounded-lg border border-white/10 transition"
                                >
                                    Open Gmail
                                </a>
                            </div>
                            {status === 'sent' && (
                                <p className="mt-4 text-sm text-green-300">Copied / opening mail client...</p>
                            )}
                            {status === 'error' && (
                                <p className="mt-4 text-sm text-rose-400">Please complete all fields and use a valid email.</p>
                            )}
                        </div>

                        <div className="cursor-target bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                            <h4 className="text-white font-semibold mb-2">Other ways</h4>
                            <ul className="text-gray-300 space-y-2">
                                <li>LinkedIn: <a className="text-white underline" href="https://www.linkedin.com/in/dilan-nicolas-pe%C3%B1a-866775254/" target="_blank" rel="noreferrer">Profile</a></li>
                                <li>GitHub: <a className="text-white underline" href="https://github.com/nicotitopp" target="_blank" rel="noreferrer">nicotitopp</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <form onSubmit={handleSubmit} className="cursor-target bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                        <label className="block mb-3">
                            <span className="text-gray-300 text-sm">Name</span>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="mt-2 w-full px-3 py-2 rounded-md bg-transparent border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                                placeholder="Your name"
                                aria-label="Nombre"
                            />
                        </label>

                        <label className="block mb-3">
                            <span className="text-gray-300 text-sm">Email</span>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-2 w-full px-3 py-2 rounded-md bg-transparent border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                                placeholder="you@example.com"
                                aria-label="Email"
                                type="email"
                            />
                        </label>

                        <label className="block mb-4">
                            <span className="text-gray-300 text-sm">Message</span>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="mt-2 w-full px-3 py-2 rounded-md bg-transparent border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white/20 h-40 resize-none"
                                placeholder="Write your message..."
                                aria-label="Mensaje"
                            />
                        </label>

                        <div className="flex items-center gap-3">
                            <button type="submit" className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white border border-white/20 transition">Send message</button>
                            <button type="button" onClick={() => { setName(''); setEmail(''); setMessage(''); setStatus('idle'); }} className="px-4 py-2 bg-transparent text-white/80 border border-white/10 rounded-lg">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contacta;
