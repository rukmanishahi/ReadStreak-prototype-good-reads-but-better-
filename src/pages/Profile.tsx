
import Navbar from '@/components/Navbar';
import StreakCounter from '@/components/StreakCounter';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, BookOpen, Star } from 'lucide-react';

// Mock reading data for stats
const readingStats = {
  booksCompleted: 24,
  pagesRead: 7834,
  averagePagesPerDay: 21,
  longestStreak: 14,
  currentStreak: 5,
  readingHours: 138
};

// Mock data for reading history
const monthlyReadingData = [
  { month: 'Jan', pages: 450 },
  { month: 'Feb', pages: 380 },
  { month: 'Mar', pages: 520 },
  { month: 'Apr', pages: 610 },
  { month: 'May', pages: 430 },
  { month: 'Jun', pages: 0 }, // Current month (partial)
];

// Mock achievements
const achievements = [
  {
    id: 1,
    title: "5-Day Streak",
    description: "Read for 5 consecutive days",
    icon: <Calendar className="h-8 w-8 text-accent-pink" />,
    unlocked: true,
  },
  {
    id: 2,
    title: "10-Day Streak",
    description: "Read for 10 consecutive days",
    icon: <Calendar className="h-8 w-8 text-accent-pink" />,
    unlocked: false,
  },
  {
    id: 3,
    title: "Bookworm",
    description: "Read 5 complete books",
    icon: <BookOpen className="h-8 w-8 text-accent-pink" />,
    unlocked: true,
  },
  {
    id: 4,
    title: "Literature Expert",
    description: "Read 25 complete books",
    icon: <BookOpen className="h-8 w-8 text-accent-pink" />,
    unlocked: false,
  },
  {
    id: 5,
    title: "Genre Explorer",
    description: "Read books from 5 different genres",
    icon: <Star className="h-8 w-8 text-accent-pink" />,
    unlocked: true,
  }
];

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-soft-beige pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Profile Header */}
            <div className="bg-white mb-6 p-6 rounded-xl border border-soft-pink border-opacity-30 book-shadow">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <Avatar className="h-24 w-24">
                  <AvatarFallback className="text-2xl bg-soft-pink text-primary-foreground">
                    JR
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-grow text-center md:text-left">
                  <h1 className="text-3xl font-serif font-bold">Jane Reader</h1>
                  <p className="text-text-brown/80 mb-3">@janereader • Joined March 2023</p>
                  <p className="mb-4">Book lover, fantasy enthusiast, and aspiring writer. Currently reading The Midnight Library.</p>
                  <Button variant="outline" className="border-soft-pink hover:bg-soft-pink hover:text-primary-foreground">
                    Edit Profile
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Reading Stats */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <StreakCounter currentStreak={readingStats.currentStreak} longestStreak={readingStats.longestStreak} />
              
              <Card className="bg-white p-5 border border-soft-pink border-opacity-30 rounded-xl book-shadow">
                <h3 className="text-xl mb-4 font-serif">Reading Stats</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <StatItem label="Books Completed" value={readingStats.booksCompleted} />
                  <StatItem label="Pages Read" value={readingStats.pagesRead} />
                  <StatItem label="Avg. Pages/Day" value={readingStats.averagePagesPerDay} />
                  <StatItem label="Reading Hours" value={readingStats.readingHours} />
                </div>
              </Card>
            </div>
            
            <Tabs defaultValue="history" className="bg-white p-5 border border-soft-pink border-opacity-30 rounded-xl book-shadow mb-6">
              <TabsList className="bg-soft-beige mb-4">
                <TabsTrigger value="history" className="data-[state=active]:bg-soft-pink data-[state=active]:text-primary-foreground">
                  Reading History
                </TabsTrigger>
                <TabsTrigger value="achievements" className="data-[state=active]:bg-soft-pink data-[state=active]:text-primary-foreground">
                  Achievements
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="history" className="animate-fade-in">
                <h3 className="text-xl mb-4 font-serif">Monthly Reading History</h3>
                
                <div className="h-60 flex items-end justify-between gap-2 mb-4">
                  {monthlyReadingData.map((month) => (
                    <div key={month.month} className="flex flex-col items-center flex-grow">
                      <div 
                        className="w-full bg-soft-pink rounded-t-sm"
                        style={{ height: `${(month.pages / 650) * 100}%` }} 
                      ></div>
                      <span className="text-xs mt-2">{month.month}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center text-sm text-muted-foreground">
                  Total pages read this year: {monthlyReadingData.reduce((sum, month) => sum + month.pages, 0)}
                </div>
              </TabsContent>
              
              <TabsContent value="achievements" className="animate-fade-in">
                <h3 className="text-xl mb-4 font-serif">Reading Achievements</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievements.map((achievement) => (
                    <div 
                      key={achievement.id}
                      className={`border rounded-lg p-4 flex items-center gap-4 ${
                        achievement.unlocked 
                          ? 'border-soft-pink bg-white' 
                          : 'border-dashed border-muted-foreground/30 bg-muted/30'
                      }`}
                    >
                      <div className={`p-2 rounded-full ${achievement.unlocked ? 'bg-soft-yellow' : 'bg-muted'}`}>
                        {achievement.icon}
                      </div>
                      <div>
                        <h4 className={`font-medium ${achievement.unlocked ? '' : 'text-muted-foreground'}`}>
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

interface StatItemProps {
  label: string;
  value: number;
}

const StatItem = ({ label, value }: StatItemProps) => {
  return (
    <div className="bg-soft-yellow p-3 rounded-lg">
      <p className="text-sm text-text-brown/70">{label}</p>
      <p className="text-2xl font-medium">{value}</p>
    </div>
  );
};

export default Profile;
