import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Hexagon, LogOut } from 'lucide-react';

const Navbar = () => {
  const { isLoggedIn, logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-accent-blue rounded-xl group-hover:rotate-12 transition-transform duration-300">
            <Hexagon className="w-6 h-6 text-white fill-white/20" />
          </div>
          <span className="text-xl font-bold tracking-tight">Maawabro <span className="text-accent-blue">IT</span></span>
        </Link>

        <div className="flex items-center gap-6">
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Login</Link>
              <Link to="/signup" className="btn-primary text-sm">Get Started</Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Dashboard</Link>
              <div className="h-6 w-px bg-white/10 mx-2" />
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-300">{user?.username}</span>
                <button 
                  onClick={handleLogout}
                  className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-red-400 transition-all"
                  title="Logout"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
