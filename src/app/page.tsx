'use client';

import { useNavigation } from '@/lib/store';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { AnimatePresence, motion } from 'framer-motion';
import HomePage from '@/pages/home';
import AboutPage from '@/pages/about';
import ServicesPage from '@/pages/services';
import ServiceDetailPage from '@/pages/service-detail';
import IndustriesPage from '@/pages/industries';
import CaseStudiesPage from '@/pages/case-studies';
import PricingPage from '@/pages/pricing';
import ContactPage from '@/pages/contact';
import BlogPage from '@/pages/blog';
import BlogDetailPage from '@/pages/blog-detail';
import FaqPage from '@/pages/faq';
import CareersPage from '@/pages/careers';
import PartnersPage from '@/pages/partners';
import SupportPage from '@/pages/support';

const pageComponents: Record<string, React.ComponentType> = {
  home: HomePage,
  about: AboutPage,
  services: ServicesPage,
  'service-detail': ServiceDetailPage,
  industries: IndustriesPage,
  'case-studies': CaseStudiesPage,
  pricing: PricingPage,
  contact: ContactPage,
  blog: BlogPage,
  'blog-detail': BlogDetailPage,
  faq: FaqPage,
  careers: CareersPage,
  partners: PartnersPage,
  support: SupportPage,
};

export default function Page() {
  const { currentPage } = useNavigation();

  const PageComponent = pageComponents[currentPage] || HomePage;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <PageComponent />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}