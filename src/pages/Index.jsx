import { useState } from 'react';
import Header from '../components/Header';
import FilterBar from '../components/FilterBar';
import CardStack from '../components/CardStack';
import Cursor from '../components/Cursor';
import project1 from '../assets/images/project-1.png';
import project2 from '../assets/images/project-2.png';
import project3 from '../assets/images/project-3.png';
import project4 from '../assets/images/project-4.png';
import project5 from '../assets/images/project-5.png';
import project6 from '../assets/images/project-6.png';
import project7 from '../assets/images/project-7.png';
import project8 from '../assets/images/project-8.png';
import project9 from '../assets/images/project-9.png';

const projectsData = [
  {
    id: 1,
    theme: 'dark',
    color: 'coral',
    icon: 'code',
    category: 'Fintech',
    title: 'Smart Pay API',
    image: project1,
    stats: [
      { label: 'Tech', value: 'TypeScript, NodeJS, Sequelize ORM, MySQL' },
      { label: 'Deploy', value: 'AWS' },
      { label: 'Status', value: 'Live' },
    ],
    filter: 'Fintech',
    description: 'Smart Pay API is a payment platform that allows users to make through physical POS, online payments and wallet transfers',
  },
  {
    id: 2,
    theme: 'light',
    color: 'coral',
    icon: 'code',
    category: 'Fintech',
    title: 'Appiawave App API',
    image: project2,
    stats: [
      { label: 'Tech', value: 'TypeScript, Nodejs, Sequelize ORM, MySQL' },
      { label: 'Deploy', value: 'AWS' },
      { label: 'Status', value: 'Live' },
    ],
    filter: 'Fintech',
    description: 'Appiawave App API is a payment platform  which allows wallet transfer, physical card payment, online payment, and also cross border payment',
  },
  {
    id: 3,
    theme: 'dark',
    color: 'coral',
    icon: 'code',
    category: 'Fintech',
    title: 'Alliance Prime',
    image: project3,
    stats: [
      { label: 'Tech', value: 'NestJS, React' },
      { label: 'Deploy', value: 'Docker, Dokploy' },
      { label: 'Status', value: 'Live' },
    ],
    filter: 'Fintech',
    description: 'Secure platform for international tuition payments and business invoices',
  },
  {
    id: 4,
    theme: 'dark',
    color: 'mustard',
    icon: 'code',
    category: 'Frontend',
    title: 'Survey Plan Request System',
    image: project4,
    stats: [
      { label: 'Tech', value: 'Angular' },
      { label: 'Feature', value: 'Survey Plan Request' },
      { label: 'Year', value: '2025' },
    ],
    filter: 'Frontend',
    description: 'Survey Plan Request System for Lands Commission Rivers State, Nigeria',
  },
  {
    id: 5,
    theme: 'light',
    color: 'mustard',
    icon: 'code',
    category: 'Backend',
    title: 'Golang Subscription',
    image: project5,
    stats: [
      { label: 'Tech', value: 'Golang, Gin' },
      { label: 'Cache', value: 'Redis' },
      { label: 'Year', value: '2024' },
    ],
    filter: 'Backend',
    description: 'Subscription management system with plan-based enrollment',
  },
  {
    id: 6,
    theme: 'dark',
    color: 'purple',
    icon: 'code',
    category: 'Backend',
    title: 'Social API',
    image: project6,
    stats: [
      { label: 'Tech', value: 'Golang, Chi' },
      { label: 'Cloud', value: 'Google Cloud' },
      { label: 'Auth', value: 'JWT' },
    ],
    filter: 'Backend',
    description: 'RESTful API with follow/unfollow, posts, and comments',
  },
  {
    id: 7,
    theme: 'dark',
    color: 'mint',
    icon: 'code',
    category: 'Full-Stack',
    title: 'CBT Platform',
    image: project7,
    stats: [
      { label: 'Tech', value: 'MEAN Stack' },
      { label: 'Users', value: 'Multiple' },
      { label: 'Role', value: 'Lead' },
    ],
    filter: 'Full-Stack',
    description: 'Computer-Based Testing platform for educational institutions',
  },
  {
    id: 8,
    theme: 'light',
    color: 'coral',
    icon: 'code',
    category: 'Backend',
    title: 'Bookshop API',
    image: project8,
    stats: [
      { label: 'Tech', value: 'Golang, Gin' },
      { label: 'Database', value: 'MongoDB' },
      { label: 'Auth', value: 'JWT' },
    ],
    filter: 'Backend',
    description: 'RESTful API for bookshop inventory management',
  },
  {
    id: 9,
    theme: 'dark',
    color: 'mustard',
    icon: 'code',
    category: 'AI/ML',
    title: 'Face ID System',
    image: project9,
    stats: [
      { label: 'Tech', value: 'Angular, TensorFlow' },
      { label: 'Feature', value: 'Face Verification' },
      { label: 'Year', value: '2023' },
    ],
    filter: 'AI/ML',
    description: 'Facial recognition authentication system',
  },
];

const filters = ['All Work', 'Fintech', 'Backend', 'Full-Stack', 'AI/ML', 'Frontend'];

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
            image={project.image}
            stats={project.stats}
          />
        ))}
      </main>
    </>
  );
}
