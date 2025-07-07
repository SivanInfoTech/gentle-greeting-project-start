
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cloud, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { apiService } from '@/lib/api';
import { useToast } from '@/hooks/use-toast';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { toast } = useToast();
  const isLoggedIn = localStorage.getItem('authToken');

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'Why SitCloud', href: '#why-sitcloud' },
    { name: 'Batch Schedule', href: '#batch-schedule' },
    { name: 'Verify Certificate', href: '/verify' },
    { name: 'Contact', href: '#contact' },
  ];

  // Don't show header on auth pages and dashboard
  if (['/login', '/signup', '/dashboard'].includes(location.pathname)) {
    return null;
  }

  const handleLogout = async () => {
    try {
      await apiService.logout();
      toast({
        title: "Logged Out",
        description: "You have been successfully logged out",
      });
      window.location.reload();
    } catch (error) {
      toast({
        title: "Logout Error",
        description: "Failed to logout properly",
        variant: "destructive",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Cloud className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">Sivan InfoTech</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium text-sm"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex space-x-3">
            {isLoggedIn ? (
              <>
                <Link to="/dashboard">
                  <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                    Dashboard
                  </Button>
                </Link>
                <Button 
                  onClick={handleLogout}
                  variant="outline" 
                  className="border-red-300 text-red-700 hover:bg-red-50"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                    Login
                  </Button>
                </Link>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                  Talk to Counselor
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 bg-white">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-slate-600 hover:text-blue-600 transition-colors duration-200 font-medium px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-2 space-y-2">
                {isLoggedIn ? (
                  <>
                    <Link to="/dashboard" className="block">
                      <Button variant="outline" className="w-full border-slate-300 text-slate-700">
                        Dashboard
                      </Button>
                    </Link>
                    <Button 
                      onClick={handleLogout}
                      variant="outline" 
                      className="w-full border-red-300 text-red-700"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="block">
                      <Button variant="outline" className="w-full border-slate-300 text-slate-700">
                        Login
                      </Button>
                    </Link>
                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                      Talk to Counselor
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
