
import React from 'react';
import AppLayout from '@/components/Layout/AppLayout';
import NutritionForm from '@/components/Forms/NutritionForm';

const Nutrition: React.FC = () => {
  return (
    <AppLayout>
      <div className="pt-2 pb-4">
        <h1 className="text-2xl font-semibold mb-1">Nutrition</h1>
        <p className="text-gray-400 text-sm">Log your meals and calorie targets</p>
      </div>
      
      <NutritionForm />
    </AppLayout>
  );
};

export default Nutrition;
