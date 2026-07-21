'use client';

import { useNavigation } from '@/lib/store';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ChevronRight, Store, Building2, Factory, Rocket, Wifi, ShieldCheck,
  Monitor, Network, Cloud, PhoneCall, Printer, Server, Camera,
  ShoppingCart, Utensils, Shirt, Laptop, Megaphone, HardHat, Warehouse,
  ArrowRight, Headphones, Users, Settings, CheckCircle2, Truck,
} from 'lucide-react';

const industries = [
  {
    icon: Store,
    title: 'SMBs & Small Businesses',
    color: '#001F60',
    bgColor: '#eff6ff',
    borderColor: '#dbeafe',
    description:
      'Running a small business in Bangladesh means wearing many hats. Tech Sheba takes the IT burden off your shoulders so you can focus on growth.',
    painPoints: [
      'Limited IT budgets with unpredictable costs',
      'No in-house tech team to handle daily issues',
      'Unreliable vendors with slow response times',
      'Difficulty choosing the right technology stack',
      'Security concerns with minimal expertise',
    ],
    howWeHelp: [
      'Affordable, all-inclusive monthly packages',
      'Single point of contact for all IT needs',
      'Scalable solutions that grow with your business',
      'Proactive monitoring to prevent issues before they occur',
    ],
    services: [
      { icon: Wifi, label: 'Office Wi-Fi & Network Setup' },
      { icon: Camera, label: 'Affordable CCTV Systems' },
      { icon: Printer, label: 'Printer & Peripheral Setup' },
      { icon: Cloud, label: 'Cloud Email & Backup' },
      { icon: Monitor, label: 'Computer Procurement & Maintenance' },
    ],
  },
  {
    icon: Building2,
    title: 'Corporate Offices',
    color: '#001F60',
    bgColor: '#eff6ff',
    borderColor: '#dbeafe',
    description:
      'Modern corporate environments demand robust, secure, and compliant IT infrastructure. Tech Sheba delivers enterprise-grade solutions tailored to your office operations.',
    painPoints: [
      'Complex multi-floor networking requirements',
      'Regulatory compliance and data protection mandates',
      'Employee onboarding/offboarding IT overhead',
      'Need for centralized management and monitoring',
      'High-security requirements for sensitive data',
    ],
    howWeHelp: [
      'Enterprise-grade infrastructure design and deployment',
      'Centralized management with real-time dashboards',
      '24/7 proactive monitoring and rapid incident response',
      'Compliance-ready security frameworks',
    ],
    services: [
      { icon: Network, label: 'Structured Cabling & VLAN Design' },
      { icon: ShieldCheck, label: 'Enterprise Firewall & Security' },
      { icon: Server, label: 'Server & NAS Deployment' },
      { icon: Headphones, label: 'PBX & Intercom Systems' },
      { icon: Users, label: 'Access Control & Attendance' },
    ],
  },
  {
    icon: Factory,
    title: 'Shops, Factories & Warehouses',
    color: '#001F60',
    bgColor: '#eff6ff',
    borderColor: '#dbeafe',
    description:
      'Industrial environments present unique challenges â€” from harsh conditions to large coverage areas. Tech Sheba specializes in solutions built to withstand real-world demands.',
    painPoints: [
      'Harsh environments that damage standard equipment',
      'Large coverage areas with dead zones',
      'Inventory tracking and loss prevention needs',
      'High dust, heat, and humidity exposure',
      'Limited power infrastructure reliability',
    ],
    howWeHelp: [
      'Rugged, industrial-grade equipment selection',
      'Wide-area Wi-Fi with mesh and outdoor access points',
      'Comprehensive CCTV systems for loss prevention',
      'UPS and power backup for uninterrupted operations',
    ],
    services: [
      { icon: Camera, label: 'Industrial CCTV & Surveillance' },
      { icon: Wifi, label: 'Wide-Area Wi-Fi & Mesh Networks' },
      { icon: HardHat, label: 'Rugged Networking Equipment' },
      { icon: Truck, label: 'Inventory Tracking Integration' },
      { icon: Settings, label: 'Power Backup & UPS Solutions' },
    ],
  },
  {
    icon: Rocket,
    title: 'Startups & Tech Companies',
    color: '#001F60',
    bgColor: '#eff6ff',
    borderColor: '#dbeafe',
    description:
      'Speed is everything for startups. Tech Sheba provides agile, scalable IT infrastructure that lets you move fast without breaking the bank.',
    painPoints: [
      'Rapid scaling with unpredictable headcount growth',
      'Limited upfront capital for infrastructure',
      'Need for modern, cloud-native tools',
      'Fast deployment requirements to match business pace',
      'Wants to avoid vendor lock-in early on',
    ],
    howWeHelp: [
      'Flexible packages that scale month-to-month',
      'Cloud-ready infrastructure from day one',
      'Fast deployment within days, not weeks',
      'Open-standards approach to avoid lock-in',
    ],
    services: [
      { icon: Cloud, label: 'Cloud Infrastructure & Migration' },
      { icon: Wifi, label: 'Modern Co-working Network Design' },
      { icon: Monitor, label: 'Dev-Ready Workstation Setup' },
      { icon: ShieldCheck, label: 'Cybersecurity Fundamentals' },
      { icon: Megaphone, label: 'Website & App Hosting Setup' },
    ],
  },
];

const useCases = [
  {
    icon: Utensils,
    title: 'Restaurant POS Network',
    description:
      'Reliable wired and wireless networking for POS terminals, kitchen display systems, and customer Wi-Fi across single or multi-location restaurants.',
    industry: 'SMBs',
  },
  {
    icon: Shirt,
    title: 'Garment Factory Surveillance',
    description:
      'Comprehensive CCTV deployment across production floors, loading docks, and admin areas with remote viewing and 30-day recording retention.',
    industry: 'Factories',
  },
  {
    icon: Laptop,
    title: 'Co-working Space Wi-Fi',
    description:
      'High-density Wi-Fi networks with per-user bandwidth management, VLAN segmentation, and seamless roaming across multiple floors.',
    industry: 'Startups',
  },
  {
    icon: ShoppingCart,
    title: 'Retail Chain Inventory Network',
    description:
      'Multi-branch network connecting POS systems to central servers with VPN tunnels, inventory sync, and real-time stock monitoring.',
    industry: 'SMBs',
  },
  {
    icon: Building2,
    title: 'Corporate Access Control',
    description:
      'Biometric and card-based access control with attendance tracking, visitor management, and integration with HR payroll systems.',
    industry: 'Corporate',
  },
  {
    icon: Warehouse,
    title: 'Warehouse Tracking System',
    description:
      'Industrial-grade Wi-Fi coverage for barcode/RFID scanning, IP camera surveillance, and real-time inventory management dashboards.',
    industry: 'Factories',
  },
  {
    icon: PhoneCall,
    title: 'Call Center PBX Setup',
    description:
      'IP-PBX system with call routing, queue management, recording, and CRM integration for customer support and sales operations.',
    industry: 'Corporate',
  },
  {
    icon: Server,
    title: 'Startup Cloud Migration',
    description:
      'End-to-end cloud migration from on-premise servers to AWS/GCP with cost optimization, auto-scaling, and disaster recovery planning.',
    industry: 'Startups',
  },
];

export default function IndustriesPage() {
  const { navigate } = useNavigation();

  return (
    <div className="overflow-hidden">
      {/* ==================== SECTION 1: PAGE HEADER ==================== */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#eff6ff] via-white to-[#f0f4ff] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #001F60 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute top-20 right-[10%] w-32 h-32 rounded-full bg-[#001F60]/5 animate-float" />
        <div className="absolute bottom-10 left-[15%] w-24 h-24 rounded-2xl bg-[#4DA3FF]/5 animate-float" style={{ animationDelay: '1.5s' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <nav className="flex items-center gap-2 text-sm text-[#64748b] mb-6">
              <button
                onClick={() => navigate('home')}
                className="hover:text-[#001F60] transition-colors duration-200"
              >
                Home
              </button>
              <ChevronRight className="w-4 h-4" />
              <span className="text-[#001F60] font-medium">Industries</span>
            </nav>

            <h1 className="text-4xl sm:text-5xl font-bold text-[#1e293b] mb-5">
              Industries We <span className="text-gradient-green">Serve</span>
            </h1>
            <p className="text-lg text-[#475569] leading-relaxed max-w-3xl">
              From small shops to large corporate offices, Tech Sheba delivers IT solutions
              tailored to the unique challenges of every sector in Bangladesh. Explore how we
              serve businesses like yours.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ==================== SECTION 2: INDUSTRY OVERVIEW ==================== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-[#eff6ff] text-[#001F60] border-[#dbeafe] hover:bg-[#dbeafe]">
                Tailored Solutions
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-4">
                Tailored Solutions for <span className="text-gradient-green">Every Sector</span>
              </h2>
              <p className="text-[#475569] leading-relaxed">
                Every industry has unique technology requirements. We don&apos;t believe in one-size-fits-all.
                Instead, we take the time to understand your business, your pain points, and your goals
                â€” then craft a solution that fits perfectly.
              </p>
            </div>
          </FadeIn>

          {/* ==================== SECTION 3: FOUR INDUSTRY CARDS ==================== */}
          <StaggerContainer className="space-y-16">
            {industries.map((industry, index) => {
              const IconComp = industry.icon;
              const isEven = index % 2 === 0;

              return (
                <StaggerItem key={industry.title}>
                  <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-start ${!isEven ? 'lg:direction-rtl' : ''}`}>
                    {/* Left / Right Content */}
                    <div className={!isEven ? 'lg:order-2' : ''}>
                      <div
                        className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5"
                        style={{ backgroundColor: industry.bgColor }}
                      >
                        <IconComp className="w-7 h-7" style={{ color: industry.color }} />
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-[#1e293b] mb-3">
                        {industry.title}
                      </h3>
                      <p className="text-[#475569] leading-relaxed mb-8">
                        {industry.description}
                      </p>

                      {/* Pain Points */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-[#64748b] uppercase tracking-wider mb-3">
                          Common Pain Points
                        </h4>
                        <ul className="space-y-2">
                          {industry.painPoints.map((point) => (
                            <li key={point} className="flex items-start gap-3 text-[#475569] text-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* How We Help */}
                      <div>
                        <h4 className="text-sm font-semibold text-[#001F60] uppercase tracking-wider mb-3">
                          How Tech Sheba Helps
                        </h4>
                        <ul className="space-y-2">
                          {industry.howWeHelp.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-[#475569] text-sm">
                              <CheckCircle2 className="w-4 h-4 text-[#001F60] mt-0.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Services Card */}
                    <div className={!isEven ? 'lg:order-1' : ''}>
                      <Card
                        className="border border-[#dbeafe] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                      >
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg text-[#1e293b]">
                            Relevant Services
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {industry.services.map((service) => {
                              const ServiceIcon = service.icon;
                              return (
                                <div
                                  key={service.label}
                                  className="flex items-center gap-3 p-3 rounded-xl bg-[#f0f4ff] border border-[#eff6ff] hover:bg-[#dbeafe] transition-colors duration-200"
                                >
                                  <div className="w-9 h-9 rounded-lg bg-white border border-[#dbeafe] flex items-center justify-center shrink-0">
                                    <ServiceIcon className="w-4 h-4 text-[#001F60]" />
                                  </div>
                                  <span className="text-sm font-medium text-[#1e293b]">
                                    {service.label}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                          <div className="mt-6 pt-5 border-t border-[#dbeafe]">
                            <Button
                              onClick={() => navigate('contact')}
                              className="w-full bg-[#001F60] hover:bg-[#001440] text-white"
                            >
                              Get a Solution for Your Business
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Separator between industries (except last) */}
                  {index < industries.length - 1 && (
                    <div className="mt-16 border-t border-[#e2e8f0]" />
                  )}
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ==================== SECTION 4: USE CASES GRID ==================== */}
      <section className="py-20 lg:py-24 bg-[#f0f4ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <Badge className="mb-4 bg-white text-[#001F60] border-[#dbeafe] hover:bg-[#eff6ff]">
                Real-World Scenarios
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-4">
                Use Cases Across <span className="text-gradient-green">Industries</span>
              </h2>
              <p className="text-[#475569] leading-relaxed">
                Here are some of the specific scenarios where Tech Sheba has delivered measurable
                results for our clients.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase) => {
              const UseCaseIcon = useCase.icon;
              return (
                <StaggerItem key={useCase.title}>
                  <Card className="h-full border border-white bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <CardContent className="p-6">
                      <div className="w-11 h-11 rounded-xl bg-[#eff6ff] border border-[#dbeafe] flex items-center justify-center mb-4">
                        <UseCaseIcon className="w-5 h-5 text-[#001F60]" />
                      </div>
                      <Badge
                        variant="outline"
                        className="mb-3 text-[10px] font-medium border-[#dbeafe] text-[#001440] bg-[#eff6ff]"
                      >
                        {useCase.industry}
                      </Badge>
                      <h3 className="text-base font-semibold text-[#1e293b] mb-2">
                        {useCase.title}
                      </h3>
                      <p className="text-sm text-[#64748b] leading-relaxed">
                        {useCase.description}
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ==================== SECTION 5: CTA ==================== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#001F60] to-[#001440] p-10 sm:p-16 text-center">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Don&apos;t See Your Industry?
                </h2>
                <p className="text-lg text-[#dbeafe] max-w-2xl mx-auto mb-8 leading-relaxed">
                  We serve businesses across many more sectors than listed here. Whether you run a
                  hospital, school, hotel, or any other type of organization, we&apos;d love to
                  discuss how Tech Sheba can help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    onClick={() => navigate('contact')}
                    className="bg-white text-[#001F60] hover:bg-[#eff6ff] font-semibold px-8"
                  >
                    Talk to Our Team
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => navigate('services')}
                    className="border-white/30 text-white hover:bg-white/10 px-8"
                  >
                    Browse All Services
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}