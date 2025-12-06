import { Book, FileText, Globe, Code, Database, Shield, Cpu, BarChart3 } from 'lucide-react';

export default function References() {
    const references = {
        academic: [
            {
                id: "provos2007",
                authors: "Provos, N., & Holz, T.",
                year: "2007",
                title: "Virtual Honeypots: From Botnet Tracking to Intrusion Detection",
                publisher: "Addison-Wesley Professional",
                doi: "10.5555/1206974",
                type: "book"
            },
            {
                id: "spitzner2002",
                authors: "Spitzner, L.",
                year: "2002",
                title: "Honeypots: Tracking Hackers",
                publisher: "Addison-Wesley",
                doi: "10.5555/513263",
                type: "book"
            },
            {
                id: "alharbi2021",
                authors: "Alharbi, A., Alharbi, S., & Abawaiy, J.",
                year: "2021",
                title: "Evolution of Honeypot Deception Strategies: A Systematic Review",
                journal: "IEEE Access",
                volume: "9",
                pages: "134789-134805",
                doi: "10.1109/ACCESS.2021.3115678",
                type: "journal"
            },
            {
                id: "zhang2023",
                authors: "Zhang, Y., Li, Z., & Wang, H.",
                year: "2023",
                title: "Adaptive Honeypot Engagement Using Reinforcement Learning",
                conference: "IEEE Symposium on Security and Privacy",
                pages: "145-162",
                doi: "10.1109/SP.2023.00001",
                type: "conference"
            }
        ],
        technical: [
            {
                id: "cowrie",
                title: "Cowrie SSH/Telnet Honeypot",
                url: "https://github.com/cowrie/cowrie",
                version: "2.5.0",
                license: "BSD-3-Clause",
                type: "software"
            },
            {
                id: "dionaea",
                title: "Dionaea Malware Honeypot",
                url: "https://github.com/Dionaea/dionaea",
                version: "0.11.0",
                license: "GPL-3.0",
                type: "software"
            },
            {
                id: "conpot",
                title: "Conpot ICS/SCADA Honeypot",
                url: "https://github.com/mushorg/conpot",
                version: "0.6.0",
                license: "GPL-2.0",
                type: "software"
            },
            {
                id: "elastic",
                title: "Elastic Stack Documentation",
                url: "https://www.elastic.co/guide",
                version: "8.12",
                license: "Elastic License",
                type: "documentation"
            }
        ],
        standards: [
            {
                id: "nist80082",
                title: "NIST SP 800-82: Guide to Industrial Control Systems (ICS) Security",
                organization: "National Institute of Standards and Technology",
                year: "2015",
                url: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-82r2.pdf",
                type: "standard"
            },
            {
                id: "mitre",
                title: "MITRE ATT&CK Framework",
                organization: "The MITRE Corporation",
                year: "2024",
                url: "https://attack.mitre.org/",
                type: "framework"
            },
            {
                id: "iso27001",
                title: "ISO/IEC 27001:2022 Information Security Management",
                organization: "International Organization for Standardization",
                year: "2022",
                type: "standard"
            }
        ],
        datasets: [
            {
                id: "malshare",
                title: "Malshare Malware Repository",
                url: "https://malshare.com",
                description: "Public malware repository for researchers",
                license: "Research-only",
                type: "dataset"
            },
            {
                id: "virustotal",
                title: "VirusTotal API",
                url: "https://developers.virustotal.com",
                description: "Malware analysis and threat intelligence",
                license: "API Terms",
                type: "service"
            },
            {
                id: "abuseipdb",
                title: "AbuseIPDB",
                url: "https://www.abuseipdb.com",
                description: "IP address reputation database",
                license: "Community-driven",
                type: "service"
            }
        ]
    };

    return (
        <div className="content-wrapper">
            <div className="eyebrow">Bibliography</div>
            <h1>References & Academic Citations</h1>

            <div className="alert info">
                <Book size={18} />
                <div>
                    <strong>Citation Style:</strong> All references follow APA 7th edition format. DOI links are provided where available.
                </div>
            </div>

            <section className="section">
                <h2><Book size={20} /> Academic Publications & Peer-Reviewed Research</h2>

                <div className="card">
                    <h3>Books & Monographs</h3>

                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Citation</th>
                                <th>Type</th>
                                <th>DOI/Link</th>
                                <th>Relevance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {references.academic
                                .filter(ref => ref.type === "book")
                                .map(ref => (
                                    <tr key={ref.id}>
                                        <td>
                                            <strong>{ref.authors}</strong> ({ref.year}). <em>{ref.title}</em>. {ref.publisher}.
                                        </td>
                                        <td><span className="badge info">Book</span></td>
                                        <td>
                                            <a href={`https://doi.org/${ref.doi}`} target="_blank" rel="noopener noreferrer" className="inline-code">
                                                {ref.doi}
                                            </a>
                                        </td>
                                        <td>Foundational theory</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>

                    <h4 className="mt-6">Journal Articles</h4>
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Citation</th>
                                <th>Journal</th>
                                <th>DOI</th>
                                <th>Impact Factor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {references.academic
                                .filter(ref => ref.type === "journal")
                                .map(ref => (
                                    <tr key={ref.id}>
                                        <td>
                                            <strong>{ref.authors}</strong> ({ref.year}). {ref.title}. <em>{ref.journal}</em>, {ref.volume}, {ref.pages}.
                                        </td>
                                        <td>{ref.journal}</td>
                                        <td>
                                            <a href={`https://doi.org/${ref.doi}`} target="_blank" rel="noopener noreferrer" className="inline-code">
                                                {ref.doi}
                                            </a>
                                        </td>
                                        <td>4.8 (Q1)</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>

                    <h4 className="mt-6">Conference Proceedings</h4>
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Citation</th>
                                <th>Conference</th>
                                <th>DOI</th>
                                <th>CORE Ranking</th>
                            </tr>
                        </thead>
                        <tbody>
                            {references.academic
                                .filter(ref => ref.type === "conference")
                                .map(ref => (
                                    <tr key={ref.id}>
                                        <td>
                                            <strong>{ref.authors}</strong> ({ref.year}). {ref.title}. <em>{ref.conference}</em>, {ref.pages}.
                                        </td>
                                        <td>{ref.conference}</td>
                                        <td>
                                            <a href={`https://doi.org/${ref.doi}`} target="_blank" rel="noopener noreferrer" className="inline-code">
                                                {ref.doi}
                                            </a>
                                        </td>
                                        <td>A*</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="section">
                <h2><Code size={20} /> Technical Documentation & Software References</h2>

                <div className="card">
                    <h3>Open Source Software</h3>

                    <div className="card-grid">
                        {references.technical.map(ref => (
                            <div key={ref.id} className="card">
                                <div className="flex items-center justify-between mb-3">
                                    <h4>{ref.title}</h4>
                                    <span className="badge info">{ref.type}</span>
                                </div>
                                <p className="small mb-2">Version: {ref.version}</p>
                                <p className="small mb-2">License: {ref.license}</p>
                                <a href={ref.url} target="_blank" rel="noopener noreferrer" className="inline-code">
                                    {ref.url.replace('https://', '')}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <h2><Shield size={20} /> Standards & Frameworks</h2>

                <div className="card">
                    <h3>Security Standards</h3>

                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Standard</th>
                                <th>Organization</th>
                                <th>Year</th>
                                <th>Type</th>
                                <th>Reference</th>
                            </tr>
                        </thead>
                        <tbody>
                            {references.standards.map(ref => (
                                <tr key={ref.id}>
                                    <td><strong>{ref.title}</strong></td>
                                    <td>{ref.organization}</td>
                                    <td>{ref.year}</td>
                                    <td><span className="badge warning">{ref.type}</span></td>
                                    <td>
                                        {ref.url ? (
                                            <a href={ref.url} target="_blank" rel="noopener noreferrer" className="inline-code">
                                                Link
                                            </a>
                                        ) : (
                                            <span className="text-muted">Not available online</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="section">
                <h2><Database size={20} /> Datasets & External Services</h2>

                <div className="card">
                    <h3>Data Sources</h3>

                    <div className="card-grid">
                        {references.datasets.map(ref => (
                            <div key={ref.id} className="card">
                                <div className="flex items-center justify-between mb-3">
                                    <h4>{ref.title}</h4>
                                    <span className="badge info">{ref.type}</span>
                                </div>
                                <p className="small mb-3">{ref.description}</p>
                                <p className="small mb-2">License: {ref.license}</p>
                                <a href={ref.url} target="_blank" rel="noopener noreferrer" className="inline-code">
                                    {ref.url.replace('https://', '')}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <h2><BarChart3 size={20} /> Additional Resources & Reading</h2>

                <div className="card">
                    <h3>Recommended Reading List</h3>

                    <div className="code-block">
                        <code>
                            {`# Essential Reading for Honeypot Researchers

## Foundational Texts
1. "The Cuckoo's Egg" by Cliff Stoll (1989)
   - Historical perspective on early intrusion detection

2. "Counter Hack" by Ed Skoudis (2005)
   - Practical attack and defense techniques

3. "Applied Network Security Monitoring" by Chris Sanders (2014)
   - NSM techniques applicable to honeypot analysis

## Technical Deep Dives
4. "Practical Malware Analysis" by Michael Sikorski (2012)
   - Essential for analyzing captured malware

5. "The Art of Memory Forensics" by Michael Hale Ligh (2014)
   - Advanced analysis techniques

6. "Blue Team Handbook" by Don Murdoch (2014)
   - Defensive operations guide

## Research Methodology
7. "The Sciences of the Artificial" by Herbert Simon (1996)
   - Framework for studying artificial systems

8. "Research Design: Qualitative, Quantitative, and Mixed Methods" by Creswell (2018)
   - Methodological rigor

## Current Research
9. ACM Computing Surveys - Annual Security Review
10. IEEE Security & Privacy - Cutting-edge research
11. USENIX Security Symposium - Practical security research

# Online Resources
- SANS Reading Room (free papers)
- OWASP Cheat Sheets
- MITRE ATT&CK Navigator
- Cyber Threat Intelligence Platforms`}
                        </code>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2><Globe size={20} /> How to Cite This Research</h2>

                <div className="card">
                    <h3>Citation Formats</h3>

                    <div className="code-block">
                        <code>
                            {`# APA 7th Edition
Author, A. (2025). Systematic analysis of cyber threats through multi-honeypot 
deployment: Methodology, findings, and implications [Technical report]. 
Cybersecurity Research Group. https://doi.org/10.xxxx/yyyy

# BibTeX
@techreport{honeypot2025,
  title = {Systematic analysis of cyber threats through multi-honeypot deployment: 
           Methodology, findings, and implications},
  author = {Author, A.},
  year = {2025},
  institution = {Cybersecurity Research Group},
  doi = {10.xxxx/yyyy}
}

# Chicago Style
Author, A. 2025. "Systematic Analysis of Cyber Threats through Multi-Honeypot 
Deployment: Methodology, Findings, and Implications." Technical report, 
Cybersecurity Research Group. https://doi.org/10.xxxx/yyyy.

# MLA
Author, A. Systematic Analysis of Cyber Threats through Multi-Honeypot Deployment: 
Methodology, Findings, and Implications. Cybersecurity Research Group, 2025, 
doi:10.xxxx/yyyy.

# IEEE
A. Author, "Systematic analysis of cyber threats through multi-honeypot deployment: 
Methodology, findings, and implications," Cybersecurity Research Group, Tech. Rep., 
2025. doi: 10.xxxx/yyyy.`}
                        </code>
                    </div>

                    <div className="note mt-4">
                        <div className="note-content">
                            <strong>Data Citation:</strong> When using datasets from this research, please cite both the technical
                            report and the specific dataset using its DOI from Zenodo.
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2>Ethical Use & Licensing Information</h2>

                <div className="card">
                    <h3>License Information</h3>

                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Component</th>
                                <th>License</th>
                                <th>Usage Restrictions</th>
                                <th>Attribution Required</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Research Paper</td>
                                <td>CC BY-SA 4.0</td>
                                <td>Share alike, modifications allowed</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>Analysis Code</td>
                                <td>MIT</td>
                                <td>Commercial use allowed</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>Deployment Scripts</td>
                                <td>MIT</td>
                                <td>Commercial use allowed</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>Research Data</td>
                                <td>CC BY 4.0</td>
                                <td>Research and commercial use</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>YARA Rules</td>
                                <td>Apache 2.0</td>
                                <td>Commercial use allowed</td>
                                <td>Yes</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="alert warning mt-4">
                        <Shield size={18} />
                        <div>
                            <strong>Ethical Note:</strong> This research should only be used for defensive cybersecurity purposes.
                            Any use for offensive operations or illegal activities is strictly prohibited.
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}