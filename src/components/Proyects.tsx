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
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden cursor-target transition-all duration-300 hover:bg-white/10 hover:border-white/20 group">
            {/* Image container */}
            {imageUrl && (
                <div className="w-full h-48 overflow-hidden relative">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
            )}

            {/* Content */}
            <div className="p-6">
                <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
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
    );
};

const Projects: React.FC = () => {
    // SECCIÓN 1: Proyectos destacados
    const featuredProjects: ProjectCardProps[] = [
        {
            title: "El Naranjal",
            description: "El Naranjal es la página web oficial del restaurante del mismo nombre, un lugar donde la tradición y el sabor se encuentran.Este proyecto fue diseñado para ofrecer una experiencia agradable, moderna y fácil de navegar, mostrando el menú, la historia del restaurante y las opciones de contacto.",
            tags: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript"],
            imageUrl: "/imagenProyecto1.png",
            liveUrl: "https://www.restauranteelnaranjal.com/",
            githubUrl: "https://github.com/nicotitopp/ElNaranjal.git",
        },
        /*
        {
            title: "Tu Proyecto 2",
            description: "Descripción de tu segundo proyecto. Explica las características principales y tu enfoque.",
            tags: ["Next.js", "Vite", "JavaScript"],
            imageUrl: "/project2.png",
            liveUrl: "https://tu-proyecto-2.com",
            githubUrl: "https://github.com/nicotitopp/proyecto-2",
        },*/
    ]; 

    // SECCIÓN 2: Otros proyectos
    
    const otherProjects: ProjectCardProps[] = [
        /*{
            title: "Tu Proyecto 3",
            description: "Descripción de tu tercer proyecto.",
            tags: ["React", "CSS"],
            imageUrl: "/project3.png",
            liveUrl: "https://tu-proyecto-3.com",
            githubUrl: "https://github.com/nicotitopp/proyecto-3",
        },*/
        /*{
            title: "Tu Proyecto 4",
            description: "Descripción de tu cuarto proyecto.",
            tags: ["JavaScript", "HTML", "CSS"],
            liveUrl: "https://tu-proyecto-4.com",
            githubUrl: "https://github.com/nicotitopp/proyecto-4",
        }, */
    ]; 

    
    return ( 
        <section id="projects" className="min-h-screen flex items-start px-6 md:px-12 pt-12 pb-20">
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
                </div> 

                {/* SECCIÓN 1: Proyectos Destacados */}
                <div className="mb-20">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-10">Featured Projects</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        {featuredProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </div>
                
                
                {/* SECCIÓN 2: Otros Proyectos */}
                <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-10"></h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        {otherProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Projects;
