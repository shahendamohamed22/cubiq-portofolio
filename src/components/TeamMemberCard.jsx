import { motion } from "framer-motion";

function TeamMemberCard({ member, isActive, onClick }) {
    return (
        <motion.button
            type="button"
            onClick={onClick}
            whileHover={{ y: -8 }}
            whileTap={{ scale: 0.97 }}
            className={`group relative h-52 w-40 shrink-0 overflow-hidden rounded-3xl border-2 bg-black transition-all duration-300 sm:h-60 sm:w-48 ${
                isActive
                    ? `${member.cardColor} border-electric shadow-[0_0_35px_rgba(23,218,241,0.3)]`
                    : "border-white/10"
            }`}
        >
            <img
                src={member.cardImage}
                alt={member.name}
                className={`h-full w-full object-cover transition-all duration-500 ${
                    isActive
                        ? "grayscale-0 opacity-100"
                        : "grayscale opacity-50 group-hover:opacity-80"
                }`}
            />

            {!isActive && (
                <div className="absolute inset-0 bg-black/30 transition-all duration-300 group-hover:bg-black/10" />
            )}

            {isActive && (
                <motion.div
                    layoutId="active-team-indicator"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-electric"
                />
            )}
        </motion.button>
    );
}

export default TeamMemberCard;
