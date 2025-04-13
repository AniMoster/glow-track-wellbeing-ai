
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { MoonIcon, MoveIcon, Lungs } from 'lucide-react';
import { toast } from "sonner";

const SleepMoodForm: React.FC = () => {
  const [sleepHours, setSleepHours] = useState("");
  const [mood, setMood] = useState("");
  const [didStretching, setDidStretching] = useState(false);
  const [didBreathing, setDidBreathing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Sleep and mood data saved!");
    // Reset form or navigate back to dashboard
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
      <div>
        <div className="flex items-center mb-4">
          <MoonIcon className="h-5 w-5 mr-2 text-gold" />
          <h2 className="text-xl font-medium">Sleep</h2>
        </div>
        <div className="space-y-3">
          <Label htmlFor="sleepHours">Hours of Sleep</Label>
          <Input
            id="sleepHours"
            type="number"
            min="0"
            max="24"
            step="0.5"
            placeholder="e.g., 7.5"
            value={sleepHours}
            onChange={(e) => setSleepHours(e.target.value)}
          />
          <p className="text-xs text-gray-400">Enter hours slept (0-24)</p>
        </div>
      </div>
      
      <Separator className="my-6" />
      
      <div>
        <div className="flex items-center mb-4">
          <MoveIcon className="h-5 w-5 mr-2 text-gold" />
          <h2 className="text-xl font-medium">Recovery & Mood</h2>
        </div>
        <div className="space-y-3">
          <Label>How do you feel today?</Label>
          <RadioGroup value={mood} onValueChange={setMood} className="space-y-3">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sore" id="sore" />
              <Label htmlFor="sore" className="cursor-pointer">Sore</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="tight" id="tight" />
              <Label htmlFor="tight" className="cursor-pointer">Tight</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="recovered" id="recovered" />
              <Label htmlFor="recovered" className="cursor-pointer">Recovered</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="good" id="good" />
              <Label htmlFor="good" className="cursor-pointer">Good</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      
      <Separator className="my-6" />
      
      <div>
        <div className="flex items-center mb-4">
          <Lungs className="h-5 w-5 mr-2 text-gold" />
          <h2 className="text-xl font-medium">Recovery Activities</h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="stretching" 
              checked={didStretching} 
              onCheckedChange={(checked) => setDidStretching(checked as boolean)} 
            />
            <Label htmlFor="stretching" className="cursor-pointer">Whole-body stretches</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="breathing" 
              checked={didBreathing} 
              onCheckedChange={(checked) => setDidBreathing(checked as boolean)} 
            />
            <Label htmlFor="breathing" className="cursor-pointer">Breathing exercises</Label>
          </div>
        </div>
      </div>
      
      <Button type="submit" className="w-full bg-gold hover:bg-gold-dark text-deep-dark">
        Save Sleep & Mood Data
      </Button>
    </form>
  );
};

export default SleepMoodForm;
