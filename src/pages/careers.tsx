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
  TrendingUp,
  Users,
  Heart,
  GraduationCap,
  DollarSign,
  Clock,
  Briefcase,
  MapPin,
  CheckCircle2,
  Send,
  Sparkles,
  Coffee,
  Lightbulb,
} from 'lucide-react';

const perks = [
  {
    icon: TrendingUp,
    title: 'Growth Opportunities',
    description:
      'We invest in your career with clear advancement paths, leadership programs, and opportunities to lead impactful projects from day one.',
  },
  {
    icon: Users,
    title: 'Collaborative Culture',
    description:
      'Work alongside talented engineers and designers in a supportive environment where every idea is valued and teamwork drives success.',
  },
  {
    icon: Heart,
    title: 'Real Impact',
    description:
      'Your work directly powers businesses across Bangladesh â€” from startups to enterprises. See the tangible results of your contributions.',
  },
  {
    icon: GraduationCap,
    title: 'Learning & Development',
    description:
      'Access to certifications, workshops, conferences, and mentorship programs. We cover costs for professional development courses.',
  },
  {
    icon: DollarSign,
    title: 'Competitive Compensation',
    description:
      'We offer market-competitive salaries, performance bonuses, and comprehensive benefits that recognize your skills and dedication.',
  },
  {
    icon: Clock,
    title: 'Work-Life Balance',
    description:
      'Flexible working hours, remote work options, and generous leave policies ensure you have time for what matters most.',
  },
];

const positions = [
  {
    title: 'Network Engineer',
    type: 'Full-time',
    location: 'Dhaka',
    description:
      'Design, implement, and maintain enterprise-grade network infrastructure for our clients. Work with leading networking technologies including MikroTik, Cisco, and Ubiquiti.',
    requirements: [
      '3+ years of experience in network engineering',
      'MikroTik MTCNA or Cisco CCNA certification preferred',
      'Strong knowledge of TCP/IP, routing, and switching',
      'Experience with enterprise Wi-Fi deployment',
      'Problem-solving mindset with strong communication skills',
    ],
  },
  {
    title: 'IT Support Specialist',
    type: 'Full-time',
    location: 'Dhaka',
    description:
      'Provide expert technical support to our diverse client base. Diagnose and resolve hardware, software, and network issues while maintaining excellent client relationships.',
    requirements: [
      '2+ years in IT support or helpdesk role',
      'Strong troubleshooting skills across Windows and Linux',
      'Experience with remote support tools and ticketing systems',
      'Excellent communication and customer service skills',
      'Ability to handle multiple priorities in a fast-paced environment',
    ],
  },
  {
    title: 'Security Systems Technician',
    type: 'Full-time',
    location: 'Dhaka',
    description:
      'Install, configure, and maintain CCTV, access control, and security systems for commercial and industrial clients. Ensure optimal coverage and system reliability.',
    requirements: [
      '2+ years experience with CCTV and security systems',
      'Knowledge of Hikvision, Dahua, and similar platforms',
      'Understanding of structured cabling and networking basics',
      'Physical ability to work at client sites and climb ladders',
      'Valid motorcycle license preferred',
    ],
  },
  {
    title: 'Sales & Business Development Executive',
    type: 'Full-time',
    location: 'Dhaka',
    description:
      'Drive business growth by identifying new opportunities, building client relationships, and presenting our IT solutions to potential customers across various industries.',
    requirements: [
      '2+ years in B2B sales or business development',
      'Understanding of IT products and services is a plus',
      'Excellent presentation and negotiation skills',
      'Proven track record of meeting sales targets',
      'Strong networking and relationship-building abilities',
    ],
  },
  {
    title: 'Junior Web Developer',
    type: 'Full-time / Intern',
    location: 'Dhaka',
    description:
      'Build and maintain modern websites and web applications for our clients. Work with the latest web technologies in a collaborative, fast-learning environment.',
    requirements: [
      'Proficiency in HTML, CSS, JavaScript/TypeScript',
      'Experience with React or Next.js framework',
      'Understanding of responsive design and UI/UX principles',
      'Basic knowledge of backend technologies (Node.js/PHP)',
      'Fresh graduates and interns are encouraged to apply',
    ],
  },
];

const cultureValues = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description:
      'We encourage creative thinking and experimentation. Every team member has the freedom to propose new solutions and challenge the status quo.',
  },
  {
    icon: Coffee,
    title: 'Open Communication',
    description:
      'Transparent, honest communication is at our core. Weekly standups, open-door policies, and feedback sessions keep everyone aligned.',
  },
  {
    icon: Sparkles,
    title: 'Celebrate Wins',
    description:
      'From project completions to personal milestones, we believe in recognizing and celebrating every achievement â€” big or small.',
  },
  {
    icon: Heart,
    title: 'Community Driven',
    description:
      'We give back through free tech workshops, community meetups, and supporting local startups. Being part of Bangladesh\'s tech ecosystem matters to us.',
  },
];

export default function CareersPage() {
  const { navigate } = useNavigation();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    portfolio: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', position: '', portfolio: '', message: '' });
    }, 5000);
  };

  return (
    <div className="overflow-hidden">
      {/* ==================== SECTION 1: PAGE HEADER ==================== */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#eff6ff] via-white to-[#f0f4ff] dark:from-[#0f172a] dark:via-[#0f172a] dark:to-[#1e293b]" />
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
            <div className="flex items-center gap-2 text-sm text-[#64748b] dark:text-[#94a3b8] mb-6">
              <button
                onClick={() => navigate('home')}
                className="hover:text-[#001F60] dark:hover:text-[#93c5fd] transition-colors"
              >
                Home
              </button>
              <ChevronRight className="h-4 w-4" />
              <span className="text-[#001F60] dark:text-[#93c5fd] font-medium">Careers</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-12 bg-[#001F60] dark:bg-[#93c5fd] rounded-full" />
              <Badge className="bg-[#eff6ff] dark:bg-[#0f172a] text-[#001F60] dark:text-[#93c5fd] border-[#dbeafe] dark:border-[#1e3a5f] hover:bg-[#dbeafe] dark:hover:bg-[#1e3a5f]">
                <Briefcase className="h-3.5 w-3.5 mr-1.5" />
                We&apos;re Hiring
              </Badge>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e293b] dark:text-[#e2e8f0] mb-6 tracking-tight">
              Join Our{' '}
              <span className="text-[#001F60] dark:text-[#93c5fd]">Team</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-lg sm:text-xl text-[#475569] dark:text-[#94a3b8] max-w-3xl leading-relaxed">
              Be part of building Bangladesh&apos;s IT future. At Tech Sheba, you&apos;ll work on
              meaningful projects that transform businesses, collaborate with passionate professionals,
              and grow your career in a supportive, innovation-driven environment.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-wrap gap-6 mt-10">
              <div className="flex items-center gap-2 text-[#475569] dark:text-[#94a3b8]">
                <div className="h-10 w-10 rounded-full bg-[#eff6ff] dark:bg-[#0f172a] flex items-center justify-center">
                  <Users className="h-5 w-5 text-[#001F60] dark:text-[#93c5fd]" />
                </div>
                <div>
                  <div className="font-semibold text-[#1e293b] dark:text-[#e2e8f0]">30+</div>
                  <div className="text-xs text-[#64748b] dark:text-[#94a3b8]">Team Members</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[#475569] dark:text-[#94a3b8]">
                <div className="h-10 w-10 rounded-full bg-[#eff6ff] dark:bg-[#0f172a] flex items-center justify-center">
                  <Clock className="h-5 w-5 text-[#001F60] dark:text-[#93c5fd]" />
                </div>
                <div>
                  <div className="font-semibold text-[#1e293b] dark:text-[#e2e8f0]">5+</div>
                  <div className="text-xs text-[#64748b] dark:text-[#94a3b8]">Years Growing</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[#475569] dark:text-[#94a3b8]">
                <div className="h-10 w-10 rounded-full bg-[#eff6ff] dark:bg-[#0f172a] flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-[#001F60] dark:text-[#93c5fd]" />
                </div>
                <div>
                  <div className="font-semibold text-[#1e293b] dark:text-[#e2e8f0]">200+</div>
                  <div className="text-xs text-[#64748b] dark:text-[#94a3b8]">Projects Delivered</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ==================== SECTION 2: WHY WORK AT TECH SHEBA ==================== */}
      <section className="py-20 lg:py-24 bg-white dark:bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge className="bg-[#eff6ff] dark:bg-[#0f172a] text-[#001F60] dark:text-[#93c5fd] border-[#dbeafe] dark:border-[#1e3a5f] mb-4">
                Why Tech Sheba
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] dark:text-[#e2e8f0] mb-4">
                Why Work at <span className="text-[#001F60] dark:text-[#93c5fd]">Tech Sheba</span>
              </h2>
              <p className="text-[#475569] dark:text-[#94a3b8] max-w-2xl mx-auto text-lg">
                We&apos;ve built a workplace where talent thrives, ideas flourish, and every team member
                has the opportunity to make a real difference.
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk) => (
              <StaggerItem key={perk.title}>
                <Card className="h-full border-[#dbeafe]/60 dark:border-[#1e3a5f] hover:border-[#001F60]/30 hover:shadow-lg transition-all duration-300 group bg-white dark:bg-[#1e293b]">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-xl bg-[#eff6ff] dark:bg-[#0f172a] flex items-center justify-center mb-4 group-hover:bg-[#001F60] transition-colors duration-300">
                      <perk.icon className="h-6 w-6 text-[#001F60] dark:text-[#93c5fd] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#1e293b] dark:text-[#e2e8f0] mb-2">{perk.title}</h3>
                    <p className="text-[#475569] dark:text-[#94a3b8] text-sm leading-relaxed">{perk.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ==================== SECTION 3: OPEN POSITIONS ==================== */}
      <section className="py-20 lg:py-24 bg-[#f0f4ff] dark:bg-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge className="bg-[#eff6ff] dark:bg-[#0f172a] text-[#001F60] dark:text-[#93c5fd] border-[#dbeafe] dark:border-[#1e3a5f] mb-4">
                <Briefcase className="h-3.5 w-3.5 mr-1.5" />
                Open Positions
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] dark:text-[#e2e8f0] mb-4">
                Current <span className="text-[#001F60] dark:text-[#93c5fd]">Openings</span>
              </h2>
              <p className="text-[#475569] dark:text-[#94a3b8] max-w-2xl mx-auto text-lg">
                Explore our open roles and find the perfect opportunity to grow your career with us.
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="space-y-6">
            {positions.map((job) => (
              <StaggerItem key={job.title}>
                <Card className="border-[#dbeafe]/60 dark:border-[#1e3a5f] hover:border-[#001F60]/30 hover:shadow-lg transition-all duration-300 bg-white dark:bg-[#1e293b] overflow-hidden">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-[#1e293b] dark:text-[#e2e8f0] mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="border-[#dbeafe] dark:border-[#1e3a5f] text-[#001F60] dark:text-[#93c5fd] bg-[#eff6ff] dark:bg-[#0f172a]">
                            <MapPin className="h-3 w-3 mr-1" />
                            {job.location}
                          </Badge>
                          <Badge variant="outline" className="border-[#dbeafe] dark:border-[#1e3a5f] text-[#001440] dark:text-[#93c5fd] bg-[#f0f4ff] dark:bg-[#0f172a]">
                            <Clock className="h-3 w-3 mr-1" />
                            {job.type}
                          </Badge>
                        </div>
                      </div>
                      <Button
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, position: job.title }));
                          document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="bg-[#001F60] hover:bg-[#001440] text-white shrink-0"
                      >
                        Apply Now
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                    <p className="text-[#475569] dark:text-[#94a3b8] text-sm leading-relaxed mb-4">{job.description}</p>
                    <div className="border-t border-[#dbeafe] dark:border-[#1e3a5f] pt-4">
                      <h4 className="text-sm font-semibold text-[#1e293b] dark:text-[#e2e8f0] mb-2">Key Requirements</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {job.requirements.map((req) => (
                          <li key={req} className="flex items-start gap-2 text-sm text-[#475569] dark:text-[#94a3b8]">
                            <CheckCircle2 className="h-4 w-4 text-[#4DA3FF] shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ==================== SECTION 4: APPLICATION FORM ==================== */}
      <section id="application-form" className="py-20 lg:py-24 bg-white dark:bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <FadeIn>
              <Badge className="bg-[#eff6ff] dark:bg-[#0f172a] text-[#001F60] dark:text-[#93c5fd] border-[#dbeafe] dark:border-[#1e3a5f] mb-4">
                <Send className="h-3.5 w-3.5 mr-1.5" />
                Apply Now
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] dark:text-[#e2e8f0] mb-4">
                Interested in{' '}
                <span className="text-[#001F60] dark:text-[#93c5fd]">joining us?</span>
              </h2>
              <p className="text-[#475569] dark:text-[#94a3b8] text-lg leading-relaxed mb-8">
                Fill out the form below and our HR team will review your application within 3-5
                business days. We look forward to learning more about you!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[#475569] dark:text-[#94a3b8]">
                  <div className="h-8 w-8 rounded-full bg-[#eff6ff] dark:bg-[#0f172a] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-[#001F60] dark:text-[#93c5fd]" />
                  </div>
                  <span className="text-sm">Equal opportunity employer â€” all backgrounds welcome</span>
                </div>
                <div className="flex items-center gap-3 text-[#475569] dark:text-[#94a3b8]">
                  <div className="h-8 w-8 rounded-full bg-[#eff6ff] dark:bg-[#0f172a] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-[#001F60] dark:text-[#93c5fd]" />
                  </div>
                  <span className="text-sm">Response within 3-5 business days</span>
                </div>
                <div className="flex items-center gap-3 text-[#475569] dark:text-[#94a3b8]">
                  <div className="h-8 w-8 rounded-full bg-[#eff6ff] dark:bg-[#0f172a] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-[#001F60] dark:text-[#93c5fd]" />
                  </div>
                  <span className="text-sm">Confidential application process</span>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Card className="border-[#dbeafe]/60 dark:border-[#1e3a5f] dark:bg-[#1e293b] shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-[#1e293b] dark:text-[#e2e8f0]">Application Form</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  {formSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="h-16 w-16 rounded-full bg-[#eff6ff] dark:bg-[#0f172a] flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="h-8 w-8 text-[#001F60] dark:text-[#93c5fd]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#1e293b] dark:text-[#e2e8f0] mb-2">Application Submitted!</h3>
                      <p className="text-[#475569] dark:text-[#94a3b8]">
                        Thank you for your interest. We&apos;ll be in touch soon.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-[#1e293b] dark:text-[#e2e8f0]">Full Name</Label>
                        <Input
                          id="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                          required
                          className="border-[#dbeafe] dark:border-[#334155] focus:border-[#001F60] dark:focus:border-[#93c5fd] dark:bg-[#0f172a] dark:text-[#e2e8f0]"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-[#1e293b] dark:text-[#e2e8f0]">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                            required
                            className="border-[#dbeafe] dark:border-[#334155] focus:border-[#001F60] dark:focus:border-[#93c5fd] dark:bg-[#0f172a] dark:text-[#e2e8f0]"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-[#1e293b] dark:text-[#e2e8f0]">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="01XXXXXXXXX"
                            value={formData.phone}
                            onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                            required
                            className="border-[#dbeafe] dark:border-[#334155] focus:border-[#001F60] dark:focus:border-[#93c5fd] dark:bg-[#0f172a] dark:text-[#e2e8f0]"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="position" className="text-[#1e293b] dark:text-[#e2e8f0]">Position</Label>
                        <Select
                          value={formData.position}
                          onValueChange={(value) => setFormData((prev) => ({ ...prev, position: value }))}
                        >
                          <SelectTrigger className="border-[#dbeafe] dark:border-[#334155] focus:border-[#001F60] dark:focus:border-[#93c5fd] dark:bg-[#0f172a] dark:text-[#e2e8f0]">
                            <SelectValue placeholder="Select a position" />
                          </SelectTrigger>
                          <SelectContent>
                            {positions.map((pos) => (
                              <SelectItem key={pos.title} value={pos.title}>
                                {pos.title}
                              </SelectItem>
                            ))}
                            <SelectItem value="Other">Other / General Application</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="portfolio" className="text-[#1e293b] dark:text-[#e2e8f0]">Portfolio / LinkedIn URL</Label>
                        <Input
                          id="portfolio"
                          placeholder="https://linkedin.com/in/yourname"
                          value={formData.portfolio}
                          onChange={(e) => setFormData((prev) => ({ ...prev, portfolio: e.target.value }))}
                          className="border-[#dbeafe] dark:border-[#334155] focus:border-[#001F60] dark:focus:border-[#93c5fd] dark:bg-[#0f172a] dark:text-[#e2e8f0]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-[#1e293b] dark:text-[#e2e8f0]">Message / Resume Note</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about yourself, your experience, and why you'd like to join Tech Sheba..."
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                          className="border-[#dbeafe] dark:border-[#334155] focus:border-[#001F60] dark:focus:border-[#93c5fd] dark:bg-[#0f172a] dark:text-[#e2e8f0] resize-none"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-[#001F60] hover:bg-[#001440] text-white h-11 text-base"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Submit Application
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 5: COMPANY CULTURE ==================== */}
      <section className="py-20 lg:py-24 bg-[#f0f4ff] dark:bg-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge className="bg-[#eff6ff] dark:bg-[#0f172a] text-[#001F60] dark:text-[#93c5fd] border-[#dbeafe] dark:border-[#1e3a5f] mb-4">
                <Users className="h-3.5 w-3.5 mr-1.5" />
                Our Culture
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] dark:text-[#e2e8f0] mb-4">
                Life at <span className="text-[#001F60] dark:text-[#93c5fd]">Tech Sheba</span>
              </h2>
              <p className="text-[#475569] dark:text-[#94a3b8] max-w-2xl mx-auto text-lg">
                We believe a great workplace culture is the foundation of great work. At Tech Sheba,
                we&apos;ve cultivated an environment where people come first, ideas flow freely, and
                everyone has a voice.
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cultureValues.map((value) => (
              <StaggerItem key={value.title}>
                <Card className="h-full border-[#dbeafe]/60 dark:border-[#1e3a5f] hover:border-[#001F60]/30 hover:shadow-lg transition-all duration-300 group bg-white dark:bg-[#1e293b]">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-xl bg-[#eff6ff] dark:bg-[#0f172a] flex items-center justify-center mb-4 group-hover:bg-[#001F60] transition-colors duration-300">
                      <value.icon className="h-6 w-6 text-[#001F60] dark:text-[#93c5fd] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#1e293b] dark:text-[#e2e8f0] mb-2">{value.title}</h3>
                    <p className="text-[#475569] dark:text-[#94a3b8] text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ==================== SECTION 6: CTA ==================== */}
      <section className="py-20 lg:py-24 bg-white dark:bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Card className="bg-gradient-to-r from-[#001F60] to-[#0775FF] border-0 shadow-xl overflow-hidden">
              <CardContent className="p-8 sm:p-12 lg:p-16 text-center relative">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
                </div>
                <div className="relative">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    Don&apos;t see the right role?
                  </h2>
                  <p className="text-blue-100 text-lg max-w-xl mx-auto mb-8">
                    We&apos;re always looking for talented individuals. Send us your resume and
                    tell us how you can contribute to Tech Sheba&apos;s mission.
                  </p>
                  <Button
                    size="lg"
                    onClick={() => navigate('contact')}
                    className="bg-white text-[#001F60] hover:bg-[#eff6ff] font-semibold h-12 px-8"
                  >
                    Send General Application
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