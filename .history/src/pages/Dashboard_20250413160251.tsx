import React from "react";
import { useNavigate } from "react-router-dom";
import AppLayout from "@/components/Layout/AppLayout";
import DashboardCard from "@/components/Dashboard/DashboardCard";
import ProgressChart from "@/components/Dashboard/ProgressChart";
import Achievements from "@/components/Dashboard/Achievements";
import {
  HeartPulseIcon,
  MoonIcon,
  ActivityIcon,
  UtensilsIcon,
  BookIcon,
  DumbbellIcon,
  SparklesIcon,
  Smile,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  // Mock data - in a real app would come from state/API
  const workoutProgress = 75;
  const sleepData = 7.5;
  const calorieProgress = 60;

  const workoutData = [
    { date: "2025-04-07", value: 45 },
    { date: "2025-04-08", value: 30 },
    { date: "2025-04-09", value: 60 },
    { date: "2025-04-10", value: 45 },
    { date: "2025-04-11", value: 50 },
    { date: "2025-04-12", value: 40 },
    { date: "2025-04-13", value: 55 },
  ];

  const sleepChartData = [
    { date: "2025-04-07", value: 7.5 },
    { date: "2025-04-08", value: 6.8 },
    { date: "2025-04-09", value: 8.0 },
    { date: "2025-04-10", value: 7.2 },
    { date: "2025-04-11", value: 7.8 },
    { date: "2025-04-12", value: 7.0 },
    { date: "2025-04-13", value: 7.5 },
  ];

  const moodData = [
    { date: "2025-04-07", value: 8 },
    { date: "2025-04-08", value: 7 },
    { date: "2025-04-09", value: 9 },
    { date: "2025-04-10", value: 8 },
    { date: "2025-04-11", value: 8 },
    { date: "2025-04-12", value: 7 },
    { date: "2025-04-13", value: 9 },
  ];

  return (
    <AppLayout>
      <div className="pt-2 pb-4">
        <h1 className="text-2xl font-semibold mb-1">Welcome back!</h1>
        <p className="text-gray-400 text-sm">Here's your wellness summary</p>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card className="p-4 flex items-center space-x-4">
          <div className="p-3 rounded-full bg-blue-500/10 text-blue-500">
            <ActivityIcon className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Today's Activity</p>
            <h3 className="text-2xl font-semibold">45 mins</h3>
          </div>
        </Card>
        <Card className="p-4 flex items-center space-x-4">
          <div className="p-3 rounded-full bg-purple-500/10 text-purple-500">
            <MoonIcon className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Sleep Quality</p>
            <h3 className="text-2xl font-semibold">7.5 hrs</h3>
          </div>
        </Card>
        <Card className="p-4 flex items-center space-x-4">
          <div className="p-3 rounded-full bg-green-500/10 text-green-500">
            <UtensilsIcon className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Calories</p>
            <h3 className="text-2xl font-semibold">2,100</h3>
          </div>
        </Card>
        <Card className="p-4 flex items-center space-x-4">
          <div className="p-3 rounded-full bg-yellow-500/10 text-yellow-500">
            <Smile className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Mood</p>
            <h3 className="text-2xl font-semibold">Great</h3>
          </div>
        </Card>
      </div>

      {/* Activity Cards */}
      <div className="space-y-4">
        <DashboardCard
          title="Today's Activity"
          icon={<ActivityIcon className="h-5 w-5" />}
          onClick={() => navigate("/workout")}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">Workout Progress</span>
            <span className="text-sm font-medium">{workoutProgress}%</span>
          </div>
          <Progress
            value={workoutProgress}
            className="h-2 bg-deep-dark-accent"
          />
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
          onClick={() => navigate("/sleep")}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="mr-3">
                <div className="text-xl font-semibold">{sleepData}h</div>
                <div className="text-xs text-gray-400">Last night</div>
              </div>
              <div>
                <div className="text-sm font-medium text-green-400">
                  Recovered
                </div>
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
          onClick={() => navigate("/nutrition")}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">Daily Target</span>
            <span className="text-sm font-medium">1,200 / 2,000 cal</span>
          </div>
          <Progress
            value={calorieProgress}
            className="h-2 bg-deep-dark-accent"
          />
          <div className="mt-3 text-xs text-gray-400">
            Maintenance day: on track for your goals
          </div>
        </DashboardCard>

        <DashboardCard
          title="Journal"
          icon={<BookIcon className="h-5 w-5" />}
          onClick={() => navigate("/journal")}
        >
          <div className="text-sm text-gray-400 italic">
            "Feeling stronger today. Need to focus on recovery tomorrow."
          </div>
          <div className="mt-2 text-xs text-gray-500">
            Last updated: Today, 9:45 AM
          </div>
        </DashboardCard>
      </div>

      {/* Progress Charts */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
        <ProgressChart
          title="Workout Duration"
          data={workoutData}
          dataKey="value"
          unit=" min"
          strokeColor="hsl(var(--blue-500))"
        />
        <ProgressChart
          title="Sleep Duration"
          data={sleepChartData}
          dataKey="value"
          unit="h"
          strokeColor="hsl(var(--purple-500))"
        />
        <ProgressChart
          title="Mood Score"
          data={moodData}
          dataKey="value"
          unit="/10"
          strokeColor="hsl(var(--yellow-500))"
        />
      </div>

      {/* Achievements Section */}
      <Achievements />
    </AppLayout>
  );
};

export default Dashboard;
