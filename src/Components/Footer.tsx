import { Cpu } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-content">
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
                <div className="footer-section">
                    <div className="footer-stats-section">
                        <span className="footer-tag">Academic Research Project</span>

                        <div className="footer-stats-horizontal">
                            <div className="stat-item-horizontal">
                                <span className="stat-number">2.1M</span>
                                <span className="stat-label">Events</span>
                            </div>
                            <div className="stat-item-horizontal">
                                <span className="stat-number">342</span>
                                <span className="stat-label">Malware</span>
                            </div>
                            <div className="stat-item-horizontal">
                                <span className="stat-number">102</span>
                                <span className="stat-label">IoCs</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-section">
                    <div className="footer-legal">
                        <p className="footer-license">
                            ©2025 CAJ
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}