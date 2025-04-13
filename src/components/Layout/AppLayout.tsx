
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ActivityIcon, MoonIcon, HeartPulseIcon, UtensilsIcon, BookIcon, LayoutDashboardIcon } from 'lucide-react';
import { getCurrentDateTimeInfo } from '@/utils/dateUtils';

const NavItem = ({ to, icon: Icon, label, active }: { 
  to: string; 
  icon: React.ElementType; 
  label: string;
  active: boolean;
}) => (
  <Link 
    to={to}
    className={`flex flex-col items-center justify-center py-3 px-5 md:px-2 transition-all duration-300 ${
      active 
        ? 'text-gold border-t-2 border-gold' 
        : 'text-gray-500 hover:text-gold border-t-2 border-transparent'
    }`}
  >
    <Icon className="h-6 w-6 mb-1" />
    <span className="text-xs">{label}</span>
  </Link>
);

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const location = useLocation();
  const { formattedDate, formattedTime, dayOfWeek } = getCurrentDateTimeInfo();
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-deep-dark to-deep-dark-card text-white">
      {/* Header */}
      <header className="p-4 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-gold flex items-center justify-center mr-3">
              <span className="font-bold text-deep-dark">GT</span>
            </div>
            <h1 className="text-xl font-bold">
              <span className="text-gradient gold-gradient">Glow</span>
              <span className="text-white">Track</span>
            </h1>
          </div>
        </div>
        <div className="text-xs text-gray-400">
          <span>{formattedDate} • {formattedTime} • {dayOfWeek}</span>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-4 pb-20">
        {children}
      </main>
      
      {/* Navigation Bar (Bottom on Mobile) */}
      <nav className="fixed bottom-0 w-full bg-deep-dark-card border-t border-deep-dark-accent z-10">
        <div className="flex justify-around items-center">
          <NavItem to="/dashboard" icon={LayoutDashboardIcon} label="Dashboard" active={location.pathname === '/dashboard'} />
          <NavItem to="/workout" icon={ActivityIcon} label="Workout" active={location.pathname === '/workout'} />
          <NavItem to="/sleep" icon={MoonIcon} label="Sleep" active={location.pathname === '/sleep'} />
          <NavItem to="/nutrition" icon={UtensilsIcon} label="Nutrition" active={location.pathname === '/nutrition'} />
          <NavItem to="/journal" icon={BookIcon} label="Journal" active={location.pathname === '/journal'} />
        </div>
      </nav>
    </div>
  );
};

export default AppLayout;
