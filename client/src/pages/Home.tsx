import { FC } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Projects from '../components/Projects';
import Footer from '@/components/Footer';

const portfolioData = {
  name: "John Smith",
  title: "Frontend Developer & UI/UX Designer",
  description: "I create minimal and intuitive digital experiences that balance form and function. My approach focuses on clean design, meaningful interactions, and attention to detail.",
  location: "San Francisco, CA",
  specialization: "React, UI/UX, Design Systems",
  availability: "Freelance, Full-time",
  projects: [
    {
      id: 1,
      title: "Modern E-commerce Platform",
      description: "A responsive shopping experience with dark mode",
      tags: ["React", "Next.js", "Tailwind CSS"]
    },
    {
      id: 2,
      title: "Finance Dashboard",
      description: "Data visualization tool for personal finance",
      tags: ["TypeScript", "D3.js", "React"]
    },
    {
      id: 3,
      title: "AI Content Generator",
      description: "Web app that creates custom marketing content",
      tags: ["OpenAI API", "React", "Node.js"]
    }
  ]
};

const Home: FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <Hero 
        name={portfolioData.name}
        title={portfolioData.title}
        description={portfolioData.description}
        location={portfolioData.location}
        specialization={portfolioData.specialization}
        availability={portfolioData.availability}
      />
      <Projects projects={portfolioData.projects} />
      <Footer />
    </div>
  );
};

export default Home;
