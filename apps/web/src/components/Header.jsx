import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Trang Chủ', path: '/' },
    { name: 'Dự Án', path: '/projects' },
    { name: 'Về Chúng Tôi', path: '/about' },
    { name: 'Liên Hệ', path: '/contact' },
    { name: 'Tin Tức', path: '/news' }

  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Branding */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="https://horizons-cdn.hostinger.com/86d8422a-93e6-4f60-849e-fd9aa087ef95/efdfcaa60447c9083787afd7c5d3ab13.png" 
              alt="ApartmentDN Logo" 
              className="h-12 w-auto"
            />
            <div className="hidden md:block">
              <div className="text-sm font-bold text-[#0B1F3B] leading-tight" style={{fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em'}}>
                <div>APARTMENT</div>
                <div className="text-[#D4AF37]">DA NANG</div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-all duration-200 relative ${
                  isActive(item.path)
                    ? 'text-[#D4AF37] font-semibold'
                    : 'text-[#0B1F3B] hover:text-[#D4AF37]'
                }`}
                style={{fontFamily: 'Open Sans, sans-serif'}}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-[#D4AF37]" />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-[#0B1F3B]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-3 text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'text-[#D4AF37] font-semibold'
                    : 'text-[#0B1F3B]'
                }`}
                style={{fontFamily: 'Open Sans, sans-serif'}}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;