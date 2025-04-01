import { FC, useState, useEffect } from 'react';
import { MailIcon, Link2Icon, GithubIcon, LinkedinIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavBarProps {
  initials?: string;
  name?: string;
}

const NavBar: FC<NavBarProps> = ({ name = "John Smith" }) => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Create a separate character array for the name
  const nameArray = name.split("");
  
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`py-5 px-4 md:px-10 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="overflow-hidden"
        >
          <div className="flex">
            {nameArray.map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.2 + (index * 0.05), 
                  ease: "easeOut" 
                }}
                whileHover={{ 
                  color: "hsl(var(--primary))", 
                  scale: 1.1,
                  transition: { duration: 0.2 } 
                }}
                className="text-foreground text-xl font-light tracking-wide"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
        </motion.div>
        
        <div className="flex items-center space-x-6">
          <motion.a 
            whileHover={{ y: -2, color: 'hsl(var(--primary))' }}
            href="mailto:omerhyd8080@gmail.com" 
            className="text-foreground hover:text-primary transition-colors duration-300"
            aria-label="Contact via email"
          >
            <MailIcon className="h-5 w-5" />
          </motion.a>
          
          <motion.a 
            whileHover={{ y: -2, color: 'hsl(var(--primary))' }}
            href="https://github.com/0M3REXE" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors duration-300"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="h-5 w-5" />
          </motion.a>
          
          <motion.a 
            whileHover={{ y: -2, color: 'hsl(var(--primary))' }}
            href="https://linkedin.com/0m3r" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors duration-300"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="h-5 w-5" />
          </motion.a>
        
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
