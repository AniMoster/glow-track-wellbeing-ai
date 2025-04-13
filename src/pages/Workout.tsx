
import React from 'react';
import AppLayout from '@/components/Layout/AppLayout';
import WorkoutForm from '@/components/Forms/WorkoutForm';

const Workout: React.FC = () => {
  return (
    <AppLayout>
      <div className="pt-2 pb-4">
        <h1 className="text-2xl font-semibold mb-1">Workout</h1>
        <p className="text-gray-400 text-sm">Log your cardio and resistance training</p>
      </div>
      
      <WorkoutForm />
    </AppLayout>
  );
};

export default Workout;
