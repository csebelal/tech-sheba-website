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
  Store,
  Building2,
  Factory,
  Rocket,
  GraduationCap,
  HeartPulse,
  Wifi,
  Camera,
  Phone,
  Globe,
  Headphones,
  KeyRound,
  Database,
  MonitorCheck,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react';

/* ───────────────────── Types ───────────────────── */

interface Industry {
  icon: LucideIcon;
  title: string;
  description: string;
  services: string[];
}

/* ───────────────────── Data Constants ───────────────────── */

const INDUSTRIES: Industry[] = [
  {
    icon: Store,
    title: 'SMBs & Small Businesses',
    description:
      'Retail shops, restaurants, clinics, and small offices that need affordable, reliable IT.',
    services: [
      'Wi-Fi & network setup',
      'CCTV surveillance',
      'POS system integration',
      'Website design',
      'IT support contracts',
    ],
  },
  {
    icon: Building2,
    title: 'Corporate Offices',
    description:
      'Mid-to-large offices requiring structured networks, PBX, and professional IT management.',
    services: [
      'Structured cabling & networking',
      'PBX phone systems',
      'Access control systems',
      'Data backup solutions',
      'Dedicated IT support',
    ],
  },
  {
    icon: Factory,
    title: 'Shops & Factories',
    description:
      'Manufacturing and retail environments needing POS systems, surveillance, and network connectivity.',
    services: [
      'Industrial Wi-Fi coverage',
      'Multi-camera CCTV systems',
      'Inventory network integration',
      'Access control for restricted zones',
      'Maintenance & support plans',
    ],
  },
  {
    icon: Rocket,
    title: 'Startups & Tech Companies',
    description:
      'New businesses needing scalable infrastructure, cloud setup, and digital presence.',
    services: [
      'Cloud infrastructure setup',
      'Scalable network design',
      'Website & web app development',
      'IT strategy consulting',
      'Growth-ready IT roadmapping',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Educational Institutions',
    description:
      'Schools, training centers, and universities needing lab networks, Wi-Fi, and security.',
    services: [
      'Campus-wide Wi-Fi',
      'Computer lab networking',
      'CCTV & access control',
      'Content filtering & security',
      'Affordable maintenance plans',
    ],
  },
  {
    icon: HeartPulse,
    title: 'Healthcare & Clinics',
    description:
      'Medical facilities requiring secure data systems, surveillance, and reliable connectivity.',
    services: [
      'Secure patient data networks',
      'CCTV for premises security',
      'Reliable backup systems',
      'Compliance-ready IT infrastructure',
      '24/7 emergency support',
    ],
  },
];

const SPOTLIGHT_CHALLENGES = [
  'Fragmented IT systems across departments causing communication breakdowns',
  'Unreliable network connectivity affecting daily operations and productivity',
  'No centralized phone system, making client communication inefficient',
  'Data stored on individual computers with no backup or disaster recovery plan',
  'Security gaps with no CCTV or access control protecting sensitive areas',
];

const SPOTLIGHT_SOLUTIONS = [
  'Structured Cat6 cabling with enterprise switches for seamless connectivity',
  'IP PBX phone system with auto-attendant and call routing for professional communications',
  'Automated daily backups with encrypted cloud storage and disaster recovery protocols',
  'CCTV surveillance with remote monitoring and biometric access control for all entry points',
  'Dedicated IT support contract with 4-hour emergency response SLA',
];

const SPOTLIGHT_OUTCOMES = [
  { label: 'Downtime Reduced', value: '85%' },
  { label: 'Productivity Gain', value: '40%' },
  { label: 'Support Response', value: '<4hrs' },
  { label: 'Data Protected', value: '100%' },
];

/* ───────────────────── Main Component ───────────────────── */

export default function IndustriesPage() {
  const { navigate } = useNavigation();

  return (
    <div className="overflow-hidden">
      {/* ================================================================ */}
      {/* SECTION 1: PAGE HERO                                              */}
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
              <span className="text-white font-medium">Industries</span>
            </nav>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.15}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
              Industries We{' '}
              <span className="text-brand-200">Serve</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.25}>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              From small retail shops to corporate offices, educational institutions to healthcare
              facilities — we deliver tailored IT solutions for diverse Bangladeshi businesses
              that understand local needs and challenges.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 2: INDUSTRIES GRID                                       */}
      {/* ================================================================ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand text-sm font-medium mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-brand" />
              Our Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">
              IT Solutions for{' '}
              <span className="text-gradient-green">Every Sector</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              We understand that every industry has unique technology needs. Here&apos;s how we serve different business sectors across Bangladesh.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {INDUSTRIES.map((industry) => (
              <StaggerItem key={industry.title}>
                <div className="green-glow group rounded-2xl border border-brand-50 bg-white p-6 lg:p-8 transition-all duration-300 hover:border-brand-200 hover:-translate-y-1 h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center mb-5 group-hover:bg-brand group-hover:border-brand transition-colors duration-300">
                    <industry.icon className="w-7 h-7 text-brand group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-brand transition-colors duration-300">
                    {industry.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-5">
                    {industry.description}
                  </p>

                  {/* Services list */}
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {industry.services.map((service) => (
                      <li key={service} className="flex items-center gap-2.5 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0" />
                        <span className="text-foreground/80">{service}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More link */}
                  <div className="pt-5 border-t border-brand-50">
                    <button
                      onClick={() => navigate('contact')}
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
      {/* SECTION 3: INDUSTRY SPOTLIGHT                                     */}
      {/* ================================================================ */}
      <section className="py-20 lg:py-28 bg-brand-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-brand-100 text-brand text-sm font-medium mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-brand" />
              Industry Spotlight
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">
              How We Help{' '}
              <span className="text-gradient-green">Corporate Offices</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              A closer look at how Tech Sheba transforms IT for mid-to-large corporate offices in Bangladesh.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left column: Challenges & Solutions */}
            <div className="space-y-10">
              {/* Challenges */}
              <AnimatedSection direction="right">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center">
                    <span className="text-lg">⚠️</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Challenges They Face</h3>
                </div>
                <ul className="space-y-3 pl-1">
                  {SPOTLIGHT_CHALLENGES.map((challenge, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-300 flex-shrink-0" />
                      <span className="text-foreground/80 text-sm leading-relaxed">{challenge}</span>
                    </motion.li>
                  ))}
                </ul>
              </AnimatedSection>

              {/* How Tech Sheba Helps */}
              <AnimatedSection direction="right" delay={0.15}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-brand" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">How Tech Sheba Helps</h3>
                </div>
                <ul className="space-y-3 pl-1">
                  {SPOTLIGHT_SOLUTIONS.map((solution, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm leading-relaxed font-medium">{solution}</span>
                    </motion.li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>

            {/* Right column: Visual illustration area */}
            <AnimatedSection direction="left" delay={0.2}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-brand to-brand-light p-1">
                  <div className="bg-white rounded-[1.375rem] p-8 lg:p-10">
                    {/* Stats grid */}
                    <h3 className="text-xl font-bold text-foreground mb-8">Key Outcomes</h3>
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      {SPOTLIGHT_OUTCOMES.map((outcome, i) => (
                        <motion.div
                          key={outcome.label}
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          className="bg-brand-50 border border-brand-100 rounded-xl p-5 text-center"
                        >
                          <div className="text-3xl font-bold text-brand mb-1">{outcome.value}</div>
                          <div className="text-sm text-muted-foreground font-medium">{outcome.label}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Service tags */}
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Services Delivered</h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          { icon: Wifi, label: 'Network' },
                          { icon: Phone, label: 'PBX' },
                          { icon: Camera, label: 'CCTV' },
                          { icon: KeyRound, label: 'Access Control' },
                          { icon: Database, label: 'Backup' },
                          { icon: Headphones, label: 'Support' },
                        ].map((tag) => (
                          <span
                            key={tag.label}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-50 border border-brand-100 text-brand text-xs font-medium"
                          >
                            <tag.icon className="w-3.5 h-3.5" />
                            {tag.label}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial-like quote */}
                    <div className="bg-brand-50/60 border border-brand-100 rounded-xl p-5">
                      <p className="text-foreground/80 text-sm leading-relaxed italic">
                        &ldquo;Tech Sheba completely transformed our office IT. Our network is faster, 
                        our phone system is professional, and we finally have peace of mind with 
                        proper backups and security. Their ongoing support has been exceptional.&rdquo;
                      </p>
                      <div className="mt-3 flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-brand text-white flex items-center justify-center text-sm font-bold">
                          AK
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-foreground">Ahmed Kamal</div>
                          <div className="text-xs text-muted-foreground">Operations Director, Dhaka</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating accent */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-brand-100/60 border border-brand-200/40 hidden lg:block"
                />
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                  className="absolute -bottom-4 -left-4 w-14 h-14 rounded-xl bg-brand-50 border border-brand-100 hidden lg:block"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 4: CTA                                                    */}
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
              <motion.div
                animate={{ y: [0, -6, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
                className="absolute top-1/2 left-[5%] w-12 h-12 rounded-lg border border-white/10 bg-white/[0.04] hidden sm:block"
              />

              <div className="relative px-6 sm:px-10 lg:px-16 py-14 sm:py-16 lg:py-20 text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
                  Your Industry,{' '}
                  <span className="text-brand-200">Our Expertise</span>
                </h2>
                <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
                  No matter your industry, we have the experience and solutions to support your 
                  technology needs. Let&apos;s discuss how Tech Sheba can help your business thrive.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    size="lg"
                    onClick={() => navigate('contact')}
                    className="bg-white text-brand-dark hover:bg-brand-50 shadow-xl shadow-black/10 hover:shadow-black/20 transition-all duration-300 rounded-xl px-8 py-6 text-base font-semibold group"
                  >
                    Get a Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => navigate('services')}
                    className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 rounded-xl px-8 py-6 text-base font-semibold"
                  >
                    View Our Services
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