import { FC } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';

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
    <main className="relative min-h-[80vh] flex items-center justify-center px-4 md:px-8 py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/70 z-0"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgMHYyaC0ydi0yaDJ6bTItMmgydjJoLTJ2LTJ6bS0yIDRoMnYyaC0ydi0yem0tNCAwaC0ydi0yaDJ2MnptMCA0aC0ydi0yaDJ2MnptLTItNGgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50 z-0"></div>
      
      {/* Glow effect */}
      <div className="absolute top-1/3 -left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[120px] z-0"></div>
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[120px] z-0"></div>
      
      <div className="relative z-10 max-w-4xl w-full space-y-16">
        {/* Name and tagline section */}
        <div className="text-center space-y-8">
          <motion.div
            className="overflow-hidden"
          >
            {name.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="inline-block text-5xl md:text-7xl font-serif mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 animate-glow"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.div>
          
          <div className="relative h-16">
            <h2 className="typewriter inline-block max-w-full text-xl md:text-2xl font-light overflow-hidden whitespace-nowrap">
              {title}
            </h2>
          </div>
        </div>
        
        {/* Introduction section */}
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-lg font-light leading-relaxed text-center md:text-left">
            {renderHighlightedText(description)}
          </p>
          
          <div className="py-8 border-y border-muted/30 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            <div className="md:border-r md:border-muted/30 md:pr-4 space-y-2">
              <h3 className="text-sm uppercase tracking-widest text-muted-foreground">Based in</h3>
              <p className="font-light">{location}</p>
            </div>
            
            <div className="md:border-r md:border-muted/30 md:px-4 space-y-2">
              <h3 className="text-sm uppercase tracking-widest text-muted-foreground">Specializing in</h3>
              <p className="font-light">{specialization}</p>
            </div>
            
            <div className="md:pl-4 space-y-2">
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
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
      >
        <ChevronDownIcon className="h-8 w-8 text-primary/50" />
      </motion.div>
    </main>
  );
};

export default Hero;
