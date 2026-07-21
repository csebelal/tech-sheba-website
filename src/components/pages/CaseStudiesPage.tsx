'use client';

import { motion } from 'framer-motion';
import { useNavigation } from '@/lib/store';
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
  CountUp,
} from '@/components/layout/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  ChevronRight,
  Building2,
  ShoppingBag,
  Rocket,
  GraduationCap,
  HeartPulse,
  Factory,
  CheckCircle2,
  Clock,
  TrendingUp,
  ShieldCheck,
  Users,
  MonitorSmartphone,
  Wifi,
  Camera,
  Phone,
  Database,
  Globe,
  Headphones,
  Zap,
  Award,
} from 'lucide-react';

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ Data Constants â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

const FEATURED_STUDY = {
  client: 'Dhaka Garment Export Ltd.',
  industry: 'Garment Manufacturing',
  location: 'Dhaka, Bangladesh',
  challenge:
    'Frequent network outages disrupting production schedules, no backup systems leaving critical data vulnerable, and outdated security infrastructure posing serious operational risks.',
  solution:
    'Complete IT overhaul â€” full network redesign with redundant connections, 32-camera CCTV system, automated data backup with cloud sync, PBX phone system for inter-floor communication, and 24/7 monitoring.',
  results: [
    { label: 'Zero downtime in 8 months', icon: Clock },
    { label: '40% faster operations', icon: TrendingUp },
    { label: '100% data protection', icon: ShieldCheck },
  ],
  services: ['Network Setup', 'CCTV', 'Data Backup', 'PBX', 'IT Support'],
};

const CASE_STUDIES = [
  {
    client: 'Meridian Corporate Tower',
    industry: 'Corporate Office',
    icon: Building2,
    challenge: 'Multiple tenant businesses sharing unreliable connectivity with no centralized phone system.',
    services: ['Network Setup', 'PBX', 'IT Support'],
    metric: '99.8% uptime achieved',
  },
  {
    client: 'Fresh Mart Chain',
    industry: 'Retail',
    icon: ShoppingBag,
    challenge: 'POS systems failing across 8 locations with no surveillance or centralized monitoring.',
    services: ['POS Network', 'CCTV', 'IT Support'],
    metric: '8 locations unified',
  },
  {
    client: 'Dhaka Tech Startup Hub',
    industry: 'Startup',
    icon: Rocket,
    challenge: 'Needed full IT infrastructure from scratch plus a professional web presence to attract investors.',
    services: ['Infrastructure', 'Website', 'Network', 'Support'],
    metric: 'Launch in 3 weeks',
  },
  {
    client: 'Green Valley School',
    industry: 'Education',
    icon: GraduationCap,
    challenge: 'No campus-wide Wi-Fi and outdated computer labs unable to support modern digital learning.',
    services: ['Campus Wi-Fi', 'Lab Setup', 'CCTV'],
    metric: '500+ devices connected',
  },
  {
    client: 'City Health Clinic',
    industry: 'Healthcare',
    icon: HeartPulse,
    challenge: 'Patient data at risk with no backup, poor network coverage, and no security surveillance.',
    services: ['Secure Network', 'CCTV', 'Data Backup'],
    metric: 'Full HIPAA compliance',
  },
];

const STATS = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Retention' },
  { value: 40, suffix: '%', label: 'Average Efficiency Gain' },
  { value: 4, suffix: '-Hour', label: 'Response Time' },
];

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ Service Icon Map â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

const SERVICE_ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  'Network Setup': Wifi,
  'Network': Wifi,
  'POS Network': MonitorSmartphone,
  CCTV: Camera,
  'Data Backup': Database,
  PBX: Phone,
  'IT Support': Headphones,
  Infrastructure: Zap,
  Website: Globe,
  'Campus Wi-Fi': Wifi,
  'Lab Setup': MonitorSmartphone,
  'Secure Network': ShieldCheck,
  Support: Headphones,
};

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ Sub-Components â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

function PageHero() {
  const { navigate } = useNavigation();

  return (
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
            <span className="text-white font-medium">Case Studies</span>
          </nav>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.15}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Case Studies &{' '}
            <span className="text-brand-200">Success Stories</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.25}>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            Real results for real Bangladeshi businesses. See how we&apos;ve transformed 
            IT infrastructure for companies across Dhaka and beyond.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

function FeaturedCaseStudy() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand text-sm font-medium mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-brand" />
            Featured Project
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">
            A Transformation in{' '}
            <span className="text-gradient-green">Dhaka&apos;s Garment Sector</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection>
          <div className="green-glow rounded-2xl border border-brand-50 bg-white overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Image placeholder area */}
              <div className="relative bg-gradient-to-br from-brand-50 via-brand-100/60 to-brand-200/40 min-h-[320px] lg:min-h-[520px] flex items-center justify-center p-8 lg:p-12">
                {/* Decorative grid pattern */}
                <div
                  className="absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #001F60 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />
                <div className="relative text-center">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-20 h-20 rounded-2xl bg-white/80 backdrop-blur-sm border border-brand-200 flex items-center justify-center mx-auto mb-6 shadow-lg"
                  >
                    <Factory className="w-10 h-10 text-brand" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-brand-dark mb-2">
                    {FEATURED_STUDY.client}
                  </h3>
                  <p className="text-brand font-medium">
                    {FEATURED_STUDY.industry} Â· {FEATURED_STUDY.location}
                  </p>
                  {/* Service tags inside image area */}
                  <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
                    {FEATURED_STUDY.services.map((service) => {
                      const SIcon = SERVICE_ICON_MAP[service] || Zap;
                      return (
                        <span
                          key={service}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-brand-100 text-brand-dark text-xs font-medium"
                        >
                          <SIcon className="w-3 h-3" />
                          {service}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Content area */}
              <div className="p-8 lg:p-12 xl:p-14 flex flex-col justify-center">
                {/* Client badge */}
                <Badge className="self-start bg-brand-50 text-brand border-brand-100 hover:bg-brand-100 mb-6 font-medium">
                  <Award className="w-3.5 h-3.5 mr-1.5" />
                  Featured Case Study
                </Badge>

                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                  {FEATURED_STUDY.client}
                </h3>

                {/* Challenge */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-brand uppercase tracking-wider mb-2">
                    The Challenge
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {FEATURED_STUDY.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-brand uppercase tracking-wider mb-2">
                    Our Solution
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {FEATURED_STUDY.solution}
                  </p>
                </div>

                {/* Results */}
                <div>
                  <h4 className="text-sm font-semibold text-brand uppercase tracking-wider mb-4">
                    Key Results
                  </h4>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {FEATURED_STUDY.results.map((result) => (
                      <div
                        key={result.label}
                        className="flex items-start gap-3 p-3 rounded-xl bg-brand-50/60 border border-brand-100"
                      >
                        <result.icon className="w-5 h-5 text-brand mt-0.5 shrink-0" />
                        <span className="text-sm font-semibold text-brand-dark">
                          {result.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function CaseStudiesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-brand-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand text-sm font-medium mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-brand" />
            More Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">
            Trusted Across{' '}
            <span className="text-gradient-green">Industries</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            From retail chains to healthcare clinics, we deliver measurable results
            for businesses of every size and sector.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CASE_STUDIES.map((study, index) => (
            <StaggerItem key={study.client}>
              <div
                className={`green-glow group rounded-2xl border border-brand-50 bg-white p-6 lg:p-8 transition-all duration-300 hover:border-brand-200 hover:-translate-y-1 h-full flex flex-col ${
                  index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 border border-brand-100 flex items-center justify-center shrink-0 group-hover:from-brand group-hover:to-brand-light group-hover:border-brand transition-all duration-300">
                    <study.icon className="w-6 h-6 text-brand group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="min-w-0">
                    <Badge
                      variant="secondary"
                      className="mb-2 bg-brand-50 text-brand border-brand-100 font-medium text-xs"
                    >
                      {study.industry}
                    </Badge>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-brand transition-colors duration-300 truncate">
                      {study.client}
                    </h3>
                  </div>
                </div>

                {/* Challenge */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                  {study.challenge}
                </p>

                {/* Service tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {study.services.map((service) => {
                    const SIcon = SERVICE_ICON_MAP[service] || Zap;
                    return (
                      <span
                        key={service}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand text-xs font-medium"
                      >
                        <SIcon className="w-3 h-3" />
                        {service}
                      </span>
                    );
                  })}
                </div>

                {/* Key metric */}
                <div className="pt-5 border-t border-brand-50">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-brand" />
                    </div>
                    <span className="text-sm font-bold text-brand-dark">
                      {study.metric}
                    </span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function ResultsSummary() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand text-sm font-medium mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-brand" />
            Proven Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">
            Numbers That{' '}
            <span className="text-gradient-green">Speak for Themselves</span>
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="green-glow rounded-2xl border border-brand-50 bg-white p-6 lg:p-8 text-center transition-all duration-300 hover:border-brand-200">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand mb-2">
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </div>
                <p className="text-sm sm:text-base text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function CTASection() {
  const { navigate } = useNavigation();

  return (
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
                Want Results Like{' '}
                <span className="text-brand-200">These?</span>
              </h2>
              <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
                Let&apos;s discuss how Tech Sheba can transform your business IT. 
                Schedule a free consultation and get a tailored roadmap for your success.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  onClick={() => navigate('contact')}
                  className="bg-white text-brand-dark hover:bg-brand-50 shadow-xl shadow-black/10 hover:shadow-black/20 transition-all duration-300 rounded-xl px-8 py-6 text-base font-semibold group"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate('pricing')}
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white transition-all duration-300 rounded-xl px-8 py-6 text-base font-semibold"
                >
                  View Pricing
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ Main Component â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

export default function CaseStudiesPage() {
  return (
    <div className="overflow-hidden">
      <PageHero />
      <FeaturedCaseStudy />
      <CaseStudiesGrid />
      <ResultsSummary />
      <CTASection />
    </div>
  );
}