'use client';

import { motion } from 'framer-motion';
import { useNavigation } from '@/lib/store';
import { FadeIn, StaggerContainer, StaggerItem, CountUp } from '@/components/animations';
import { Button } from '@/components/ui/button';
import {
  ArrowRight, Shield, Wifi, Phone, Headphones, Lock, Camera,
  KeyRound, Database, Globe, Lightbulb, Building2, Store,
  Rocket, Users, Clock, DollarSign, CheckCircle2, Search,
  ClipboardList, Wrench, LifeBuoy, RefreshCw, Quote,
  Server, Network, Monitor, Cpu, ChevronRight, Zap,
  Target, Eye, Briefcase, TrendingUp, LayoutGrid,
} from 'lucide-react';

const trustedCompanies = [
  'Aarong', 'bKash', 'BRAC', 'Grameen', 'Square Group',
  'Pran-RFL', 'Beximco', 'Robi', 'Unilever BD', 'Standard Chartered',
];

export default function HomePage() {
  const { navigate } = useNavigation();

  return (
    <div className="overflow-hidden">
      {/* ==================== SECTION 1: HERO ==================== */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#eff6ff] via-white to-[#f0f4ff]" />
        <div
          className="absolute inset-0 opacity-30 animate-gradient"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0,31,96,0.08) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, rgba(7,117,255,0.06) 0%, transparent 50%),
                             radial-gradient(circle at 60% 80%, rgba(7,117,255,0.05) 0%, transparent 50%)`,
            backgroundSize: '200% 200%',
          }}
        />
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #001F60 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Floating shapes */}
        <div className="absolute top-32 left-[10%] w-16 h-16 rounded-2xl bg-[#001F60]/5 border border-[#001F60]/10 animate-float" />
        <div className="absolute top-48 right-[15%] w-24 h-24 rounded-full bg-[#4DA3FF]/5 border border-[#4DA3FF]/10 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-[20%] w-12 h-12 rounded-xl bg-[#0775FF]/5 border border-[#0775FF]/10 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-48 right-[25%] w-20 h-20 rounded-full bg-[#001F60]/5 border border-[#001F60]/10 animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-64 left-[40%] w-8 h-8 rounded-lg bg-[#4DA3FF]/8 border border-[#4DA3FF]/10 animate-float" style={{ animationDelay: '1.5s' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <div>
              <FadeIn direction="up" delay={0}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#001F60]/8 border border-[#001F60]/15 mb-8">
                  <div className="w-2 h-2 rounded-full bg-[#4DA3FF] animate-pulse" />
                  <span className="text-sm font-medium text-[#001F60]">Trusted IT Partner in Bangladesh</span>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.1}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e293b] leading-[1.1] tracking-tight mb-6">
                  Reliable IT Solutions{' '}
                  <span className="text-gradient-green">for Growing</span>{' '}
                  Businesses
                </h1>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <p className="text-lg sm:text-xl text-[#475569] leading-relaxed mb-10 max-w-xl">
                  From office networks to cybersecurity, Tech Sheba handles the technology behind
                  your business â€” so you can focus on running it.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <Button
                    size="lg"
                    onClick={() => navigate('contact')}
                    className="bg-gradient-to-r from-[#001F60] to-[#0775FF] hover:from-[#001440] hover:to-[#001F60] text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 rounded-xl px-8 py-6 text-base font-semibold group"
                  >
                    Get a Free IT Assessment
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                  <button
                    onClick={() => navigate('services')}
                    className="flex items-center gap-2 text-[#001F60] font-semibold hover:text-[#001440] transition-colors duration-300 group py-6"
                  >
                    See what we handle
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.4}>
                <div className="flex items-center gap-8 mt-12 pt-8 border-t border-[#e2e8f0]/60">
                  <div>
                    <div className="text-2xl font-bold text-[#1e293b]"><CountUp end={150} suffix="+" /></div>
                    <div className="text-sm text-[#64748b]">Projects Delivered</div>
                  </div>
                  <div className="w-px h-10 bg-[#e2e8f0]" />
                  <div>
                    <div className="text-2xl font-bold text-[#1e293b]"><CountUp end={98} suffix="%" /></div>
                    <div className="text-sm text-[#64748b]">Client Satisfaction</div>
                  </div>
                  <div className="w-px h-10 bg-[#e2e8f0]" />
                  <div>
                    <div className="text-2xl font-bold text-[#1e293b]"><CountUp end={24} />/7</div>
                    <div className="text-sm text-[#64748b]">IT Support</div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right â€” Abstract network illustration */}
            <FadeIn direction="right" delay={0.3} className="hidden lg:block">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Central node */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-2xl bg-gradient-to-br from-[#001F60] to-[#4DA3FF] flex items-center justify-center shadow-2xl shadow-blue-500/30 z-10">
                  <Server className="w-10 h-10 text-white" />
                </div>
                {/* Orbiting nodes */}
                {[
                  { top: '8%', left: '15%', icon: Wifi, delay: '0s' },
                  { top: '5%', right: '20%', icon: Shield, delay: '1s' },
                  { bottom: '15%', left: '8%', icon: Camera, delay: '2s' },
                  { bottom: '10%', right: '15%', icon: Globe, delay: '0.5s' },
                  { top: '40%', right: '5%', icon: Phone, delay: '1.5s' },
                  { top: '35%', left: '5%', icon: Monitor, delay: '2.5s' },
                ].map((node, i) => (
                  <div
                    key={i}
                    className={`absolute animate-float`}
                    style={{ top: node.top, left: node.left, right: node.right, bottom: node.bottom, animationDelay: node.delay }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-white shadow-lg shadow-blue-500/10 border border-[#e2e8f0]/60 flex items-center justify-center">
                      <node.icon className="w-6 h-6 text-[#001F60]" />
                    </div>
                  </div>
                ))}
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
                  <line x1="200" y1="200" x2="80" y2="60" stroke="#001F60" strokeWidth="1" strokeDasharray="4 4" opacity="0.15" />
                  <line x1="200" y1="200" x2="320" y2="50" stroke="#001F60" strokeWidth="1" strokeDasharray="4 4" opacity="0.15" />
                  <line x1="200" y1="200" x2="50" y2="320" stroke="#001F60" strokeWidth="1" strokeDasharray="4 4" opacity="0.15" />
                  <line x1="200" y1="200" x2="340" y2="340" stroke="#001F60" strokeWidth="1" strokeDasharray="4 4" opacity="0.15" />
                  <line x1="200" y1="200" x2="370" y2="180" stroke="#001F60" strokeWidth="1" strokeDasharray="4 4" opacity="0.15" />
                  <line x1="200" y1="200" x2="30" y2="170" stroke="#001F60" strokeWidth="1" strokeDasharray="4 4" opacity="0.15" />
                  {/* Outer ring */}
                  <circle cx="200" cy="200" r="160" stroke="#001F60" strokeWidth="1" strokeDasharray="6 6" opacity="0.08" />
                  <circle cx="200" cy="200" r="100" stroke="#4DA3FF" strokeWidth="1" strokeDasharray="4 8" opacity="0.1" />
                </svg>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 2: TRUSTED BY ==================== */}
      <section className="py-16 bg-white border-y border-[#e2e8f0]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-center text-sm font-medium text-[#64748b] tracking-wide uppercase mb-10">
              Trusted by leading businesses across Bangladesh
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
              {trustedCompanies.map((company) => (
                <div
                  key={company}
                  className="flex items-center justify-center px-8 py-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]/60 hover:border-[#dbeafe] hover:bg-[#f0f4ff] transition-all duration-300 group cursor-default"
                >
                  <span className="text-lg font-bold text-[#94a3b8] group-hover:text-[#001F60] transition-colors duration-300 whitespace-nowrap">
                    {company}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ==================== SECTION 3: THREE PILLARS ==================== */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-sm font-semibold text-[#001F60] tracking-wide uppercase mb-3">
                Why Tech Sheba
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-5">
                Your Partner in Business Stability
              </h2>
              <p className="text-lg text-[#475569] leading-relaxed">
                We built Tech Sheba around three core principles that every growing business
                in Bangladesh deserves from their IT partner. These pillars guide every decision,
                every solution, and every client interaction.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle2,
                title: 'Reliable',
                desc: 'Consistent uptime and dependable infrastructure form the backbone of every solution we deliver. Our clients trust us to keep their operations running smoothly â€” day in, day out â€” without unexpected downtime or disruptions. We design systems with redundancy and monitoring so you never have to worry about technology letting you down during critical business hours.',
              },
              {
                icon: Shield,
                title: 'Secure',
                desc: 'From digital threat protection to physical security systems, we safeguard every layer of your business operations. Our comprehensive security approach covers network firewalls, surveillance cameras, access control, and data backup â€” ensuring that your business assets, information, and people remain protected against both online and offline risks at all times.',
              },
              {
                icon: DollarSign,
                title: 'Cost-Effective',
                desc: 'Enterprise-grade solutions priced specifically for growing businesses in Bangladesh. We understand that every taka counts, so we deliver maximum value without unnecessary expenses or hidden fees. Our transparent pricing model means you always know what you are paying for, with flexible packages that scale alongside your business needs and budget requirements.',
              },
            ].map((pillar) => (
              <StaggerItem key={pillar.title}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-8 green-glow border border-[#e2e8f0]/60 h-full"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#001F60]/10 to-[#4DA3FF]/10 flex items-center justify-center mb-6">
                    <pillar.icon className="w-7 h-7 text-[#001F60]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e293b] mb-4">{pillar.title}</h3>
                  <p className="text-[#475569] leading-relaxed">{pillar.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ==================== SECTION 4: MISSION & VISION ==================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-sm font-semibold text-[#001F60] tracking-wide uppercase mb-3">
                Our Purpose
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-5">
                Driving Bangladesh&apos;s Digital Future
              </h2>
              <p className="text-lg text-[#475569] leading-relaxed">
                Every great company is guided by a clear sense of purpose. Here is what drives
                us forward each day at Tech Sheba.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn direction="left" delay={0.1}>
              <div className="relative bg-gradient-to-br from-[#eff6ff] to-white rounded-2xl p-8 lg:p-10 border border-[#dbeafe]/60 h-full overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#001F60]/5 -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-20 h-20 rounded-full bg-[#4DA3FF]/5 translate-y-1/2 -translate-x-1/2" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-[#001F60] flex items-center justify-center mb-6">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1e293b] mb-4">Our Mission</h3>
                  <p className="text-[#475569] leading-relaxed text-lg">
                    To deliver simple, secure, and smart IT solutions that allow businesses to
                    focus on their growth. We believe technology should empower, not complicate.
                    Our mission is to bridge the gap between complex IT infrastructure and
                    business simplicity, ensuring that organizations of every size can leverage
                    modern technology without the overhead of managing it themselves.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div className="relative bg-gradient-to-br from-white to-[#f0f4ff] rounded-2xl p-8 lg:p-10 border border-[#dbeafe]/60 h-full overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-[#4DA3FF]/5 -translate-y-1/2 -translate-x-1/2" />
                <div className="absolute bottom-0 right-0 w-20 h-20 rounded-full bg-[#001F60]/5 translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#001F60] to-[#4DA3FF] flex items-center justify-center mb-6">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1e293b] mb-4">Our Vision</h3>
                  <p className="text-[#475569] leading-relaxed text-lg">
                    To become the most trusted IT partner in Bangladesh for modern enterprises.
                    We envision a future where every business, from a small shop in Dhaka to a
                    growing corporate office, has access to reliable and professional IT
                    services that rival global standards â€” making technology a true competitive
                    advantage rather than a persistent challenge.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 5: SERVICE ECOSYSTEM ==================== */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-sm font-semibold text-[#001F60] tracking-wide uppercase mb-3">
                What We Offer
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-5">
                A Holistic Ecosystem
              </h2>
              <p className="text-lg text-[#475569] leading-relaxed">
                Tech Sheba provides a comprehensive suite of IT services designed to work
                together seamlessly. Whether you need to connect your office, secure your
                premises, or establish your digital presence â€” we have you covered under one roof.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Network,
                title: 'Infrastructure & Connectivity',
                desc: 'Build a solid technology foundation with professional network setup, structured cabling, high-speed Wi-Fi, and enterprise-grade phone systems. We design and implement complete IT infrastructure that keeps your team connected and productive throughout the workday.',
                link: 'network-connectivity',
              },
              {
                icon: Shield,
                title: 'Security & Access',
                desc: 'Protect your business from every angle with advanced CCTV surveillance, biometric access control, data backup solutions, and cybersecurity measures. Our security services create multiple layers of defense for your physical premises and digital assets alike.',
                link: 'security-systems',
              },
              {
                icon: Lightbulb,
                title: 'Digital Strategy',
                desc: 'Establish a powerful online presence with custom website development, and make informed technology decisions with expert IT consultancy. We help you navigate the digital landscape strategically so your business can grow with confidence and clarity.',
                link: 'digital-presence',
              },
            ].map((cat) => (
              <StaggerItem key={cat.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-white rounded-2xl p-8 border-2 border-transparent hover:border-[#001F60]/20 transition-all duration-300 h-full group cursor-pointer"
                  onClick={() => navigate('service-detail', { slug: cat.link })}
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,31,96,0.02), rgba(7,117,255,0.02))',
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-br from-[#001F60]/0 via-[#4DA3FF]/0 to-[#001F60]/0 group-hover:from-[#001F60]/30 group-hover:via-[#4DA3FF]/20 group-hover:to-[#001F60]/30 transition-all duration-500">
                    <div className="w-full h-full rounded-2xl bg-white" />
                  </div>
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#001F60] to-[#4DA3FF] flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                      <cat.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1e293b] mb-3">{cat.title}</h3>
                    <p className="text-[#475569] leading-relaxed mb-5">{cat.desc}</p>
                    <span className="inline-flex items-center gap-1.5 text-[#001F60] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                      Explore <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ==================== SECTION 6: CORE INFRASTRUCTURE SERVICES ==================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-sm font-semibold text-[#001F60] tracking-wide uppercase mb-3">
                Infrastructure Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-5">
                Core Infrastructure Services
              </h2>
              <p className="text-lg text-[#475569] leading-relaxed">
                A strong IT infrastructure is the backbone of every successful business. Our core
                services ensure your team stays connected, your communications are crystal clear,
                and your systems run without interruption.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Wifi,
                title: 'Network & Wi-Fi Setup',
                desc: 'We design and deploy enterprise-grade networks tailored to your office environment. From structured cabling and switch configuration to high-density Wi-Fi coverage that eliminates dead zones, our network solutions ensure every device in your office stays connected with blazing-fast speeds and rock-solid reliability.',
                features: ['Structured Cabling & LAN Setup', 'Enterprise Wi-Fi with Coverage Planning', 'Network Security & Firewall Config', 'VPN Setup for Remote Teams'],
              },
              {
                icon: Phone,
                title: 'Phone & PBX Systems',
                desc: 'Modernize your business communications with professional PBX phone systems. Whether you need a traditional system or a cloud-based VoIP solution, we handle the complete installation, configuration, and training. Our phone systems support call routing, voicemail, conference calling, and integration with your existing CRM tools.',
                features: ['IP PBX & VoIP Installation', 'Call Routing & Auto-Attendant', 'Multi-Branch Connectivity', 'CRM & Software Integration'],
              },
              {
                icon: Headphones,
                title: 'IT Support & Maintenance',
                desc: 'Keep your technology running at peak performance with our comprehensive IT support services. Our team provides proactive monitoring, rapid issue resolution, and regular system maintenance to prevent problems before they impact your business. We offer flexible support plans that fit your operational needs and budget.',
                features: ['24/7 Remote & On-Site Support', 'Proactive System Monitoring', 'Regular Health Checks & Updates', 'Vendor Management & Coordination'],
              },
            ].map((service) => (
              <StaggerItem key={service.title}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-8 green-glow border border-[#e2e8f0]/60 h-full flex flex-col"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#001F60]/10 to-[#4DA3FF]/10 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-[#001F60]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e293b] mb-3">{service.title}</h3>
                  <p className="text-[#475569] leading-relaxed mb-6 flex-grow">{service.desc}</p>
                  <ul className="space-y-2.5 mb-6">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-[#475569]">
                        <CheckCircle2 className="w-4 h-4 text-[#4DA3FF] mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    onClick={() => navigate('service-detail', { slug: 'network-connectivity' })}
                    className="w-full border-[#001F60]/20 text-[#001F60] hover:bg-[#001F60] hover:text-white rounded-xl transition-all duration-300 group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ==================== SECTION 7: SECURITY SERVICES ==================== */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-sm font-semibold text-[#001F60] tracking-wide uppercase mb-3">
                Security Solutions
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-5">
                One Partner, Both Sides of Security
              </h2>
              <p className="text-lg text-[#475569] leading-relaxed">
                True business security means protecting both your physical premises and your
                digital assets. Tech Sheba delivers comprehensive security solutions that cover
                every vulnerability, giving you complete peace of mind.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Camera,
                title: 'CCTV & Surveillance',
                desc: 'Deploy professional-grade CCTV systems that provide crystal-clear monitoring across your entire premises. We install high-definition cameras with night vision, remote viewing capabilities, and intelligent motion detection. Our surveillance solutions include centralized recording, cloud backup options, and mobile access so you can monitor your business from anywhere at any time.',
                features: ['HD & 4K Camera Systems', 'Night Vision & Motion Detection', 'Remote Mobile Viewing', 'Cloud & Local Recording'],
              },
              {
                icon: KeyRound,
                title: 'Access Control Systems',
                desc: 'Control and monitor who enters your premises with modern access control solutions. From biometric fingerprint and face recognition systems to RFID card-based entry, we implement layered security that prevents unauthorized access. Our systems include detailed attendance tracking, visitor management, and real-time alerts for complete facility security management.',
                features: ['Biometric & RFID Systems', 'Multi-Door Access Management', 'Visitor Logging & Tracking', 'Real-Time Alert Integration'],
              },
              {
                icon: Database,
                title: 'Data Backup & System Security',
                desc: 'Protect your critical business data with automated backup solutions and robust cybersecurity measures. We implement multi-layer security including firewall configuration, antivirus deployment, email filtering, and regular vulnerability assessments. Our backup strategies ensure business continuity with both on-site and cloud-based redundancy for rapid disaster recovery.',
                features: ['Automated Cloud & Local Backup', 'Firewall & Antivirus Setup', 'Email Security & Filtering', 'Disaster Recovery Planning'],
              },
            ].map((service) => (
              <StaggerItem key={service.title}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-8 green-glow border border-[#e2e8f0]/60 h-full flex flex-col"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#001F60]/10 to-[#4DA3FF]/10 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-[#001F60]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e293b] mb-3">{service.title}</h3>
                  <p className="text-[#475569] leading-relaxed mb-6 flex-grow">{service.desc}</p>
                  <ul className="space-y-2.5 mb-6">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-[#475569]">
                        <CheckCircle2 className="w-4 h-4 text-[#4DA3FF] mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    onClick={() => navigate('service-detail', { slug: 'security-systems' })}
                    className="w-full border-[#001F60]/20 text-[#001F60] hover:bg-[#001F60] hover:text-white rounded-xl transition-all duration-300 group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ==================== SECTION 8: DIGITAL SERVICES ==================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-sm font-semibold text-[#001F60] tracking-wide uppercase mb-3">
                Digital Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-5">
                Grow Your Digital Presence
              </h2>
              <p className="text-lg text-[#475569] leading-relaxed">
                In today&apos;s connected world, your digital presence is often the first impression
                customers have of your business. Our digital services help you establish a
                professional online identity and make strategic technology investments.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Globe,
                title: 'Website Design & Development',
                desc: 'We create stunning, high-performance websites that represent your brand professionally and convert visitors into customers. Our design process focuses on user experience, mobile responsiveness, and fast loading speeds â€” all essential factors for online success in Bangladesh. From corporate websites to e-commerce platforms, we build solutions that grow with your business using modern technologies like React, Next.js, and custom CMS platforms. Every website we deliver is SEO-optimized, secure, and easy for your team to manage and update independently.',
                features: ['Custom Responsive Design', 'E-Commerce Solutions', 'SEO Optimization', 'CMS Integration & Training'],
              },
              {
                icon: Lightbulb,
                title: 'IT Consultancy & Strategic Planning',
                desc: 'Make informed technology decisions with expert guidance from our experienced consultants. We assess your current IT landscape, identify gaps and opportunities, and create a strategic roadmap that aligns technology investments with your business objectives. Our consultancy services cover IT budgeting, vendor selection, technology migration planning, and digital transformation strategy. Whether you are setting up a new office, upgrading legacy systems, or planning a complete digital overhaul, our consultants provide the clarity and direction you need.',
                features: ['IT Infrastructure Assessment', 'Technology Roadmapping', 'Vendor Selection & Management', 'Digital Transformation Strategy'],
              },
            ].map((service) => (
              <StaggerItem key={service.title}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-white to-[#f8fafc] rounded-2xl p-8 lg:p-10 green-glow border border-[#e2e8f0]/60 h-full flex flex-col"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#001F60] to-[#4DA3FF] flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1e293b] mb-4">{service.title}</h3>
                  <p className="text-[#475569] leading-relaxed mb-6 flex-grow">{service.desc}</p>
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-[#475569]">
                        <CheckCircle2 className="w-4 h-4 text-[#4DA3FF] mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => navigate('service-detail', { slug: 'digital-presence' })}
                    className="w-full bg-gradient-to-r from-[#001F60] to-[#0775FF] hover:from-[#001440] hover:to-[#001F60] text-white rounded-xl transition-all duration-300 group"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ==================== SECTION 9: INDUSTRIES SERVED ==================== */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-sm font-semibold text-[#001F60] tracking-wide uppercase mb-3">
                Industries
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-5">
                Tailored Solutions for Every Sector
              </h2>
              <p className="text-lg text-[#475569] leading-relaxed">
                Every industry faces unique technology challenges. Tech Sheba delivers
                customized IT solutions that address the specific pain points and operational
                requirements of each business sector we serve across Bangladesh.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Store,
                title: 'SMBs',
                desc: 'Small and medium businesses often lack dedicated IT staff, leading to reactive problem-solving and costly downtime. Tech Sheba acts as your virtual IT department â€” handling network setup, security, and ongoing support at a fraction of the cost of hiring in-house, so you can compete with larger players.',
              },
              {
                icon: Building2,
                title: 'Corporate Offices',
                desc: 'Corporate environments demand robust, scalable infrastructure with zero tolerance for downtime. We deliver enterprise-grade networking, multi-floor Wi-Fi coverage, professional phone systems, and comprehensive security â€” all managed proactively with dedicated SLAs and priority response times.',
              },
              {
                icon: Briefcase,
                title: 'Shops & Factories',
                desc: 'Retail shops and manufacturing facilities need practical IT solutions that withstand demanding environments. From point-of-sale network reliability and inventory system connectivity to factory floor surveillance and worker attendance tracking, we design solutions built for real-world operational conditions.',
              },
              {
                icon: Rocket,
                title: 'Startups',
                desc: 'Startups need agile, scalable technology that grows with them. Tech Sheba helps new businesses set up cost-effective IT foundations â€” from collaborative cloud tools and secure Wi-Fi to professional websites â€” so founders can focus on product and growth without being distracted by technology setup.',
              },
            ].map((ind) => (
              <StaggerItem key={ind.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-6 green-glow border border-[#e2e8f0]/60 h-full cursor-pointer group"
                  onClick={() => navigate('industries')}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#001F60]/10 to-[#4DA3FF]/10 flex items-center justify-center mb-5">
                    <ind.icon className="w-6 h-6 text-[#001F60]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1e293b] mb-3">{ind.title}</h3>
                  <p className="text-sm text-[#475569] leading-relaxed">{ind.desc}</p>
                  <div className="mt-4 pt-4 border-t border-[#e2e8f0]/60">
                    <span className="inline-flex items-center gap-1 text-sm text-[#001F60] font-medium group-hover:gap-2 transition-all duration-300">
                      Learn more <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ==================== SECTION 10: TECH SHEBA ADVANTAGE ==================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn direction="left">
              <div className="sticky top-32">
                <span className="inline-block text-sm font-semibold text-[#001F60] tracking-wide uppercase mb-3">
                  The Tech Sheba Difference
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-5">
                  Why Businesses Choose Us
                </h2>
                <p className="text-lg text-[#475569] leading-relaxed mb-8">
                  In a market crowded with IT service providers, Tech Sheba stands apart through
                  our unwavering commitment to reliability, transparency, and client success.
                  Here are the five reasons why growing businesses across Bangladesh trust us
                  with their technology needs.
                </p>
                <Button
                  onClick={() => navigate('contact')}
                  className="bg-gradient-to-r from-[#001F60] to-[#0775FF] hover:from-[#001440] hover:to-[#001F60] text-white shadow-lg shadow-blue-500/20 rounded-xl px-8 py-6 group"
                >
                  Start a Conversation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </FadeIn>

            <StaggerContainer className="space-y-6" staggerDelay={0.08}>
              {[
                {
                  icon: CheckCircle2,
                  title: 'Reliable Solutions',
                  desc: 'Every solution we deploy is built for consistent, dependable performance. We use enterprise-grade hardware, follow industry best practices, and implement redundant systems to ensure your business technology never lets you down when it matters most.',
                },
                {
                  icon: Users,
                  title: 'Experienced Team',
                  desc: 'Our team of certified IT professionals brings years of hands-on experience across diverse industries. From network engineers to security specialists, every team member is committed to delivering excellence and staying current with the latest technologies.',
                },
                {
                  icon: LayoutGrid,
                  title: 'Comprehensive Services',
                  desc: 'Instead of juggling multiple vendors for different IT needs, Tech Sheba provides everything under one roof â€” from networking and communications to security and digital presence. This integrated approach saves you time, reduces complexity, and ensures seamless system compatibility.',
                },
                {
                  icon: DollarSign,
                  title: 'Affordable Pricing',
                  desc: 'Transparent, competitive rates built for the Bangladeshi market â€” no hidden fees. We believe professional IT services should be accessible to businesses of all sizes, which is why we offer flexible packages and clear pricing that respects your budget constraints.',
                },
                {
                  icon: Clock,
                  title: 'Quick Response',
                  desc: 'When technology issues arise, every minute counts. Our dedicated support team provides rapid response times with priority escalation for critical issues. We understand the urgency of IT problems and are committed to resolving them swiftly to minimize any impact on your operations.',
                },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex gap-5 p-5 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0]/60 hover:bg-[#f0f4ff] hover:border-[#dbeafe] transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#001F60]/10 to-[#4DA3FF]/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-[#001F60]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#1e293b] mb-2">{item.title}</h4>
                      <p className="text-sm text-[#475569] leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 11: ENGAGEMENT LIFECYCLE ==================== */}
      <section className="py-24 bg-gradient-to-b from-[#f8fafc] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-sm font-semibold text-[#001F60] tracking-wide uppercase mb-3">
                Our Process
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-5">
                How We Work With You
              </h2>
              <p className="text-lg text-[#475569] leading-relaxed">
                Every successful IT engagement follows a proven methodology. Our structured
                approach ensures that we understand your needs thoroughly, deliver precisely
                what you require, and continue supporting you long after implementation.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative">
              {/* Connecting line (desktop) */}
              <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#dbeafe] via-[#001F60]/20 to-[#dbeafe]" />

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
                {[
                  {
                    step: '01',
                    icon: Search,
                    title: 'Analysis',
                    desc: 'We begin by thoroughly understanding your current IT environment, business processes, pain points, and growth objectives through detailed on-site assessments and stakeholder interviews.',
                  },
                  {
                    step: '02',
                    icon: ClipboardList,
                    title: 'Planning',
                    desc: 'Based on our analysis, we design a customized solution architecture with clear timelines, budget breakdowns, and expected outcomes â€” all documented in a comprehensive project plan.',
                  },
                  {
                    step: '03',
                    icon: Wrench,
                    title: 'Implementation',
                    desc: 'Our certified engineers execute the plan with minimal disruption to your daily operations, following industry best practices and maintaining clear communication throughout.',
                  },
                  {
                    step: '04',
                    icon: LifeBuoy,
                    title: 'Support',
                    desc: 'After deployment, we provide hands-on support, team training, and knowledge transfer to ensure your staff is confident and comfortable with the new systems.',
                  },
                  {
                    step: '05',
                    icon: RefreshCw,
                    title: 'Maintenance',
                    desc: 'Ongoing monitoring, regular updates, preventive maintenance, and periodic reviews keep your IT infrastructure performing optimally as your business evolves and grows.',
                  },
                ].map((phase, i) => (
                  <div key={phase.step} className="relative text-center">
                    <div className="relative inline-flex flex-col items-center">
                      <div className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-[#001F60] to-[#4DA3FF] flex items-center justify-center shadow-lg shadow-blue-500/25 mb-5">
                        <phase.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 z-20 w-8 h-8 rounded-full bg-white shadow-md border-2 border-[#001F60] flex items-center justify-center">
                        <span className="text-xs font-bold text-[#001F60]">{phase.step}</span>
                      </div>
                    </div>
                    <h4 className="text-base font-bold text-[#1e293b] mb-2">{phase.title}</h4>
                    <p className="text-sm text-[#475569] leading-relaxed max-w-[200px] mx-auto">{phase.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ==================== SECTION 12: TESTIMONIALS ==================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-sm font-semibold text-[#001F60] tracking-wide uppercase mb-3">
                Client Testimonials
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-5">
                What Our Clients Say
              </h2>
              <p className="text-lg text-[#475569] leading-relaxed">
                Do not just take our word for it. Hear from the businesses we have helped
                transform with reliable, professional IT solutions across Bangladesh.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: 'Tech Sheba completely transformed our office IT setup. Before them, we were constantly dealing with network drops and slow internet that affected our daily operations. They installed a proper structured network with enterprise Wi-Fi, and we have not had a single major issue in over a year. Their support team responds within minutes whenever we have a question. Highly recommended for any growing business in Dhaka.',
                name: 'Rafiq Ahmed',
                title: 'Operations Director',
                company: 'A textiles manufacturing company, Gazipur',
              },
              {
                quote: 'As a startup founder, I had no idea where to begin with IT infrastructure. Tech Sheba made it incredibly simple â€” they set up our complete office network, phone system, and even built our company website. What impressed me most was their transparency in pricing and their genuine interest in understanding our business needs first before suggesting any solution. They truly feel like a partner, not just a vendor.',
                name: 'Nadia Rahman',
                title: 'Founder & CEO',
                company: 'A fintech startup, Dhaka',
              },
              {
                quote: 'We needed a reliable CCTV and access control system for our retail chain across multiple locations. Tech Sheba delivered a comprehensive solution that lets us monitor all stores from a single dashboard. The installation was professional, the cameras provide excellent quality even at night, and their team trained our staff thoroughly. The peace of mind they have given us is invaluable for our business.',
                name: 'Kamal Hossain',
                title: 'Owner',
                company: 'A retail chain, Chittagong',
              },
            ].map((testimonial) => (
              <StaggerItem key={testimonial.name}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-8 green-glow border border-[#e2e8f0]/60 h-full flex flex-col"
                >
                  <Quote className="w-10 h-10 text-[#4DA3FF]/30 mb-5" />
                  <p className="text-[#475569] leading-relaxed mb-8 flex-grow">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4 pt-6 border-t border-[#e2e8f0]/60">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#001F60] to-[#4DA3FF] flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-[#1e293b]">{testimonial.name}</p>
                      <p className="text-sm text-[#64748b]">{testimonial.title}</p>
                      <p className="text-xs text-[#94a3b8] mt-0.5">{testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ==================== SECTION 13: FINAL CTA ==================== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#001F60] via-[#0775FF] to-[#001440]" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Let&apos;s Grow Your Business With Technology
            </h2>
            <p className="text-lg sm:text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your IT infrastructure? Get a complimentary assessment
              of your current setup and discover how Tech Sheba can help your business
              operate more efficiently, securely, and profitably.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Button
                size="lg"
                onClick={() => navigate('contact')}
                className="bg-white text-[#001F60] hover:bg-blue-50 shadow-xl rounded-xl px-8 py-6 text-base font-semibold group"
              >
                Request a Free Assessment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <a
                href="tel:01980884541"
                className="flex items-center gap-2 text-white/90 hover:text-white font-medium transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
                Or call us: 01980884541
              </a>
            </div>
            <p className="text-sm text-blue-200/60">
              Available across Dhaka, Chittagong, and all major cities in Bangladesh
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}