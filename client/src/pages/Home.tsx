import { FC } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

const portfolioData = {
  name: "John Smith",
  title: "Frontend Developer & UI/UX Designer",
  description: "I create minimal and intuitive digital experiences that balance form and function. My approach focuses on clean design, meaningful interactions, and attention to detail.",
  location: "San Francisco, CA",
  specialization: "React, UI/UX, Design Systems",
  availability: "Freelance, Full-time",
  initials: "JS"
};

const Home: FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar initials={portfolioData.initials} />
      <Hero 
        name={portfolioData.name}
        title={portfolioData.title}
        description={portfolioData.description}
        location={portfolioData.location}
        specialization={portfolioData.specialization}
        availability={portfolioData.availability}
      />
      <Footer />
    </div>
  );
};

export default Home;
