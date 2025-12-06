// components/Navbar.tsx
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/introduction', label: 'Introduction' },
        { path: '/state-of-art', label: 'State of the Art' },
        { path: '/selected-honeypots', label: 'Selected Honeypots' },
        { path: '/analysis', label: 'Analysis & Results' },
        { path: '/contribution', label: 'Own Contribution' },
        { path: '/conclusion', label: 'Conclusion' },
        { path: '/references', label: 'References' }
    ];

    return (
        <nav className="navbar">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-sky-400 glow">
                        Honeypot Project
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`navbar-link ${location.pathname === item.path ? 'navbar-link-active' : ''}`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button className="text-slate-300 hover:text-sky-400">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}