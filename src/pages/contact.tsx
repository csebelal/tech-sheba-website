'use client';

import { useState } from 'react';
import { useNavigation } from '@/lib/store';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Phone,
  Mail,
  Globe,
  MapPin,
  Clock,
  ChevronRight,
  Send,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '01980884541',
    href: 'tel:01980884541',
    color: 'bg-[#001F60]',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@techsheba.net',
    href: 'mailto:hello@techsheba.net',
    color: 'bg-[#0775FF]',
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'techsheba.net',
    href: 'https://techsheba.net',
    color: 'bg-[#4DA3FF]',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Dhaka, Bangladesh',
    href: null,
    color: 'bg-[#001440]',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Sat-Thu: 9AM-6PM',
    href: null,
    color: 'bg-[#001F60]',
  },
];

const serviceOptions = [
  'Network & Connectivity',
  'Security Systems (CCTV)',
  'IT Support & Maintenance',
  'Web Design & Development',
  'Digital Marketing',
  'Structured Cabling',
  'PBX / Intercom Systems',
  'Access Control & Attendance',
  'Other',
];

export default function ContactPage() {
  const { navigate } = useNavigation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <div className="overflow-hidden">
      {/* ==================== SECTION 1: PAGE HEADER ==================== */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#eff6ff] via-white to-[#f0f4ff] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #001F60 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute top-20 right-[10%] w-32 h-32 rounded-full bg-[#001F60]/5 animate-float" />
        <div
          className="absolute bottom-10 left-[15%] w-24 h-24 rounded-2xl bg-[#4DA3FF]/5 animate-float"
          style={{ animationDelay: '1.5s' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <nav className="flex items-center gap-2 text-sm text-[#64748b] mb-6">
              <button
                onClick={() => navigate('home')}
                className="hover:text-[#001F60] transition-colors"
              >
                Home
              </button>
              <ChevronRight className="w-4 h-4" />
              <span className="text-[#001F60] font-medium">Contact</span>
            </nav>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Badge className="mb-4 bg-[#001F60]/10 text-[#001F60] hover:bg-[#001F60]/20 border-0 text-sm px-4 py-1">
              Contact Us
            </Badge>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e293b] mb-4 tracking-tight">
              Get in{' '}
              <span className="text-[#001F60]">Touch</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-lg md:text-xl text-[#475569] max-w-2xl leading-relaxed">
              Ready to transform your business technology? We&apos;re here to help.
              Reach out to our team for a free consultation and assessment.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ==================== SECTION 2: CONTACT FORM + INFO ==================== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left: Contact Form */}
            <div className="lg:col-span-3">
              <FadeIn>
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1e293b] mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-[#475569]">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                </div>
              </FadeIn>

              {isSubmitted ? (
                <FadeIn>
                  <Card className="border-[#dbeafe] bg-[#eff6ff]/50">
                    <CardContent className="p-8 md:p-12 text-center">
                      <div className="w-20 h-20 rounded-full bg-[#001F60]/10 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-[#001F60]" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#1e293b] mb-3">
                        Thank You!
                      </h3>
                      <p className="text-[#475569] mb-2 text-lg">
                        Your message has been received successfully.
                      </p>
                      <p className="text-[#64748b] mb-8">
                        Our team will review your request and get back to you within 24 hours.
                        We look forward to helping you with your IT needs.
                      </p>
                      <Button
                        onClick={handleReset}
                        className="bg-gradient-to-r from-[#001F60] to-[#0775FF] hover:from-[#001440] hover:to-[#001F60] text-white px-8 py-3 rounded-lg font-medium shadow-lg shadow-[#001F60]/20 hover:shadow-xl hover:shadow-[#001F60]/30 transition-all duration-300"
                      >
                        Send Another Message
                      </Button>
                    </CardContent>
                  </Card>
                </FadeIn>
              ) : (
                <FadeIn delay={0.1}>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className="text-sm font-medium text-[#1e293b]"
                        >
                          Full Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="h-12 border-[#e2e8f0] focus:border-[#001F60] focus:ring-[#001F60]/20 rounded-lg bg-white text-[#1e293b] placeholder:text-[#94a3b8] transition-all duration-200"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-sm font-medium text-[#1e293b]"
                        >
                          Email Address <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="you@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="h-12 border-[#e2e8f0] focus:border-[#001F60] focus:ring-[#001F60]/20 rounded-lg bg-white text-[#1e293b] placeholder:text-[#94a3b8] transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="phone"
                          className="text-sm font-medium text-[#1e293b]"
                        >
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="01XXXXXXXXX"
                          value={formData.phone}
                          onChange={handleChange}
                          className="h-12 border-[#e2e8f0] focus:border-[#001F60] focus:ring-[#001F60]/20 rounded-lg bg-white text-[#1e293b] placeholder:text-[#94a3b8] transition-all duration-200"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="company"
                          className="text-sm font-medium text-[#1e293b]"
                        >
                          Company Name
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Your company name"
                          value={formData.company}
                          onChange={handleChange}
                          className="h-12 border-[#e2e8f0] focus:border-[#001F60] focus:ring-[#001F60]/20 rounded-lg bg-white text-[#1e293b] placeholder:text-[#94a3b8] transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-[#1e293b]">
                        Service Interest <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) =>
                          setFormData((prev) => ({ ...prev, service: value }))
                        }
                        required
                      >
                        <SelectTrigger className="h-12 w-full border-[#e2e8f0] focus:border-[#001F60] focus:ring-[#001F60]/20 rounded-lg bg-white text-[#1e293b] transition-all duration-200">
                          <SelectValue placeholder="Select a service you're interested in" />
                        </SelectTrigger>
                        <SelectContent className="rounded-lg border-[#e2e8f0]">
                          {serviceOptions.map((service) => (
                            <SelectItem
                              key={service}
                              value={service}
                              className="text-[#1e293b] focus:bg-[#eff6ff] focus:text-[#001F60]"
                            >
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-sm font-medium text-[#1e293b]"
                      >
                        Message <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project, requirements, or any questions you have..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="border-[#e2e8f0] focus:border-[#001F60] focus:ring-[#001F60]/20 rounded-lg bg-white text-[#1e293b] placeholder:text-[#94a3b8] resize-none transition-all duration-200"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto bg-gradient-to-r from-[#001F60] to-[#0775FF] hover:from-[#001440] hover:to-[#001F60] text-white px-8 py-3 rounded-lg font-medium shadow-lg shadow-[#001F60]/20 hover:shadow-xl hover:shadow-[#001F60]/30 transition-all duration-300 h-12 text-base"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Request Free Assessment
                    </Button>
                  </form>
                </FadeIn>
              )}
            </div>

            {/* Right: Contact Info Cards */}
            <div className="lg:col-span-2">
              <FadeIn delay={0.2}>
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1e293b] mb-2">
                    Contact Information
                  </h2>
                  <p className="text-[#475569]">
                    Reach out directly through any of the channels below.
                  </p>
                </div>
              </FadeIn>

              <StaggerContainer className="space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <StaggerItem key={info.label}>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="block"
                        >
                          <Card className="group border-[#e2e8f0] hover:border-[#001F60]/30 hover:shadow-lg hover:shadow-[#001F60]/5 transition-all duration-300 cursor-pointer bg-white">
                            <CardContent className="p-4 flex items-center gap-4">
                              <div
                                className={`w-12 h-12 rounded-xl ${info.color} flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}
                              >
                                <Icon className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <p className="text-xs font-medium text-[#64748b] uppercase tracking-wider">
                                  {info.label}
                                </p>
                                <p className="text-[#1e293b] font-medium group-hover:text-[#001F60] transition-colors">
                                  {info.value}
                                </p>
                              </div>
                              <ArrowRight className="w-4 h-4 text-[#94a3b8] ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </CardContent>
                          </Card>
                        </a>
                      ) : (
                        <Card className="border-[#e2e8f0] bg-white">
                          <CardContent className="p-4 flex items-center gap-4">
                            <div
                              className={`w-12 h-12 rounded-xl ${info.color} flex items-center justify-center shrink-0 shadow-md`}
                            >
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <p className="text-xs font-medium text-[#64748b] uppercase tracking-wider">
                                {info.label}
                              </p>
                              <p className="text-[#1e293b] font-medium">
                                {info.value}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      )}
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>

              {/* Quick Response Promise */}
              <FadeIn delay={0.6}>
                <Card className="mt-6 bg-gradient-to-br from-[#eff6ff] to-[#f0f4ff] border-[#dbeafe]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#001F60]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Clock className="w-5 h-5 text-[#001F60]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#1e293b] text-sm mb-1">
                          Quick Response Promise
                        </p>
                        <p className="text-[#475569] text-sm leading-relaxed">
                          We respond to all inquiries within 24 hours during business
                          days. For urgent matters, call us directly for immediate
                          assistance.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 3: MAP PLACEHOLDER ==================== */}
      <section className="py-20 lg:py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1e293b] mb-3">
                Our Location
              </h2>
              <p className="text-[#475569] max-w-xl mx-auto">
                Visit our office in Dhaka or we can come to you â€” we serve
                businesses across all of Bangladesh.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="relative rounded-2xl overflow-hidden border border-[#e2e8f0] shadow-lg">
              {/* Map Placeholder */}
              <div className="w-full h-80 md:h-96 bg-gradient-to-br from-[#eff6ff] via-[#f0f4ff] to-[#dbeafe] flex flex-col items-center justify-center relative">
                {/* Grid pattern */}
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      'linear-gradient(#001F60 1px, transparent 1px), linear-gradient(90deg, #001F60 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />
                {/* Road-like lines */}
                <div className="absolute inset-0 opacity-[0.08]">
                  <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#001F60] -translate-y-1/2" />
                  <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-[#001F60] -translate-x-1/2" />
                  <div className="absolute top-1/4 left-0 right-0 h-0.5 bg-[#001F60]" />
                  <div className="absolute top-3/4 left-0 right-0 h-0.5 bg-[#001F60]" />
                  <div className="absolute top-0 bottom-0 left-1/4 w-0.5 bg-[#001F60]" />
                  <div className="absolute top-0 bottom-0 left-3/4 w-0.5 bg-[#001F60]" />
                </div>

                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#001F60] flex items-center justify-center shadow-xl shadow-[#001F60]/30 animate-bounce">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-[#1e293b] mb-1">
                      Dhaka, Bangladesh
                    </h3>
                    <p className="text-[#475569] text-sm">
                      Tech Sheba Head Office
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className="border-[#001F60]/20 text-[#001F60] bg-white/80 backdrop-blur-sm px-4 py-1.5 text-sm"
                  >
                    <MapPin className="w-3.5 h-3.5 mr-1.5" />
                    23.8103Â° N, 90.4125Â° E
                  </Badge>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ==================== SECTION 4: ALTERNATIVE CONTACT ==================== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#001F60] via-[#0775FF] to-[#4DA3FF] p-10 md:p-16">
              {/* Background decoration */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                    <MessageCircle className="w-6 h-6 text-white/80" />
                    <span className="text-white/80 text-sm font-medium uppercase tracking-wider">
                      Prefer to Talk?
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    Let&apos;s Have a Conversation
                  </h2>
                  <p className="text-white/80 text-lg max-w-lg leading-relaxed">
                    Sometimes it&apos;s easier to discuss your needs over the phone.
                    Our team is ready to answer your questions and provide
                    immediate guidance.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                  <a href="tel:01980884541">
                    <Button
                      size="lg"
                      className="bg-white text-[#001F60] hover:bg-white/90 px-8 py-3 rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 h-14 text-base"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call 01980884541
                    </Button>
                  </a>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold h-14 text-base bg-transparent transition-all duration-300"
                    onClick={() => navigate('faq')}
                  >
                    View FAQ
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ==================== SECTION 5: OFFICE LOCATION DETAILS ==================== */}
      <section className="py-20 lg:py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div>
                <Badge className="mb-4 bg-[#001F60]/10 text-[#001F60] hover:bg-[#001F60]/20 border-0 text-sm px-4 py-1">
                  Our Coverage
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-6 leading-tight">
                  Based in Dhaka,{' '}
                  <span className="text-[#001F60]">Serving All of Bangladesh</span>
                </h2>
                <p className="text-[#475569] leading-relaxed mb-6">
                  Tech Sheba is headquartered in Dhaka, the vibrant capital and
                  business hub of Bangladesh. From our central location, we provide
                  comprehensive IT solutions to businesses of all sizes across the
                  entire country.
                </p>
                <p className="text-[#475569] leading-relaxed mb-8">
                  Whether your office is in Gulshan, Motijheel, Dhanmondi, Uttara, or
                  any other area in Bangladesh, our team is ready to visit your
                  premises for on-site assessments, installations, and support. We
                  also offer remote support for quick resolutions without the need
                  for a physical visit.
                </p>

                <div className="space-y-4">
                  {[
                    'Dhaka Division â€” Full Coverage',
                    'Chittagong, Sylhet & Rajshahi â€” On-site Available',
                    'Remote Support Nationwide',
                    'Same-day Service in Dhaka',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#001F60]/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-[#001F60]" />
                      </div>
                      <span className="text-[#475569] font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#eff6ff] via-[#f0f4ff] to-[#dbeafe] p-8 md:p-10">
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle, #001F60 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  />
                  <div className="relative space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#001F60] flex items-center justify-center shadow-lg shadow-[#001F60]/20">
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1e293b]">Head Office</h4>
                        <p className="text-[#475569] text-sm">Dhaka, Bangladesh</p>
                      </div>
                    </div>
                    <div className="h-px bg-[#001F60]/10" />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 text-center">
                        <p className="text-2xl font-bold text-[#001F60]">500+</p>
                        <p className="text-xs text-[#64748b] mt-1">Clients Served</p>
                      </div>
                      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 text-center">
                        <p className="text-2xl font-bold text-[#001F60]">8+</p>
                        <p className="text-xs text-[#64748b] mt-1">Years Experience</p>
                      </div>
                      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 text-center">
                        <p className="text-2xl font-bold text-[#001F60]">50+</p>
                        <p className="text-xs text-[#64748b] mt-1">Team Members</p>
                      </div>
                      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 text-center">
                        <p className="text-2xl font-bold text-[#001F60]">99%</p>
                        <p className="text-xs text-[#64748b] mt-1">Satisfaction Rate</p>
                      </div>
                    </div>
                    <div className="h-px bg-[#001F60]/10" />
                    <div className="flex items-center gap-3 text-[#475569] text-sm">
                      <Clock className="w-4 h-4 text-[#001F60] shrink-0" />
                      <span>
                        Open Saturday to Thursday, 9:00 AM to 6:00 PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}

function Building2(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  );
}