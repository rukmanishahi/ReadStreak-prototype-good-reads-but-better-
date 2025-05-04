
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface BookCardProps {
  title: string;
  author: string;
  cover?: string;
  progress?: number;
  totalPages?: number;
  currentPage?: number;
}

const BookCard = ({ 
  title,
  author,
  cover = "https://placehold.co/100x150/FEF7CD/6B4F4F?text=Book", 
  progress = 0,
  totalPages = 0,
  currentPage = 0
}: BookCardProps) => {
  return (
    <Card className="flex bg-white overflow-hidden book-shadow border-soft-pink border-opacity-30 rounded-lg hover:shadow-md transition-shadow">
      <div className="w-24 h-36 flex-shrink-0">
        <img 
          src={cover} 
          alt={`${title} cover`} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-3 flex flex-col flex-grow">
        <h3 className="font-serif font-medium text-lg line-clamp-1">{title}</h3>
        <p className="text-sm text-text-brown/70 mb-2">{author}</p>
        
        <div className="mt-auto">
          <div className="flex justify-between text-xs mb-1">
            <span>{Math.round(progress)}% complete</span>
            <span>{currentPage} of {totalPages} pages</span>
          </div>
          <Progress 
            value={progress} 
            className="h-1.5 bg-soft-yellow"
            indicatorClassName="bg-soft-pink" 
          />
        </div>
      </div>
    </Card>
  );
};

export default BookCard;
