import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">Linfy Cyber</h3>
            <p className="text-gray-400">
              Ethical cybersecurity audits and training for businesses and NGOs.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-accent mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/#services" className="hover:text-accent">Services</Link></li>
              <li><Link href="/labs" className="hover:text-accent">Labs</Link></li>
              <li><Link href="/resources" className="hover:text-accent">Resources</Link></li>
              <li><Link href="/responsible-disclosure" className="hover:text-accent">Responsible Disclosure</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-accent mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-accent">Download Security Checklist</a></li>
              <li><a href="#" className="hover:text-accent">Policy Template</a></li>
              <li><a href="#" className="hover:text-accent">Training Module</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-accent mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://github.com/linfordlee14" target="_blank" rel="noopener noreferrer" className="hover:text-accent">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/linfordlee14" target="_blank" rel="noopener noreferrer" className="hover:text-accent">LinkedIn</a></li>
              <li><a href="mailto:linfordlee14@gmail.com" className="hover:text-accent">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Linford Musiyambodza | Linfy Cyber Security. All rights reserved.</p>
          <p className="mt-2">Built with security, ethics, and education in mind.</p>
        </div>
      </div>
    </footer>
  );
}
