export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#work-experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

// Section IDs for reference
export const sectionIds = {
  home: 'home',
  projects: 'projects',
  education: 'education',
  workExperience: 'work-experience',
  skills: 'skills',
  contact: 'contact',
} as const;
