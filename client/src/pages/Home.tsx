import { FC, lazy, Suspense } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

// Lazy load Projects component as it may contain heavy elements
const Projects = lazy(() => import('@/components/Projects'));

// Loading placeholder for projects section
const ProjectsLoading = () => (
  <section className="py-16">
    <div className="max-w-6xl mx-auto px-4">
      <div className="space-y-8">
        <div className="h-8 bg-muted/20 rounded-sm w-48 animate-pulse"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="border border-border/40 bg-card/40 rounded-sm p-6 h-64 animate-pulse">
              <div className="space-y-4">
                <div className="h-6 bg-muted/20 rounded-sm w-3/4"></div>
                <div className="h-4 bg-muted/20 rounded-sm w-full"></div>
                <div className="h-4 bg-muted/20 rounded-sm w-5/6"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const portfolioData = {
  name: "Omer Abdullah",
  title: "Cybersecurity and Machine Learning Entusiast",
  description: "I am a passionate software engineer with a focus on cybersecurity and machine learning. I love building secure and efficient applications.",
  location: "Hyderabad, India",
  specialization: "Tensorflow, Burp Suite, React, Next.js",
  skills: ["Python", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS"],
  availability: "Freelance, Full-time",
  projects: [
    {
      id: 1,
      title: "Modern E-commerce Platform",
      description: "A responsive shopping experience with dark mode",
      tags: ["React", "Next.js", "Tailwind CSS"],
      githubLink: "https://github.com/omerabdullah/ecommerce-platform"
    },
    {
      id: 2,
      title: "Finance Dashboard",
      description: "Data visualization tool for personal finance",
      tags: ["TypeScript", "D3.js", "React"],
      githubLink: "https://github.com/omerabdullah/finance-dashboard"
    },
    {
      id: 3,
      title: "AI Content Generator",
      description: "Web app that creates custom marketing content",
      tags: ["OpenAI API", "React", "Node.js"],
      githubLink: "https://github.com/omerabdullah/ai-content-generator"
    }
  ]
};

const Home: FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden" role="main">
      <NavBar name={portfolioData.name} />
      <Hero 
        name={portfolioData.name}
        title={portfolioData.title}
        description={portfolioData.description}
        location={portfolioData.location}
        specialization={portfolioData.specialization}
        availability={portfolioData.availability}
      />
      <Suspense fallback={<ProjectsLoading />}>
        <Projects projects={portfolioData.projects} />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Home;
