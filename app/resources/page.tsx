'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const resources = [
  {
    id: 1,
    title: 'Security Audit Checklist',
    description: 'Comprehensive checklist for assessing organizational security posture.',
    type: 'PDF',
    size: '500 KB',
    link: '#',
  },
  {
    id: 2,
    title: 'Incident Response Playbook',
    description: 'Step-by-step template for responding to security incidents.',
    type: 'PDF',
    size: '1.2 MB',
    link: '#',
  },
  {
    id: 3,
    title: 'Security Policy Template',
    description: 'Ready-to-customize security policy for small organizations.',
    type: 'DOCX',
    size: '300 KB',
    link: '#',
  },
  {
    id: 4,
    title: 'Phishing Awareness Training Module',
    description: '1-hour training outline with slides and discussion prompts.',
    type: 'PDF + Slides',
    size: '2 MB',
    link: '#',
  },
];

export default function Resources() {
  return (
    <div className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">📚 Resources & Training</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Downloadable security resources and training materials for organizations of all sizes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold text-accent mb-2">{resource.title}</h3>
                <p className="text-gray-400 mb-4">{resource.description}</p>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm text-gray-400">
                  <span>{resource.type}</span>
                  <span>{resource.size}</span>
                </div>
                <a href={resource.link} className="btn btn-primary flex items-center justify-center gap-2 w-full">
                  <Download size={18} /> Download
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900 border border-gray-800 rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold mb-4">Why Small Organizations Need Cybersecurity Now</h3>
          <div className="space-y-4 text-gray-400">
            <p>
              <strong className="text-accent">1. You're a Target:</strong> 43% of cyberattacks target small businesses. 
              Attackers see SMBs and NGOs as easier targets with lower defenses.
            </p>
            <p>
              <strong className="text-accent">2. Compliance Matters:</strong> GDPR, CCPA, and local regulations require 
              minimum security standards. Non-compliance = fines and legal liability.
            </p>
            <p>
              <strong className="text-accent">3. Donor & Client Trust:</strong> A breach damages reputation and trust. 
              NGOs especially need to protect donor data and beneficiary information.
            </p>
            <p>
              <strong className="text-accent">4. Cost of Breach:</strong> Average breach cost is $4M+. Prevention through 
              audits and training is far cheaper than recovery.
            </p>
            <p>
              <strong className="text-accent">5. Remote Work Risks:</strong> Distributed teams increase attack surface. 
              VPNs, MFA, and security awareness are essential.
            </p>
          </div>

          <Link href="/contact" className="btn btn-primary mt-6">
            Get Started with a Security Audit
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
