export interface Project {
  num: string;
  title: string;
  date: string;
  href: string;
  imageSrc?: string;
}

export const allProjects: Project[] = [
  { num: '005', title: 'Linkedin Brand Kit', date: '2024', href: '/linkedin-brand-kit', imageSrc: '/images/linkedin.png' },
  { num: '004', title: 'SearchNEU Alerts', date: '2024', href: '/searchneu-alerts', imageSrc: '/images/searchneu.png' },
  { num: '003', title: 'ClubsNEU Database', date: '2023', href: '/clubsneu-database', imageSrc: '/images/clubsneu.png' },
  { num: '002', title: 'Udemy Personal Plan', date: '2023', href: '/udemy-plan', imageSrc: '/images/udemy.png' },
  { num: '001', title: 'ReMo Mobile', date: '2023',href: '/remo-mobile', imageSrc: '/images/remo.png' },
];

export const getFeaturedProjects = (): Record<string, Project[]> => {
  return allProjects.reduce((acc, project) => {
    if (!acc[project.date]) {
      acc[project.date] = [];
    }
    acc[project.date].push(project);
    return acc;
  }, {} as Record<string, Project[]>);
};
