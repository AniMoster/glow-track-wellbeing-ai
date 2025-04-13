
import React from 'react';
import { cn } from '@/lib/utils';

interface DashboardCardProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  icon,
  children,
  className,
  onClick
}) => {
  return (
    <div 
      className={cn(
        "card mb-4 transition-all duration-300 hover:border-gold/30", 
        onClick ? "cursor-pointer hover:translate-y-[-2px]" : "",
        className
      )}
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-lg">{title}</h3>
        {icon && <div className="text-gold">{icon}</div>}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardCard;
