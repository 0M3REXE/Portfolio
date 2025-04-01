import { FC, useEffect, useState } from 'react';

const Footer: FC = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  
  return (
    <footer className="py-6 px-4 md:px-8 flex justify-center items-center">
      <p className="text-sm text-muted-foreground">&copy; {currentYear} • Designed with purpose</p>
    </footer>
  );
};

export default Footer;
