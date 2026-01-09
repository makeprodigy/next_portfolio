export interface SocialLink {
  label: string;
  href: string;
  icon?: string; // Optional: icon name or path
}

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/yourusername', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', icon: 'linkedin' },
  { label: 'Twitter', href: 'https://twitter.com/yourusername', icon: 'twitter' },
  { label: 'Email', href: 'mailto:your.email@example.com', icon: 'email' },
];
