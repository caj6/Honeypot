import { Link } from 'react-router-dom';
import { Cpu } from 'lucide-react';

export default function Footer() {

    return (
        <footer className="site-footer">
            <div className="footer-content">
                {/* Left Section*/}
                <div className="footer-section">
                    <div className="brand-footer">
                        <div className="logo-small">
                            <Cpu size={20} />
                        </div>
                        <div>
                            <p className="footer-subtitle">Cybersecurity Research & Threat Analysis</p>
                        </div>
                    </div>

                </div>

                {/* Middle Section */}
                <div className="footer-section">
                    <h5 className="footer-heading">Research Navigation</h5>
                    <div className="footer-links">
                        <div className="footer-link-group">
                            <Link to="/" className="footer-link">
                                <span className="link-dot"></span>
                                Home
                            </Link>
                            <Link to="/introduction" className="footer-link">
                                <span className="link-dot"></span>
                                Introduction
                            </Link>
                            <Link to="/state-of-art" className="footer-link">
                                <span className="link-dot"></span>
                                State of Art
                            </Link>
                            <Link to="/selected-honeypots" className="footer-link">
                                <span className="link-dot"></span>
                                Implementation
                            </Link>
                        </div>
                        <div className="footer-link-group">
                            <Link to="/analysis" className="footer-link">
                                <span className="link-dot"></span>
                                Analysis
                            </Link>
                            <Link to="/contribution" className="footer-link">
                                <span className="link-dot"></span>
                                Contribution
                            </Link>
                            <Link to="/conclusion" className="footer-link">
                                <span className="link-dot"></span>
                                Conclusion
                            </Link>
                            <Link to="/references" className="footer-link">
                                <span className="link-dot"></span>
                                References
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="footer-section">
                    <div className="footer-legal">
                        <p className="footer-copyright">
                            Cybersecurity Research • All data anonymized for research purposes
                        </p>
                        <p className="footer-license">
                            ©2025 CAJ
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <span className="footer-tag">Academic Research Project</span>
                    <div className="footer-stats">
                        <span className="stat-item">
                            <span className="stat-number">2.1M</span> Events Analyzed
                        </span>
                        <span className="stat-item">
                            <span className="stat-number">342</span> Malware Samples
                        </span>
                        <span className="stat-item">
                            <span className="stat-number">102</span> Novel IoCs
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}