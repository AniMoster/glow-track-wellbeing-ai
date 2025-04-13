
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  ActivityIcon, 
  HeartPulseIcon, 
  ClockIcon, 
  FlameIcon,
  DumbbellIcon,
  PlusIcon,
  MinusIcon
} from 'lucide-react';
import { toast } from "sonner";

interface ExerciseSet {
  id: string;
  reps: string;
  weight: string;
}

interface ResistanceExercise {
  id: string;
  name: string;
  sets: ExerciseSet[];
}

const WorkoutForm: React.FC = () => {
  // Cardio form state
  const [activityType, setActivityType] = useState("outdoor");
  const [intensity, setIntensity] = useState("");
  const [duration, setDuration] = useState("");
  const [warmupTime, setWarmupTime] = useState("");
  const [restTime, setRestTime] = useState("");
  const [cardioExercise, setCardioExercise] = useState("");

  // Resistance form state
  const [resistanceExercises, setResistanceExercises] = useState<ResistanceExercise[]>([
    {
      id: "exercise-" + Date.now(),
      name: "",
      sets: [{ id: "set-" + Date.now(), reps: "", weight: "" }]
    }
  ]);

  const handleSubmitCardio = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Cardio workout saved!");
    // Reset form or navigate back to dashboard
  };

  const handleSubmitResistance = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Resistance workout saved!");
    // Reset form or navigate back to dashboard
  };

  const addExercise = () => {
    setResistanceExercises([
      ...resistanceExercises,
      {
        id: "exercise-" + Date.now(),
        name: "",
        sets: [{ id: "set-" + Date.now(), reps: "", weight: "" }]
      }
    ]);
  };

  const removeExercise = (exerciseId: string) => {
    setResistanceExercises(resistanceExercises.filter(ex => ex.id !== exerciseId));
  };

  const addSet = (exerciseId: string) => {
    setResistanceExercises(resistanceExercises.map(exercise => {
      if (exercise.id === exerciseId) {
        return {
          ...exercise,
          sets: [...exercise.sets, { id: "set-" + Date.now(), reps: "", weight: "" }]
        };
      }
      return exercise;
    }));
  };

  const removeSet = (exerciseId: string, setId: string) => {
    setResistanceExercises(resistanceExercises.map(exercise => {
      if (exercise.id === exerciseId) {
        return {
          ...exercise,
          sets: exercise.sets.filter(set => set.id !== setId)
        };
      }
      return exercise;
    }));
  };

  const updateExerciseName = (exerciseId: string, name: string) => {
    setResistanceExercises(resistanceExercises.map(exercise => {
      if (exercise.id === exerciseId) {
        return { ...exercise, name };
      }
      return exercise;
    }));
  };

  const updateSetData = (exerciseId: string, setId: string, field: 'reps' | 'weight', value: string) => {
    setResistanceExercises(resistanceExercises.map(exercise => {
      if (exercise.id === exerciseId) {
        return {
          ...exercise,
          sets: exercise.sets.map(set => {
            if (set.id === setId) {
              return { ...set, [field]: value };
            }
            return set;
          })
        };
      }
      return exercise;
    }));
  };

  return (
    <div className="animate-fade-in">
      <Tabs defaultValue="cardio" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="cardio" className="flex items-center gap-2">
            <HeartPulseIcon className="h-4 w-4" />
            <span>Cardio</span>
          </TabsTrigger>
          <TabsTrigger value="resistance" className="flex items-center gap-2">
            <DumbbellIcon className="h-4 w-4" />
            <span>Resistance</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="cardio" className="mt-0">
          <form onSubmit={handleSubmitCardio} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Activity Type</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    type="button"
                    variant={activityType === "outdoor" ? "default" : "outline"}
                    className={activityType === "outdoor" ? "border-gold text-gold" : ""}
                    onClick={() => setActivityType("outdoor")}
                  >
                    Outdoor
                  </Button>
                  <Button
                    type="button"
                    variant={activityType === "indoor" ? "default" : "outline"}
                    className={activityType === "indoor" ? "border-gold text-gold" : ""}
                    onClick={() => setActivityType("indoor")}
                  >
                    Indoor
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="exercise">Exercise</Label>
                <Input 
                  id="exercise" 
                  placeholder={activityType === "outdoor" ? "e.g., Walking, Running, Cycling" : "e.g., Treadmill, Elliptical"} 
                  value={cardioExercise}
                  onChange={(e) => setCardioExercise(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label>Intensity (Heart Rate Zone)</Label>
                <RadioGroup value={intensity} onValueChange={setIntensity}>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="zone1" id="zone1" />
                      <Label htmlFor="zone1">Zone 1</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="zone2" id="zone2" />
                      <Label htmlFor="zone2">Zone 2</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="zone3" id="zone3" />
                      <Label htmlFor="zone3">Zone 3</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="zone4" id="zone4" />
                      <Label htmlFor="zone4">Zone 4</Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>Duration (minutes)</Label>
                <RadioGroup value={duration} onValueChange={setDuration}>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="15-30" id="15-30" />
                      <Label htmlFor="15-30">15-30</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="30-45" id="30-45" />
                      <Label htmlFor="30-45">30-45</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="45-60" id="45-60" />
                      <Label htmlFor="45-60">45-60</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="60-80" id="60-80" />
                      <Label htmlFor="60-80">60-80</Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="warmup">Warm-up (min)</Label>
                  <Input 
                    id="warmup" 
                    placeholder="e.g., 10" 
                    value={warmupTime}
                    onChange={(e) => setWarmupTime(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rest">Rest after sets (min)</Label>
                  <Input 
                    id="rest" 
                    placeholder="e.g., 5" 
                    value={restTime}
                    onChange={(e) => setRestTime(e.target.value)}
                  />
                </div>
              </div>
            </div>
            
            <Button type="submit" className="w-full bg-gold hover:bg-gold-dark text-deep-dark">
              Save Cardio Workout
            </Button>
          </form>
        </TabsContent>
        
        <TabsContent value="resistance" className="mt-0">
          <form onSubmit={handleSubmitResistance} className="space-y-6">
            <div className="space-y-6">
              {resistanceExercises.map((exercise, exerciseIndex) => (
                <Card key={exercise.id} className="p-4 border-deep-dark-accent bg-deep-dark-card">
                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor={`exercise-${exercise.id}`} className="mb-2 block">Exercise {exerciseIndex + 1}</Label>
                      {exerciseIndex > 0 && (
                        <Button 
                          type="button" 
                          variant="ghost" 
                          size="sm"
                          className="h-8 w-8 p-0 text-destructive"
                          onClick={() => removeExercise(exercise.id)}
                        >
                          <MinusIcon className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    <Input
                      id={`exercise-${exercise.id}`}
                      placeholder="e.g., Squat + Press"
                      value={exercise.name}
                      onChange={(e) => updateExerciseName(exercise.id, e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-3">
                    {/* Set Headers */}
                    <div className="grid grid-cols-8 gap-2 text-xs font-medium text-gray-400">
                      <div className="col-span-1">Set</div>
                      <div className="col-span-3">Reps</div>
                      <div className="col-span-3">Weight</div>
                      <div className="col-span-1"></div>
                    </div>
                    
                    {/* Sets */}
                    {exercise.sets.map((set, setIndex) => (
                      <div key={set.id} className="grid grid-cols-8 gap-2 items-center">
                        <div className="col-span-1 text-center">
                          <span className="text-sm">{setIndex + 1}</span>
                        </div>
                        <div className="col-span-3">
                          <Input
                            placeholder="e.g., 10"
                            value={set.reps}
                            onChange={(e) => updateSetData(exercise.id, set.id, 'reps', e.target.value)}
                            className="h-9"
                          />
                        </div>
                        <div className="col-span-3">
                          <Input
                            placeholder="e.g., 50kg"
                            value={set.weight}
                            onChange={(e) => updateSetData(exercise.id, set.id, 'weight', e.target.value)}
                            className="h-9"
                          />
                        </div>
                        <div className="col-span-1 flex justify-center">
                          {setIndex > 0 && (
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="h-7 w-7 p-0"
                              onClick={() => removeSet(exercise.id, set.id)}
                            >
                              <MinusIcon className="h-3 w-3" />
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                    
                    {/* Add Set Button */}
                    {exercise.sets.length < 4 && (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="w-full mt-2 text-sm"
                        onClick={() => addSet(exercise.id)}
                      >
                        <PlusIcon className="h-3 w-3 mr-1" /> Add Set
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
              
              {/* Add Exercise Button */}
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={addExercise}
              >
                <PlusIcon className="h-4 w-4 mr-2" /> Add Exercise
              </Button>
            </div>
            
            <Button type="submit" className="w-full bg-gold hover:bg-gold-dark text-deep-dark">
              Save Resistance Workout
            </Button>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WorkoutForm;
