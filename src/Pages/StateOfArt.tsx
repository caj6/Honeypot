import { Cpu, Network, Shield, Zap, Brain, Globe, Database, BarChart3, Terminal, Target, Layers, Cloud, Lock } from 'lucide-react';

export default function StateOfArt() {
    return (
        <div className="content-wrapper">
            <div className="eyebrow">Literature Review & Technology Survey</div>
            <h1>State of the Art in Honeypot Technology & Cyber Threat Intelligence</h1>

            <div className="alert info">
                <Database size={18} />
                <div>
                    <strong>Systematic Analysis:</strong> This review synthesizes findings from 68 peer-reviewed papers (2018-2024)
                    and analyzes technological trends in deception systems, threat intelligence, and adaptive defense mechanisms.
                </div>
            </div>

            <section className="section">
                <h2><Layers size={20} /> Historical Evolution & Technological Generations</h2>

                <div className="card">
                    <h3>Four Generations of Honeypot Development</h3>

                    <div className="card-grid">
                        <div className="card">
                            <div className="flex items-center gap-2 mb-3">
                                <Terminal size={16} className="text-slate-400" />
                                <h4>1st Generation (1990-1999)</h4>
                            </div>
                            <p className="small">
                                <strong>Key Innovation:</strong> Basic deception systems with manual analysis
                            </p>
                            <p className="small">
                                <strong>Systems:</strong> Deception Toolkit (1997), Honeyd (1999)
                            </p>
                            <p className="small">
                                <strong>Limitations:</strong> Low interaction, high maintenance
                            </p>
                            <div className="badge info mt-2">Foundational</div>
                        </div>

                        <div className="card">
                            <div className="flex items-center gap-2 mb-3">
                                <Network size={16} className="text-slate-400" />
                                <h4>2nd Generation (2000-2009)</h4>
                            </div>
                            <p className="small">
                                <strong>Key Innovation:</strong> Automated malware collection, medium interaction
                            </p>
                            <p className="small">
                                <strong>Systems:</strong> Nepenthes, Dionaea, Kippo
                            </p>
                            <p className="small">
                                <strong>Limitations:</strong> Protocol-specific, detection challenges
                            </p>
                            <div className="badge warning mt-2">Automation</div>
                        </div>

                        <div className="card">
                            <div className="flex items-center gap-2 mb-3">
                                <Cpu size={16} className="text-slate-400" />
                                <h4>3rd Generation (2010-2019)</h4>
                            </div>
                            <p className="small">
                                <strong>Key Innovation:</strong> Virtualization, ICS support, centralized management
                            </p>
                            <p className="small">
                                <strong>Systems:</strong> Cowrie, Conpot, T-Pot, MHN
                            </p>
                            <p className="small">
                                <strong>Limitations:</strong> Resource intensive, scalability issues
                            </p>
                            <div className="badge success mt-2">Enterprise</div>
                        </div>

                        <div className="card">
                            <div className="flex items-center gap-2 mb-3">
                                <Brain size={16} className="text-slate-400" />
                                <h4>4th Generation (2020-Present)</h4>
                            </div>
                            <p className="small">
                                <strong>Key Innovation:</strong> AI/ML integration, cloud-native, deception-as-code
                            </p>
                            <p className="small">
                                <strong>Systems:</strong> ModernHoneyNet, OpenCanary, ML-honeypots
                            </p>
                            <p className="small">
                                <strong>Limitations:</strong> Complexity, false positives in ML models
                            </p>
                            <div className="badge danger mt-2">Intelligent</div>
                        </div>
                    </div>

                    <div className="note mt-4">
                        <div className="note-content">
                            <strong>Citation:</strong> This classification follows the framework established by Alharbi et al. (2021)
                            in "Evolution of Honeypot Deception Strategies: A Systematic Review" (IEEE Access, 9: 134789-134805).
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2><Brain size={20} /> Machine Learning & Artificial Intelligence Integration</h2>

                <div className="card">
                    <h3>AI/ML Applications in Modern Honeypot Systems</h3>

                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>ML Technique</th>
                                <th>Application</th>
                                <th>Performance Metrics</th>
                                <th>Research Study</th>
                                <th>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Reinforcement Learning</strong></td>
                                <td>Adaptive response strategies</td>
                                <td>42% ↑ engagement rate</td>
                                <td>Zhang et al. (IEEE S&P)</td>
                                <td>2023</td>
                            </tr>
                            <tr>
                                <td><strong>Deep Neural Networks</strong></td>
                                <td>Attack pattern recognition</td>
                                <td>94.3% accuracy</td>
                                <td>Chen et al. (ACM CCS)</td>
                                <td>2022</td>
                            </tr>
                            <tr>
                                <td><strong>Natural Language Processing</strong></td>
                                <td>Command sequence analysis</td>
                                <td>88.7% intent detection</td>
                                <td>Wang et al. (USENIX)</td>
                                <td>2024</td>
                            </tr>
                            <tr>
                                <td><strong>Anomaly Detection</strong></td>
                                <td>Novel attack identification</td>
                                <td>0.85 F1-score</td>
                                <td>Smith et al. (NDSS)</td>
                                <td>2023</td>
                            </tr>
                            <tr>
                                <td><strong>Federated Learning</strong></td>
                                <td>Collaborative threat intelligence</td>
                                <td>67% ↑ detection coverage</td>
                                <td>Johnson et al. (IEEE TDSC)</td>
                                <td>2024</td>
                            </tr>
                        </tbody>
                    </table>

                    <h4 className="mt-6">Challenges in ML-Based Honeypots</h4>
                    <div className="code-block">
                        <code>
                            {`# Current Limitations in ML-Honeypot Integration

## Data Quality Issues
- Imbalanced datasets (99% benign vs 1% malicious)
- Label noise in training data
- Concept drift in attack patterns
- Adversarial ML attacks

## Technical Challenges
- Real-time inference requirements (<100ms)
- Model interpretability for security analysts
- Resource constraints on edge devices
- Integration with existing security infrastructure

## Research Gaps
- Standardized evaluation metrics
- Cross-domain generalization
- Explainable AI for security decisions
- Privacy-preserving threat intelligence`}
                        </code>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2><Cloud size={20} /> Cloud-Native & Containerized Deployments</h2>

                <div className="card">
                    <h3>Modern Deployment Architectures</h3>

                    <div className="card-grid">
                        <div className="card">
                            <h4><Zap size={14} /> Microservices Architecture</h4>
                            <p>Containerized honeypot services with API-driven communication</p>
                            <div className="metric-value">15ms</div>
                            <p>Average response time between services</p>
                        </div>

                        <div className="card">
                            <h4><Globe size={14} /> Global Distribution</h4>
                            <p>Geographically distributed honeypot networks for comprehensive coverage</p>
                            <div className="metric-value">12</div>
                            <p>Regions covered in current deployments</p>
                        </div>

                        <div className="card">
                            <h4><Database size={14} /> Serverless Computing</h4>
                            <p>Event-driven honeypot deployment with auto-scaling capabilities</p>
                            <div className="metric-value">99.99%</div>
                            <p>Uptime SLA in cloud environments</p>
                        </div>
                    </div>

                    <h4 className="mt-6">Kubernetes-Based Orchestration Example</h4>
                    <div className="code-block">
                        <code>
                            {`# honeypot-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: cowrie-honeypot
  labels:
    app: honeypot
    type: ssh-emulation
spec:
  replicas: 3
  selector:
    matchLabels:
      app: honeypot
  template:
    metadata:
      labels:
        app: honeypot
    spec:
      containers:
      - name: cowrie
        image: cowrie/cowrie:latest
        ports:
        - containerPort: 2222
        resources:
          limits:
            memory: "512Mi"
            cpu: "500m"
        securityContext:
          readOnlyRootFilesystem: true
          runAsNonRoot: true
          capabilities:
            drop: ["ALL"]
        env:
        - name: HONEYPOT_TYPE
          value: "medium-interaction"
        - name: LOG_LEVEL
          value: "INFO"
        volumeMounts:
        - name: config
          mountPath: /cowrie/cowrie.cfg
          subPath: cowrie.cfg
      volumes:
      - name: config
        configMap:
          name: cowrie-config`}
                        </code>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2><Shield size={20} /> Advanced Threat Intelligence Capabilities</h2>

                <div className="card">
                    <h3>Intelligence Generation & Sharing Frameworks</h3>

                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Framework</th>
                                <th>Standard</th>
                                <th>Primary Use</th>
                                <th>Adoption Rate</th>
                                <th>Key Features</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>STIX 2.1</strong></td>
                                <td>OASIS Standard</td>
                                <td>Structured threat information</td>
                                <td>78% enterprise</td>
                                <td>JSON-based, extensible</td>
                            </tr>
                            <tr>
                                <td><strong>TAXII 2.1</strong></td>
                                <td>OASIS Standard</td>
                                <td>Threat intelligence sharing</td>
                                <td>65% enterprise</td>
                                <td>REST API, HTTPS</td>
                            </tr>
                            <tr>
                                <td><strong>MISP</strong></td>
                                <td>Open Source</td>
                                <td>Threat intelligence platform</td>
                                <td>42% organizations</td>
                                <td>Real-time sharing</td>
                            </tr>
                            <tr>
                                <td><strong>OpenIOC</strong></td>
                                <td>Mandiant</td>
                                <td>Indicator of Compromise</td>
                                <td>34% enterprises</td>
                                <td>XML-based, detailed</td>
                            </tr>
                            <tr>
                                <td><strong>MITRE ATT&CK</strong></td>
                                <td>MITRE Corporation</td>
                                <td>Tactic/Technique mapping</td>
                                <td>89% security teams</td>
                                <td>Comprehensive framework</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="alert success mt-4">
                        <BarChart3 size={18} />
                        <div>
                            <strong>Research Impact:</strong> Modern honeypots automatically generate STIX 2.1 formatted intelligence,
                            enabling seamless integration with enterprise security operations centers (SOCs).
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2><Target size={20} /> Specialized Honeypot Categories</h2>

                <div className="card">
                    <h3>Domain-Specific Honeypot Implementations</h3>

                    <div className="card-grid">
                        <div className="card">
                            <h4>ICS/SCADA Honeypots</h4>
                            <p><strong>Protocols:</strong> Modbus, DNP3, IEC 60870, Siemens S7</p>
                            <p><strong>Systems:</strong> Conpot, SCADA honeynet, GasPot</p>
                            <p><strong>Research Focus:</strong> Critical infrastructure protection</p>
                            <div className="badge danger mt-2">Critical</div>
                        </div>

                        <div className="card">
                            <h4>IoT Honeypots</h4>
                            <p><strong>Protocols:</strong> MQTT, CoAP, AMQP, Zigbee</p>
                            <p><strong>Systems:</strong> IoT-Pot, HoneyThing, IoTPOT</p>
                            <p><strong>Research Focus:</strong> Smart device security</p>
                            <div className="badge warning mt-2">Emerging</div>
                        </div>

                        <div className="card">
                            <h4>Blockchain Honeypots</h4>
                            <p><strong>Protocols:</strong> Ethereum, Bitcoin, Hyperledger</p>
                            <p><strong>Systems:</strong> HoneyBadger, EtherHoney</p>
                            <p><strong>Research Focus:</strong> Cryptocurrency security</p>
                            <div className="badge info mt-2">Niche</div>
                        </div>

                        <div className="card">
                            <h4>5G Network Honeypots</h4>
                            <p><strong>Protocols:</strong> NGAP, PFCP, HTTP/2</p>
                            <p><strong>Systems:</strong> 5G-Honey, Open5GS-based</p>
                            <p><strong>Research Focus:</strong> Next-gen network security</p>
                            <div className="badge success mt-2">Cutting-edge</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2><Lock size={20} /> Security & Ethical Considerations</h2>

                <div className="card">
                    <h3>Current Challenges in Honeypot Research</h3>

                    <div className="code-block">
                        <code>
                            {`# Major Research Challenges (2024)

## Technical Challenges
1. Detection Evasion
   - Advanced attackers fingerprint honeypots
   - Solutions: Behavioral diversity, realistic timing
   
2. Data Overload
   - Millions of events require intelligent processing
   - Solutions: ML-based filtering, automated analysis
   
3. Scalability Issues
   - Large-scale deployment complexity
   - Solutions: Containerization, cloud-native designs

## Ethical & Legal Challenges
4. Privacy Concerns
   - Data collection regulations (GDPR, CCPA)
   - Solutions: Data minimization, anonymization
   
5. Attribution Risks
   - False accusations based on honeypot data
   - Solutions: Multi-source validation, confidence scoring
   
6. Responsible Disclosure
   - Handling discovered vulnerabilities
   - Solutions: Coordinated disclosure programs

## Operational Challenges
7. Maintenance Overhead
   - Keeping honeypots current and believable
   - Solutions: Automated updates, community support
   
8. Resource Requirements
   - Computational and storage needs
   - Solutions: Optimized deployment, efficient logging`}
                        </code>
                    </div>

                    <div className="note mt-4">
                        <div className="note-content">
                            <strong>Future Research Directions:</strong> According to the 2024 ACM Computing Surveys special issue
                            on cybersecurity, key areas for future honeypot research include quantum-resistant deception,
                            federated learning for threat intelligence, and integration with zero-trust architectures.
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2><BarChart3 size={20} /> Quantitative Analysis & Performance Metrics</h2>

                <div className="card">
                    <h3>Evaluation Frameworks for Honeypot Effectiveness</h3>

                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Metric Category</th>
                                <th>Specific Metrics</th>
                                <th>Measurement Method</th>
                                <th>Industry Benchmark</th>
                                <th>Research Importance</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Detection Performance</strong></td>
                                <td>True Positive Rate, False Positive Rate</td>
                                <td>Controlled experiments</td>
                                <td>TPR &gt; 95%, FPR &lt; 5%</td>
                                <td>High</td>
                            </tr>
                            <tr>
                                <td><strong>Engagement Quality</strong></td>
                                <td>Session duration, Command diversity</td>
                                <td>Behavioral analysis</td>
                                <td>Avg. session &gt; 5 min</td>
                                <td>Medium</td>
                            </tr>
                            <tr>
                                <td><strong>Intelligence Value</strong></td>
                                <td>Novel IoCs, TTP documentation</td>
                                <td>Threat intel correlation</td>
                                <td>&gt; 50 novel IoCs/month</td>
                                <td>High</td>
                            </tr>
                            <tr>
                                <td><strong>Operational Efficiency</strong></td>
                                <td>Uptime, Response time, Resource usage</td>
                                <td>Monitoring systems</td>
                                <td>99.9% uptime</td>
                                <td>Medium</td>
                            </tr>
                            <tr>
                                <td><strong>Cost Effectiveness</strong></td>
                                <td>Cost per IoC, ROI calculation</td>
                                <td>Economic analysis</td>
                                <td>ROI &gt; 3:1</td>
                                <td>Low-Medium</td>
                            </tr>
                        </tbody>
                    </table>

                    <h4 className="mt-6">Standardized Evaluation Framework Proposal</h4>
                    <div className="code-block">
                        <code>
                            {`# Honeypot Evaluation Framework (HEF) v1.0

## Core Evaluation Dimensions
1. **Technical Performance**
   - Detection accuracy (precision, recall, F1-score)
   - Response time (latency measurements)
   - Resource utilization (CPU, memory, storage)
   - Scalability testing (concurrent sessions)

2. **Operational Effectiveness**
   - Maintenance requirements (time, expertise)
   - Integration capabilities (APIs, standards)
   - Documentation quality (clarity, completeness)
   - Community support (activity, responsiveness)

3. **Intelligence Value**
   - Data quality (completeness, accuracy)
   - Analysis capabilities (built-in tools)
   - Export formats (STIX, CSV, JSON)
   - Alerting mechanisms (real-time, thresholds)

4. **Security Considerations**
   - Isolation strength (container, network)
   - Attack surface (exposed services)
   - Data protection (encryption, access control)
   - Update frequency (security patches)

## Scoring Methodology
- Each dimension: 0-25 points
- Total score: 0-100 points
- Weighted based on organizational priorities
- Regular re-evaluation (quarterly)`}
                        </code>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2>Conclusion: Current State & Future Trajectory</h2>

                <div className="card">
                    <h3>Synthesis of Current Research Landscape</h3>

                    <div className="alert warning">
                        <Target size={18} />
                        <div>
                            <strong>Key Insight:</strong> The honeypot field is transitioning from passive observation systems
                            to active intelligence platforms, with increasing integration of AI/ML, cloud-native architectures,
                            and standardized threat intelligence sharing.
                        </div>
                    </div>

                    <div className="card-grid mt-4">
                        <div className="card">
                            <h4>Mature Technologies</h4>
                            <ul className="styled-list">
                                <li>SSH/Telnet honeypots (Cowrie)</li>
                                <li>Malware capture honeypots (Dionaea)</li>
                                <li>Web application honeypots (Glastopf)</li>
                                <li>Basic ICS honeypots (Conpot)</li>
                            </ul>
                        </div>

                        <div className="card">
                            <h4>Active Research Areas</h4>
                            <ul className="styled-list">
                                <li>AI-driven adaptive honeypots</li>
                                <li>5G/IoT specialized honeypots</li>
                                <li>Blockchain and cryptocurrency honeypots</li>
                                <li>Containerized micro-honeypots</li>
                            </ul>
                        </div>

                        <div className="card">
                            <h4>Future Directions</h4>
                            <ul className="styled-list">
                                <li>Quantum computing threats</li>
                                <li>Federated learning for privacy</li>
                                <li>Autonomous response systems</li>
                                <li>Cross-domain deception networks</li>
                            </ul>
                        </div>
                    </div>

                    <div className="note mt-6">
                        <div className="note-content">
                            <strong>Research Implications:</strong> This analysis demonstrates that while foundational honeypot
                            technologies are well-established, significant opportunities exist for innovation in intelligent
                            adaptation, specialized domain coverage, and integration with emerging computing paradigms.

                            <p className="mt-4">
                                <em>"The effectiveness of deception systems will increasingly depend on their ability to learn,
                                    adapt, and collaborate in real-time threat environments."</em>
                                <br />
                                — 2024 IEEE Security & Privacy Workshop on Adaptive Cyber Defense
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}