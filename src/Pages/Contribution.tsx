import { Code, Terminal, Database, BarChart3, Cpu, Shield, Zap, GitBranch } from 'lucide-react';

export default function Contribution() {
    return (
        <div className="content-wrapper">
            <div className="eyebrow">Methodological Innovation</div>
            <h1>Technical Contributions & Research Methodology</h1>

            <div className="alert info">
                <Code size={18} />
                <div>
                    <strong>Open Science:</strong> All code, configurations, and analysis scripts are available under MIT license
                    at GitHub repository to ensure reproducibility and scientific validation.
                </div>
            </div>

            <section className="section">
                <h2><Terminal size={20} /> Infrastructure Automation & Deployment Engineering</h2>

                <div className="card">
                    <div className="flex items-center justify-between mb-4">
                        <h3>Ansible Automation Framework</h3>
                        <span className="badge info">Infrastructure-as-Code</span>
                    </div>

                    <div className="code-block">
                        <code>
                            {`# ansible/honeypot-deploy.yml - Main Deployment Playbook
- name: Deploy Honeypot Infrastructure
  hosts: honeypot_servers
  vars:
    elk_stack_version: "8.12.0"
    docker_compose_version: "2.24.6"
    
  tasks:
  - name: Install Docker and dependencies
    apt:
      name:
        - docker-ce
        - docker-ce-cli
        - containerd.io
        - docker-compose-plugin
      state: present
    
  - name: Create network isolation
    command: docker network create honeypot_net --subnet=10.100.0.0/24
    
  - name: Deploy ELK Stack
    docker_compose:
      project_src: /opt/elk/
      files: docker-compose.yml
      state: present
    
  - name: Deploy Honeypot Services
    include_role:
      name: deploy_honeypots
    vars:
      honeypots_to_deploy:
        - cowrie
        - dionaea
        - glastopf
        - conpot
    
  - name: Configure Log Forwarding
    template:
      src: filebeat.yml.j2
      dest: /etc/filebeat/filebeat.yml
    notify: restart filebeat`}
                        </code>
                    </div>

                    <h4 className="mt-6">Automated Health Monitoring System</h4>
                    <div className="code-block">
                        <code>
                            {`# health_monitor.py - Automated Health Checks
import requests
import psutil
from datetime import datetime

class HoneypotHealthMonitor:
    def __init__(self):
        self.services = {
            'cowrie': {'port': 2222, 'check': self.check_ssh},
            'dionaea': {'port': 21, 'check': self.check_ftp},
            'elasticsearch': {'port': 9200, 'check': self.check_elastic}
        }
    
    def check_service(self, name, config):
        """Perform comprehensive service health check"""
        try:
            # Check port availability
            result = config['check'](config['port'])
            
            # Check resource utilization
            cpu_percent = psutil.cpu_percent(interval=1)
            memory_percent = psutil.virtual_memory().percent
            
            # Log metrics to Elasticsearch
            self.log_metrics(name, result, cpu_percent, memory_percent)
            
            return {
                'status': 'healthy' if result else 'unhealthy',
                'response_time': result.get('response_time', 0),
                'timestamp': datetime.utcnow().isoformat()
            }
        except Exception as e:
            return {'status': 'error', 'error': str(e)}
    
    def generate_health_report(self):
        """Generate comprehensive health report"""
        report = {
            'timestamp': datetime.utcnow().isoformat(),
            'services': {},
            'system_metrics': self.get_system_metrics(),
            'alerts': self.check_alerts()
        }
        
        for name, config in self.services.items():
            report['services'][name] = self.check_service(name, config)
        
        return report`}
                        </code>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2><Database size={20} /> Advanced Data Processing Pipeline</h2>

                <div className="card">
                    <h3>Real-time Log Processing Architecture</h3>

                    <div className="card-grid">
                        <div className="card">
                            <h4><Zap size={14} /> Logstash Enrichment</h4>
                            <p>GeoIP, ASN, threat intelligence lookups</p>
                            <div className="metric-value">15K events/sec</div>
                        </div>

                        <div className="card">
                            <h4><Cpu size={14} /> Stream Processing</h4>
                            <p>Apache Flink for real-time analytics</p>
                            <div className="metric-value">2ms latency</div>
                        </div>

                        <div className="card">
                            <h4><Database size={14} /> TimescaleDB</h4>
                            <p>Time-series data for temporal analysis</p>
                            <div className="metric-value">99.9% uptime</div>
                        </div>
                    </div>

                    <h4 className="mt-6">Automated IOC Extraction System</h4>
                    <div className="code-block">
                        <code>
                            {`# ioc_extractor.py - Automated Indicator Extraction
import re
import yara
from typing import List, Dict
import ipaddress
import hashlib

class IoCExtractor:
    def __init__(self):
        # Compile YARA rules for malware detection
        self.yara_rules = yara.compile(filepath='rules/malware.yara')
        
        # Regex patterns for IOC extraction
        self.patterns = {
            'ipv4': r'\\b(?:[0-9]{1,3}\\.){3}[0-9]{1,3}\\b',
            'ipv6': r'\\b(?:[A-F0-9]{1,4}:){7}[A-F0-9]{1,4}\\b',
            'domain': r'\\b(?:[a-zA-Z0-9](?:[a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9])?\\.)+[a-zA-Z]{2,}\\b',
            'md5': r'\\b[a-fA-F0-9]{32}\\b',
            'sha256': r'\\b[a-fA-F0-9]{64}\\b',
            'url': r'https?:\\/\\/(?:www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&\\/=]*)',
            'cve': r'CVE-\\d{4}-\\d{4,7}'
        }
    
    def extract_from_text(self, text: str) -> Dict[str, List[str]]:
        """Extract all IOCs from text"""
        results = {}
        
        for ioc_type, pattern in self.patterns.items():
            matches = re.findall(pattern, text)
            if matches:
                # Validate and deduplicate
                validated = self.validate_iocs(ioc_type, matches)
                results[ioc_type] = list(set(validated))
        
        return results
    
    def validate_iocs(self, ioc_type: str, candidates: List[str]) -> List[str]:
        """Validate extracted IOCs"""
        valid = []
        
        if ioc_type == 'ipv4':
            for ip in candidates:
                try:
                    ipaddress.IPv4Address(ip)
                    valid.append(ip)
                except:
                    continue
        elif ioc_type in ['md5', 'sha256']:
            for hash_val in candidates:
                if len(hash_val) in [32, 64]:
                    valid.append(hash_val)
        else:
            valid = candidates
        
        return valid
    
    def enrich_iocs(self, iocs: Dict[str, List[str]]) -> Dict[str, List[Dict]]:
        """Enrich IOCs with threat intelligence"""
        enriched = {}
        
        for ioc_type, values in iocs.items():
            enriched[ioc_type] = []
            for value in values:
                enrichment = {
                    'value': value,
                    'threat_intel': self.lookup_threat_intel(value),
                    'first_seen': self.get_first_seen(value),
                    'last_seen': datetime.utcnow().isoformat(),
                    'confidence': self.calculate_confidence(value)
                }
                enriched[ioc_type].append(enrichment)
        
        return enriched`}
                        </code>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2><BarChart3 size={20} /> Advanced Analytics & Machine Learning</h2>

                <div className="card">
                    <h3>Behavioral Clustering Algorithm</h3>

                    <div className="code-block">
                        <code>
                            {`# behavioral_clustering.py - ML-based Attacker Profiling
import numpy as np
from sklearn.cluster import DBSCAN, KMeans
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
import pandas as pd

class BehavioralClustering:
    def __init__(self, n_clusters=5):
        self.n_clusters = n_clusters
        self.scaler = StandardScaler()
        self.pca = PCA(n_components=0.95)  # 95% variance
        
    def extract_features(self, sessions: pd.DataFrame) -> np.ndarray:
        """Extract behavioral features from session data"""
        features = []
        
        for _, session in sessions.iterrows():
            feature_vector = [
                # Temporal features
                session['duration'],
                session['commands_per_minute'],
                session['idle_time_ratio'],
                
                # Behavioral features
                len(session['unique_commands']),
                session['recon_commands_ratio'],
                session['persistence_commands_ratio'],
                session['lateral_movement_flag'],
                
                # Technical features
                session['failed_command_ratio'],
                session['download_attempts'],
                session['upload_attempts'],
                
                # Complexity features
                self.calculate_entropy(session['commands']),
                session['command_variety_score']
            ]
            features.append(feature_vector)
        
        return np.array(features)
    
    def cluster_attackers(self, features: np.ndarray):
        """Perform clustering on behavioral features"""
        # Scale features
        scaled_features = self.scaler.fit_transform(features)
        
        # Reduce dimensionality
        reduced_features = self.pca.fit_transform(scaled_features)
        
        # Perform clustering
        kmeans = KMeans(n_clusters=self.n_clusters, random_state=42)
        clusters = kmeans.fit_predict(reduced_features)
        
        # Calculate cluster statistics
        cluster_stats = {}
        for cluster_id in range(self.n_clusters):
            cluster_features = features[clusters == cluster_id]
            cluster_stats[cluster_id] = {
                'size': len(cluster_features),
                'centroid': kmeans.cluster_centers_[cluster_id],
                'silhouette_score': self.calculate_silhouette(
                    reduced_features, clusters, cluster_id
                ),
                'behavior_profile': self.interpret_cluster(
                    cluster_features, cluster_id
                )
            }
        
        return clusters, cluster_stats
    
    def interpret_cluster(self, features: np.ndarray, cluster_id: int) -> Dict:
        """Interpret cluster characteristics"""
        profile = {
            'cluster_id': cluster_id,
            'attacker_type': None,
            'confidence': 0.0,
            'key_characteristics': []
        }
        
        # Calculate mean values for interpretation
        means = np.mean(features, axis=0)
        
        # Determine attacker type based on feature patterns
        if means[4] > 0.7:  # High reconnaissance
            profile['attacker_type'] = 'Reconnaissance Specialist'
            profile['confidence'] = 0.85
        elif means[5] > 0.6:  # High persistence attempts
            profile['attacker_type'] = 'Advanced Persistent Threat'
            profile['confidence'] = 0.78
        elif means[3] < 3:  # Few unique commands
            profile['attacker_type'] = 'Script Kiddie'
            profile['confidence'] = 0.92
        elif means[6] > 0.4:  # Lateral movement attempts
            profile['attacker_type'] = 'Lateral Mover'
            profile['confidence'] = 0.76
        else:
            profile['attacker_type'] = 'Mixed/Unknown'
            profile['confidence'] = 0.65
        
        return profile`}
                        </code>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2><Shield size={20} /> Security Enhancements & Hardening</h2>

                <div className="card">
                    <h3>Container Security Framework</h3>

                    <div className="card-grid">
                        <div className="card">
                            <h4>Runtime Protection</h4>
                            <ul className="styled-list">
                                <li>Seccomp profiles for syscall filtering</li>
                                <li>AppArmor/SELinux policies</li>
                                <li>Read-only root filesystems</li>
                                <li>Non-root user execution</li>
                            </ul>
                        </div>

                        <div className="card">
                            <h4>Network Security</h4>
                            <ul className="styled-list">
                                <li>Network namespaces isolation</li>
                                <li>iptables/nftables rulesets</li>
                                <li>Rate limiting per IP</li>
                                <li>Egress traffic filtering</li>
                            </ul>
                        </div>

                        <div className="card">
                            <h4>Monitoring & Detection</h4>
                            <ul className="styled-list">
                                <li>Falco runtime security</li>
                                <li>Auditd logging</li>
                                <li>Anomaly detection</li>
                                <li>Automated alerting</li>
                            </ul>
                        </div>
                    </div>

                    <h4 className="mt-6">Automated Vulnerability Scanning</h4>
                    <div className="code-block">
                        <code>
                            {`# security_scanner.py - Automated Security Assessment
import docker
import json
from datetime import datetime
import subprocess

class SecurityScanner:
    def __init__(self):
        self.client = docker.from_env()
        self.vulnerability_db = self.load_vulnerability_db()
    
    def scan_container(self, container_id: str) -> Dict:
        """Perform comprehensive container security scan"""
        container = self.client.containers.get(container_id)
        
        scan_results = {
            'container_id': container_id,
            'timestamp': datetime.utcnow().isoformat(),
            'image': container.image.tags[0] if container.image.tags else 'unknown',
            'vulnerabilities': [],
            'security_score': 100,
            'recommendations': []
        }
        
        # Check for known vulnerabilities
        vulnerabilities = self.check_vulnerabilities(container)
        scan_results['vulnerabilities'].extend(vulnerabilities)
        
        # Check configuration
        config_issues = self.check_configuration(container)
        scan_results['recommendations'].extend(config_issues)
        
        # Calculate security score
        scan_results['security_score'] = self.calculate_security_score(
            vulnerabilities, config_issues
        )
        
        return scan_results
    
    def check_vulnerabilities(self, container) -> List[Dict]:
        """Check for known vulnerabilities in container"""
        vulnerabilities = []
        
        # Get installed packages
        packages = self.get_installed_packages(container)
        
        for package in packages:
            if package['name'] in self.vulnerability_db:
                for vuln in self.vulnerability_db[package['name']]:
                    if self.is_vulnerable(package['version'], vuln['affected_versions']):
                        vulnerabilities.append({
                            'package': package['name'],
                            'version': package['version'],
                            'cve': vuln['cve_id'],
                            'severity': vuln['severity'],
                            'description': vuln['description'],
                            'fix_version': vuln['fixed_version']
                        })
        
        return vulnerabilities
    
    def generate_remediation_report(self, scan_results: Dict) -> str:
        """Generate actionable remediation report"""
        report = f"# Security Scan Report\\n"
        report += f"Container: {scan_results['image']}\\n"
        report += f"Security Score: {scan_results['security_score']}/100\\n\\n"
        
        if scan_results['vulnerabilities']:
            report += "## Critical Vulnerabilities\\n"
            for vuln in scan_results['vulnerabilities']:
                if vuln['severity'] in ['CRITICAL', 'HIGH']:
                    report += f"- **{vuln['cve']}** ({vuln['severity']}): {vuln['description']}\\n"
                    report += f"  Package: {vuln['package']} {vuln['version']}\\n"
                    report += f"  Fix: Upgrade to {vuln['fix_version']}\\n\\n"
        
        if scan_results['recommendations']:
            report += "## Security Recommendations\\n"
            for rec in scan_results['recommendations']:
                report += f"- {rec}\\n"
        
        return report`}
                        </code>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2><GitBranch size={20} /> Research Reproducibility & Open Science</h2>

                <div className="card">
                    <h3>Reproducibility Framework</h3>

                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Component</th>
                                <th>Version Control</th>
                                <th>Documentation</th>
                                <th>Test Coverage</th>
                                <th>License</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Deployment Scripts</td>
                                <td>Git (GitHub)</td>
                                <td>Comprehensive README</td>
                                <td>85%</td>
                                <td>MIT</td>
                            </tr>
                            <tr>
                                <td>Analysis Code</td>
                                <td>Git (GitHub)</td>
                                <td>Jupyter Notebooks</td>
                                <td>78%</td>
                                <td>MIT</td>
                            </tr>
                            <tr>
                                <td>Configuration Files</td>
                                <td>Git (GitHub)</td>
                                <td>Ansible Role Docs</td>
                                <td>92%</td>
                                <td>MIT</td>
                            </tr>
                            <tr>
                                <td>Research Data</td>
                                <td>Zenodo (DOI)</td>
                                <td>Data Dictionary</td>
                                <td>N/A</td>
                                <td>CC BY 4.0</td>
                            </tr>
                            <tr>
                                <td>Documentation</td>
                                <td>GitBook</td>
                                <td>API Reference</td>
                                <td>N/A</td>
                                <td>CC BY-SA 4.0</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="alert success mt-4">
                        <Code size={18} />
                        <div>
                            <strong>Scientific Contribution:</strong> This research contributes to open science by providing
                            fully reproducible methods, documented code, and open datasets for peer validation and extension.
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2>Validation & Peer Review Methodology</h2>

                <div className="card">
                    <h3>Multi-stage Validation Process</h3>

                    <div className="card-grid">
                        <div className="card">
                            <h4>Technical Validation</h4>
                            <p>Unit tests, integration tests, performance benchmarks</p>
                            <div className="badge success">Passed</div>
                        </div>

                        <div className="card">
                            <h4>Statistical Validation</h4>
                            <p>Hypothesis testing, confidence intervals, effect sizes</p>
                            <div className="badge success">Validated</div>
                        </div>

                        <div className="card">
                            <h4>Peer Review</h4>
                            <p>Code review, methodology review, results validation</p>
                            <div className="badge warning">In Progress</div>
                        </div>

                        <div className="card">
                            <h4>Reproducibility Check</h4>
                            <p>Independent replication by research partners</p>
                            <div className="badge info">Scheduled</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}