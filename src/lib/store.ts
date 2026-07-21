import { create } from 'zustand';

export type PageKey =
  | 'home'
  | 'about'
  | 'services'
  | 'service-detail'
  | 'industries'
  | 'case-studies'
  | 'pricing'
  | 'contact'
  | 'blog'
  | 'blog-detail'
  | 'faq'
  | 'careers'
  | 'partners'
  | 'support';

interface NavigationState {
  currentPage: PageKey;
  pageParams: Record<string, string>;
  navigate: (page: PageKey, params?: Record<string, string>) => void;
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const useNavigation = create<NavigationState>((set) => ({
  currentPage: 'home',
  pageParams: {},
  navigate: (page, params = {}) => {
    set({ currentPage: page, pageParams: params });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  isMobileMenuOpen: false,
  setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
}));

export const NAV_ITEMS: { label: string; page: PageKey; children?: { label: string; page: PageKey; params?: Record<string, string> }[] }[] = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  {
    label: 'Services',
    page: 'services',
    children: [
      { label: 'Network & Connectivity', page: 'service-detail', params: { slug: 'network-connectivity' } },
      { label: 'Security Systems', page: 'service-detail', params: { slug: 'security-systems' } },
      { label: 'IT Support & Maintenance', page: 'service-detail', params: { slug: 'it-support' } },
      { label: 'Digital Presence & Strategy', page: 'service-detail', params: { slug: 'digital-presence' } },
    ],
  },
  { label: 'Industries', page: 'industries' },
  { label: 'Case Studies', page: 'case-studies' },
  { label: 'Pricing', page: 'pricing' },
  { label: 'Blog', page: 'blog' },
  { label: 'Contact', page: 'contact' },
];