'use client';

import { useNavigation } from '@/lib/store';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  ChevronRight, Check, X, ArrowRight, Sparkles, Building2,
  Shield, Wifi, Camera, Phone, Monitor, Cloud, Server,
  Clock, Users, Headphones, BarChart3, GraduationCap,
  Wrench, Star, Globe, HardDrive, RefreshCw, FileText,
  Zap, CreditCard,
} from 'lucide-react';

const packages = [
  {
    name: 'Essential',
    subtitle: 'For small offices',
    price: 'Custom Quote',
    priceNote: 'Starting from à§³8,000/month',
    description:
      'Perfect for small offices and startups that need reliable, no-fuss IT infrastructure with professional support.',
    recommended: false,
    features: [
      { label: 'Basic network setup & configuration', included: true },
      { label: 'Up to 10 devices supported', included: true },
      { label: '8Ã—5 phone & remote support', included: true },
      { label: 'Monthly preventive maintenance', included: true },
      { label: 'Basic Wi-Fi setup (1-2 access points)', included: true },
      { label: 'Quarterly health check reports', included: true },
      { label: 'Email support with 4hr response', included: true },
      { label: 'CCTV basic package (up to 4 cameras)', included: false },
      { label: 'PBX / intercom setup', included: false },
      { label: 'Dedicated account manager', included: false },
      { label: 'Data backup & recovery', included: false },
      { label: 'SLA guarantees', included: false },
    ],
    cta: 'Get Essential Quote',
  },
  {
    name: 'Professional',
    subtitle: 'For growing businesses',
    price: 'Most Popular',
    priceNote: 'Starting from à§³25,000/month',
    description:
      'The ideal package for growing businesses that need comprehensive IT support, security, and communication solutions.',
    recommended: true,
    features: [
      { label: 'Advanced network setup with VLANs', included: true },
      { label: 'Up to 50 devices supported', included: true },
      { label: '12Ã—7 phone, remote & on-site support', included: true },
      { label: 'Monthly preventive maintenance', included: true },
      { label: 'Enterprise Wi-Fi (up to 10 access points)', included: true },
      { label: 'Quarterly health check & review meetings', included: true },
      { label: 'Priority email & chat support (2hr response)', included: true },
      { label: 'CCTV basic package (up to 8 cameras)', included: true },
      { label: 'PBX / intercom setup (up to 20 extensions)', included: true },
      { label: 'Dedicated account manager', included: true },
      { label: 'Basic data backup (weekly)', included: true },
      { label: 'SLA guarantees', included: false },
    ],
    cta: 'Get Professional Quote',
  },
  {
    name: 'Enterprise',
    subtitle: 'For large operations',
    price: 'Custom',
    priceNote: 'Tailored to your requirements',
    description:
      'Full-scale IT infrastructure management for large organizations that demand the highest reliability and security.',
    recommended: false,
    features: [
      { label: 'Full infrastructure design & deployment', included: true },
      { label: 'Unlimited devices', included: true },
      { label: '24Ã—7 phone, remote & on-site support', included: true },
      { label: 'Bi-weekly preventive maintenance', included: true },
      { label: 'Enterprise Wi-Fi (unlimited access points)', included: true },
      { label: 'Monthly health check & executive review', included: true },
      { label: 'Instant priority support (30min response)', included: true },
      { label: 'Advanced CCTV (unlimited cameras + analytics)', included: true },
      { label: 'Full PBX system (unlimited extensions)', included: true },
      { label: 'Dedicated account manager & engineer', included: true },
      { label: 'Comprehensive backup & disaster recovery', included: true },
      { label: 'SLA guarantees with penalties', included: true },
    ],
    cta: 'Get Enterprise Quote',
  },
];

const addOns = [
  {
    icon: Camera,
    title: 'Additional CCTV Cameras',
    description: 'Extra Hikvision cameras with NVR expansion, remote viewing, and 30-day recording.',
    price: 'From à§³3,500/camera',
  },
  {
    icon: RefreshCw,
    title: 'Extended Warranty',
    description: 'Extended 2-year or 3-year warranty coverage on all hardware with priority replacement.',
    price: 'From à§³2,000/year',
  },
  {
    icon: Cloud,
    title: 'Cloud Backup',
    description: 'Automated cloud backup for critical data with daily schedules and instant recovery.',
    price: 'From à§³5,000/month',
  },
  {
    icon: Globe,
    title: 'Website Maintenance',
    description: 'Monthly updates, security patches, content changes, performance monitoring, and uptime alerts.',
    price: 'From à§³4,000/month',
  },
  {
    icon: GraduationCap,
    title: 'IT Training',
    description: 'On-site training sessions for your team on network basics, security awareness, and tool usage.',
    price: 'From à§³10,000/session',
  },
  {
    icon: Server,
    title: 'Server Management',
    description: 'Dedicated server setup, monitoring, updates, and troubleshooting for on-premise or cloud servers.',
    price: 'From à§³15,000/month',
  },
  {
    icon: Wrench,
    title: 'Emergency Support',
    description: 'On-demand emergency IT support with 1-hour on-site response for critical infrastructure failures.',
    price: 'From à§³5,000/visit',
  },
  {
    icon: FileText,
    title: 'IT Audit & Consulting',
    description: 'Comprehensive audit of existing infrastructure with detailed recommendations and roadmap.',
    price: 'From à§³20,000',
  },
];

const comparisonFeatures = [
  { feature: 'Network Setup & Configuration', essential: 'Basic', professional: 'Advanced (VLANs)', enterprise: 'Full Design' },
  { feature: 'Max Devices', essential: '10', professional: '50', enterprise: 'Unlimited' },
  { feature: 'Support Hours', essential: '8Ã—5', professional: '12Ã—7', enterprise: '24Ã—7' },
  { feature: 'On-Site Visits', essential: '1/month', professional: '2/month', enterprise: 'Unlimited' },
  { feature: 'Response Time', essential: '4 hours', professional: '2 hours', enterprise: '30 minutes' },
  { feature: 'Preventive Maintenance', essential: 'Monthly', professional: 'Monthly', enterprise: 'Bi-weekly' },
  { feature: 'Wi-Fi Access Points', essential: 'Up to 2', professional: 'Up to 10', enterprise: 'Unlimited' },
  { feature: 'CCTV Cameras', essential: 'â€”', professional: 'Up to 8', enterprise: 'Unlimited' },
  { feature: 'PBX Extensions', essential: 'â€”', professional: 'Up to 20', enterprise: 'Unlimited' },
  { feature: 'Data Backup', essential: 'â€”', professional: 'Weekly', enterprise: 'Daily + DR' },
  { feature: 'Account Manager', essential: 'Shared', professional: 'Dedicated', enterprise: 'Dedicated + Engineer' },
  { feature: 'Health Check Reports', essential: 'Quarterly', professional: 'Quarterly', enterprise: 'Monthly' },
  { feature: 'SLA Guarantee', essential: 'â€”', professional: 'â€”', enterprise: 'With Penalties' },
  { feature: 'Disaster Recovery', essential: 'â€”', professional: 'â€”', enterprise: 'Full Plan' },
];

const faqs = [
  {
    question: 'Are these prices fixed, or can they be customized?',
    answer:
      'All our packages are fully customizable. The pricing shown represents starting points for typical configurations. We conduct a free assessment of your needs and provide a detailed, tailored quote with no hidden costs.',
  },
  {
    question: 'Is there a minimum contract period?',
    answer:
      'For the Essential package, we offer month-to-month flexibility. Professional packages typically require a 6-month commitment, and Enterprise packages are customized per engagement. We believe in earning your business every month, not locking you in.',
  },
  {
    question: 'What happens if I need to upgrade or downgrade my package?',
    answer:
      'You can upgrade or downgrade your package at any time with 30 days\' notice. We pro-rate the billing and ensure a seamless transition with zero downtime. Most clients start with Essential or Professional and scale as they grow.',
  },
  {
    question: 'Do prices include hardware costs, or is that separate?',
    answer:
      'Our monthly packages cover service, support, and maintenance. Hardware procurement is billed separately with transparent, competitive pricing. We source directly from authorized distributors and pass the savings to you â€” often 15-25% below retail.',
  },
  {
    question: 'Can I get a la carte services without signing up for a package?',
    answer:
      'Absolutely. While our packages offer the best value, we also offer individual services on a project basis. Check our Add-On Services section above, or contact us for a custom quote on any specific IT need.',
  },
];

export default function PricingPage() {
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
              <span className="text-[#001F60] font-medium">Pricing</span>
            </nav>

            <h1 className="text-4xl sm:text-5xl font-bold text-[#1e293b] mb-5">
              Pricing & <span className="text-gradient-green">Packages</span>
            </h1>
            <p className="text-lg text-[#475569] leading-relaxed max-w-3xl">
              Transparent, competitive pricing built for the Bangladeshi market. All plans are
              fully customizable â€” get exactly what you need, nothing more, nothing less.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ==================== SECTION 2: PRICING PHILOSOPHY ==================== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-[#eff6ff] text-[#001F60] border-[#dbeafe] hover:bg-[#dbeafe]">
                Our Approach
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-4">
                Transparent, Competitive Rates Built for the{' '}
                <span className="text-gradient-green">Bangladeshi Market</span>
              </h2>
              <p className="text-[#475569] leading-relaxed">
                We know that every business is different â€” that&apos;s why we don&apos;t believe
                in rigid pricing. Our packages serve as starting points, and we tailor every
                quote to match your specific requirements. No hidden fees, no surprise charges.
              </p>
            </div>
          </FadeIn>

          {/* ==================== SECTION 3: THREE PACKAGE TIERS ==================== */}
          <StaggerContainer className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
            {packages.map((pkg) => (
              <StaggerItem key={pkg.name}>
                <Card
                  className={`relative h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    pkg.recommended
                      ? 'border-2 border-[#001F60] shadow-lg ring-1 ring-[#001F60]/10'
                      : 'border border-[#e2e8f0] shadow-sm'
                  }`}
                >
                  {pkg.recommended && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                      <Badge className="bg-[#001F60] text-white border-[#001F60] px-4 py-1 shadow-md">
                        <Sparkles className="w-3 h-3 mr-1" />
                        Recommended
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-2 pt-8">
                    <h3 className="text-xl font-bold text-[#1e293b]">{pkg.name}</h3>
                    <p className="text-sm text-[#64748b]">{pkg.subtitle}</p>
                  </CardHeader>

                  <CardContent className="flex flex-col flex-1 pt-2 pb-6">
                    {/* Price */}
                    <div className="text-center mb-6">
                      <p
                        className={`text-3xl sm:text-4xl font-bold mb-1 ${
                          pkg.recommended ? 'text-[#001F60]' : 'text-[#1e293b]'
                        }`}
                      >
                        {pkg.name === 'Essential' ? (
                          <span className="text-2xl">Custom Quote</span>
                        ) : pkg.name === 'Professional' ? (
                          <span className="text-2xl">Most Popular</span>
                        ) : (
                          <span className="text-2xl">Custom</span>
                        )}
                      </p>
                      <p className="text-sm text-[#64748b]">{pkg.priceNote}</p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[#475569] text-center leading-relaxed mb-6">
                      {pkg.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8 flex-1">
                      {pkg.features.map((feature) => (
                        <li key={feature.label} className="flex items-start gap-3 text-sm">
                          {feature.included ? (
                            <Check className="w-4 h-4 text-[#001F60] mt-0.5 shrink-0" />
                          ) : (
                            <X className="w-4 h-4 text-[#cbd5e1] mt-0.5 shrink-0" />
                          )}
                          <span
                            className={
                              feature.included ? 'text-[#475569]' : 'text-[#94a3b8]'
                            }
                          >
                            {feature.label}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Button
                      onClick={() => navigate('contact')}
                      className={`w-full font-semibold ${
                        pkg.recommended
                          ? 'bg-[#001F60] hover:bg-[#001440] text-white'
                          : 'bg-white border-2 border-[#001F60] text-[#001F60] hover:bg-[#eff6ff]'
                      }`}
                    >
                      {pkg.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ==================== SECTION 4: ADD-ON SERVICES ==================== */}
      <section className="py-20 lg:py-24 bg-[#f0f4ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <Badge className="mb-4 bg-white text-[#001F60] border-[#dbeafe] hover:bg-[#eff6ff]">
                Extra Services
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-4">
                Need Something <span className="text-gradient-green">Extra?</span>
              </h2>
              <p className="text-[#475569] leading-relaxed">
                Enhance any package with our add-on services. Mix and match to build the perfect
                IT solution for your business.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {addOns.map((addon) => {
              const AddonIcon = addon.icon;
              return (
                <StaggerItem key={addon.title}>
                  <Card className="h-full border border-white bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <CardContent className="p-5">
                      <div className="w-10 h-10 rounded-xl bg-[#eff6ff] border border-[#dbeafe] flex items-center justify-center mb-3">
                        <AddonIcon className="w-5 h-5 text-[#001F60]" />
                      </div>
                      <h3 className="text-sm font-semibold text-[#1e293b] mb-2">
                        {addon.title}
                      </h3>
                      <p className="text-xs text-[#64748b] leading-relaxed mb-3">
                        {addon.description}
                      </p>
                      <p className="text-xs font-bold text-[#001F60]">{addon.price}</p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ==================== SECTION 5: COMPARISON TABLE ==================== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <Badge className="mb-4 bg-[#eff6ff] text-[#001F60] border-[#dbeafe] hover:bg-[#dbeafe]">
                Side by Side
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-4">
                Package <span className="text-gradient-green">Comparison</span>
              </h2>
              <p className="text-[#475569] leading-relaxed">
                See exactly what&apos;s included in each tier at a glance.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Card className="border border-[#e2e8f0] shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-[#f0f4ff] hover:bg-[#f0f4ff]">
                      <TableHead className="font-semibold text-[#1e293b] min-w-[200px]">
                        Feature
                      </TableHead>
                      <TableHead className="font-semibold text-[#1e293b] text-center min-w-[140px]">
                        Essential
                      </TableHead>
                      <TableHead className="font-semibold text-[#001F60] text-center min-w-[140px] bg-[#eff6ff]">
                        <div className="flex items-center justify-center gap-1">
                          Professional
                          <Star className="w-3.5 h-3.5 fill-[#001F60]" />
                        </div>
                      </TableHead>
                      <TableHead className="font-semibold text-[#1e293b] text-center min-w-[140px]">
                        Enterprise
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparisonFeatures.map((row) => (
                      <TableRow key={row.feature}>
                        <TableCell className="font-medium text-[#475569] text-sm py-3">
                          {row.feature}
                        </TableCell>
                        <TableCell className="text-center text-sm text-[#64748b] py-3">
                          {row.essential === 'â€”' ? (
                            <span className="text-[#cbd5e1]">â€”</span>
                          ) : (
                            row.essential
                          )}
                        </TableCell>
                        <TableCell className="text-center text-sm text-[#001F60] font-medium py-3 bg-[#fafffe]">
                          {row.professional}
                        </TableCell>
                        <TableCell className="text-center text-sm text-[#475569] py-3">
                          {row.enterprise}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* ==================== SECTION 6: FAQ ==================== */}
      <section className="py-20 lg:py-24 bg-[#f0f4ff]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <Badge className="mb-4 bg-white text-[#001F60] border-[#dbeafe] hover:bg-[#eff6ff]">
                Common Questions
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-4">
                Pricing <span className="text-gradient-green">FAQ</span>
              </h2>
              <p className="text-[#475569] leading-relaxed">
                Got questions about our pricing? Here are the answers to the most common ones.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-white border border-[#dbeafe] rounded-xl px-6 data-[state=open]:shadow-sm"
                >
                  <AccordionTrigger className="text-[#1e293b] font-semibold hover:no-underline text-left text-sm sm:text-base py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#475569] text-sm leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      {/* ==================== SECTION 7: CTA ==================== */}
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
                  Get Your Custom Quote
                </h2>
                <p className="text-lg text-[#dbeafe] max-w-2xl mx-auto mb-8 leading-relaxed">
                  Every business is unique. Tell us what you need, and we&apos;ll create a
                  tailored package with transparent pricing â€” usually within 24 hours. No
                  obligation, no pressure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    onClick={() => navigate('contact')}
                    className="bg-white text-[#001F60] hover:bg-[#eff6ff] font-semibold px-8"
                  >
                    Request a Free Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => navigate('services')}
                    className="border-white/30 text-white hover:bg-white/10 px-8"
                  >
                    Compare Services
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