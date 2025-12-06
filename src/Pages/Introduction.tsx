import { Target, Shield, Database, Eye, AlertTriangle, BookOpen, BarChart3, Cpu, Zap, Users, Globe, Lock } from 'lucide-react';

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

      <section className="section">
        <h2><Zap size={20} /> Research Objectives & Hypotheses</h2>

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

          <div className="alert warning">
            <AlertTriangle size={18} />
            <div>
              <strong>Scientific Rigor:</strong> This research follows a systematic empirical methodology with
              controlled variables, reproducible procedures, and statistical validation at each phase.
            </div>
          </div>

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
        <h2><Users size={20} /> Ethical Framework & Compliance</h2>

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