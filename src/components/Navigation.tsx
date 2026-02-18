import { useState, useEffect } from 'react';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '#top' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'More Details', href: '#details' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['top', 'services', 'about', 'details', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Check if we're on the FAQ page
    const isOnFaqPage = window.location.pathname === '/faq';
    
    if (href.startsWith('#')) {
      // If on FAQ page and trying to navigate to a hash, go to home page first
      if (isOnFaqPage) {
        // Let the browser navigate to /#section naturally
        window.location.href = '/' + href;
        return;
      }
      
      // If on home page, smooth scroll to section
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      setIsMenuOpen(false);
    } else {
      // Regular navigation for /faq
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    if (isMenuOpen) {
      const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (!target.closest('nav')) {
          setIsMenuOpen(false);
        }
      };
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isMenuOpen]);

  return (
    <nav className="flex items-center">
      {/* Mobile Menu Toggle Button */}
      <button 
        className="hidden max-[968px]:block bg-transparent border-none cursor-pointer p-2 z-[1002] relative" 
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <span className="flex flex-col w-7 h-6 justify-center gap-[6px]">
          <span 
            className={`
              w-full h-[3px] bg-white rounded-full transition-all duration-300 ease-in-out origin-center
              ${isMenuOpen ? 'rotate-45 translate-y-[9px]' : 'rotate-0 translate-y-0'}
            `}
          ></span>
          <span 
            className={`
              w-full h-[3px] bg-white rounded-full transition-all duration-300 ease-in-out
              ${isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}
            `}
          ></span>
          <span 
            className={`
              w-full h-[3px] bg-white rounded-full transition-all duration-300 ease-in-out origin-center
              ${isMenuOpen ? '-rotate-45 -translate-y-[9px]' : 'rotate-0 translate-y-0'}
            `}
          ></span>
        </span>
      </button>

      {/* Mobile Overlay */}
      <div 
        className={`
          hidden max-[968px]:block fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-[1000]
          ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Navigation Menu */}
      <ul className={`
        flex list-none gap-8 m-0 p-0
        max-[968px]:fixed max-[968px]:top-0 max-[968px]:bottom-0 max-[968px]:h-screen max-[968px]:w-[300px]
        max-[968px]:bg-[var(--color-purple-dark)] max-[968px]:flex-col max-[968px]:pt-24 max-[968px]:px-0 max-[968px]:pb-8 max-[968px]:gap-0
        max-[968px]:shadow-[-8px_0_24px_rgba(0,0,0,0.3)] max-[968px]:transition-transform max-[968px]:duration-300 max-[968px]:ease-in-out max-[968px]:overflow-y-auto max-[968px]:z-[1001]
        ${isMenuOpen ? 'max-[968px]:translate-x-0' : 'max-[968px]:translate-x-full'}
        max-[968px]:right-0
      `}>
        {navLinks.map((link) => {
          const isActive = link.href.substring(1) === activeSection;
          return (
            <li key={link.label} className="relative max-[968px]:border-b max-[968px]:border-white/10">
              <a
                href={link.href}
                className={`
                  text-white font-medium text-base py-2 px-4 rounded-[var(--radius-sm)] transition-all duration-200 block
                  hover:text-[var(--color-accent)] hover:bg-white/5
                  max-[968px]:py-5 max-[968px]:px-8 max-[968px]:w-full max-[968px]:text-lg
                  ${isActive ? 'text-[var(--color-accent)] font-bold after:content-[""] after:absolute after:-bottom-[2px] after:left-4 after:right-4 after:h-[2px] after:bg-[var(--color-accent)] max-[968px]:after:bottom-0 max-[968px]:after:left-0 max-[968px]:after:right-auto max-[968px]:after:w-1 max-[968px]:after:h-full' : ''}
                `}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}