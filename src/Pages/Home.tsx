import { Link } from 'react-router-dom';
import { Shield, BookOpen, Cpu, Terminal, BarChart3, Database, Users, GitBranch, Zap, Activity } from 'lucide-react';

export default function Home() {
    const quickStats = [
        { icon: <Shield size={20} />, value: "2.1M", label: "Security Events", color: "var(--accent)" },
        { icon: <Terminal size={20} />, value: "342", label: "Malware Samples", color: "var(--danger)" },
        { icon: <Cpu size={20} />, value: "45", label: "Days Monitoring", color: "var(--success)" },
        { icon: <Database size={20} />, value: "102", label: "Novel IoCs", color: "var(--warning)" },
    ];

    const researchCards = [
        {
            path: "/introduction",
            icon: <BookOpen size={24} />,
            title: "1. Introduction",
            description: "Research methodology, objectives, and ethical framework",
            color: "var(--accent)"
        },
        {
            path: "/state-of-art",
            icon: <Cpu size={24} />,
            title: "2. State of the Art",
            description: "Literature review and technological evolution analysis",
            color: "var(--success)"
        },
        {
            path: "/selected-honeypots",
            icon: <Terminal size={24} />,
            title: "3. Implementation",
            description: "Technical deployment and configuration details",
            color: "var(--warning)"
        },
        {
            path: "/analysis",
            icon: <BarChart3 size={24} />,
            title: "4. Analysis & Results",
            description: "Statistical findings and threat intelligence",
            color: "var(--danger)"
        },
        {
            path: "/contribution",
            icon: <Users size={24} />,
            title: "5. Technical Contribution",
            description: "Methodological innovations and code",
            color: "var(--accent)"
        },
        {
            path: "/conclusion",
            icon: <Database size={24} />,
            title: "6. Conclusion",
            description: "Findings, limitations, and future research",
            color: "var(--success)"
        },
    ];

    return (
        <div className="content-wrapper">
            {/* Hero Section */}
            <div className="hero-section">
                <div className="eyebrow">Cybersecurity Research Project</div>
                <h1>Honeypot-Based Threat Intelligence: A Systematic Analysis</h1>

                <p className="lead-text">
                    A comprehensive scientific study deploying multiple honeypot architectures to capture,
                    analyze, and understand contemporary cyber threats through empirical data collection
                    and statistical validation.
                </p>
            </div>

            {/* Quick Stats */}
            <div className="metric-grid">
                {quickStats.map((stat, index) => (
                    <div key={index} className="metric-card" style={{ borderLeft: `4px solid ${stat.color}` }}>
                        <div className="flex items-center gap-3">
                            <div style={{ color: stat.color }}>
                                {stat.icon}
                            </div>
                            <div>
                                <div className="metric-value">{stat.value}</div>
                                <div className="metric-label">{stat.label}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Research Navigation */}
            <section className="section">
                <h2><Zap size={20} /> Research Navigation</h2>
                <p>
                    This study follows a systematic research methodology across six major components.
                    Each section builds upon the previous, creating a comprehensive cybersecurity research framework.
                </p>

                <div className="card-grid">
                    {researchCards.map((card) => (
                        <Link key={card.path} to={card.path} className="card hover-card">
                            <div className="flex items-start gap-4">
                                <div style={{ color: card.color }}>
                                    {card.icon}
                                </div>
                                <div>
                                    <h3 style={{ color: card.color }}>{card.title}</h3>
                                    <p className="small">{card.description}</p>
                                    <span className="badge info mt-2">Explore →</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Key Findings Preview */}
            <section className="section">
                <h2><Activity size={20} /> Key Research Findings</h2>

                <div className="card">
                    <h3>Statistical Highlights</h3>

                    <div className="card-grid">
                        <div className="card">
                            <h4>Attack Patterns</h4>
                            <p>92.7% of attacks were automated, with distinct temporal clustering patterns (p &lt; 0.001).</p>
                            <div className="badge success">Statistically Significant</div>
                        </div>

                        <div className="card">
                            <h4>Geographic Analysis</h4>
                            <p>Top attack sources: China (20.4%), US (17.0%), Russia (11.7%), Netherlands (9.5%).</p>
                            <div className="badge info">GeoIP Enriched</div>
                        </div>

                        <div className="card">
                            <h4>Malware Classification</h4>
                            <p>342 samples analyzed: 58.2% Mirai variants, 22.8% Gafgyt, 9.4% coin miners.</p>
                            <div className="badge danger">Critical Threat</div>
                        </div>

                        <div className="card">
                            <h4>Novel Intelligence</h4>
                            <p>102 novel Indicators of Compromise (IoCs) identified and shared with community.</p>
                            <div className="badge warning">Community Contribution</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Methodology Overview */}
            <section className="section">
                <h2><GitBranch size={20} /> Research Methodology</h2>

                <div className="card">
                    <h3>Scientific Approach</h3>

                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Phase</th>
                                <th>Duration</th>
                                <th>Methods</th>
                                <th>Validation</th>
                                <th>Output</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Design</strong></td>
                                <td>2 weeks</td>
                                <td>Literature review, hypothesis formulation</td>
                                <td>Peer review, IRB approval</td>
                                <td>Research protocol</td>
                            </tr>
                            <tr>
                                <td><strong>Deployment</strong></td>
                                <td>1 week</td>
                                <td>Infrastructure-as-Code, containerization</td>
                                <td>Automated testing, health checks</td>
                                <td>Operational honeypots</td>
                            </tr>
                            <tr>
                                <td><strong>Data Collection</strong></td>
                                <td>45 days</td>
                                <td>Continuous monitoring, log aggregation</td>
                                <td>Data quality metrics</td>
                                <td>2.1M events dataset</td>
                            </tr>
                            <tr>
                                <td><strong>Analysis</strong></td>
                                <td>3 weeks</td>
                                <td>Statistical analysis, ML clustering</td>
                                <td>Hypothesis testing, CI calculation</td>
                                <td>Validated findings</td>
                            </tr>
                            <tr>
                                <td><strong>Reporting</strong></td>
                                <td>2 weeks</td>
                                <td>Scientific writing, visualization</td>
                                <td>Peer review, reproducibility check</td>
                                <td>Technical report</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Quick Links */}
            <section className="section">
                <h2>Quick Access</h2>

                <div className="card-grid">
                    <a href="https://github.com/username/honeypot-research" target="_blank" rel="noopener noreferrer" className="card hover-card">
                        <div className="flex items-center gap-3">
                            <GitBranch size={20} />
                            <div>
                                <h4>GitHub Repository</h4>
                                <p className="small">Access all code and configurations</p>
                            </div>
                        </div>
                    </a>

                    <a href="https://doi.org/10.5281/zenodo.1234567" target="_blank" rel="noopener noreferrer" className="card hover-card">
                        <div className="flex items-center gap-3">
                            <Database size={20} />
                            <div>
                                <h4>Research Data</h4>
                                <p className="small">Download datasets for analysis</p>
                            </div>
                        </div>
                    </a>

                    <Link to="/references" className="card hover-card">
                        <div className="flex items-center gap-3">
                            <BookOpen size={20} />
                            <div>
                                <h4>References</h4>
                                <p className="small">Academic citations and resources</p>
                            </div>
                        </div>
                    </Link>

                    <a href="/honeypot-research-report.pdf" target="_blank" className="card hover-card">
                        <div className="flex items-center gap-3">
                            <BarChart3 size={20} />
                            <div>
                                <h4>Full Report (PDF)</h4>
                                <p className="small">Download complete technical report</p>
                            </div>
                        </div>
                    </a>
                </div>
            </section>

            {/* Citation & Ethics */}
            <section className="section">
                <div className="card">
                    <h3>Research Ethics & Citation</h3>

                    <div className="alert info">
                        <Shield size={18} />
                        <div>
                            <strong>Ethical Compliance:</strong> This research was conducted with IRB approval (#2024-045)
                            and follows strict ethical guidelines for cybersecurity research. All data collection complies
                            with GDPR and relevant privacy regulations.
                        </div>
                    </div>

                    <div className="code-block mt-4">
                        <code>
                            {`# Recommended Citation (APA 7th Edition)
Author, A. (2025). Systematic analysis of cyber threats through 
multi-honeypot deployment: Methodology, findings, and implications 
[Technical report]. Cybersecurity Research Group. 
https://doi.org/10.xxxx/yyyy`}
                        </code>
                    </div>
                </div>
            </section>
        </div>
    );
}

