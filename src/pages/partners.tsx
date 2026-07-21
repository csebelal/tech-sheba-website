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
  Network,
  Shield,
  HardDrive,
  Phone,
  Globe,
  Wifi,
  MonitorSpeaker,
  Server,
  Lock,
  Headphones,
  Award,
  Users,
  GraduationCap,
  DollarSign,
  Handshake,
  CheckCircle2,
  Send,
  Star,
} from 'lucide-react';

const techPartners = [
  {
    name: 'MikroTik',
    category: 'Networking',
    description: 'Official partner for enterprise router and network equipment solutions across Bangladesh.',
    icon: Network,
  },
  {
    name: 'Ubiquiti',
    category: 'Networking',
    description: 'Certified distributor for high-performance networking and Wi-Fi products.',
    icon: Wifi,
  },
  {
    name: 'Hikvision',
    category: 'Security',
    description: 'Authorized partner for CCTV and video surveillance systems for commercial clients.',
    icon: Shield,
  },
  {
    name: 'Dahua',
    category: 'Security',
    description: 'Trusted partner for advanced security systems and access control solutions.',
    icon: Lock,
  },
  {
    name: 'Cisco',
    category: 'Networking',
    description: 'Partnered for enterprise-grade networking infrastructure and communication solutions.',
    icon: Server,
  },
  {
    name: 'TP-Link',
    category: 'Networking',
    description: 'Authorized reseller for reliable network equipment for business and enterprise use.',
    icon: Network,
  },
  {
    name: 'D-Link',
    category: 'Networking',
    description: 'Providing D-Link networking solutions for small to medium businesses across Bangladesh.',
    icon: Globe,
  },
  {
    name: 'Synology',
    category: 'Storage',
    description: 'Partner for NAS and data backup solutions ensuring enterprise data protection.',
    icon: HardDrive,
  },
  {
    name: 'Yeastar',
    category: 'Communication',
    description: 'Certified partner for PBX and IP telephony systems for business communications.',
    icon: MonitorSpeaker,
  },
  {
    name: 'Fortinet',
    category: 'Security',
    description: 'Partnered for next-generation cybersecurity and firewall solutions for enterprises.',
    icon: Shield,
  },
];

const partnerBenefits = [
  {
    icon: Headphones,
    title: 'Priority Support',
    description:
      'Partners receive dedicated support channels with faster response times, direct access to our engineering team, and priority scheduling for collaborative projects.',
  },
  {
    icon: Handshake,
    title: 'Joint Solutions',
    description:
      'Co-develop integrated solutions that combine our strengths. Joint marketing opportunities and collaborative project delivery create win-win outcomes.',
  },
  {
    icon: GraduationCap,
    title: 'Training & Certification',
    description:
      'Access exclusive training programs, product certifications, and technical workshops to keep your team at the cutting edge of technology.',
  },
  {
    icon: DollarSign,
    title: 'Revenue Sharing',
    description:
      'Earn competitive margins through our referral and reseller programs. Transparent commission structures with monthly reporting and timely payouts.',
  },
];

const categoryColors: Record<string, string> = {
  Networking: 'bg-blue-50 text-blue-700 border-blue-200',
  Security: 'bg-red-50 text-red-700 border-red-200',
  Storage: 'bg-amber-50 text-amber-700 border-amber-200',
  Communication: 'bg-purple-50 text-purple-700 border-purple-200',
};

export default function PartnersPage() {
  const { navigate } = useNavigation();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    contactName: '',
    email: '',
    partnershipType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ company: '', contactName: '', email: '', partnershipType: '', message: '' });
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
              <span className="text-[#001F60] font-medium">Partners</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-12 bg-[#001F60] rounded-full" />
              <Badge className="bg-[#eff6ff] text-[#001F60] border-[#dbeafe] hover:bg-[#dbeafe]">
                <Handshake className="h-3.5 w-3.5 mr-1.5" />
                Technology Alliances
              </Badge>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e293b] mb-6 tracking-tight">
              Our Partners &{' '}
              <span className="text-[#001F60]">Technology Alliances</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed">
              We collaborate with world-class technology brands and local businesses to deliver
              comprehensive, reliable IT solutions that meet the highest industry standards.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ==================== SECTION 2: PARTNERSHIP PHILOSOPHY ==================== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <Badge className="bg-[#eff6ff] text-[#001F60] border-[#dbeafe] mb-4">
                Our Philosophy
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-6">
                Building Stronger{' '}
                <span className="text-[#001F60]">Solutions Together</span>
              </h2>
              <p className="text-[#475569] text-lg leading-relaxed mb-6">
                At Tech Sheba, we believe that the best solutions are built through strong partnerships.
                By aligning with industry-leading technology providers and trusted local businesses,
                we ensure our clients receive solutions that are not just cutting-edge, but also proven,
                reliable, and backed by global expertise.
              </p>
              <p className="text-[#475569] text-lg leading-relaxed mb-8">
                Our partnerships enable us to offer comprehensive service coverage â€” from networking
                hardware and security systems to cloud infrastructure and digital tools â€” all integrated
                seamlessly into cohesive solutions tailored to Bangladesh&apos;s business landscape.
              </p>
              <div className="space-y-3">
                {[
                  'Direct access to manufacturer support and RMA services',
                  'Early access to new products and technology updates',
                  'Volume pricing benefits passed directly to clients',
                  'Joint training and certification programs',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#4DA3FF] shrink-0 mt-0.5" />
                    <span className="text-[#475569]">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#001F60]/10 to-[#4DA3FF]/10 rounded-2xl" />
                <div className="relative grid grid-cols-2 gap-4">
                  <Card className="bg-white border-[#dbeafe]/60 shadow-sm">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-[#001F60] mb-1">10+</div>
                      <div className="text-sm text-[#64748b]">Technology Partners</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white border-[#dbeafe]/60 shadow-sm">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-[#001F60] mb-1">4</div>
                      <div className="text-sm text-[#64748b]">Partnership Categories</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white border-[#dbeafe]/60 shadow-sm">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-[#001F60] mb-1">500+</div>
                      <div className="text-sm text-[#64748b]">Products Available</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white border-[#dbeafe]/60 shadow-sm">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-[#001F60] mb-1">100%</div>
                      <div className="text-sm text-[#64748b]">Genuine Products</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 3: TECHNOLOGY PARTNERS ==================== */}
      <section className="py-20 lg:py-24 bg-[#f0f4ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge className="bg-[#eff6ff] text-[#001F60] border-[#dbeafe] mb-4">
                <Star className="h-3.5 w-3.5 mr-1.5" />
                Technology Partners
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-4">
                Technology We <span className="text-[#001F60]">Trust</span>
              </h2>
              <p className="text-[#475569] max-w-2xl mx-auto text-lg">
                We partner with the world&apos;s leading technology brands to deliver best-in-class
                solutions to our clients in Bangladesh.
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {techPartners.map((partner) => (
              <StaggerItem key={partner.name}>
                <Card className="h-full border-[#dbeafe]/60 hover:border-[#001F60]/30 hover:shadow-lg transition-all duration-300 group bg-white">
                  <CardContent className="p-5 flex flex-col items-center text-center">
                    <div className="h-14 w-14 rounded-2xl bg-[#eff6ff] flex items-center justify-center mb-4 group-hover:bg-[#001F60] transition-colors duration-300">
                      <partner.icon className="h-7 w-7 text-[#001F60] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-base font-bold text-[#1e293b] mb-1.5">{partner.name}</h3>
                    <Badge
                      variant="outline"
                      className={`text-xs mb-3 ${categoryColors[partner.category] || 'bg-gray-50 text-gray-700 border-gray-200'}`}
                    >
                      {partner.category}
                    </Badge>
                    <p className="text-xs text-[#64748b] leading-relaxed">{partner.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ==================== SECTION 4: STRATEGIC PARTNERS ==================== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative">
                <div className="bg-gradient-to-br from-[#001F60] to-[#0775FF] rounded-2xl p-8 sm:p-10 text-white">
                  <Handshake className="h-12 w-12 mb-6 text-blue-200" />
                  <h3 className="text-2xl font-bold mb-4">Who We Work With</h3>
                  <p className="text-blue-100 leading-relaxed mb-6">
                    Beyond technology vendors, we maintain strategic partnerships with businesses
                    across Bangladesh that complement our service offerings and extend our reach.
                  </p>
                  <div className="space-y-3">
                    {[
                      'System integrators and value-added resellers',
                      'Construction and interior design firms for integrated IT infrastructure',
                      'Software development agencies for digital solutions',
                      'Government and regulatory bodies for compliance',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-300 shrink-0 mt-0.5" />
                        <span className="text-blue-50 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Badge className="bg-[#eff6ff] text-[#001F60] border-[#dbeafe] mb-4">
                <Users className="h-3.5 w-3.5 mr-1.5" />
                Strategic Partners
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-6">
                Channel & Business{' '}
                <span className="text-[#001F60]">Partnerships</span>
              </h2>
              <p className="text-[#475569] text-lg leading-relaxed mb-6">
                Our channel partnerships create a network of trusted providers who can deliver
                Tech Sheba-quality solutions in regions and industries we serve. We actively
                seek partners who share our commitment to quality and client satisfaction.
              </p>
              <p className="text-[#475569] text-lg leading-relaxed mb-8">
                Whether you&apos;re a system integrator, reseller, or technology consultant,
                partnering with Tech Sheba gives you access to premium products, technical
                expertise, and a growing client base across Bangladesh.
              </p>
              <Button
                onClick={() => {
                  document.getElementById('partner-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                variant="outline"
                className="border-[#001F60] text-[#001F60] hover:bg-[#001F60] hover:text-white"
              >
                <Handshake className="h-4 w-4 mr-2" />
                Explore Partnership
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 5: PARTNER BENEFITS ==================== */}
      <section className="py-20 lg:py-24 bg-[#f0f4ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge className="bg-[#eff6ff] text-[#001F60] border-[#dbeafe] mb-4">
                <Award className="h-3.5 w-3.5 mr-1.5" />
                Benefits
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-4">
                Why Partner with{' '}
                <span className="text-[#001F60]">Tech Sheba</span>
              </h2>
              <p className="text-[#475569] max-w-2xl mx-auto text-lg">
                Our partnership program is designed to create mutual value and long-term growth.
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerBenefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <Card className="h-full border-[#dbeafe]/60 hover:border-[#001F60]/30 hover:shadow-lg transition-all duration-300 group bg-white text-center">
                  <CardContent className="p-6">
                    <div className="h-14 w-14 rounded-2xl bg-[#eff6ff] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#001F60] transition-colors duration-300">
                      <benefit.icon className="h-7 w-7 text-[#001F60] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#1e293b] mb-2">{benefit.title}</h3>
                    <p className="text-[#475569] text-sm leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ==================== SECTION 6: BECOME A PARTNER FORM ==================== */}
      <section id="partner-form" className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <FadeIn>
              <Badge className="bg-[#eff6ff] text-[#001F60] border-[#dbeafe] mb-4">
                <Handshake className="h-3.5 w-3.5 mr-1.5" />
                Partner With Us
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-4">
                Become a{' '}
                <span className="text-[#001F60]">Tech Sheba Partner</span>
              </h2>
              <p className="text-[#475569] text-lg leading-relaxed mb-8">
                Join our growing network of technology and business partners. Whether you represent
                a technology brand, a system integration company, or a complementary service provider,
                we&apos;d love to explore how we can work together.
              </p>
              <div className="space-y-4">
                {[
                  { icon: DollarSign, text: 'Competitive margin structures' },
                  { icon: Headphones, text: 'Dedicated partner account manager' },
                  { icon: GraduationCap, text: 'Product training and technical certification' },
                  { icon: Award, text: 'Marketing co-op and lead sharing programs' },
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
                  <CardTitle className="text-xl text-[#1e293b]">Partnership Inquiry</CardTitle>
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
                      <h3 className="text-xl font-bold text-[#1e293b] mb-2">Inquiry Submitted!</h3>
                      <p className="text-[#475569]">
                        Our partnerships team will review your request and get back to you within 3 business days.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-[#1e293b]">Company Name</Label>
                        <Input
                          id="company"
                          placeholder="Your company name"
                          value={formData.company}
                          onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                          required
                          className="border-[#dbeafe] focus:border-[#001F60]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contactName" className="text-[#1e293b]">Contact Name</Label>
                        <Input
                          id="contactName"
                          placeholder="Full name"
                          value={formData.contactName}
                          onChange={(e) => setFormData((prev) => ({ ...prev, contactName: e.target.value }))}
                          required
                          className="border-[#dbeafe] focus:border-[#001F60]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="partnerEmail" className="text-[#1e293b]">Email Address</Label>
                        <Input
                          id="partnerEmail"
                          type="email"
                          placeholder="you@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                          required
                          className="border-[#dbeafe] focus:border-[#001F60]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="partnershipType" className="text-[#1e293b]">Partnership Type</Label>
                        <Select
                          value={formData.partnershipType}
                          onValueChange={(value) => setFormData((prev) => ({ ...prev, partnershipType: value }))}
                        >
                          <SelectTrigger className="border-[#dbeafe] focus:border-[#001F60]">
                            <SelectValue placeholder="Select partnership type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="technology">Technology Vendor</SelectItem>
                            <SelectItem value="reseller">Reseller / Distributor</SelectItem>
                            <SelectItem value="integrator">System Integrator</SelectItem>
                            <SelectItem value="consulting">IT Consulting</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="partnerMessage" className="text-[#1e293b]">Message</Label>
                        <Textarea
                          id="partnerMessage"
                          placeholder="Tell us about your company and partnership goals..."
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                          className="border-[#dbeafe] focus:border-[#001F60] resize-none"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-[#001F60] hover:bg-[#001440] text-white h-11 text-base"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Submit Inquiry
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 7: CTA ==================== */}
      <section className="py-20 lg:py-24 bg-[#f0f4ff]">
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
                    Ready to Build Something Great?
                  </h2>
                  <p className="text-blue-100 text-lg max-w-xl mx-auto mb-8">
                    Let&apos;s discuss how our partnership can create value for both our businesses and
                    the clients we serve.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      onClick={() => navigate('contact')}
                      className="bg-white text-[#001F60] hover:bg-[#eff6ff] font-semibold h-12 px-8"
                    >
                      <Phone className="h-5 w-5 mr-2" />
                      Contact Us
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => navigate('services')}
                      className="border-white text-white hover:bg-white/10 font-semibold h-12 px-8"
                    >
                      <Globe className="h-5 w-5 mr-2" />
                      View Our Services
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}