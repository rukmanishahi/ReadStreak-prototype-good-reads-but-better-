
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BookOpen, MessageSquare, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white bg-opacity-80 backdrop-blur-sm border-b border-soft-pink border-opacity-20 fixed w-full z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="font-serif text-2xl font-semibold text-text-brown flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-accent-pink" />
          <span>ReadStreak</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" exact>Home</NavLink>
          <NavLink to="/books">My Books</NavLink>
          <NavLink to="/chat">Readers Chat</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </div>
        
        <div className="flex md:hidden gap-4">
          <Link to="/" className="p-2">
            <BookOpen className="h-6 w-6 text-text-brown" />
          </Link>
          <Link to="/chat" className="p-2">
            <MessageSquare className="h-6 w-6 text-text-brown" />
          </Link>
          <Link to="/profile" className="p-2">
            <User className="h-6 w-6 text-text-brown" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  exact?: boolean;
}

const NavLink = ({ to, children, exact }: NavLinkProps) => {
  const isActive = window.location.pathname === (exact ? to : `${to}`);
  
  return (
    <Link 
      to={to} 
      className={`relative font-medium text-lg py-1 px-2 transition-all ${
        isActive ? 'text-text-brown' : 'text-text-brown/70 hover:text-text-brown'
      }`}
    >
      {children}
      {isActive && (
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-soft-pink rounded-full"></div>
      )}
    </Link>
  );
};

export default Navbar;
