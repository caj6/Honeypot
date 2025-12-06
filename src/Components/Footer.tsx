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

                {/* Right Section */}
                <div className="footer-section">
                    <div className="footer-legal">
                        <p className="footer-license">
                            ©2025 CAJ
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-right">
                <div className="footer">
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