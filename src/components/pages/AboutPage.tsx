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
  Target,
  Eye,
  Shield,
  Lightbulb,
  Handshake,
  Heart,
  DollarSign,
  Award,
  Users,
  Network,
  LifeBuoy,
  Zap,
  Building2,
  MapPin,
  Calendar,
  Rocket,
  TrendingUp,
  Globe,
  User,
} from 'lucide-react';

/* ───────────────────── Data Constants ───────────────────── */

const VALUES = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We operate with full transparency, honest communication, and ethical practices in every client interaction.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We continuously explore and adopt modern technologies to deliver smarter, more efficient solutions.',
  },
  {
    icon: Award,
    title: 'Reliability',
    description: 'Our clients count on us for consistent, high-quality results delivered on time, every time.',
  },
  {
    icon: Heart,
    title: 'Client-Centric',
    description: 'Every decision and solution is guided by a deep understanding of our clients\' unique business needs.',
  },
  {
    icon: DollarSign,
    title: 'Affordability',
    description: 'We believe enterprise-grade IT should be accessible to growing businesses without breaking the bank.',
  },
  {
    icon: Zap,
    title: 'Excellence',
    description: 'We hold ourselves to the highest standards of quality, from initial consultation to ongoing support.',
  },
];

const TEAM = [
  {
    initials: 'MH',
    name: 'Mahir Hasan',
    title: 'CEO & Founder',
    bio: 'Visionary leader with over 10 years of experience in IT infrastructure and business technology consulting. Founded Tech Sheba to make reliable IT accessible to every growing business in Bangladesh.',
  },
  {
    initials: 'NR',
    name: 'Nusrat Rahman',
    title: 'Head of Operations',
    bio: 'Operational excellence expert ensuring every project is delivered on time and to the highest standards. Oversees client onboarding, project management, and service quality across all engagements.',
  },
  {
    initials: 'TA',
    name: 'Tanvir Ahmed',
    title: 'Lead Network Engineer',
    bio: 'Certified network specialist with deep expertise in enterprise Wi-Fi, structured cabling, and PBX systems. Has designed and deployed networks for over 100 businesses across Dhaka.',
  },
  {
    initials: 'SF',
    name: 'Samia Farooq',
    title: 'Senior Security Consultant',
    bio: 'Security systems expert specializing in CCTV, access control, and data protection. Helps businesses safeguard both their physical premises and critical digital assets.',
  },
];

const DIFFERENTIATORS = [
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Our engineers and consultants bring years of hands-on experience across networking, security, and digital strategy — delivering proven results for businesses of all sizes.',
  },
  {
    icon: Network,
    title: 'Comprehensive Solutions',
    description: 'From cabling and cameras to websites and IT strategy, we offer end-to-end services under one roof. No need to juggle multiple vendors — we handle everything.',
  },
  {
    icon: LifeBuoy,
    title: '24/7 Reliable Support',
    description: 'Our dedicated support team is available around the clock with fast response times and proactive monitoring. When issues arise, we\'re already working on a fix.',
  },
  {
    icon: DollarSign,
    title: 'Transparent & Affordable Pricing',
    description: 'Competitive, honest rates designed for SMB budgets with no hidden fees. Every proposal comes with a clear breakdown so you know exactly what you\'re investing in.',
  },
  {
    icon: Zap,
    title: 'Quick Turnaround & Proven Process',
    description: 'Efficient project delivery through our structured 5-step engagement model. Clear timelines, minimal disruption, and consistent quality on every project we undertake.',
  },
];

const TIMELINE = [
  {
    year: '2019',
    title: 'Founded',
    description: 'Tech Sheba was established with a clear mission: to bridge the gap between enterprise-grade IT and the growing businesses of Bangladesh.',
  },
  {
    year: '2020',
    title: 'First 25 Clients',
    description: 'Within our first year, we earned the trust of 25 businesses across Dhaka, delivering network setups, PBX systems, and IT support.',
  },
  {
    year: '2021',
    title: 'Security Services Launch',
    description: 'Expanded our portfolio with CCTV surveillance, access control systems, and data backup solutions — becoming a one-stop IT partner.',
  },
  {
    year: '2023',
    title: '100+ Projects Completed',
    description: 'Reached a major milestone with over 100 successful project deliveries, spanning offices, retail outlets, factories, and startups.',
  },
  {
    year: '2024',
    title: 'Expanding Digital Services',
    description: 'Launched comprehensive digital strategy services including website development and IT consultancy to help businesses strengthen their online presence.',
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

export default function AboutPage() {
  const { navigate } = useNavigation();

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
              <span className="text-white font-medium">About</span>
            </nav>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.15}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
              About <span className="text-brand-200">Tech Sheba</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.25}>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              We are a Bangladesh-based IT services company dedicated to providing reliable, 
              affordable, and enterprise-grade technology solutions for growing businesses.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 2: OUR STORY                                             */}
      {/* ================================================================ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <AnimatedSection direction="left">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand text-sm font-medium mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight tracking-tight mb-6">
                Built for Bangladesh&apos;s{' '}
                <span className="text-gradient-green">Growing Businesses</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Tech Sheba was founded with a simple observation: while large corporations 
                  in Bangladesh had access to world-class IT infrastructure, the thousands of 
                  growing businesses — from SMBs and corporate offices to shops, factories, and 
                  startups — were left to figure it out on their own.
                </p>
                <p>
                  We set out to change that. Our founders, with deep experience in enterprise 
                  IT, saw an opportunity to bring the same level of professionalism, reliability, 
                  and strategic thinking to businesses that were ready to invest in technology 
                  but didn&apos;t know where to start or who to trust.
                </p>
                <p>
                  From our first network installation in a small Dhaka office to now serving 
                  over 100 clients across the country, our commitment has remained the same: 
                  deliver simple, secure, and smart IT solutions that let business owners focus 
                  on what they do best — growing their business.
                </p>
              </div>
            </AnimatedSection>

            {/* Image Placeholder */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative">
                <div className="rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 border border-brand-100 aspect-[4/3] flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center mx-auto mb-4">
                      <Building2 className="w-10 h-10 text-brand" />
                    </div>
                    <p className="text-brand font-medium text-sm">Tech Sheba Office</p>
                    <p className="text-brand/60 text-xs mt-1">Dhaka, Bangladesh</p>
                  </div>
                </div>
                {/* Decorative accent */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-50 rounded-2xl -z-10" />
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-100/50 rounded-2xl -z-10" />
              </div>
            </AnimatedSection>
          </div>
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
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-50 to-transparent rounded-bl-[3rem]" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-brand flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-white" />
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
                  <div className="w-14 h-14 rounded-xl bg-brand flex items-center justify-center mb-6">
                    <Eye className="w-7 h-7 text-white" />
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
      {/* SECTION 4: OUR VALUES                                            */}
      {/* ================================================================ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="What Drives Us"
            title="Our Core"
            highlight="Values"
            subtitle="Six principles that guide every project, every client interaction, and every decision we make."
          />
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {VALUES.map((value) => (
              <StaggerItem key={value.title}>
                <div className="green-glow group rounded-2xl border border-brand-50 bg-white p-6 lg:p-8 transition-all duration-300 hover:border-brand-100 hover:-translate-y-1 h-full">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-brand to-transparent rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center mb-5 group-hover:bg-brand group-hover:border-brand transition-colors duration-300">
                    <value.icon className="w-6 h-6 text-brand group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 5: TEAM SECTION                                          */}
      {/* ================================================================ */}
      <section className="py-20 lg:py-28 bg-brand-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our People"
            title="Meet the People Behind"
            highlight="Tech Sheba"
            subtitle="A dedicated team of professionals committed to delivering exceptional IT solutions for your business."
          />
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {TEAM.map((member) => (
              <StaggerItem key={member.name}>
                <div className="green-glow group rounded-2xl border border-brand-50 bg-white p-6 lg:p-8 text-center transition-all duration-300 hover:border-brand-100 hover:-translate-y-1 h-full flex flex-col">
                  {/* Avatar Placeholder */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand to-brand-light flex items-center justify-center mx-auto mb-5 shadow-lg shadow-brand/20">
                    <span className="text-xl font-bold text-white">
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-brand font-medium text-sm mb-4">
                    {member.title}
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                    {member.bio}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 6: WHY CHOOSE TECH SHEBA                                 */}
      {/* ================================================================ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Edge"
            title="Why Choose"
            highlight="Tech Sheba"
            subtitle="What sets us apart from other IT service providers in Bangladesh."
          />
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {DIFFERENTIATORS.map((item) => (
              <StaggerItem key={item.title}>
                <div className="green-glow group rounded-2xl border border-brand-50 bg-white p-6 lg:p-8 transition-all duration-300 hover:border-brand-100 hover:-translate-y-1 h-full">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center mb-5 group-hover:bg-brand group-hover:border-brand transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-brand group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 7: OUR JOURNEY / TIMELINE                                */}
      {/* ================================================================ */}
      <section className="py-20 lg:py-28 bg-brand-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Growth"
            title="The Tech Sheba"
            highlight="Journey"
            subtitle="Key milestones that mark our evolution from a startup to a trusted IT partner."
          />
          <div className="max-w-3xl mx-auto">
            {/* Desktop: vertical centered timeline */}
            <div className="hidden md:block relative">
              {/* Central vertical line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-100 -translate-x-1/2" />
              <StaggerContainer className="relative" staggerDelay={0.15}>
                {TIMELINE.map((milestone, i) => (
                  <StaggerItem key={milestone.year}>
                    <div className={`group relative flex items-center gap-8 ${i < TIMELINE.length - 1 ? 'pb-14' : ''}`}>
                      {/* Left side content (even items) */}
                      <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : ''}`}>
                        {i % 2 === 0 && (
                          <div className="pr-8">
                            <span className="inline-block text-sm font-bold text-brand bg-brand-50 border border-brand-100 px-3 py-1 rounded-full mb-2">
                              {milestone.year}
                            </span>
                            <h3 className="text-lg font-bold text-foreground mb-1">
                              {milestone.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {milestone.description}
                            </p>
                          </div>
                        )}
                      </div>
                      {/* Center node */}
                      <div className="relative z-10 shrink-0">
                        <div className="w-12 h-12 rounded-full bg-white border-2 border-brand-100 flex items-center justify-center shadow-sm group-hover:bg-brand group-hover:border-brand transition-all duration-300">
                          <Calendar className="w-5 h-5 text-brand group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                      {/* Right side content (odd items) */}
                      <div className="flex-1">
                        {i % 2 !== 0 && (
                          <div className="pl-8">
                            <span className="inline-block text-sm font-bold text-brand bg-brand-50 border border-brand-100 px-3 py-1 rounded-full mb-2">
                              {milestone.year}
                            </span>
                            <h3 className="text-lg font-bold text-foreground mb-1">
                              {milestone.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {milestone.description}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Mobile: left-aligned vertical timeline */}
            <div className="md:hidden">
              <StaggerContainer className="relative pl-8" staggerDelay={0.12}>
                <div className="absolute left-[1.125rem] top-2 bottom-2 w-0.5 bg-brand-100" />
                {TIMELINE.map((milestone) => (
                  <StaggerItem key={milestone.year}>
                    <div className="group relative pb-10 last:pb-0">
                      <div className="absolute -left-8 top-0 w-9 h-9 rounded-full bg-white border-2 border-brand-100 flex items-center justify-center z-10 group-hover:bg-brand group-hover:border-brand transition-all duration-300 shadow-sm">
                        <Calendar className="w-4 h-4 text-brand group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="ml-4">
                        <span className="inline-block text-xs font-bold text-brand bg-brand-50 border border-brand-100 px-2.5 py-0.5 rounded-full mb-2">
                          {milestone.year}
                        </span>
                        <h3 className="text-base font-bold text-foreground mb-1.5 group-hover:text-brand transition-colors duration-300">
                          {milestone.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {milestone.description}
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
      {/* SECTION 8: CTA                                                   */}
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
                  Ready to Work{' '}
                  <span className="text-brand-200">With Us?</span>
                </h2>
                <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
                  Whether you need a complete IT overhaul or just a single service, 
                  we&apos;re here to help. Let&apos;s start a conversation about your 
                  technology needs.
                </p>
                <Button
                  size="lg"
                  onClick={() => navigate('contact')}
                  className="bg-white text-brand-dark hover:bg-brand-50 shadow-xl shadow-black/10 hover:shadow-black/20 transition-all duration-300 rounded-xl px-8 py-6 text-base font-semibold group"
                >
                  Get in Touch
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