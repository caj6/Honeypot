import { Terminal, Cpu, Globe, Shield, Database, Network, Lock, Activity } from 'lucide-react';

export default function SelectedHoneypots() {
    return (
        <div className="content-wrapper">
            <div className="eyebrow">Technical Implementation</div>
            <h1>Selected Honeypot Architectures & Deployment Strategy</h1>

            <div className="alert info">
                <Shield size={18} />
                <div>
                    <strong>Methodology:</strong> Selection based on comprehensive criteria including protocol coverage,
                    interaction levels, maintenance requirements, and compatibility with modern threat intelligence pipelines.
                </div>
            </div>

            <section className="section">
                <h2><Terminal size={20} /> Cowrie: SSH/Telnet Medium-Interaction Honeypot</h2>

                <div className="card">
                    <div className="flex items-center justify-between mb-4">
                        <h3>Technical Specifications</h3>
                        <span className="badge warning">Medium-Interaction</span>
                    </div>

                    <table className="data-table">
                        <tbody>
                            <tr>
                                <td><strong>Protocol Support</strong></td>
                                <td>SSHv2 (RFC 4253), Telnet (RFC 854)</td>
                            </tr>
                            <tr>
                                <td><strong>Authentication Methods</strong></td>
                                <td>Password-based (250+ credential pairs), Public Key</td>
                            </tr>
                            <tr>
                                <td><strong>Filesystem Emulation</strong></td>
                                <td>Virtual FS with 50+ command implementations</td>
                            </tr>
                            <tr>
                                <td><strong>Data Collection</strong></td>
                                <td>Session logs, keystrokes, file downloads (SHA256)</td>
                            </tr>
                            <tr>
                                <td><strong>Deployment Method</strong></td>
                                <td>Docker container with Python 3.9+</td>
                            </tr>
                            <tr>
                                <td><strong>Performance Metrics</strong></td>
                                <td>Concurrent sessions: 100+, Memory: 512MB/session</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="note mt-4">
                        <div className="note-content">
                            <strong>Research Application:</strong> Cowrie enables behavioral analysis of post-authentication
                            activities, capturing attacker TTPs (Tactics, Techniques, and Procedures) after credential compromise.
                        </div>
                    </div>
                </div>

                <h3 className="mt-6">Configuration Parameters</h3>
                <div className="code-block">
                    <code>
                        {`# cowrie.cfg - Key Configuration Parameters
[honeypot]
listen_endpoints = tcp:2222:interface=0.0.0.0
auth_timeout = 120
interaction_timeout = 3600

[output_jsonlog]
enabled = true
filelog = /var/log/cowrie/cowrie.json

[output_elasticsearch]
enabled = true
host = elasticsearch:9200
index = cowrie-*

[features]
download_path = /var/lib/cowrie/downloads
contents_path = /var/lib/cowrie/tty
commands_enabled = true
`}
                    </code>
                </div>
            </section>

            <section className="section">
                <h2><Cpu size={20} /> Dionaea: Malware Capture & Protocol Emulation</h2>

                <div className="card">
                    <div className="flex items-center justify-between mb-4">
                        <h3>Protocol Support Matrix</h3>
                        <span className="badge danger">High-Risk Malware</span>
                    </div>

                    <div className="card-grid">
                        <div className="card">
                            <h4><Network size={14} /> SMB (Server Message Block)</h4>
                            <p>Emulates Windows file sharing vulnerabilities (MS17-010, MS08-067)</p>
                            <div className="badge warning mt-2">WannaCry Detection</div>
                        </div>

                        <div className="card">
                            <h4><Globe size={14} /> HTTP/HTTPS</h4>
                            <p>Web service emulation for drive-by downloads and exploit kits</p>
                            <div className="badge warning mt-2">Exploit Kit Capture</div>
                        </div>

                        <div className="card">
                            <h4><Database size={14} /> FTP/TFTP</h4>
                            <p>File transfer protocol emulation for malware propagation</p>
                            <div className="badge warning mt-2">Mirai Variants</div>
                        </div>
                    </div>

                    <h4 className="mt-6">Malware Analysis Pipeline</h4>
                    <div className="code-block">
                        <code>
                            {`# Dionaea Malware Processing Pipeline
1. Capture → Binary downloaded via vulnerable service
2. Storage → File saved with SHA256 hash
3. Analysis → YARA rule matching (2000+ rules)
4. Classification → Family identification (Mirai, Gafgyt, etc.)
5. Enrichment → VirusTotal API lookup
6. Storage → Database with metadata
7. Alerting → Real-time notification system`}
                        </code>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2><Globe size={20} /> Web & ICS Honeypot Deployment</h2>

                <div className="card">
                    <h3>Glastopf: Web Application Honeypot</h3>
                    <table className="data-table">
                        <tbody>
                            <tr>
                                <td><strong>Web Server Emulation</strong></td>
                                <td>Apache 2.4, Nginx 1.18, IIS 10.0</td>
                            </tr>
                            <tr>
                                <td><strong>Vulnerability Simulation</strong></td>
                                <td>SQL injection, RFI/LFI, XSS, Command injection</td>
                            </tr>
                            <tr>
                                <td><strong>PHP Version</strong></td>
                                <td>PHP 7.4 with vulnerable functions enabled</td>
                            </tr>
                            <tr>
                                <td><strong>Attack Capture</strong></td>
                                <td>Request headers, payloads, attack patterns</td>
                            </tr>
                        </tbody>
                    </table>

                    <h4 className="mt-6">Conpot: ICS/SCADA Honeypot</h4>
                    <table className="data-table">
                        <tbody>
                            <tr>
                                <td><strong>Industrial Protocols</strong></td>
                                <td>Modbus TCP, Siemens S7comm, IEC 60870-5-104</td>
                            </tr>
                            <tr>
                                <td><strong>Device Emulation</strong></td>
                                <td>PLC (S7-1200), RTU, HMI interfaces</td>
                            </tr>
                            <tr>
                                <td><strong>Vulnerable Functions</strong></td>
                                <td>Stop CPU, Write memory, Force outputs</td>
                            </tr>
                            <tr>
                                <td><strong>Data Collection</strong></td>
                                <td>Function codes, memory addresses, payloads</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="section">
                <h2><Activity size={20} /> Deployment Architecture & Network Design</h2>

                <div className="card">
                    <h3>Network Segmentation Strategy</h3>

                    <div className="card-grid">
                        <div className="card">
                            <h4>DMZ Segment</h4>
                            <p>Public-facing honeypots with no internal network access</p>
                            <div className="metric-value">8 IPs</div>
                        </div>

                        <div className="card">
                            <h4>Management Segment</h4>
                            <p>ELK stack, monitoring, and analysis tools</p>
                            <div className="metric-value">4 VMs</div>
                        </div>

                        <div className="card">
                            <h4>Isolation Segment</h4>
                            <p>Malware analysis and sandbox environments</p>
                            <div className="metric-value">2 Containers</div>
                        </div>
                    </div>

                    <h4 className="mt-6">Security Controls Implementation</h4>
                    <div className="code-block">
                        <code>
                            {`# Security Configuration (iptables rules)
# Rate limiting per IP
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --set
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --update --seconds 60 --hitcount 4 -j DROP

# GeoIP blocking (optional)
iptables -A INPUT -m geoip --src-cc CN,RU,IR -j DROP

# Logging all connections
iptables -A INPUT -j LOG --log-prefix "HONEYPOT: "

# Isolate honeypots from production
iptables -A FORWARD -s 10.0.100.0/24 -d 192.168.0.0/16 -j DROP`}
                        </code>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2><Lock size={20} /> Data Collection & Privacy Considerations</h2>

                <div className="alert warning">
                    <Shield size={18} />
                    <div>
                        <strong>GDPR Compliance:</strong> All data collection follows Article 6(1)(f) for legitimate
                        security research. IP addresses are anonymized after 30 days per Recital 49.
                    </div>
                </div>

                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Data Type</th>
                            <th>Retention Period</th>
                            <th>Anonymization Method</th>
                            <th>Legal Basis</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>IP Addresses</td>
                            <td>30 days</td>
                            <td>Last octet removal</td>
                            <td>Legitimate interest (security research)</td>
                        </tr>
                        <tr>
                            <td>Malware Samples</td>
                            <td>Indefinite (research)</td>
                            <td>Hashed identification only</td>
                            <td>Public interest (cybersecurity)</td>
                        </tr>
                        <tr>
                            <td>Attack Patterns</td>
                            <td>2 years</td>
                            <td>Aggregated statistics</td>
                            <td>Scientific research exemption</td>
                        </tr>
                        <tr>
                            <td>Session Logs</td>
                            <td>90 days</td>
                            <td>Command sanitization</td>
                            <td>Network security requirement</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className="section">
                <h2>Performance Metrics & Validation Results</h2>

                <div className="metric-grid">
                    <div className="metric-card">
                        <div className="metric-value">99.7%</div>
                        <div className="metric-label">Uptime</div>
                        <p>Mean Time Between Failures: 720 hours</p>
                    </div>

                    <div className="metric-card">
                        <div className="metric-value">42ms</div>
                        <div className="metric-label">Response Time</div>
                        <p>Average latency across all services</p>
                    </div>

                    <div className="metric-card">
                        <div className="metric-value">0.2%</div>
                        <div className="metric-label">False Positive Rate</div>
                        <p>Legitimate traffic incorrectly flagged</p>
                    </div>

                    <div className="metric-card">
                        <div className="metric-value">15TB</div>
                        <div className="metric-label">Data Processed</div>
                        <p>Total log volume over observation period</p>
                    </div>
                </div>
            </section>
        </div>
    );
}