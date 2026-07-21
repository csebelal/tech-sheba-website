'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigation } from '@/lib/store';
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
  CountUp,
} from '@/components/layout/AnimatedSection';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Shield,
  Wifi,
  Phone,
  Headphones,
  Lock,
  Camera,
  KeyRound,
  Database,
  Globe,
  Lightbulb,
  Building2,
  Store,
  Rocket,
  Users,
  Clock,
  DollarSign,
  CheckCircle2,
  Search,
  ClipboardList,
  Wrench,
  LifeBuoy,
  RefreshCw,
  Quote,
  Server,
  Network,
  Monitor,
  Cpu,
  ChevronRight,
  Zap,
  Target,
  Eye,
  Briefcase,
  TrendingUp,
  Star,
  ArrowDown,
  Hexagon,
  Triangle,
  Circle,
} from 'lucide-react';

/* ───────────────────── Data Constants ───────────────────── */

const HERO_STATS = [
  { value: 150, suffix: '+', label: 'Projects Completed' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 50, suffix: '+', label: 'Active Clients' },
  { value: 5, suffix: '+', label: 'Years Experience' },
];

const PILLAR_CARDS = [
  {
    icon: CheckCircle2,
    title: 'Reliable',
    description:
      'Consistent, stable, and always-on IT infrastructure that keeps your business running without interruption or downtime.',
  },
  {
    icon: Shield,
    title: 'Secure',
    description:
      'Multi-layered security — from physical surveillance to digital protection — so your data and premises stay safe.',
  },
  {
    icon: DollarSign,
    title: 'Cost-Effective',
    description:
      'Enterprise-grade solutions tailored for SMB budgets. No unnecessary expenses — just smart, efficient technology investments.',
  },
];

const SERVICE_CATEGORIES = [
  {
    icon: Server,
    title: 'Infrastructure & Connectivity',
    description:
      'Network setup, PBX systems, and ongoing IT maintenance to keep your operations online and efficient.',
    slug: 'network-connectivity',
  },
  {
    icon: Lock,
    title: 'Security & Access',
    description:
      'CCTV surveillance, access control systems, and data backup solutions for complete physical and digital protection.',
    slug: 'security-systems',
  },
  {
    icon: Lightbulb,
    title: 'Digital Strategy',
    description:
      'Professional website development and strategic IT consultancy to grow your digital presence and business.',
    slug: 'digital-presence',
  },
];

const INFRA_SERVICES = [
  {
    icon: Wifi,
    title: 'Network & Wi-Fi Setup',
    description:
      'Structured cabling, enterprise-grade Wi-Fi, and network optimization designed for your office layout and bandwidth needs.',
    slug: 'network-connectivity',
  },
  {
    icon: Phone,
    title: 'Phone & PBX Systems',
    description:
      'Modern IP PBX and intercom solutions for seamless internal and external communication across your organization.',
    slug: 'network-connectivity',
  },
  {
    icon: Headphones,
    title: 'IT Support & Maintenance',
    description:
      'Proactive monitoring, rapid troubleshooting, and regular maintenance to prevent issues before they impact your business.',
    slug: 'it-support',
  },
];

const SECURITY_SERVICES = [
  {
    icon: Camera,
    title: 'CCTV & Surveillance',
    description:
      'High-definition IP cameras, remote viewing, and intelligent recording systems for 24/7 premises monitoring.',
    slug: 'security-systems',
  },
  {
    icon: KeyRound,
    title: 'Access Control Systems',
    description:
      'Biometric, card-based, and keypad entry systems to control and monitor who enters your premises and when.',
    slug: 'security-systems',
  },
  {
    icon: Database,
    title: 'Data Backup & System Security',
    description:
      'Automated backup solutions, firewall configuration, and endpoint protection to safeguard your critical business data.',
    slug: 'security-systems',
  },
];

const DIGITAL_SERVICES = [
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

const SECTOR_CARDS = [
  {
    icon: Briefcase,
    title: 'SMBs',
    description:
      'Affordable, scalable IT solutions that grow with your business — from basic networking to full digital infrastructure.',
  },
  {
    icon: Building2,
    title: 'Corporate Offices',
    description:
      'Enterprise-grade networks, multi-floor connectivity, and integrated security systems for professional workspaces.',
  },
  {
    icon: Store,
    title: 'Shops & Factories',
    description:
      'Point-of-sale networking, production-floor connectivity, and surveillance systems tailored for retail and manufacturing.',
  },
  {
    icon: Rocket,
    title: 'Startups',
    description:
      'Lean IT setups, cloud-ready infrastructure, and scalable foundations that let you focus on product and growth.',
  },
];

const ADVANTAGES = [
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Skilled professionals with deep expertise across IT infrastructure, security, and digital solutions.',
  },
  {
    icon: Network,
    title: 'Comprehensive Solutions',
    description: 'End-to-end IT services under one roof — from cabling and cameras to websites and strategy.',
  },
  {
    icon: LifeBuoy,
    title: 'Reliable Support',
    description: 'Dedicated support team with fast response times and proactive issue resolution when you need it most.',
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description:
      'Transparent, competitive rates designed for SMB budgets — no hidden fees, no surprises, just honest pricing.',
  },
  {
    icon: Zap,
    title: 'Quick Turnaround',
    description:
      'Efficient project delivery with clear timelines and minimal disruption to your daily business operations.',
  },
];

const LIFECYCLE_STEPS = [
  {
    num: '01',
    title: 'Analysis',
    description: 'We assess your current IT environment, identify gaps, and understand your business needs.',
  },
  {
    num: '02',
    title: 'Planning',
    description: 'A tailored solution is designed with clear scope, timeline, and budget aligned to your goals.',
  },
  {
    num: '03',
    title: 'Implementation',
    description: 'Our engineers install, configure, and deploy systems with minimal disruption to operations.',
  },
  {
    num: '04',
    title: 'Support',
    description: 'Ongoing assistance and rapid troubleshooting to keep everything running smoothly.',
  },
  {
    num: '05',
    title: 'Maintenance',
    description: 'Regular check-ups, updates, and optimizations to ensure long-term performance and security.',
  },
];

const TESTIMONIALS = [
  {
    quote:
      'Tech Sheba set up our entire office network and CCTV system in just one week. Their team was professional, punctual, and the pricing was very fair. We have not had a single network issue since.',
    name: 'Arif Rahman',
    title: 'Operations Manager',
    company: 'Rahman & Sons Trading',
    rating: 5,
  },
  {
    quote:
      'We needed a reliable IT partner for our three retail outlets. Tech Sheba handled everything — from Wi-Fi to surveillance — and their ongoing support has been excellent. Highly recommend for any growing business.',
    name: 'Fatima Begum',
    title: 'Managing Director',
    company: 'StyleMart BD',
    rating: 5,
  },
  {
    quote:
      'As a startup, we needed cost-effective IT that could scale. Tech Sheba delivered exactly that — a lean setup with room to grow. Their consultancy helped us make the right technology decisions from day one.',
    name: 'Sakib Hossain',
    title: 'Co-Founder',
    company: 'NextGen Solutions',
    rating: 4,
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
          <Circle className="w-1.5 h-1.5 fill-brand" />
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

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? 'text-yellow-400 fill-yellow-400'
              : 'text-gray-200 fill-gray-200'
          }`}
        />
      ))}
    </div>
  );
}

/* ───────────────────── Main Component ───────────────────── */

export default function HomePage() {
  const { navigate } = useNavigation();
  const servicesSectionRef = useRef<HTMLDivElement>(null);

  const scrollToServices = () => {
    servicesSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const navigateToService = (slug: string) => {
    navigate('service-detail', { slug });
  };

  return (
    <div className="overflow-hidden">
      {/* ================================================================ */}
      {/* SECTION 1: HERO                                                  */}
      {/* ================================================================ */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
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
        {/* Animated geometric shapes */}
        <motion.div
          animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-28 left-[8%] w-20 h-20 rounded-2xl border border-white/10 bg-white/5"
        />
        <motion.div
          animate={{ y: [0, 14, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-44 right-[12%] w-28 h-28 rounded-full border border-white/10 bg-white/5"
        />
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-36 left-[18%] w-14 h-14 rounded-xl border border-white/10 bg-white/[0.07]"
        />
        <motion.div
          animate={{ y: [0, 16, 0], x: [0, 8, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute bottom-52 right-[22%] w-24 h-24 rounded-full border border-white/10 bg-white/5"
        />
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute top-60 left-[42%] w-10 h-10 rounded-lg border border-white/10 bg-white/[0.06]"
        />
        {/* Hexagon shape */}
        <motion.div
          animate={{ y: [0, -14, 0], rotate: [0, 30, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute bottom-40 right-[8%] hidden lg:block"
        >
          <Hexagon className="w-16 h-16 text-white/[0.07]" />
        </motion.div>
        {/* Triangle shape */}
        <motion.div
          animate={{ y: [0, 10, 0], rotate: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
          className="absolute top-36 left-[65%] hidden lg:block"
        >
          <Triangle className="w-12 h-12 text-white/[0.06]" />
        </motion.div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <AnimatedSection direction="none" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
              <span className="text-sm font-medium text-white/90">
                Trusted IT Partner in Bangladesh
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.15}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6 max-w-4xl">
              Reliable IT Solutions{' '}
              <span className="text-brand-200">for Growing</span>{' '}
              Businesses
            </h1>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.25}>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl">
              From office networks to cybersecurity, Tech Sheba handles the
              technology behind your business — so you can focus on running it.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.35}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button
                size="lg"
                onClick={() => navigate('contact')}
                className="bg-white text-brand-dark hover:bg-brand-50 shadow-xl shadow-black/10 hover:shadow-black/20 transition-all duration-300 rounded-xl px-8 py-6 text-base font-semibold group"
              >
                Get a Free IT Assessment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <button
                onClick={scrollToServices}
                className="flex items-center gap-2 text-white/90 font-semibold hover:text-white transition-colors duration-300 group py-6"
              >
                See what we handle
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </AnimatedSection>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                    <CountUp end={stat.value} suffix={stat.suffix} duration={2.5} />
                  </div>
                  <p className="text-sm text-white/70 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 2: YOUR PARTNER IN BUSINESS STABILITY                     */}
      {/* ================================================================ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Why Tech Sheba"
            title="Your Partner in"
            highlight="Business Stability"
            subtitle="We build, secure, and maintain the IT foundation that keeps your operations running smoothly — day after day."
          />
          <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {PILLAR_CARDS.map((card) => (
              <StaggerItem key={card.title}>
                <div className="green-glow group relative rounded-2xl border border-brand-50 bg-white p-8 transition-all duration-300 hover:border-brand-100 hover:-translate-y-1 h-full">
                  {/* Green glow accent on hover */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-brand to-transparent rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="w-14 h-14 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center mb-6 group-hover:bg-brand group-hover:border-brand transition-colors duration-300">
                    <card.icon className="w-7 h-7 text-brand group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 3: MISSION & VISION                                      */}
      {/* ================================================================ */}
      <section className="py-20 lg:py-28 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Purpose"
            title="Mission &"
            highlight="Vision"
          />
          <StaggerContainer className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <StaggerItem>
              <div className="green-glow rounded-2xl border border-brand-100 bg-white p-8 lg:p-10 h-full relative overflow-hidden">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-50 to-transparent rounded-bl-[3rem]" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-brand flex items-center justify-center mb-6">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    To deliver simple, secure, and smart IT solutions that allow
                    businesses to focus on their growth.
                  </p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="green-glow rounded-2xl border border-brand-100 bg-white p-8 lg:p-10 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-50 to-transparent rounded-bl-[3rem]" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-brand flex items-center justify-center mb-6">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    To become the most trusted IT partner in Bangladesh for
                    modern enterprises.
                  </p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 4: A HOLISTIC ECOSYSTEM                                  */}
      {/* ================================================================ */}
      <section
        ref={servicesSectionRef}
        className="py-20 lg:py-28 bg-white scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="What We Offer"
            title="A Holistic"
            highlight="Ecosystem"
            subtitle="Three integrated service categories covering every aspect of your business technology needs."
          />
          <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {SERVICE_CATEGORIES.map((cat) => (
              <StaggerItem key={cat.title}>
                <button
                  onClick={() => navigateToService(cat.slug)}
                  className="green-glow group w-full text-left rounded-2xl border border-brand-50 bg-white p-8 transition-all duration-300 hover:border-brand-200 hover:-translate-y-1 h-full"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 border border-brand-100 flex items-center justify-center mb-6 group-hover:from-brand group-hover:to-brand-light group-hover:border-brand transition-all duration-300">
                    <cat.icon className="w-8 h-8 text-brand group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-brand transition-colors duration-300">
                    {cat.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {cat.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-brand font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                    Explore Services
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </button>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 5: CORE INFRASTRUCTURE & CONNECTIVITY                     */}
      {/* ================================================================ */}
      <section className="py-20 lg:py-28 bg-brand-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Infrastructure"
            title="Core Infrastructure &"
            highlight="Connectivity"
            subtitle="The backbone of your business operations — built for speed, reliability, and seamless communication."
          />
          <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {INFRA_SERVICES.map((svc) => (
              <StaggerItem key={svc.title}>
                <div className="green-glow group rounded-2xl border border-brand-50 bg-white p-8 transition-all duration-300 hover:border-brand-100 hover:-translate-y-1 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center mb-6 group-hover:bg-brand group-hover:border-brand transition-colors duration-300">
                    <svc.icon className="w-7 h-7 text-brand group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    {svc.description}
                  </p>
                  <button
                    onClick={() => navigateToService(svc.slug)}
                    className="inline-flex items-center gap-1.5 text-brand font-semibold text-sm hover:gap-3 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 6: SECURING YOUR ASSETS                                  */}
      {/* ================================================================ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Security Solutions"
            title="Securing Your Physical &"
            highlight="Digital Assets"
            subtitle="One Partner, Both Sides of Security"
          />
          <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {SECURITY_SERVICES.map((svc) => (
              <StaggerItem key={svc.title}>
                <div className="green-glow group rounded-2xl border border-brand-50 bg-white p-8 transition-all duration-300 hover:border-brand-100 hover:-translate-y-1 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center mb-6 group-hover:bg-brand group-hover:border-brand transition-colors duration-300">
                    <svc.icon className="w-7 h-7 text-brand group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    {svc.description}
                  </p>
                  <button
                    onClick={() => navigateToService(svc.slug)}
                    className="inline-flex items-center gap-1.5 text-brand font-semibold text-sm hover:gap-3 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 7: DIGITAL PRESENCE & STRATEGIC PLANNING                 */}
      {/* ================================================================ */}
      <section className="py-20 lg:py-28 bg-brand-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Digital Services"
            title="Digital Presence &"
            highlight="Strategic Planning"
            subtitle="Build your brand online and make smarter technology decisions with expert guidance."
          />
          <StaggerContainer className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {DIGITAL_SERVICES.map((svc) => (
              <StaggerItem key={svc.title}>
                <div className="green-glow group rounded-2xl border border-brand-50 bg-white p-8 lg:p-10 transition-all duration-300 hover:border-brand-100 hover:-translate-y-1 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center mb-6 group-hover:bg-brand group-hover:border-brand transition-colors duration-300">
                    <svc.icon className="w-7 h-7 text-brand group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    {svc.description}
                  </p>
                  <button
                    onClick={() => navigateToService(svc.slug)}
                    className="inline-flex items-center gap-1.5 text-brand font-semibold text-sm hover:gap-3 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 8: TAILORED SOLUTIONS FOR EVERY SECTOR                   */}
      {/* ================================================================ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Industries We Serve"
            title="Tailored Solutions for"
            highlight="Every Sector"
            subtitle="Whether you run a small shop or a corporate office, our solutions adapt to your industry and scale."
          />
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
            {SECTOR_CARDS.map((sector) => (
              <StaggerItem key={sector.title}>
                <div className="green-glow group rounded-2xl border border-brand-50 bg-white p-6 lg:p-7 transition-all duration-300 hover:border-brand-200 hover:-translate-y-1 h-full text-center">
                  <div className="w-14 h-14 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center mx-auto mb-5 group-hover:bg-brand group-hover:border-brand transition-colors duration-300">
                    <sector.icon className="w-7 h-7 text-brand group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {sector.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {sector.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <AnimatedSection className="text-center mt-10">
            <button
              onClick={() => navigate('industries')}
              className="inline-flex items-center gap-2 text-brand font-semibold hover:text-brand-dark transition-colors duration-300 group"
            >
              See how we help
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 9: THE TECH SHEBA ADVANTAGE                              */}
      {/* ================================================================ */}
      <section className="py-20 lg:py-28 bg-brand-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Why Choose Us"
            title="The Tech Sheba"
            highlight="Advantage"
            subtitle="What sets us apart from the rest — and why businesses across Bangladesh trust us."
          />
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {ADVANTAGES.map((item) => (
              <StaggerItem key={item.title}>
                <div className="green-glow group rounded-2xl border border-brand-50 bg-white p-7 transition-all duration-300 hover:border-brand-100 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:border-brand transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-brand group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 10: OUR ENGAGEMENT LIFECYCLE                             */}
      {/* ================================================================ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="How We Work"
            title="Our Engagement"
            highlight="Lifecycle"
            subtitle="A proven, structured approach that ensures quality delivery from start to finish."
          />
          <div className="max-w-5xl mx-auto">
            {/* Desktop: horizontal timeline */}
            <div className="hidden lg:block relative">
              {/* Connecting line */}
              <div className="absolute top-[3.25rem] left-0 right-0 h-0.5 bg-brand-100" />
              <div
                className="absolute top-[3.25rem] left-0 h-0.5 bg-gradient-to-r from-brand to-brand-accent transition-all duration-1000"
                style={{ width: '0%' }}
              />
              <StaggerContainer
                className="grid grid-cols-5 gap-4"
                staggerDelay={0.15}
              >
                {LIFECYCLE_STEPS.map((step, i) => (
                  <StaggerItem key={step.num}>
                    <div className="group text-center relative">
                      {/* Circle node */}
                      <div className="w-16 h-16 rounded-full bg-white border-2 border-brand-100 flex items-center justify-center mx-auto mb-5 relative z-10 group-hover:bg-brand group-hover:border-brand transition-all duration-300 shadow-sm">
                        <span className="text-sm font-bold text-brand group-hover:text-white transition-colors duration-300">
                          {step.num}
                        </span>
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
                {LIFECYCLE_STEPS.map((step) => (
                  <StaggerItem key={step.num}>
                    <div className="group relative pb-10 last:pb-0">
                      {/* Circle node */}
                      <div className="absolute -left-8 top-0 w-9 h-9 rounded-full bg-white border-2 border-brand-100 flex items-center justify-center z-10 group-hover:bg-brand group-hover:border-brand transition-all duration-300 shadow-sm">
                        <span className="text-xs font-bold text-brand group-hover:text-white transition-colors duration-300">
                          {step.num}
                        </span>
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
      {/* SECTION 11: TESTIMONIALS / SOCIAL PROOF                          */}
      {/* ================================================================ */}
      <section className="py-20 lg:py-28 bg-brand-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Client Stories"
            title="Trusted by Businesses"
            highlight="Across Bangladesh"
            subtitle="Real feedback from real clients who rely on Tech Sheba every day."
          />
          <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {TESTIMONIALS.map((t) => (
              <StaggerItem key={t.name}>
                <div className="green-glow rounded-2xl border border-brand-50 bg-white p-8 h-full flex flex-col">
                  <Quote className="w-8 h-8 text-brand-200 mb-4 shrink-0" />
                  <p className="text-foreground/90 leading-relaxed mb-6 flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="border-t border-brand-50 pt-5">
                    <StarRating rating={t.rating} />
                    <div className="mt-3">
                      <p className="font-semibold text-foreground">{t.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {t.title}, {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 12: FINAL CTA                                            */}
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
                  Let&apos;s Grow Your Business{' '}
                  <span className="text-brand-200">With Technology</span>
                </h2>
                <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
                  Ready to transform your IT infrastructure? Get in touch with
                  our team for a free consultation and discover how we can help.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                  <Button
                    size="lg"
                    onClick={() => navigate('contact')}
                    className="bg-white text-brand-dark hover:bg-brand-50 shadow-xl shadow-black/10 hover:shadow-black/20 transition-all duration-300 rounded-xl px-8 py-6 text-base font-semibold group"
                  >
                    Schedule a Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>

                {/* Contact details */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-white/80 text-sm">
                  <a
                    href="tel:01980884541"
                    className="flex items-center gap-2 hover:text-white transition-colors duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    01980884541
                  </a>
                  <a
                    href="mailto:hello@techsheba.net"
                    className="flex items-center gap-2 hover:text-white transition-colors duration-300"
                  >
                    <Monitor className="w-4 h-4" />
                    hello@techsheba.net
                  </a>
                  <span className="flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    Dhaka, Bangladesh
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}