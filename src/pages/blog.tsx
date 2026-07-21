'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useNavigation } from '@/lib/store';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ChevronRight,
  ArrowRight,
  Clock,
  User,
  Mail,
  TrendingUp,
  Shield,
  Cable,
  Database,
  Lock,
  Phone,
  BookOpen,
} from 'lucide-react';
import featuredImg from '@/Media/Service image/Tech-Sheba.jpg';
import postImg1 from '@/Media/Service image/Tech Seba Service (1).png';
import postImg2 from '@/Media/Service image/Tech Seba Service (2).png';
import postImg3 from '@/Media/Service image/Tech Seba Service (3).png';
import postImg4 from '@/Media/Service image/Tech Seba Service (4).png';
import postImg5 from '@/Media/Service image/Tech Seba Service (5).png';
import postImg6 from '@/Media/Service image/Tech Seba Service (7).png';

type BlogPost = {
  slug: string;
  category: string;
  categoryColor: string;
  accentColor: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  imageSrc: any;
};

const featuredPost: BlogPost = {
  slug: 'office-network-guide',
  category: 'Networking',
  categoryColor: 'bg-[#001F60]/10 text-[#001F60]',
  accentColor: 'from-[#001F60] to-[#0775FF]',
  imageSrc: featuredImg,
  title: 'The Complete Guide to Office Network Setup for Bangladeshi Businesses',
  excerpt:
    'Setting up a reliable office network is the foundation of every modern business in Bangladesh. From choosing between MikroTik and Ubiquiti routers to planning structured cabling, Wi-Fi coverage, and network security â€” this comprehensive guide walks you through every step. Learn the common mistakes Dhaka businesses make and how to avoid them, saving both time and money on your IT infrastructure investment.',
  author: 'Imran Hossain',
  date: 'January 15, 2025',
  readTime: '12 min read',
};

const blogPosts: BlogPost[] = [
  {
    slug: 'cctv-installation-dhaka',
    category: 'Security',
    categoryColor: 'bg-amber-500/10 text-amber-700',
    accentColor: 'from-amber-500 to-amber-600',
    imageSrc: postImg1,
    title: '5 Reasons Your Dhaka Office Needs Professional CCTV Installation',
    excerpt:
      'Security cameras are no longer a luxury â€” they are essential for every office in Dhaka. Learn why professional installation matters more than DIY setups and how it protects your business.',
    author: 'Sabrina Islam',
    date: 'February 3, 2025',
    readTime: '6 min read',
  },
  {
    slug: 'pbx-vs-voip',
    category: 'Business IT',
    categoryColor: 'bg-blue-500/10 text-blue-700',
    accentColor: 'from-[#0775FF] to-[#4DA3FF]',
    imageSrc: postImg2,
    title: 'PBX vs VoIP: Which Phone System is Right for Your Business?',
    excerpt:
      'Choosing between a traditional PBX system and modern VoIP can be confusing. We break down the pros, cons, and costs to help Bangladeshi businesses make the right call.',
    author: 'Faruq Rahman',
    date: 'January 28, 2025',
    readTime: '8 min read',
  },
  {
    slug: 'choosing-it-support-partner',
    category: 'Tips & Guides',
    categoryColor: 'bg-purple-500/10 text-purple-700',
    accentColor: 'from-[#001440] to-[#001F60]',
    imageSrc: postImg3,
    title: 'How to Choose the Right IT Support Partner in Bangladesh',
    excerpt:
      'Not all IT support companies are created equal. Discover the key factors to evaluate when selecting a technology partner for your growing business in Bangladesh.',
    author: 'Tania Akter',
    date: 'January 20, 2025',
    readTime: '7 min read',
  },
  {
    slug: 'data-backup-best-practices',
    category: 'Tips & Guides',
    categoryColor: 'bg-purple-500/10 text-purple-700',
    accentColor: 'from-[#4DA3FF] to-[#7DB8FF]',
    imageSrc: postImg4,
    title: 'Data Backup Best Practices for Small and Medium Businesses',
    excerpt:
      'Data loss can cripple a business overnight. Learn the 3-2-1 backup rule, cloud vs local strategies, and why most Bangladeshi SMBs are dangerously underprepared.',
    author: 'Rafi Khan',
    date: 'January 10, 2025',
    readTime: '9 min read',
  },
  {
    slug: 'structured-cabling-importance',
    category: 'Networking',
    categoryColor: 'bg-[#001F60]/10 text-[#001F60]',
    accentColor: 'from-[#001F60] to-[#001440]',
    imageSrc: postImg5,
    title: 'Why Structured Cabling Matters More Than You Think',
    excerpt:
      'Messy cables cause more than just an eyesore â€” they lead to network issues, safety hazards, and costly downtime. Here is why professional cabling is a smart investment.',
    author: 'Imran Hossain',
    date: 'December 28, 2024',
    readTime: '5 min read',
  },
  {
    slug: 'cybersecurity-basics-bangladesh',
    category: 'Security',
    categoryColor: 'bg-amber-500/10 text-amber-700',
    accentColor: 'from-[#001440] to-[#4DA3FF]',
    imageSrc: postImg6,
    title: 'Cybersecurity Basics Every Bangladeshi Business Should Know',
    excerpt:
      'Cyber threats are rising in Bangladesh. From ransomware to phishing, learn the essential cybersecurity measures every business must implement to stay protected.',
    author: 'Sabrina Islam',
    date: 'December 15, 2024',
    readTime: '10 min read',
  },
];

const categories = [
  { label: 'All Posts', icon: BookOpen, count: 7 },
  { label: 'Networking', icon: Cable, count: 2 },
  { label: 'Security', icon: Shield, count: 2 },
  { label: 'Business IT', icon: TrendingUp, count: 1 },
  { label: 'Tips & Guides', icon: Lock, count: 2 },
];

export default function BlogPage() {
  const { navigate } = useNavigation();
  const [activeCategory, setActiveCategory] = useState('All Posts');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const filteredPosts =
    activeCategory === 'All Posts'
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
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
              <span className="text-[#001F60] font-medium">Blog</span>
            </nav>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Badge className="mb-4 bg-[#001F60]/10 text-[#001F60] hover:bg-[#001F60]/20 border-0 text-sm px-4 py-1">
              Blog & Insights
            </Badge>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e293b] mb-4 tracking-tight">
              IT Knowledge{' '}
              <span className="text-[#001F60]">Hub</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-lg md:text-xl text-[#475569] max-w-2xl leading-relaxed">
              Practical guides, expert insights, and industry updates to help
              Bangladeshi businesses make smarter technology decisions. Stay
              informed, stay ahead.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ==================== SECTION 2: FEATURED POST ==================== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-sm font-semibold text-[#001F60] uppercase tracking-wider mb-2">
                Featured Article
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Card className="group border-[#e2e8f0] hover:border-[#001F60]/20 hover:shadow-xl hover:shadow-[#001F60]/5 transition-all duration-500 overflow-hidden cursor-pointer bg-white"
              onClick={() => navigate('blog-detail', { slug: featuredPost.slug })}
            >
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Featured Image */}
                  <div className="relative h-64 md:h-auto min-h-[280px] overflow-hidden bg-[#f1f5f9]">
                    <Image
                      src={featuredPost.imageSrc}
                      alt={featuredPost.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className={`${featuredPost.categoryColor} border-0 text-xs font-medium px-3 py-1`}>
                        {featuredPost.category}
                      </Badge>
                    </div>
                    </div>

                  {/* Content */}
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-[#64748b] mb-4">
                      <span className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5" />
                        {featuredPost.author}
                      </span>
                      <span className="text-[#e2e8f0]">â€¢</span>
                      <span>{featuredPost.date}</span>
                      <span className="text-[#e2e8f0]">â€¢</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-[#1e293b] mb-4 group-hover:text-[#001F60] transition-colors duration-300 leading-tight">
                      {featuredPost.title}
                    </h3>

                    <p className="text-[#475569] leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>

                    <div>
                      <span className="inline-flex items-center gap-2 text-[#001F60] font-semibold group-hover:gap-3 transition-all duration-300">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* ==================== SECTION 3: BLOG GRID ==================== */}
      <section className="pb-20 lg:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1e293b]">
                  Latest Articles
                </h2>
                <p className="text-[#475569] mt-1">
                  Stay updated with the latest in IT solutions and best practices
                </p>
              </div>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <Card
                  className="group h-full border-[#e2e8f0] hover:border-[#001F60]/20 hover:shadow-lg hover:shadow-[#001F60]/5 transition-all duration-500 overflow-hidden cursor-pointer bg-white"
                  onClick={() => navigate('blog-detail', { slug: post.slug })}
                >
                  <CardContent className="p-0">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-[#f8fafc]">
                      <Image
                        src={post.imageSrc}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge
                          className={`${post.categoryColor} border-0 text-xs font-medium px-2.5 py-1`}
                        >
                          {post.category}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-6">
                      {/* Title */}
                      <h3 className="text-lg font-bold text-[#1e293b] mb-3 group-hover:text-[#001F60] transition-colors duration-300 leading-snug line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-[#475569] text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between pt-4 border-t border-[#f1f5f9]">
                        <div className="flex items-center gap-3 text-xs text-[#64748b]">
                          <span className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {post.author}
                          </span>
                          <span>{post.date}</span>
                        </div>
                        <span className="inline-flex items-center gap-1 text-[#001F60] text-sm font-medium group-hover:gap-2 transition-all duration-300">
                          Read
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <BookOpen className="w-12 h-12 text-[#94a3b8] mx-auto mb-4" />
              <p className="text-[#64748b] text-lg">
                No articles found in this category yet.
              </p>
              <Button
                variant="outline"
                className="mt-4 border-[#001F60]/20 text-[#001F60] hover:bg-[#eff6ff]"
                onClick={() => setActiveCategory('All Posts')}
              >
                View All Posts
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* ==================== SECTION 4: CATEGORIES ==================== */}
      <section className="py-20 lg:py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1e293b] mb-3">
                Browse by Topic
              </h2>
              <p className="text-[#475569] max-w-lg mx-auto">
                Find articles relevant to your interests and business needs
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.label;
                return (
                  <button
                    key={cat.label}
                    onClick={() => setActiveCategory(cat.label)}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                      isActive
                        ? 'bg-[#001F60] text-white border-[#001F60] shadow-md shadow-[#001F60]/20'
                        : 'bg-white text-[#475569] border-[#e2e8f0] hover:border-[#001F60]/30 hover:text-[#001F60] hover:shadow-sm'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {cat.label}
                    <span
                      className={`text-xs px-1.5 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-[#f1f5f9] text-[#64748b]'
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ==================== SECTION 5: NEWSLETTER SIGNUP ==================== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#001F60] via-[#0775FF] to-[#4DA3FF] p-10 md:p-16">
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

              <div className="relative z-10 max-w-2xl mx-auto text-center">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Stay Updated
                </h2>
                <p className="text-white/80 text-lg mb-8 leading-relaxed">
                  Get the latest IT insights, tips, and company news delivered
                  straight to your inbox. No spam, just valuable content for
                  Bangladeshi business owners.
                </p>

                {subscribed ? (
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 inline-flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-white font-semibold">You&apos;re Subscribed!</p>
                      <p className="text-white/70 text-sm">
                        Check your inbox for a confirmation email.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubscribe}
                    className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                  >
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-12 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/50 rounded-lg focus:border-white focus:ring-white/20"
                    />
                    <Button
                      type="submit"
                      className="h-12 bg-white text-[#001F60] hover:bg-white/90 px-6 rounded-lg font-semibold shadow-xl transition-all duration-300 shrink-0"
                    >
                      Subscribe
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                )}

                <p className="text-white/50 text-xs mt-4">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}