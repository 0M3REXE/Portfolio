import { FC, useEffect } from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  name: string;
  title: string;
  description: string;
  location: string;
  specialization: string;
  availability: string;
}

const Hero: FC<HeroProps> = ({ 
  name, 
  title, 
  description, 
  location, 
  specialization, 
  availability 
}) => {
  // Split description to highlight certain words
  const renderHighlightedText = (text: string) => {
    return text.split(' ').map((word, index) => {
      const wordsToHighlight = ['minimal', 'intuitive'];
      if (wordsToHighlight.includes(word.toLowerCase().replace(/[.,]/g, ''))) {
        return <span key={index} className="text-primary"> {word} </span>;
      }
      return <span key={index}> {word} </span>;
    });
  };
  
  return (
    <main className="flex-grow flex items-center justify-center px-4 md:px-8 pb-20">
      <div className="max-w-3xl w-full space-y-16">
        {/* Name and tagline section */}
        <div className="text-center space-y-8">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-extralight mb-4 tracking-tight"
          >
            <span className="text-primary animate-glow">{name}</span>
          </motion.h1>
          
          <div className="relative h-16">
            <h2 className="typewriter inline-block max-w-full text-xl md:text-2xl font-light overflow-hidden whitespace-nowrap">
              {title}
            </h2>
          </div>
        </div>
        
        {/* Introduction section */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-lg font-light leading-relaxed">
            {renderHighlightedText(description)}
          </p>
          
          <div className="pt-6 border-t border-muted/30 flex flex-col sm:flex-row sm:justify-between space-y-4 sm:space-y-0">
            <div className="space-y-1">
              <h3 className="text-sm uppercase tracking-widest text-muted-foreground">Based in</h3>
              <p className="font-light">{location}</p>
            </div>
            
            <div className="space-y-1">
              <h3 className="text-sm uppercase tracking-widest text-muted-foreground">Specializing in</h3>
              <p className="font-light">{specialization}</p>
            </div>
            
            <div className="space-y-1">
              <h3 className="text-sm uppercase tracking-widest text-muted-foreground">Available for</h3>
              <p className="font-light">{availability}</p>
            </div>
          </div>
        </motion.div>
        
        {/* CTA button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <a 
            href="mailto:contact@example.com" 
            className="inline-block bg-transparent border border-primary/70 text-primary px-8 py-3 rounded-sm hover:bg-primary/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(57,255,20,0.3)]"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </main>
  );
};

export default Hero;
