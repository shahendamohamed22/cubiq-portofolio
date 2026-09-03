import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiBarChart2 } from "react-icons/fi";
import projects from "../data/projects.js";

function Projects() {
    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-void px-6 py-20 lg:px-10"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-0 top-1/3 h-80 w-80 rounded-full bg-orchid/10 blur-[140px]" />

                <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-electric/10 blur-[140px]" />
            </div>

            <div className="relative mx-auto max-w-9xl">

                {/* Section Header */}
           
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="my-12"
                >
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-electric">
                        What we have built
                    </p>

                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        OUR{" "}
                        <span className="bg-gradient-to-r from-electric via-orchid to-magenta bg-clip-text text-transparent">
                            PROJECTS
                        </span>
                    </h2>
                </motion.div>
            

                {/* Projects Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >

                            {/* Project Card */}
                            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-midnight/70 backdrop-blur-sm transition-all duration-300 hover:border-electric/30 hover:shadow-[0_0_30px_rgba(23,218,241,0.08)]">

                                {/* Image */}
                                <div className="relative aspect-video overflow-hidden">

                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">

                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 rounded-lg bg-electric px-4 py-2 text-sm font-semibold text-void transition-all duration-300 hover:shadow-[0_0_20px_rgba(23,218,241,0.4)]"
                                        >
                                            <FaGithub className="h-4 w-4" />
                                            GitHub
                                        </a>

                                    </div>
                                </div>

                                {/* Project Header */}
                                <div className="p-6 pb-4">

                                    <h3 className="line-clamp-1 text-xl font-bold text-white">
                                        {project.title}
                                    </h3>

                                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-silver">
                                        {project.description}
                                    </p>

                                </div>

                                {/* Project Content */}
                                <div className="flex-grow space-y-5 px-6 pb-6">

                                    {/* KPIs */}
                                    <div>

                                        <h4 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-silver">
                                            <FiBarChart2 className="h-3.5 w-3.5 text-electric" />
                                            Key KPIs
                                        </h4>

                                        <ul className="grid grid-cols-1 gap-2">
                                            {project.kpis.map((kpi, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-center gap-2 text-sm text-silver"
                                                >
                                                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />

                                                    {kpi}
                                                </li>
                                            ))}
                                        </ul>

                                    </div>

                                    {/* Tools */}
                                    <div className="flex flex-wrap gap-2">

                                        {project.tools.map((tool, i) => (
                                            <span
                                                key={i}
                                                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-mono uppercase text-silver"
                                            >
                                                {tool}
                                            </span>
                                        ))}

                                    </div>

                                </div>

                                {/* Footer */}
                                <div className="px-6 pb-6">

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/btn flex w-full items-center justify-center rounded-lg bg-electric px-4 py-2.5 text-sm font-semibold text-void transition-all duration-300 hover:shadow-[0_0_20px_rgba(23,218,241,0.3)]"
                                    >
                                        View on GitHub

                                        <FiExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                                    </a>

                                </div>

                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Projects;