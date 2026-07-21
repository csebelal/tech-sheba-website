'use client';

import { useState } from 'react';
import { useNavigation } from '@/lib/store';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  ChevronRight,
  ArrowRight,
  Phone,
  Mail,
  MessageCircle,
  HelpCircle,
  Building2,
  Wrench,
  DollarSign,
  LifeBuoy,
  Rocket,
} from 'lucide-react';

type FaqCategory = {
  id: string;
  label: string;
  icon: React.ElementType;
  description: string;
  faqs: { question: string; answer: string }[];
};

const faqCategories: FaqCategory[] = [
  {
    id: 'general',
    label: 'General',
    icon: Building2,
    description: 'Learn about Tech Sheba and our operations',
    faqs: [
      {
        question: 'What is Tech Sheba?',
        answer:
          'Tech Sheba is a comprehensive IT solutions provider based in Dhaka, Bangladesh. We help businesses of all sizes â€” from small startups to large enterprises â€” with their technology needs including network setup, security systems, IT support, web development, and digital marketing. Our mission is to make professional IT services accessible and affordable for every business in Bangladesh.',
      },
      {
        question: 'What areas do you serve?',
        answer:
          'We are headquartered in Dhaka and provide full on-site services throughout the Dhaka Division including areas like Gulshan, Banani, Motijheel, Dhanmondi, Uttara, Mirpur, and Mohammadpur. We also serve Chittagong, Sylhet, and Rajshahi with periodic on-site visits, and we provide remote IT support to businesses across all of Bangladesh regardless of location.',
      },
      {
        question: 'How long have you been in business?',
        answer:
          'Tech Sheba has been serving Bangladeshi businesses for over 8 years. In that time, we have completed more than 500 projects across diverse industries including finance, healthcare, education, retail, and manufacturing. Our experience in the local market gives us deep insight into the unique technology challenges that Bangladeshi businesses face.',
      },
      {
        question: 'What industries do you work with?',
        answer:
          'We work with a wide range of industries including corporate offices, retail businesses, restaurants and hospitality, healthcare clinics and hospitals, educational institutions, manufacturing facilities, real estate companies, and government organizations. Our team understands the specific technology requirements and compliance needs of each sector, allowing us to deliver tailored solutions.',
      },
    ],
  },
  {
    id: 'services',
    label: 'Services',
    icon: Wrench,
    description: 'Questions about our service offerings',
    faqs: [
      {
        question: 'What services do you offer?',
        answer:
          'We offer a comprehensive range of IT services including network design and installation (Wi-Fi, LAN, WAN), CCTV and security camera systems, IT support and maintenance contracts, web design and development, digital marketing and SEO, structured cabling, PBX and intercom phone systems, access control and attendance systems, and cybersecurity solutions. We serve as a one-stop technology partner for businesses that want everything handled by a single, reliable team.',
      },
      {
        question: 'Do you provide both on-site and remote support?',
        answer:
          'Yes, we provide both. For installations, hardware setup, and issues that require physical presence, our technicians visit your office on-site. For software troubleshooting, network monitoring, and quick resolutions, we offer remote support through secure screen-sharing and remote access tools. Most of our support plans include a combination of both, so you get the fastest resolution regardless of the issue type.',
      },
      {
        question: 'Can you work with our existing equipment?',
        answer:
          'Absolutely. We frequently work with existing IT infrastructure and equipment. During our initial assessment, we evaluate what you already have, identify what is working well, and recommend upgrades only where necessary. This approach saves you money and minimizes disruption. We are experienced with equipment from all major brands including MikroTik, Ubiquiti, Hikvision, Dahua, Panasonic, Grandstream, and many others.',
      },
      {
        question: 'What brands do you work with?',
        answer:
          'We partner with and are experienced with a wide range of leading technology brands. For networking, we work with MikroTik, Ubiquiti, Cisco, and TP-Link. For security cameras, we use Hikvision, Dahua, and Samsung. For phone systems, we work with Grandstream, Yeastar, and Panasonic. We also work with ZKTeco for access control, APC for power solutions, and various other brands based on client requirements and budget. We always recommend the best fit for your specific needs rather than pushing a particular brand.',
      },
    ],
  },
  {
    id: 'pricing',
    label: 'Pricing',
    icon: DollarSign,
    description: 'Understand our pricing and packages',
    faqs: [
      {
        question: 'How do you price your services?',
        answer:
          'Our pricing is transparent and project-based. After the initial free assessment, we provide a detailed proposal that breaks down all costs including equipment, labor, and any recurring fees. There are no hidden charges or surprise add-ons. For one-time projects like network setup or CCTV installation, we provide fixed-price quotes. For ongoing support, we offer monthly retainer plans. We always discuss your budget upfront and recommend solutions that deliver the best value.',
      },
      {
        question: 'Do you offer service packages?',
        answer:
          'Yes, we offer several service packages designed for different business sizes and needs. Our Essential Plan covers basic IT support with remote assistance and quarterly on-site visits. Our Professional Plan includes priority support, monthly on-site maintenance, and proactive monitoring. Our Enterprise Plan provides 24/7 support, dedicated account management, and comprehensive coverage for all your IT needs. Each plan can be customized with additional services based on your requirements.',
      },
      {
        question: 'Is there a minimum contract period?',
        answer:
          'For one-time projects like installations, there is no contract â€” you pay for the completed work. For ongoing support plans, we typically recommend a minimum commitment of 3 months to ensure we can deliver measurable improvements. However, we understand that business needs change, so we offer flexible terms and do not lock you into long-term contracts. You can upgrade, downgrade, or cancel your support plan with reasonable notice.',
      },
      {
        question: 'Do you charge for initial consultations?',
        answer:
          'No, our initial consultation and site assessment are completely free with no obligations. We believe in building trust by providing value upfront. During this assessment, our team visits your location, evaluates your current setup, understands your requirements, and provides preliminary recommendations. You will receive a detailed proposal with transparent pricing, and you are under no obligation to proceed. This is our way of demonstrating our expertise and commitment before you make any financial commitment.',
      },
    ],
  },
  {
    id: 'support',
    label: 'Support',
    icon: LifeBuoy,
    description: 'Learn about our support capabilities',
    faqs: [
      {
        question: 'What are your support hours?',
        answer:
          'Our standard business hours are Saturday through Thursday, 9:00 AM to 6:00 PM, which aligns with the Bangladesh business week. For clients on our Professional and Enterprise support plans, we offer extended support hours including early morning and evening coverage. Emergency support is available 24/7 for critical issues that require immediate attention, such as complete network outages or security breaches.',
      },
      {
        question: 'How quickly do you respond to issues?',
        answer:
          'Response times depend on the severity of the issue and your support plan. For critical issues (complete network outage, security breach), we respond within 30 minutes. For high-priority issues (partial outage, major performance degradation), we respond within 2 hours. For standard issues (non-critical problems, general questions), we respond within 4 hours during business hours. Our track record shows that over 90% of issues are resolved on the first contact.',
      },
      {
        question: 'What happens in an emergency?',
        answer:
          'In an emergency situation, such as a complete network failure, security incident, or data breach, you can reach us through our dedicated emergency hotline. Our on-call engineers are available 24/7 and will begin troubleshooting immediately. For clients in Dhaka, we can dispatch a technician to your location within 2-3 hours for emergencies. We follow established escalation procedures to ensure the fastest possible resolution while keeping you informed at every step.',
      },
      {
        question: 'How do I submit a support request?',
        answer:
          'You can submit support requests through multiple channels for your convenience. Call or WhatsApp us directly, send an email to our support team, or use the contact form on our website. For clients on support plans, we also provide a dedicated support portal where you can track the status of your requests in real time. Whichever method you choose, our team ensures your request is logged, prioritized, and assigned to the right engineer promptly.',
      },
    ],
  },
  {
    id: 'getting-started',
    label: 'Getting Started',
    icon: Rocket,
    description: 'Start your journey with Tech Sheba',
    faqs: [
      {
        question: 'How do I get started?',
        answer:
          'Getting started is simple. Contact us through our website form, call us at 01980884541, or send an email to hello@techsheba.net. Our team will schedule a convenient time for a free consultation and site assessment. After understanding your needs and evaluating your current setup, we will provide a detailed proposal with recommendations and transparent pricing. Once you approve, we schedule the work at a time that minimizes disruption to your business operations.',
      },
      {
        question: 'What is the assessment process?',
        answer:
          'Our free assessment typically takes 1-2 hours depending on the size of your office and the complexity of your requirements. During the assessment, our engineers visit your location to evaluate your existing IT infrastructure, identify pain points and bottlenecks, understand your business goals and growth plans, and assess your current security posture. We document everything and use this information to design a tailored solution that addresses your specific needs.',
      },
      {
        question: 'How long does installation take?',
        answer:
          'Installation timelines vary based on the scope of work. A simple Wi-Fi setup can be completed in half a day. A comprehensive network installation with structured cabling typically takes 2-5 days depending on the office size. A full CCTV system installation usually takes 1-3 days. For larger projects that involve multiple systems, we provide a detailed project timeline with milestones so you know exactly what to expect. We always schedule installations to minimize disruption to your daily operations.',
      },
      {
        question: 'Do you provide training after installation?',
        answer:
          'Yes, we believe that proper training is essential for getting the most out of your new systems. After every installation, we provide hands-on training for your staff on how to use the new systems effectively. This includes basic troubleshooting, daily operations, and best practices. We also provide comprehensive documentation and quick-reference guides. For ongoing support, our team is always available to answer questions and provide additional training as your team grows or as new features are implemented.',
      },
    ],
  },
];

export default function FaqPage() {
  const { navigate } = useNavigation();
  const [activeCategory, setActiveCategory] = useState('general');

  const activeData = faqCategories.find((c) => c.id === activeCategory)!;

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
              <span className="text-[#001F60] font-medium">FAQ</span>
            </nav>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Badge className="mb-4 bg-[#001F60]/10 text-[#001F60] hover:bg-[#001F60]/20 border-0 text-sm px-4 py-1">
              Help Center
            </Badge>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e293b] mb-4 tracking-tight">
              Frequently Asked{' '}
              <span className="text-[#001F60]">Questions</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-lg md:text-xl text-[#475569] max-w-2xl leading-relaxed">
              Find answers to the most common questions about our services,
              pricing, support, and how to get started with Tech Sheba.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ==================== SECTION 2: FAQ CATEGORIES + ACCORDION ==================== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Sidebar: Category Navigation */}
            <div className="lg:col-span-1">
              <FadeIn direction="right">
                <div className="lg:sticky lg:top-28">
                  <p className="text-xs font-semibold text-[#64748b] uppercase tracking-wider mb-4">
                    Categories
                  </p>
                  <nav className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 -mx-1 px-1">
                    {faqCategories.map((cat) => {
                      const Icon = cat.icon;
                      const isActive = activeCategory === cat.id;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => setActiveCategory(cat.id)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap text-left min-w-max lg:min-w-0 lg:w-full ${
                            isActive
                              ? 'bg-[#001F60] text-white shadow-lg shadow-[#001F60]/20'
                              : 'text-[#475569] hover:bg-[#eff6ff] hover:text-[#001F60]'
                          }`}
                        >
                          <Icon className="w-4 h-4 shrink-0" />
                          {cat.label}
                          <span
                            className={`ml-auto text-xs px-1.5 py-0.5 rounded-full ${
                              isActive
                                ? 'bg-white/20 text-white'
                                : 'bg-[#f1f5f9] text-[#64748b]'
                            }`}
                          >
                            {cat.faqs.length}
                          </span>
                        </button>
                      );
                    })}
                  </nav>

                  {/* Category Description */}
                  <div className="hidden lg:block mt-6 p-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]">
                    <p className="text-sm text-[#64748b] leading-relaxed">
                      {activeData.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Main: FAQ Accordion */}
            <div className="lg:col-span-3">
              <FadeIn>
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    {(() => {
                      const Icon = activeData.icon;
                      return (
                        <div className="w-10 h-10 rounded-xl bg-[#001F60]/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[#001F60]" />
                        </div>
                      );
                    })()}
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1e293b]">
                      {activeData.label} Questions
                    </h2>
                  </div>
                  <p className="text-[#475569] lg:hidden text-sm">
                    {activeData.description}
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <Accordion
                  type="single"
                  collapsible
                  className="space-y-3"
                >
                  {activeData.faqs.map((faq, idx) => (
                    <AccordionItem
                      key={`${activeCategory}-${idx}`}
                      value={`${activeCategory}-${idx}`}
                      className="border border-[#e2e8f0] rounded-xl px-6 data-[state=open]:border-[#001F60]/30 data-[state=open]:bg-[#eff6ff]/30 data-[state=open]:shadow-sm transition-all duration-300"
                    >
                      <AccordionTrigger className="text-left text-[#1e293b] font-semibold hover:text-[#001F60] hover:no-underline py-5 text-base leading-snug">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-[#475569] leading-relaxed pb-5 text-[15px]">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </FadeIn>

              {/* Total FAQ Count */}
              <FadeIn delay={0.2}>
                <p className="text-center text-sm text-[#64748b] mt-10">
                  Showing {activeData.faqs.length} questions in &ldquo;{activeData.label}&rdquo; â€¢{' '}
                  {faqCategories.reduce((sum, c) => sum + c.faqs.length, 0)} total FAQs
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 3: STILL HAVE QUESTIONS CTA ==================== */}
      <section className="py-20 lg:py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#001F60] via-[#0775FF] to-[#4DA3FF] p-10 md:p-16 text-center">
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

              <div className="relative z-10 max-w-2xl mx-auto">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
                  <HelpCircle className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-white/80 text-lg mb-8 leading-relaxed">
                  Can&apos;t find what you&apos;re looking for? Our team is happy to
                  help. Get in touch and we&apos;ll provide the answers you need.
                </p>
                <Button
                  size="lg"
                  className="bg-white text-[#001F60] hover:bg-white/90 px-8 py-3 rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 h-14 text-base"
                  onClick={() => navigate('contact')}
                >
                  Contact Our Team
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ==================== SECTION 4: QUICK CONTACT CARDS ==================== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1e293b] mb-3">
                Quick Contact Options
              </h2>
              <p className="text-[#475569] max-w-lg mx-auto">
                Reach out through your preferred channel â€” we are here to help
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {/* Phone */}
            <StaggerItem>
              <Card className="group h-full border-[#e2e8f0] hover:border-[#001F60]/30 hover:shadow-lg hover:shadow-[#001F60]/5 transition-all duration-300 bg-white text-center">
                <CardContent className="p-8 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#001F60] flex items-center justify-center mb-5 shadow-lg shadow-[#001F60]/20 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-[#1e293b] text-lg mb-2">
                    Call Us
                  </h3>
                  <p className="text-[#475569] text-sm mb-4">
                    Speak directly with our team
                  </p>
                  <a
                    href="tel:01980884541"
                    className="text-[#001F60] font-semibold text-sm hover:underline"
                  >
                    01980884541
                  </a>
                </CardContent>
              </Card>
            </StaggerItem>

            {/* Email */}
            <StaggerItem>
              <Card className="group h-full border-[#e2e8f0] hover:border-[#001F60]/30 hover:shadow-lg hover:shadow-[#001F60]/5 transition-all duration-300 bg-white text-center">
                <CardContent className="p-8 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#0775FF] flex items-center justify-center mb-5 shadow-lg shadow-[#0775FF]/20 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-[#1e293b] text-lg mb-2">
                    Email Us
                  </h3>
                  <p className="text-[#475569] text-sm mb-4">
                    We reply within 24 hours
                  </p>
                  <a
                    href="mailto:hello@techsheba.net"
                    className="text-[#001F60] font-semibold text-sm hover:underline"
                  >
                    hello@techsheba.net
                  </a>
                </CardContent>
              </Card>
            </StaggerItem>

            {/* WhatsApp */}
            <StaggerItem>
              <Card className="group h-full border-[#e2e8f0] hover:border-[#001F60]/30 hover:shadow-lg hover:shadow-[#001F60]/5 transition-all duration-300 bg-white text-center">
                <CardContent className="p-8 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#4DA3FF] flex items-center justify-center mb-5 shadow-lg shadow-[#4DA3FF]/20 group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-[#1e293b] text-lg mb-2">
                    WhatsApp
                  </h3>
                  <p className="text-[#475569] text-sm mb-4">
                    Quick chat support
                  </p>
                  <a
                    href="https://wa.me/8801980884541"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#001F60] font-semibold text-sm hover:underline"
                  >
                    Message Us
                  </a>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}