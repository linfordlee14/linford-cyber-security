'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    assets: '',
    timeline: '',
    scope: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate form submission (replace with your backend)
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', company: '', assets: '', timeline: '', scope: '', message: '' });
    }, 1000);
  };

  return (
    <div className="py-20">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">Request a Security Audit</h1>
          <p className="text-xl text-gray-400">
            Tell us about your organization and security goals. We'll respond within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900 border border-gray-800 rounded-lg p-8 md:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block font-semibold mb-2">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-accent focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block font-semibold mb-2">Organization / Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-accent focus:outline-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="assets" className="block font-semibold mb-2">What needs to be assessed? *</label>
                <select
                  id="assets"
                  name="assets"
                  value={formData.assets}
                  onChange={(e) => setFormData({...formData, assets: e.target.value})}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-accent focus:outline-none"
                >
                  <option value="">Select...</option>
                  <option value="web-app">Web Application</option>
                  <option value="network">Network Infrastructure</option>
                  <option value="team">Team & Processes</option>
                  <option value="wordpress">WordPress Site</option>
                  <option value="full">Full Organization</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="timeline" className="block font-semibold mb-2">Timeline</label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-accent focus:outline-none"
                >
                  <option value="">Select...</option>
                  <option value="asap">ASAP (within 2 weeks)</option>
                  <option value="1month">Within 1 month</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="scope" className="block font-semibold mb-2">Scope Notes (# of users, systems, etc.)</label>
              <input
                type="text"
                id="scope"
                name="scope"
                value={formData.scope}
                onChange={(e) => setFormData({...formData, scope: e.target.value})}
                placeholder="e.g., 10 team members, 3 web apps, 1 server"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-accent focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-semibold mb-2">Additional Details *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
                rows={6}
                placeholder="Tell me about your security concerns, current setup, budget, and goals..."
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-accent focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full btn btn-primary"
            >
              {status === 'sending' ? 'Sending...' : '🔐 Request Audit'}
            </button>

            {status === 'success' && (
              <div className="bg-success/20 border border-success text-success px-4 py-3 rounded">
                Thanks! I'll review your request and contact you within 24 hours.
              </div>
            )}

            {status === 'error' && (
              <div className="bg-danger/20 border border-danger text-danger px-4 py-3 rounded">
                Something went wrong. Please email me at linfordlee14@gmail.com
              </div>
            )}
          </form>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <h3 className="text-xl font-bold mb-4">Other Ways to Connect</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="mailto:linfordlee14@gmail.com" className="p-4 border border-gray-800 rounded-lg hover:border-accent transition-colors text-center">
                <div className="text-2xl mb-2">📧</div>
                <div className="font-semibold">Email</div>
                <div className="text-sm text-gray-400">linfordlee14@gmail.com</div>
              </a>
              <a href="https://www.linkedin.com/in/linfordlee14" target="_blank" rel="noopener noreferrer" className="p-4 border border-gray-800 rounded-lg hover:border-accent transition-colors text-center">
                <div className="text-2xl mb-2">💼</div>
                <div className="font-semibold">LinkedIn</div>
                <div className="text-sm text-gray-400">@linfordlee14</div>
              </a>
              <a href="https://github.com/linfordlee14" target="_blank" rel="noopener noreferrer" className="p-4 border border-gray-800 rounded-lg hover:border-accent transition-colors text-center">
                <div className="text-2xl mb-2">💻</div>
                <div className="font-semibold">GitHub</div>
                <div className="text-sm text-gray-400">@linfordlee14</div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
