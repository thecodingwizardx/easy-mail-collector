
import { FC } from 'react';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} - All Rights Reserved</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="hover:text-brand-lightBlue transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-lightBlue transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
