
import { Link } from 'react-router-dom';
import { Twitter, Youtube, Twitch, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-gaming-darker border-t border-gaming-light mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/d62c59e4-b4af-4430-9db2-b29abf01fc4c.png" 
                alt="GameVault Logo" 
                className="h-8 w-8 object-contain"
              />
              <span className="text-xl font-gaming font-bold gradient-text">
                GameVault
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Your ultimate destination for gaming reviews, walkthroughs, and esports commentary.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-gaming font-semibold text-neon-blue">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-400 hover:text-neon-purple transition-colors">
                Home
              </Link>
              <Link to="/blog" className="text-gray-400 hover:text-neon-purple transition-colors">
                Latest Posts
              </Link>
              <Link to="/about" className="text-gray-400 hover:text-neon-purple transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-neon-purple transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-gaming font-semibold text-neon-blue">Categories</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/blog" className="text-gray-400 hover:text-neon-purple transition-colors">
                Reviews
              </Link>
              <Link to="/blog" className="text-gray-400 hover:text-neon-purple transition-colors">
                Walkthroughs
              </Link>
              <Link to="/blog" className="text-gray-400 hover:text-neon-purple transition-colors">
                News
              </Link>
              <Link to="/blog" className="text-gray-400 hover:text-neon-purple transition-colors">
                Esports
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-gaming font-semibold text-neon-blue">Stay Updated</h3>
            <p className="text-gray-400 text-sm">
              Get the latest gaming news and reviews delivered to your inbox.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gaming-gray border-gaming-light text-white placeholder-gray-400"
              />
              <Button className="w-full bg-neon-purple hover:bg-neon-purple/90 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gaming-light mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © 2024 GameVault. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-neon-blue">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-neon-red">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-neon-purple">
                <Twitch className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-neon-green">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
