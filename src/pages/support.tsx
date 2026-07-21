'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigation } from '@/lib/store';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
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
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Search,
  AlertTriangle,
  CheckCircle2,
  Send,
  Headphones,
  Wrench,
  BookOpen,
  FileText,
  ClipboardList,
  Shield,
  Zap,
  Timer,
  HelpCircle,
  MonitorSpeaker,
  Building2,
  Network,
} from 'lucide-react';

const supportOptions = [
  {
    icon: Phone,
    title: 'Phone Support',
    description:
      'Speak directly with our experienced support engineers. Get immediate assistance for urgent issues, configuration help, and troubleshooting guidance.',
    details: [
      'Direct line: 01980884541',
      'Business hours: Satâ€“Thu, 9:00 AM â€“ 6:00 PM',
      'Average wait time: under 2 minutes',
      'Bilingual support (Bangla & English)',
    ],
    cta: 'Call Now',
    highlight: false,
  },
  {
    icon: Mail,
    title: 'Email Support',
    description:
      'Send us a detailed description of your issue and receive a comprehensive response. Ideal for non-urgent queries, documentation requests, and follow-ups.',
    details: [
      'Email: hello@techsheba.net',
      'Typical response time: 2â€“4 hours',
      'Detailed issue tracking with ticket numbers',
      'Attach screenshots and logs for faster resolution',
    ],
    cta: 'Send Email',
    highlight: false,
  },
  {
    icon: MapPin,
    title: 'On-Site Support',
    description:
      'Our engineers will visit your premises for hands-on troubleshooting, installation support, and maintenance. Available across Dhaka and surrounding areas.',
    details: [
      'Coverage: Dhaka city & surrounding areas',
      'Scheduling: Next-day or same-day for emergencies',
      'Full equipment and tool kits brought on-site',
      'Post-visit summary report included',
    ],
    cta: 'Request Visit',
    highlight: false,
  },
];

const supportSteps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Report Issue',
    description: 'Contact us via phone, email, or submit a ticket. Provide details about your problem.',
  },
  {
    icon: Search,
    step: '02',
    title: 'Diagnose',
    description: 'Our engineers analyze the issue, identify root cause, and determine the best solution.',
  },
  {
    icon: Wrench,
    step: '03',
    title: 'Resolve',
    description: 'We implement the fix â€” remotely or on-site â€” and verify everything is working correctly.',
  },
  {
    icon: CheckCircle2,
    step: '04',
    title: 'Follow Up',
    description: 'We check back to confirm resolution, document the solution, and suggest preventive measures.',
  },
];

const selfResources = [
  {
    icon: HelpCircle,
    title: 'FAQ',
    description: 'Quick answers to the most commonly asked questions about our services and systems.',
    action: () => {},
    actionLabel: 'View FAQ',
    actionPage: 'faq' as const,
  },
  {
    icon: BookOpen,
    title: 'Blog & Guides',
    description: 'In-depth tutorials, how-to guides, and industry insights from our technical team.',
    action: () => {},
    actionLabel: 'Read Guides',
    actionPage: 'blog' as const,
  },
  {
    icon: Network,
    title: 'Network Troubleshooting',
    description: 'Step-by-step guides for diagnosing and resolving common network connectivity issues.',
    action: () => {},
    actionLabel: 'Coming Soon',
    actionPage: null as never,
  },
  {
    icon: MonitorSpeaker,
    title: 'Security System Manuals',
    description: 'User manuals and quick-start guides for CCTV, access control, and alarm systems.',
    action: () => {},
    actionLabel: 'Coming Soon',
    actionPage: null as never,
  },
  {
    icon: ClipboardList,
    title: 'Maintenance Checklist',
    description: 'Downloadable checklists for routine IT infrastructure and security system maintenance.',
    action: () => {},
    actionLabel: 'Download',
    actionPage: null as never,
  },
  {
    icon: FileText,
    title: 'Knowledge Base',
    description: 'Comprehensive articles covering product setup, configuration, and best practices.',
    action: () => {},
    actionLabel: 'Coming Soon',
    actionPage: null as never,
  },
];

const slaLevels = [
  {
    priority: 'Critical',
    description: 'System down, security breach, complete service outage',
    responseTime: '2 hours',
    color: 'bg-red-50 border-red-200',
    textColor: 'text-red-700',
    badgeColor: 'bg-red-100 text-red-700',
    icon: AlertTriangle,
  },
  {
    priority: 'High',
    description: 'Major functionality impaired, significant performance degradation',
    responseTime: '4 hours',
    color: 'bg-amber-50 border-amber-200',
    textColor: 'text-amber-700',
    badgeColor: 'bg-amber-100 text-amber-700',
    icon: Zap,
  },
  {
    priority: 'Medium',
    description: 'Partial functionality affected, workaround available',
    responseTime: '8 hours',
    color: 'bg-blue-50 border-blue-200',
    textColor: 'text-blue-700',
    badgeColor: 'bg-blue-100 text-blue-700',
    icon: Timer,
  },
  {
    priority: 'Low',
    description: 'Minor issues, general inquiries, feature requests',
    responseTime: '24 hours',
    color: 'bg-gray-50 border-gray-200',
    textColor: 'text-gray-700',
    badgeColor: 'bg-gray-100 text-gray-700',
    icon: Clock,
  },
];

const serviceTypes = [
  'Network & Connectivity',
  'Security Systems (CCTV/Access)',
  'IT Support & Maintenance',
  'PBX & Communication',
  'Website & Digital',
  'Other',
];

export default function SupportPage() {
  const { navigate } = useNavigation();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceType: '',
    priority: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', company: '', email: '', phone: '', serviceType: '', priority: '', description: '' });
    }, 5000);
  };

  return (
    <div className="overflow-hidden">
      {/* ==================== SECTION 1: PAGE HEADER ==================== */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#eff6ff] via-white to-[#f0f4ff]" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0,31,96,0.1) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, rgba(7,117,255,0.08) 0%, transparent 50%)`,
            backgroundSize: '200% 200%',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-2 text-sm text-[#64748b] mb-6">
              <button
                onClick={() => navigate('home')}
                className="hover:text-[#001F60] transition-colors"
              >
                Home
              </button>
              <ChevronRight className="h-4 w-4" />
              <span className="text-[#001F60] font-medium">Support</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-12 bg-[#001F60] rounded-full" />
              <Badge className="bg-[#eff6ff] text-[#001F60] border-[#dbeafe] hover:bg-[#dbeafe]">
                <Headphones className="h-3.5 w-3.5 mr-1.5" />
                Helpdesk
              </Badge>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e293b] mb-6 tracking-tight">
              Support &{' '}
              <span className="text-[#001F60]">Helpdesk</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed">
              We&apos;re here to help when you need it most. Our dedicated support team provides
              fast, reliable assistance through multiple channels to keep your systems running smoothly.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ==================== SECTION 2: SUPPORT OPTIONS ==================== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge className="bg-[#eff6ff] text-[#001F60] border-[#dbeafe] mb-4">
                Get Help
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-4">
                How to <span className="text-[#001F60]">Reach Us</span>
              </h2>
              <p className="text-[#475569] max-w-2xl mx-auto text-lg">
                Choose the support channel that works best for you. We&apos;re available through
                phone, email, and on-site visits.
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {supportOptions.map((option) => (
              <StaggerItem key={option.title}>
                <Card className="h-full border-[#dbeafe]/60 hover:border-[#001F60]/30 hover:shadow-lg transition-all duration-300 group bg-white">
                  <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                    <div className="h-14 w-14 rounded-2xl bg-[#eff6ff] flex items-center justify-center mb-5 group-hover:bg-[#001F60] transition-colors duration-300">
                      <option.icon className="h-7 w-7 text-[#001F60] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1e293b] mb-3">{option.title}</h3>
                    <p className="text-[#475569] text-sm leading-relaxed mb-5">{option.description}</p>
                    <div className="space-y-2.5 mb-6 flex-1">
                      {option.details.map((detail) => (
                        <div key={detail} className="flex items-start gap-2 text-sm text-[#475569]">
                          <CheckCircle2 className="h-4 w-4 text-[#4DA3FF] shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-[#001F60] text-[#001F60] hover:bg-[#001F60] hover:text-white mt-auto"
                    >
                      {option.cta}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ==================== SECTION 3: SUPPORT PROCESS ==================== */}
      <section className="py-20 lg:py-24 bg-[#f0f4ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge className="bg-[#eff6ff] text-[#001F60] border-[#dbeafe] mb-4">
                Our Process
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-4">
                How Support <span className="text-[#001F60]">Works</span>
              </h2>
              <p className="text-[#475569] max-w-2xl mx-auto text-lg">
                Our structured support process ensures every issue is handled efficiently and resolved to your satisfaction.
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportSteps.map((step, index) => (
              <StaggerItem key={step.step}>
                <div className="relative">
                  {index < supportSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-[#dbeafe]" />
                  )}
                  <Card className="h-full border-[#dbeafe]/60 bg-white hover:shadow-lg transition-all duration-300 text-center relative z-10">
                    <CardContent className="p-6">
                      <div className="relative inline-flex items-center justify-center mb-4">
                        <div className="h-16 w-16 rounded-2xl bg-[#eff6ff] flex items-center justify-center">
                          <step.icon className="h-7 w-7 text-[#001F60]" />
                        </div>
                        <div className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-[#001F60] text-white text-xs font-bold flex items-center justify-center">
                          {step.step}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-[#1e293b] mb-2">{step.title}</h3>
                      <p className="text-[#475569] text-sm leading-relaxed">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ==================== SECTION 4: SELF-SERVICE RESOURCES ==================== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge className="bg-[#eff6ff] text-[#001F60] border-[#dbeafe] mb-4">
                <BookOpen className="h-3.5 w-3.5 mr-1.5" />
                Resources
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-4">
                Help Yourself <span className="text-[#001F60]">First</span>
              </h2>
              <p className="text-[#475569] max-w-2xl mx-auto text-lg">
                Browse our self-service resources for quick answers and helpful guides. You might
                find the solution faster than you think!
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {selfResources.map((resource) => (
              <StaggerItem key={resource.title}>
                <Card className="h-full border-[#dbeafe]/60 hover:border-[#001F60]/30 hover:shadow-lg transition-all duration-300 group bg-white">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="h-12 w-12 rounded-xl bg-[#eff6ff] flex items-center justify-center mb-4 group-hover:bg-[#001F60] transition-colors duration-300">
                      <resource.icon className="h-6 w-6 text-[#001F60] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#1e293b] mb-2">{resource.title}</h3>
                    <p className="text-[#475569] text-sm leading-relaxed mb-4 flex-1">{resource.description}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-fit border-[#001F60] text-[#001F60] hover:bg-[#001F60] hover:text-white mt-auto"
                      disabled={!resource.actionPage}
                      onClick={() => {
                        if (resource.actionPage) {
                          navigate(resource.actionPage);
                        }
                      }}
                    >
                      {resource.actionLabel}
                      {resource.actionPage && <ArrowRight className="h-3.5 w-3.5 ml-1.5" />}
                    </Button>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ==================== SECTION 5: SLA ==================== */}
      <section className="py-20 lg:py-24 bg-[#f0f4ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge className="bg-[#eff6ff] text-[#001F60] border-[#dbeafe] mb-4">
                <Shield className="h-3.5 w-3.5 mr-1.5" />
                SLA
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-4">
                Our SLA <span className="text-[#001F60]">Promise</span>
              </h2>
              <p className="text-[#475569] max-w-2xl mx-auto text-lg">
                We stand behind our service commitments with clear, measurable response time guarantees.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Card className="mb-8 border-[#dbeafe]/60 bg-white">
              <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-[#eff6ff] flex items-center justify-center">
                    <Clock className="h-6 w-6 text-[#001F60]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1e293b]">Business Hours</div>
                    <div className="text-sm text-[#475569]">Saturday â€“ Thursday, 9:00 AM â€“ 6:00 PM</div>
                  </div>
                </div>
                <Badge className="bg-[#eff6ff] text-[#001F60] border-[#dbeafe] text-sm px-4 py-1.5">
                  Friday: Closed (Emergency only)
                </Badge>
              </CardContent>
            </Card>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {slaLevels.map((level) => (
              <StaggerItem key={level.priority}>
                <Card className={`h-full border ${level.color} hover:shadow-lg transition-all duration-300`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`h-10 w-10 rounded-lg ${level.badgeColor} flex items-center justify-center`}>
                          <level.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className={`font-bold ${level.textColor}`}>{level.priority} Priority</h3>
                          <p className="text-xs text-[#64748b]">{level.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-2xl font-bold ${level.textColor}`}>{level.responseTime}</div>
                        <div className="text-xs text-[#64748b]">response</div>
                      </div>
                    </div>
                    <div className={`h-1.5 rounded-full ${level.badgeColor} opacity-50`} />
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ==================== SECTION 6: EMERGENCY SUPPORT ==================== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Card className="bg-gradient-to-r from-red-600 to-red-700 border-0 shadow-xl overflow-hidden">
              <CardContent className="p-8 sm:p-12 lg:p-16 relative">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
                </div>
                <div className="relative flex flex-col lg:flex-row items-center gap-8">
                  <div className="h-20 w-20 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                    <AlertTriangle className="h-10 w-10 text-white" />
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                      Need Emergency Help?
                    </h2>
                    <p className="text-red-100 text-lg max-w-xl leading-relaxed mb-6">
                      For critical system failures, security breaches, or complete service outages,
                      call our emergency line immediately. Available 24/7 for active maintenance clients.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <a
                        href="tel:01980884541"
                        className="inline-flex items-center gap-2 bg-white text-red-700 hover:bg-red-50 font-bold text-lg px-8 py-3.5 rounded-lg transition-colors"
                      >
                        <Phone className="h-5 w-5" />
                        01980884541
                      </a>
                      <span className="text-red-200 text-sm">
                        24/7 for active maintenance clients
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* ==================== SECTION 7: SUPPORT REQUEST FORM ==================== */}
      <section className="py-20 lg:py-24 bg-[#f0f4ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <FadeIn>
              <Badge className="bg-[#eff6ff] text-[#001F60] border-[#dbeafe] mb-4">
                <Send className="h-3.5 w-3.5 mr-1.5" />
                Support Ticket
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-4">
                Submit a{' '}
                <span className="text-[#001F60]">Support Ticket</span>
              </h2>
              <p className="text-[#475569] text-lg leading-relaxed mb-8">
                Fill out the form with details about your issue and our support team will get back to
                you within the SLA timeframe. The more detail you provide, the faster we can help.
              </p>
              <div className="space-y-4">
                {[
                  { icon: CheckCircle2, text: 'Ticket confirmation sent to your email instantly' },
                  { icon: CheckCircle2, text: 'Dedicated engineer assigned based on issue type' },
                  { icon: CheckCircle2, text: 'Real-time status updates via email' },
                  { icon: CheckCircle2, text: 'Resolution summary provided after every ticket' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 text-[#475569]">
                    <div className="h-8 w-8 rounded-full bg-[#eff6ff] flex items-center justify-center shrink-0">
                      <item.icon className="h-4 w-4 text-[#001F60]" />
                    </div>
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Card className="border-[#dbeafe]/60 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-[#1e293b]">Support Request Form</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  {formSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="h-16 w-16 rounded-full bg-[#eff6ff] flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="h-8 w-8 text-[#001F60]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#1e293b] mb-2">Ticket Submitted!</h3>
                      <p className="text-[#475569]">
                        You&apos;ll receive a confirmation email shortly. Our team will respond within the SLA timeframe.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="supportName" className="text-[#1e293b]">Full Name</Label>
                          <Input
                            id="supportName"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                            required
                            className="border-[#dbeafe] focus:border-[#001F60]"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="supportCompany" className="text-[#1e293b]">Company</Label>
                          <Input
                            id="supportCompany"
                            placeholder="Company name"
                            value={formData.company}
                            onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                            required
                            className="border-[#dbeafe] focus:border-[#001F60]"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="supportEmail" className="text-[#1e293b]">Email Address</Label>
                          <Input
                            id="supportEmail"
                            type="email"
                            placeholder="you@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                            required
                            className="border-[#dbeafe] focus:border-[#001F60]"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="supportPhone" className="text-[#1e293b]">Phone Number</Label>
                          <Input
                            id="supportPhone"
                            type="tel"
                            placeholder="01XXXXXXXXX"
                            value={formData.phone}
                            onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                            required
                            className="border-[#dbeafe] focus:border-[#001F60]"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="serviceType" className="text-[#1e293b]">Service Type</Label>
                          <Select
                            value={formData.serviceType}
                            onValueChange={(value) => setFormData((prev) => ({ ...prev, serviceType: value }))}
                          >
                            <SelectTrigger className="border-[#dbeafe] focus:border-[#001F60]">
                              <SelectValue placeholder="Select service type" />
                            </SelectTrigger>
                            <SelectContent>
                              {serviceTypes.map((type) => (
                                <SelectItem key={type} value={type}>
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="priority" className="text-[#1e293b]">Priority</Label>
                          <Select
                            value={formData.priority}
                            onValueChange={(value) => setFormData((prev) => ({ ...prev, priority: value }))}
                          >
                            <SelectTrigger className="border-[#dbeafe] focus:border-[#001F60]">
                              <SelectValue placeholder="Select priority" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="low">Low</SelectItem>
                              <SelectItem value="medium">Medium</SelectItem>
                              <SelectItem value="high">High</SelectItem>
                              <SelectItem value="critical">Critical</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="issueDescription" className="text-[#1e293b]">Issue Description</Label>
                        <Textarea
                          id="issueDescription"
                          placeholder="Please describe your issue in detail. Include any error messages, steps to reproduce, and what you've already tried..."
                          rows={5}
                          value={formData.description}
                          onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                          required
                          className="border-[#dbeafe] focus:border-[#001F60] resize-none"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-[#001F60] hover:bg-[#001440] text-white h-11 text-base"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Submit Support Ticket
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 8: CTA ==================== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Card className="bg-gradient-to-r from-[#001F60] to-[#0775FF] border-0 shadow-xl overflow-hidden">
              <CardContent className="p-8 sm:p-12 lg:p-16 text-center relative">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
                </div>
                <div className="relative">
                  <Building2 className="h-12 w-12 mx-auto mb-6 text-blue-200" />
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    Not a Client Yet?
                  </h2>
                  <p className="text-blue-100 text-lg max-w-xl mx-auto mb-8">
                    Get started with Tech Sheba today and enjoy priority support, proactive monitoring,
                    and dedicated account management from day one.
                  </p>
                  <Button
                    size="lg"
                    onClick={() => navigate('contact')}
                    className="bg-white text-[#001F60] hover:bg-[#eff6ff] font-semibold h-12 px-8"
                  >
                    Get Started
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}