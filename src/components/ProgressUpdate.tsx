
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';

const ProgressUpdate = () => {
  const [pageCount, setPageCount] = useState<string>('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!pageCount || parseInt(pageCount) < 1) {
      toast({
        title: "Invalid page count",
        description: "Please enter a valid number of pages.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, this would call an API to update the user's progress
    toast({
      title: "Progress updated!",
      description: `You've read ${pageCount} pages today. Great job keeping your streak!`,
      className: "bg-soft-pink text-primary-foreground"
    });
    
    setPageCount('');
  };
  
  return (
    <Card className="bg-white p-5 border border-soft-pink border-opacity-30 rounded-xl book-shadow">
      <h3 className="text-xl mb-4 font-serif">Update Today's Progress</h3>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label htmlFor="pages" className="block text-sm mb-1">
            How many pages did you read today?
          </label>
          <Input
            id="pages"
            type="number"
            min="1"
            placeholder="Number of pages"
            value={pageCount}
            onChange={(e) => setPageCount(e.target.value)}
            className="border-soft-yellow focus:border-soft-pink focus:ring-soft-pink"
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-soft-pink hover:bg-accent-pink text-primary-foreground transition-colors"
        >
          Update Reading Progress
        </Button>
      </form>
    </Card>
  );
};

export default ProgressUpdate;
