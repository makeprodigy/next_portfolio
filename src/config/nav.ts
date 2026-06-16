export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'Overview', href: '#overview' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#work-experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

// Section IDs for reference
export const sectionIds = {
  overview: 'overview',
  about: 'about',
  education: 'education',
  workExperience: 'work-experience',
  projects: 'projects',
  skills: 'skills',
  contact: 'contact',
} as const;
