import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Trophy, Star, Medal } from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  progress: number;
  total: number;
  type: 'daily' | 'weekly' | 'milestone';
  icon: 'trophy' | 'star' | 'medal';
  completed: boolean;
}

const iconMap = {
  trophy: Trophy,
  star: Star,
  medal: Medal,
};

interface AchievementCardProps {
  achievement: Achievement;
}

const AchievementCard = ({ achievement }: AchievementCardProps) => {
  const Icon = iconMap[achievement.icon];
  const progress = (achievement.progress / achievement.total) * 100;

  return (
    <Card className={`p-4 ${achievement.completed ? 'border-gold' : ''}`}>
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center space-x-2">
          <div className={`p-2 rounded-full ${achievement.completed ? 'bg-gold text-deep-dark' : 'bg-deep-dark-card text-gold'}`}>
            <Icon className="h-4 w-4" />
          </div>
          <div>
            <h4 className="font-medium">{achievement.title}</h4>
            <p className="text-sm text-muted-foreground">{achievement.description}</p>
          </div>
        </div>
        <Badge variant={achievement.completed ? "default" : "outline"}>
          {achievement.type}
        </Badge>
      </div>
      <Progress value={progress} className="h-2" />
      <p className="text-sm text-muted-foreground mt-2">
        {achievement.progress} / {achievement.total}
      </p>
    </Card>
  );
};

const Achievements = () => {
  // Mock achievements data - would typically come from an API/state
  const achievements: Achievement[] = [
    {
      id: '1',
      title: 'Workout Warrior',
      description: 'Complete 5 workouts this week',
      progress: 3,
      total: 5,
      type: 'weekly',
      icon: 'trophy',
      completed: false,
    },
    {
      id: '2',
      title: 'Sleep Master',
      description: 'Log 7 days of quality sleep',
      progress: 7,
      total: 7,
      type: 'daily',
      icon: 'star',
      completed: true,
    },
    {
      id: '3',
      title: 'Nutrition Expert',
      description: 'Track meals for 30 days',
      progress: 25,
      total: 30,
      type: 'milestone',
      icon: 'medal',
      completed: false,
    },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold mb-4">Goals & Achievements</h3>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement) => (
          <AchievementCard key={achievement.id} achievement={achievement} />
        ))}
      </div>
    </div>
  );
};

export default Achievements;