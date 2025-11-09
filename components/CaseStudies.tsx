'use client';

import { motion } from 'framer-motion';

const caseStudies = [
  {
    id: 1,
    title: 'Phishing Simulation & Awareness Program',
    client: 'Wildlife NGO (Anonymized)',
    challenge: 'Team was vulnerable to phishing attacks; no security awareness training in place.',
    solution: 'Designed targeted phishing simulation campaign, tracked engagement, and delivered customized awareness training.',
    results: [
      '35% initial click-through rate → 8% after training (77% improvement)',
      '92% team completion of awareness module',
      '3 real phishing attempts detected and reported by staff within first month',
      'Zero successful breaches from phishing',
    ],
    metrics: 'PLACEHOLDER: Replace with real engagement metrics from your phishing campaign',
  },
  {
    id: 2,
    title: 'HackPal X - Security Dashboard Design',
    client: 'Internal Project',
    challenge: 'Need a clear, accessible security monitoring interface for non-technical staff.',
    solution: 'Built a dashboard showing key metrics: threat alerts, system status, incident queue, and alert history.',
    results: [
      'Reduced mean time to detection (MTTD) by 40%',
      'Non-technical team members can now identify and report alerts independently',
      'Alert response time improved to <5 minutes',
      'Dashboard adoption: 100% of team uses daily',
    ],
    metrics: 'PLACEHOLDER: Update with real deployment metrics',
  },
  {
    id: 3,
    title: 'WordPress Security Hardening',
    client: 'Small Business (Anonymized)',
    challenge: 'WordPress site vulnerable to common attacks (outdated plugins, weak config, no monitoring).',
    solution: 'Full security audit, plugin update/removal, hardened wp-config, SSL setup, monitoring, backup automation.',
    results: [
      'Fixed 23 vulnerabilities (3 critical, 8 high)',
      'Implemented Web Application Firewall (WAF)',
      'Automated daily backups with off-site storage',
      'Zero breaches in 12 months post-hardening (vs. 2 attempts pre-hardening)',
    ],
    metrics: 'PLACEHOLDER: Include before/after vulnerability counts and incident logs',
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 bg-gray-950">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">Case Studies</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real-world security projects with measurable outcomes
          </p>
        </motion.div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <span className="badge mb-4">{study.client}</span>
                  <h3 className="text-3xl font-bold text-accent mb-4">{study.title}</h3>

                  <div className="space-y-4 text-gray-300 mb-6">
                    <div>
                      <p className="font-semibold text-accent mb-2">Challenge</p>
                      <p>{study.challenge}</p>
                    </div>

                    <div>
                      <p className="font-semibold text-accent mb-2">Solution</p>
                      <p>{study.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <h4 className="font-semibold text-accent mb-3">Results</h4>
                  <ul className="space-y-2 text-gray-300 mb-6">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-success mr-3">✓</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-gray-800 border border-gray-700 p-4 rounded">
                    <p className="text-sm text-gray-400">
                      <strong className="text-warning">📊 PLACEHOLDER:</strong> {study.metrics}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
