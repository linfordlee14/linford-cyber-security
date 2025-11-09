'use client';

import { motion } from 'framer-motion';

const labs = [
  {
    id: 1,
    title: 'Vulnerability Scanning with Nmap',
    description: 'Educational walkthrough of network reconnaissance using Nmap on a controlled test environment.',
    tools: ['Nmap', 'Zenmap GUI'],
    learningOutcome: 'Understand network mapping, open ports, service detection without causing harm.',
    disclaimer: '⚠️ For authorized networks only',
    guide: 'Step 1: Setup a local test server. Step 2: Run: nmap -sV localhost. Step 3: Interpret results.',
  },
  {
    id: 2,
    title: 'OWASP Juice Shop - Secure Code Training',
    description: 'Safe, intentionally vulnerable web app to learn and practice security testing.',
    tools: ['OWASP Juice Shop', 'Burp Suite Community'],
    learningOutcome: 'Practice SQL injection, XSS, broken authentication in a sandboxed environment.',
    disclaimer: '✅ Safe sandbox - no real systems harmed',
    guide: 'Download Juice Shop Docker image, run locally, attack the app to learn defenses.',
  },
  {
    id: 3,
    title: 'Incident Response Playbook Walk-Through',
    description: 'Simulated incident response scenario with decision trees and communication templates.',
    tools: ['Playbook PDF', 'Communication Templates'],
    learningOutcome: 'Learn to respond to incidents systematically and communicate with stakeholders.',
    disclaimer: '📋 Process-focused, no technical exploits',
    guide: 'Review the playbook template, simulate a breach scenario, practice your response steps.',
  },
  {
    id: 4,
    title: 'Password Security Lab',
    description: 'Hash cracking demonstration showing why strong passwords matter.',
    tools: ['Hashcat (password hashing)', 'Weak vs. Strong examples'],
    learningOutcome: 'Understand hash functions, salting, and why password complexity is critical.',
    disclaimer: '🔐 Educational - hashes only, no actual passwords cracked',
    guide: 'Learn about hash algorithms, see demo of weak passwords cracking vs. strong ones.',
  },
  {
    id: 5,
    title: 'Secure Configuration Checklist',
    description: 'Step-by-step hardening guide for WordPress, servers, and common applications.',
    tools: ['Configuration Templates', 'Best Practices Guide'],
    learningOutcome: 'Learn defensive security practices and how to harden your infrastructure.',
    disclaimer: '✅ Defensive - no attacks, only defenses',
    guide: 'Review the checklist for your platform, implement configurations, verify security.',
  },
  {
    id: 6,
    title: 'Phishing Email Analysis',
    description: 'Dissect real phishing samples (sanitized) to learn red flags and detection techniques.',
    tools: ['Email Headers', 'Analysis Tools'],
    learningOutcome: 'Train teams to recognize phishing attempts and respond appropriately.',
    disclaimer: '📧 Sample emails only - safe for training',
    guide: 'Review headers, analyze sender info, practice identifying suspicious emails.',
  },
];

export default function Labs() {
  return (
    <div className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">🧪 Labs & Demos</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Educational, defensive security labs and sandboxed demonstrations. 
            All labs are designed for learning and authorized testing only.
          </p>
        </motion.div>

        <div className="bg-yellow-900/20 border border-warning rounded-lg p-6 mb-12">
          <p className="text-warning font-semibold">
            ⚖️ <strong>Important:</strong> These labs are for educational purposes in authorized, controlled environments only. 
            Unauthorized access to computer systems is illegal. Always obtain proper authorization before testing any systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {labs.map((lab, index) => (
            <motion.div
              key={lab.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card"
            >
              <h3 className="text-2xl font-bold text-accent mb-2">{lab.title}</h3>
              <p className="text-gray-400 mb-4">{lab.description}</p>

              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-accent">Tools:</p>
                  <p className="text-gray-400">{lab.tools.join(', ')}</p>
                </div>

                <div>
                  <p className="font-semibold text-accent">Learning Outcome:</p>
                  <p className="text-gray-400">{lab.learningOutcome}</p>
                </div>

                <div className="bg-gray-800 p-3 rounded">
                  <p className="text-cyan-400 font-semibold">{lab.disclaimer}</p>
                </div>

                <div className="bg-gray-800 p-3 rounded">
                  <p className="font-semibold text-gray-300 mb-1">Quick Start:</p>
                  <p className="text-gray-400 text-xs">{lab.guide}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 bg-gray-900 border border-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Setup Your Lab Environment</h3>
          <div className="space-y-3 text-gray-400">
            <p>✅ Use a <strong>local virtual machine</strong> or <strong>Docker container</strong> for all labs</p>
            <p>✅ Never run labs against live, unauthorized systems</p>
            <p>✅ Always maintain backups before testing</p>
            <p>✅ Document your findings and lessons learned</p>
            <p>✅ Share results only with authorized stakeholders</p>
          </div>
        </div>
      </div>
    </div>
  );
}
