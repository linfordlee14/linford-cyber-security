'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Labs & Demos', href: '/labs' },
    { name: 'Resources', href: '/resources' },
    { name: 'Case Studies', href: '/#case-studies' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-950 border-b border-gray-800">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="text-2xl font-bold text-accent">
          🛡️ Linfy Cyber
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-accent transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary">
            Request Audit
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 p-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-gray-300 hover:text-accent"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
