'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="badge"
          >
            🔐 Ethical Cybersecurity | Educational Labs | Responsible Practices
          </motion.span>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mt-6 mb-6"
          >
            Cybersecurity,{' '}
            <span className="text-accent">ethically</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-10"
          >
            Practical audits, training & secure web builds. I help small businesses and NGOs 
            protect their data with ethical, transparent security practices.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact" className="btn btn-primary">
              🔍 Request a Security Audit
            </Link>
            <Link href="/labs" className="btn btn-secondary">
              🧪 View Labs & Demos
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 p-6 bg-gray-900 border border-gray-800 rounded-lg"
          >
            <p className="text-sm text-gray-400">
              ⚖️ <strong>Responsible Disclosure:</strong> All labs and demos are for educational and defensive purposes only. 
              We follow strict ethical guidelines and legal compliance. See our{' '}
              <Link href="/responsible-disclosure" className="text-accent hover:underline">
                Responsible Disclosure Policy
              </Link>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
