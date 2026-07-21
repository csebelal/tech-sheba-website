'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigation } from '@/lib/store';
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from '@/components/layout/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Shield,
  Layers,
  Building,
  Check,
  Phone,
  Mail,
  Users,
  Scale,
  Package,
  Eye,
  Sparkles,
  Star,
  CheckCircle2,
  Send,
  Wifi,
  Camera,
  PhoneCall,
  Headphones,
  Database,
  Globe,
  Lightbulb,
  KeyRound,
} from 'lucide-react';

/* ───────────────────── Data Constants ───────────────────── */

const REASONS = [
  {
    icon: Users,
    title: 'Businesses Vary in Size',
    description:
      'A 5-person startup has very different needs than a 200-person corporate office. We tailor every solution.',
  },
  {
    icon: Package,
    title: 'Service Bundles Differ',
    description:
      'Some businesses need just CCTV, others need a complete IT overhaul. You only pay for what you need.',
  },
  {
    icon: Scale,
    title: 'Scalable Solutions',
    description:
      'As your business grows, your IT should too. Our pricing scales with you — never overpaying for idle capacity.',
  },
  {
    icon: Eye,
    title: 'No Hidden Fees',
    description:
      'What we quote is what you pay. No surprise invoices, no hidden charges, no fine print — ever.',
  },
];

const PACKAGES = [
  {
    name: 'Essentials',
    icon: Shield,
    description: 'For small businesses getting started with IT',
    price: 'Starting from BDT 15,000/month',
    features: [
      'Basic network setup & configuration',
      '1 CCTV camera with recording',
      'Email support (48-hour response)',
      'Monthly IT checkup',
      'Basic firewall setup',
    ],
    highlighted: false,
    badge: null,
  },
  {
    name: 'Professional',
    icon: Layers,
    description: 'For growing businesses that need comprehensive IT',
    price: 'Starting from BDT 45,000/month',
    features: [
      'Full network setup & optimization',
      'CCTV system (up to 8 cameras)',
      'PBX phone system',
      'IT support & maintenance',
      'Data backup solution',
      'Priority support (4-hour response)',
      'Quarterly IT review',
    ],
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    icon: Building,
    description: 'For larger operations needing end-to-end IT management',
    price: 'Starting from BDT 1,20,000/month',
    features: [
      'Everything in Professional',
      'Access control system',
      'Advanced cybersecurity setup',
      'Dedicated support engineer',
      'Monthly performance reports',
      'Strategic IT planning & consultancy',
      'Server management',
      'Disaster recovery planning',
    ],
    highlighted: false,
    badge: null,
  },
];

const SERVICES_OPTIONS = [
  { label: 'Network Setup', value: 'network-setup', icon: Wifi },
  { label: 'CCTV/Security', value: 'cctv-security', icon: Camera },
  { label: 'PBX/Phone', value: 'pbx-phone', icon: PhoneCall },
  { label: 'IT Support', value: 'it-support', icon: Headphones },
  { label: 'Data Backup', value: 'data-backup', icon: Database },
  { label: 'Website Design', value: 'website-design', icon: Globe },
  { label: 'IT Consultancy', value: 'it-consultancy', icon: Lightbulb },
];

const FAQS = [
  {
    question: 'How is pricing determined?',
    answer:
      'We evaluate your specific requirements during a free consultation — including business size, number of locations, services needed, and existing infrastructure. This allows us to craft a customized quote that fits your exact needs and budget without any padding.',
  },
  {
    question: 'Do you offer monthly payment plans?',
    answer:
      'Yes! All our packages are available on monthly billing cycles. We also offer quarterly and annual plans with additional discounts. There are no long-term lock-in contracts — we earn your business every month.',
  },
  {
    question: 'What if I only need one service?',
    answer:
      'Absolutely fine. You don\'t need to purchase a full package. We offer individual services à la carte. For example, you can get just a CCTV installation or just a network setup — and you can always add more services later as needed.',
  },
  {
    question: 'Is there a setup fee?',
    answer:
      'One-time setup fees may apply depending on the complexity of the installation (e.g., structured cabling, hardware procurement). These are always discussed upfront and clearly listed in your proposal — there are never any surprise charges.',
  },
];

const EMPLOYEE_RANGES = [
  { label: '1–10 employees', value: '1-10' },
  { label: '11–50 employees', value: '11-50' },
  { label: '51–200 employees', value: '51-200' },
  { label: '200+ employees', value: '200+' },
];

/* ───────────────────── Sub-Components ───────────────────── */

function PageHero() {
  const { navigate } = useNavigation();

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand to-brand-light animate-gradient" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
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
        <AnimatedSection direction="none" delay={0.1}>
          <nav className="flex items-center justify-center gap-2 text-sm text-white/70 mb-8">
            <button
              onClick={() => navigate('home')}
              className="hover:text-white transition-colors duration-300"
            >
              Home
            </button>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">Pricing</span>
          </nav>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.15}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Transparent,{' '}
            <span className="text-brand-200">Custom-Tailored</span>{' '}
            Pricing
          </h1>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.25}>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Every business is unique. Get a customized solution that fits your exact
            needs and budget — no surprise invoices, no hidden fees.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

function WhyCustomPricing() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand text-sm font-medium mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-brand" />
            Our Approach
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">
            Why{' '}
            <span className="text-gradient-green">Custom Pricing?</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We don&apos;t believe in one-size-fits-all. Here&apos;s why our pricing
            is always tailored to your business.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {REASONS.map((reason) => (
            <StaggerItem key={reason.title}>
              <div className="green-glow rounded-2xl border border-brand-50 bg-white p-6 lg:p-8 transition-all duration-300 hover:border-brand-200 hover:-translate-y-1 h-full text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 border border-brand-100 flex items-center justify-center mx-auto mb-5">
                  <reason.icon className="w-7 h-7 text-brand" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function SolutionPackages() {
  const { navigate } = useNavigation();

  return (
    <section className="py-20 lg:py-28 bg-brand-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand text-sm font-medium mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-brand" />
            Solution Packages
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">
            Starting Points for{' '}
            <span className="text-gradient-green">Every Stage</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            These packages are starting points — we&apos;ll customize them to your
            exact requirements during a free consultation.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PACKAGES.map((pkg) => (
            <StaggerItem key={pkg.name}>
              <div
                className={`relative rounded-2xl border h-full flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                  pkg.highlighted
                    ? 'border-brand bg-white shadow-xl shadow-brand/10 ring-2 ring-brand/20'
                    : 'border-brand-50 bg-white green-glow hover:border-brand-200'
                }`}
              >
                {/* Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                    <Badge className="bg-brand text-white border-brand shadow-lg shadow-brand/20 font-semibold px-4 py-1">
                      <Star className="w-3.5 h-3.5 mr-1.5 fill-current" />
                      {pkg.badge}
                    </Badge>
                  </div>
                )}

                <div className={`p-6 lg:p-8 flex flex-col flex-1 ${pkg.highlighted ? 'pt-10' : ''}`}>
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                        pkg.highlighted
                          ? 'bg-brand text-white'
                          : 'bg-gradient-to-br from-brand-50 to-brand-100 border border-brand-100'
                      }`}
                    >
                      <pkg.icon
                        className={`w-6 h-6 ${pkg.highlighted ? 'text-white' : 'text-brand'}`}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {pkg.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                    {pkg.description}
                  </p>

                  {/* Price */}
                  <div className={`mb-6 p-4 rounded-xl ${pkg.highlighted ? 'bg-brand-50 border border-brand-100' : 'bg-brand-50/50 border border-brand-50'}`}>
                    <p className="text-lg font-bold text-brand-dark">
                      {pkg.price}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Custom pricing available — request a quote
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${pkg.highlighted ? 'bg-brand text-white' : 'bg-brand-50 text-brand'}`}>
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-sm text-foreground leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    size="lg"
                    onClick={() => navigate('contact')}
                    className={`w-full rounded-xl py-6 text-base font-semibold transition-all duration-300 group ${
                      pkg.highlighted
                        ? 'bg-brand text-white hover:bg-brand-dark shadow-lg shadow-brand/20'
                        : 'bg-white text-brand border-2 border-brand hover:bg-brand-50'
                    }`}
                  >
                    Get a Custom Quote
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function QuoteRequestForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    employees: '',
    services: [] as string[],
    description: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const services = prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="py-20 lg:py-28 bg-white" id="quote-form">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand text-sm font-medium mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-brand" />
            Free Quote
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">
            Request Your{' '}
            <span className="text-gradient-green">Custom Quote</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Tell us about your business and what you need. We&apos;ll get back to
            you within 24 hours with a tailored proposal.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="green-glow rounded-2xl border border-brand-100 bg-brand-50/50 p-10 lg:p-14 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-brand" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Quote Request Received!
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-foreground">{formData.fullName}</span>! 
                  Our team will review your requirements and get back to you within 24 hours 
                  with a detailed, customized proposal.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: '',
                      companyName: '',
                      email: '',
                      phone: '',
                      employees: '',
                      services: [],
                      description: '',
                    });
                  }}
                  className="mt-8 border-brand text-brand hover:bg-brand-50 hover:text-brand rounded-xl"
                >
                  Submit Another Request
                </Button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="green-glow rounded-2xl border border-brand-50 bg-white p-6 sm:p-8 lg:p-10"
              >
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-sm font-semibold text-foreground">
                      Full Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Your full name"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      required
                      className="rounded-xl border-brand-50 focus:border-brand focus:ring-brand/20 h-11"
                    />
                  </div>

                  {/* Company Name */}
                  <div className="space-y-2">
                    <Label htmlFor="companyName" className="text-sm font-semibold text-foreground">
                      Company Name
                    </Label>
                    <Input
                      id="companyName"
                      type="text"
                      placeholder="Your company"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      className="rounded-xl border-brand-50 focus:border-brand focus:ring-brand/20 h-11"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold text-foreground">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="rounded-xl border-brand-50 focus:border-brand focus:ring-brand/20 h-11"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-semibold text-foreground">
                      Phone <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+880 1XXX-XXXXXX"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                      className="rounded-xl border-brand-50 focus:border-brand focus:ring-brand/20 h-11"
                    />
                  </div>
                </div>

                {/* Number of Employees */}
                <div className="space-y-2 mb-5">
                  <Label htmlFor="employees" className="text-sm font-semibold text-foreground">
                    Number of Employees
                  </Label>
                  <Select
                    value={formData.employees}
                    onValueChange={(value) => handleInputChange('employees', value)}
                  >
                    <SelectTrigger className="rounded-xl border-brand-50 focus:border-brand focus:ring-brand/20 h-11">
                      <SelectValue placeholder="Select employee range" />
                    </SelectTrigger>
                    <SelectContent>
                      {EMPLOYEE_RANGES.map((range) => (
                        <SelectItem key={range.value} value={range.value}>
                          {range.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Services Interested In */}
                <div className="space-y-3 mb-5">
                  <Label className="text-sm font-semibold text-foreground">
                    Services Interested In
                  </Label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {SERVICES_OPTIONS.map((service) => {
                      const isSelected = formData.services.includes(service.value);
                      return (
                        <button
                          key={service.value}
                          type="button"
                          onClick={() => handleServiceToggle(service.value)}
                          className={`flex items-center gap-2 p-3 rounded-xl border text-sm font-medium transition-all duration-200 text-left ${
                            isSelected
                              ? 'border-brand bg-brand-50 text-brand-dark'
                              : 'border-brand-50 bg-white text-muted-foreground hover:border-brand-100 hover:bg-brand-50/30'
                          }`}
                        >
                          <div
                            className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors duration-200 ${
                              isSelected
                                ? 'border-brand bg-brand'
                                : 'border-brand-100 bg-white'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3 text-white" />}
                          </div>
                          <span className="truncate">{service.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2 mb-8">
                  <Label htmlFor="description" className="text-sm font-semibold text-foreground">
                    Brief Description of Your Needs
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Tell us about your current IT setup, challenges, and what you're looking for..."
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={4}
                    className="rounded-xl border-brand-50 focus:border-brand focus:ring-brand/20 resize-none"
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-brand text-white hover:bg-brand-dark rounded-xl py-6 text-base font-semibold shadow-lg shadow-brand/20 transition-all duration-300 group"
                >
                  Request My Free Quote
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </form>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-brand-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand text-sm font-medium mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-brand" />
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">
            Pricing{' '}
            <span className="text-gradient-green">Questions</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Common questions about our pricing and billing.
          </p>
        </AnimatedSection>

        <AnimatedSection className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className="green-glow rounded-2xl border border-brand-50 bg-white overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 lg:p-6 text-left group"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-base lg:text-lg font-semibold text-foreground pr-4 group-hover:text-brand transition-colors duration-200">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <div className="px-5 lg:px-6 pb-5 lg:pb-6 pt-0">
                        <div className="border-t border-brand-50 pt-4">
                          <p className="text-muted-foreground leading-relaxed text-sm">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand to-brand-light animate-gradient" />
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
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
                Prefer to{' '}
                <span className="text-brand-200">Talk?</span>
              </h2>
              <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
                Call us directly or schedule a consultation. We&apos;re happy to walk
                you through your options and answer any questions.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
                {/* Phone */}
                <a
                  href="tel:+8801234567890"
                  className="flex items-center gap-3 text-white hover:text-brand-200 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-white/60 uppercase tracking-wider font-medium">
                      Call Us
                    </p>
                    <p className="text-lg font-semibold">+880 1234-567890</p>
                  </div>
                </a>

                {/* Divider */}
                <div className="hidden sm:block w-px h-12 bg-white/20" />

                {/* Email */}
                <a
                  href="mailto:info@techsheba.com.bd"
                  className="flex items-center gap-3 text-white hover:text-brand-200 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-white/60 uppercase tracking-wider font-medium">
                      Email Us
                    </p>
                    <p className="text-lg font-semibold">info@techsheba.com.bd</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ───────────────────── Main Component ───────────────────── */

export default function PricingPage() {
  return (
    <div className="overflow-hidden">
      <PageHero />
      <WhyCustomPricing />
      <SolutionPackages />
      <QuoteRequestForm />
      <FAQSection />
      <CTASection />
    </div>
  );
}