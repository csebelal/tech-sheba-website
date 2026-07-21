'use client';

import { useNavigation, NAV_ITEMS, type PageKey } from '@/lib/store';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  ArrowRight,
  ChevronUp,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import logoImg from '@/Media/Logo/Tech Sheba logo light.png';

export function Footer() {
  const { navigate } = useNavigation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (page: PageKey, params?: Record<string, string>) => {
    navigate(page, params);
  };

  return (
    <footer className="bg-[#001F60] text-white">
      {/* CTA Banner */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand to-brand-light opacity-90" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-14 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-8">
            Get a complimentary IT assessment and discover how Tech Sheba can help your business grow with reliable, affordable technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleNav('contact')}
              className="px-8 py-3.5 bg-white text-brand-dark font-semibold rounded-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
            >
              Request a Free Assessment
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:01980884541"
              className="px-8 py-3.5 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Us Now
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <Image
                src={logoImg}
                alt="Tech Sheba Logo"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Reliable IT solutions for growing businesses in Bangladesh. From network setup to cybersecurity, we handle the technology behind your business.
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-accent/20 flex items-center justify-center text-white/50 hover:text-brand-accent transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-5">Services</h4>
            <ul className="space-y-3">
              {[
                { label: 'Network & Wi-Fi Setup', page: 'service-detail' as PageKey, params: { slug: 'network-connectivity' } },
                { label: 'CCTV & Security', page: 'service-detail' as PageKey, params: { slug: 'security-systems' } },
                { label: 'IT Support & Maintenance', page: 'service-detail' as PageKey, params: { slug: 'it-support' } },
                { label: 'Website Design', page: 'service-detail' as PageKey, params: { slug: 'digital-presence' } },
                { label: 'IT Consultancy', page: 'service-detail' as PageKey, params: { slug: 'digital-presence' } },
                { label: 'Data Backup', page: 'service-detail' as PageKey, params: { slug: 'security-systems' } },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleNav(item.page, item.params)}
                    className="text-sm text-white/60 hover:text-brand-accent transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', page: 'about' as PageKey },
                { label: 'Industries', page: 'industries' as PageKey },
                { label: 'Case Studies', page: 'case-studies' as PageKey },
                { label: 'Blog', page: 'blog' as PageKey },
                { label: 'Careers', page: 'careers' as PageKey },
                { label: 'Partners', page: 'partners' as PageKey },
                { label: 'Contact', page: 'contact' as PageKey },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleNav(item.page)}
                    className="text-sm text-white/60 hover:text-brand-accent transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-5">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-accent mt-0.5 shrink-0" />
                <span className="text-sm text-white/60">Dhaka, Bangladesh</span>
              </li>
              <li>
                <a
                  href="tel:01980884541"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-brand-accent transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-accent shrink-0" />
                  +880 1980 884541
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@techsheba.net"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-brand-accent transition-colors"
                >
                  <Mail className="w-4 h-4 text-brand-accent shrink-0" />
                  hello@techsheba.net
                </a>
              </li>
            </ul>
            <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10">
              <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Business Hours</p>
              <p className="text-sm text-white/70">Saturday – Thursday</p>
              <p className="text-sm text-white/70">9:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Tech Sheba. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button onClick={() => handleNav('faq')} className="text-xs text-white/40 hover:text-white/70 transition-colors">
              FAQ
            </button>
            <button onClick={() => handleNav('support')} className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Support
            </button>
            <button onClick={() => handleNav('partners')} className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Partners
            </button>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-brand text-white shadow-lg hover:bg-brand-dark hover:shadow-xl transition-all duration-200 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </motion.button>
      )}
    </footer>
  );
}