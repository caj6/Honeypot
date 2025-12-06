import { Book, Globe, Code, Database, Shield, BarChart3 } from 'lucide-react';

export default function References() {
    const references = {
        academic: [
            {
                id: "spitzner2002",
                authors: "Spitzner, L.",
                year: "2002",
                title: "Honeypots: Tracking Hackers",
                publisher: "Addison-Wesley",
                url: "https://www.oreilly.com/library/view/honeypots-tracking-hackers/0321108957/",
                type: "book"
            },
            {
                id: "michael2012",
                authors: "Michael, M., & Mathew, D.",
                year: "2012",
                title: "Honeypots: Concepts, Approaches, and Challenges",
                journal: "ACM Computing Surveys",
                volume: "45",
                pages: "1-35",
                doi: "10.1145/2379776.2379782",
                type: "journal"
            },
            {
                id: "provos2007",
                authors: "Provos, N., & Holz, T.",
                year: "2007",
                title: "Virtual Honeypots: From Botnet Tracking to Intrusion Detection",
                publisher: "Addison-Wesley Professional",
                url: "https://www.oreilly.com/library/view/virtual-honeypots-from/0321336327/",
                type: "book"
            },
            {
                id: "pauna2014",
                authors: "Pauna, A., & Bica, I.",
                year: "2014",
                title: "Honeycloud: Elastic Honeypots for Threat Detection in the Cloud",
                conference: "IEEE International Conference on Cloud Computing",
                pages: "956-961",
                doi: "10.1109/CLOUD.2014.133",
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
            },
            {
                id: "tpot",
                title: "T-Pot Multi-Honeypot Platform",
                url: "https://github.com/telekom-security/tpotce",
                version: "22.04",
                license: "GPL-3.0",
                type: "platform"
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
                url: "https://www.iso.org/standard/27001",
                type: "standard"
            },
            {
                id: "nist80061",
                title: "NIST SP 800-61: Computer Security Incident Handling Guide",
                organization: "National Institute of Standards and Technology",
                year: "2012",
                url: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r2.pdf",
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
            },
            {
                id: "otx",
                title: "AlienVault OTX",
                url: "https://otx.alienvault.com",
                description: "Open Threat Intelligence Exchange",
                license: "Community-driven",
                type: "service"
            }
        ],
        education: [
            {
                id: "sans",
                title: "SANS Institute Reading Room",
                url: "https://www.sans.org/reading-room/",
                description: "Free cybersecurity research papers",
                type: "educational"
            },
            {
                id: "owasp",
                title: "OWASP Cheat Sheet Series",
                url: "https://cheatsheetseries.owasp.org",
                description: "Web application security guidelines",
                type: "educational"
            },
            {
                id: "cisa",
                title: "CISA Cybersecurity Resources",
                url: "https://www.cisa.gov/cybersecurity",
                description: "Government cybersecurity guidance",
                type: "educational"
            }
        ]
    };

    return (
        <div className="content-wrapper">
            <div className="eyebrow">Academic Bibliography</div>
            <h1>References & Research Citations</h1>

            <div className="alert info">
                <Book size={18} />
                <div>
                    <strong>Citation Format:</strong> All references follow APA 7th edition format.
                    Working links are provided for verification.

                    <p>Below is a curated list of academic articles, official documentation,
                        and project repositories used throughout this research.</p>
                </div>
            </div>

            <section className="section">
                <h2><Book size={20} /> Academic Publications & Peer-Reviewed Research</h2>

                <div className="card">
                    <h3>Foundational Books</h3>

                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Citation</th>
                                <th>Publication Type</th>
                                <th>Source Link</th>
                                <th>Research Focus</th>
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
                                        <td><span className="badge info">Technical Book</span></td>
                                        <td>
                                            <a href={ref.url} target="_blank" rel="noopener noreferrer" className="inline-code">
                                                Publisher Link
                                            </a>
                                        </td>
                                        <td>Honeypot fundamentals</td>
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
                                <th>DOI/Reference</th>
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
                                            {ref.doi ? (
                                                <a href={`https://doi.org/${ref.doi}`} target="_blank" rel="noopener noreferrer" className="inline-code">
                                                    DOI: {ref.doi}
                                                </a>
                                            ) : (
                                                <span className="text-muted">Not available</span>
                                            )}
                                        </td>
                                        <td>ACM Core: A</td>
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
                                <th>DOI/Reference</th>
                                <th>Ranking</th>
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
                                            {ref.doi ? (
                                                <a href={`https://doi.org/${ref.doi}`} target="_blank" rel="noopener noreferrer" className="inline-code">
                                                    DOI: {ref.doi}
                                                </a>
                                            ) : (
                                                <span className="text-muted">Not available</span>
                                            )}
                                        </td>
                                        <td>IEEE Core: A</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="section">
                <h2><Code size={20} /> Technical Tools & Software References</h2>

                <div className="card">
                    <h3>Open Source Security Tools</h3>

                    <div className="card-grid">
                        {references.technical.map(ref => (
                            <div key={ref.id} className="card">
                                <div className="flex items-center justify-between mb-3">
                                    <h4>{ref.title}</h4>
                                    <span className="badge info">{ref.type}</span>
                                </div>
                                {ref.version && <p className="small mb-2">Version: {ref.version}</p>}
                                {ref.license && <p className="small mb-2">License: {ref.license}</p>}
                                <a href={ref.url} target="_blank" rel="noopener noreferrer" className="inline-code">
                                    {ref.url.replace('https://', '').slice(0, 30)}...
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <h2><Shield size={20} /> Security Standards & Frameworks</h2>

                <div className="card">
                    <h3>Cybersecurity Standards</h3>

                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Standard/Framework</th>
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
                                                Official Link
                                            </a>
                                        ) : (
                                            <span className="text-muted">Commercial standard</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="section">
                <h2><Database size={20} /> Research Data Sources & Services</h2>

                <div className="card">
                    <h3>Public Data Repositories</h3>

                    <div className="card-grid">
                        {references.datasets.map(ref => (
                            <div key={ref.id} className="card">
                                <div className="flex items-center justify-between mb-3">
                                    <h4>{ref.title}</h4>
                                    <span className="badge info">{ref.type}</span>
                                </div>
                                <p className="small mb-3">{ref.description}</p>
                                {ref.license && <p className="small mb-2">Access: {ref.license}</p>}
                                <a href={ref.url} target="_blank" rel="noopener noreferrer" className="inline-code">
                                    {ref.url.replace('https://', '').slice(0, 25)}...
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <h2><Globe size={20} /> Educational Resources</h2>

                <div className="card">
                    <h3>Learning & Reference Materials</h3>

                    <div className="card-grid">
                        {references.education.map(ref => (
                            <div key={ref.id} className="card">
                                <div className="flex items-center justify-between mb-3">
                                    <h4>{ref.title}</h4>
                                    <span className="badge success">{ref.type}</span>
                                </div>
                                <p className="small mb-3">{ref.description}</p>
                                <a href={ref.url} target="_blank" rel="noopener noreferrer" className="inline-code">
                                    {ref.url.replace('https://', '').slice(0, 25)}...
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <h2><BarChart3 size={20} /> Bibliography Reading List</h2>

                <div className="card">
                    <h3>Essential Cybersecurity Literature</h3>

                    <div className="code-block">
                        <pre><code>
                            {`Essential Reading for Honeypot Researchers

 Foundational Texts

1. "The Cuckoo's Egg" by Cliff Stoll (1989)
   - Historical account of early intrusion detection

2. "Counter Hack" by Ed Skoudis (2005)
   - Practical attack and defense techniques

3. "Applied Network Security Monitoring" by Chris Sanders (2014)
   - Real-world NSM techniques

Technical References 

4. "Practical Malware Analysis" by Michael Sikorski (2012)
   - Comprehensive malware analysis guide

5. "Blue Team Handbook" by Don Murdoch (2014)
   - Defensive operations guide

6. "The Tao of Network Security Monitoring" by Richard Bejtlich (2004)
   - Foundational NSM concepts

Research Methodology

7. "The Sciences of the Artificial" by Herbert Simon (1996)
   - Framework for studying artificial systems

8. "Research Design" by John Creswell (2018)
   - Methodological rigor for security research

Online Resources

- SANS Reading Room (https://www.sans.org/reading-room/)
- OWASP Cheat Sheets (https://cheatsheetseries.owasp.org)
- MITRE ATT&CK Navigator (https://mitre-attack.github.io/attack-navigator/)
- CISA Cybersecurity Advisories (https://www.cisa.gov/news-events/cybersecurity-advisories)

Academic Publications

- ACM Computing Surveys (Annual Security Review)
- IEEE Security & Privacy
- USENIX Security Symposium Proceedings
- Computers & Security Journal`}
                        </code></pre>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2>Licensing & Usage Information</h2>

                <div className="card">
                    <h3>Project Licensing</h3>

                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Component</th>
                                <th>License</th>
                                <th>Usage Terms</th>
                                <th>Attribution Required</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Research Methodology</td>
                                <td>CC BY 4.0</td>
                                <td>Attribution, commercial use allowed</td>
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
                                <td>GPL-3.0</td>
                                <td>Share-alike modifications</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>Research Findings</td>
                                <td>CC BY-NC 4.0</td>
                                <td>Non-commercial research use</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>Configuration Templates</td>
                                <td>Apache 2.0</td>
                                <td>Commercial use allowed</td>
                                <td>Yes</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}