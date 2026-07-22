'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, Clock, Sun, Moon } from 'lucide-react';
import { useNavigation, NAV_ITEMS, type PageKey } from '@/lib/store';
import { useTheme } from 'next-themes';
import darkLogo from '@/Media/Logo/Tech Sheba Logo Trans 1.png';
import lightLogo from '@/Media/Logo/Tech Sheba logo light.png';
import Image from 'next/image';

export function Navbar() {
  const { currentPage, navigate, isMobileMenuOpen, setMobileMenuOpen } = useNavigation();
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [currentPage, setMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('header')) {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [setMobileMenuOpen]);

  const handleNav = (page: PageKey, params?: Record<string, string>) => {
    navigate(page, params);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-brand-dark text-white text-sm hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:01980884541" className="flex items-center gap-2 hover:text-brand-200 transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>+880 1980 884541</span>
            </a>
            <a href="mailto:hello@techsheba.net" className="flex items-center gap-2 hover:text-brand-200 transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span>hello@techsheba.net</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5" />
            <span>Sat–Thu: 9:00 AM – 6:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-md shadow-[0_1px_20px_rgba(0,31,96,0.08)]'
            : 'bg-white dark:bg-[#0f172a]'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between py-3 lg:py-4">
            {/* Logo */}
            <button
              onClick={() => handleNav('home')}
              className="flex items-center gap-2.5 group"
            >
              <Image
                src={mounted && theme === 'dark' ? lightLogo : darkLogo}
                alt="Tech Sheba Logo"
                width={200}
                height={50}
                className="h-[50px] w-auto"
                priority
              />
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.page}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.page)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => handleNav(item.page)}
                    className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                      currentPage === item.page || (item.page === 'services' && currentPage === 'service-detail')
                        ? 'text-brand bg-brand-50'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeDropdown === item.page ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.page && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                        className="absolute top-full left-0 mt-1 w-64 bg-white dark:bg-[#1e293b] rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.1)] border border-border/50 py-2 overflow-hidden"
                      >
                        {item.children.map((child) => (
                          <button
                            key={child.params?.slug}
                            onClick={() => handleNav(child.page, child.params)}
                            className="w-full text-left px-4 py-2.5 text-sm text-muted-foreground hover:text-brand hover:bg-brand-50 transition-colors"
                          >
                            {child.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                aria-label="Toggle theme"
              >
                {mounted && theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => handleNav('faq')}
                className="px-3.5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                FAQ
              </button>
              <button
                onClick={() => handleNav('contact')}
                className="px-5 py-2.5 bg-gradient-to-r from-brand to-brand-light text-white text-sm font-semibold rounded-lg hover:shadow-[0_4px_20px_rgba(0,31,96,0.35)] hover:-translate-y-0.5 transition-all duration-200"
              >
                Get a Free Assessment
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg hover:bg-muted transition-colors active:bg-muted/80 touch-manipulation"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:hidden bg-white dark:bg-[#0f172a] border-t border-border/50"
            >
              <div className="px-4 py-3 space-y-1 max-h-[80vh] overflow-y-auto">
                {NAV_ITEMS.map((item) => (
                  <div key={item.page}>
                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          item.children
                            ? setMobileDropdown(mobileDropdown === item.page ? null : item.page)
                            : handleNav(item.page);
                        }}
                        className={`flex-1 text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                          currentPage === item.page ? 'text-brand bg-brand-50' : 'text-foreground hover:bg-muted'
                        }`}
                      >
                        {item.label}
                      </button>
                      {item.children && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setMobileDropdown(mobileDropdown === item.page ? null : item.page);
                          }}
                          className="p-2.5 touch-manipulation"
                        >
                          <ChevronDown
                            className={`w-4 h-4 text-muted-foreground transition-transform ${
                              mobileDropdown === item.page ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      )}
                    </div>
                    <AnimatePresence>
                      {item.children && mobileDropdown === item.page && (
                        <motion.div
                          key="dropdown"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                          className="overflow-hidden ml-3 border-l-2 border-brand-100 dark:border-brand-200/30 pl-3"
                        >
                          {item.children.map((child) => (
                            <button
                              type="button"
                              key={child.params?.slug}
                              onClick={() => handleNav(child.page, child.params)}
                              className="w-full text-left px-3 py-2.5 text-sm text-muted-foreground hover:text-brand transition-colors"
                            >
                              {child.label}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                <div className="pt-3 border-t border-border/50 space-y-2">
                  <button
                    type="button"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors"
                  >
                    {mounted && theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    {mounted && theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNav('faq')}
                    className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors"
                  >
                    FAQ
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNav('careers')}
                    className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors"
                  >
                    Careers
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNav('support')}
                    className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors"
                  >
                    Support
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNav('contact')}
                    className="w-full mt-2 px-5 py-3 bg-gradient-to-r from-brand to-brand-light text-white text-sm font-semibold rounded-lg text-center"
                  >
                    Get a Free Assessment
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}