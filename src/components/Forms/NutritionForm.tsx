
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { UtensilsIcon, PlusIcon } from 'lucide-react';
import { toast } from "sonner";

interface Meal {
  id: string;
  type: string;
  description: string;
}

const NutritionForm: React.FC = () => {
  const [targetCalories, setTargetCalories] = useState("");
  const [calorieStatus, setCalorieStatus] = useState("");
  const [meals, setMeals] = useState<Meal[]>([
    { id: "meal-1", type: "Morning", description: "" },
    { id: "meal-2", type: "Lunch", description: "" },
    { id: "meal-3", type: "Dinner", description: "" }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Nutrition data saved!");
    // Reset form or navigate back to dashboard
  };

  const addMeal = () => {
    setMeals([
      ...meals, 
      { 
        id: `meal-${meals.length + 1}`, 
        type: "Snack", 
        description: "" 
      }
    ]);
  };

  const updateMealType = (id: string, value: string) => {
    setMeals(meals.map(meal => 
      meal.id === id ? { ...meal, type: value } : meal
    ));
  };

  const updateMealDescription = (id: string, value: string) => {
    setMeals(meals.map(meal => 
      meal.id === id ? { ...meal, description: value } : meal
    ));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
      <div>
        <div className="flex items-center mb-4">
          <UtensilsIcon className="h-5 w-5 mr-2 text-gold" />
          <h2 className="text-xl font-medium">Nutrition Goals</h2>
        </div>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="targetCalories">Target Calories</Label>
            <Input
              id="targetCalories"
              type="number"
              placeholder="e.g., 2000"
              value={targetCalories}
              onChange={(e) => setTargetCalories(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label>Caloric Status</Label>
            <RadioGroup value={calorieStatus} onValueChange={setCalorieStatus}>
              <div className="grid grid-cols-3 gap-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="deficit" id="deficit" />
                  <Label htmlFor="deficit">Deficit</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="maintenance" id="maintenance" />
                  <Label htmlFor="maintenance">Maintenance</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="surplus" id="surplus" />
                  <Label htmlFor="surplus">Surplus</Label>
                </div>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-3">Meals</h3>
        <div className="space-y-3">
          {meals.map((meal) => (
            <Card key={meal.id} className="p-4 border-deep-dark-accent bg-deep-dark-card">
              <div className="space-y-3">
                <div>
                  <Label htmlFor={`meal-type-${meal.id}`} className="mb-1 block">Meal Type</Label>
                  <Input
                    id={`meal-type-${meal.id}`}
                    placeholder="e.g., Breakfast, Lunch, Dinner"
                    value={meal.type}
                    onChange={(e) => updateMealType(meal.id, e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor={`meal-desc-${meal.id}`} className="mb-1 block">Description</Label>
                  <Textarea
                    id={`meal-desc-${meal.id}`}
                    placeholder="Describe your meal..."
                    value={meal.description}
                    onChange={(e) => updateMealDescription(meal.id, e.target.value)}
                    rows={2}
                  />
                </div>
              </div>
            </Card>
          ))}
          
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={addMeal}
          >
            <PlusIcon className="h-4 w-4 mr-2" /> Add Meal
          </Button>
        </div>
      </div>
      
      <Button type="submit" className="w-full bg-gold hover:bg-gold-dark text-deep-dark">
        Save Nutrition Data
      </Button>
    </form>
  );
};

export default NutritionForm;
