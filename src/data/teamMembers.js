import flashCard from "../assets/imags/flash-card.png";
import flashProfile from "../assets/imags/flash-profile.png";

import goodyCard from "../assets/imags/goody-card.png";
import goodyProfile from "../assets/imags/goody-profile.png";

import nickCard from "../assets/imags/nick-card.png";
import nickProfile from "../assets/imags/nick-profile.png";

import sheap from "../assets/imags/sheap.png"

import star from "../assets/imags/star.png"
import minni from "../assets/imags/minni.png"
import tiger from "../assets/imags/tiger.png"
import stich from "../assets/imags/stich.png"
import ox from "../assets/imags/ox.png"
import Mickey from "../assets/imags/Mickey.png"


const teamMembers = [
    {
        id: "flash",
        name: "Flash",
        role: "Team Leader",
        cardImage: flashCard,
        profileImage: flashProfile,
        bio: "A creative developer focused on building modern digital experiences and bringing ideas to life through technology.",
        cardColor: "bg-orchid/20",
        skills: ["React", "JavaScript", "UI/UX"],
        github: "https://github.com/",
        linkedin: "https://linkedin.com/",
        whatsapp: "https://wa.me/201147119594",
        isLeader: false,
    },

    {
        id: "goody",
        name: "Goody",
        role: "Frontend Developer",
        cardImage: goodyCard,
        profileImage: goodyProfile,
        bio: "A frontend developer passionate about creating interactive, responsive, and visually engaging web experiences.",
        cardColor: "bg-electric/10",
        skills: ["React", "JavaScript", "Tailwind CSS"],
        github: "https://github.com/",
        linkedin: "https://linkedin.com/",
        whatsapp: "https://wa.me/201147119594",
        isLeader: false,
    },

    {
        id: "nick",
        name: "Nick",
        role: "UI/UX Designer",
        cardImage: nickCard,
        profileImage: nickProfile,
        bio: "A creative designer who transforms ideas into intuitive interfaces and meaningful user experiences.",
        cardColor: "bg-magenta/15",
        skills: ["Figma", "UI Design", "UX", "Prototyping"],
        github: "https://github.com/",
        linkedin: "https://linkedin.com/",
        whatsapp: "https://wa.me/201147119594",
        isLeader: true,
    },

    {
        id: "luna",
        name: "Luna",
        role: "Frontend Developer",
        cardImage: sheap,
        profileImage: sheap,
        bio: "A frontend developer who turns creative concepts into fast, responsive, and engaging digital experiences.",
        cardColor: "bg-violet-500/15",
        skills: ["React", "TypeScript", "Tailwind CSS"],
        github: "https://github.com/",
        linkedin: "https://linkedin.com/",
        whatsapp: "https://wa.me/201147119594",
        isLeader: false,
    },

    {
        id: "nova",
        name: "Nova",
        role: "Backend Developer",
        cardImage: star,
        profileImage: star,
        bio: "A backend developer focused on building reliable APIs, scalable systems, and smooth data-driven applications.",
        cardColor: "bg-blue-500/15",
        skills: ["Node.js", "Express", "MongoDB"],
        github: "https://github.com/",
        linkedin: "https://linkedin.com/",
        whatsapp: "https://wa.me/201147119594",
        isLeader: false,
    },

    {
        id: "zero",
        name: "Zero",
        role: "UI/UX Designer",
        cardImage: minni,
        profileImage: minni,
        bio: "A UI/UX designer passionate about creating clean interfaces, thoughtful interactions, and memorable user experiences.",
        cardColor: "bg-cyan-500/15",
        skills: ["Figma", "UI Design", "UX Research"],
        github: "https://github.com/",
        linkedin: "https://linkedin.com/",
        whatsapp: "https://wa.me/201147119594",
        isLeader: false,
    },

    {
        id: "ray",
        name: "Ray",
        role: "Full Stack Developer",
        cardImage: stich,
        profileImage: stich,
        bio: "A full stack developer combining frontend creativity with backend logic to build complete digital products.",
        cardColor: "bg-indigo-500/15",
        skills: ["React", "Node.js", "REST APIs"],
        github: "https://github.com/",
        linkedin: "https://linkedin.com/",
        whatsapp: "https://wa.me/201147119594",
        isLeader: false,
    },

    {
        id: "aria",
        name: "Aria",
        role: "Product Designer",
        cardImage: ox,
        profileImage: ox,
        bio: "A product designer focused on transforming complex ideas into simple, elegant, and user-centered digital products.",
        cardColor: "bg-fuchsia-500/15",
        skills: ["Figma", "Design Systems", "Prototyping"],
        github: "https://github.com/",
        linkedin: "https://linkedin.com/",
        whatsapp: "https://wa.me/201147119594",
        isLeader: false,
    },

    {
        id: "kai",
        name: "Kai",
        role: "Frontend Developer",
        cardImage: tiger,
        profileImage: tiger,
        bio: "A frontend developer who enjoys crafting polished interfaces with modern technologies and smooth interactions.",
        cardColor: "bg-purple-500/15",
        skills: ["JavaScript", "React", "Framer Motion"],
        github: "https://github.com/",
        linkedin: "https://linkedin.com/",
        whatsapp: "https://wa.me/201147119594",
        isLeader: false,
    },

    {
        id: "zayn",
        name: "Zayn",
        role: "Mobile Developer",
        cardImage: Mickey,
        profileImage: Mickey,
        bio: "A mobile developer building intuitive and high-performance applications with a strong focus on user experience.",
        cardColor: "bg-teal-500/15",
        skills: ["Flutter", "Dart", "Firebase"],
        github: "https://github.com/",
        linkedin: "https://linkedin.com/",
        whatsapp: "https://wa.me/201147119594",
        isLeader: false,
    },
];

export default teamMembers;