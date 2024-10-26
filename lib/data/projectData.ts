export interface Project {
  num: string;
  title: string;
  date: string;
  href: string;
  svgSrc: string;
}

export const allProjects: Project[] = [
  { num: '005', title: 'Linkedin Brand Kit', date: '2024', href: '/linkedin', svgSrc: '/images/projectCard/linkedin.svg' },
  { num: '004', title: 'SearchNEU Alerts', date: '2024', href: '/searchneu', svgSrc: '/images/projectCard/clubsneu.svg' },
  { num: '003', title: 'ClubsNEU Database', date: '2023', href: '/projects/clubsneu', svgSrc: '/images/projectCard/clubsneu.svg' },
  { num: '002', title: 'Udemy Personal Plan', date: '2023', href: '/udemy', svgSrc: '/images/projectCard/linkedin.svg' },
  { num: '001', title: 'ReMo Mobile', date: '2023',href: '/remo', svgSrc: '/images/projectCard/linkedin.svg' },
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
