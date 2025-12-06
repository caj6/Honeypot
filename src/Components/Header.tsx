import { Link, useLocation } from 'react-router-dom';
import { Shield, BookOpen, Cpu, Terminal, BarChart3, Users, Database, Globe } from 'lucide-react';

export default function Header() {
    const location = useLocation();

    const navItems = [
        { path: '/', label: 'Home', icon: <Shield size={16} /> },
        { path: '/introduction', label: 'Introduction', icon: <BookOpen size={16} /> },
        { path: '/state-of-art', label: 'State of Art', icon: <Cpu size={16} /> },
        { path: '/selected-honeypots', label: 'Implementation', icon: <Terminal size={16} /> },
        { path: '/analysis', label: 'Analysis', icon: <BarChart3 size={16} /> },
        { path: '/contribution', label: 'Contribution', icon: <Users size={16} /> },
        { path: '/conclusion', label: 'Conclusion', icon: <Database size={16} /> },
        { path: '/references', label: 'References', icon: <Globe size={16} /> },
    ];

    return (
        <header className="site-header">
            <div className="brand">
                <div className="logo">T13</div>
                <div>
                    <h1 className="logo-text">Honeypot Intelligence</h1>
                </div>
            </div>
            <nav>
                <ul className="nav-menu">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                            >
                                {item.icon}
                                <span>{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}