import { FC } from 'react';
import { MailIcon, Link2Icon } from 'lucide-react';

interface NavBarProps {
  initials: string;
}

const NavBar: FC<NavBarProps> = ({ initials }) => {
  return (
    <nav className="py-6 px-4 md:px-8 flex justify-between items-center">
      <div className="w-10 h-10 rounded-full bg-secondary border border-primary/30 flex items-center justify-center overflow-hidden">
        <span className="text-primary text-xl font-semibold">{initials}</span>
      </div>
      
      <div className="flex space-x-6">
        <a 
          href="mailto:contact@example.com" 
          className="text-foreground hover:text-primary transition-colors duration-300"
          aria-label="Contact via email"
        >
          <MailIcon className="h-5 w-5" />
        </a>
        <a 
          href="#" 
          className="text-foreground hover:text-primary transition-colors duration-300"
          aria-label="View links"
          onClick={(e) => e.preventDefault()}
        >
          <Link2Icon className="h-5 w-5" />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
