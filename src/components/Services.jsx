import { motion } from "framer-motion";
import { LuGlobe, LuSmartphone, LuPalette, LuServer, LuWrench } from "react-icons/lu";

const services = [
    { icon: LuGlobe, title: "Web Development" },
    { icon: LuPalette, title: "UI/UX Design" },
    { icon: LuSmartphone, title: "Mobile Apps" },
    { icon: LuServer, title: "Backend & APIs" },
    { icon: LuWrench, title: "Maintenance & Support" },
];

function ServicesBrowser() {
    return (
        <section id="services" className="relative overflow-hidden bg-void px-6 py-24 lg:px-10">
            <div className="mx-auto max-w-9xl ">
                <div className="grid gap-16 md:grid-cols-2 md:items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="my-20"
                    >
                        <h2 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
                            We Build{" "}
                            <span className="rounded-lg bg-electric px-2 text-void">
                                Websites
                            </span>
                            <br />
                            That Build Businesses.
                        </h2>

                        <p className="mt-6 max-w-md text-sm leading-7 text-silver sm:text-base">
                            Because every business deserves a platform designed
                            to actually help it grow.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            {services.map(({ icon: Icon, title }) => (
                                <span
                                    key={title}
                                    className="flex items-center gap-2 rounded-full border border-white/10 bg-midnight/60 px-4 py-2 text-xs text-silver"
                                >
                                    <Icon className="text-electric" />
                                    {title}
                                </span>
                            ))}
                        </div>

                        <a
                            href="#contact"
                            className="mt-8 inline-flex items-center gap-2 rounded-full bg-electric px-7 py-3.5 text-sm font-semibold text-void transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(56,189,248,0.35)]"
                        >
                            Let's Build Yours
                            <span className="text-base">&rarr;</span>
                        </a>
                    </motion.div>

                    {/* Browser mockup */}
                    <motion.div
                        initial={{ opacity: 0, y: 30, rotate: -3 }}
                        whileInView={{ opacity: 1, y: 0, rotate: -2 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative mx-auto w-full max-w-[480px]"
                    >
                        <div className="absolute -inset-10 rounded-full bg-electric/15 blur-[110px]" />

                        <div className="relative z-10 overflow-hidden rounded-2xl border border-white/10 bg-midnight shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                            {/* Browser top bar */}
                            <div className="flex items-center gap-2 border-b border-white/10 bg-void px-4 py-3">
                                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                                <div className="ml-3 h-5 flex-1 rounded-md bg-white/5" />
                            </div>

                            {/* Page content */}
                            <div className="space-y-4 p-6">
                                <div className="h-3 w-1/3 rounded bg-electric/60" />
                                <div className="h-24 rounded-xl bg-electric/15" />
                                <div className="grid grid-cols-3 gap-3">
                                    <div className="h-14 rounded-lg bg-white/5" />
                                    <div className="h-14 rounded-lg bg-white/5" />
                                    <div className="h-14 rounded-lg bg-white/5" />
                                </div>
                                <div className="space-y-2">
                                    <div className="h-2 w-full rounded bg-white/10" />
                                    <div className="h-2 w-4/5 rounded bg-white/10" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default ServicesBrowser;