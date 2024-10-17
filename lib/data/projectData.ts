export interface Project {
  num: string;
  title: string;
  date: string;
  href: string;
  imageSrc?: string;
}

export const allProjects: Project[] = [
  { num: '005', title: 'Linkedin Brand Kit', date: '2024', href: '/linkedin-brand-kit', imageSrc: '/images/linkedin.png' },
  { num: '004', title: 'SearchNEU Notifications', date: '2024', href: '/searchneu-notifications', imageSrc: '/images/searchneu.png' },
  { num: '003', title: 'ClubsNEU for Students', date: '2023', href: '/clubsneu-student-view', imageSrc: '/images/clubsneu.png' },
  { num: '002', title: 'Udemy Personal Plan', date: '2023', href: '/udemy-personal-plan', imageSrc: '/images/udemy.png' },
  { num: '001', title: 'ReMo for Teachers', date: '2023',href: '/remo-teacher-app', imageSrc: '/images/remo.png' },
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
