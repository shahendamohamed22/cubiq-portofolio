
import { useEffect, useState } from "react";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Team", href: "#team" },
    { name: "Projects", href: "#projects" },
];

function Navbar() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const sections = navLinks
            .map((link) => document.querySelector(link.href))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            b.intersectionRatio - a.intersectionRatio
                    )[0];

                if (visibleSection) {
                    setActiveSection(visibleSection.target.id);
                }
            },
            {
                threshold: 0.3,
                rootMargin: "-80px 0px -40% 0px",
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <header className="fixed top-0 left-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-10">
            <nav className="mx-auto flex h-20 max-w-9xl items-center justify-between rounded-2xl border border-white/10 bg-midnight/80 px-5 backdrop-blur-xl lg:px-7">

                {/* Logo */}
                <a
                    href="#home"
                    className="flex shrink-0 items-center gap-2 text-white"
                >
                    <span className="bg-gradient-to-r from-electric via-orchid to-magenta bg-clip-text text-3xl font-bold tracking-wider text-transparent">
                        CubiQ
                    </span>
                </a>

                {/* Navigation */}
                <div className="hidden items-center gap-9 md:flex">
                    {navLinks.map((link) => {
                        const sectionId = link.href.substring(1);
                        const isActive = activeSection === sectionId;

                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`
                                    relative text-base font-medium transition-all duration-300
                                    ${
                                        isActive
                                            ? "text-electric"
                                            : "text-silver hover:text-electric"
                                    }
                                `}
                            >
                                {link.name}

                                {/* Active underline */}
                                <span
                                    className={`
                                        absolute -bottom-2 left-1/2 h-0.5 -translate-x-1/2
                                        rounded-full bg-electric
                                        transition-all duration-300
                                        ${
                                            isActive
                                                ? "w-full opacity-100"
                                                : "w-0 opacity-0"
                                        }
                                    `}
                                />
                            </a>
                        );
                    })}
                </div>

                {/* CTA */}
                <a
                    href="#contact"
                    className="hidden rounded-full bg-electric px-6 py-2.5 text-sm font-semibold text-void transition-all duration-300 hover:shadow-[0_0_25px_rgba(23,218,241,0.4)] md:block"
                >
                    Let's Talk
                </a>
            </nav>
        </header>
    );
}

export default Navbar;
