const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Projects", href: "#projects" },
];

function Navbar() {
    return (
        <header className="fixed top-0 left-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-10">
            <nav className="mx-auto flex h-20 max-w-9xl items-center justify-between rounded-2xl border border-white/10 bg-midnight/80 px-5 backdrop-blur-xl lg:px-7">

                {/* Logo */}
                <a
                    href="#home"
                    className="flex shrink-0 items-center gap-2 text-white"
                >
                    <span className="text-3xl font-bold tracking-wider bg-gradient-to-r from-electric via-orchid to-magenta bg-clip-text text-transparent">
                        CubiQ
                    </span>
                </a>

                {/* Navigation */}
                <div className="hidden items-center gap-9 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-base font-medium text-silver transition-colors duration-300 hover:text-electric"
                        >
                            {link.name}
                        </a>
                    ))}
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