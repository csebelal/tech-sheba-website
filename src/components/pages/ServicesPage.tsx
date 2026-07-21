'use client';

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
  Server,
  Wifi,
  Phone,
  Headphones,
  Lock,
  Camera,
  KeyRound,
  Database,
  Globe,
  Target,
  Lightbulb,
  Network,
  Shield,
  Search,
  ClipboardList,
  Wrench,
  LifeBuoy,
  RefreshCw,
  Cable,
} from 'lucide-react';

/* ───────────────────── Data Constants ───────────────────── */

const CATEGORIES = [
  {
    icon: Server,
    title: 'Infrastructure & Connectivity',
    description:
      'Network setup, Wi-Fi, PBX phone systems, and ongoing IT support to keep your business connected and communicating efficiently.',
    slug: 'network-connectivity',
  },
  {
    icon: Shield,
    title: 'Security & Access',
    description:
      'CCTV surveillance, access control systems, and data backup to protect your physical and digital assets around the clock.',
    slug: 'security-systems',
  },
  {
    icon: Globe,
    title: 'Digital Strategy',
    description:
      'Website design, IT consultancy, and strategic planning to strengthen your digital presence and grow your business online.',
    slug: 'digital-presence',
  },
];

const ALL_SERVICES = [
  {
    icon: Wifi,
    title: 'Network & Wi-Fi Setup',
    description:
      'Enterprise-grade wireless networks, structured cabling, and bandwidth optimization designed for your office layout and needs.',
    slug: 'network-connectivity',
  },
  {
    icon: Cable,
    title: 'Structured Cabling',
    description:
      'Professional Cat6/Cat6a cabling, cable tray installation, and network closet organization for clean, reliable connectivity.',
    slug: 'network-connectivity',
  },
  {
    icon: Phone,
    title: 'Phone & PBX Systems',
    description:
      'Modern IP PBX, intercom solutions, and VoIP systems for seamless internal and external communication across your organization.',
    slug: 'network-connectivity',
  },
  {
    icon: Headphones,
    title: 'IT Support & Maintenance',
    description:
      'Proactive monitoring, rapid troubleshooting, and scheduled maintenance to prevent downtime and keep operations running.',
    slug: 'it-support',
  },
  {
    icon: Camera,
    title: 'CCTV & Surveillance',
    description:
      'High-definition IP cameras, NVR systems, remote viewing, and intelligent recording for 24/7 premises monitoring.',
    slug: 'security-systems',
  },
  {
    icon: KeyRound,
    title: 'Access Control Systems',
    description:
      'Biometric, card-based, and keypad entry systems to control and monitor facility access with detailed audit trails.',
    slug: 'security-systems',
  },
  {
    icon: Database,
    title: 'Data Backup & Security',
    description:
      'Automated backup solutions, firewall configuration, and endpoint protection to safeguard your critical business data.',
    slug: 'security-systems',
  },
  {
    icon: Globe,
    title: 'Website Design & Development',
    description:
      'Modern, responsive websites and web applications that establish your digital presence and drive customer engagement.',
    slug: 'digital-presence',
  },
  {
    icon: Target,
    title: 'IT Consultancy & Strategy',
    description:
      'Expert guidance on technology roadmaps, digital transformation, and IT investments aligned with your business goals.',
    slug: 'digital-presence',
  },
];

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Analysis',
    icon: Search,
    description: 'We assess your current IT environment, identify gaps, and understand your business needs.',
  },
  {
    num: '02',
    title: 'Planning',
    icon: ClipboardList,
    description: 'A tailored solution is designed with clear scope, timeline, and budget aligned to your goals.',
  },
  {
    num: '03',
    title: 'Implementation',
    icon: Wrench,
    description: 'Our engineers install, configure, and deploy systems with minimal disruption to operations.',
  },
  {
    num: '04',
    title: 'Support',
    icon: LifeBuoy,
    description: 'Ongoing assistance and rapid troubleshooting to keep everything running smoothly.',
  },
  {
    num: '05',
    title: 'Maintenance',
    icon: RefreshCw,
    description: 'Regular check-ups, updates, and optimizations for long-term performance and security.',
  },
];

/* ───────────────────── Sub-Components ───────────────────── */

function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  className = '',
}: {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <AnimatedSection className={`text-center max-w-3xl mx-auto mb-16 ${className}`}>
      {badge && (
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand text-sm font-medium mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-brand" />
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">
        {title}{' '}
        {highlight && <span className="text-gradient-green">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}

/* ───────────────────── Main Component ───────────────────── */

export default function ServicesPage() {
  const { navigate } = useNavigation();

  const navigateToService = (slug: string) => {
    navigate('service-detail', { slug });
  };

  return (
    <div className="overflow-hidden">
      {/* ================================================================ */}
      {/* SECTION 1: PAGE HERO                                             */}
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb */}
          <AnimatedSection direction="none" delay={0.1}>
            <nav className="flex items-center justify-center gap-2 text-sm text-white/70 mb-8">
              <button
                onClick={() => navigate('home')}
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </button>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">Services</span>
            </nav>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.15}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
              Our Services &{' '}
              <span className="text-brand-200">Solutions</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.25}>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              Comprehensive IT services designed for growing businesses — from 
              infrastructure setup to digital strategy.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 2: SERVICE CATEGORIES OVERVIEW                            */}
      {/* ================================================================ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Service Categories"
            title="Three Pillars of"
            highlight="Our Expertise"
            subtitle="We organize our services into three integrated categories, each addressing a core dimension of your business technology."
          />
          <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {CATEGORIES.map((cat) => (
              <StaggerItem key={cat.title}>
                <button
                  onClick={() => navigateToService(cat.slug)}
                  className="green-glow group w-full text-left rounded-2xl border border-brand-50 bg-white p-8 lg:p-10 transition-all duration-300 hover:border-brand-200 hover:-translate-y-1 h-full"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 border border-brand-100 flex items-center justify-center mb-6 group-hover:from-brand group-hover:to-brand-light group-hover:border-brand transition-all duration-300">
                    <cat.icon className="w-8 h-8 text-brand group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-brand transition-colors duration-300">
                    {cat.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {cat.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-brand font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                    Explore Category
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </button>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 3: ALL SERVICES GRID                                      */}
      {/* ================================================================ */}
      <section className="py-20 lg:py-28 bg-brand-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Full Service List"
            title="Everything We"
            highlight="Offer"
            subtitle="A detailed look at each of our services. Click any service to learn more about what's included."
          />
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {ALL_SERVICES.map((service) => (
              <StaggerItem key={service.title}>
                <div className="green-glow group rounded-2xl border border-brand-50 bg-white p-6 lg:p-8 transition-all duration-300 hover:border-brand-100 hover:-translate-y-1 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center mb-5 group-hover:bg-brand group-hover:border-brand transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-brand group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                    {service.description}
                  </p>
                  <div className="mt-5 pt-5 border-t border-brand-50">
                    <button
                      onClick={() => navigateToService(service.slug)}
                      className="inline-flex items-center gap-1.5 text-brand font-semibold text-sm hover:gap-3 transition-all duration-300 group/btn"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 4: OUR PROCESS                                            */}
      {/* ================================================================ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="How We Work"
            title="Our Engagement"
            highlight="Process"
            subtitle="A proven 5-step methodology that ensures every project is delivered with clarity, quality, and care."
          />
          <div className="max-w-5xl mx-auto">
            {/* Desktop: horizontal timeline */}
            <div className="hidden lg:block relative">
              {/* Connecting line */}
              <div className="absolute top-[3.25rem] left-0 right-0 h-0.5 bg-brand-100" />
              <StaggerContainer
                className="grid grid-cols-5 gap-4"
                staggerDelay={0.15}
              >
                {PROCESS_STEPS.map((step) => (
                  <StaggerItem key={step.num}>
                    <div className="group text-center relative">
                      {/* Circle node */}
                      <div className="w-16 h-16 rounded-full bg-white border-2 border-brand-100 flex items-center justify-center mx-auto mb-5 relative z-10 group-hover:bg-brand group-hover:border-brand transition-all duration-300 shadow-sm">
                        <step.icon className="w-6 h-6 text-brand group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-brand transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Mobile: vertical timeline */}
            <div className="lg:hidden">
              <StaggerContainer className="relative pl-8" staggerDelay={0.12}>
                {/* Vertical line */}
                <div className="absolute left-[1.125rem] top-2 bottom-2 w-0.5 bg-brand-100" />
                {PROCESS_STEPS.map((step) => (
                  <StaggerItem key={step.num}>
                    <div className="group relative pb-10 last:pb-0">
                      {/* Circle node */}
                      <div className="absolute -left-8 top-0 w-9 h-9 rounded-full bg-white border-2 border-brand-100 flex items-center justify-center z-10 group-hover:bg-brand group-hover:border-brand transition-all duration-300 shadow-sm">
                        <step.icon className="w-4 h-4 text-brand group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-base font-bold text-foreground mb-1.5 group-hover:text-brand transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 5: CTA                                                   */}
      {/* ================================================================ */}
      <section className="py-20 lg:py-28 bg-brand-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative rounded-3xl overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand to-brand-light animate-gradient" />
              {/* Dot pattern */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    'radial-gradient(circle, #ffffff 1px, transparent 1px)',
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
                  Not Sure What{' '}
                  <span className="text-brand-200">You Need?</span>
                </h2>
                <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
                  Book a free IT assessment with our team. We&apos;ll evaluate your 
                  current setup, identify gaps, and recommend the right solutions 
                  tailored to your business and budget.
                </p>
                <Button
                  size="lg"
                  onClick={() => navigate('contact')}
                  className="bg-white text-brand-dark hover:bg-brand-50 shadow-xl shadow-black/10 hover:shadow-black/20 transition-all duration-300 rounded-xl px-8 py-6 text-base font-semibold group"
                >
                  Book a Free Assessment
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}