import { motion } from "framer-motion";
import BackgroundImage from "../assets/imags/background.png";

function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden bg-void"
        >
            {/* Fixed Background */}
            <div className="fixed inset-0 z-0">

                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover  bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${BackgroundImage})`,
                    }}
                />
                <div className="absolute inset-0 bg-black/60" />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-void/70" />

                {/* Neon Glow */}
                <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-orchid/20 blur-[140px]" />

                <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-electric/10 blur-[140px]" />
            </div>

            <div className="relative mx-auto grid w-full max-w-9xl items-center gap-12 px-6 py-32 md:grid-cols-2 lg:px-10">

                {/* Hero Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl"
                >
                    <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-electric">
                        Creative Digital Team
                    </p>

                    <h1 className="text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
                        WE BUILD
                        <br />
                        <span className="bg-gradient-to-r from-electric via-orchid to-magenta bg-clip-text text-transparent">
                            DIGITAL
                        </span>
                        <br />
                        EXPERIENCES
                    </h1>

                    <p className="mt-8 max-w-xl text-base leading-7 text-silver sm:text-lg">
                        We are a multidisciplinary team creating modern digital
                        products and meaningful experiences.
                    </p>

                    <a
                        href="#team"
                        className="mt-8 inline-flex items-center rounded-full bg-electric px-7 py-3.5 text-sm font-semibold text-void transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(23,218,241,0.35)]"
                    >
                        Meet Our Team
                    </a>
                </motion.div>

                {/* Futuristic Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative scale-125 mx-auto flex h-[420px] w-full max-w-[500px] items-center justify-center"
                >
                    <img src="/logo.png" alt="" />
                </motion.div>

            </div>
        </section>
    );
}

export default Hero;