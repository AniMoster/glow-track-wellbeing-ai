import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ActivityIcon, MoonIcon, HeartPulseIcon, UtensilsIcon, BookIcon, LayoutDashboardIcon, User2Icon, LogOutIcon } from 'lucide-react';
import { getCurrentDateTimeInfo } from '@/utils/dateUtils';
import { useAuth } from '@/context/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

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

const AppLayout = ({ children }: AppLayoutProps) => {
  const location = useLocation();
  const { user, logout } = useAuth();
  const { formattedDate, formattedTime } = getCurrentDateTimeInfo();

  return (
    <div className="min-h-screen bg-deep-dark flex flex-col">
      {/* Header */}
      <header className="bg-deep-dark-card border-b border-deep-dark-accent p-4 flex items-center justify-between">
        <div>
          <h2 className="font-semibold text-sm text-gold">{formattedDate}</h2>
          <p className="text-xs text-gray-400">{formattedTime}</p>
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-9 w-9 rounded-full">
              <Avatar className="h-9 w-9">
                <AvatarFallback className="bg-gold/10 text-gold">
                  {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuItem className="flex items-center">
              <User2Icon className="mr-2 h-4 w-4" />
              <span>{user?.name}</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive flex items-center" onClick={logout}>
              <LogOutIcon className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
