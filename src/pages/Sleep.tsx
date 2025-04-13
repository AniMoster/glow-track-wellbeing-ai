
import React from 'react';
import AppLayout from '@/components/Layout/AppLayout';
import SleepMoodForm from '@/components/Forms/SleepMoodForm';

const Sleep: React.FC = () => {
  return (
    <AppLayout>
      <div className="pt-2 pb-4">
        <h1 className="text-2xl font-semibold mb-1">Sleep & Recovery</h1>
        <p className="text-gray-400 text-sm">Log your sleep, mood, and recovery activities</p>
      </div>
      
      <SleepMoodForm />
    </AppLayout>
  );
};

export default Sleep;
