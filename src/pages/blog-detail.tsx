'use client';

import Image from 'next/image';
import { useNavigation } from '@/lib/store';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ChevronRight,
  ArrowRight,
  Clock,
  User,
  Calendar,
  ArrowLeft,
  Quote,
} from 'lucide-react';
import featuredImg from '@/Media/Service image/Tech-Sheba.jpg';
import postImg1 from '@/Media/Service image/Tech Seba Service (1).png';
import postImg2 from '@/Media/Service image/Tech Seba Service (2).png';
import postImg3 from '@/Media/Service image/Tech Seba Service (3).png';
import postImg4 from '@/Media/Service image/Tech Seba Service (4).png';
import postImg5 from '@/Media/Service image/Tech Seba Service (5).png';
import postImg6 from '@/Media/Service image/Tech Seba Service (7).png';

type BlogData = {
  slug: string;
  category: string;
  categoryColor: string;
  title: string;
  author: string;
  authorTitle: string;
  authorBio: string;
  date: string;
  readTime: string;
  gradientFrom: string;
  gradientTo: string;
  imageSrc: any;
  content: React.ReactNode;
};

const blogDataMap: Record<string, BlogData> = {
  'office-network-guide': {
    slug: 'office-network-guide',
    category: 'Networking',
    categoryColor: 'bg-[#001F60]/10 text-[#001F60]',
    title: 'The Complete Guide to Office Network Setup for Bangladeshi Businesses',
    author: 'Imran Hossain',
    authorTitle: 'Lead Network Engineer',
    authorBio:
      'A certified network professional with expertise in enterprise Wi-Fi, structured cabling, and network security. Imran has designed IT infrastructure for over 100 businesses across Bangladesh.',
    date: 'January 15, 2025',
    readTime: '12 min read',
    gradientFrom: '#001F60',
    gradientTo: '#0775FF',
    imageSrc: featuredImg,
    content: (
      <>
        <p className="text-[#475569] leading-relaxed mb-6 text-lg">
          In today&apos;s digital-first business environment, a reliable office network is not a luxury â€” it is the backbone of your operations. Whether you run a 10-person startup in Gulshan or a 200-employee company in Motijheel, your network infrastructure directly impacts productivity, communication, and security. Yet, many businesses in Bangladesh continue to operate with poorly planned networks that lead to daily frustrations and hidden costs.
        </p>

        <h2 className="text-2xl font-bold text-[#1e293b] mb-4 mt-10">
          Why Your Network Setup Matters
        </h2>
        <p className="text-[#475569] leading-relaxed mb-4">
          Consider this: a single network outage can cost a mid-sized Bangladeshi business an average of à§³50,000 to à§³200,000 per day in lost productivity. Add to that the frustration of slow internet speeds, dead zones in the office, and the inability to connect new devices, and you have a recipe for operational inefficiency. A well-planned network eliminates these issues and provides a scalable foundation for growth.
        </p>
        <p className="text-[#475569] leading-relaxed mb-4">
          In Dhaka, where businesses often share office buildings with multiple companies competing for the same internet bandwidth, having a professionally managed network is even more critical. Interference from neighboring networks, power fluctuations, and the tropical climate all add unique challenges that a generic network setup simply cannot handle.
        </p>

        <blockquote className="border-l-4 border-[#001F60] bg-[#eff6ff] rounded-r-xl p-6 my-8">
          <p className="text-[#001440] font-medium italic leading-relaxed">
            &ldquo;A properly designed office network pays for itself within the first year through reduced downtime, fewer support calls, and improved employee productivity. It is not an expense â€” it is an investment.&rdquo;
          </p>
          <p className="text-[#001F60] text-sm mt-2 font-semibold">â€” Imran Hossain, Lead Network Engineer at Tech Sheba</p>
        </blockquote>

        <h2 className="text-2xl font-bold text-[#1e293b] mb-4 mt-10">
          Choosing the Right Router for Your Office
        </h2>
        <p className="text-[#475569] leading-relaxed mb-4">
          The router is the heart of your network, and in Bangladesh, two brands dominate the market for business use: <strong>MikroTik</strong> and <strong>Ubiquiti</strong>. Both offer excellent value, but they serve different needs.
        </p>

        <h3 className="text-xl font-bold text-[#1e293b] mb-3 mt-8">
          MikroTik Routers
        </h3>
        <p className="text-[#475569] leading-relaxed mb-4">
          MikroTik routers, particularly the hAP series and RB series, are incredibly popular in Bangladesh due to their affordability and powerful feature set. With RouterOS, you get enterprise-grade features including VLAN support, bandwidth management, firewall rules, and VPN capabilities at a fraction of the cost of Cisco equipment. For a small to medium office with 10 to 50 users, a MikroTik hAP acÂ³ or RB4011 is often the perfect choice. They support dual-band Wi-Fi, multiple Ethernet ports, and can handle the bandwidth requirements of most Bangladeshi ISPs including Link3, AmberIT, and BTCL.
        </p>

        <h3 className="text-xl font-bold text-[#1e293b] mb-3 mt-8">
          Ubiquiti UniFi
        </h3>
        <p className="text-[#475569] leading-relaxed mb-4">
          If your budget allows, Ubiquiti&apos;s UniFi ecosystem offers a more polished experience. The UniFi Dream Machine Pro combines routing, switching, and security gateway functionality in one device, managed through an intuitive web interface and mobile app. For offices with 20 to 200 users, this system provides seamless roaming, advanced traffic analytics, and easy scaling by adding UniFi access points. The management interface is significantly more user-friendly than MikroTik&apos;s Winbox, making it easier for non-technical staff to monitor the network.
        </p>

        <h2 className="text-2xl font-bold text-[#1e293b] mb-4 mt-10">
          Structured Cabling: The Invisible Foundation
        </h2>
        <p className="text-[#475569] leading-relaxed mb-4">
          While Wi-Fi gets all the attention, structured cabling remains the most reliable part of any office network. In Bangladesh, we frequently encounter offices where network cables are run haphazardly across floors, bundled with electrical wiring, or terminated with poor-quality connectors. This leads to intermittent connectivity issues that are nearly impossible to diagnose.
        </p>
        <p className="text-[#475569] leading-relaxed mb-4">
          A proper structured cabling system uses Cat6 or Cat6A cables organized through a central patch panel, with each cable labeled and tested. Every workstation should have at least two Ethernet ports â€” one for the computer and one for VoIP phones. Cable trays should be used to keep network cables separated from power lines by at least 30 centimeters to minimize electromagnetic interference.
        </p>

        <h3 className="text-xl font-bold text-[#1e293b] mb-3 mt-8">
          Key Cabling Best Practices
        </h3>
        <ul className="space-y-3 mb-6">
          {[
            'Always use Cat6 or higher â€” Cat5e is outdated and cannot handle Gigabit speeds reliably over longer runs',
            'Plan for at least 20% more ports than your current headcount to accommodate growth',
            'Use a dedicated server room or network cabinet with proper ventilation',
            'Label every cable at both ends using a consistent naming convention',
            'Test every cable run with a certified cable tester before closing walls or ceilings',
            'Keep cable runs under 90 meters to maintain signal integrity',
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#001F60]/10 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-[#001F60] text-xs font-bold">{idx + 1}</span>
              </div>
              <span className="text-[#475569] leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-[#1e293b] mb-4 mt-10">
          Wi-Fi Coverage and Access Point Placement
        </h2>
        <p className="text-[#475569] leading-relaxed mb-4">
          Wireless connectivity is essential in modern offices, but poor Wi-Fi is consistently the number one complaint we hear from businesses in Dhaka. The problem usually stems from using a single router&apos;s built-in Wi-Fi to cover an entire office floor. In Bangladesh&apos;s dense concrete buildings, Wi-Fi signals degrade rapidly through walls and floors.
        </p>
        <p className="text-[#475569] leading-relaxed mb-4">
          The solution is a multi-access-point deployment using either ceiling-mounted or wall-mounted APs. For a typical 3,000 square foot office floor in Dhaka, you will need 2 to 4 access points depending on the layout and wall construction. Access points should be placed on ceilings for optimal coverage and connected back to your switch via Ethernet â€” never rely on wireless repeaters or mesh extenders in a business environment, as they introduce latency and reduce overall throughput.
        </p>

        <h2 className="text-2xl font-bold text-[#1e293b] mb-4 mt-10">
          Network Security Essentials
        </h2>
        <p className="text-[#475569] leading-relaxed mb-4">
          Security is often an afterthought when setting up office networks in Bangladesh, but it should be a primary consideration from day one. At minimum, your network should implement the following security measures:
        </p>
        <ul className="space-y-3 mb-6">
          {[
            'VLAN segmentation to separate guest, employee, and server networks',
            'WPA3 or WPA2-Enterprise wireless security with individual user credentials',
            'A hardware firewall with intrusion detection and prevention (IDS/IPS)',
            'Regular firmware updates for all network equipment',
            'Network monitoring to detect unusual traffic patterns',
            'Content filtering to block malicious websites',
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#001F60] shrink-0 mt-2" />
              <span className="text-[#475569] leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-[#1e293b] mb-4 mt-10">
          Common Mistakes to Avoid
        </h2>
        <p className="text-[#475569] leading-relaxed mb-4">
          After setting up networks for hundreds of businesses across Bangladesh, we have seen the same mistakes repeated time and again. Here are the most common pitfalls:
        </p>
        <ul className="space-y-3 mb-6">
          {[
            'Using consumer-grade routers instead of business-grade equipment â€” they are not built for 24/7 operation or multiple simultaneous users',
            'Not investing in a UPS (Uninterruptible Power Supply) for network equipment â€” power fluctuations in Dhaka can damage routers and switches',
            'Skipping the network diagram â€” without documentation, troubleshooting becomes a guessing game',
            'Ignoring cable management â€” messy cables lead to accidental disconnections and make maintenance a nightmare',
            'Not planning for ISP failover â€” a single internet connection is a single point of failure',
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#001F60] shrink-0 mt-2" />
              <span className="text-[#475569] leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-[#1e293b] mb-4 mt-10">
          Getting Started with Your Network Setup
        </h2>
        <p className="text-[#475569] leading-relaxed mb-4">
          Setting up a proper office network requires careful planning, the right equipment, and professional installation. At Tech Sheba, we begin every network project with a comprehensive site assessment where we evaluate your office layout, current infrastructure, bandwidth requirements, and growth plans. Based on this assessment, we design a custom network architecture and provide a detailed proposal with transparent pricing.
        </p>
        <p className="text-[#475569] leading-relaxed mb-4">
          Whether you are moving into a new office, upgrading an existing network, or experiencing chronic connectivity issues, the first step is always a professional assessment. Most businesses in Bangladesh are surprised to learn how much they can improve with relatively modest investments in the right places.
        </p>

        <blockquote className="border-l-4 border-[#001F60] bg-[#eff6ff] rounded-r-xl p-6 my-8">
          <p className="text-[#001440] font-medium italic leading-relaxed">
            &ldquo;We have seen businesses reduce their IT support tickets by 70% simply by replacing their haphazard network setup with a properly designed system. The ROI is clear and immediate.&rdquo;
          </p>
        </blockquote>

        <p className="text-[#475569] leading-relaxed mb-4">
          If you are ready to invest in a network that supports your business growth rather than holding it back, we are here to help. Contact Tech Sheba for a free network assessment and let us design a solution that fits your specific needs and budget. Your team deserves a network that just works â€” and we can make that happen.
        </p>
      </>
    ),
  },
  'cctv-installation-dhaka': {
    slug: 'cctv-installation-dhaka',
    category: 'Security',
    categoryColor: 'bg-amber-500/10 text-amber-700',
    title: '5 Reasons Your Dhaka Office Needs Professional CCTV Installation',
    author: 'Sabrina Islam',
    authorTitle: 'Security Solutions Lead',
    authorBio:
      'Sabrina specializes in physical and digital security systems, from CCTV surveillance to cybersecurity. She leads the team that protects our clients\' most valuable assets.',
    date: 'February 3, 2025',
    readTime: '6 min read',
    gradientFrom: '#d97706',
    gradientTo: '#f59e0b',
    imageSrc: postImg1,
    content: (
      <>
        <p className="text-[#475569] leading-relaxed mb-6 text-lg">
          Security is a top concern for every business operating in Dhaka. With the city&apos;s rapid growth and increasing commercial activity, the need for reliable surveillance systems has never been greater. While many businesses opt for cheap, off-the-shelf cameras, professional CCTV installation offers advantages that far outweigh the initial investment.
        </p>

        <h2 className="text-2xl font-bold text-[#1e293b] mb-4 mt-10">
          1. Deterrence of Theft and Unauthorized Access
        </h2>
        <p className="text-[#475569] leading-relaxed mb-4">
          The mere presence of professionally installed, visible CCTV cameras acts as a powerful deterrent. Studies consistently show that businesses with visible security cameras experience 60% fewer incidents of theft compared to those without. In a busy commercial area like Dhaka, where offices often have multiple entry points and receive numerous visitors daily, having comprehensive camera coverage ensures that unauthorized individuals are quickly identified and intercepted.
        </p>

        <h2 className="text-2xl font-bold text-[#1e293b] mb-4 mt-10">
          2. Evidence Collection for Dispute Resolution
        </h2>
        <p className="text-[#475569] leading-relaxed mb-4">
          Professional CCTV systems record in high definition with proper lighting compensation, timestamp accuracy, and reliable storage. When disputes arise â€” whether between employees, with clients, or with service providers â€” having clear video evidence can resolve issues quickly and decisively. Bangladeshi businesses increasingly rely on CCTV footage for internal investigations, insurance claims, and even legal proceedings. A system installed by professionals ensures the footage is admissible and of sufficient quality to be useful.
        </p>

        <h2 className="text-2xl font-bold text-[#1e293b] mb-4 mt-10">
          3. Remote Monitoring Capabilities
        </h2>
        <p className="text-[#475569] leading-relaxed mb-4">
          Modern professional CCTV systems offer remote monitoring through smartphone apps and web interfaces. Business owners in Dhaka can keep an eye on their office from anywhere in the world. Whether you are traveling for business, working from home, or managing multiple locations, professional installation ensures your cameras are properly configured for remote access with secure encrypted connections â€” something that DIY setups often fail to achieve.
        </p>

        <h2 className="text-2xl font-bold text-[#1e293b] mb-4 mt-10">
          4. Employee Safety and Productivity
        </h2>
        <p className="text-[#475569] leading-relaxed mb-4">
          CCTV systems are not just about security â€” they contribute to a safer work environment. In emergency situations, security personnel can use camera feeds to coordinate evacuations and guide first responders. Additionally, the presence of cameras in common areas has been shown to improve workplace behavior and productivity. Employees feel safer knowing their workplace is monitored, and employers have visibility into operations across different floors and departments.
        </p>

        <h2 className="text-2xl font-bold text-[#1e293b] mb-4 mt-10">
          5. Insurance Benefits and Compliance
        </h2>
        <p className="text-[#475569] leading-relaxed mb-4">
          Many insurance companies in Bangladesh offer reduced premiums for businesses that have professional security systems installed. The savings on insurance can offset a significant portion of the installation cost over time. Furthermore, as regulatory requirements around workplace security continue to evolve, having a compliant CCTV system positions your business ahead of the curve and avoids potential penalties.
        </p>

        <h2 className="text-2xl font-bold text-[#1e293b] mb-4 mt-10">
          Professional vs. DIY: Why It Matters
        </h2>
        <p className="text-[#475569] leading-relaxed mb-4">
          While it may be tempting to save money with a DIY installation, the hidden costs quickly add up. Poor camera placement leads to blind spots. Incorrect wiring creates fire hazards. Lack of proper network configuration makes the system vulnerable to hacking. And without professional maintenance, cameras fail at the worst possible moments. Professional installation from Tech Sheba includes site survey, optimal camera placement, secure network integration, night vision calibration, and ongoing support â€” everything you need for a security system that actually works when you need it most.
        </p>

        <blockquote className="border-l-4 border-[#001F60] bg-[#eff6ff] rounded-r-xl p-6 my-8">
          <p className="text-[#001440] font-medium italic leading-relaxed">
            &ldquo;We frequently get called to fix DIY installations that failed during a critical moment. A security system that does not work when you need it is worse than having no system at all.&rdquo;
          </p>
          <p className="text-[#001F60] text-sm mt-2 font-semibold">â€” Sabrina Islam, Security Solutions Lead at Tech Sheba</p>
        </blockquote>

        <p className="text-[#475569] leading-relaxed mb-4">
          Protecting your business is not optional in today&apos;s environment. Contact Tech Sheba for a free security assessment and learn how professional CCTV installation can safeguard your office, your assets, and your peace of mind.
        </p>
      </>
    ),
  },
  'pbx-vs-voip': {
    slug: 'pbx-vs-voip',
    category: 'Business IT',
    categoryColor: 'bg-blue-500/10 text-blue-700',
    title: 'PBX vs VoIP: Which Phone System is Right for Your Business?',
    author: 'Faruq Rahman',
    authorTitle: 'Founder & CEO',
    authorBio:
      'With over 15 years in the IT industry, Faruq founded Tech Sheba to bridge the technology gap for growing businesses in Bangladesh.',
    date: 'January 28, 2025',
    readTime: '8 min read',
    gradientFrom: '#0775FF',
    gradientTo: '#4DA3FF',
    imageSrc: postImg2,
    content: (
      <>
        <p className="text-[#475569] leading-relaxed mb-6 text-lg">
          Choosing the right phone system for your business is a decision that affects daily operations, customer experience, and your bottom line. In Bangladesh, businesses typically choose between two options: traditional PBX (Private Branch Exchange) systems and modern VoIP (Voice over Internet Protocol) solutions. Each has its strengths, and the right choice depends on your specific needs, budget, and infrastructure.
        </p>

        <h2 className="text-2xl font-bold text-[#1e293b] mb-4 mt-10">
          Understanding PBX Systems
        </h2>
        <p className="text-[#475569] leading-relaxed mb-4">
          A PBX system is a traditional telephone network used within a company. It connects internal extensions to each other and to the outside public switched telephone network (PSTN) through trunk lines. In Bangladesh, analog PBX systems from brands like Panasonic and NEC have been the standard for decades. They are reliable, easy to understand, and do not depend on internet quality â€” a significant advantage in areas where bandwidth is inconsistent.
        </p>
        <p className="text-[#475569] leading-relaxed mb-4">
          Modern IP-PBX systems bridge the gap by using your existing data network to carry voice traffic. This reduces cabling costs and offers features like voicemail-to-email, call recording, and multi-location connectivity. Brands like Grandstream and Yeastar offer affordable IP-PBX solutions that are popular with Bangladeshi businesses.
        </p>

        <h2 className="text-2xl font-bold text-[#1e293b] mb-4 mt-10">
          Understanding VoIP
        </h2>
        <p className="text-[#475569] leading-relaxed mb-4">
          VoIP technology converts voice into digital packets and transmits them over the internet. Cloud-based VoIP services have gained tremendous popularity in Bangladesh because they require no on-site equipment beyond IP phones. Services like RingCentral, 3CX, and various local providers offer per-user monthly pricing that scales easily with your business.
        </p>
        <p className="text-[#475569] leading-relaxed mb-4">
          The key advantage of VoIP is cost â€” especially for businesses that make frequent long-distance or international calls. VoIP calls within Bangladesh and to international destinations are typically 40-60% cheaper than traditional telephone calls. Additionally, VoIP systems offer advanced features like auto-attendants, call routing, CRM integration, and mobile apps that let employees make and receive calls from their smartphones using their business number.
        </p>

        <h2 className="text-2xl font-bold text-[#1e293b] mb-4 mt-10">
          Key Comparison Factors
        </h2>
        <ul className="space-y-3 mb-6">
          {[
            'Call Quality: PBX systems on dedicated lines generally offer more consistent call quality. VoIP quality depends heavily on your internet connection â€” in Dhaka, this can be variable depending on your ISP and time of day.',
            'Initial Cost: PBX requires upfront investment in hardware (à§³30,000â€“à§³200,000+ depending on size). VoIP has minimal startup costs, typically just IP phones and a good router.',
            'Ongoing Cost: PBX has low monthly costs (line rental only). VoIP has predictable per-user monthly fees but can add up for larger teams.',
            'Scalability: VoIP wins hands down â€” adding a new user takes minutes. PBX may require additional hardware modules or cards.',
            'Reliability: PBX works during power outages with a small UPS. VoIP goes down if your internet or power fails, though backup solutions exist.',
            'Features: VoIP generally offers more advanced features including video calling, screen sharing, and deep CRM integrations.',
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#001F60] shrink-0 mt-2" />
              <span className="text-[#475569] leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-[#1e293b] mb-4 mt-10">
          Our Recommendation
        </h2>
        <p className="text-[#475569] leading-relaxed mb-4">
          For most small and medium businesses in Bangladesh, we recommend an IP-PBX system as the best middle ground. It gives you the reliability of a traditional phone system with many of the advanced features of VoIP, all at a reasonable cost. For businesses with under 10 employees or those with teams spread across multiple locations, a cloud VoIP solution may be more practical. For large enterprises with existing infrastructure, a hybrid approach often works best.
        </p>

        <blockquote className="border-l-4 border-[#001F60] bg-[#eff6ff] rounded-r-xl p-6 my-8">
          <p className="text-[#001440] font-medium italic leading-relaxed">
            &ldquo;The best phone system is the one your team actually uses consistently. We help businesses evaluate their specific needs rather than pushing a one-size-fits-all solution.&rdquo;
          </p>
          <p className="text-[#001F60] text-sm mt-2 font-semibold">â€” Faruq Rahman, Founder & CEO at Tech Sheba</p>
        </blockquote>

        <p className="text-[#475569] leading-relaxed mb-4">
          Not sure which system is right for your business? Contact Tech Sheba for a free consultation. We will assess your current setup, understand your communication needs, and recommend the most cost-effective solution for your team.
        </p>
      </>
    ),
  },
  'choosing-it-support-partner': {
    slug: 'choosing-it-support-partner',
    category: 'Tips & Guides',
    categoryColor: 'bg-purple-500/10 text-purple-700',
    title: 'How to Choose the Right IT Support Partner in Bangladesh',
    author: 'Tania Akter',
    authorTitle: 'Head of Operations',
    authorBio:
      'Tania oversees all project delivery and client relationships. Her background in IT project management ensures every engagement is executed on time and exceeds expectations.',
    date: 'January 20, 2025',
    readTime: '7 min read',
    gradientFrom: '#001440',
    gradientTo: '#001F60',
    imageSrc: postImg3,
    content: (
      <>
        <p className="text-[#475569] leading-relaxed mb-6 text-lg">
          Your IT support partner is more than a vendor â€” they are an extension of your team. The right partner keeps your systems running smoothly, prevents problems before they occur, and helps you make strategic technology decisions. The wrong one creates more problems than they solve. In Bangladesh&apos;s growing IT services market, here is how to make the right choice.
        </p>
        <h2 className="text-2xl font-bold text-[#1e293b] mb-4 mt-10">
          Look for Proven Local Experience
        </h2>
        <p className="text-[#475569] leading-relaxed mb-4">
          Bangladesh has unique infrastructure challenges â€” from unreliable power supply to variable internet connectivity and specific regulatory requirements. An IT support partner with deep local experience understands these challenges and has proven solutions. Ask for case studies from businesses similar to yours and check how long they have been operating in the Bangladeshi market.
        </p>
        <h2 className="text-2xl font-bold text-[#1e293b] mb-4 mt-10">
          Evaluate Response Times and Availability
        </h2>
        <p className="text-[#475569] leading-relaxed mb-4">
          When your network goes down or a server fails, every minute counts. Your IT support partner should guarantee specific response times for different severity levels. A good provider offers same-day on-site support in Dhaka and remote support within 1-2 hours for critical issues. Ask about their after-hours and emergency support policies â€” problems do not stick to business hours.
        </p>
        <h2 className="text-2xl font-bold text-[#1e293b] mb-4 mt-10">
          Check Their Service Breadth
        </h2>
        <p className="text-[#475569] leading-relaxed mb-4">
          Working with a single partner who can handle networking, security, phone systems, and web services is far more efficient than juggling multiple vendors. It ensures accountability, reduces coordination overhead, and often costs less. Look for a partner like Tech Sheba that offers comprehensive services under one roof, so you never have to wonder who to call when an issue arises.
        </p>
        <h2 className="text-2xl font-bold text-[#1e293b] mb-4 mt-10">
          Demand Transparency in Pricing
        </h2>
        <p className="text-[#475569] leading-relaxed mb-4">
          Beware of IT support companies that are vague about pricing. A trustworthy partner provides clear, detailed proposals with no hidden fees. They should offer both monthly retainer options and pay-as-you-go plans, allowing you to choose what works best for your budget. At Tech Sheba, every proposal includes a detailed breakdown so you know exactly what you are paying for.
        </p>
        <p className="text-[#475569] leading-relaxed mb-4">
          Choosing the right IT support partner is one of the most important technology decisions you will make for your business. Take the time to evaluate your options, ask the right questions, and choose a partner who is genuinely invested in your success.
        </p>
      </>
    ),
  },
  'data-backup-best-practices': {
    slug: 'data-backup-best-practices',
    category: 'Tips & Guides',
    categoryColor: 'bg-purple-500/10 text-purple-700',
    title: 'Data Backup Best Practices for Small and Medium Businesses',
    author: 'Rafi Khan',
    authorTitle: 'IT Support Manager',
    authorBio:
      'Rafi ensures our clients receive rapid, reliable support around the clock. His team handles everything from routine maintenance to emergency troubleshooting.',
    date: 'January 10, 2025',
    readTime: '9 min read',
    gradientFrom: '#4DA3FF',
    gradientTo: '#7DB8FF',
    imageSrc: postImg4,
    content: (
      <>
        <p className="text-[#475569] leading-relaxed mb-6 text-lg">
          Data loss is one of the most catastrophic events a business can experience. In Bangladesh, we see it happen regularly â€” from ransomware attacks to hard drive failures, accidental deletions, and even physical disasters like fires and floods. The sad truth is that most small and medium businesses in Bangladesh do not have adequate backup systems in place, putting years of work at risk.
        </p>
        <h2 className="text-2xl font-bold text-[#1e293b] mb-4 mt-10">
          The 3-2-1 Backup Rule
        </h2>
        <p className="text-[#475569] leading-relaxed mb-4">
          The industry-standard 3-2-1 rule is simple: maintain at least three copies of your data, stored on at least two different types of media, with at least one copy stored off-site. For a Bangladeshi business, this might mean keeping your primary data on your office server, a second copy on a local NAS (Network Attached Storage) device, and a third copy in a cloud service like Google Drive, Dropbox Business, or a dedicated backup service.
        </p>
        <h2 className="text-2xl font-bold text-[#1e293b] mb-4 mt-10">
          Cloud vs. Local Backups
        </h2>
        <p className="text-[#475569] leading-relaxed mb-4">
          Both cloud and local backups have their place. Local backups are faster for large data recovery and do not depend on internet speed â€” important in Bangladesh where bandwidth can be inconsistent. Cloud backups provide protection against physical disasters and allow access from anywhere. The ideal approach combines both: local backups for daily recovery needs and cloud backups as your disaster recovery safety net.
        </p>
        <h2 className="text-2xl font-bold text-[#1e293b] mb-4 mt-10">
          Automated and Tested
        </h2>
        <p className="text-[#475569] leading-relaxed mb-4">
          The biggest mistake businesses make is setting up a backup system and then forgetting about it. Backups must be automated, monitored, and regularly tested. At Tech Sheba, we implement backup systems that send daily status reports and perform weekly test restorations to ensure your data is actually recoverable. A backup that has not been tested is not a backup â€” it is just a hope.
        </p>
        <p className="text-[#475569] leading-relaxed mb-4">
          Do not wait for a data loss event to take backup seriously. Contact Tech Sheba today for a free data protection assessment and let us help you implement a backup strategy that keeps your business safe.
        </p>
      </>
    ),
  },
  'structured-cabling-importance': {
    slug: 'structured-cabling-importance',
    category: 'Networking',
    categoryColor: 'bg-[#001F60]/10 text-[#001F60]',
    title: 'Why Structured Cabling Matters More Than You Think',
    author: 'Imran Hossain',
    authorTitle: 'Lead Network Engineer',
    authorBio:
      'A certified network professional with expertise in enterprise Wi-Fi, structured cabling, and network security.',
    date: 'December 28, 2024',
    readTime: '5 min read',
    gradientFrom: '#001F60',
    gradientTo: '#001440',
    imageSrc: postImg5,
    content: (
      <>
        <p className="text-[#475569] leading-relaxed mb-6 text-lg">
          If you have ever walked into a server room or network closet and been confronted with a tangled mess of cables, you understand the problem. But structured cabling is not just about aesthetics â€” it directly impacts your network performance, reliability, and maintainability. In this article, we explain why investing in professional structured cabling is one of the smartest decisions a Bangladeshi business can make.
        </p>
        <h2 className="text-2xl font-bold text-[#1e293b] mb-4 mt-10">
          The Hidden Costs of Poor Cabling
        </h2>
        <p className="text-[#475569] leading-relaxed mb-4">
          Poorly installed cabling causes a surprising range of problems. Crosstalk between unshielded cables running parallel to each other degrades signal quality, leading to slower network speeds and dropped connections. Unlabeled cables mean that any troubleshooting or modification takes hours instead of minutes. Cables routed near electrical wiring pick up electromagnetic interference. And when a cable fails â€” and they all do eventually â€” finding and replacing it in a messy installation is an expensive, time-consuming nightmare.
        </p>
        <h2 className="text-2xl font-bold text-[#1e293b] mb-4 mt-10">
          What Professional Structured Cabling Includes
        </h2>
        <p className="text-[#475569] leading-relaxed mb-4">
          A proper structured cabling installation includes a central patch panel, labeled cables, cable trays or conduits for organization, proper separation from electrical wiring, and certified testing of every cable run. At Tech Sheba, we follow international cabling standards (TIA/EIA-568) and provide documentation that includes a full cable map, test results, and maintenance guidelines.
        </p>
        <h2 className="text-2xl font-bold text-[#1e293b] mb-4 mt-10">
          Future-Proofing Your Investment
        </h2>
        <p className="text-[#475569] leading-relaxed mb-4">
          Cabling infrastructure typically outlasts the equipment connected to it. A well-installed Cat6A cabling system can support speeds up to 10 Gigabits per second and has a useful life of 15 years or more. By investing in quality cabling now, you avoid the massive cost and disruption of re-cabling when your business grows or when faster networking technologies become standard.
        </p>
        <p className="text-[#475569] leading-relaxed mb-4">
          Whether you are setting up a new office or upgrading an existing one, professional structured cabling is an investment that pays for itself many times over. Contact Tech Sheba for a free cabling assessment and let us help you build a network foundation that supports your business for years to come.
        </p>
      </>
    ),
  },
  'cybersecurity-basics-bangladesh': {
    slug: 'cybersecurity-basics-bangladesh',
    category: 'Security',
    categoryColor: 'bg-amber-500/10 text-amber-700',
    title: 'Cybersecurity Basics Every Bangladeshi Business Should Know',
    author: 'Sabrina Islam',
    authorTitle: 'Security Solutions Lead',
    authorBio:
      'Sabrina specializes in physical and digital security systems, from CCTV surveillance to cybersecurity.',
    date: 'December 15, 2024',
    readTime: '10 min read',
    gradientFrom: '#001440',
    gradientTo: '#4DA3FF',
    imageSrc: postImg6,
    content: (
      <>
        <p className="text-[#475569] leading-relaxed mb-6 text-lg">
          Cybersecurity threats are increasing globally, and Bangladesh is no exception. From phishing emails targeting bank accounts to ransomware attacks that lock up business data, the threats are real and growing. Many Bangladeshi businesses believe they are too small to be targeted â€” but that is exactly what cybercriminals count on. Here are the essential cybersecurity measures every business must implement.
        </p>
        <h2 className="text-2xl font-bold text-[#1e293b] mb-4 mt-10">
          Strong Password Policies and Multi-Factor Authentication
        </h2>
        <p className="text-[#475569] leading-relaxed mb-4">
          Weak passwords remain the number one entry point for cyber attacks. Enforce a minimum password length of 12 characters, require a mix of uppercase, lowercase, numbers, and symbols, and implement multi-factor authentication (MFA) for all business accounts. MFA adds a second verification step â€” usually a code sent to your phone â€” making it virtually impossible for attackers to access your accounts even if they obtain your password.
        </p>
        <h2 className="text-2xl font-bold text-[#1e293b] mb-4 mt-10">
          Employee Awareness Training
        </h2>
        <p className="text-[#475569] leading-relaxed mb-4">
          Your employees are both your greatest asset and your biggest vulnerability. Phishing attacks â€” fraudulent emails designed to steal credentials â€” are increasingly sophisticated and often target specific individuals in an organization (spear phishing). Regular training on how to identify suspicious emails, verify sender identities, and report potential threats is essential. At Tech Sheba, we offer cybersecurity awareness training tailored for Bangladeshi businesses.
        </p>
        <h2 className="text-2xl font-bold text-[#1e293b] mb-4 mt-10">
          Keep Software Updated
        </h2>
        <p className="text-[#475569] leading-relaxed mb-4">
          Unpatched software is a goldmine for attackers. Every operating system, application, and firmware update includes security fixes for known vulnerabilities. Enable automatic updates where possible, and establish a regular schedule for manually updating systems that cannot be auto-updated. This simple practice alone prevents the vast majority of automated attacks.
        </p>
        <h2 className="text-2xl font-bold text-[#1e293b] mb-4 mt-10">
          Network Security and Firewalls
        </h2>
        <p className="text-[#475569] leading-relaxed mb-4">
          A business-grade firewall is your first line of defense against network-based attacks. Combined with proper network segmentation â€” separating guest networks from internal systems, isolating servers, and restricting access to sensitive data â€” you dramatically reduce your attack surface. Tech Sheba can help you implement a comprehensive network security strategy that protects your business without disrupting your operations.
        </p>
        <p className="text-[#475569] leading-relaxed mb-4">
          Cybersecurity is not a one-time project â€” it is an ongoing practice. Start with the basics outlined above and continuously improve your security posture as your business grows. Contact Tech Sheba for a free cybersecurity assessment and take the first step toward protecting your digital assets.
        </p>
      </>
    ),
  },
};

const allSlugs = Object.keys(blogDataMap);

const defaultPost: BlogData = blogDataMap['office-network-guide'];

export default function BlogDetailPage() {
  const { navigate, pageParams } = useNavigation();
  const slug = pageParams.slug || 'office-network-guide';
  const post = blogDataMap[slug] || defaultPost;

  const relatedPosts = allSlugs
    .filter((s) => s !== slug)
    .slice(0, 3)
    .map((s) => blogDataMap[s]);

  return (
    <div className="overflow-hidden">
      {/* ==================== SECTION 1: ARTICLE HEADER ==================== */}
      <section className="relative pt-32 pb-12 bg-gradient-to-br from-[#eff6ff] via-white to-[#f0f4ff] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #001F60 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <nav className="flex items-center gap-2 text-sm text-[#64748b] mb-6 flex-wrap">
              <button
                onClick={() => navigate('home')}
                className="hover:text-[#001F60] transition-colors"
              >
                Home
              </button>
              <ChevronRight className="w-4 h-4" />
              <button
                onClick={() => navigate('blog')}
                className="hover:text-[#001F60] transition-colors"
              >
                Blog
              </button>
              <ChevronRight className="w-4 h-4" />
              <span className="text-[#001F60] font-medium truncate max-w-[200px] sm:max-w-none">
                {post.title.length > 40
                  ? post.title.substring(0, 40) + '...'
                  : post.title}
              </span>
            </nav>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Badge
              className={`${post.categoryColor} border-0 text-sm px-4 py-1 mb-5`}
            >
              {post.category}
            </Badge>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e293b] mb-6 tracking-tight leading-tight max-w-4xl">
              {post.title}
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-[#64748b]">
              <span className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#001F60]/10 flex items-center justify-center">
                  <User className="w-4 h-4 text-[#001F60]" />
                </div>
                <span className="font-medium text-[#1e293b]">
                  {post.author}
                </span>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ==================== SECTION 2: FEATURED IMAGE ==================== */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mb-16 relative z-10">
          <FadeIn delay={0.1}>
            <div className="relative w-full h-56 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-xl bg-[#f1f5f9]">
              <Image
                src={post.imageSrc}
                alt={post.title}
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ==================== SECTION 3: ARTICLE BODY ==================== */}
      <section className="py-24 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Article Content */}
            <div className="lg:col-span-2">
              <FadeIn>
                <article className="prose-custom">{post.content}</article>
              </FadeIn>

              {/* Back to Blog */}
              <FadeIn delay={0.2}>
                <div className="mt-12 pt-8 border-t border-[#e2e8f0]">
                  <Button
                    variant="outline"
                    className="border-[#001F60]/20 text-[#001F60] hover:bg-[#eff6ff] hover:text-[#001F60] transition-all duration-300"
                    onClick={() => navigate('blog')}
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to All Articles
                  </Button>
                </div>
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-8">
                {/* Author Box */}
                <FadeIn delay={0.2} direction="left">
                  <Card className="border-[#e2e8f0] bg-white">
                    <CardContent className="p-6">
                      <p className="text-xs font-semibold text-[#64748b] uppercase tracking-wider mb-4">
                        About the Author
                      </p>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#001F60] to-[#4DA3FF] flex items-center justify-center shadow-lg shadow-[#001F60]/20">
                          <span className="text-white text-xl font-bold">
                            {post.author
                              .split(' ')
                              .map((n) => n[0])
                              .join('')}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-bold text-[#1e293b]">
                            {post.author}
                          </h4>
                          <p className="text-sm text-[#001F60] font-medium">
                            {post.authorTitle}
                          </p>
                        </div>
                      </div>
                      <p className="text-[#475569] text-sm leading-relaxed">
                        {post.authorBio}
                      </p>
                    </CardContent>
                  </Card>
                </FadeIn>

                {/* CTA Card */}
                <FadeIn delay={0.3} direction="left">
                  <Card className="border-[#dbeafe] bg-gradient-to-br from-[#eff6ff] to-[#f0f4ff]">
                    <CardContent className="p-6">
                      <h4 className="font-bold text-[#1e293b] text-lg mb-2">
                        Need Help With Your IT Setup?
                      </h4>
                      <p className="text-[#475569] text-sm leading-relaxed mb-4">
                        Get a free assessment from our team and discover how we
                        can optimize your business technology.
                      </p>
                      <Button
                        className="w-full bg-gradient-to-r from-[#001F60] to-[#0775FF] hover:from-[#001440] hover:to-[#001F60] text-white font-medium shadow-lg shadow-[#001F60]/20 hover:shadow-xl hover:shadow-[#001F60]/30 transition-all duration-300"
                        onClick={() => navigate('contact')}
                      >
                        Get Free Assessment
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 4: RELATED POSTS ==================== */}
      <section className="py-20 lg:py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1e293b] mb-2">
                Related Articles
              </h2>
              <p className="text-[#475569]">
                Continue reading with these related posts
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {relatedPosts.map((rPost) => (
              <StaggerItem key={rPost.slug}>
                <Card
                  className="group h-full border-[#e2e8f0] hover:border-[#001F60]/20 hover:shadow-lg hover:shadow-[#001F60]/5 transition-all duration-500 overflow-hidden cursor-pointer bg-white"
                  onClick={() =>
                    navigate('blog-detail', { slug: rPost.slug })
                  }
                >
                  <CardContent className="p-0">
                    <div className="relative h-40 overflow-hidden bg-[#f8fafc]">
                      <Image
                        src={rPost.imageSrc}
                        alt={rPost.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6">
                      <Badge
                        className={`${rPost.categoryColor} border-0 text-xs font-medium px-3 py-1 mb-3`}
                      >
                        {rPost.category}
                      </Badge>
                      <h3 className="text-lg font-bold text-[#1e293b] mb-2 group-hover:text-[#001F60] transition-colors duration-300 leading-snug line-clamp-2">
                        {rPost.title}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-[#64748b] mt-4 pt-4 border-t border-[#f1f5f9]">
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {rPost.author}
                        </span>
                        <span>{rPost.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ==================== SECTION 5: CTA ==================== */}
      <section className="py-20 lg:py-24 bg-white">
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

              <div className="relative z-10">
                <Quote className="w-12 h-12 text-white/30 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Need Help With Your IT Setup?
                </h2>
                <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                  Whether you need a complete network overhaul, security
                  cameras, or ongoing IT support, our team is ready to help.
                  Get started with a free, no-obligation assessment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-[#001F60] hover:bg-white/90 px-8 py-3 rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 h-14 text-base"
                    onClick={() => navigate('contact')}
                  >
                    Get Free Assessment
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold h-14 text-base bg-transparent transition-all duration-300"
                    onClick={() => navigate('blog')}
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    More Articles
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