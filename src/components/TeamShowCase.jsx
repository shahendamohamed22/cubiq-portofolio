
import { AnimatePresence, motion } from "framer-motion";
import {
    FaGithub,
    FaLinkedin,
    FaWhatsapp,
} from "react-icons/fa";
import {
    FiArrowUpRight,
    FiUser,
    FiBriefcase,
    FiMessageCircle,
    FiSend,
} from "react-icons/fi";

/* =========================
   MEMBER COLOR STYLES
========================= */

const memberColors = {
    // 1
    "bg-orchid/20": {
        text: "text-orchid",
        border: "border-orchid/40",
        borderSoft: "border-orchid/20",
        bg: "bg-orchid/10",
        glow: "bg-orchid/10",
        shadow: "shadow-[0_0_30px_rgba(164,33,152,0.25)]",
        rgba: "rgba(164,33,152,0.35)",
    },

    // 2
    "bg-electric/10": {
        text: "text-electric",
        border: "border-electric/40",
        borderSoft: "border-electric/20",
        bg: "bg-electric/10",
        glow: "bg-electric/10",
        shadow: "shadow-[0_0_30px_rgba(23,218,241,0.25)]",
        rgba: "rgba(23,218,241,0.35)",
    },

    // 3
    "bg-magenta/15": {
        text: "text-magenta",
        border: "border-magenta/40",
        borderSoft: "border-magenta/20",
        bg: "bg-magenta/10",
        glow: "bg-magenta/10",
        shadow: "shadow-[0_0_30px_rgba(228,26,148,0.25)]",
        rgba: "rgba(228,26,148,0.35)",
    },

    // 4 - Luna
    "bg-violet-500/15": {
        text: "text-violet-400",
        border: "border-violet-400/40",
        borderSoft: "border-violet-400/20",
        bg: "bg-violet-500/10",
        glow: "bg-violet-500/10",
        shadow: "shadow-[0_0_30px_rgba(139,92,246,0.25)]",
        rgba: "rgba(139,92,246,0.35)",
    },

    // 5 - Nova
    "bg-blue-500/15": {
        text: "text-blue-400",
        border: "border-blue-400/40",
        borderSoft: "border-blue-400/20",
        bg: "bg-blue-500/10",
        glow: "bg-blue-500/10",
        shadow: "shadow-[0_0_30px_rgba(59,130,246,0.25)]",
        rgba: "rgba(59,130,246,0.35)",
    },

    // 6 - Zero
    "bg-cyan-500/15": {
        text: "text-cyan-400",
        border: "border-cyan-400/40",
        borderSoft: "border-cyan-400/20",
        bg: "bg-cyan-500/10",
        glow: "bg-cyan-500/10",
        shadow: "shadow-[0_0_30px_rgba(6,182,212,0.25)]",
        rgba: "rgba(6,182,212,0.35)",
    },

    // 7 - Ray
    "bg-indigo-500/15": {
        text: "text-indigo-400",
        border: "border-indigo-400/40",
        borderSoft: "border-indigo-400/20",
        bg: "bg-indigo-500/10",
        glow: "bg-indigo-500/10",
        shadow: "shadow-[0_0_30px_rgba(99,102,241,0.25)]",
        rgba: "rgba(99,102,241,0.35)",
    },

    // 8 - Aria
    "bg-fuchsia-500/15": {
        text: "text-fuchsia-400",
        border: "border-fuchsia-400/40",
        borderSoft: "border-fuchsia-400/20",
        bg: "bg-fuchsia-500/10",
        glow: "bg-fuchsia-500/10",
        shadow: "shadow-[0_0_30px_rgba(217,70,239,0.25)]",
        rgba: "rgba(217,70,239,0.35)",
    },

    // 9 - Kai
    "bg-purple-500/15": {
        text: "text-purple-400",
        border: "border-purple-400/40",
        borderSoft: "border-purple-400/20",
        bg: "bg-purple-500/10",
        glow: "bg-purple-500/10",
        shadow: "shadow-[0_0_30px_rgba(168,85,247,0.25)]",
        rgba: "rgba(168,85,247,0.35)",
    },

    // 10 - Zayn
    "bg-teal-500/15": {
        text: "text-teal-400",
        border: "border-teal-400/40",
        borderSoft: "border-teal-400/20",
        bg: "bg-teal-500/10",
        glow: "bg-teal-500/10",
        shadow: "shadow-[0_0_30px_rgba(20,184,166,0.25)]",
        rgba: "rgba(20,184,166,0.35)",
    },
};

function TeamShowCase({ member }) {
    const colors = memberColors[member.cardColor];

    return (
        <div className="relative min-h-[600px] overflow-hidden">

            {/* =========================
                BACKGROUND GLOW
            ========================= */}

            <AnimatePresence mode="wait">
                <motion.div
                    key={member.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`pointer-events-none absolute left-[35%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full ${colors.glow} blur-[120px]`}
                />
            </AnimatePresence>

            <div className="pointer-events-none absolute right-[10%] top-[15%] h-40 w-40 rounded-full bg-white/[0.02] blur-[90px]" />

            <AnimatePresence mode="wait">
                <motion.div
                    key={member.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10 grid min-h-[600px] items-center py-6 lg:grid-cols-[1fr_1fr]"
                >

                    {/* =========================
                        LEFT SIDE
                    ========================= */}

                    <div className="relative z-20 px-4 py-12 sm:px-8 lg:py-16">

                        {/* Role */}
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                            className={`mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] ${colors.text}`}
                        >
                            <span
                                className={`h-px w-10 ${colors.bg.replace(
                                    "/10",
                                    "/100"
                                )}`}
                                style={{
                                    backgroundColor: colors.rgba,
                                }}
                            />

                            {member.role}
                        </motion.p>

                        {/* Name */}
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="max-w-xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
                        >
                            {member.name}
                        </motion.h3>

                        {/* Accent Tag */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className={`mt-6 inline-flex rounded-full border ${colors.borderSoft} ${colors.bg} px-4 py-2`}
                        >
                            <span
                                className={`text-xs font-semibold uppercase tracking-[0.2em] ${colors.text}`}
                            >
                                READY TO BUILD SOMETHING GREAT
                            </span>
                        </motion.div>

                        {/* Bio */}
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className="mt-7 max-w-lg text-sm leading-7 text-silver sm:text-base"
                        >
                            {member.bio}
                        </motion.p>

                        {/* Skills */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="mt-7 flex flex-wrap gap-2"
                        >
                            {member.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className={`rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-silver transition-all duration-300 hover:${colors.text} hover:${colors.borderSoft}`}
                                >
                                    {skill}
                                </span>
                            ))}
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.35 }}
                            className="mt-9 flex items-center gap-2"
                        >
                            <a
                                href={member.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-silver transition-all duration-300 hover:${colors.border} hover:${colors.bg} hover:${colors.text}`}
                            >
                                <FaGithub />
                            </a>

                            <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-silver transition-all duration-300 hover:${colors.border} hover:${colors.bg} hover:${colors.text}`}
                            >
                                <FaLinkedin />
                            </a>

                            <a
                                href={member.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-silver transition-all duration-300 hover:${colors.border} hover:${colors.bg} hover:${colors.text}`}
                            >
                                <FaWhatsapp />
                            </a>
                        </motion.div>
                    </div>


                    {/* =========================
                        RIGHT SIDE
                    ========================= */}

                    <div className="relative flex min-h-[400px] items-center justify-center lg:min-h-[560px]">

                        {/* Outer Circle */}
                        <div
                            className={`absolute h-[300px] w-[300px] rounded-full border ${colors.borderSoft} sm:h-[400px] sm:w-[400px] lg:h-[460px] lg:w-[460px]`}
                        />

                        {/* Glow */}
                        <div
                            className={`absolute h-[240px] w-[240px] rounded-full ${colors.glow} blur-[90px] sm:h-[320px] sm:w-[320px] lg:h-[380px] lg:w-[380px]`}
                        />

                        {/* =========================
                           OUTER ARC
                           ========================= */}

                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className={`absolute h-[330px] w-[330px] rounded-full border ${colors.border} border-l-transparent border-b-transparent sm:h-[440px] sm:w-[440px] lg:h-[500px] lg:w-[500px]`}
                        />

                        {/* Second Arc */}
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{
                                duration: 40,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className={`absolute h-[290px] w-[290px] rounded-full border ${colors.borderSoft} border-r-transparent border-b-transparent sm:h-[370px] sm:w-[370px] lg:h-[420px] lg:w-[420px]`}
                        />

                        {/* =========================
                           PROFILE IMAGE
                         ========================= */}

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={member.id}
                                initial={{
                                    opacity: 0,
                                    scale: 0.85,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.85,
                                }}
                                transition={{
                                    duration: 0.5,
                                }}
                                className={`relative z-10 h-[180px] w-[180px] overflow-hidden rounded-full border-8 border-midnight ${colors.shadow} sm:h-[280px] sm:w-[280px] lg:h-[340px] lg:w-[340px]`}
                            >
                                <img
                                    src={member.profileImage}
                                    alt={member.name}
                                    className="h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                            </motion.div>
                        </AnimatePresence>

                        {/* =========================
                            ORBIT ICONS
                         ========================= */}

                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute inset-0"
                        >
                            {/* User */}
                            <div
                                className={`absolute left-[15%] top-[27%] flex h-10 w-10 items-center justify-center rounded-full border ${colors.border} bg-void ${colors.text} ${colors.shadow}`}
                            >
                                <FiUser />
                            </div>

                            {/* Briefcase */}
                            <div
                                className={`absolute right-[17%] top-[20%] flex h-10 w-10 items-center justify-center rounded-full border ${colors.borderSoft} bg-void ${colors.text}`}
                            >
                                <FiBriefcase />
                            </div>

                            {/* Message */}
                            <div
                                className={`absolute right-[8%] top-[48%] flex h-10 w-10 items-center justify-center rounded-full border ${colors.border} bg-void ${colors.text}`}
                            >
                                <FiMessageCircle />
                            </div>

                            {/* Send */}
                            <div
                                className={`absolute bottom-[15%] right-[22%] flex h-10 w-10 items-center justify-center rounded-full border ${colors.border} bg-void ${colors.text}`}
                            >
                                <FiSend />
                            </div>

                            {/* Arrow */}
                            <div
                                className={`absolute bottom-[20%] left-[19%] flex h-10 w-10 items-center justify-center rounded-full border ${colors.borderSoft} bg-void ${colors.text}`}
                            >
                                <FiArrowUpRight />
                            </div>
                        </motion.div>

                        {/* Label */}
                        <div
                            className={`absolute bottom-4 right-4 hidden rounded-full border ${colors.borderSoft} ${colors.bg} px-4 py-2 backdrop-blur-md sm:block lg:right-0`}
                        >
                            <span
                                className={`text-[10px] font-mono uppercase tracking-[0.25em] ${colors.text} opacity-60`}
                            >
                                CubiQ / CREATIVE TEAM
                            </span>
                        </div>
                    </div>

                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default TeamShowCase;