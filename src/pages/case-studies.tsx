'use client';

import { useNavigation } from '@/lib/store';
import { FadeIn, StaggerContainer, StaggerItem, CountUp } from '@/components/animations';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  ChevronRight, ArrowRight, Quote, TrendingUp, Clock, Shield,
  Camera, Wifi, Phone, Server, Monitor, Globe, Building2,
  Factory, Store, CheckCircle2, BarChart3, Users, Zap, Award,
} from 'lucide-react';

const featuredStudy = {
  title: 'Transforming Network Infrastructure for a Leading Garment Exporter',
  industry: 'Garment & Manufacturing',
  industryIcon: Factory,
  challenge:
    'A major garment exporter in Gazipur with 3 production floors and over 1,200 employees was struggling with chronic network downtime, outdated cabling from 2015, and a CCTV system with blind spots across the facility. Their existing IT vendor had been unresponsive for months, and production delays caused by network failures were costing an estimated à§³15 lakh per month in lost output.',
  solution:
    'Tech Sheba conducted a full audit and deployed a multi-phase solution: (1) Complete structured cabling overhaul with Cat6 across all 3 floors, (2) Enterprise-grade UniFi network with 40+ access points for seamless roaming, (3) 120-camera Hikvision surveillance system with NVR-based recording and remote viewing, (4) Centralized server room with UPS backup, (5) Ongoing 24/7 monitoring and monthly maintenance.',
  results: [
    { metric: '99.9%', label: 'Network Uptime' },
    { metric: '40%', label: 'Cost Reduction' },
    { metric: '120', label: 'CCTV Cameras' },
    { metric: '15x', label: 'Faster Issue Resolution' },
  ],
  testimonial: {
    quote:
      'Tech Sheba transformed our entire IT infrastructure in under 6 weeks. The network has been rock-solid for 18 months now, and the CCTV system has already helped us prevent significant inventory losses. Their team is always just a call away.',
    author: 'Mizanur Rahman',
    role: 'Operations Director, Apex Apparel Ltd.',
  },
};

const caseStudies = [
  {
    industry: 'Retail',
    industryIcon: Store,
    title: 'Multi-Office CCTV Deployment for Retail Chain',
    summary:
      'Deployed 45-camera surveillance system across 5 retail locations in Dhaka with centralized monitoring and cloud backup. Integrated with existing POS systems for loss prevention analytics.',
    metrics: [
      { value: '45', label: 'Cameras' },
      { value: '5', label: 'Locations' },
    ],
  },
  {
    industry: 'Professional Services',
    industryIcon: Building2,
    title: 'Complete IT Overhaul for Accounting Firm',
    summary:
      'Replaced legacy infrastructure for a 50-person accounting firm with modern networking, server deployment, cloud backup, and VoIP phone system. Reduced IT support tickets by 70%.',
    metrics: [
      { value: '70%', label: 'Fewer Tickets' },
      { value: '50', label: 'Users' },
    ],
  },
  {
    industry: 'Manufacturing',
    industryIcon: Factory,
    title: 'Factory Wi-Fi & Surveillance for Manufacturing Unit',
    summary:
      'Designed industrial-grade Wi-Fi network and 80-camera surveillance system for a Narayanganj manufacturing facility covering 50,000 sq ft of production and warehouse space.',
    metrics: [
      { value: '50K', label: 'Sq Ft Covered' },
      { value: '80', label: 'Cameras' },
    ],
  },
  {
    industry: 'BPO / Call Center',
    industryIcon: Phone,
    title: 'PBX & Network Setup for 200-Seat Call Center',
    summary:
      'Deployed IP-PBX system with call routing, recording, and CRM integration alongside high-density networking for a 200-seat call center in Mohakhali DOHS.',
    metrics: [
      { value: '200', label: 'Seats' },
      { value: '99.8%', label: 'Uptime' },
    ],
  },
  {
    industry: 'Financial Services',
    industryIcon: Server,
    title: 'Data Backup Solution for Financial Services Company',
    summary:
      'Implemented 3-2-1 backup strategy with on-site NAS, off-site replication, and cloud backup for a financial services firm. Achieved sub-4-hour RTO with automated daily backups.',
    metrics: [
      { value: '4hr', label: 'Recovery Time' },
      { value: '0', label: 'Data Loss Incidents' },
    ],
  },
  {
    industry: 'E-Commerce',
    industryIcon: Globe,
    title: 'Website Redesign for E-Commerce Startup',
    summary:
      'Redesigned and rebuilt a slow, outdated e-commerce website into a fast, mobile-first Shopify store. Improved page load speed by 5x and increased conversion rate by 180%.',
    metrics: [
      { value: '5x', label: 'Faster Loading' },
      { value: '180%', label: 'Conversion Boost' },
    ],
  },
];

const trackRecord = [
  { icon: Users, value: 150, suffix: '+', label: 'Clients Served' },
  { icon: CheckCircle2, value: 500, suffix: '+', label: 'Projects Completed' },
  { icon: TrendingUp, value: 99, suffix: '.9%', label: 'Average Uptime' },
  { icon: Clock, value: 2, suffix: 'hr', label: 'Avg. Response Time' },
  { icon: Award, value: 98, suffix: '%', label: 'Client Satisfaction' },
  { icon: Zap, value: 4.9, suffix: '/5', label: 'Average Rating' },
];

export default function CaseStudiesPage() {
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
              <span className="text-[#001F60] font-medium">Case Studies</span>
            </nav>

            <h1 className="text-4xl sm:text-5xl font-bold text-[#1e293b] mb-5">
              Case Studies & <span className="text-gradient-green">Success Stories</span>
            </h1>
            <p className="text-lg text-[#475569] leading-relaxed max-w-3xl">
              Real results for real businesses. See how Tech Sheba has helped organizations across
              Bangladesh transform their IT infrastructure, boost productivity, and reduce costs.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ==================== SECTION 2: FEATURED CASE STUDY ==================== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Badge className="mb-6 bg-[#eff6ff] text-[#001F60] border-[#dbeafe] hover:bg-[#dbeafe]">
              Featured Case Study
            </Badge>
          </FadeIn>

          <Card className="border border-[#dbeafe] overflow-hidden shadow-sm">
            <div className="grid lg:grid-cols-5">
              {/* Left: Content */}
              <div className="lg:col-span-3 p-6 sm:p-10">
                <FadeIn>
                  <div className="flex items-center gap-2 mb-5">
                    <Badge variant="outline" className="text-xs font-medium border-[#dbeafe] text-[#001F60] bg-[#eff6ff]">
                      {featuredStudy.industry}
                    </Badge>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-[#1e293b] mb-6 leading-tight">
                    {featuredStudy.title}
                  </h2>

                  <Tabs defaultValue="challenge" className="mb-8">
                    <TabsList className="bg-[#f0f4ff] border border-[#dbeafe]">
                      <TabsTrigger
                        value="challenge"
                        className="data-[state=active]:bg-[#001F60] data-[state=active]:text-white text-[#475569]"
                      >
                        Challenge
                      </TabsTrigger>
                      <TabsTrigger
                        value="solution"
                        className="data-[state=active]:bg-[#001F60] data-[state=active]:text-white text-[#475569]"
                      >
                        Solution
                      </TabsTrigger>
                      <TabsTrigger
                        value="testimonial"
                        className="data-[state=active]:bg-[#001F60] data-[state=active]:text-white text-[#475569]"
                      >
                        Testimonial
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="challenge" className="mt-5">
                      <div className="p-5 rounded-xl bg-red-50 border border-red-100">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-7 h-7 rounded-lg bg-red-100 flex items-center justify-center">
                            <BarChart3 className="w-4 h-4 text-red-600" />
                          </div>
                          <h4 className="font-semibold text-red-800 text-sm">The Challenge</h4>
                        </div>
                        <p className="text-[#475569] text-sm leading-relaxed">
                          {featuredStudy.challenge}
                        </p>
                      </div>
                    </TabsContent>

                    <TabsContent value="solution" className="mt-5">
                      <div className="p-5 rounded-xl bg-[#eff6ff] border border-[#dbeafe]">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-7 h-7 rounded-lg bg-[#dbeafe] flex items-center justify-center">
                            <CheckCircle2 className="w-4 h-4 text-[#001F60]" />
                          </div>
                          <h4 className="font-semibold text-[#001F60] text-sm">Our Solution</h4>
                        </div>
                        <p className="text-[#475569] text-sm leading-relaxed">
                          {featuredStudy.solution}
                        </p>
                      </div>
                    </TabsContent>

                    <TabsContent value="testimonial" className="mt-5">
                      <div className="p-5 rounded-xl bg-[#f0f4ff] border border-[#dbeafe]">
                        <Quote className="w-8 h-8 text-[#001F60]/20 mb-3" />
                        <p className="text-[#475569] text-sm leading-relaxed italic mb-4">
                          &ldquo;{featuredStudy.testimonial.quote}&rdquo;
                        </p>
                        <div>
                          <p className="font-semibold text-[#1e293b] text-sm">
                            {featuredStudy.testimonial.author}
                          </p>
                          <p className="text-xs text-[#64748b]">
                            {featuredStudy.testimonial.role}
                          </p>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </FadeIn>
              </div>

              {/* Right: Results */}
              <div className="lg:col-span-2 bg-gradient-to-br from-[#001F60] to-[#001440] p-6 sm:p-10 flex flex-col justify-center">
                <FadeIn delay={0.2}>
                  <h3 className="text-lg font-semibold text-white/80 mb-8">Key Results</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {featuredStudy.results.map((result) => (
                      <div key={result.label} className="text-center">
                        <p className="text-3xl sm:text-4xl font-bold text-white mb-1">
                          {result.metric}
                        </p>
                        <p className="text-sm text-[#dbeafe]">{result.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-10">
                    <Button
                      onClick={() => navigate('contact')}
                      className="w-full bg-white text-[#001F60] hover:bg-[#eff6ff] font-semibold"
                    >
                      Get Similar Results
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* ==================== SECTION 3: CASE STUDY GRID ==================== */}
      <section className="py-20 lg:py-24 bg-[#f0f4ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <Badge className="mb-4 bg-white text-[#001F60] border-[#dbeafe] hover:bg-[#eff6ff]">
                More Success Stories
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-4">
                Client <span className="text-gradient-green">Transformations</span>
              </h2>
              <p className="text-[#475569] leading-relaxed">
                Every project tells a story of transformation. Here are more examples of how
                Tech Sheba delivers real, measurable impact.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study) => {
              const StudyIcon = study.industryIcon;
              return (
                <StaggerItem key={study.title}>
                  <Card className="h-full border border-white bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-3">
                        <Badge
                          variant="outline"
                          className="text-xs font-medium border-[#dbeafe] text-[#001F60] bg-[#eff6ff]"
                        >
                          <StudyIcon className="w-3 h-3 mr-1" />
                          {study.industry}
                        </Badge>
                      </div>
                      <CardTitle className="text-base font-semibold text-[#1e293b] leading-snug">
                        {study.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-1">
                      <p className="text-sm text-[#64748b] leading-relaxed mb-5 flex-1">
                        {study.summary}
                      </p>

                      {/* Key Metrics */}
                      <div className="flex gap-4 mb-5">
                        {study.metrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="flex-1 text-center p-3 rounded-xl bg-[#f0f4ff] border border-[#eff6ff]"
                          >
                            <p className="text-xl font-bold text-[#001F60]">{metric.value}</p>
                            <p className="text-[10px] text-[#64748b] font-medium mt-0.5">
                              {metric.label}
                            </p>
                          </div>
                        ))}
                      </div>

                      <Button
                        variant="outline"
                        onClick={() => navigate('contact')}
                        className="w-full border-[#dbeafe] text-[#001F60] hover:bg-[#eff6ff] hover:text-[#001440] font-medium text-sm"
                      >
                        Read Full Study
                        <ArrowRight className="w-3.5 h-3.5 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ==================== SECTION 4: RESULTS SUMMARY / TRACK RECORD ==================== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <Badge className="mb-4 bg-[#eff6ff] text-[#001F60] border-[#dbeafe] hover:bg-[#dbeafe]">
                Proven Track Record
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-4">
                Our <span className="text-gradient-green">Track Record</span>
              </h2>
              <p className="text-[#475569] leading-relaxed">
                Numbers don&apos;t lie. Here&apos;s a snapshot of what Tech Sheba has achieved
                for businesses across Bangladesh.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {trackRecord.map((stat) => {
              const StatIcon = stat.icon;
              return (
                <StaggerItem key={stat.label}>
                  <div className="text-center p-5 rounded-2xl bg-[#f0f4ff] border border-[#eff6ff] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="w-10 h-10 rounded-xl bg-[#eff6ff] border border-[#dbeafe] flex items-center justify-center mx-auto mb-3">
                      <StatIcon className="w-5 h-5 text-[#001F60]" />
                    </div>
                    <p className="text-2xl sm:text-3xl font-bold text-[#001F60] mb-1">
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-xs text-[#64748b] font-medium">{stat.label}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ==================== SECTION 5: CTA ==================== */}
      <section className="py-20 lg:py-24 bg-[#f0f4ff]">
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
                  Want Results Like These?
                </h2>
                <p className="text-lg text-[#dbeafe] max-w-2xl mx-auto mb-8 leading-relaxed">
                  Every success story starts with a conversation. Tell us about your challenges,
                  and we&apos;ll show you how Tech Sheba can deliver similar or better results
                  for your organization.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    onClick={() => navigate('contact')}
                    className="bg-white text-[#001F60] hover:bg-[#eff6ff] font-semibold px-8"
                  >
                    Start Your Success Story
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => navigate('industries')}
                    className="border-white/30 text-white hover:bg-white/10 px-8"
                  >
                    Explore Your Industry
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