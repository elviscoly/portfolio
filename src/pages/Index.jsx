import { useState } from 'react';
import Header from '../components/Header';
import FilterBar from '../components/FilterBar';
import CardStack from '../components/CardStack';
import Cursor from '../components/Cursor';

const projectsData = [
  {
    id: 1,
    theme: 'light',
    color: 'coral',
    icon: 'code',
    category: 'Fintech',
    title: 'Alliance Prime',
    stats: [
      { label: 'Tech', value: 'NestJS, React' },
      { label: 'Deploy', value: 'Docker, Dokploy' },
      { label: 'Status', value: 'Live' },
    ],
    filter: 'Fintech',
    description: 'Secure platform for international tuition payments and business invoices',
  },
  {
    id: 2,
    theme: 'dark',
    color: 'mustard',
    icon: 'code',
    category: 'Backend',
    title: 'Golang Subscription',
    stats: [
      { label: 'Tech', value: 'Golang, Gin' },
      { label: 'Cache', value: 'Redis' },
      { label: 'Year', value: '2024' },
    ],
    filter: 'Backend',
    description: 'Subscription management system with plan-based enrollment',
  },
  {
    id: 3,
    theme: 'light',
    color: 'purple',
    icon: 'code',
    category: 'Backend',
    title: 'Social API',
    stats: [
      { label: 'Tech', value: 'Golang, Chi' },
      { label: 'Cloud', value: 'Google Cloud' },
      { label: 'Auth', value: 'JWT' },
    ],
    filter: 'Backend',
    description: 'RESTful API with follow/unfollow, posts, and comments',
  },
  {
    id: 4,
    theme: 'dark',
    color: 'mint',
    icon: 'code',
    category: 'Full-Stack',
    title: 'CBT Platform',
    stats: [
      { label: 'Tech', value: 'MEAN Stack' },
      { label: 'Users', value: 'Multiple' },
      { label: 'Role', value: 'Lead' },
    ],
    filter: 'Full-Stack',
    description: 'Computer-Based Testing platform for educational institutions',
  },
  {
    id: 5,
    theme: 'light',
    color: 'coral',
    icon: 'code',
    category: 'Backend',
    title: 'Bookshop API',
    stats: [
      { label: 'Tech', value: 'Golang, Gin' },
      { label: 'Database', value: 'MongoDB' },
      { label: 'Auth', value: 'JWT' },
    ],
    filter: 'Backend',
    description: 'RESTful API for bookshop inventory management',
  },
  {
    id: 6,
    theme: 'dark',
    color: 'mustard',
    icon: 'code',
    category: 'AI/ML',
    title: 'Face ID System',
    stats: [
      { label: 'Tech', value: 'Angular, TensorFlow' },
      { label: 'Feature', value: 'Face Verification' },
      { label: 'Year', value: '2023' },
    ],
    filter: 'AI/ML',
    description: 'Facial recognition authentication system',
  },
];

const filters = ['All Work', 'Fintech', 'Backend', 'Full-Stack', 'AI/ML'];

export default function Index() {
  const [activeFilter, setActiveFilter] = useState('All Work');

  const filteredProjects = activeFilter === 'All Work'
    ? projectsData
    : projectsData.filter((project) => project.filter === activeFilter);

  return (
    <>
      <Cursor />
      <Header />
      <FilterBar filters={filters} activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <main>
        {filteredProjects.map((project) => (
          <CardStack
            key={project.id}
            theme={project.theme}
            color={project.color}
            icon={project.icon}
            category={project.category}
            title={project.title}
            stats={project.stats}
          />
        ))}
      </main>
    </>
  );
}
