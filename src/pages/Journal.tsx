
import React, { useState } from 'react';
import AppLayout from '@/components/Layout/AppLayout';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { BookOpenIcon, SaveIcon } from 'lucide-react';
import { getCurrentDateTimeInfo } from '@/utils/dateUtils';

const Journal: React.FC = () => {
  const [journalEntry, setJournalEntry] = useState('');
  const { formattedDate, formattedTime } = getCurrentDateTimeInfo();
  
  const handleSaveEntry = () => {
    if (journalEntry.trim()) {
      toast.success('Journal entry saved!');
      // In a real app, we would save this to state or backend
    } else {
      toast.error('Please write something before saving.');
    }
  };
  
  return (
    <AppLayout>
      <div className="pt-2 pb-4">
        <h1 className="text-2xl font-semibold mb-1">Journal</h1>
        <p className="text-gray-400 text-sm">Record your thoughts and notes</p>
      </div>
      
      <div className="card mb-4 animate-fade-in">
        <div className="flex items-center mb-4">
          <BookOpenIcon className="h-5 w-5 mr-2 text-gold" />
          <div>
            <h3 className="font-medium">Today's Entry</h3>
            <p className="text-xs text-gray-400">{formattedDate} • {formattedTime}</p>
          </div>
        </div>
        
        <Textarea
          placeholder="Write your thoughts, reflections, or notes about your fitness journey..."
          value={journalEntry}
          onChange={(e) => setJournalEntry(e.target.value)}
          className="min-h-[200px] mb-4"
        />
        
        <Button 
          onClick={handleSaveEntry}
          className="w-full bg-gold hover:bg-gold-dark text-deep-dark"
        >
          <SaveIcon className="h-4 w-4 mr-2" />
          Save Entry
        </Button>
      </div>
    </AppLayout>
  );
};

export default Journal;
