import { Target, Shield, Database, Eye, AlertTriangle, BookOpen, BarChart3, Cpu, Zap, Users, Globe, Lock, Info, CheckCircle, XCircle } from 'lucide-react';

export default function Introduction() {
  return (
    <div className="content-wrapper">
      <div className="eyebrow">Research Foundation</div>
      <h1>Introduction: Systematic Honeypot Deployment for Cyber Threat Intelligence</h1>

      <div className="alert info">
        <BookOpen size={18} />
        <div>
          <strong>Research Premise:</strong> This study employs empirical methods to investigate contemporary
          cyber threats through controlled honeypot deployments, generating validated intelligence through
          systematic data collection and statistical analysis.
        </div>
      </div>

      <section className="section">
        <h2><Target size={20} /> Research Context & Problem Statement</h2>

        <div className="card">
          <h3>The Cybersecurity Challenge</h3>

          <div className="metric-grid">
            <div className="metric-card">
              <div className="metric-value">87%</div>
              <div className="metric-label">Organizations Experiencing Attacks</div>
              <p className="small">IBM Security Report, 2024</p>
            </div>
            <div className="metric-card">
              <div className="metric-value">287 days</div>
              <div className="metric-label">Average Time to Identify Breach</div>
              <p className="small">Mandiant M-Trends, 2024</p>
            </div>
            <div className="metric-card">
              <div className="metric-value">$4.45M</div>
              <div className="metric-label">Average Data Breach Cost</div>
              <p className="small">IBM Cost of Data Breach, 2023</p>
            </div>
          </div>

          <p>
            Modern cybersecurity faces an asymmetric challenge: defenders must protect against an ever-expanding
            attack surface while attackers need only find a single vulnerability. According to the 2024 Verizon
            Data Breach Investigations Report, 74% of breaches involve external actors, with credential theft
            and vulnerability exploitation as primary attack vectors.
          </p>

          <div className="note mt-4">
            <div className="note-content">
              <strong>Research Gap:</strong> While traditional security mechanisms focus on prevention and detection,
              there remains a critical need for proactive intelligence gathering that provides insight into attacker
              methodologies before they impact production systems.
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Honeypot Fundamentals */}
      <section className="section">
        <h2><Info size={20} /> Honeypot Fundamentals: Definition, Types & Applications</h2>

        <div className="card">
          <h3>What are Honeypots?</h3>

          <div className="alert info">
            <Shield size={18} />
            <div>
              <strong>Definition:</strong> Honeypots are cybersecurity mechanisms designed to attract, detect,
              and analyze unauthorized access attempts or malicious activities by emulating vulnerable systems,
              services, or data.
            </div>
          </div>

          <p>
            First conceptualized in the early 1990s, honeypots operate on the principle of controlled deception.
            Unlike traditional security systems that aim to block attacks, honeypots intentionally expose seemingly
            vulnerable targets to observe attacker behavior in a safe, monitored environment.
          </p>

          <h4 className="mt-6">Core Characteristics of Honeypots</h4>
          <div className="card-grid">
            <div className="card">
              <div className="flex items-center gap-2 mb-3">
                <Target size={16} />
                <h5>Controlled Environment</h5>
              </div>
              <p className="small">
                Complete isolation from production systems ensures no real assets are compromised during attack observation.
              </p>
            </div>

            <div className="card">
              <div className="flex items-center gap-2 mb-3">
                <Eye size={16} />
                <h5>Monitoring Focus</h5>
              </div>
              <p className="small">
                All interaction attempts are considered suspicious, eliminating false positives common in traditional IDS.
              </p>
            </div>

            <div className="card">
              <div className="flex items-center gap-2 mb-3">
                <Database size={16} />
                <h5>Data Collection</h5>
              </div>
              <p className="small">
                Comprehensive logging of attacker techniques, tools, and procedures (TTPs) for intelligence analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2><Cpu size={20} /> Honeypot Classification by Interaction Level</h2>

        <div className="card">
          <h3>Interaction Level Spectrum</h3>

          <table className="data-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Complexity</th>
                <th>Risk Level</th>
                <th>Data Quality</th>
                <th>Maintenance</th>
                <th>Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Low-Interaction</strong></td>
                <td>Simple emulation of services</td>
                <td><span className="badge success">Low</span></td>
                <td>Basic (IPs, ports, scan patterns)</td>
                <td>Minimal</td>
                <td>Honeyd, KFSensor</td>
              </tr>
              <tr>
                <td><strong>Medium-Interaction</strong></td>
                <td>Partial OS/service simulation</td>
                <td><span className="badge warning">Medium</span></td>
                <td>Moderate (commands, files)</td>
                <td>Moderate</td>
                <td>Cowrie, Dionaea</td>
              </tr>
              <tr>
                <td><strong>High-Interaction</strong></td>
                <td>Real OS with applications</td>
                <td><span className="badge danger">High</span></td>
                <td>High (full attacker interaction)</td>
                <td>High</td>
                <td>Honeynets, Sebek</td>
              </tr>
            </tbody>
          </table>

          <h4 className="mt-6">Detailed Characteristics</h4>
          <div className="card-grid">
            <div className="card">
              <h5>Low-Interaction Honeypots</h5>
              <ul className="styled-list">
                <li>Emulate only specific services/protocols</li>
                <li>Limited attacker engagement capability</li>
                <li>Ideal for detecting scans and automated attacks</li>
                <li>Minimal resource requirements</li>
                <li>Easy to deploy and maintain</li>
              </ul>
              <div className="badge info mt-2">Best for: Initial detection</div>
            </div>

            <div className="card">
              <h5>Medium-Interaction Honeypots</h5>
              <ul className="styled-list">
                <li>Simulate partial operating system functionality</li>
                <li>Allow some attacker interaction and command execution</li>
                <li>Capture malware and basic attacker techniques</li>
                <li>Balance between risk and intelligence value</li>
                <li>Moderate deployment complexity</li>
              </ul>
              <div className="badge warning mt-2">Best for: Malware collection</div>
            </div>

            <div className="card">
              <h5>High-Interaction Honeypots</h5>
              <ul className="styled-list">
                <li>Real operating systems and applications</li>
                <li>Complete attacker freedom within controlled environment</li>
                <li>Capture sophisticated attack chains and TTPs</li>
                <li>High risk of compromise and escape</li>
                <li>Requires expert management</li>
              </ul>
              <div className="badge danger mt-2">Best for: Advanced threat research</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2><Globe size={20} /> Practical Applications & Use Cases</h2>

        <div className="card">
          <h3>Primary Applications of Honeypots</h3>

          <div className="card-grid">
            <div className="card">
              <div className="flex items-center gap-2 mb-3">
                <Shield size={16} />
                <h5>Threat Detection</h5>
              </div>
              <p className="small">
                Early warning system for attacks targeting specific services or vulnerabilities.
                Provides alerting before production systems are compromised.
              </p>
              <div className="badge success mt-2">Detection</div>
            </div>

            <div className="card">
              <div className="flex items-center gap-2 mb-3">
                <Database size={16} />
                <h5>Threat Intelligence</h5>
              </div>
              <p className="small">
                Collection of Indicators of Compromise (IoCs), attack patterns, and TTPs for
                enhancing security posture and threat hunting.
              </p>
              <div className="badge info mt-2">Intelligence</div>
            </div>

            <div className="card">
              <div className="flex items-center gap-2 mb-3">
                <Cpu size={16} />
                <h5>Malware Analysis</h5>
              </div>
              <p className="small">
                Capture and analysis of malicious software in isolated environments.
                Enables study of propagation methods and payload behavior.
              </p>
              <div className="badge warning mt-2">Analysis</div>
            </div>

            <div className="card">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen size={16} />
                <h5>Research & Education</h5>
              </div>
              <p className="small">
                Study of attacker behavior and development of defensive techniques.
                Training platform for security professionals.
              </p>
              <div className="badge info mt-2">Education</div>
            </div>
          </div>

          <h4 className="mt-6">Specific Use Cases in Organizational Security</h4>
          <div className="code-block">
            <code>
              {`# Enterprise Security Applications

## 1. Network Deception
- Place honeypots in DMZ to detect external reconnaissance
- Deploy in internal network to identify lateral movement
- Use as canary systems for critical assets

## 2. Vulnerability Assessment
- Test detection capabilities against known attack patterns
- Validate security tool effectiveness
- Measure time-to-detection for different attack types

## 3. Incident Response
- Gather intelligence during active incidents
- Distract attackers from real assets
- Study attacker behavior for containment strategies

## 4. Compliance & Auditing
- Demonstrate security monitoring capabilities
- Provide evidence of threat detection processes
- Meet regulatory requirements for security testing

## 5. Security Training
- Realistic attack scenarios for SOC teams
- Hands-on experience with attack tools and techniques
- Development of defensive playbooks`}
            </code>
          </div>
        </div>
      </section>

      <section className="section">
        <h2><AlertTriangle size={20} /> Advantages & Disadvantages</h2>

        <div className="card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Advantages Column */}
            <div>
              <h3 className="flex items-center gap-2 text-success">
                <CheckCircle size={20} />
                Advantages
              </h3>

              <div className="space-y-4 mt-4">
                <div className="advantage-item">
                  <h5>Low False Positives</h5>
                  <p className="small">
                    Since honeypots have no legitimate users, all activity is suspicious by definition.
                  </p>
                </div>

                <div className="advantage-item">
                  <h5>Reduced Data Volume</h5>
                  <p className="small">
                    Only malicious activity is captured, unlike network traffic which is mostly legitimate.
                  </p>
                </div>

                <div className="advantage-item">
                  <h5>Attack Intelligence</h5>
                  <p className="small">
                    Provides detailed information about attacker tools, techniques, and procedures.
                  </p>
                </div>

                <div className="advantage-item">
                  <h5>Resource Efficiency</h5>
                  <p className="small">
                    Can protect large networks with minimal hardware and software investment.
                  </p>
                </div>

                <div className="advantage-item">
                  <h5>Legal Simplicity</h5>
                  <p className="small">
                    Attackers have no expectation of privacy when accessing unauthorized systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Disadvantages Column */}
            <div>
              <h3 className="flex items-center gap-2 text-danger">
                <XCircle size={20} />
                Disadvantages
              </h3>

              <div className="space-y-4 mt-4">
                <div className="disadvantage-item">
                  <h5>Limited Visibility</h5>
                  <p className="small">
                    Only attacks targeting the honeypot are detected; blind to other attack vectors.
                  </p>
                </div>

                <div className="disadvantage-item">
                  <h5>Fingerprinting Risk</h5>
                  <p className="small">
                    Sophisticated attackers can identify and avoid honeypots through behavioral analysis.
                  </p>
                </div>

                <div className="disadvantage-item">
                  <h5>Resource Investment</h5>
                  <p className="small">
                    Requires dedicated systems, maintenance, and security expertise to operate effectively.
                  </p>
                </div>

                <div className="disadvantage-item">
                  <h5>Legal Considerations</h5>
                  <p className="small">
                    Entrapment concerns and data privacy regulations must be carefully managed.
                  </p>
                </div>

                <div className="disadvantage-item">
                  <h5>Risk of Compromise</h5>
                  <p className="small">
                    High-interaction honeypots risk being used as attack platforms if not properly isolated.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h4 className="mt-6">Risk Management Considerations</h4>
          <div className="note">
            <div className="note-content">
              <strong>Critical Security Controls:</strong>
              <ul className="styled-list">
                <li><strong>Network Isolation:</strong> Honeypots must be completely isolated from production networks</li>
                <li><strong>Data Protection:</strong> Collected attack data must be encrypted and access-controlled</li>
                <li><strong>Legal Compliance:</strong> Operation must comply with local laws and regulations</li>
                <li><strong>Monitoring:</strong> Honeypots themselves must be continuously monitored for compromise</li>
                <li><strong>Response Planning:</strong> Procedures for handling detected attacks must be established</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2><Zap size={20} /> Historical Evolution & Key Milestones</h2>

        <div className="card">
          <h3>Development Timeline of Honeypot Technology</h3>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">1990-1991</div>
              <div className="timeline-content">
                <h5>Conceptual Beginnings</h5>
                <p>Cliff Stoll's "The Cuckoo's Egg" demonstrates value of monitoring unauthorized access</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">1997</div>
              <div className="timeline-content">
                <h5>First Implementation</h5>
                <p>Deception Toolkit released - the first publicly available honeypot</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">1999</div>
              <div className="timeline-content">
                <h5>Automated Deployment</h5>
                <p>Honeyd released, allowing automated creation of virtual honeypots</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2004</div>
              <div className="timeline-content">
                <h5>Malware Focus</h5>
                <p>Nepenthes released, specializing in automated malware collection</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2009</div>
              <div className="timeline-content">
                <h5>Modern Platforms</h5>
                <p>Dionaea released with multi-protocol support for malware capture</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2012</div>
              <div className="timeline-content">
                <h5>SSH Specialization</h5>
                <p>Cowrie released as SSH/Telnet honeypot successor to Kippo</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2013</div>
              <div className="timeline-content">
                <h5>ICS Security</h5>
                <p>Conpot released for Industrial Control System honeypot deployments</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2015-Present</div>
              <div className="timeline-content">
                <h5>Integration & Automation</h5>
                <p>T-Pot, Modern Honey Network, and containerized deployments emerge</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2><Shield size={20} /> Theoretical Foundation & Conceptual Framework</h2>

        <div className="card">
          <h3>Honeypots as Intelligence Gathering Systems</h3>

          <div className="card-grid">
            <div className="card">
              <div className="flex items-center gap-3 mb-3">
                <Eye size={18} />
                <h4>Deception Theory</h4>
              </div>
              <p className="small">
                Based on military deception principles (Barton Whaley), honeypots create controlled
                environments that appear vulnerable to attract attackers while protecting real assets.
              </p>
              <div className="badge info">Strategic</div>
            </div>

            <div className="card">
              <div className="flex items-center gap-3 mb-3">
                <Database size={18} />
                <h4>Threat Intelligence Cycle</h4>
              </div>
              <p className="small">
                Following the intelligence cycle (Direction → Collection → Processing → Analysis →
                Dissemination), honeypots provide raw data for threat intelligence production.
              </p>
              <div className="badge info">Process</div>
            </div>

            <div className="card">
              <div className="flex items-center gap-3 mb-3">
                <Cpu size={18} />
                <h4>Attack Surface Management</h4>
              </div>
              <p className="small">
                By creating controlled attack surfaces, honeypots enable observation of attack patterns
                without exposing critical infrastructure, supporting proactive defense strategies.
              </p>
              <div className="badge info">Defensive</div>
            </div>
          </div>

          <h4 className="mt-6">Theoretical Framework: Intelligence-Driven Security</h4>
          <div className="code-block">
            <code>
              {`# Conceptual Model: Intelligence-Driven Security Framework

INPUTS → PROCESS → OUTPUTS → IMPACT
↓        ↓         ↓         ↓
┌─────────────────────────────────────────┐
│         THREAT INTELLIGENCE CYCLE       │
├─────────────────────────────────────────┤
│ 1. Direction: Define intelligence needs │
│ 2. Collection: Gather raw data          │
│ 3. Processing: Organize and enrich      │
│ 4. Analysis: Extract insights           │
│ 5. Dissemination: Share findings        │
│ 6. Feedback: Refine collection          │
└─────────────────────────────────────────┘

## Honeypot Role in This Framework
- **Collection Phase:** Primary data source
- **Processing Phase:** Log aggregation and enrichment
- **Analysis Phase:** Pattern recognition and TTP extraction
- **Dissemination:** Automated IoC sharing

## Scientific Basis
- Empirical data collection (observational studies)
- Statistical analysis (hypothesis testing)
- Reproducible methodology (open science)
- Ethical research practices (IRB compliance)`}
            </code>
          </div>
        </div>
      </section>

      {/* Rest of the existing sections remain the same */}
      <section className="section">
        <h2><Users size={20} /> Research Objectives & Hypotheses</h2>

        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3>Primary Research Objectives</h3>
            <span className="badge success">Systematic Approach</span>
          </div>

          <table className="data-table">
            <thead>
              <tr>
                <th>Objective</th>
                <th>Description</th>
                <th>Success Criteria</th>
                <th>Measurement Method</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>O1: Infrastructure Deployment</strong></td>
                <td>Deploy multi-protocol honeypot architecture</td>
                <td>4+ honeypot types operational</td>
                <td>Automated health monitoring</td>
              </tr>
              <tr>
                <td><strong>O2: Data Collection</strong></td>
                <td>Capture comprehensive attack data</td>
                <td>1000+ unique attack events</td>
                <td>Event log analysis</td>
              </tr>
              <tr>
                <td><strong>O3: Malware Analysis</strong></td>
                <td>Collect and analyze malicious binaries</td>
                <td>100+ malware samples</td>
                <td>YARA rule matching</td>
              </tr>
              <tr>
                <td><strong>O4: Behavioral Analysis</strong></td>
                <td>Document attacker TTPs and patterns</td>
                <td>Complete MITRE ATT&CK mapping</td>
                <td>Manual and automated analysis</td>
              </tr>
              <tr>
                <td><strong>O5: Intelligence Production</strong></td>
                <td>Generate actionable threat intelligence</td>
                <td>50+ novel IoCs identified</td>
                <td>Threat intel validation</td>
              </tr>
            </tbody>
          </table>

          <h4 className="mt-6">Research Hypotheses</h4>
          <div className="card-grid">
            <div className="card">
              <h5>H1: Interaction Level Effectiveness</h5>
              <p className="small">
                <strong>Null Hypothesis (H₀):</strong> There is no difference in intelligence quality
                between low and medium-interaction honeypots.
              </p>
              <p className="small">
                <strong>Alternative Hypothesis (H₁):</strong> Medium-interaction honeypots capture
                more sophisticated attack patterns than low-interaction variants.
              </p>
              <div className="badge info mt-2">Test: Welch's t-test</div>
            </div>

            <div className="card">
              <h5>H2: Geographic Attack Patterns</h5>
              <p className="small">
                <strong>Null Hypothesis (H₀):</strong> Attack distribution is random across geographic regions.
              </p>
              <p className="small">
                <strong>Alternative Hypothesis (H₁):</strong> Attack patterns show significant clustering
                by geographic origin.
              </p>
              <div className="badge info mt-2">Test: Chi-square test</div>
            </div>

            <div className="card">
              <h5>H3: Automation Dominance</h5>
              <p className="small">
                <strong>Null Hypothesis (H₀):</strong> Manual and automated attacks occur at similar rates.
              </p>
              <p className="small">
                <strong>Alternative Hypothesis (H₁):</strong> Automated attacks constitute more than 85%
                of observed activity.
              </p>
              <div className="badge info mt-2">Test: Proportion test</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2><BarChart3 size={20} /> Methodological Framework</h2>

        <div className="card">
          <h3>Research Design & Approach</h3>
          <h4 className="mt-4">Research Methodology Overview</h4>
          <div className="code-block">
            <code>
              {`# Research Methodology: Systematic Empirical Study

## 1. EXPERIMENTAL DESIGN
Type: Controlled observational study
Duration: 45 days (March 1 - April 15, 2025)
Sample: All attack events captured during observation period
Control: Baseline network traffic measurement (pre-deployment)

## 2. DATA COLLECTION PROTOCOL
Sources:
  - Cowrie: SSH/Telnet sessions (2222/tcp)
  - Dionaea: Malware downloads (21, 80, 445/tcp)
  - Glastopf: Web attacks (80, 443/tcp)
  - Conpot: ICS probes (502, 102/tcp)

Collection Methods:
  - Real-time log aggregation (Filebeat → Elasticsearch)
  - Automated malware storage (SHA256 hashed)
  - Session recording (timestamped commands)
  - Network traffic capture (PCAP files)

## 3. DATA PROCESSING PIPELINE
Steps:
  1. Log normalization (standardized format)
  2. Enrichment (GeoIP, ASN, threat intel)
  3. Deduplication (unique event identification)
  4. Classification (attack type, severity)
  5. Storage (time-series database)

## 4. ANALYSIS METHODS
Statistical Analysis:
  - Descriptive statistics (mean, median, distribution)
  - Inferential statistics (hypothesis testing)
  - Time series analysis (temporal patterns)
  - Geographic analysis (spatial clustering)

Machine Learning:
  - Behavioral clustering (K-means, DBSCAN)
  - Anomaly detection (Isolation Forest)
  - Pattern recognition (sequence analysis)
  - Classification (attack type prediction)

## 5. VALIDATION PROTOCOL
Internal Validation:
  - Cross-validation (train/test splits)
  - Bootstrap resampling (confidence intervals)
  - Sensitivity analysis (parameter testing)

External Validation:
  - Threat intelligence correlation (VirusTotal, OTX)
  - Peer review (expert evaluation)
  - Reproducibility assessment (independent verification)`}
            </code>
          </div>
        </div>
      </section>

      <section className="section">
        <h2><Lock size={20} /> Ethical Framework & Compliance</h2>

        <div className="card">
          <h3>Ethical Research Practices</h3>

          <div className="card-grid">
            <div className="card">
              <h4><Lock size={16} /> Privacy Protection</h4>
              <ul className="styled-list">
                <li>IP address anonymization (last octet removal)</li>
                <li>Data minimization (collect only necessary data)</li>
                <li>Encrypted storage (AES-256 at rest)</li>
                <li>Limited retention (30 days for raw data)</li>
              </ul>
            </div>

            <div className="card">
              <h4><Globe size={16} /> Legal Compliance</h4>
              <ul className="styled-list">
                <li>GDPR Article 89 (research exemption)</li>
                <li>Computer Fraud and Abuse Act §1030(f)</li>
                <li>Ethical hacking guidelines (EC-Council)</li>
                <li>Responsible disclosure policy</li>
              </ul>
            </div>

            <div className="card">
              <h4><Shield size={16} /> Research Ethics</h4>
              <ul className="styled-list">
                <li>IRB approval (protocol #2024-045)</li>
                <li>Informed operation (clear monitoring banners)</li>
                <li>No countermeasures (pure observation)</li>
                <li>Beneficence principle (community sharing)</li>
              </ul>
            </div>
          </div>

          <div className="alert success mt-4">
            <Lock size={18} />
            <div>
              <strong>Compliance Certification:</strong> This research protocol was reviewed and approved by
              the Institutional Review Board (IRB#2024-045) and complies with all relevant data protection
              regulations including GDPR Recital 49 for security research.
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2><Database size={20} /> Expected Contributions & Impact</h2>

        <div className="card">
          <h3>Research Significance</h3>

          <div className="card-grid">
            <div className="card">
              <h4>Academic Contributions</h4>
              <ul className="styled-list">
                <li>Validated attack pattern analysis methodology</li>
                <li>Novel behavioral clustering algorithms</li>
                <li>Open datasets for peer research validation</li>
                <li>Statistical framework for honeypot evaluation</li>
              </ul>
            </div>

            <div className="card">
              <h4>Practical Applications</h4>
              <ul className="styled-list">
                <li>Improved detection rules (YARA, Snort, Suricata)</li>
                <li>Enhanced threat intelligence feeds</li>
                <li>Security training materials (real attack data)</li>
                <li>Benchmarks for security product evaluation</li>
              </ul>
            </div>

            <div className="card">
              <h4>Community Benefits</h4>
              <ul className="styled-list">
                <li>Open-source deployment framework</li>
                <li>Public threat intelligence sharing</li>
                <li>Educational resources for cybersecurity</li>
                <li>Collaborative research opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Research Timeline & Resource Allocation</h2>

        <div className="card">
          <h3>Project Management & Timeline</h3>

          <table className="data-table">
            <thead>
              <tr>
                <th>Phase</th>
                <th>Duration</th>
                <th>Key Activities</th>
                <th>Deliverables</th>
                <th>Resource Requirements</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Preparation</strong></td>
                <td>2 weeks</td>
                <td>Literature review, methodology design</td>
                <td>Research protocol, IRB submission</td>
                <td>Academic databases, IRB fees</td>
              </tr>
              <tr>
                <td><strong>Infrastructure</strong></td>
                <td>1 week</td>
                <td>Environment setup, honeypot deployment</td>
                <td>Operational honeypot network</td>
                <td>Cloud resources, software licenses</td>
              </tr>
              <tr>
                <td><strong>Data Collection</strong></td>
                <td>45 days</td>
                <td>Continuous monitoring, log aggregation</td>
                <td>Raw dataset (2.1M+ events)</td>
                <td>Storage, bandwidth, compute</td>
              </tr>
              <tr>
                <td><strong>Analysis</strong></td>
                <td>3 weeks</td>
                <td>Statistical analysis, ML processing</td>
                <td>Analysis results, visualizations</td>
                <td>Analytical software, ML tools</td>
              </tr>
              <tr>
                <td><strong>Reporting</strong></td>
                <td>2 weeks</td>
                <td>Report writing, peer review</td>
                <td>Technical report, publications</td>
                <td>Writing tools, publication fees</td>
              </tr>
            </tbody>
          </table>

          <div className="note mt-4">
            <div className="note-content">
              <strong>Project Duration:</strong> Total 12 weeks (Spring 2025 semester)

              <p className="mt-2">
                <strong>Resource Allocation:</strong>
                <br />
                • Computational Resources: $1,200 (cloud services)
                <br />
                • Software Tools: $800 (analytical software licenses)
                <br />
                • Publication Costs: $400 (open access fees)
                <br />
                • Total Budget: $2,400
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Conclusion: Research Foundation & Expectations</h2>

        <div className="card">
          <h3>Synthesis of Introduction</h3>

          <div className="alert info">
            <Target size={18} />
            <div>
              <strong>Research Positioning:</strong> This study positions itself at the intersection of
              empirical cybersecurity research, threat intelligence methodology, and open science practices,
              contributing to both academic knowledge and practical defense capabilities.
            </div>
          </div>

          <p>
            By systematically deploying and analyzing multiple honeypot architectures, this research aims to
            provide validated insights into contemporary cyber threats while developing reproducible methodologies
            for threat intelligence generation. The findings will contribute to improved defensive strategies,
            enhanced detection capabilities, and a deeper understanding of attacker behavior in controlled
            environments.
          </p>

          <div className="note mt-4">
            <div className="note-content">
              <strong>Expected Outcomes:</strong>

              <ul className="styled-list">
                <li>Comprehensive dataset of attack patterns across multiple protocols</li>
                <li>Validated statistical findings on attack characteristics</li>
                <li>Open-source tools for honeypot deployment and analysis</li>
                <li>Actionable threat intelligence for community defense</li>
                <li>Academic publications documenting methodology and findings</li>
              </ul>

              <p className="mt-4">
                <em>"The best defense is a good understanding of the offense."</em>
                <br />
                — Adaptation of Sun Tzu's principles to cybersecurity research
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}