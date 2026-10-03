import React from 'react';
import BlurText from '../React/BlurText/BlurText';

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    imageUrl?: string;
    liveUrl?: string;
    githubUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    tags,
    imageUrl,
    liveUrl,
    githubUrl,
}) => {
    return (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden cursor-target transition-all duration-300 hover:bg-white/10 hover:border-white/20 group flex flex-col justify-between">
            {/* Image container */}
            {imageUrl ? (
                <div className="w-full h-48 md:h-52 overflow-hidden relative bg-black/30 border-b border-white/5">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
            ) : (
                <div className="w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
            )}

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{description}</p>
                </div>

                <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 text-xs font-medium bg-white/10 text-gray-200 rounded-full border border-white/20"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                        {liveUrl && (
                            <a
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 px-4 py-2 text-sm font-medium text-white bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-colors text-center"
                            >
                                Live Demo
                            </a>
                        )}
                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 px-4 py-2 text-sm font-medium text-white bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-colors text-center"
                            >
                                GitHub
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Projects: React.FC = () => {
    const featuredProjects: ProjectCardProps[] = [
        {
            title: "AI Conversational Training Agent",
            description: "Developed and deployed an AI-assisted conversational practice agent at JYC Equipment to train sales representatives in English conversations, evaluating accuracy, responsiveness, and communication flow.",
            tags: ["AI Developer", "Workflow Automation", "API Integration", "Prompt Engineering"],
            imageUrl: "/jyc-ai-sales-trainer.png",
            liveUrl: "https://jyc-equipment-ai-sales-trainer.onrender.com/",
        },
        {
            title: "Satori Belleza • POS & Inventory System",
            description: "Full-featured mobile and web POS (Point of Sale) and inventory management dashboard for Satori Belleza. Includes real-time stock valuation, monthly net profit calculations, product combo management, and automated order generation.",
            tags: ["Web & Mobile App", "Tailwind CSS", "Inventory Control", "POS System", "Business Analytics"],
            imageUrl: "/satori-belleza.png",
        },
        {
            title: "El Naranjal Restaurant Web Platform",
            description: "Official web platform designed for the restaurant El Naranjal. Features an interactive digital menu, history, location details, responsive mobile layout, and direct customer reservation & contact integration.",
            tags: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript", "Responsive Design"],
            imageUrl: "/imagenProyecto1.png",
            liveUrl: "https://www.restauranteelnaranjal.com/",
            githubUrl: "https://github.com/nicotitopp/ElNaranjal.git",
        },
        {
            title: "CRM & Outbound Flow Automation",
            description: "Architected bi-directional API integrations linking Close CRM, Instantly, and Constant Contact. Streamlined outbound lead pipelines, automated segmented email campaigns, and reduced manual sync overhead.",
            tags: ["REST APIs", "Close CRM", "Instantly", "Data Cleansing", "MySQL"],
        },
        {
            title: "SaaS Incident Resolution & Data Tracking",
            description: "Hands-on diagnostic workflows and technical documentation for enterprise SaaS platforms (Buk & DocuSign) at Lean Solutions Group. Corrected banking file formats and streamlined user ticket escalations.",
            tags: ["SaaS Support", "Buk", "DocuSign", "HelpDesk", "Documentation"],
        },
    ];

    return (
        <section id="projects" className="flex items-start px-6 md:px-12 py-16">
            <div className="max-w-7xl w-full mx-auto">
                <div className="relative mb-16">
                    <h2 className="cursor-target relative left-0 md:-left-2 text-6xl md:text-7xl font-extrabold text-white">
                        <BlurText
                            text="Projects"
                            delay={385}
                            animateBy="letters"
                            direction="bottom"
                        />
                    </h2>
                    <p className="mt-4 text-gray-400 text-lg max-w-2xl">
                        Featured work spanning AI agents, POS & inventory management apps, web platforms, and enterprise automation.
                    </p>
                </div> 

                <div className="grid md:grid-cols-2 gap-8">
                    {featuredProjects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
