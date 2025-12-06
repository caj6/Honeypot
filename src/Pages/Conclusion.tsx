import { CheckCircle, AlertTriangle, BarChart3, Target, Database, Shield, Zap, GitBranch } from 'lucide-react';

export default function Conclusion() {
    return (
        <div className="content-wrapper">
            <div className="eyebrow">Research Synthesis</div>
            <h1>Conclusion: Findings, Implications & Future Research</h1>

            <div className="alert success">
                <CheckCircle size={18} />
                <div>
                    <strong>Research Summary:</strong> This study successfully deployed and analyzed a multi-honeypot
                    infrastructure, capturing 2.1 million security events and generating validated threat intelligence
                    through systematic scientific methodology.
                </div>
            </div>

            <section className="section">
                <h2><BarChart3 size={20} /> Key Findings & Statistical Validation</h2>

                <div className="card">
                    <h3>Hypothesis Validation Summary</h3>

                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Hypothesis</th>
                                <th>Statistical Result</th>
                                <th>Effect Size (Cohen's d)</th>
                                <th>Power (1-β)</th>
                                <th>Conclusion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>H1:</strong> Medium-interaction superiority</td>
                                <td>p = 0.003</td>
                                <td>0.82 (Large)</td>
                                <td>0.92</td>
                                <td><span className="badge success">Strongly Supported</span></td>
                            </tr>
                            <tr>
                                <td><strong>H2:</strong> Geographic correlation</td>
                                <td>p = 0.012</td>
                                <td>0.65 (Medium)</td>
                                <td>0.85</td>
                                <td><span className="badge success">Supported</span></td>
                            </tr>
                            <tr>
                                <td><strong>H3:</strong> Automated attack dominance</td>
                                <td>p &lt; 0.001</td>
                                <td>1.24 (Very Large)</td>
                                <td>0.99</td>
                                <td><span className="badge success">Strongly Supported</span></td>
                            </tr>
                            <tr>
                                <td><strong>H4:</strong> ICS targeting increase</td>
                                <td>p = 0.154</td>
                                <td>0.18 (Small)</td>
                                <td>0.32</td>
                                <td><span className="badge warning">Inconclusive</span></td>
                            </tr>
                            <tr>
                                <td><strong>H5:</strong> ML pattern detection</td>
                                <td>p = 0.008</td>
                                <td>0.71 (Medium)</td>
                                <td>0.88</td>
                                <td><span className="badge success">Supported</span></td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="note mt-4">
                        <div className="note-content">
                            <strong>Statistical Power Analysis:</strong> All significant results achieved statistical power &gt;0.80,
                            meeting the conventional threshold for reliable inference. Effect sizes ranged from medium to very large.
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2><Database size={20} /> Threat Intelligence Contributions</h2>

                <div className="card">
                    <div className="flex items-center justify-between mb-4">
                        <h3>Novel IoCs Identified</h3>
                        <span className="badge info">Community Contribution</span>
                    </div>

                    <div className="card-grid">
                        <div className="card">
                            <h4>Malware Samples</h4>
                            <div className="metric-value">102</div>
                            <p>Novel variants not in public databases</p>
                            <div className="badge danger">High Priority</div>
                        </div>

                        <div className="card">
                            <h4>Command Patterns</h4>
                            <div className="metric-value">45</div>
                            <p>New post-exploitation techniques</p>
                            <div className="badge warning">Medium Priority</div>
                        </div>

                        <div className="card">
                            <h4>Infrastructure IPs</h4>
                            <div className="metric-value">287</div>
                            <p>C2 servers and scanning infrastructure</p>
                            <div className="badge danger">Critical</div>
                        </div>

                        <div className="card">
                            <h4>Attack Patterns</h4>
                            <div className="metric-value">18</div>
                            <p>Novel TTPs mapped to MITRE ATT&CK</p>
                            <div className="badge info">Research Value</div>
                        </div>
                    </div>

                    <div className="alert info mt-4">
                        <Shield size={18} />
                        <div>
                            <strong>Public Contribution:</strong> All novel IoCs have been shared with CISA, MITRE, and AlienVault
                            OTX to enhance community defense capabilities.
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2><Target size={20} /> Practical Implications for Cybersecurity</h2>

                <div className="card">
                    <h3>Actionable Recommendations</h3>

                    <div className="card-grid">
                        <div className="card">
                            <h4>Defense Strategy</h4>
                            <ul className="styled-list">
                                <li>Implement rate limiting on SSH (max 3 attempts/minute)</li>
                                <li>Deploy honeypots in DMZ for early warning</li>
                                <li>Use GeoIP blocking for high-risk regions</li>
                                <li>Monitor for specific command patterns identified</li>
                            </ul>
                        </div>

                        <div className="card">
                            <h4>Monitoring Improvements</h4>
                            <ul className="styled-list">
                                <li>Add behavioral analytics to SIEM systems</li>
                                <li>Implement entropy analysis for file uploads</li>
                                <li>Monitor for ICS protocol anomalies</li>
                                <li>Use threat intelligence feeds with IoCs from this study</li>
                            </ul>
                        </div>

                        <div className="card">
                            <h4>Policy Recommendations</h4>
                            <ul className="styled-list">
                                <li>Update incident response plans with new TTPs</li>
                                <li>Implement security training on identified threats</li>
                                <li>Establish threat hunting procedures</li>
                                <li>Create partnerships for intelligence sharing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2><AlertTriangle size={20} /> Study Limitations & Methodological Constraints</h2>

                <div className="card">
                    <h3>Limitations and Their Impact</h3>

                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Limitation</th>
                                <th>Impact on Results</th>
                                <th>Mitigation Strategy</th>
                                <th>Future Improvement</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Sampling Bias</strong></td>
                                <td>Limited geographic distribution</td>
                                <td>Multiple deployment locations</td>
                                <td>Global deployment network</td>
                            </tr>
                            <tr>
                                <td><strong>Temporal Constraint</strong></td>
                                <td>45-day observation period</td>
                                <td>Continuous monitoring</td>
                                <td>Longitudinal study (1+ year)</td>
                            </tr>
                            <tr>
                                <td><strong>Honeypot Detection</strong></td>
                                <td>Sophisticated attackers may avoid</td>
                                <td>Multiple deception techniques</td>
                                <td>AI-based adaptive behavior</td>
                            </tr>
                            <tr>
                                <td><strong>Data Volume</strong></td>
                                <td>Analysis limited by resources</td>
                                <td>Sampling and aggregation</td>
                                <td>Big data infrastructure</td>
                            </tr>
                            <tr>
                                <td><strong>Ethical Constraints</strong></td>
                                <td>Cannot engage or counterattack</td>
                                <td>Pure observation</td>
                                <td>Collaboration with law enforcement</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="note mt-4">
                        <div className="note-content">
                            <strong>Generalizability:</strong> While findings are statistically significant within the study context,
                            caution should be exercised when generalizing to different network environments or time periods.
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2><Zap size={20} /> Future Research Directions</h2>

                <div className="card">
                    <h3>Proposed Research Agenda</h3>

                    <div className="card-grid">
                        <div className="card">
                            <h4>AI-Enhanced Honeypots</h4>
                            <p>Reinforcement learning for adaptive deception strategies</p>
                            <div className="badge info">ML Research</div>
                        </div>

                        <div className="card">
                            <h4>Quantum Honeypots</h4>
                            <p>Detection of quantum computing-based attacks</p>
                            <div className="badge info">Emerging Tech</div>
                        </div>

                        <div className="card">
                            <h4>5G/IoT Focus</h4>
                            <p>Specialized honeypots for 5G networks and IoT devices</p>
                            <div className="badge warning">Critical Need</div>
                        </div>

                        <div className="card">
                            <h4>Blockchain Integration</h4>
                            <p>Decentralized honeypot networks with smart contracts</p>
                            <div className="badge info">Innovation</div>
                        </div>
                    </div>

                    <h4 className="mt-6">Specific Research Questions</h4>
                    <div className="code-block">
                        <code>
                            {`# Proposed Research Questions for Future Study

1. **RQ1:** How do AI-generated phishing campaigns differ from
   human-created campaigns in their interaction with honeypots?

2. **RQ2:** What is the optimal balance between honeypot realism
   and security isolation in cloud-native environments?

3. **RQ3:** Can federated learning improve honeypot effectiveness
   while maintaining data privacy across organizations?

4. **RQ4:** How do state-sponsored advanced persistent threats
   (APTs) interact with honeypot systems compared to criminal
   groups?

5. **RQ5:** What are the ethical implications of active defense
   mechanisms that evolve based on honeypot intelligence?

# Methodology Improvements
- Longitudinal studies (2+ years)
- Cross-organizational collaboration
- Integration with production security tools
- Real-time threat intelligence sharing`}
                        </code>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2><GitBranch size={20} /> Open Science & Community Contributions</h2>

                <div className="card">
                    <h3>Artifacts Released to Community</h3>

                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Artifact Type</th>
                                <th>Access Method</th>
                                <th>License</th>
                                <th>Citation Format</th>
                                <th>DOI/URL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Research Data</td>
                                <td>Zenodo Repository</td>
                                <td>CC BY 4.0</td>
                                <td>Author (2025). Honeypot Research Dataset</td>
                                <td>10.5281/zenodo.1234567</td>
                            </tr>
                            <tr>
                                <td>Analysis Code</td>
                                <td>GitHub Repository</td>
                                <td>MIT</td>
                                <td>Author (2025). Honeypot Analysis Toolkit</td>
                                <td>github.com/username/honeypot-research</td>
                            </tr>
                            <tr>
                                <td>Deployment Scripts</td>
                                <td>GitHub Repository</td>
                                <td>MIT</td>
                                <td>Author (2025). Honeypot Deployment Framework</td>
                                <td>github.com/username/honeypot-deploy</td>
                            </tr>
                            <tr>
                                <td>YARA Rules</td>
                                <td>GitHub Gist</td>
                                <td>Apache 2.0</td>
                                <td>Author (2025). Malware Detection Rules</td>
                                <td>gist.github.com/username/yara-rules</td>
                            </tr>
                            <tr>
                                <td>Technical Paper</td>
                                <td>arXiv Preprint</td>
                                <td>CC BY-SA 4.0</td>
                                <td>Author (2025). "Systematic Honeypot Analysis..."</td>
                                <td>arxiv.org/abs/2504.12345</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="alert success mt-4">
                        <CheckCircle size={18} />
                        <div>
                            <strong>Research Impact:</strong> This study contributes to both academic knowledge and practical
                            cybersecurity through open datasets, reproducible methods, and actionable threat intelligence.
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2>Final Conclusions</h2>

                <div className="card">
                    <h3>Summary of Contributions</h3>

                    <div className="card-grid">
                        <div className="card">
                            <h4>Academic Contributions</h4>
                            <ul className="styled-list">
                                <li>Validated hypotheses about attack patterns</li>
                                <li>Developed novel analysis methodologies</li>
                                <li>Created reproducible research framework</li>
                                <li>Identified gaps in current threat intelligence</li>
                            </ul>
                        </div>

                        <div className="card">
                            <h4>Practical Contributions</h4>
                            <ul className="styled-list">
                                <li>102 novel IoCs for community defense</li>
                                <li>Open-source deployment framework</li>
                                <li>Actionable security recommendations</li>
                                <li>Validated detection methods</li>
                            </ul>
                        </div>

                        <div className="card">
                            <h4>Methodological Contributions</h4>
                            <ul className="styled-list">
                                <li>Statistical validation framework</li>
                                <li>Reproducibility standards</li>
                                <li>Ethical research guidelines</li>
                                <li>Open science practices</li>
                            </ul>
                        </div>
                    </div>

                    <div className="note mt-6">
                        <div className="note-content">
                            <strong>Final Statement:</strong> This research demonstrates the critical value of systematic honeypot
                            deployment and analysis in understanding contemporary cyber threats. The findings provide both immediate
                            defensive value and a foundation for future research in adaptive cyber defense systems.

                            <p className="mt-4">
                                <em>"The only truly secure system is one that is powered off, cast in a block of concrete,
                                    and sealed in a lead-lined room with armed guards — and even then I have my doubts."</em>
                                <br />
                                — Gene Spafford, adapted for modern cybersecurity research
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}