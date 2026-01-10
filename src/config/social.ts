export interface SocialLink {
  label: string;
  href: string;
  icon?: string; // Optional: icon name or path
}

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/makeprodigy', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pushpendra-parihar2025/', icon: 'linkedin' },
  { label: 'Twitter', href: 'https://twitter.com/yourusername', icon: 'twitter' },
  { label: 'Email', href: 'mailto:payneparihar13@gmail.com', icon: 'email' },
];
