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
  Wifi, Shield, Globe, Headphones, ChevronRight, ArrowRight,
  Network, Phone, Camera, KeyRound, Database, Code, Lightbulb,
  Wrench, CheckCircle2, Search, Monitor, Cpu, Server, Cloud,
  Lock, Eye, BarChart3, Rocket, MessageSquare, Clock, Award,
  Users, Zap, RefreshCw, ClipboardCheck, WifiOff, HardDrive,
  Fingerprint, MapPin, Mail, PhoneCall,
  type LucideIcon,
} from 'lucide-react';

interface ServiceFeature {
  title: string;
  description: string;
  features: string[];
  icon: string;
}

interface ServiceData {
  category: string;
  title: string;
  subtitle: string;
  icon: string;
  heroDescription: string;
  services: ServiceFeature[];
  benefits: string[];
  faqs: { q: string; a: string }[];
}

const iconMap: Record<string, LucideIcon> = {
  Wifi, Shield, Globe, Headphones, Network, Phone, Camera,
  KeyRound, Database, Code, Lightbulb, Wrench, Monitor, Cpu,
  Server, Cloud, Lock, Eye, BarChart3, Rocket, Search, Clock,
  Award, Users, Zap, RefreshCw, ClipboardCheck, WifiOff,
  HardDrive, Fingerprint, MapPin, Mail, PhoneCall,
};

const serviceDataMap: Record<string, ServiceData> = {
  'network-connectivity': {
    category: 'Infrastructure & Connectivity',
    title: 'Network & Connectivity Solutions',
    subtitle: 'Ensuring seamless connectivity across your workspace with structured cabling, router configuration, and enterprise-grade Wi-Fi infrastructure.',
    icon: 'Wifi',
    heroDescription: 'Your network is the backbone of your business operations. Whether you need reliable Wi-Fi coverage across a multi-floor office in Gulshan, structured cabling for a new workspace in Mohakhali, or a complete network overhaul for your factory in Gazipur, Tech Sheba designs and implements connectivity solutions that keep your team productive and your data flowing smoothly. We work with leading brands like Cisco, Ubiquiti, TP-Link, and MikroTik to deliver enterprise-grade performance at prices that make sense for Bangladeshi businesses of every size.',
    services: [
      {
        title: 'Network Design & Wi-Fi Setup',
        description: 'We design and deploy high-performance wireless networks that eliminate dead zones and deliver consistent speeds across every corner of your office. Our engineers conduct thorough site surveys, analyze floor plans, and perform RF (radio frequency) assessments before recommending the optimal access point placement for maximum coverage. Whether you run a 10-person startup in Banani or a 200-seat corporate office in Motijheel, we scale our solutions to match your exact needs. We also configure VLANs, QoS policies, and guest networks to keep your primary business traffic prioritized and secure.',
        features: [
          'Professional site survey and heat-map analysis',
          'Enterprise-grade access point deployment (Ubiquiti, Cisco, TP-Link)',
          'VLAN segmentation and QoS configuration',
          'Guest network isolation with captive portal',
          'Seamless roaming across multi-floor environments',
        ],
        icon: 'Wifi',
      },
      {
        title: 'Structured Cabling & Router Configuration',
        description: 'Proper cabling is the invisible foundation of every reliable IT setup. At Tech Sheba, we install Cat6 and Cat6a structured cabling systems that support Gigabit and 10-Gigabit speeds respectively, future-proofing your investment for years to come. Our certified technicians follow international TIA/EIA standards, neatly routing cables through cable trays, conduits, and false ceilings. We also configure managed routers and Layer 2/3 switches with proper firewall rules, DHCP, NAT, and inter-VLAN routing to ensure your local network communicates efficiently and securely with the outside world.',
        features: [
          'Cat6 / Cat6a cabling with certified testing',
          'Rack and patch panel installation with labeling',
          'Managed router and switch configuration',
          'Firewall setup with port forwarding and NAT rules',
          'Network documentation and topology diagrams',
        ],
        icon: 'Network',
      },
      {
        title: 'PBX & IP Phone Systems',
        description: 'Modern businesses in Bangladesh need communication systems that are reliable, scalable, and cost-effective. We deploy IP PBX systems (using platforms like 3CX, FreeSWITCH, and Grandstream) that run on your existing data network, eliminating the need for separate telephone wiring. Features include auto-attendant, call routing, voicemail-to-email, call recording, and intercom functionality between departments and floors. For businesses making frequent international calls, we configure SIP trunking with providers like Banglaphone and Mango Telecommunications to significantly reduce your monthly phone bills while maintaining crystal-clear voice quality.',
        features: [
          'IP PBX deployment (3CX, FreeSWITCH, Grandstream)',
          'Auto-attendant and IVR call routing setup',
          'Voicemail-to-email and call recording',
          'SIP trunking integration for cost savings',
          'Multi-site extension dialing and intercom',
        ],
        icon: 'Phone',
      },
    ],
    benefits: [
      'Seamless connectivity across your entire workspace with zero dead zones',
      'Enterprise-grade equipment from Cisco, Ubiquiti, and MikroTik',
      'Scalable architecture that grows with your business',
      'Significant cost savings on international calls via SIP trunking',
      'Professional network documentation for easy future maintenance',
      'Dedicated project manager for every installation',
      'Post-installation testing and performance validation report',
    ],
    faqs: [
      {
        q: 'How long does a typical office network installation take?',
        a: 'For a standard 20-50 person office, the complete installation â€” including cabling, switch configuration, and Wi-Fi deployment â€” typically takes 3-5 working days. Larger offices or multi-floor setups may require 1-2 weeks. We always provide a detailed project timeline before starting work.',
      },
      {
        q: 'Can you work with our existing cabling infrastructure?',
        a: 'Absolutely. We conduct a thorough audit of your existing cabling to assess its condition and performance. If your current Cat5e or Cat6 cables are in good condition and properly terminated, we can integrate them into the new network design to reduce costs. However, we will recommend replacement if testing shows signal degradation.',
      },
      {
        q: 'Do you provide equipment or should we purchase it separately?',
        a: 'We offer both options. We can supply all networking equipment (routers, switches, access points, cables, and racks) as part of a turnkey solution, often at preferential pricing due to our vendor partnerships. Alternatively, if you have preferred vendors or existing equipment, we are happy to work with those as well.',
      },
      {
        q: 'What brands of networking equipment do you recommend for Bangladeshi businesses?',
        a: 'We work with a range of brands depending on your budget and requirements. For enterprise deployments, we recommend Cisco or Ubiquiti UniFi. For mid-range business needs, TP-Link Omada and MikroTik offer excellent value. For small offices, brands like D-Link and Netgear provide reliable performance at lower price points.',
      },
      {
        q: 'Do you offer support after installation?',
        a: 'Yes, all our network installations come with a 30-day warranty period. Beyond that, we offer flexible support and maintenance plans â€” including quarterly health checks, firmware updates, and priority response for any issues. Visit our IT Support & Maintenance page for detailed plan options.',
      },
    ],
  },
  'security-systems': {
    category: 'Security & Access',
    title: 'Security Systems & Solutions',
    subtitle: 'One partner for both sides of security â€” physical and digital.',
    icon: 'Shield',
    heroDescription: 'In today\'s business landscape, security is not optional â€” it is essential. Tech Sheba provides a unified approach to security, covering both physical surveillance and digital data protection under one roof. From HD CCTV systems that monitor your premises 24/7, to biometric access control that manages who enters your facility, to automated data backup solutions that protect your most critical business information â€” we ensure your business is safeguarded against threats from every angle. Our security solutions are trusted by offices, retail stores, warehouses, and educational institutions across Dhaka and beyond.',
    services: [
      {
        title: 'CCTV & Video Surveillance',
        description: 'Our CCTV solutions go far beyond simple camera installation. We design comprehensive surveillance systems tailored to your facility layout, covering entry points, corridors, parking areas, and high-value zones. We deploy a mix of dome cameras for indoor coverage, bullet cameras for outdoor perimeters, and PTZ (pan-tilt-zoom) cameras for areas requiring active monitoring. All footage is recorded to NVR (Network Video Recorder) systems with ample storage â€” typically 30 to 90 days of continuous recording. Our systems support remote viewing via mobile apps, so you can monitor your office from anywhere in Bangladesh or abroad. We also integrate AI-powered analytics like motion detection alerts, intrusion detection, and people counting for advanced security intelligence.',
        features: [
          'HD 2MP/4MP/8MP camera installation (Hikvision, Dahua, CP Plus)',
          'NVR with 30-90 days recording storage',
          'Remote live viewing via smartphone and web browser',
          'Night vision and weatherproof outdoor cameras',
          'AI-powered motion detection and smart alerts',
        ],
        icon: 'Camera',
      },
      {
        title: 'Access Control Systems',
        description: 'Controlling who enters your premises and when is a fundamental security requirement. Tech Sheba installs modern access control systems that replace traditional lock-and-key setups with electronic solutions that are more secure, more flexible, and easier to manage. We offer fingerprint-based biometric systems for high-security areas, RFID card-based systems for general office access, and PIN-code keypads for utility rooms and server rooms. Our systems integrate with time-attendance software, giving you dual functionality â€” security monitoring and employee attendance tracking in a single platform. All access events are logged with timestamps, providing a complete audit trail that is invaluable for incident investigation.',
        features: [
          'Biometric (fingerprint/face recognition) access control',
          'RFID card and PIN-code entry systems',
          'Integration with time-attendance management software',
          'Real-time access logs and audit trail reporting',
          'Multi-door and multi-zone access level management',
        ],
        icon: 'KeyRound',
      },
      {
        title: 'Data Backup & System Security',
        description: 'Data loss can be catastrophic for any business â€” from customer databases and financial records to project files and communication histories. Tech Sheba implements robust data backup strategies that combine on-site backup (NAS devices, external hard drives) with cloud-based redundancy to ensure your data survives hardware failures, ransomware attacks, and even natural disasters. We configure automated backup schedules so you never have to remember to back up manually. On the security side, we deploy endpoint protection (antivirus/anti-malware), configure business-grade firewalls, set up VPNs for secure remote access, and implement email filtering to protect against phishing â€” one of the most common attack vectors for businesses in Bangladesh.',
        features: [
          'Automated local and cloud backup (Google Drive, AWS, Wasabi)',
          'NAS device setup for on-site network storage',
          'Endpoint antivirus and anti-malware deployment',
          'Firewall configuration and VPN setup for remote access',
          'Disaster recovery planning and testing',
        ],
        icon: 'Database',
      },
    ],
    benefits: [
      '24/7 surveillance with remote monitoring from anywhere',
      'Complete access audit trail for compliance and investigation',
      'Automated backups eliminate the risk of manual errors',
      'Protection against both physical and digital threats',
      'Single vendor for all security needs simplifies management',
      'Professional installation by certified technicians',
      'Scalable systems that expand as your business grows',
    ],
    faqs: [
      {
        q: 'How many days of CCTV recording can I store?',
        a: 'Storage duration depends on the number of cameras, recording resolution, and frame rate. As a general guide, a 4-camera system with 2TB NVR storage provides approximately 30 days of continuous recording at 1080p. We calculate the exact storage requirements during our site survey and recommend the optimal NVR and hard drive configuration for your needs.',
      },
      {
        q: 'Can I view my CCTV footage on my phone while I am outside the office?',
        a: 'Yes. All our CCTV systems come with mobile apps (both Android and iOS) that allow you to view live footage, play back recordings, and receive push notifications for motion detection alerts. Remote access is secured with encrypted connections to prevent unauthorized viewing.',
      },
      {
        q: 'What is the difference between biometric and RFID access control?',
        a: 'Biometric access control uses unique biological traits like fingerprints or facial recognition for identification â€” you cannot lose, forget, or share your fingerprint. RFID access control uses proximity cards or key fobs, which are faster for high-traffic areas but can be lost or shared. We often recommend a combination: biometric for server rooms and executive areas, and RFID for general office entry points.',
      },
      {
        q: 'How often should my business data be backed up?',
        a: 'We recommend a 3-2-1 backup strategy: three copies of your data, on two different types of media, with one copy off-site. For most businesses, we set up automated daily backups with weekly full backups. Critical databases may need real-time or hourly backups. Our team will assess your specific data patterns and recommend the optimal backup schedule.',
      },
      {
        q: 'Do you provide security system maintenance?',
        a: 'Yes. We offer quarterly maintenance visits that include camera lens cleaning, NVR health checks, firmware updates, storage verification, and access control system testing. We also provide priority response for any system failures or malfunctions. Annual maintenance contracts are available at discounted rates for businesses with multiple security systems.',
      },
    ],
  },
  'it-support': {
    category: 'IT Support & Maintenance',
    title: 'IT Support & Maintenance Services',
    subtitle: 'Ongoing technical assistance to prevent downtime and keep systems running.',
    icon: 'Headphones',
    heroDescription: 'Technology is only as good as the support behind it. At Tech Sheba, we provide comprehensive IT support and maintenance services that keep your systems running smoothly so you can focus on running your business. Our team of experienced engineers provides both on-site and remote support, covering everything from network troubleshooting and hardware repairs to software installation and cybersecurity updates. We take a proactive approach â€” monitoring your systems, identifying potential issues before they become problems, and performing regular maintenance to prevent unexpected downtime. Whether you need a one-time fix or an ongoing support partnership, we have the right plan for your business.',
    services: [
      {
        title: 'On-Site IT Support',
        description: 'Some problems need hands-on attention â€” a server that won\'t boot, a network switch that needs replacing, or workstations that require hardware upgrades. Our on-site IT support team is available across Dhaka, with response times as fast as 2-4 hours for urgent issues. Our engineers arrive fully equipped with common replacement parts, diagnostic tools, and the expertise to resolve most issues in a single visit. From setting up new employee workstations and configuring printers, to troubleshooting complex network issues and performing server maintenance, our on-site team handles it all. We also provide structured onboarding support for new offices, ensuring every piece of technology is properly configured and tested before your team moves in.',
        features: [
          'Rapid on-site response within 2-4 hours in Dhaka',
          'Hardware diagnostics, repair, and replacement',
          'New workstation setup and employee onboarding',
          'Printer, scanner, and peripheral configuration',
          'Server room maintenance and cabling management',
        ],
        icon: 'Wrench',
      },
      {
        title: 'Remote Monitoring & Management',
        description: 'The best IT problem is the one that gets fixed before anyone notices it. Our Remote Monitoring and Management (RMM) service uses industry-leading tools to keep a constant watch on your IT infrastructure â€” servers, workstations, network devices, and critical applications. We monitor key metrics like CPU usage, memory utilization, disk space, network latency, and antivirus status around the clock. When something looks abnormal, our system automatically generates alerts and our team takes proactive action â€” often resolving issues before they impact your employees. This service is particularly valuable for businesses without dedicated in-house IT staff, as it provides enterprise-level monitoring at a fraction of the cost.',
        features: [
          '24/7 monitoring of servers, workstations, and network devices',
          'Automated alerting for anomalies and potential failures',
          'Remote desktop support for instant issue resolution',
          'Patch management and automated software updates',
          'Monthly health reports with actionable recommendations',
        ],
        icon: 'Monitor',
      },
      {
        title: 'Preventive Maintenance',
        description: 'Reactive IT support â€” waiting for things to break â€” is expensive and disruptive. Our preventive maintenance service follows a structured schedule of activities designed to keep your IT infrastructure healthy and performing optimally. This includes regular server health checks, network performance audits, storage cleanup, security patch deployment, backup verification, and hardware inspections. We also review your IT environment quarterly to identify aging equipment that may need replacement, software licenses that are expiring, and opportunities to improve efficiency through upgrades or configuration changes. Think of it as a regular health checkup for your entire IT ecosystem.',
        features: [
          'Quarterly server and network health assessments',
          'Automated patch management for OS and applications',
          'Backup verification and disaster recovery testing',
          'Hardware lifecycle tracking and replacement planning',
          'Annual IT strategy review and technology roadmap update',
        ],
        icon: 'ClipboardCheck',
      },
    ],
    benefits: [
      'Reduced downtime with proactive monitoring and rapid response',
      'Predictable monthly costs with fixed-fee support plans',
      'Access to a full team of IT specialists without hiring in-house',
      'Detailed monthly reports showing system health and activity',
      'Priority response and escalation procedures for critical issues',
      'Extended equipment lifespan through regular maintenance',
      'Compliance-ready documentation and audit trails',
    ],
    faqs: [
      {
        q: 'What are your response times for IT support requests?',
        a: 'We offer tiered response times based on severity. Critical issues (server down, complete network outage) receive a response within 1 hour with on-site arrival within 2-4 hours in Dhaka. High-priority issues (individual workstation failures, email problems) are addressed within 4 hours. Standard requests (software installations, configuration changes) are handled within 24 hours.',
      },
      {
        q: 'Do you offer monthly support plans or pay-per-visit pricing?',
        a: 'Both. Our monthly support plans start from BDT 5,000/month for small businesses and include a set number of on-site visits, unlimited remote support, and monitoring. For businesses with unpredictable support needs, we offer pay-per-visit pricing at competitive hourly rates. Most of our clients find that a monthly plan provides better value and faster response times.',
      },
      {
        q: 'Can you support businesses outside of Dhaka?',
        a: 'Yes, we serve clients across Bangladesh. For businesses in Chittagong, Sylhet, Rajshahi, and other major cities, we provide remote support and scheduled on-site visits. For locations outside Dhaka, we coordinate travel for on-site work and may require advance scheduling. We also have partner engineers in several cities for faster local response.',
      },
      {
        q: 'What happens if you cannot resolve an issue remotely?',
        a: 'If a remote resolution is not possible, we dispatch an on-site engineer. For clients in Dhaka, this typically happens the same day or next business day. Our engineers carry common replacement parts and have access to our full inventory. In the rare case that specialized parts are needed, we source them from our vendor network and return to complete the repair as quickly as possible.',
      },
      {
        q: 'Do you support both Windows and Mac environments?',
        a: 'Yes. Our team is experienced with Windows (10, 11, Server 2016-2022), macOS, and Linux environments. We also support mixed-OS environments which are common in creative agencies and development teams. Whether your office runs entirely on Windows or has a mix of platforms, we can manage and support your entire technology ecosystem.',
      },
    ],
  },
  'digital-presence': {
    category: 'Digital Presence & Strategy',
    title: 'Digital Presence & Strategic Planning',
    subtitle: 'Build your online presence and plan your technology roadmap.',
    icon: 'Globe',
    heroDescription: 'In Bangladesh\'s rapidly growing digital economy, having a strong online presence and a clear technology strategy is no longer a luxury â€” it is a competitive necessity. Tech Sheba helps businesses establish a powerful digital footprint through professionally designed, fast-loading websites that are optimized for local audiences and search engines. Beyond web design, our IT consultancy services help you make informed technology decisions â€” whether you are planning a major IT infrastructure upgrade, migrating to cloud services, or developing a multi-year digital transformation roadmap. We bring deep knowledge of the local business landscape, vendor ecosystem, and regulatory environment to every engagement.',
    services: [
      {
        title: 'Website Design & Development',
        description: 'Your website is often the first impression potential customers have of your business. We design and develop responsive, mobile-first websites that load quickly, look stunning on every device, and effectively communicate your brand message. Our development process begins with understanding your business goals, target audience, and competitive landscape in Bangladesh. We then create custom designs â€” not templates â€” that reflect your unique brand identity. Our websites are built with modern technologies (Next.js, React, and Tailwind CSS) that ensure fast page loads, excellent SEO performance, and easy content management. We also integrate essential features like Google Analytics, Google Search Console, Facebook Pixel, and contact forms with email notifications. Every website we deliver is optimized for the Bangladeshi market, including Bangla language support, local hosting recommendations, and bKash/payment gateway integration for e-commerce needs.',
        features: [
          'Custom responsive design (not templates) tailored to your brand',
          'Built with Next.js and modern frameworks for speed and SEO',
          'Bangla and English dual-language support',
          'bKash, SSLCommerz, and Aamarpay payment gateway integration',
          'CMS integration for easy content updates without coding',
        ],
        icon: 'Code',
      },
      {
        title: 'IT Consultancy & Strategic Planning',
        description: 'Making the right technology decisions can save your business hundreds of thousands of takas and years of frustration. Our IT consultancy services provide the expert guidance you need to make informed decisions about your technology investments. We conduct comprehensive IT audits that assess your current infrastructure, identify vulnerabilities and inefficiencies, and benchmark your setup against industry best practices. Based on this assessment, we develop a prioritized technology roadmap with clear timelines, budget estimates, and expected outcomes. Whether you are deciding between on-premise and cloud solutions, evaluating new software platforms, planning an office relocation, or building an IT budget for the next fiscal year, our consultants bring the experience and objectivity to help you choose wisely. We have advised businesses across manufacturing, retail, education, and professional services in Bangladesh.',
        features: [
          'Comprehensive IT infrastructure audit and assessment',
          'Technology roadmap with prioritized initiatives and timelines',
          'Vendor evaluation and procurement recommendation',
          'Cloud migration strategy and execution planning',
          'IT budgeting and total cost of ownership analysis',
        ],
        icon: 'Lightbulb',
      },
    ],
    benefits: [
      'Professional online presence that builds trust with customers',
      'Faster website load times for better user experience and SEO',
      'Strategic technology alignment with your business goals',
      'Informed decision-making with expert vendor-neutral advice',
      'Local market expertise including Bangla support and local payments',
      'Long-term cost savings through proper technology planning',
      'Scalable solutions that grow with your business',
    ],
    faqs: [
      {
        q: 'How long does it take to build a website?',
        a: 'A standard business website with 5-10 pages typically takes 3-4 weeks from project kickoff to launch. More complex websites with e-commerce functionality, custom integrations, or advanced features may take 6-8 weeks. We provide a detailed project timeline at the start of every engagement and follow an agile approach with regular milestone reviews.',
      },
      {
        q: 'Can I update the website content myself after launch?',
        a: 'Yes. All our websites are built with a content management system (CMS) that allows you to update text, images, blog posts, and other content without any coding knowledge. We provide a 2-hour training session at launch and a comprehensive user guide. We also offer ongoing content update packages if you prefer our team to handle updates for you.',
      },
      {
        q: 'Do you provide website hosting and domain registration?',
        a: 'Yes. We offer managed website hosting on high-performance servers with 99.9% uptime, daily backups, SSL certificates, and CDN integration. We can also handle domain registration and DNS management. Our hosting is optimized for the Bangladeshi market with servers located in the Asia-Pacific region for fast local access.',
      },
      {
        q: 'What does an IT consultancy engagement typically look like?',
        a: 'A typical engagement starts with a 1-2 day on-site assessment of your current IT environment, including interviews with key staff. We then deliver a comprehensive audit report within one week, followed by a strategy workshop where we present our findings and recommendations. The entire process from start to final roadmap delivery usually takes 2-3 weeks.',
      },
      {
        q: 'Can you help us migrate our systems to the cloud?',
        a: 'Absolutely. We have helped numerous Bangladeshi businesses migrate from on-premise servers to cloud platforms like AWS, Google Cloud, and Microsoft Azure. We plan the migration to minimize disruption, execute data transfers securely, and provide training for your team on the new cloud environment. We also offer ongoing cloud management services post-migration.',
      },
    ],
  },
};

const otherServicesData: Record<string, { title: string; icon: string; description: string; slug: string }> = {
  'network-connectivity': {
    title: 'Security Systems & Solutions',
    icon: 'Shield',
    description: 'Physical and digital security â€” CCTV, access control, and data backup.',
    slug: 'security-systems',
  },
  'security-systems': {
    title: 'Network & Connectivity Solutions',
    icon: 'Wifi',
    description: 'Enterprise networking, Wi-Fi, cabling, and PBX phone systems.',
    slug: 'network-connectivity',
  },
  'it-support': {
    title: 'Digital Presence & Strategy',
    icon: 'Globe',
    description: 'Website development and strategic IT consultancy services.',
    slug: 'digital-presence',
  },
  'digital-presence': {
    title: 'IT Support & Maintenance',
    icon: 'Headphones',
    description: 'Ongoing on-site and remote IT support with monitoring.',
    slug: 'it-support',
  },
};

export default function ServiceDetailPage() {
  const { navigate, pageParams } = useNavigation();
  const slug = pageParams.slug as string;
  const data = serviceDataMap[slug];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1e293b] mb-4">Service Not Found</h1>
          <p className="text-[#475569] mb-6">The service you are looking for does not exist.</p>
          <Button onClick={() => navigate('services')} className="bg-[#001F60] hover:bg-[#001440] text-white">
            Back to Services
          </Button>
        </div>
      </div>
    );
  }

  const PageIcon = iconMap[data.icon] || Globe;
  const otherService = otherServicesData[slug];
  const remainingSlugs = Object.keys(serviceDataMap).filter((s) => s !== slug);

  return (
    <div className="overflow-hidden">
      {/* ==================== SECTION 1: PAGE HEADER ==================== */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#eff6ff] via-white to-[#f0f4ff]" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 15% 30%, rgba(0,31,96,0.08) 0%, transparent 50%),
                           radial-gradient(circle at 85% 70%, rgba(7,117,255,0.06) 0%, transparent 50%)`,
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-[#64748b] mb-8 flex-wrap">
              <button
                onClick={() => navigate('home')}
                className="hover:text-[#001F60] transition-colors"
              >
                Home
              </button>
              <ChevronRight className="h-4 w-4" />
              <button
                onClick={() => navigate('services')}
                className="hover:text-[#001F60] transition-colors"
              >
                Services
              </button>
              <ChevronRight className="h-4 w-4" />
              <span className="text-[#1e293b] font-medium">{data.title}</span>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-[#eff6ff] text-[#001F60] border-[#dbeafe] hover:bg-[#dbeafe]">
                {data.category}
              </Badge>
            </div>

            <div className="flex items-start gap-5 mb-6">
              <div className="hidden sm:flex w-14 h-14 rounded-2xl bg-[#dbeafe] items-center justify-center shrink-0 mt-1">
                <PageIcon className="h-7 w-7 text-[#001F60]" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e293b] tracking-tight mb-4">
                  {data.title}
                </h1>
                <p className="text-lg text-[#475569] leading-relaxed max-w-3xl">
                  {data.subtitle}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ==================== SECTION 2: HERO DESCRIPTION ==================== */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-gradient-to-br from-[#eff6ff] via-[#f0f4ff] to-[#dbeafe] rounded-2xl p-8 sm:p-10 lg:p-12 border border-[#dbeafe]">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#001F60] flex items-center justify-center shrink-0">
                  <PageIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#1e293b]">About This Service</h2>
                </div>
              </div>
              <p className="text-[#475569] text-base sm:text-lg leading-relaxed">
                {data.heroDescription}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ==================== SECTION 3: INDIVIDUAL SERVICES ==================== */}
      <section className="py-20 lg:py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-2xl mb-16">
              <p className="text-sm font-semibold text-[#001F60] uppercase tracking-wider mb-3">
                Our Offerings
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-4">
                What&apos;s Included
              </h2>
              <p className="text-[#475569] text-lg">
                Detailed breakdown of each service within {data.category.toLowerCase()}.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="space-y-8">
            {data.services.map((service, index) => {
              const ServiceIcon = iconMap[service.icon] || Cpu;
              return (
                <StaggerItem key={service.title}>
                  <Card className="border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 sm:p-8 lg:p-10">
                      <div className="flex flex-col lg:flex-row gap-8">
                        {/* Left: Icon + Title + Description */}
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-[#eff6ff] flex items-center justify-center shrink-0">
                              <ServiceIcon className="h-6 w-6 text-[#001F60]" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-[#1e293b]">
                              {service.title}
                            </h3>
                          </div>
                          <p className="text-[#475569] leading-relaxed">
                            {service.description}
                          </p>
                        </div>

                        {/* Right: Features */}
                        <div className="lg:w-80 shrink-0">
                          <div className="bg-[#f8fafc] rounded-xl p-5 border border-gray-100">
                            <h4 className="text-sm font-semibold text-[#1e293b] uppercase tracking-wider mb-4">
                              Key Features
                            </h4>
                            <ul className="space-y-3">
                              {service.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-2.5">
                                  <CheckCircle2 className="h-4 w-4 text-[#4DA3FF] mt-0.5 shrink-0" />
                                  <span className="text-sm text-[#475569] leading-relaxed">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ==================== SECTION 4: BENEFITS ==================== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-semibold text-[#001F60] uppercase tracking-wider mb-3">
                Why Choose Tech Sheba
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-4">
                Benefits You Can Count On
              </h2>
              <p className="text-[#475569] text-lg">
                Every engagement is backed by our commitment to quality, reliability, and long-term partnership.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.benefits.map((benefit, index) => (
              <StaggerItem key={benefit}>
                <div className="flex items-start gap-3.5 p-5 rounded-xl bg-[#f8fafc] border border-gray-100 hover:border-[#dbeafe] transition-colors duration-300">
                  <div className="w-8 h-8 rounded-lg bg-[#eff6ff] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4 text-[#001F60]" />
                  </div>
                  <p className="text-[#475569] text-sm leading-relaxed font-medium">{benefit}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ==================== SECTION 5: FAQs ==================== */}
      <section className="py-20 lg:py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-semibold text-[#001F60] uppercase tracking-wider mb-3">
                Frequently Asked Questions
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-4">
                Common Questions
              </h2>
              <p className="text-[#475569] text-lg">
                Find answers to the most common questions about our {data.category.toLowerCase()} services.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {data.faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="border-gray-200 bg-white rounded-xl px-6 mb-3 shadow-sm"
                  >
                    <AccordionTrigger className="text-left text-[#1e293b] font-semibold hover:no-underline py-5">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#475569] leading-relaxed text-sm">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ==================== SECTION 6: CTA ==================== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#001F60] via-[#0775FF] to-[#001440] px-8 py-16 sm:px-12 sm:py-20 text-center">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Ready to get started?
                </h2>
                <p className="text-blue-100 text-lg max-w-xl mx-auto mb-8">
                  Let&apos;s discuss how our {data.category.toLowerCase()} solutions can help your business. 
                  Get in touch for a free consultation and customized quote.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    onClick={() => navigate('contact')}
                    className="bg-white text-[#001F60] hover:bg-blue-50 font-semibold px-8 py-6 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Contact Us Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => navigate('services')}
                    className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-6 text-base rounded-xl transition-all duration-300"
                  >
                    View All Services
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ==================== SECTION 7: OTHER SERVICES ==================== */}
      <section className="py-20 lg:py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-semibold text-[#001F60] uppercase tracking-wider mb-3">
                Explore More
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-4">
                Our Other Services
              </h2>
              <p className="text-[#475569] text-lg">
                Discover the full range of IT solutions Tech Sheba offers for businesses across Bangladesh.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {remainingSlugs.map((s) => {
              const svc = serviceDataMap[s];
              const SvcIcon = iconMap[svc.icon] || Globe;
              return (
                <StaggerItem key={s}>
                  <Card
                    className="h-full border border-gray-100 bg-white cursor-pointer group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    onClick={() => navigate('service-detail', { slug: s })}
                  >
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-[#eff6ff] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                        <SvcIcon className="h-6 w-6 text-[#001F60]" />
                      </div>
                      <Badge variant="outline" className="mb-3 border-[#dbeafe] text-[#001F60] text-xs">
                        {svc.category}
                      </Badge>
                      <h3 className="text-lg font-bold text-[#1e293b] mb-2 group-hover:text-[#001F60] transition-colors">
                        {svc.title}
                      </h3>
                      <p className="text-[#475569] text-sm leading-relaxed mb-4 line-clamp-2">
                        {svc.subtitle}
                      </p>
                      <div className="flex items-center gap-1.5 text-[#001F60] font-semibold text-sm group-hover:gap-2.5 transition-all">
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}