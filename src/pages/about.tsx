'use client';

import { motion } from 'framer-motion';
import { useNavigation } from '@/lib/store';
import { FadeIn, StaggerContainer, StaggerItem, CountUp } from '@/components/animations';
import { Button } from '@/components/ui/button';
import {
  ArrowRight, Shield, Heart, Lightbulb, Users, Award, Target,
  Eye, ChevronRight, CheckCircle2, Phone, Mail, MapPin, Globe,
  Building2, Briefcase, Clock, Zap, Handshake, Star, Cpu,
  GraduationCap, TrendingUp, LayoutGrid,
} from 'lucide-react';

const teamMembers = [
  {
    name: 'Faruq Rahman',
    title: 'Founder & CEO',
    bio: 'With over 15 years in the IT industry, Faruq founded Tech Sheba to bridge the technology gap for growing businesses in Bangladesh. His vision drives the company\'s client-first approach.',
  },
  {
    name: 'Tania Akter',
    title: 'Head of Operations',
    bio: 'Tania oversees all project delivery and client relationships. Her background in IT project management ensures every engagement is executed on time and exceeds expectations.',
  },
  {
    name: 'Imran Hossain',
    title: 'Lead Network Engineer',
    bio: 'A certified network professional with expertise in enterprise Wi-Fi, structured cabling, and network security. Imran has designed IT infrastructure for over 100 businesses across Bangladesh.',
  },
  {
    name: 'Sabrina Islam',
    title: 'Security Solutions Lead',
    bio: 'Sabrina specializes in physical and digital security systems, from CCTV surveillance to cybersecurity. She leads the team that protects our clients\' most valuable assets.',
  },
  {
    name: 'Mahin Chowdhury',
    title: 'Web & Digital Lead',
    bio: 'Mahin brings creative vision and technical expertise to every website project. He leads a team of designers and developers crafting modern, high-performance digital experiences.',
  },
  {
    name: 'Rafi Khan',
    title: 'IT Support Manager',
    bio: 'Rafi ensures our clients receive rapid, reliable support around the clock. His team handles everything from routine maintenance to emergency troubleshooting with consistent excellence.',
  },
];

const certifications = [
  'MikroTik Certified',
  'Ubiquiti UniFi Pro',
  'CompTIA Network+',
  'Cisco Partner',
  'Hikvision Certified',
  'ZKTeco Partner',
  'Microsoft Partner',
  'Google Cloud',
];

export default function AboutPage() {
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
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-[#64748b] mb-6">
              <button
                onClick={() => navigate('home')}
                className="hover:text-[#001F60] transition-colors duration-200"
              >
                Home
              </button>
              <ChevronRight className="w-4 h-4" />
              <span className="text-[#001F60] font-medium">About Us</span>
            </nav>

            <h1 className="text-4xl sm:text-5xl font-bold text-[#1e293b] mb-5">
              About <span className="text-gradient-green">Tech Sheba</span>
            </h1>
            <p className="text-lg text-[#475569] leading-relaxed max-w-3xl">
              We are a team of passionate IT professionals dedicated to making enterprise-grade
              technology accessible to businesses of every size in Bangladesh. Learn about our
              journey, our values, and the people who make it all happen.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ==================== SECTION 2: COMPANY STORY ==================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn direction="left">
              <div className="sticky top-32">
                <span className="inline-block text-sm font-semibold text-[#001F60] tracking-wide uppercase mb-3">
                  Our Story
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-6">
                  Built from Real Problems, Solved with Real Expertise
                </h2>
                <div className="w-20 h-1 rounded-full bg-gradient-to-r from-[#001F60] to-[#4DA3FF] mb-8" />
                {/* Decorative image placeholder */}
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#eff6ff] to-[#f0f4ff] aspect-[4/3] flex items-center justify-center border border-[#dbeafe]/60">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#001F60] to-[#4DA3FF] flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/20">
                      <Building2 className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-[#001F60] font-semibold text-lg">Tech Sheba</p>
                    <p className="text-[#64748b] text-sm mt-1">IT Solutions Since Day One</p>
                  </div>
                  <div className="absolute bottom-4 right-4 w-16 h-16 rounded-xl bg-white/60 border border-[#dbeafe] animate-float" />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-white/60 border border-[#dbeafe] animate-float" style={{ animationDelay: '1s' }} />
                </div>
              </div>
            </FadeIn>

            <div className="space-y-6">
              <FadeIn direction="right" delay={0.1}>
                <p className="text-[#475569] leading-relaxed text-lg">
                  Tech Sheba was born from a simple observation: too many businesses in Bangladesh
                  were struggling with unreliable IT infrastructure, and the available solutions were
                  either prohibitively expensive or frustratingly inadequate. Small and medium
                  businesses â€” the backbone of Bangladesh&apos;s economy â€” deserved better. They
                  deserved an IT partner who understood their unique challenges, spoke their language,
                  and delivered solutions that actually worked without breaking the bank.
                </p>
              </FadeIn>

              <FadeIn direction="right" delay={0.2}>
                <p className="text-[#475569] leading-relaxed text-lg">
                  What started as a small team of passionate engineers with a mission to democratize
                  professional IT services has grown into a comprehensive technology solutions provider
                  serving businesses across Dhaka, Chittagong, and beyond. Our early days were spent
                  in small offices and retail shops, understanding firsthand the pain points that
                  business owners faced daily â€” from dropped network connections and inadequate
                  surveillance to the complete absence of any IT strategy. These experiences shaped
                  our service philosophy: every solution must be practical, reliable, and genuinely
                  useful for the businesses we serve.
                </p>
              </FadeIn>

              <FadeIn direction="right" delay={0.3}>
                <p className="text-[#475569] leading-relaxed text-lg">
                  Over the years, we have expanded our capabilities to cover the full spectrum of
                  business IT needs â€” from structured cabling and enterprise Wi-Fi to CCTV surveillance,
                  access control systems, and modern web development. But growth never meant losing
                  sight of what made us different. We have deliberately maintained our personalized
                  approach, ensuring that every client â€” whether a five-person startup or a
                  hundred-employee corporation â€” receives the same level of attention, care, and
                  technical excellence that has become the hallmark of the Tech Sheba brand.
                </p>
              </FadeIn>

              <FadeIn direction="right" delay={0.4}>
                <p className="text-[#475569] leading-relaxed text-lg">
                  Today, as Bangladesh accelerates its digital transformation, Tech Sheba stands
                  ready as the trusted IT partner that businesses can rely on. We are not just
                  service providers â€” we are problem solvers, strategic advisors, and long-term
                  partners invested in the success of every client we work with. Our journey is
                  far from over, and we are excited about the possibilities that lie ahead as we
                  continue to help businesses across Bangladesh harness the power of technology
                  to achieve their full potential.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 3: MISSION & VISION ==================== */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-sm font-semibold text-[#001F60] tracking-wide uppercase mb-3">
                Our Guiding Principles
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-5">
                Mission & Vision
              </h2>
              <p className="text-lg text-[#475569] leading-relaxed">
                These two statements define everything we do, every decision we make, and every
                relationship we build with our clients. They are the compass that guides our team
                forward each day.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-10">
            <FadeIn direction="left" delay={0.1}>
              <div className="relative bg-white rounded-3xl p-10 lg:p-12 border border-[#e2e8f0]/60 shadow-sm h-full overflow-hidden">
                {/* Decorative corner accent */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-[#001F60]/5 to-transparent rounded-br-full" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border-2 border-[#001F60]/10" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-[#001F60] flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#1e293b] mb-6">Our Mission</h3>
                  <p className="text-[#475569] leading-relaxed text-lg mb-6">
                    To deliver simple, secure, and smart IT solutions that allow businesses to
                    focus on their growth.
                  </p>
                  <p className="text-[#475569] leading-relaxed">
                    We believe that technology should be an enabler, not a barrier. Our mission
                    drives us to simplify complex IT challenges, implement robust security
                    measures, and design intelligent systems that work seamlessly in the background.
                    We want every business owner in Bangladesh to feel confident that their
                    technology infrastructure is in capable, caring hands â€” freeing them to
                    concentrate on what they do best: running and growing their business.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div className="relative bg-white rounded-3xl p-10 lg:p-12 border border-[#e2e8f0]/60 shadow-sm h-full overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#4DA3FF]/5 to-transparent rounded-bl-full" />
                <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full border-2 border-[#4DA3FF]/10" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#001F60] to-[#4DA3FF] flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#1e293b] mb-6">Our Vision</h3>
                  <p className="text-[#475569] leading-relaxed text-lg mb-6">
                    To become the most trusted IT partner in Bangladesh for modern enterprises.
                  </p>
                  <p className="text-[#475569] leading-relaxed">
                    We envision a Bangladesh where every business â€” from a small garment factory
                    in Gazipur to a growing tech startup in Banani â€” has access to world-class
                    IT services. Our vision is to raise the standard of IT service delivery
                    in the country, setting new benchmarks for reliability, transparency, and
                    client satisfaction. We are building a future where technology is a true
                    competitive advantage for Bangladeshi businesses, enabling them to compete
                    not just locally but on the global stage.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 4: OUR VALUES ==================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-sm font-semibold text-[#001F60] tracking-wide uppercase mb-3">
                What We Stand For
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-5">
                Our Core Values
              </h2>
              <p className="text-lg text-[#475569] leading-relaxed">
                These five values are the foundation of our company culture. They shape how we
                interact with clients, how we approach problems, and how we build our team.
                Every member of Tech Sheba embodies these principles daily.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Integrity',
                desc: 'We operate with complete honesty and transparency in every interaction. From pricing to project timelines, we set realistic expectations and always deliver on our promises. We would rather lose a deal than compromise our integrity, because trust is the foundation of every lasting business relationship we build.',
              },
              {
                icon: Lightbulb,
                title: 'Innovation',
                desc: 'Technology evolves rapidly, and so do we. We continuously explore new tools, methodologies, and approaches to deliver better solutions for our clients. Innovation at Tech Sheba means finding smarter, more efficient ways to solve real business problems â€” not adopting technology for its own sake.',
              },
              {
                icon: CheckCircle2,
                title: 'Reliability',
                desc: 'Our clients count on us to keep their technology running. We take this responsibility seriously by building systems that are dependable, redundant, and well-maintained. When we say we will be there, we are there â€” consistently, professionally, and with the urgency your business deserves.',
              },
              {
                icon: Heart,
                title: 'Client-Centric',
                desc: 'Every decision we make starts with one question: how does this benefit our client? We listen more than we talk, understand before we recommend, and measure our success by the success of the businesses we serve. Your goals are our goals, and your challenges are our challenges.',
              },
              {
                icon: Award,
                title: 'Excellence',
                desc: 'Good enough is never good enough. We pursue excellence in every project, every support call, and every interaction. Our team holds themselves to the highest professional standards, continuously improving their skills and processes to deliver work that makes us and our clients proud.',
              },
              {
                icon: Handshake,
                title: 'Partnership',
                desc: 'We do not see ourselves as vendors â€” we see ourselves as long-term partners in our clients\' success. This means going beyond the scope of any single project to provide ongoing guidance, proactive recommendations, and the kind of care and attention that only a true partner would offer.',
              },
            ].map((value) => (
              <StaggerItem key={value.title}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-8 green-glow border border-[#e2e8f0]/60 h-full"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#001F60]/10 to-[#4DA3FF]/10 flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-[#001F60]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e293b] mb-3">{value.title}</h3>
                  <p className="text-[#475569] leading-relaxed">{value.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ==================== SECTION 5: TEAM SECTION ==================== */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-sm font-semibold text-[#001F60] tracking-wide uppercase mb-3">
                The People Behind Tech Sheba
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-5">
                Meet Our Team
              </h2>
              <p className="text-lg text-[#475569] leading-relaxed">
                Our strength lies in our people. Each member of the Tech Sheba team brings
                unique expertise, genuine passion for technology, and a shared commitment
                to delivering exceptional results for every client we serve.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <StaggerItem key={member.name}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-8 green-glow border border-[#e2e8f0]/60 text-center h-full"
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#001F60] to-[#4DA3FF] flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-500/20">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1e293b] mb-1">{member.name}</h3>
                  <p className="text-sm font-medium text-[#001F60] mb-4">{member.title}</p>
                  <p className="text-sm text-[#475569] leading-relaxed">{member.bio}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ==================== SECTION 6: COMPANY STATS ==================== */}
      <section className="py-24 bg-gradient-to-br from-[#001F60] via-[#0775FF] to-[#001440] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
                Tech Sheba by the Numbers
              </h2>
              <p className="text-lg text-blue-100/70 max-w-2xl mx-auto">
                Numbers tell a story of consistent growth, trusted partnerships, and a team
                that delivers results day after day for businesses across Bangladesh.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: 150, suffix: '+', label: 'Projects Completed', desc: 'Successfully delivered across diverse industries and business sizes' },
              { number: 80, suffix: '+', label: 'Happy Clients', desc: 'Businesses that trust us with their technology needs every day' },
              { number: 8, suffix: '+', label: 'Years Experience', desc: 'Of dedicated IT service excellence in the Bangladeshi market' },
              { number: 25, suffix: '+', label: 'Team Members', desc: 'Certified professionals passionate about technology and client success' },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
                    <CountUp end={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-base sm:text-lg font-semibold text-blue-100 mb-2">{stat.label}</div>
                  <div className="text-sm text-blue-200/60 max-w-[220px] mx-auto">{stat.desc}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ==================== SECTION 7: CERTIFICATIONS & PARTNERSHIPS ==================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-sm font-semibold text-[#001F60] tracking-wide uppercase mb-3">
                Trusted & Certified
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-5">
                Certifications & Partnerships
              </h2>
              <p className="text-lg text-[#475569] leading-relaxed">
                Our team holds certifications from leading technology vendors, and our
                partnerships ensure we deliver best-in-class solutions backed by
                manufacturer support and expertise.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <StaggerItem key={cert}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#f8fafc] rounded-2xl p-6 border border-[#e2e8f0]/60 hover:border-[#dbeafe] hover:bg-[#f0f4ff] transition-all duration-300 text-center group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#001F60]/10 to-[#4DA3FF]/10 flex items-center justify-center mx-auto mb-4 group-hover:from-[#001F60]/20 group-hover:to-[#4DA3FF]/20 transition-all duration-300">
                    <Award className="w-7 h-7 text-[#001F60]" />
                  </div>
                  <p className="font-semibold text-[#1e293b] text-sm">{cert}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ==================== SECTION 8: WHY CHOOSE US ==================== */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-sm font-semibold text-[#001F60] tracking-wide uppercase mb-3">
                The Tech Sheba Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-5">
                Why Businesses Choose Us
              </h2>
              <p className="text-lg text-[#475569] leading-relaxed">
                In a competitive market, here is what makes Tech Sheba the preferred IT
                partner for growing businesses across Bangladesh.
              </p>
            </div>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <StaggerContainer className="space-y-5">
              {[
                {
                  icon: Zap,
                  title: 'End-to-End Service Coverage',
                  desc: 'From network cables to cybersecurity, websites to surveillance â€” one partner handles everything. No more juggling between multiple vendors or dealing with communication gaps between service providers.',
                },
                {
                  icon: Users,
                  title: 'Local Expertise, Global Standards',
                  desc: 'We understand the unique challenges of doing business in Bangladesh â€” from power fluctuations to internet reliability. Our solutions are designed specifically for the local environment while meeting international quality benchmarks.',
                },
                {
                  icon: TrendingUp,
                  title: 'Scalable Solutions That Grow With You',
                  desc: 'We design systems that start where you are and scale as you grow. Whether you are opening your second office or your twentieth, our solutions adapt seamlessly to your evolving business requirements without costly overhauls.',
                },
                {
                  icon: LayoutGrid,
                  title: 'Transparent Pricing, No Surprises',
                  desc: 'Every project comes with a clear, detailed proposal. We believe in complete transparency â€” what we quote is what you pay. No hidden fees, no unexpected charges, and no scope creep that inflates your bill without your consent.',
                },
                {
                  icon: Clock,
                  title: 'Rapid Response, Lasting Results',
                  desc: 'When issues arise, our support team responds within minutes, not hours. We combine quick response times with thorough, lasting solutions that address root causes rather than just symptoms, reducing recurring problems over time.',
                },
                {
                  icon: GraduationCap,
                  title: 'Knowledge Transfer & Team Training',
                  desc: 'We do not just install systems and leave. We train your team to use and manage them confidently, providing documentation and ongoing guidance so your business becomes more self-sufficient and empowered over time.',
                },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex gap-5 p-6 rounded-2xl bg-white border border-[#e2e8f0]/60 hover:bg-[#f0f4ff] hover:border-[#dbeafe] green-glow transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#001F60]/10 to-[#4DA3FF]/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-[#001F60]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#1e293b] mb-2">{item.title}</h4>
                      <p className="text-[#475569] leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 9: FINAL CTA ==================== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#001F60] via-[#0775FF] to-[#001440]" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-white/5 rounded-full translate-y-1/2" />
        <div className="absolute top-10 right-1/4 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-8 border border-white/20">
              <Handshake className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Partner With Us?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you need a complete IT overhaul, a specific solution, or simply want to
              explore how technology can better serve your business â€” we are here to help.
              Let us start the conversation with a free, no-obligation assessment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Button
                size="lg"
                onClick={() => navigate('contact')}
                className="bg-white text-[#001F60] hover:bg-blue-50 shadow-xl rounded-xl px-8 py-6 text-base font-semibold group"
              >
                Get Your Free Assessment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <a
                href="tel:01980884541"
                className="flex items-center gap-2 text-white/90 hover:text-white font-medium transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
                Call: 01980884541
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 text-blue-100/60 text-sm">
              <span className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@techsheba.net</span>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Dhaka, Bangladesh</span>
              <span className="flex items-center gap-2"><Globe className="w-4 h-4" /> techsheba.net</span>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}