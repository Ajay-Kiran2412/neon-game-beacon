
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, Gamepad2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-gaming-dark/95 backdrop-blur-sm border-b border-gaming-light">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Gamepad2 className="h-8 w-8 text-neon-purple group-hover:text-neon-blue transition-colors" />
            <span className="text-2xl font-gaming font-bold gradient-text">
              GameVault
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-gray-300 hover:text-neon-purple transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-purple transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="hidden sm:flex items-center relative">
              <Input
                type="text"
                placeholder="Search games..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-gaming-gray border-gaming-light text-white placeholder-gray-400 pr-10 w-64"
              />
              <Search className="absolute right-3 h-4 w-4 text-gray-400" />
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-300 hover:text-neon-purple"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gaming-light bg-gaming-gray/50 backdrop-blur-sm">
            <nav className="flex flex-col space-y-4 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-gray-300 hover:text-neon-purple transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center relative mt-4">
                <Input
                  type="text"
                  placeholder="Search games..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-gaming-dark border-gaming-light text-white placeholder-gray-400 pr-10"
                />
                <Search className="absolute right-3 h-4 w-4 text-gray-400" />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
