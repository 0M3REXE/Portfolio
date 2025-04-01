import { FC } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="px-4 md:px-8 py-16 max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="space-y-10"
      >
        <div className="space-y-2">
          <h2 className="text-2xl font-light tracking-tight">Selected Projects</h2>
          <div className="h-px w-12 bg-primary/70"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              whileHover={{ 
                y: -5,
                boxShadow: '0 10px 30px -15px rgba(57, 255, 20, 0.2)' 
              }}
              className="group border border-border/40 bg-card/40 backdrop-blur-sm rounded-sm p-6 transition-all duration-300 hover:border-primary/30"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-medium group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                
                <p className="text-muted-foreground text-sm font-light">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge 
                      key={index} 
                      variant="outline"
                      className="text-xs bg-transparent border-muted/50 text-muted-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="pt-2">
                  <button className="flex items-center text-sm font-light text-muted-foreground hover:text-primary transition-colors duration-300 group-hover:translate-x-1 transform transition-transform">
                    View details <ArrowRight className="ml-1 h-3 w-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;