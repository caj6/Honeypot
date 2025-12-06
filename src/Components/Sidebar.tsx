import { AlertTriangle, Globe, Cpu, Shield } from 'lucide-react';

const TerminalIcon = ({ size }: { size: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="18" y2="6"></line>
        <line x1="6" y1="10" x2="12" y2="10"></line>
    </svg>
);

export default function Sidebar() {
    const threats = [
        { type: 'SSH Brute Force', count: '8,420', icon: <TerminalIcon size={14} />, trend: '+12%' },
        { type: 'Malware Samples', count: '342', icon: <AlertTriangle size={14} />, trend: '+5%' },
        { type: 'Web Exploits', count: '1,245', icon: <Globe size={14} />, trend: '+8%' },
        { type: 'ICS Probes', count: '89', icon: <Cpu size={14} />, trend: '+3%' },
    ];

    const recentActivity = [
        { time: '2 mins ago', event: 'SSH brute force from 185.143.223.12', severity: ' high' },
        { time: '15 mins ago', event: 'Malware download attempt via SMB', severity: ' critical' },
        { time: '1 hour ago', event: 'SQL injection probe on /wp-admin', severity: ' medium' },
        { time: '3 hours ago', event: 'Modbus function code scan', severity: 'low' },
    ];

    return (
        <div className="sidebar">
            <section>
                <h3>Live Threat Metrics</h3>
                <div className="card-grid">
                    {threats.map((threat) => (
                        <div key={threat.type} className="card">
                            <div className="flex items-center gap-2">
                                {threat.icon}
                                <span className="small">{threat.type}</span>
                            </div>
                            <div className="kpi">
                                <div className="num">{threat.count}</div>
                                <span className="small success">{threat.trend}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h3>Recent Activity</h3>
                {recentActivity.map((activity) => (
                    <div key={activity.time} className="card" style={{ marginBottom: '10px' }}>
                        <div className="flex justify-between items-center">
                            <span className="small">{activity.time}</span>
                            <span className={`small ${activity.severity === 'critical' ? 'danger' : activity.severity === 'high' ? 'warning' : 'muted'}`}>
                                {activity.severity}
                            </span>
                        </div>
                        <p className="small" style={{ margin: '5px 0 0' }}>{activity.event}</p>
                    </div>
                ))}
            </section>

            <section>
                <h3>Top Attack Sources</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>China</td><td>2,450</td></tr>
                        <tr><td>United States</td><td>1,890</td></tr>
                        <tr><td>Russia</td><td>1,234</td></tr>
                        <tr><td>Netherlands</td><td>890</td></tr>
                        <tr><td>Germany</td><td>567</td></tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
}