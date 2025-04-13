
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '@/components/Layout/AppLayout';
import DashboardCard from '@/components/Dashboard/DashboardCard';
import { 
  HeartPulseIcon, 
  MoonIcon, 
  ActivityIcon, 
  UtensilsIcon, 
  BookIcon,
  DumbbellIcon,
  SparklesIcon
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  
  // Mock data - in a real app would come from state/API
  const workoutProgress = 75;
  const sleepData = 7.5;
  const calorieProgress = 60;
  
  return (
    <AppLayout>
      <div className="pt-2 pb-4">
        <h1 className="text-2xl font-semibold mb-1">Welcome back!</h1>
        <p className="text-gray-400 text-sm">Here's your wellness summary</p>
      </div>
      
      {/* Activity Cards */}
      <div className="space-y-4">
        <DashboardCard 
          title="Today's Activity" 
          icon={<ActivityIcon className="h-5 w-5" />}
          onClick={() => navigate('/workout')}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">Workout Progress</span>
            <span className="text-sm font-medium">{workoutProgress}%</span>
          </div>
          <Progress value={workoutProgress} className="h-2 bg-deep-dark-accent" />
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center">
              <HeartPulseIcon className="h-5 w-5 mr-2 text-rose-500" />
              <span className="text-sm">Cardio</span>
            </div>
            <div className="flex items-center">
              <DumbbellIcon className="h-5 w-5 mr-2 text-blue-500" />
              <span className="text-sm">Resistance</span>
            </div>
          </div>
        </DashboardCard>
        
        <DashboardCard 
          title="Sleep & Recovery" 
          icon={<MoonIcon className="h-5 w-5" />}
          onClick={() => navigate('/sleep')}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="mr-3">
                <div className="text-xl font-semibold">{sleepData}h</div>
                <div className="text-xs text-gray-400">Last night</div>
              </div>
              <div>
                <div className="text-sm font-medium text-green-400">Recovered</div>
                <div className="text-xs text-gray-400">Feeling good</div>
              </div>
            </div>
            
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
              <SparklesIcon className="h-5 w-5 text-white" />
            </div>
          </div>
        </DashboardCard>
        
        <DashboardCard 
          title="Nutrition" 
          icon={<UtensilsIcon className="h-5 w-5" />}
          onClick={() => navigate('/nutrition')}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">Daily Target</span>
            <span className="text-sm font-medium">1,200 / 2,000 cal</span>
          </div>
          <Progress value={calorieProgress} className="h-2 bg-deep-dark-accent" />
          <div className="mt-3 text-xs text-gray-400">
            Maintenance day: on track for your goals
          </div>
        </DashboardCard>
        
        <DashboardCard 
          title="Journal" 
          icon={<BookIcon className="h-5 w-5" />}
          onClick={() => navigate('/journal')}
        >
          <div className="text-sm text-gray-400 italic">
            "Feeling stronger today. Need to focus on recovery tomorrow."
          </div>
          <div className="mt-2 text-xs text-gray-500">
            Last updated: Today, 9:45 AM
          </div>
        </DashboardCard>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
