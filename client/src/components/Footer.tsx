import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpIcon } from 'lucide-react';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="py-12 px-4 md:px-10 mt-10 border-t border-muted/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex flex-col space-y-1">
          <p className="text-sm text-muted-foreground font-light">&copy; {currentYear} • Designed with purpose</p>
          <p className="text-xs text-muted-foreground/70 font-light">Built with React, Tailwind CSS, and Framer Motion</p>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="flex items-center justify-center space-x-2 text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <span>Back to top</span>
          <ArrowUpIcon className="h-3 w-3" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
