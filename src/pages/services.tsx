'use client';

import { useNavigation } from '@/lib/store';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight, Wifi, Shield, Globe, ChevronRight,
  Network, Phone, Headphones, Camera, KeyRound, Database,
  Search, Wrench, Code, LayoutGrid, Lightbulb, ClipboardList,
  Rocket, CheckCircle2, MessageSquare,
} from 'lucide-react';

const categories = [
  {
    icon: Wifi,
    title: 'Infrastructure & Connectivity',
    description: 'Build a solid IT foundation with enterprise-grade networking, structured cabling, PBX phone systems, and reliable Wi-Fi infrastructure â€” tailored for offices, warehouses, and multi-site operations across Bangladesh.',
    slug: 'network-connectivity' as const,
    bgClass: 'bg-[#eff6ff] dark:bg-[#1e3a5f]',
    iconClass: 'text-[#001F60] dark:text-[#93c5fd]',
    services: ['Network Design & Wi-Fi', 'Structured Cabling', 'PBX & IP Phone Systems'],
  },
  {
    icon: Shield,
    title: 'Security & Access',
    description: 'Protect your business from every angle â€” physical surveillance with HD CCTV, smart access control systems, and comprehensive data backup solutions to safeguard your critical business information.',
    slug: 'security-systems' as const,
    bgClass: 'bg-[#f0f4ff] dark:bg-[#1e3a5f]',
    iconClass: 'text-[#001440] dark:text-[#93c5fd]',
    services: ['CCTV Surveillance', 'Access Control', 'Data Backup & Security'],
  },
  {
    icon: Globe,
    title: 'Digital Presence & Strategy',
    description: 'Establish a powerful online presence with custom website design and development, and plan your technology roadmap with expert IT consultancy to stay ahead in Bangladesh\'s growing digital economy.',
    slug: 'digital-presence' as const,
    bgClass: 'bg-[#dbeafe] dark:bg-[#1e3a5f]',
    iconClass: 'text-[#0775FF] dark:text-[#93c5fd]',
    services: ['Website Design & Development', 'IT Consultancy & Planning'],
  },
];

const allServices = [
  {
    icon: Network,
    title: 'Network Design & Wi-Fi Setup',
    description: 'Enterprise-grade wireless network design with full floor-plan coverage analysis, ensuring zero dead zones across your office or facility.',
    slug: 'network-connectivity' as const,
  },
  {
    icon: Wrench,
    title: 'Structured Cabling & Router Configuration',
    description: 'Professional Cat6/Cat6a cabling infrastructure with managed router and switch configuration for optimal throughput.',
    slug: 'network-connectivity' as const,
  },
  {
    icon: Phone,
    title: 'PBX & IP Phone Systems',
    description: 'Complete office telephony solutions including IP PBX setup, intercom integration, and voicemail systems for seamless internal and external communication.',
    slug: 'network-connectivity' as const,
  },
  {
    icon: Headphones,
    title: 'IT Support & Maintenance',
    description: 'Ongoing technical assistance with on-site and remote support, proactive monitoring, and preventive maintenance to minimize downtime.',
    slug: 'it-support' as const,
  },
  {
    icon: Camera,
    title: 'CCTV & Video Surveillance',
    description: 'HD and IP camera systems with remote viewing, night vision capabilities, and centralized NVR recording for round-the-clock security monitoring.',
    slug: 'security-systems' as const,
  },
  {
    icon: KeyRound,
    title: 'Access Control Systems',
    description: 'Biometric, card-based, and keypad access control solutions for managing entry points and securing sensitive areas of your facility.',
    slug: 'security-systems' as const,
  },
  {
    icon: Database,
    title: 'Data Backup & System Security',
    description: 'Automated backup solutions with both on-site and cloud redundancy, plus endpoint protection and firewall configuration for digital security.',
    slug: 'security-systems' as const,
  },
  {
    icon: Code,
    title: 'Website Design & Development',
    description: 'Responsive, fast-loading websites built with modern technologies, optimized for Bangladeshi audiences and search engines.',
    slug: 'digital-presence' as const,
  },
  {
    icon: Lightbulb,
    title: 'IT Consultancy',
    description: 'Strategic technology planning, IT audits, and digital transformation roadmaps to align your technology investments with business goals.',
    slug: 'digital-presence' as const,
  },
];

const processSteps = [
  {
    step: '01',
    icon: Search,
    title: 'Discovery',
    description: 'We begin with a thorough assessment of your current IT infrastructure, understanding your business needs, challenges, and growth objectives.',
  },
  {
    step: '02',
    icon: ClipboardList,
    title: 'Design',
    description: 'Our engineers create a detailed solution blueprint tailored to your space, budget, and operational requirements â€” with transparent pricing.',
  },
  {
    step: '03',
    icon: Rocket,
    title: 'Deploy',
    description: 'Professional installation and configuration by certified technicians, minimizing disruption to your daily business operations.',
  },
  {
    step: '04',
    icon: CheckCircle2,
    title: 'Support',
    description: 'Ongoing maintenance, monitoring, and rapid response support to keep your systems running at peak performance around the clock.',
  },
];

export default function ServicesPage() {
  const { navigate } = useNavigation();

  return (
    <div className="overflow-hidden">
      {/* ==================== SECTION 1: PAGE HEADER ==================== */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#eff6ff] via-white to-[#f0f4ff] dark:from-[#1e293b] dark:via-[#0f172a] dark:to-[#0f172a]" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 10% 20%, rgba(0,31,96,0.08) 0%, transparent 50%),
                           radial-gradient(circle at 90% 80%, rgba(7,117,255,0.06) 0%, transparent 50%)`,
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-[#64748b] dark:text-[#94a3b8] mb-8">
              <button
                onClick={() => navigate('home')}
                className="hover:text-[#001F60] dark:hover:text-[#93c5fd] transition-colors"
              >
                Home
              </button>
              <ChevronRight className="h-4 w-4" />
              <span className="text-[#1e293b] dark:text-[#e2e8f0] font-medium">Services</span>
            </nav>

            <div className="max-w-3xl">
              <Badge className="mb-4 bg-[#eff6ff] text-[#001F60] border-[#dbeafe] hover:bg-[#dbeafe] dark:bg-[#1e293b] dark:text-[#93c5fd] dark:border-[#1e3a5f] dark:hover:bg-[#1e3a5f]">
                Our Services
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e293b] dark:text-[#e2e8f0] tracking-tight mb-6">
                Comprehensive IT Solutions
                <span className="text-[#001F60] dark:text-[#93c5fd]"> for Growing Businesses</span>
              </h1>
              <p className="text-lg sm:text-xl text-[#475569] dark:text-[#94a3b8] leading-relaxed">
                From network infrastructure and security systems to digital presence and ongoing IT support,
                Tech Sheba delivers end-to-end technology solutions designed for Bangladesh&apos;s dynamic business
                environment. We help you build, secure, and scale your IT operations with confidence.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ==================== SECTION 2: SERVICE CATEGORIES ==================== */}
      <section className="py-20 lg:py-24 bg-white dark:bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-semibold text-[#001F60] dark:text-[#93c5fd] uppercase tracking-wider mb-3">
                Service Categories
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] dark:text-[#e2e8f0] mb-4">
                Three Pillars of Your IT Success
              </h2>
              <p className="text-[#475569] dark:text-[#94a3b8] text-lg">
                Our services are organized into three core categories, each addressing a critical aspect of your technology needs.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {categories.map((cat) => {
              const IconComponent = cat.icon;
              return (
                <StaggerItem key={cat.slug}>
                    <Card
                    className="h-full border-0 shadow-lg cursor-pointer group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-[#1e293b]"
                    onClick={() => navigate('service-detail', { slug: cat.slug })}
                  >
                    <CardHeader className="pb-4">
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${cat.bgClass}`}
                      >
                        <IconComponent className={`h-7 w-7 ${cat.iconClass}`} />
                      </div>
                      <CardTitle className="text-xl font-bold text-[#1e293b] dark:text-[#e2e8f0] group-hover:text-[#001F60] dark:group-hover:text-[#93c5fd] transition-colors">
                        {cat.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[#475569] dark:text-[#94a3b8] mb-5 leading-relaxed">
                        {cat.description}
                      </p>
                      <div className="space-y-2 mb-5">
                        {cat.services.map((s) => (
                          <div key={s} className="flex items-center gap-2 text-sm text-[#64748b] dark:text-[#94a3b8]">
                            <CheckCircle2 className="h-4 w-4 text-[#4DA3FF] dark:text-[#60a5fa] shrink-0" />
                            <span>{s}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-[#001F60] dark:text-[#93c5fd] font-semibold text-sm group-hover:gap-3 transition-all">
                        Explore Services
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ==================== SECTION 3: ALL SERVICES GRID ==================== */}
      <section className="py-20 lg:py-24 bg-[#f8fafc] dark:bg-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-semibold text-[#001F60] dark:text-[#93c5fd] uppercase tracking-wider mb-3">
                What We Offer
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] dark:text-[#e2e8f0] mb-4">
                All Services at a Glance
              </h2>
              <p className="text-[#475569] dark:text-[#94a3b8] text-lg">
                Explore our complete range of IT services â€" each designed to solve real challenges faced by businesses in Bangladesh.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <StaggerItem key={service.title}>
                  <Card className="h-full border border-gray-100 dark:border-[#334155] bg-white dark:bg-[#0f172a] cursor-pointer group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-[#eff6ff] dark:bg-[#1e3a5f] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                        <IconComponent className="h-6 w-6 text-[#001F60] dark:text-[#93c5fd]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#1e293b] dark:text-[#e2e8f0] mb-2 group-hover:text-[#001F60] dark:group-hover:text-[#93c5fd] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-[#475569] dark:text-[#94a3b8] text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate('service-detail', { slug: service.slug });
                        }}
                        className="inline-flex items-center gap-1.5 text-[#001F60] dark:text-[#93c5fd] font-semibold text-sm hover:gap-2.5 transition-all"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </CardContent>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ==================== SECTION 4: SERVICE PROCESS ==================== */}
      <section className="py-20 lg:py-24 bg-white dark:bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-semibold text-[#001F60] dark:text-[#93c5fd] uppercase tracking-wider mb-3">
                How We Deliver
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] dark:text-[#e2e8f0] mb-4">
                Our Proven 4-Step Process
              </h2>
              <p className="text-[#475569] dark:text-[#94a3b8] text-lg">
                Every successful project follows a structured methodology â€" from initial discovery to ongoing support.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <StaggerItem key={item.step}>
                  <div className="relative text-center">
                    {/* Connector line */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-[#dbeafe] to-[#eff6ff] dark:from-[#1e3a5f] dark:to-[#1e3a5f]" />
                    )}
                    <div className="relative inline-flex flex-col items-center">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#eff6ff] to-[#dbeafe] dark:from-[#1e3a5f] dark:to-[#1e3a5f] flex items-center justify-center mb-5 relative">
                        <IconComponent className="h-8 w-8 text-[#001F60] dark:text-[#93c5fd]" />
                        <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#001F60] text-white dark:bg-[#93c5fd] dark:text-[#0f172a] text-xs font-bold flex items-center justify-center">
                          {item.step}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-[#1e293b] dark:text-[#e2e8f0] mb-2">{item.title}</h3>
                      <p className="text-[#475569] dark:text-[#94a3b8] text-sm leading-relaxed max-w-xs">{item.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ==================== SECTION 5: CTA ==================== */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#001F60] via-[#0775FF] to-[#001440] px-8 py-16 sm:px-12 sm:py-20 text-center">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
              <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-full" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Not sure what you need?
                </h2>
                <p className="text-blue-100 text-lg max-w-xl mx-auto mb-8">
                  Our team of IT experts will assess your current setup, identify gaps, and recommend the right
                  solutions â€” completely free of charge. No obligations, no pressure.
                </p>
                <Button
                  size="lg"
                  onClick={() => navigate('contact')}
                  className="bg-white text-[#001F60] hover:bg-blue-50 font-semibold px-8 py-6 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  Get a Free IT Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}