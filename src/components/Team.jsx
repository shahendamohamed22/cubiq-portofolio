import { useState } from "react";
import { motion } from "framer-motion";

import teamMembers from "../data/teamMembers.js";
import TeamMemberCard from "./TeamMemberCard";
import TeamShowCase from "./TeamShowCase";

function Team() {
    const leader = teamMembers.find((member) => member.isLeader) || teamMembers[0];

    const [activeMember, setActiveMember] = useState(leader);

    return (
        <section
            id="team"
            className="relative overflow-hidden bg-gray-950 px-6 py-24 lg:px-10"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-orchid/10 blur-[140px]" />

                <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-electric/10 blur-[140px]" />
            </div>

            <div className="relative mx-auto max-w-9xl">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-12"
                >
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-electric">
                        The people behind the work
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        MEET OUR{" "}
                        <span className="bg-gradient-to-r from-electric via-orchid to-magenta bg-clip-text text-transparent">
                            TEAM
                        </span>
                    </h2>
                </motion.div>

                {/* Large Showcase */}
                <TeamShowCase member={activeMember} />

                {/* Team Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="overflow-x-auto py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    <div className="flex w-max gap-5">
                        {teamMembers.map((member, index) => (
                            <TeamMemberCard
                                key={`${member.id}-${index}`}
                                member={member}
                                isActive={activeMember.id === member.id}
                                onClick={() => setActiveMember(member)}
                            />
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

export default Team;

