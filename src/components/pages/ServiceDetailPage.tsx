'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigation } from '@/lib/store';
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from '@/components/layout/AnimatedSection';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  Network,
  Wifi,
  Cable,
  Phone,
  ShieldCheck,
  MonitorCheck,
  Camera,
  KeyRound,
  Database,
  ShieldAlert,
  Eye,
  AlertTriangle,
  Headphones,
  Wrench,
  RefreshCw,
  Cpu,
  Settings,
  Gauge,
  MessageSquare,
  Globe,
  Target,
  Route,
  Cloud,
  Search,
  Lightbulb,
  type LucideIcon,
} from 'lucide-react';

/* ───────────────────── Icon Mapping ───────────────────── */

const ICON_MAP: Record<string, LucideIcon> = {
  Network,
  Wifi,
  Cable,
  Phone,
  ShieldCheck,
  MonitorCheck,
  Camera,
  KeyRound,
  Database,
  ShieldAlert,
  Eye,
  AlertTriangle,
  Headphones,
  Wrench,
  RefreshCw,
  Cpu,
  Settings,
  Gauge,
  MessageSquare,
  Globe,
  Target,
  Route,
  Cloud,
  Search,
  Lightbulb,
};

/* ───────────────────── Types ───────────────────── */

interface ServiceFeature {
  title: string;
  description: string;
  icon: string;
}

interface ServiceFAQ {
  question: string;
  answer: string;
}

interface RelatedService {
  title: string;
  slug: string;
}

interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  features: ServiceFeature[];
  benefits: string[];
  faqs: ServiceFAQ[];
  relatedServices: RelatedService[];
}

/* ───────────────────── Service Data ───────────────────── */

const SERVICE_DATA: Record<string, ServiceData> = {
  'network-connectivity': {
    title: 'Infrastructure & Connectivity Solutions',
    subtitle: 'Building the backbone of your business operations',
    description:
      'From structured cabling and enterprise Wi-Fi to PBX phone systems and router configuration, we design and deploy reliable network infrastructure tailored to your office environment. Our engineers ensure seamless connectivity that scales as your business grows, so your team stays productive and connected.',
    icon: 'Network',
    features: [
      {
        icon: 'Network',
        title: 'Network Design & Planning',
        description:
          'Custom network architecture designed around your office layout, team size, and bandwidth requirements for optimal performance.',
      },
      {
        icon: 'Wifi',
        title: 'Wi-Fi Setup & Optimization',
        description:
          'Enterprise-grade wireless networks with dead-zone elimination, seamless roaming, and bandwidth management for busy office environments.',
      },
      {
        icon: 'Cable',
        title: 'Structured Cabling',
        description:
          'Professional Cat6/Cat6a cabling, cable tray installation, and network closet organization for clean, future-proof connectivity.',
      },
      {
        icon: 'Phone',
        title: 'PBX Phone Systems',
        description:
          'Modern IP PBX and VoIP solutions with auto-attendant, call routing, intercom, and voicemail to streamline business communications.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Network Security Configuration',
        description:
          'Firewall setup, VLAN segmentation, and access controls to protect your network from unauthorized access and threats.',
      },
      {
        icon: 'MonitorCheck',
        title: 'Ongoing Monitoring',
        description:
          'Proactive 24/7 network monitoring to detect and resolve issues before they impact your business operations.',
      },
    ],
    benefits: [
      'Seamless connectivity across your entire office with zero dead zones',
      'Reduced downtime through proactive monitoring and rapid response',
      'Scalable infrastructure that grows with your business needs',
      'Professional installation by certified network engineers',
    ],
    faqs: [
      {
        question: 'How long does a typical office network setup take in Bangladesh?',
        answer:
          'A standard small-to-medium office network setup typically takes 2–5 business days, depending on the office size, number of access points, and cabling requirements. Complex deployments with multiple floors or buildings may take 1–2 weeks. We always provide a detailed timeline during the planning phase.',
      },
      {
        question: 'Can you work with our existing network equipment?',
        answer:
          'Absolutely. We assess your current infrastructure during the initial consultation and recommend upgrades only where necessary. Our goal is to maximize the value of your existing equipment while ensuring optimal performance and security.',
      },
      {
        question: 'Do you provide ongoing network support after installation?',
        answer:
          'Yes, we offer flexible support plans including monthly maintenance contracts, remote monitoring, and on-site support. Our team handles firmware updates, security patches, performance optimization, and rapid troubleshooting to keep your network running smoothly.',
      },
    ],
    relatedServices: [
      { title: 'Security & Access Solutions', slug: 'security-systems' },
      { title: 'IT Support & Maintenance', slug: 'it-support' },
      { title: 'Digital Presence & Strategy', slug: 'digital-presence' },
    ],
  },
  'security-systems': {
    title: 'Security & Access Solutions',
    subtitle: 'Protecting both sides of your business',
    description:
      'Comprehensive security solutions covering physical surveillance with CCTV systems, controlled access through biometric and card-based entry, and digital protection through automated data backup. We help Bangladeshi businesses safeguard their premises, people, and critical data with integrated security systems.',
    icon: 'ShieldCheck',
    features: [
      {
        icon: 'Camera',
        title: 'CCTV & Surveillance Systems',
        description:
          'High-definition IP cameras, NVR systems, remote viewing via mobile apps, and intelligent recording for 24/7 premises monitoring.',
      },
      {
        icon: 'KeyRound',
        title: 'Access Control Installation',
        description:
          'Biometric, card-based, and keypad entry systems with detailed audit trails to control and monitor who enters your facility.',
      },
      {
        icon: 'Database',
        title: 'Data Backup Solutions',
        description:
          'Automated local and cloud backup systems with incremental scheduling, encryption, and disaster recovery planning.',
      },
      {
        icon: 'ShieldAlert',
        title: 'System Security Audits',
        description:
          'Comprehensive assessments of your IT infrastructure to identify vulnerabilities and recommend targeted security improvements.',
      },
      {
        icon: 'Eye',
        title: 'Remote Monitoring Setup',
        description:
          'Configure real-time remote access to your CCTV and security systems so you can monitor your premises from anywhere.',
      },
      {
        icon: 'AlertTriangle',
        title: 'Incident Response Planning',
        description:
          'Develop clear protocols and automated alerts for security breaches, system failures, and data loss scenarios.',
      },
    ],
    benefits: [
      'Comprehensive physical and digital security under one provider',
      '24/7 monitoring capabilities with remote access from anywhere',
      'Data loss prevention through automated backup and recovery',
      'Compliance readiness with audit trails and documented protocols',
    ],
    faqs: [
      {
        question: 'What type of CCTV system is best for a small office in Bangladesh?',
        answer:
          'For most small to medium offices, we recommend a 4–8 camera IP CCTV system with an NVR recorder. IP cameras offer superior image quality, easier scalability, and remote viewing capabilities. We help you choose the right number and placement of cameras based on your office layout and security requirements.',
      },
      {
        question: 'How does the access control system integrate with our existing setup?',
        answer:
          'Our access control systems can integrate with most existing door hardware, electric locks, and alarm systems. We also offer integration with HR software for attendance tracking. During the consultation, we assess your current infrastructure and design a solution that works seamlessly.',
      },
      {
        question: 'How often should we back up our business data?',
        answer:
          'We recommend automated daily backups for critical business data, with weekly full backups stored off-site or in the cloud. The exact schedule depends on your data volume and recovery requirements. Our team designs a backup strategy that balances data safety with storage costs.',
      },
    ],
    relatedServices: [
      { title: 'Infrastructure & Connectivity', slug: 'network-connectivity' },
      { title: 'IT Support & Maintenance', slug: 'it-support' },
      { title: 'Digital Presence & Strategy', slug: 'digital-presence' },
    ],
  },
  'it-support': {
    title: 'IT Support & Maintenance',
    subtitle: 'Keeping your systems running so you don\'t have to worry',
    description:
      'Ongoing IT support and preventive maintenance services designed for businesses that need reliable technology without an in-house IT team. From rapid troubleshooting and hardware repairs to software updates and performance optimization, we keep your systems healthy and your team productive.',
    icon: 'Headphones',
    features: [
      {
        icon: 'Headphones',
        title: 'On-Site & Remote Support',
        description:
          'Flexible support delivery with rapid remote assistance for quick fixes and on-site visits for hardware issues and complex installations.',
      },
      {
        icon: 'RefreshCw',
        title: 'Preventive Maintenance',
        description:
          'Scheduled check-ups, cleaning, and optimizations to prevent problems before they occur and extend equipment lifespan.',
      },
      {
        icon: 'Wrench',
        title: 'Hardware Troubleshooting',
        description:
          'Diagnosis and repair of computers, printers, servers, and network equipment with genuine replacement parts and warranty support.',
      },
      {
        icon: 'Settings',
        title: 'Software Updates & Patches',
        description:
          'Regular OS updates, application patches, and security fixes to keep your systems secure and running the latest features.',
      },
      {
        icon: 'Gauge',
        title: 'System Performance Optimization',
        description:
          'Tuning and optimization of workstations, servers, and networks to maximize speed, efficiency, and user productivity.',
      },
      {
        icon: 'MessageSquare',
        title: 'Help Desk Services',
        description:
          'Dedicated help desk with ticket tracking, priority response times, and escalation procedures for all your IT issues.',
      },
    ],
    benefits: [
      'Minimized downtime with proactive monitoring and fast response',
      'Predictable monthly costs with flexible support contracts',
      'Expert technicians with experience across diverse IT environments',
      'Fast response times with guaranteed SLA-backed service levels',
    ],
    faqs: [
      {
        question: 'What is included in a monthly IT support contract?',
        answer:
          'Our monthly contracts typically include a defined number of on-site and remote support hours, preventive maintenance visits, software update management, network monitoring, priority response times, and discounted rates for additional services. We tailor each contract to your specific needs and budget.',
      },
      {
        question: 'How quickly can you respond to an IT emergency?',
        answer:
          'For clients on support contracts, we offer priority emergency response within 2–4 hours for critical issues. Remote support requests are typically addressed within 30–60 minutes. Non-contract clients can also request emergency support with standard response times.',
      },
      {
        question: 'Do you support both Windows and Mac environments?',
        answer:
          'Yes, our technicians are experienced with both Windows and macOS environments, as well as mixed-OS offices. We also support Linux servers, mobile devices, and common business applications used in Bangladeshi businesses.',
      },
    ],
    relatedServices: [
      { title: 'Infrastructure & Connectivity', slug: 'network-connectivity' },
      { title: 'Security & Access Solutions', slug: 'security-systems' },
      { title: 'Digital Presence & Strategy', slug: 'digital-presence' },
    ],
  },
  'digital-presence': {
    title: 'Digital Presence & Strategic Planning',
    subtitle: 'Strengthening your business in the digital world',
    description:
      'Build a professional online presence and make strategic technology decisions with our website design and IT consultancy services. We help Bangladeshi businesses establish credibility online, plan their digital transformation, and choose the right technology investments for long-term growth.',
    icon: 'Globe',
    features: [
      {
        icon: 'Globe',
        title: 'Website Design & Development',
        description:
          'Modern, responsive websites and web applications that establish your digital presence, build credibility, and drive customer engagement.',
      },
      {
        icon: 'Target',
        title: 'IT Strategy Consulting',
        description:
          'Expert guidance on technology investments and IT roadmaps aligned with your business goals, budget, and growth plans.',
      },
      {
        icon: 'Lightbulb',
        title: 'Digital Transformation Planning',
        description:
          'Comprehensive planning for digitizing operations, automating workflows, and modernizing legacy systems for greater efficiency.',
      },
      {
        icon: 'Route',
        title: 'Technology Roadmapping',
        description:
          'A phased technology adoption plan with clear milestones, budgets, and timelines to guide your IT investments over 1–3 years.',
      },
      {
        icon: 'Search',
        title: 'Vendor Assessment & Selection',
        description:
          'Objective evaluation and recommendation of software, hardware, and service vendors to ensure you get the best value.',
      },
      {
        icon: 'Cloud',
        title: 'Cloud Migration Advisory',
        description:
          'Guidance on moving to cloud services like Google Workspace, Microsoft 365, or AWS with minimal disruption to operations.',
      },
    ],
    benefits: [
      'Professional online presence that builds trust and attracts customers',
      'Strategic technology decisions aligned with business objectives',
      'Competitive advantage through modern, efficient IT infrastructure',
      'Future-ready technology foundation that scales with your growth',
    ],
    faqs: [
      {
        question: 'How long does it take to build a business website?',
        answer:
          'A standard business website with 5–10 pages typically takes 2–4 weeks from design approval to launch. More complex websites with e-commerce, custom features, or web applications may take 4–8 weeks. We provide a detailed project timeline during the initial consultation.',
      },
      {
        question: 'Do you provide ongoing website maintenance?',
        answer:
          'Yes, we offer ongoing website maintenance packages that include content updates, security monitoring, performance optimization, backup management, and minor design tweaks. This ensures your website stays current, secure, and performing well.',
      },
      {
        question: 'How can IT consultancy help a small Bangladeshi business?',
        answer:
          'IT consultancy helps you make informed technology decisions, avoid costly mistakes, and invest in the right tools for your specific needs. For small businesses, this often means saving money by choosing the right software, avoiding over-engineered solutions, and building a scalable IT foundation that supports growth.',
      },
    ],
    relatedServices: [
      { title: 'Infrastructure & Connectivity', slug: 'network-connectivity' },
      { title: 'Security & Access Solutions', slug: 'security-systems' },
      { title: 'IT Support & Maintenance', slug: 'it-support' },
    ],
  },
};

const SLUG_LABELS: Record<string, string> = {
  'network-connectivity': 'Infrastructure & Connectivity',
  'security-systems': 'Security & Access',
  'it-support': 'IT Support & Maintenance',
  'digital-presence': 'Digital Presence & Strategy',
};

/* ───────────────────── Sub-Components ───────────────────── */

function FAQItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-brand-100 rounded-xl overflow-hidden transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-brand-50/50 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-foreground text-[15px] leading-relaxed">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-brand" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 pt-0">
          <p className="text-muted-foreground leading-relaxed text-[15px]">{answer}</p>
        </div>
      </motion.div>
    </div>
  );
}

/* ───────────────────── Main Component ───────────────────── */

export default function ServiceDetailPage() {
  const { pageParams, navigate } = useNavigation();
  const slug = pageParams?.slug || 'network-connectivity';
  const data = SERVICE_DATA[slug] || SERVICE_DATA['network-connectivity'];
  const ServiceIcon = ICON_MAP[data.icon] || Network;

  const navigateToService = (serviceSlug: string) => {
    navigate('service-detail', { slug: serviceSlug });
  };

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="overflow-hidden">
      {/* ================================================================ */}
      {/* SECTION 1: HERO                                                  */}
      {/* ================================================================ */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand to-brand-light animate-gradient" />
        {/* Dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* Decorative shapes */}
        <motion.div
          animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-32 left-[10%] w-16 h-16 rounded-xl border border-white/10 bg-white/5 hidden sm:block"
        />
        <motion.div
          animate={{ y: [0, 12, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-16 right-[12%] w-20 h-20 rounded-full border border-white/10 bg-white/5 hidden sm:block"
        />
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute top-48 left-[60%] w-10 h-10 rounded-lg border border-white/10 bg-white/[0.06] hidden sm:block"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <AnimatedSection direction="none" delay={0.1}>
            <nav className="flex items-center gap-2 text-sm text-white/70 mb-8">
              <button
                onClick={() => navigate('home')}
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </button>
              <ChevronRight className="w-4 h-4" />
              <button
                onClick={() => navigate('services')}
                className="hover:text-white transition-colors duration-300"
              >
                Services
              </button>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">{SLUG_LABELS[slug] || data.title}</span>
            </nav>
          </AnimatedSection>

          <div className="max-w-3xl">
            <AnimatedSection direction="up" delay={0.15}>
              <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-8">
                <ServiceIcon className="w-8 h-8 text-white" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-5">
                {data.title}
              </h1>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.25}>
              <p className="text-xl text-brand-200 font-medium mb-6">
                {data.subtitle}
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-2xl">
                {data.description}
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.35}>
              <Button
                size="lg"
                onClick={() => navigate('contact')}
                className="bg-white text-brand-dark hover:bg-brand-50 shadow-xl shadow-black/10 hover:shadow-black/20 transition-all duration-300 rounded-xl px-8 py-6 text-base font-semibold group"
              >
                Get a Free Assessment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 2: KEY FEATURES                                          */}
      {/* ================================================================ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand text-sm font-medium mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-brand" />
              What&apos;s Included
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">
              Key{' '}
              <span className="text-gradient-green">Features</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Every aspect of this service is designed to deliver measurable value for your business.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {data.features.map((feature) => {
              const FeatureIcon = ICON_MAP[feature.icon] || Settings;
              return (
                <StaggerItem key={feature.title}>
                  <div className="green-glow group rounded-2xl border border-brand-50 bg-white p-6 lg:p-8 transition-all duration-300 hover:border-brand-200 hover:-translate-y-1 h-full flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center mb-5 group-hover:bg-brand group-hover:border-brand transition-colors duration-300">
                      <FeatureIcon className="w-6 h-6 text-brand group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                      {feature.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 3: BENEFITS                                              */}
      {/* ================================================================ */}
      <section className="py-20 lg:py-28 bg-brand-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text content */}
            <AnimatedSection direction="right">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-brand-100 text-brand text-sm font-medium mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                Why Choose This Service
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight mb-6">
                Benefits for{' '}
                <span className="text-gradient-green">Your Business</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Investing in professional {data.title.toLowerCase()} delivers tangible returns that directly impact your bottom line and operational efficiency.
              </p>
              <ul className="space-y-4">
                {data.benefits.map((benefit) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-0.5 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-brand" />
                    </div>
                    <span className="text-foreground font-medium leading-relaxed">
                      {benefit}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>

            {/* Right: Decorative visual */}
            <AnimatedSection direction="left" delay={0.2}>
              <div className="relative">
                <div className="aspect-square max-w-md mx-auto">
                  {/* Main circle */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand to-brand-light opacity-10" />
                  <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-brand/5 to-brand-accent/5 border border-brand-100 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center mx-auto mb-6">
                        <ServiceIcon className="w-10 h-10 text-brand" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {data.title.split('&')[0].trim()}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Trusted by businesses across Bangladesh
                      </p>
                      <div className="flex items-center justify-center gap-6 mt-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-brand">98%</div>
                          <div className="text-xs text-muted-foreground">Satisfaction</div>
                        </div>
                        <div className="w-px h-10 bg-brand-100" />
                        <div className="text-center">
                          <div className="text-2xl font-bold text-brand">24/7</div>
                          <div className="text-xs text-muted-foreground">Support</div>
                        </div>
                        <div className="w-px h-10 bg-brand-100" />
                        <div className="text-center">
                          <div className="text-2xl font-bold text-brand">200+</div>
                          <div className="text-xs text-muted-foreground">Clients</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating accent */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-brand-100/60 border border-brand-200/40 hidden sm:block"
                />
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-brand-50 border border-brand-100 hidden sm:block"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 4: FAQ                                                   */}
      {/* ================================================================ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand text-sm font-medium mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                Common Questions
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">
                Frequently Asked{' '}
                <span className="text-gradient-green">Questions</span>
              </h2>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                Answers to the most common questions about our {data.title.toLowerCase()}.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <div className="space-y-3">
                {data.faqs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openFAQ === index}
                    onToggle={() => toggleFAQ(index)}
                  />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 5: RELATED SERVICES                                      */}
      {/* ================================================================ */}
      <section className="py-20 lg:py-28 bg-brand-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-brand-100 text-brand text-sm font-medium mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-brand" />
              Explore More
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">
              Related{' '}
              <span className="text-gradient-green">Services</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Discover other services that complement this solution and help you build a complete IT ecosystem.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-3 gap-6 lg:gap-8">
            {data.relatedServices.map((related) => {
              const relatedData = SERVICE_DATA[related.slug];
              if (!relatedData) return null;
              const RelatedIcon = ICON_MAP[relatedData.icon] || Network;
              return (
                <StaggerItem key={related.slug}>
                  <button
                    onClick={() => navigateToService(related.slug)}
                    className="green-glow group w-full text-left rounded-2xl border border-brand-50 bg-white p-6 lg:p-8 transition-all duration-300 hover:border-brand-200 hover:-translate-y-1 h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center mb-5 group-hover:bg-brand group-hover:border-brand transition-colors duration-300">
                      <RelatedIcon className="w-6 h-6 text-brand group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-brand transition-colors duration-300">
                      {related.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                      {relatedData.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-brand font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                      View Details
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </button>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 6: CTA                                                   */}
      {/* ================================================================ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative rounded-3xl overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand to-brand-light animate-gradient" />
              {/* Dot pattern */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />
              {/* Decorative shapes */}
              <motion.div
                animate={{ y: [0, -12, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-8 right-[10%] w-16 h-16 rounded-xl border border-white/10 bg-white/5 hidden sm:block"
              />
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -8, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute bottom-8 left-[8%] w-20 h-20 rounded-full border border-white/10 bg-white/5 hidden sm:block"
              />

              <div className="relative px-6 sm:px-10 lg:px-16 py-14 sm:py-16 lg:py-20 text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
                  Ready to{' '}
                  <span className="text-brand-200">Get Started?</span>
                </h2>
                <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
                  Let&apos;s discuss how our {data.title.toLowerCase()} can help your business 
                  grow. Contact our team for a free consultation and customized proposal.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    size="lg"
                    onClick={() => navigate('contact')}
                    className="bg-white text-brand-dark hover:bg-brand-50 shadow-xl shadow-black/10 hover:shadow-black/20 transition-all duration-300 rounded-xl px-8 py-6 text-base font-semibold group"
                  >
                    Contact Us Today
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => navigate('contact')}
                    className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 rounded-xl px-8 py-6 text-base font-semibold"
                  >
                    Request a Quote
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}