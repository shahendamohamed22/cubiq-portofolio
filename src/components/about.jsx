import { motion } from "framer-motion";
import { FiCode, FiLayers, FiZap } from "react-icons/fi";

function About() {
    const values = [
        {
            icon: FiCode,
            title: "Build",
            description: "We turn ideas into clean, scalable digital products.",
        },
        {
            icon: FiLayers,
            title: "Design",
            description: "We create interfaces that feel modern, intuitive, and purposeful.",
        },
        {
            icon: FiZap,
            title: "Innovate",
            description: "We explore new technologies to build better digital experiences.",
        },
    ];

    return (
        <section
            id="about"
            className="relative overflow-hidden bg-void px-6 py-24 lg:px-10"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-0 top-1/3 h-96 w-96 rounded-full bg-orchid/10 blur-[140px]" />
                <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-electric/10 blur-[140px]" />
            </div>

            <div className="relative mx-auto max-w-9xl">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="my-14"
                >
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-electric">
                        The minds behind CubiQ
                    </p>

                    <h2 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        WE ARE{" "}
                        <span className="bg-gradient-to-r from-electric via-orchid to-magenta bg-clip-text text-transparent">
                            CubiQ
                        </span>
                    </h2>
                </motion.div>

                {/* Main Content */}
                <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">

                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="max-w-3xl text-lg leading-8 text-silver">
                            We are a multidisciplinary digital team passionate
                            about creating meaningful experiences through
                            technology, design, and innovation.
                        </p>

                        <p className="mt-5 max-w-3xl leading-7 text-silver/70">
                            From the first idea to the final product, we work
                            together to transform concepts into modern,
                            functional, and engaging digital solutions.
                        </p>

                        {/* Values */}
                        <div className="mt-10 grid gap-4 sm:grid-cols-3">
                            {values.map((value, index) => {
                                const Icon = value.icon;

                                return (
                                    <motion.div
                                        key={value.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.1,
                                        }}
                                        className="rounded-2xl border border-white/10 bg-midnight/70 p-5 backdrop-blur-sm transition-all duration-300 hover:border-electric/30"
                                    >
                                        <Icon className="mb-4 h-6 w-6 text-electric" />

                                        <h3 className="mb-2 font-semibold text-white">
                                            {value.title}
                                        </h3>

                                        <p className="text-sm leading-6 text-silver">
                                            {value.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="relative flex items-center justify-center"
                    >
                        <div className="relative w-full max-w-md">

                            <div className="absolute -inset-6 rounded-full bg-electric/5 blur-3xl" />

                            <div className="relative rounded-3xl border border-white/10 bg-midnight/80 p-8 backdrop-blur-xl">
                                <p className="text-sm uppercase tracking-[0.25em] text-silver">
                                    Our mindset
                                </p>

                                <h3 className="mt-4 text-3xl font-bold text-white">
                                    THINK.
                                    <br />
                                    BUILD.
                                    <br />
                                    <span className="bg-gradient-to-r from-electric to-magenta bg-clip-text text-transparent">
                                        EVOLVE.
                                    </span>
                                </h3>

                                <div className="mt-8 grid grid-cols-2 gap-4">
                                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                                        <span className="text-3xl font-bold text-white">
                                            10+
                                        </span>
                                        <p className="mt-1 text-sm text-silver">
                                            Team Members
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                                        <span className="text-3xl font-bold text-white">
                                            ∞
                                        </span>
                                        <p className="mt-1 text-sm text-silver">
                                            Ideas
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

export default About;