import Link from 'next/link';

export default function ResponsibleDisclosure() {
  return (
    <div className="py-20">
      <div className="container max-w-4xl">
        <h1 className="text-5xl font-bold mb-8">🛡️ Responsible Disclosure Policy</h1>

        <div className="prose prose-invert max-w-none space-y-8 text-gray-300">
          <section>
            <h2 className="text-3xl font-bold text-accent mb-4">Our Commitment to Security & Ethics</h2>
            <p>
              At Linfy Cyber Security, we are committed to conducting security testing and research 
              in an ethical, legal, and responsible manner. All work is performed with proper authorization 
              and within applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-accent mb-4">Educational Purpose Only</h2>
            <p>
              All labs, demos, scripts, and educational materials provided on this website are strictly 
              for <strong>defensive and educational purposes</strong> in <strong>authorized environments only</strong>.
            </p>
            <p className="text-warning">
              ⚖️ <strong>Unauthorized access to computer systems is illegal.</strong> Always obtain written 
              permission before testing any systems you do not own.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-accent mb-4">When You Find a Security Issue</h2>
            <p>If you discover a security vulnerability in our services or website:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Email us immediately at <strong>security@linfytech.com</strong> (or linfordlee14@gmail.com)</li>
              <li>Include details: vulnerability type, affected systems, potential impact</li>
              <li>Do NOT publicly disclose the vulnerability without our consent</li>
              <li>Allow us 30 days to respond and develop a fix</li>
              <li>We will acknowledge receipt and work with you on remediation</li>
            </ol>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-accent mb-4">Our Testing Practices</h2>
            <ul className="space-y-2">
              <li>✅ Authorized security testing only (written scope & approval)</li>
              <li>✅ Non-destructive testing (read-only scans first)</li>
              <li>✅ Minimal business disruption</li>
              <li>✅ Documented testing methodology</li>
              <li>✅ Confidential reporting of all findings</li>
              <li>✅ Legal compliance (GDPR, local laws)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-accent mb-4">What We Will NOT Do</h2>
            <ul className="space-y-2">
              <li>❌ Test systems without written authorization</li>
              <li>❌ Access personal data beyond security scope</li>
              <li>❌ Disrupt services or steal data</li>
              <li>❌ Use exploits for unauthorized access</li>
              <li>❌ Share client information publicly</li>
              <li>❌ Provide offensive hacking tutorials or exploit code</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-accent mb-4">Legal & Compliance</h2>
            <p>
              We comply with all applicable laws including:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Computer Fraud and Abuse Act (CFAA, USA)</li>
              <li>UK Computer Misuse Act 1990</li>
              <li>GDPR (EU/UK data protection)</li>
              <li>Local cybercrime laws</li>
            </ul>
          </section>

          <section className="bg-gray-900 border border-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-accent mb-4">Report a Security Issue</h3>
            <p className="mb-4">Found a vulnerability?</p>
            <a href="mailto:security@linfytech.com" className="btn btn-primary inline-block">
              🔐 Report Security Issue
            </a>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-400">Last Updated: November 2025</h3>
          </section>
        </div>
      </div>
    </div>
  );
}
