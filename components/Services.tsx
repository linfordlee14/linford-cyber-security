'use client';

import { motion } from 'framer-motion';

const services = [
  {
    id: 'audit',
    icon: '🔍',
    title: 'Security Audits',
    description: 'Comprehensive security assessment of your systems, networks, and applications.',
    process: ['Asset Discovery', 'Vulnerability Scanning', 'Manual Testing', 'Report & Remediation Plan'],
    deliverables: ['Detailed Vulnerability Report', 'Risk Prioritization', 'Remediation Roadmap', 'Executive Summary'],
    price: '$1,500 - $5,000',
  },
  {
    id: 'phishing',
    icon: '🎣',
    title: 'Phishing Simulations & Training',
    description: 'Test and train your team to recognize and respond to phishing threats.',
    process: ['Campaign Design', 'Email Send', 'Report Tracking', 'Awareness Training'],
    deliverables: ['Simulation Campaign', 'Click/Report Metrics', 'Training Materials', 'Analytics Report'],
    price: '$800 - $2,500',
  },
  {
    id: 'hardening',
    icon: '🛡️',
    title: 'Hardening + Monitoring',
    description: 'Secure configuration, monitoring setup, and incident response planning.',
    process: ['Config Review', 'Updates & Patches', 'Monitoring Setup', 'Response Plan Creation'],
    deliverables: ['Hardened Config', 'Monitoring Dashboard', 'Incident Response Playbook', 'Ongoing Reporting'],
    price: '$2,000 - $6,000',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">Services</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ethical cybersecurity solutions tailored for small businesses and nonprofits
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-accent">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>

              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-accent mb-2">Process:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    {service.process.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-accent mb-2">Deliverables:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    {service.deliverables.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-800">
                  <p className="text-gray-400">Starting at</p>
                  <p className="text-2xl font-bold text-accent">{service.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
