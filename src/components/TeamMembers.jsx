import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { LuCode, LuLayers, LuRocket } from "react-icons/lu";
import teamMembers from "../data/teamMembers";

const features = [
    { icon: LuCode, title: "Clean Code", subtitle: "Every Commit" },
    { icon: LuLayers, title: "Modern Stack", subtitle: "React & More" },
    { icon: LuRocket, title: "Fast Delivery", subtitle: "On Every Sprint" },
];

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    show: {
        opacity: 1,
        x: 0,
        transition: { type: "spring", stiffness: 260, damping: 22 },
    },
};

function TeamMembers() {
    const leader = teamMembers.find((m) => m.isLeader) || teamMembers[0];
    const [activeMember, setActiveMember] = useState(leader);
    const color = activeMember.color || "#38BDF8";

    return (
        <section
            id="team"
            className="relative overflow-hidden bg-void pt-28"
        >


            {/* Background */}
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-void via-midnight to-void" />
                <div className="absolute left-[10%] top-1/3 h-96 w-96 rounded-full bg-orchid/25 blur-[150px]" />
                <div
                    className="absolute bottom-0 right-[10%] h-96 w-96 rounded-full blur-[150px] transition-colors duration-500"
                    style={{ backgroundColor: `${color}26` }}
                />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-9xl px-6 pb-16 lg:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="my-12"
                >
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-electric">
                        The people behind the work
                    </p>

                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        MEET OUR{" "}
                        <span className="bg-gradient-to-r from-electric via-orchid to-magenta bg-clip-text text-transparent">
                            TEAM
                        </span>
                    </h2>
                </motion.div>

                <div className="grid items-center gap-8 md:grid-cols-2">

                    {/* Left: Text (changes with selected member) */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeMember.id}
                            variants={containerVariants}
                            initial="hidden"
                            animate="show"
                            exit={{ opacity: 0, x: 80, scale: 0.96, transition: { duration: 0.3 } }}
                            className="max-w-xl py-10"
                        >
                            <motion.p
                                variants={itemVariants}
                                className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] transition-colors duration-500"
                                style={{ color }}
                            >
                                <span
                                    className="h-px w-8 transition-colors duration-500"
                                    style={{ backgroundColor: color }}
                                />
                                {activeMember.role}
                            </motion.p>

                            <motion.h1
                                variants={itemVariants}
                                className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
                                style={{ color: "#DCE8F5" }}
                            >
                                {activeMember.name}
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className="mt-6 max-w-md text-sm leading-7 sm:text-base"
                                style={{ color: "#9FB4C7" }}
                            >
                                {activeMember.bio}
                            </motion.p>

                            <motion.div variants={itemVariants} className="mt-6 flex flex-wrap gap-2">
                                {activeMember.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full border px-3 py-1.5 text-xs transition-colors duration-500"
                                        style={{
                                            borderColor: `${color}40`,
                                            backgroundColor: `${color}14`,
                                            color: "#9FB4C7",
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </motion.div>

                            <motion.div variants={itemVariants} className="mt-8 flex items-center gap-3">
                                <a
                                    href={activeMember.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition-all duration-300 hover:-translate-y-1"
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = color;
                                        e.currentTarget.style.color = color;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = "";
                                        e.currentTarget.style.color = "";
                                    }}
                                >
                                    <FaGithub />
                                </a>
                                <a
                                    href={activeMember.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition-all duration-300 hover:-translate-y-1"
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = color;
                                        e.currentTarget.style.color = color;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = "";
                                        e.currentTarget.style.color = "";
                                    }}
                                >
                                    <FaLinkedin />
                                </a>
                                <a
                                    href={activeMember.whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition-all duration-300 hover:-translate-y-1"
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = color;
                                        e.currentTarget.style.color = color;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = "";
                                        e.currentTarget.style.color = "";
                                    }}
                                >
                                    <FaWhatsapp />
                                </a>
                            </motion.div>

                            {/* Feature Badges */}
                            <motion.div
                                variants={itemVariants}
                                className="mt-10 flex flex-wrap gap-6 border-t border-white/10 pt-8"
                            >
                                {features.map(({ icon: Icon, title, subtitle }) => (
                                    <div key={title} className="flex items-center gap-2">
                                        <span
                                            className="flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-500"
                                            style={{
                                                borderColor: `${color}30`,
                                                backgroundColor: `${color}10`,
                                                color,
                                            }}
                                        >
                                            <Icon className="text-base" />
                                        </span>
                                        <span className="text-xs text-silver">
                                            {title}
                                            <br />
                                            <span className="text-white">{subtitle}</span>
                                        </span>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Right: Portrait (changes with selected member) */}
                    <div className="relative mx-auto flex h-[340px] w-full max-w-[380px] items-end justify-center sm:h-[440px] sm:max-w-[420px]">
                        <motion.div
                            key={`bg-${activeMember.id}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-x-0 top-0 mx-auto h-[340px] w-[340px] rounded-full sm:h-[420px] sm:w-[420px]"
                            style={{ backgroundColor: `${color}60` }}
                        />
                        <div
                            className="absolute inset-x-0 top-0 mx-auto h-[360px] w-[360px] rounded-full blur-[90px] transition-colors duration-500 sm:h-[430px] sm:w-[430px]"
                            style={{ backgroundColor: `${color}55` }}
                        />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeMember.id}
                                initial={{ opacity: 0, x: 100, scale: 0.85, rotate: 4 }}
                                animate={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, x: -100, scale: 0.85, rotate: -4 }}
                                transition={{ type: "spring", stiffness: 180, damping: 20 }}
                                className="relative z-10 h-full w-full max-w-[340px]"
                                style={{
                                    maskImage:
                                        "linear-gradient(to bottom, black 78%, transparent 100%)",
                                    WebkitMaskImage:
                                        "linear-gradient(to bottom, black 78%, transparent 100%)",
                                }}
                            >
                                <img
                                    src={activeMember.profileImage}
                                    alt={activeMember.name}
                                    className="h-full w-full object-cover object-top"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Cards Row - clicking updates the hero above */}
                <div className="mt-16">
                    <div className="mb-6 flex items-end justify-between">
                        <h2 className="text-lg font-bold text-white sm:text-xl">
                            Our Team
                        </h2>

                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                        {teamMembers.map((member) => {
                            const isActive = activeMember.id === member.id;
                            return (
                                <button
                                    key={member.id}
                                    type="button"
                                    onClick={() => setActiveMember(member)}
                                    className={`group relative aspect-[3/4] overflow-hidden rounded-2xl bg-midnight text-left transition-all duration-300 ${isActive ? "" : "opacity-70 hover:opacity-100"
                                        }`}
                                    style={
                                        isActive
                                            ? { boxShadow: `0 0 0 2px ${member.color}` }
                                            : undefined
                                    }
                                >
                                    <img
                                        src={member.cardImage}
                                        alt={member.name}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <p className="text-sm font-bold text-white sm:text-base">
                                            {member.name}
                                        </p>
                                        <p
                                            className="mt-0.5 text-xs transition-colors duration-300"
                                            style={{ color: isActive ? member.color : undefined }}
                                        >
                                            {member.role}
                                        </p>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TeamMembers;