export interface Project {
  num: string;
  title: string;
  date: string;
  href: string;
  svgSrc: string;
}

export const allProjects: Project[] = [
/*   { num: '006', title: 'Fetchr App', date: '2024', href: '/projects/fetchr', svgSrc: '/images/projectCard/fetchr.svg' },
 */  { num: '005', title: 'Vote In', date: '2024', href: '/projects/votein', svgSrc: '/images/projectCard/VoteIn.svg' },
/*   { num: '004', title: 'SearchNEU Alerts', date: '2024', href: '/projects/searchneu', svgSrc: '/images/projectCard/searchneu.svg' },
  { num: '003', title: 'Vote In', date: '2024', href: '/projects/clubsneu', svgSrc: '/images/projectCard/VoteIn.svg' },
  { num: '002', title: 'Udemy Personal Plan', date: '2023', href: '/projects/udemy', svgSrc: '/images/projectCard/udemy.svg' },
  { num: '001', title: 'ReMo Mobile', date: '2023',href: '/projects/remo', svgSrc: '/images/projectCard/remo.svg' }, */
];

export const getFeaturedProjects = (): Record<string, Project[]> => {
  // Filter out ReMo by excluding projects with href '/projects/remo'
  const featuredProjects = allProjects.filter(project => project.href !== '/projects/remo');
  
  return featuredProjects.reduce((acc, project) => {
    if (!acc[project.date]) {
      acc[project.date] = [];
    }
    acc[project.date].push(project);
    return acc;
  }, {} as Record<string, Project[]>);
};
