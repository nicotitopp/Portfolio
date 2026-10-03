import React, { useState } from 'react';
import BlurText from '../React/BlurText/BlurText';
import AnimatedContent from '../React/AnimatedContent/AnimatedContent';

interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    badge: string;
    description: string;
    highlights: string[];
    skills: string[];
    projectLink?: { label: string; url: string };
}

const experiences: ExperienceItem[] = [
    {
        role: "IT & Automation Specialist",
        company: "JYC Equipment",
        period: "May 2026 – Present",
        badge: "Current Role",
        description: "Leading enterprise database administration, AI agent development, and platform API integrations to automate business processes.",
        projectLink: {
            label: "AI Sales Trainer Live App",
            url: "https://jyc-equipment-ai-sales-trainer.onrender.com/"
        },
        highlights: [
            "AI Agent Development: Created an AI-powered conversational training agent for the sales team to practice and evaluate English sales conversations (Live on Render).",
            "API Integrations: Integrated platforms via APIs (Close CRM, Instantly, Constant Contact) for automated data synchronization and outbound prospecting.",
            "Data Quality & Administration: Cleansed, validated, and maintained large volumes of corporate information.",
            "Web Development & Tools: Built and maintained internal web tools and customized digital solutions.",
            "Email Campaigns: Managed and tracked automated outbound campaigns with Instantly across segmented databases."
        ],
        skills: ["AI Developer", "API Integration", "Close CRM", "Instantly", "Web Development", "Database Management", "Excel Analytics"]
    },
    {
        role: "Freelance IT Technician",
        company: "RYS Soluciones",
        period: "Jan 2026 – Present",
        badge: "Freelance",
        description: "On-site and remote IT infrastructure support, hardware maintenance, asset inventory, and operating system deployment.",
        highlights: [
            "Equipment Formatting & Setup: Installed and configured Windows OS, drivers, productivity suites, and security software on laptops and desktops.",
            "IT Asset Control: Organized and classified tech components, ensuring asset traceability and reliability.",
            "Printer Maintenance: Preventive and corrective diagnosis, cleaning, and repair for enterprise and office printers.",
            "Technical Customer Support: Delivered clear, patient support to users across various technical backgrounds."
        ],
        skills: ["Windows Support", "Hardware Maintenance", "Printer Repair", "Asset Inventory", "Customer Service"]
    },
    {
        role: "Support & Digital Transformation Trainee (SENA)",
        company: "Lean Solutions Group",
        period: "Feb 2025 – Aug 2025",
        badge: "SENA Internship",
        description: "Hands-on incident management, SaaS platform support (Buk & DocuSign), and IT documentation in an enterprise environment.",
        highlights: [
            "SaaS Incident Resolution: Diagnosed and documented complex issues on Buk and DocuSign, including data export pipelines and banking transmission files.",
            "Internal Help Desk: Managed ticketing systems, prioritized urgent requests, and coordinated escalations with engineering teams.",
            "Technical Documentation: Created support manuals, troubleshooting guides, and incident tracking reports to enhance IT team efficiency.",
            "Process Improvement: Identified recurring issue patterns and proposed preventive measures to reduce ticket volume."
        ],
        skills: ["HelpDesk", "SaaS (Buk & DocuSign)", "Ticketing Systems", "Incident Documentation", "Continuous Improvement"]
    },
    {
        role: "Customer Service & Operations Management",
        company: "Restaurante El Naranjal",
        period: "2021 – 2025",
        badge: "Operations",
        description: "Operations handling, fast problem resolution under pressure, digital system tracking, and client communication.",
        highlights: [
            "Real-Time Problem Solving: Resolved critical operational challenges under high pressure, maintaining top service quality.",
            "Digital Management Systems: Administered digital order and billing tools, monitoring operational processes.",
            "Client Communication: Cultivated active listening and assertive communication skills, essential for level 1 technical support."
        ],
        skills: ["Problem Solving Under Pressure", "Digital POS Systems", "Operational Tracking", "Active Communication"]
    }
];

const Experience: React.FC = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section id="experience" className="flex items-start px-6 md:px-12 py-16">
            <div className="max-w-7xl w-full mx-auto">
                {/* Section Title */}
                <div className="relative mb-16">
                    <h2 className="cursor-target relative left-0 md:-left-2 text-6xl md:text-7xl font-extrabold text-white">
                        <BlurText
                            text="Experience"
                            delay={385}
                            animateBy="letters"
                            direction="bottom"
                        />
                    </h2>
                    <p className="mt-4 text-gray-400 text-lg max-w-2xl">
                        A track record of software development, AI automation, enterprise IT support, and digital transformation.
                    </p>
                </div>

                {/* Timeline list */}
                <div className="relative pl-4 md:pl-8 border-l border-white/10 space-y-10">
                    {experiences.map((exp, index) => {
                        const isExpanded = expandedIndex === index;
                        return (
                            <AnimatedContent
                                key={index}
                                distance={40}
                                direction="vertical"
                                reverse={false}
                                duration={1.2}
                                ease="power3.out"
                                initialOpacity={0.4}
                                animateOpacity
                                scale={1.01}
                                threshold={0.1}
                                delay={index * 0.1}
                            >
                                <div className="relative group">
                                    {/* Timeline node marker */}
                                    <div className="absolute -left-[25px] md:-left-[41px] top-6 w-4 h-4 rounded-full bg-white/20 border-2 border-indigo-400 group-hover:scale-125 group-hover:bg-indigo-400 transition-all duration-300" />

                                    {/* Experience Card */}
                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 cursor-target transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                                            <div>
                                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                                    <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-300 bg-indigo-500/10 border border-indigo-400/20 rounded-full">
                                                        {exp.badge}
                                                    </span>
                                                    {exp.projectLink && (
                                                        <a
                                                            href={exp.projectLink.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-400/30 rounded-full hover:bg-emerald-500/20 transition-all hover:scale-105"
                                                        >
                                                            <span>🚀 {exp.projectLink.label}</span>
                                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                            </svg>
                                                        </a>
                                                    )}
                                                </div>
                                                <h3 className="text-white text-2xl font-bold">{exp.role}</h3>
                                                <p className="text-gray-300 text-lg font-medium">{exp.company}</p>
                                            </div>
                                            <div className="text-gray-400 text-sm font-medium md:text-right">
                                                <span>{exp.period}</span>
                                            </div>
                                        </div>

                                        <p className="text-gray-300 text-base leading-relaxed mb-4">
                                            {exp.description}
                                        </p>

                                        {/* Expandable Highlights */}
                                        {isExpanded && (
                                            <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                                                <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-2">Key Contributions</h4>
                                                <ul className="space-y-2 text-gray-300 text-sm">
                                                    {exp.highlights.map((item, hIdx) => (
                                                        <li key={hIdx} className="flex items-start gap-2">
                                                            <span className="text-indigo-400 font-bold mt-0.5">▹</span>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                                            {/* Tech Badges */}
                                            <div className="flex flex-wrap gap-2">
                                                {exp.skills.map((skill, sIdx) => (
                                                    <span
                                                        key={sIdx}
                                                        className="px-2.5 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-md border border-white/10"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Toggle button */}
                                            <button
                                                onClick={() => toggleExpand(index)}
                                                className="text-sm font-medium text-indigo-300 hover:text-indigo-200 transition-colors flex items-center gap-1"
                                            >
                                                <span>{isExpanded ? 'Show less' : 'View details'}</span>
                                                <span>{isExpanded ? '▲' : '▼'}</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedContent>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Experience;
