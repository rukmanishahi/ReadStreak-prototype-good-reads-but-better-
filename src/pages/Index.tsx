
import Navbar from '@/components/Navbar';
import StreakCounter from '@/components/StreakCounter';
import ProgressUpdate from '@/components/ProgressUpdate';
import BookCollection from '@/components/BookCollection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BookOpen, MessageSquare, Calendar } from 'lucide-react';

const Index = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-soft-beige pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <header className="text-center my-8">
              <h1 className="text-4xl font-serif font-bold mb-2">ReadStreak</h1>
              <p className="text-lg text-text-brown/80">Track your reading. Build your streak. Connect with readers.</p>
            </header>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <StreakCounter />
              <ProgressUpdate />
            </div>
            
            <BookCollection />
            
            <div className="mt-8 bg-white p-4 rounded-xl border border-soft-pink border-opacity-30 book-shadow">
              <h2 className="text-2xl font-serif mb-4">Explore More</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FeatureCard 
                  icon={<BookOpen className="h-6 w-6 text-accent-pink" />}
                  title="My Books"
                  description="View your collection and track reading progress."
                  linkTo="/books"
                  linkText="View Books"
                />
                <FeatureCard 
                  icon={<MessageSquare className="h-6 w-6 text-accent-pink" />}
                  title="Readers Chat"
                  description="Connect with other readers and discuss books."
                  linkTo="/chat"
                  linkText="Join Chat"
                />
                <FeatureCard 
                  icon={<Calendar className="h-6 w-6 text-accent-pink" />}
                  title="Reading Stats"
                  description="View your reading history and achievements."
                  linkTo="/profile"
                  linkText="See Stats"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkTo: string;
  linkText: string;
}

const FeatureCard = ({ icon, title, description, linkTo, linkText }: FeatureCardProps) => {
  return (
    <div className="bg-soft-yellow p-4 rounded-lg text-center">
      <div className="flex justify-center mb-3">
        {icon}
      </div>
      <h3 className="font-serif font-medium text-lg mb-2">{title}</h3>
      <p className="text-sm mb-3 text-text-brown/80">{description}</p>
      <Button asChild variant="outline" className="border-soft-pink hover:bg-soft-pink hover:text-primary-foreground">
        <Link to={linkTo}>{linkText}</Link>
      </Button>
    </div>
  );
};

export default Index;
